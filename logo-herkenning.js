// Compact colour/ink fingerprints of the SuperColoring mark; no image library.
// Reference: https://www.supercoloring.com/media/coloring/1361141/dog (CC BY-NC 4.0).
// JPEG references: SuperColoring media/coloring/343887 and media/coloring/349103.
// Fingerprints describe logo pixels only; the drawings are not bundled.
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
  const variants = [template, ...[
  {
    "aspect": 2.0,
    "colour": [
      "111111000111111110001111111001111111000111111000",
      "111111101111111110001111111101111111000111111110",
      "111101101111111111011111111101111111000111111110",
      "110001001111111111011110111101101100000111111110",
      "111100011111001111011110111101111110000111111110",
      "111111111111111111111111111101111110001111111110",
      "000111100111101111111111111101111110001111111000",
      "000011110111001111011111110001111001001111111000",
      "111011110111111111111110000001111111111111111110",
      "111111110111111111111110100001111111011111011110",
      "111111110111111111111110000001111111011111011110",
      "011111110111111110111110010001111111101111111111",
      "001000000000110000001110000000000000000000001110",
      "000010111100010000000000000000000000000000001100",
      "111101111110111000000000000000001000000010001000",
      "111100111110111000000000000000101010000000001000",
      "111101110110111000000000000000111110000000100000",
      "110001110010111001110000000000011110000000000000",
      "110011110010111001110110000000001110000000000000",
      "110111111110111111111111100000111100000000000000",
      "111111111110111111111110100000011100000000000000",
      "111111011100111111111100100000001100000000000000",
      "011100000100111111011100100000101100000000000000",
      "000000000000000000000000011111111110000000000000",
      "000000000000000000000000011111001000000000000000",
      "000000000000000000001111111111000000000000000000",
      "000000000000000000000001100001000000000000000000",
      "000000000000000000001000000000000000000000000000"
    ],
    "ink": [
      "111111101111111110011111111011111111100111111100",
      "111111101111111110011111111101111111100111111110",
      "111111111111111111011111111101111111100111111110",
      "111001001111111111111110111101111101000111111110",
      "111110001111111111111111111101111110001111111110",
      "111111111111111111111111111101111111001111111110",
      "001111101111101111111111111101111111001111111110",
      "110111110111101111111111111011111111001111111110",
      "111111111111111111111111010101111111111111111110",
      "111111111111111111111110110001111111111111111110",
      "111111111111111111111110000001111111111111011110",
      "111111111111111111111110000001111111111111111111",
      "011111101001111100111110000001111111100011001111",
      "100110111000110000111110111110001000000001001110",
      "111111111110111101100110100001111001011111011010",
      "111111111110111101010010111110111111001101101000",
      "111111111111111101111010101101111111001101101111",
      "110001110111111101111010000001011111000101101100",
      "110001110111111101111110111101011110010001001011",
      "110111111111111111111111101101111101010101101101",
      "111111111110111111111110101110111111010001001011",
      "111111111110111111111110101100111111111111110011",
      "111111101110111111011110111101111110111111011110",
      "000000000000000000000000011111111110000000000000",
      "000000000000000000000000011111001100000000000000",
      "000000000000000000001111111111000000000000000000",
      "000000000000000000000001100000000000000000000000",
      "000000000000000000001000000000000000000000000000"
    ],
    "headerRatio": 0.12,
    "headerInk": [
      "000000010000000001101000000000000000000011001000",
      "010000000000110001101000000000100000000011001000",
      "011011010011100001101010100000101011011011111000",
      "111111111111100001001111100000111011111111101000",
      "011111111110110001111111110001111111111111111000",
      "111011111010110000101010110000101011110001111000",
      "010000000010000000000000000000001000000000000000",
      "011110100000000100011100000000000000000000100000"
    ]
  },
  {
    "aspect": 1.6964285714285714,
    "colour": [
      "000000000000110000100000000000000000000000000000",
      "000000000010110000100000000000000000000000000000",
      "000000000010000000100000000000100000000000000000",
      "001000000010010000100000000000000000000000000000",
      "000000000000001001000000000000010000000000001000",
      "011111100011101111101111110000010111000111111010",
      "011111110111101111001111111101111111100111111110",
      "111111111111101111001111111101111111101111111110",
      "111100110111101111101111011111111111100111111111",
      "111111100011101111101111111111111111000111111111",
      "011111110111100111111111111101111111001111111110",
      "001111111011101111101111111100111111001111111110",
      "111001111011110111111110000001111110001111111100",
      "011111111011111111011110000001111111110111111110",
      "011111110011111111011110000000111111101111111111",
      "001111111001111111001110000000111111111111101111",
      "000111111100111110000110000000111100000000001111",
      "001110011111011000000000000000001100000000000000",
      "011111011111011100000000000000111100000000000000",
      "111110111011111110000000000000101100000000000011",
      "111000111011011100110000000000111110000000000000",
      "111000111111011101111011000000101110000000000000",
      "111111111111111111111111000000101110000000000000",
      "111111111111111111111111000000001110000000000000",
      "001111000000011111100000001111111110000000000000",
      "000000000000000011000000000011111110000000000000",
      "000000000000000000000011111111111110000000000000",
      "000000000000000000000011111110100000000000000000"
    ],
    "ink": [
      "001000001100111001111110000000010001001011101100",
      "001111101111110001110111111000111111111111111100",
      "001111111111111000111111111100111111111111111100",
      "001111111111111000111111111100111111111101111110",
      "011000000001001011000010000000011000000000000000",
      "011111110111101111001111111001111111101111111010",
      "111111111111111111001111111101111111100111111110",
      "111111111111111111001111111111111111101111111111",
      "111101110111111111101111111111111111100111111111",
      "111111100111111111111111111111111111000111111111",
      "011111111111110111111111111111111111001111111111",
      "001111111011111111101111111101111111001111111111",
      "111101111111111111111111111001111111101111111110",
      "111111111111111111111111000001111111111111111111",
      "111111111111111111111111000001111111111111111111",
      "011111111111111111011111000001111111111111111111",
      "000111111100111110011111011111111111110111001111",
      "011110011111011110011100011111111110111111000110",
      "011111111111011111111111010110111100101101011011",
      "111111111111111110111111010111101110100101011111",
      "111100111011111101111101010101111110100111111111",
      "111010111111111101111111010110111110111101101111",
      "111111111111111111111111010110111110111001101111",
      "111111111111111111111111010111011110101001110101",
      "011111101111111111101110111111111110111111011111",
      "001110000000011111100000011111111110000000000000",
      "000000000000010000000011111111111110000000000000",
      "000000000000000000000011111110000100000000000000"
    ]
  }
]];
  const columns = 48, rows = 28;
  const colourful = (r, g, b) => Math.max(r, g, b) - Math.min(r, g, b) > 18;
  const nearby = (mask, x, y) => {
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      if (mask[y + dy]?.[x + dx] === '1') return true;
    }
    return false;
  };

  function inspectCorner(image, corner, template) {
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
    const aspect = template.aspect || 1.7;
    if (coloured < 40 || w < 28 || h < 16 || Math.abs(w / h - aspect) > .25
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
    let score = intersection / Math.max(1, actual + expected - intersection);
    let alignX = 0, alignY = 0;
    // Small JPEG/resize shifts should not change the identity of the lettering.
    // Align the patterns instead of globally lowering the acceptance threshold.
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
      let overlap = 0;
      for (let y = 0; y < rows; y++) for (let x = 0; x < columns; x++) {
        if (mask[y][x] === '1' && template.colour[y + dy]?.[x + dx] === '1') overlap++;
      }
      const alignedScore = overlap / Math.max(1, actual + expected - overlap);
      if (alignedScore > score) { score = alignedScore; alignX = dx; alignY = dy; }
    }
    const precision = matchedActual / Math.max(1, actual), recall = matchedExpected / expected;
    // At fewer than 70 pixels, JPEG artefacts distort individual grid cells.
    // Accept these only with stronger agreement in both neighbourhood measures.
    const smallMatch = w < 70 && score >= .53 && precision >= .96 && recall >= .96;
    if ((!smallMatch && score < .58) || precision < .92 || recall < .92) return null;

    unexpectedInk = 0;
    for (let y = top; y <= bottom; y++) for (let x = left; x <= right; x++) {
      const i = (y * width + x) * 4;
      if (Math.min(data[i], data[i + 1], data[i + 2]) >= 180) continue;
      const tx = Math.min(columns - 1, Math.floor((x - left) * columns / w));
      const ty = Math.min(rows - 1, Math.floor((y - top) * rows / h));
      if (!nearby(template.ink, tx + alignX, ty + alignY)) unexpectedInk++;
    }
    return completeLogoBox(image, { left, top, right, bottom, w, h },
      unexpectedInk / Math.max(1, ink) < .035, score);
  }

  function completeLogoBox(image, core, inkFits, score) {
    const { data, width, height } = image;
    const { left, top, right, bottom, w, h } = core;
    const pad = Math.max(2, Math.ceil(w * .025));
    // Small source images need only one white pixel beyond the existing padding;
    // larger images retain the wider separation from nearby drawing lines.
    const ring = w < 70 ? 1 : Math.max(2, Math.ceil(w * .04));
    const x0 = Math.max(0, left - pad - ring), x1 = Math.min(width, right + pad + ring + 1);
    const y0 = Math.max(0, top - Math.ceil(w * .22)), y1 = Math.min(height, bottom + pad + ring + 1);
    const rw = x1 - x0, rh = y1 - y0;
    const dark = new Uint8Array(rw * rh);
    for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
      const i = (y * width + x) * 4;
      dark[(y - y0) * rw + x - x0] = Math.min(data[i], data[i + 1], data[i + 2]) < 210 ? 1 : 0;
    }
    const components = [];
    for (let start = 0; start < dark.length; start++) {
      if (dark[start] !== 1) continue;
      const queue = [start]; dark[start] = 2;
      let minX = x1, maxX = x0, minY = y1, maxY = y0;
      for (let cursor = 0; cursor < queue.length; cursor++) {
        const cell = queue[cursor], cx = cell % rw, cy = Math.floor(cell / rw);
        minX = Math.min(minX, x0 + cx); maxX = Math.max(maxX, x0 + cx);
        minY = Math.min(minY, y0 + cy); maxY = Math.max(maxY, y0 + cy);
        for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
          const nx = cx + dx, ny = cy + dy;
          if (nx < 0 || ny < 0 || nx >= rw || ny >= rh) continue;
          const next = ny * rw + nx;
          if (dark[next] === 1) { dark[next] = 2; queue.push(next); }
        }
      }
      components.push({ minX, maxX, minY, maxY });
    }
    // The faint tagline consists of separate, small letters above the coloured
    // logo. Include a line of such components, not a fixed amount of whitespace.
    const letters = components.filter(c => c.minY < top && c.maxY <= top + Math.ceil(w * .035)
      && c.minY > y0 && c.minX >= left - pad && c.maxX <= right + pad
      && c.maxY - c.minY + 1 <= Math.ceil(w * .13)
      && c.maxX - c.minX + 1 <= Math.ceil(w * .22));
    let textTop = top;
    if (letters.length >= 3 && Math.max(...letters.map(c => c.maxX)) - Math.min(...letters.map(c => c.minX)) >= w * .35) {
      textTop = Math.min(top, ...letters.map(c => c.minY));
    }
    const box = { x: left - pad, y: textTop - pad, width: w + pad * 2, height: bottom - textTop + 1 + pad * 2 };
    let safe = inkFits;
    let reason = inkFits ? '' : 'overlap';
    if (box.x - ring < 0 || box.y - ring < 0 || box.x + box.width + ring > width
        || box.y + box.height + ring > height) { safe = false; reason = 'edge'; }
    for (let y = Math.max(0, box.y - ring); y < Math.min(height, box.y + box.height + ring); y++) {
      for (let x = Math.max(0, box.x - ring); x < Math.min(width, box.x + box.width + ring); x++) {
        if (x >= box.x && x < box.x + box.width && y >= box.y && y < box.y + box.height) continue;
        const i = (y * width + x) * 4;
        if (Math.min(data[i], data[i + 1], data[i + 2]) < 210) { safe = false; reason = 'overlap'; }
      }
    }
    return { ...box, safe, score, reason };
  }

  window.findSuperColoringLogo = canvas => {
    const image = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
    const w = Math.ceil(image.width * .22), h = Math.ceil(image.height * .22);
    const found = [];
    for (const x of [0, image.width - w]) for (const y of [0, image.height - h]) {
      const matches = variants.map(variant => inspectCorner(image, { x, y, width: w, height: h }, variant)).filter(Boolean);
      // Different fingerprints of the same logo are one candidate. Any overlap
      // warning wins, so a more permissive variant cannot bypass line protection.
      if (matches.length) {
        matches.sort((a, b) => b.score - a.score);
        found.push({ ...matches[0], safe: matches.every(match => match.safe),
          reason: matches.find(match => !match.safe)?.reason || '' });
      }
    }
    // Multiple matches are ambiguous: never erase several regions automatically.
    return found.length === 1 ? found[0] : null;
  };
})();
