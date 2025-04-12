const NEBULITE_preview_width = 200;
const NEBULITE_preview_height = 200;

// Base64-encoded WebP images
const imageData = {
  "croptop_leds": "croptop_leds.png",
  "croptop_top": "croptop_top.png",
};

// Create image elements and draw them into canvases
const canvases = {};
for (let key in imageData) {
  let img = new Image();
  img.onload = function () {
    let canvas = document.createElement('canvas');
    canvas.width = NEBULITE_preview_width;
    canvas.height = NEBULITE_preview_height;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, NEBULITE_preview_width, NEBULITE_preview_height);
    canvases[key] = canvas;
  };
  img.src = imageData[key];
}


function radialGradient(c, x, y, r1, r2, r, g, b) {
  var gradient = c.createRadialGradient(x, y, r1, x, y, r2);

  gradient.addColorStop(0, "rgba(" + r + "," + g + "," + b +",1)");
  gradient.addColorStop(0.5, "rgba(" + r + "," + g + "," + b +",.3)");
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  return gradient;
}

function colorsRGB(colors, offset) {
  // Calculate the actual offset needed (correcting for zero index and N bytes per pixel)
  var adjustedOffset = (offset - 1) * 3;

  // Adjust the offset to wrap around in sets of 3 (for RGB)
  adjustedOffset = adjustedOffset % (colors.length - colors.length % 3);

  // Extract color components
  var r = colors[adjustedOffset % colors.length];
  var g = colors[(adjustedOffset + 1) % colors.length];
  var b = colors[(adjustedOffset + 2) % colors.length];

  var color = "rgb(" + r + "," + g + "," + b + ")";
  // console.log("converted color: ", color);
  return color;
}

function drawFn(c, colors, ledCount) {
      //if the images haven't loaded yet, show some gray
      if (!canvases['croptop_leds'] || ! canvases['croptop_top']) {
        console.log("canvases were not there yet.");
        c.globalCompositeOperation = 'source-over';
        c.fillStyle = "rgb(64,64,64)";
        c.fillRect(0, 0, 200, 200);
        return;
      }

      c.globalCompositeOperation = 'source-over';
      c.fillStyle = "rgb(0,0,0)";
      c.fillRect(0, 0, 200, 200);

      // c.translate(-3.4962871,-38.451492);

      let storedTransform = c.getTransform();

      draw_croptop2021_5__1_0(c, colorsRGB(colors, 5), colorsRGB(colors, 1));
      draw_croptop2021_4__2_0(c, colorsRGB(colors, 4), colorsRGB(colors, 2));
      draw_croptop2021_4__1_0(c, colorsRGB(colors, 4), colorsRGB(colors, 1));
      draw_croptop2021_6__1_1(c, colorsRGB(colors, 6), colorsRGB(colors, 1));
      draw_croptop2021_3__2_2(c, colorsRGB(colors, 3), colorsRGB(colors, 2));
      draw_croptop2021_7__8_3(c, colorsRGB(colors, 7), colorsRGB(colors, 8));

      c.setTransform(storedTransform);

      c.globalCompositeOperation = 'hard-light';
      c.drawImage(canvases['croptop_leds'], 0, 0);
      c.globalCompositeOperation = 'source-over';
      c.drawImage(canvases['croptop_top'], 0, 0);
};



function draw_croptop2021_5__1_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(69.1,82);
  ctx.lineTo(66.7, 107.787);
  ctx.lineTo(64.3, 133.5);
  ctx.lineTo(53, 133.063);
  ctx.lineTo(41.7, 132.7);
  ctx.lineTo(43.9, 107);
  ctx.lineTo(46.1, 81.3);
  ctx.lineTo(48.311, 81.978);
  ctx.lineTo(53.82, 83.072);
  ctx.lineTo(57.1, 83.3);
  ctx.lineTo(60.691, 83.336);
  ctx.lineTo(66.747, 82.583);
  ctx.lineTo(69.1, 82);
  ctx.lineTo(69.1, 82);
  var grd = ctx.createLinearGradient(69.1, 82, 41.7, 132.7);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_croptop2021_4__2_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(166.1,97.7);
  ctx.lineTo(166.1, 98.5);
  ctx.lineTo(166.4, 99.6);
  ctx.lineTo(166.4, 99.762);
  ctx.lineTo(166.4, 100.6);
  ctx.lineTo(166.25, 102.225);
  ctx.lineTo(166.1, 103.1);
  ctx.lineTo(165.6, 104.2);
  ctx.lineTo(164.6, 105.1);
  ctx.lineTo(164.3, 105.4);
  ctx.lineTo(164.1, 109.5);
  ctx.lineTo(163, 114.6);
  ctx.lineTo(162.9, 133.6);
  ctx.lineTo(163.8, 132.8);
  ctx.lineTo(164.7, 125.4);
  ctx.lineTo(164.4, 121.1);
  ctx.lineTo(164.4, 117.8);
  ctx.lineTo(164.9, 115.5);
  ctx.lineTo(166.1, 107.9);
  ctx.lineTo(167.4, 101.4);
  ctx.lineTo(167.4, 99);
  ctx.lineTo(166.4, 97.3);
  ctx.lineTo(166.1, 97.7);
  ctx.lineTo(166.1, 97.7);
  var grd = ctx.createLinearGradient(166.1, 97.7, 162.9, 133.6);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_croptop2021_4__1_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(35.5,97.4);
  ctx.lineTo(38.9, 89.9);
  ctx.lineTo(41.1, 87.1);
  ctx.lineTo(43.8, 83.6);
  ctx.lineTo(46.1, 81.3);
  ctx.lineTo(41.7, 132.7);
  ctx.lineTo(35, 132.1);
  ctx.lineTo(35.5, 108.8);
  ctx.lineTo(35.1, 107.6);
  ctx.lineTo(34.6, 107);
  ctx.lineTo(34.2, 106.4);
  ctx.lineTo(33.7, 105.1);
  ctx.lineTo(33.1, 101.8);
  ctx.lineTo(33.1, 100.9);
  ctx.lineTo(33.1, 100);
  ctx.lineTo(33.8, 98.7);
  ctx.lineTo(35.1, 98);
  var grd = ctx.createLinearGradient(35.5, 97.4, 41.7, 132.7);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_croptop2021_6__1_1(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(72.6,133.1);
  ctx.lineTo(73, 132.8);
  ctx.lineTo(73.1, 131.1);
  ctx.lineTo(73.9, 129.4);
  ctx.lineTo(74.5, 125.7);
  ctx.lineTo(74.3, 121.7);
  ctx.lineTo(75.5, 117.5);
  ctx.lineTo(76, 111.8);
  ctx.lineTo(78.2, 104.1);
  ctx.lineTo(77.6, 101.9);
  ctx.lineTo(77.1, 100.6);
  ctx.lineTo(76.8, 99.1);
  ctx.lineTo(76, 97.1);
  ctx.lineTo(75.1, 95.4);
  ctx.lineTo(74.5, 94.3);
  ctx.lineTo(73.8, 93.2);
  ctx.lineTo(72.8, 91.2);
  ctx.lineTo(72, 88.9);
  ctx.lineTo(70.5, 84.1);
  ctx.lineTo(70.2, 82.6);
  ctx.lineTo(69.1, 82);
  ctx.lineTo(64.3, 133.6);
  ctx.lineTo(71.1, 133.6);
  var grd = ctx.createLinearGradient(72.6, 133.1, 69.1, 82);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_croptop2021_3__2_2(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(118.7,104.4);
  ctx.lineTo(120.5, 115.4);
  ctx.lineTo(121.9, 123.5);
  ctx.lineTo(122.5, 128);
  ctx.lineTo(123.3, 130.2);
  ctx.lineTo(123.5, 131.3);
  ctx.lineTo(124, 132);
  ctx.lineTo(124.7, 132.3);
  ctx.lineTo(125.8, 132.6);
  ctx.lineTo(127.9, 132.8);
  ctx.lineTo(129.8, 132.8);
  ctx.lineTo(131.4, 132.5);
  ctx.lineTo(136.3, 131.4);
  ctx.lineTo(136.1, 130.6);
  ctx.lineTo(134.9, 127.9);
  ctx.lineTo(133.9, 124.5);
  ctx.lineTo(133.9, 121.6);
  ctx.lineTo(132.9, 114.9);
  ctx.lineTo(132.4, 112.4);
  ctx.lineTo(131.5, 109.7);
  ctx.lineTo(131.4, 108.7);
  ctx.lineTo(128.7, 108.8);
  ctx.lineTo(127, 108.7);
  ctx.lineTo(125.2, 108.3);
  ctx.lineTo(122.5, 107.4);
  ctx.lineTo(120.7, 106.2);
  ctx.lineTo(120.3, 105.5);
  var grd = ctx.createLinearGradient(118.7, 104.4, 136.3, 131.4);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_croptop2021_7__8_3(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(141.7,109.9);
  ctx.lineTo(141.6, 111.1);
  ctx.lineTo(141.3, 113.7);
  ctx.lineTo(141.5, 115.8);
  ctx.lineTo(141.3, 121.8);
  ctx.lineTo(141.5, 126.6);
  ctx.lineTo(142, 131.7);
  ctx.lineTo(142.1, 132.8);
  ctx.lineTo(142.9, 133.2);
  ctx.lineTo(144.1, 133.6);
  ctx.lineTo(145.9, 134);
  ctx.lineTo(148.1, 134.2);
  ctx.lineTo(151.1, 134.3);
  ctx.lineTo(153.3, 134.5);
  ctx.lineTo(155.5, 134.5);
  ctx.lineTo(158.7, 134.3);
  ctx.lineTo(161.1, 134.1);
  ctx.lineTo(162.8, 133.6);
  ctx.lineTo(163, 131.9);
  ctx.lineTo(162.7, 123.6);
  ctx.lineTo(162.9, 114.6);
  ctx.lineTo(164, 109.5);
  ctx.lineTo(164.2, 105.4);
  ctx.lineTo(163.2, 106.3);
  ctx.lineTo(161.7, 107.2);
  ctx.lineTo(157.8, 108.3);
  ctx.lineTo(155.4, 108.7);
  ctx.lineTo(152.5, 109.1);
  ctx.lineTo(149.8, 109.1);
  ctx.lineTo(146.8, 109.1);
  ctx.lineTo(143.9, 109.3);
  ctx.lineTo(143, 109.3);
  var grd = ctx.createLinearGradient(141.7, 109.9, 162.8, 133.6);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
