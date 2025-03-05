const NEBULITE_preview_width = 200;
const NEBULITE_preview_height = 200;

function drawFn(ctx, colors, ledCount) {
  const size = NEBULITE_preview_width;
  ctx.globalCompositeOperation = "source-over";
  ctx.clearRect(0, 0, size, size);

  const originalSize = 350;
  const scaleFactor = size / originalSize;

  const arcDistances = [80.6, 100.8, 110.5, 120.1, 140.2, 130.0, 110.2, 90.1, 150.5, 70.5, 100.5, 115.0, 160.6, 155.7, 130.2, 128.8, 90.4, 85.9, 135.0, 145.3].map(distance => distance * scaleFactor);
  const arcThicknesses = [5.8, 9.8, 4.7, 4.0, 7.1, 5.3, 9.6, 9.4, 4.1, 7.2, 6.9, 5.5, 4.8, 9.9, 4.0, 9.5, 8.4, 8.8, 9.9, 4.5].map(thickness => thickness * scaleFactor);
  const numArcs = 20;

  ctx.translate(size / 2, size / 2);
  const stepSize = 360 / ledCount;
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

      ctx.strokeStyle = `rgb(${r},${g},${b})`;
      ctx.globalAlpha = 0.5; // Reduce per-arc opacity to prevent over-brightness
      ctx.lineWidth = arcThicknesses[i % numArcs] * 2;

      for (let j = 0; j < numArcs; j++) {
          let arcRadius = arcDistances[j];
          let arcLength = Math.PI / 40;
          ctx.beginPath();
          ctx.arc(0, arcRadius, arcThicknesses[j] / 2, -arcLength, arcLength);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, -arcRadius, arcThicknesses[j] / 2, -arcLength, arcLength);
          ctx.stroke();
      }
      ctx.rotate((Math.PI * 2) / ledCount);
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
}