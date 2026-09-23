// Compact colour/ink fingerprints of the SuperColoring mark; no image library.
// Reference: https://www.supercoloring.com/media/coloring/1361141/dog (CC BY-NC 4.0).
// Only colour marks isolated on white paper qualify; this is not general inpainting.
(() => {
  const template = {
  "colour": [
    "001000010000110001111000000000000000000011001000",
    "001101110110100001001110110000111011011011111000",
    "011111110110101001111111111000111011011110101000",
    "011101110110110000111010110000101011010011011100",
    "010000000000000000000000000000000000000000000000",
    "011111100001101110001111100000010111000110100000",
    "111111100111101111001111110101111111000111111100",
    "111111110111101111001111111101111111000111111110",
    "111001100111101111001110111101111111000111111110",
    "111100000111101111001110111101111111000111111110",
    "111111100011100111001111111101111111000111111110",
    "000111110011100111001111111101111111001111111110",
    "111001111011100111001111110001111111001111111100",
    "111101111011111111011110000001111111101111011100",
    "111111111011111111011110000001111111101111011110",
    "011111110011111111011110000000111111111111001111",
    "001111100000111100011110000001111111100000001111",
    "000000011110011000000000000000011001010101000100",
    "011110011110011100000010000100011000000001000000",
    "111110111111011100011010001110111100000001000100",
    "111000110011011101110011000001101100000101001111",
    "110000110011011101110011000101001100010000001001",
    "111111111111111100111111000100001100010000000101",
    "111111011111111111011110000110011100010000000001",
    "001111001110111111000110001100111111111110010110",
    "000110000000011111000000011011111100000000001100",
    "000000000000000000000000001111111110000000000000",
    "000000000000000000000111111110000000000000000000"
  ],
  "ink": [
    "001000011000110001111100000000000001000011101000",
    "011111110111100001101110110000111111111011111000",
    "011111110110111001111111111000111111111111101100",
    "011101110111110000111111111000111011010011111100",
    "011000000001000000000000000000000000000000000000",
    "111111100111111111011111111011111111100111111000",
    "111111111111111111011111111111111111100111111100",
    "111111110111111111011111111101111111100111111110",
    "111001100111101111011111111101111111101111111111",
    "111111000111101111011111111101111111001111111111",
    "111111110111101111011111111101111111001111111111",
    "001111110111101111011111111101111111001111111110",
    "111011111111101111011111111001111111101111111100",
    "111111111111111111011110000001111111111111111110",
    "111111111111111111011110000001111111111111011110",
    "111111111011111111011110000001111111111111011111",
    "001111110001111110011110000001111111101111001111",
    "011100111110111100111110111111111101111111001110",
    "111110111111111101000110101110111101001101011011",
    "111111111111111101011010101110111101001111100101",
    "111101110111111101111111100101111111001111101111",
    "111001111111111101111111101101101111010011111111",
    "111111111111111111111111101110101111011011111101",
    "111111111111111111111110100110111111011011100011",
    "111111011110111111011110111111111111111111111111",
    "011110000000111111000000111111111110000000001110",
    "000000000000000000000000001111111110000000000000",
    "000000000000000000000111111110000000000000000000"
  ]
};
  const columns = 48, rows = 28;
  const colourful = (r, g, b) => Math.max(r, g, b) - Math.min(r, g, b) > 18;
  const nearby = (mask, x, y) => {
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      if (mask[y + dy]?.[x + dx] === '1') return true;
    }
    return false;
  };

  function inspectCorner(image, corner) {
    const { data, width, height } = image;
    let left = width, top = height, right = -1, bottom = -1, coloured = 0;
    for (let y = corner.y; y < corner.y + corner.height; y++) {
      for (let x = corner.x; x < corner.x + corner.width; x++) {
        const i = (y * width + x) * 4;
        if (data[i + 3] < 240 || !colourful(data[i], data[i + 1], data[i + 2])) continue;
        left = Math.min(left, x); right = Math.max(right, x);
        top = Math.min(top, y); bottom = Math.max(bottom, y); coloured++;
      }
    }
    const w = right - left + 1, h = bottom - top + 1;
    if (coloured < 40 || w < 28 || h < 16 || w / h < 1.45 || w / h > 1.95
        || w * h > width * height * .035) return null;
    const counts = new Uint32Array(columns * rows), totals = new Uint32Array(columns * rows);
    let unexpectedInk = 0, ink = 0;
    for (let y = top; y <= bottom; y++) for (let x = left; x <= right; x++) {
      const i = (y * width + x) * 4;
      const tx = Math.min(columns - 1, Math.floor((x - left) * columns / w));
      const ty = Math.min(rows - 1, Math.floor((y - top) * rows / h));
      const cell = ty * columns + tx;
      totals[cell]++;
      if (colourful(data[i], data[i + 1], data[i + 2])) counts[cell]++;
      if (Math.min(data[i], data[i + 1], data[i + 2]) < 180) {
        ink++;
        if (!nearby(template.ink, tx, ty)) unexpectedInk++;
      }
    }
    const mask = Array.from({ length: rows }, (_, y) => Array.from({ length: columns }, (_, x) => {
      const i = y * columns + x;
      return counts[i] / Math.max(1, totals[i]) >= .1 ? '1' : '0';
    }).join(''));
    let expected = 0, actual = 0, intersection = 0, matchedActual = 0, matchedExpected = 0;
    for (let y = 0; y < rows; y++) for (let x = 0; x < columns; x++) {
      const a = mask[y][x] === '1', b = template.colour[y][x] === '1';
      if (a) { actual++; if (nearby(template.colour, x, y)) matchedActual++; }
      if (b) { expected++; if (nearby(mask, x, y)) matchedExpected++; }
      if (a && b) intersection++;
    }
    const score = intersection / Math.max(1, actual + expected - intersection);
    if (score < .58 || matchedActual / Math.max(1, actual) < .92
        || matchedExpected / expected < .92) return null;

    // Include antialiased edges, then require a white moat around the full mark.
    // A line crossing the box means that erasing would damage the illustration.
    const pad = Math.max(2, Math.ceil(w * .025));
    const box = { x: left - pad, y: top - pad, width: w + pad * 2, height: h + pad * 2 };
    const ring = Math.max(2, Math.ceil(w * .04));
    let safe = unexpectedInk / Math.max(1, ink) < .035;
    if (box.x - ring < 0 || box.y - ring < 0 || box.x + box.width + ring > width
        || box.y + box.height + ring > height) safe = false;
    for (let y = Math.max(0, box.y - ring); y < Math.min(height, box.y + box.height + ring); y++) {
      for (let x = Math.max(0, box.x - ring); x < Math.min(width, box.x + box.width + ring); x++) {
        if (x >= box.x && x < box.x + box.width && y >= box.y && y < box.y + box.height) continue;
        const i = (y * width + x) * 4;
        if (Math.min(data[i], data[i + 1], data[i + 2]) < 210) safe = false;
      }
    }
    return { ...box, safe, score };
  }

  window.findSuperColoringLogo = canvas => {
    const image = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
    const w = Math.ceil(image.width * .22), h = Math.ceil(image.height * .22);
    const found = [];
    for (const x of [0, image.width - w]) for (const y of [0, image.height - h]) {
      const match = inspectCorner(image, { x, y, width: w, height: h });
      if (match) found.push(match);
    }
    // Multiple matches are ambiguous: never erase several regions automatically.
    return found.length === 1 ? found[0] : null;
  };
})();
