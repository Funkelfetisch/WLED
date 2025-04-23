const NEBULITE_preview_width = 200;
const NEBULITE_preview_height = 200;

function drawFn(ctx, colors, ledCount) {
  const size = NEBULITE_preview_width;
  // use additive blending for brighter arcs
  ctx.globalCompositeOperation = "lighter";
  ctx.clearRect(0, 0, size, size);

  const originalSize = 350;
  const scaleFactor = size / originalSize;

  // multiplier >1 to boost RGB channels
  const brightness = 1;
  const thicknessScale = 1.6

  // build and sort distances
  const arcDistances = [
    24, 30, 40, 50.6, 58.2, 60.5, 69.1, 70.6, 85.9,
    90.1, 90.4, 100.8, 105.5, 110.5, 115.0, 127.8,
    130.0, 135.0, 140.2, 145.3, 150.5, 155.7
  ].map(d => d * scaleFactor);

  const arcThicknesses = [
    5.8, 6.8, 4.7, 4.0, 7.1, 5.3, 9.6, 9.4,
    4.1, 7.2, 6.9, 5.5, 4.8, 9.9, 4.0, 9.5,
    8.4, 8.8, 9.9, 4.5, 7.0, 5.8, 4.9, 6.2,
  ].map(d => d * thicknessScale);                                 // thicknesses stay as‑is

  const numArcs = ledCount;

  ctx.translate(size / 2, size / 2);
  const stepSize = 360 / ledCount;
  const stepSizeRad = (Math.PI * 2) / ledCount;
  const halfStep    = stepSizeRad / 2.2;
  ctx.lineCap  = "butt";    // straight ends, no bulge
  ctx.lineJoin = "round";      // ← ensure joins are rounded, not mitered

  for (let i = 0; i < 360; i += stepSize) {
      let ledIndex = Math.floor(i / stepSize);
      let colorIndex = ledIndex * 3; // Adjusted for fewer LEDs
      let r = colors[colorIndex] || 0;
      let g = colors[colorIndex + 1] || 0;
      let b = colors[colorIndex + 2] || 0;

      // Interpolate colors for skipped LEDs
      if (r === 0 && g === 0 && b === 0) {
          let prevIndex = (ledIndex - 1 + ledCount) % ledCount;
          let nextIndex = (ledIndex + 1) % ledCount;
          let prevColorIndex = prevIndex * 3;
          let nextColorIndex = nextIndex * 3;
          let prevR = colors[prevColorIndex] || 0;
          let prevG = colors[prevColorIndex + 1] || 0;
          let prevB = colors[prevColorIndex + 2] || 0;
          let nextR = colors[nextColorIndex] || 0;
          let nextG = colors[nextColorIndex + 1] || 0;
          let nextB = colors[nextColorIndex + 2] || 0;
          r = (prevR + nextR) / 2;
          g = (prevG + nextG) / 2;
          b = (prevB + nextB) / 2;
      }

      // apply brightness multiplier and clamp
      r = Math.min(255, r * brightness);
      g = Math.min(255, g * brightness);
      b = Math.min(255, b * brightness);

      ctx.globalAlpha = 1; // Reduce per-arc opacity to prevent over-brightness

      // draw every arc, alternating between original and opposite‐side colors
      for (let j = 0; j < arcDistances.length; j++) {
          const arcRadius = arcDistances[j];
          const thickness = arcThicknesses[j] / 7;
          ctx.lineWidth = thickness;
          ctx.beginPath();

          const eps = thickness / 2 / arcRadius;

          if (j % 2 === 0) {
              // even arcs: opposite‐side color
              const oppLed = (ledIndex + ledCount / 2) % ledCount;
              const ci = oppLed * 3;
              let rOpp = colors[ci]     || 0;
              let gOpp = colors[ci + 1] || 0;
              let bOpp = colors[ci + 2] || 0;
              // brighten opposite color too
              rOpp = Math.min(255, rOpp * brightness);
              gOpp = Math.min(255, gOpp * brightness);
              bOpp = Math.min(255, bOpp * brightness);
              ctx.strokeStyle = `rgb(${rOpp},${gOpp},${bOpp})`;
          } else {
              // odd arcs: current LED color
              ctx.strokeStyle = `rgb(${r},${g},${b})`;
          }

          ctx.globalAlpha = 0.8;
          ctx.arc(
            0, 0, arcRadius,
            -halfStep - eps / 2,
             halfStep + eps / 2
          );
          ctx.stroke();
      }
      ctx.rotate(stepSizeRad);
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
}