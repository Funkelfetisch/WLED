const NEBULITE_preview_width = 200;
const NEBULITE_preview_height = 200;

// PNG image URLs hosted on the server
const imageData = {
  "jacket_leds": "/jacket_leds.png",
  "jacket_top": "/jacket_top.png",
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
};


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
  return color;
}

function drawFn(c, colors, ledCount) {
  //if the images haven't loaded yet, show some gray
  if (!canvases['jacket_leds'] || ! canvases['jacket_top']) {
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = "rgb(64,64,64)";
    c.fillRect(0, 0, 200, 200);
    return;
  }

  c.globalCompositeOperation = 'source-over';
  c.fillStyle = "rgb(0,0,0)";
  c.fillRect(0, 0, 200, 200);

  c.globalCompositeOperation = 'lighter';

  let storedTransform = c.getTransform();

  // let bpTransform = [.23,.04,-.04,.8,25,15];
  // c.transform.apply(c, bpTransform);


  var ctx = c;
  let i = 0;

  c.translate(-3.4962871,-38.451492);

  var leftOffset = 0;
  var rightOffset = 19;
  var headOffset = 38;

  i = leftOffset;
  draw_arm_10_u_0(ctx, colorsRGB(colors, 10 + i), colorsRGB(colors, 18 + i));
  draw_arm_13_18_0(ctx, colorsRGB(colors, 13 + i), colorsRGB(colors, 18 + i));
  i = rightOffset;
  draw_arm_r_9_u_0(ctx, colorsRGB(colors, 9 + i), colorsRGB(colors, 19 + i));
  draw_armr_10_u_0(ctx, colorsRGB(colors, 10 + i), colorsRGB(colors, 17 + i));
  draw_armr_13_18_0(ctx, colorsRGB(colors, 13 + i), colorsRGB(colors, 18 + i));
  draw_armr_9_u_0(ctx, colorsRGB(colors, 9 + i), colorsRGB(colors, 19 + i));
  i = leftOffset;
  draw_body_11_4_0(ctx, colorsRGB(colors, 11 + i), colorsRGB(colors, 4 + i));
  draw_body_12_3_0(ctx, colorsRGB(colors, 12 + i), colorsRGB(colors, 3 + i));
  draw_body_7_6_0(ctx, colorsRGB(colors, 7 + i), colorsRGB(colors, 6 + i));
  draw_body_8_5_0(ctx, colorsRGB(colors, 8 + i), colorsRGB(colors, 5 + i));
  i = rightOffset;
  draw_bodyr_11_4_0(ctx, colorsRGB(colors, 11 + i), colorsRGB(colors, 4 + i));
  draw_bodyr_7_6_0(ctx, colorsRGB(colors, 7 + i), colorsRGB(colors, 6 + i));
  draw_bodyr_8_5_0(ctx, colorsRGB(colors, 8 + i), colorsRGB(colors, 5 + i));
  i = headOffset;
  draw_head_10_1_0(ctx, colorsRGB(colors, 10 + i), colorsRGB(colors, 1 + i));
  draw_head_5_4_0(ctx, colorsRGB(colors, 5 + i), colorsRGB(colors, 4 + i));
  draw_head_6_3_0(ctx, colorsRGB(colors, 6 + i), colorsRGB(colors, 3 + i));
  draw_head_7_5_0(ctx, colorsRGB(colors, 7 + i), colorsRGB(colors, 5 + i));
  draw_head_8_2_0(ctx, colorsRGB(colors, 8 + i), colorsRGB(colors, 2 + i));
  draw_head_9_6_0(ctx, colorsRGB(colors, 9 + i), colorsRGB(colors, 6 + i));
  i = headOffset;
  draw_head2_10_5_0(ctx, colorsRGB(colors, 10 + i), colorsRGB(colors, 5 + i));
  draw_head2_12_6_0(ctx, colorsRGB(colors, 12 + i), colorsRGB(colors, 6 + i));
  draw_head2_7_3_0(ctx, colorsRGB(colors, 7 + i), colorsRGB(colors, 3 + i));
  draw_head2_8_4_0(ctx, colorsRGB(colors, 8 + i), colorsRGB(colors, 4 + i));
  i = rightOffset;
  draw_arm2_10_u_0(ctx, colorsRGB(colors, 10 + i), colorsRGB(colors, 17 + i));
  draw_arm2_13_18_0(ctx, colorsRGB(colors, 13 + i), colorsRGB(colors, 18 + i));
  draw_arm2_14_19_0(ctx, colorsRGB(colors, 14 + i), colorsRGB(colors, 19 + i));
  i = rightOffset;
  draw_body2_11_4_0(ctx, colorsRGB(colors, 11 + i), colorsRGB(colors, 4 + i));
  draw_body2_12_3_0(ctx, colorsRGB(colors, 12 + i), colorsRGB(colors, 3 + i));
  draw_body2_15_2_0(ctx, colorsRGB(colors, 15 + i), colorsRGB(colors, 2 + i));
  draw_body2_16_1_0(ctx, colorsRGB(colors, 16 + i), colorsRGB(colors, 1 + i));
  i = leftOffset;
  draw_body2l_12_3_0(ctx, colorsRGB(colors, 12 + i), colorsRGB(colors, 3 + i));
  draw_body2l_15_2_0(ctx, colorsRGB(colors, 15 + i), colorsRGB(colors, 2 + i));
  draw_body2l_16_1_0(ctx, colorsRGB(colors, 16 + i), colorsRGB(colors, 1 + i));
  i = leftOffset;
  draw_arm2l_14_19_0(ctx, colorsRGB(colors, 14 + i), colorsRGB(colors, 19 + i));

  c.setTransform(storedTransform);

  // c.globalAlpha = 1;
  c.globalCompositeOperation = 'hard-light';
  c.drawImage(canvases['jacket_leds'], 0, 0);
  c.globalCompositeOperation = 'source-over';
  c.drawImage(canvases['jacket_top'], 0, 0);
  // c.globalAlpha = 1;
};



function draw_head_9_6_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(73.655,73.145);
  ctx.lineTo(78.524, 74.02);
  ctx.lineTo(83.381, 74.933);
  ctx.lineTo(90.611, 78.449);
  ctx.lineTo(97.842, 81.965);
  ctx.lineTo(98.778, 89.248);
  ctx.lineTo(99.713, 96.531);
  ctx.lineTo(98.055, 99.469);
  ctx.lineTo(96.481, 102.446);
  ctx.lineTo(95.209, 105.961);
  ctx.lineTo(93.89, 109.447);
  ctx.lineTo(91.089, 112.611);
  ctx.lineTo(88.288, 115.775);
  ctx.lineTo(89.204, 118.224);
  ctx.lineTo(90.12, 120.674);
  ctx.lineTo(86.411, 122.321);
  ctx.lineTo(82.702, 123.967);
  ctx.lineTo(77.941, 123.676);
  ctx.lineTo(73.18, 123.385);
  ctx.lineTo(72.883, 101.539);
  ctx.lineTo(72.585, 79.693);
  var grd = ctx.createLinearGradient(73.655, 73.145, 82.702, 123.967);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_head_7_5_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(74.65,68.079);
  ctx.lineTo(85.045, 71.386);
  ctx.lineTo(91.943, 78.568);
  ctx.lineTo(103.093, 81.497);
  ctx.lineTo(99.713, 96.531);
  ctx.lineTo(93.967, 109.36);
  ctx.lineTo(94.346, 113.787);
  ctx.lineTo(92.545, 117.706);
  ctx.lineTo(90.12, 120.674);
  ctx.lineTo(90.12, 120.674);
  ctx.lineTo(88.288, 115.775);
  ctx.lineTo(93.967, 109.36);
  ctx.lineTo(99.713, 96.531);
  ctx.lineTo(97.842, 81.965);
  ctx.lineTo(83.276, 74.883);
  ctx.lineTo(73.655, 73.145);
  var grd = ctx.createLinearGradient(74.65, 68.079, 90.12, 120.674);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_head_5_4_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(74.65,68.079);
  ctx.lineTo(77.196, 62.12);
  ctx.lineTo(109.736, 76.018);
  ctx.lineTo(108.333, 81.832);
  ctx.lineTo(91.943, 78.568);
  ctx.lineTo(85.045, 71.386);
  var grd = ctx.createLinearGradient(74.65, 68.079, 108.333, 81.832);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_head_10_1_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(72.585,79.693);
  ctx.lineTo(73.655, 73.145);
  ctx.lineTo(66.839, 75.016);
  ctx.lineTo(58.42, 78.691);
  ctx.lineTo(47.997, 89.649);
  ctx.lineTo(50.068, 104.015);
  ctx.lineTo(55.614, 113.102);
  ctx.lineTo(59.89, 115.307);
  ctx.lineTo(63.498, 118.581);
  ctx.lineTo(61.227, 121.521);
  ctx.lineTo(66.335, 123.509);
  ctx.lineTo(73.18, 123.385);
  ctx.lineTo(67.574, 111.031);
  ctx.lineTo(57.338, 101.259);
  ctx.lineTo(61.694, 88.446);
  var grd = ctx.createLinearGradient(72.585, 79.693, 66.335, 123.509);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_head_8_2_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(74.65,68.079);
  ctx.lineTo(73.655, 73.145);
  ctx.lineTo(66.839, 75.016);
  ctx.lineTo(58.42, 78.691);
  ctx.lineTo(47.997, 89.649);
  ctx.lineTo(50.068, 104.015);
  ctx.lineTo(55.614, 113.102);
  ctx.lineTo(59.89, 115.307);
  ctx.lineTo(63.498, 118.581);
  ctx.lineTo(61.227, 121.521);
  ctx.lineTo(59.489, 119.049);
  ctx.lineTo(58.492, 115.382);
  ctx.lineTo(55.614, 113.102);
  ctx.lineTo(50.068, 104.015);
  ctx.lineTo(47.997, 89.649);
  ctx.lineTo(57.217, 74.482);
  ctx.lineTo(74.65, 68.079);
  var grd = ctx.createLinearGradient(74.65, 68.079, 61.227, 121.521);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_head_6_3_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(74.65,68.079);
  ctx.lineTo(77.196, 62.12);
  ctx.lineTo(40.935, 78.51);
  ctx.lineTo(57.217, 74.482);
  var grd = ctx.createLinearGradient(74.65, 68.079, 40.935, 78.51);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_head2_8_4_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(120.894,93.124);
  ctx.lineTo(119.959, 87.244);
  ctx.lineTo(117.821, 84.17);
  ctx.lineTo(117.219, 75.551);
  ctx.lineTo(117.62, 65.862);
  ctx.lineTo(122.698, 49.091);
  ctx.lineTo(126.24, 50.294);
  ctx.lineTo(126.975, 74.348);
  ctx.lineTo(126.039, 82.232);
  ctx.lineTo(130.65, 88.112);
  ctx.lineTo(131.385, 91.988);
  ctx.lineTo(126.44, 92.656);
  ctx.lineTo(120.894, 93.124);
  var grd = ctx.createLinearGradient(120.894, 93.124, 122.698, 49.091);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_head2_10_5_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(129.046,49.692);
  ctx.lineTo(135.594, 57.176);
  ctx.lineTo(137.398, 64.192);
  ctx.lineTo(137.732, 75.885);
  ctx.lineTo(137.265, 80.762);
  ctx.lineTo(133.79, 87.912);
  ctx.lineTo(135.594, 91.854);
  ctx.lineTo(131.385, 91.988);
  ctx.lineTo(130.65, 88.112);
  ctx.lineTo(126.039, 82.232);
  ctx.lineTo(126.975, 74.348);
  ctx.lineTo(126.24, 50.294);
  var grd = ctx.createLinearGradient(129.046, 49.692, 135.594, 91.854);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_head2_12_6_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(144.147,64.125);
  ctx.lineTo(151.43, 73.68);
  ctx.lineTo(145.483, 90.852);
  ctx.lineTo(139.336, 93.124);
  ctx.lineTo(137.666, 92.99);
  ctx.lineTo(135.594, 91.854);
  ctx.lineTo(133.79, 87.912);
  ctx.lineTo(137.265, 80.762);
  ctx.lineTo(137.732, 75.885);
  ctx.lineTo(137.398, 64.192);
  ctx.lineTo(135.594, 57.176);
  var grd = ctx.createLinearGradient(144.147, 64.125, 137.666, 92.99);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_head2_7_3_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(120.761,50.895);
  ctx.lineTo(121.763, 52.098);
  ctx.lineTo(117.62, 65.862);
  ctx.lineTo(117.219, 75.551);
  ctx.lineTo(117.821, 84.17);
  ctx.lineTo(119.959, 87.244);
  ctx.lineTo(120.894, 93.124);
  ctx.lineTo(114.413, 92.856);
  ctx.lineTo(109.268, 92.322);
  ctx.lineTo(110.605, 74.682);
  ctx.lineTo(117.888, 53.701);
  var grd = ctx.createLinearGradient(120.761, 50.895, 109.268, 92.322);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_arm2l_14_19_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(113.21,92.522);
  ctx.lineTo(112.609, 93.391);
  ctx.lineTo(108.6, 94.861);
  ctx.lineTo(105.126, 97.801);
  ctx.lineTo(101.584, 101.409);
  ctx.lineTo(95.704, 103.948);
  ctx.lineTo(98.444, 98.87);
  ctx.lineTo(109.268, 92.322);
  var grd = ctx.createLinearGradient(113.21, 92.522, 95.704, 103.948);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_body2l_12_3_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(113.21,92.522);
  ctx.lineTo(111.273, 94.727);
  ctx.lineTo(107.264, 97.333);
  ctx.lineTo(101.718, 107.824);
  ctx.lineTo(96.773, 112.902);
  ctx.lineTo(96.573, 114.773);
  ctx.lineTo(94.346, 113.787);
  ctx.lineTo(93.967, 109.36);
  ctx.lineTo(95.704, 103.948);
  ctx.lineTo(101.584, 101.409);
  ctx.lineTo(108.6, 94.861);
  var grd = ctx.createLinearGradient(113.21, 92.522, 94.346, 113.787);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_body2l_15_2_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(113.21,92.522);
  ctx.lineTo(114.547, 92.923);
  ctx.lineTo(112.275, 98.068);
  ctx.lineTo(110.337, 105.552);
  ctx.lineTo(109.535, 111.766);
  ctx.lineTo(110.738, 125.931);
  ctx.lineTo(105.839, 117.796);
  ctx.lineTo(96.573, 114.773);
  ctx.lineTo(96.773, 112.902);
  ctx.lineTo(101.718, 107.824);
  ctx.lineTo(107.264, 97.333);
  ctx.lineTo(111.273, 94.727);
  ctx.lineTo(113.21, 92.522);
  var grd = ctx.createLinearGradient(113.21, 92.522, 110.738, 125.931);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_body2l_16_1_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(114.547,92.923);
  ctx.lineTo(120.894, 93.124);
  ctx.lineTo(118.489, 107.089);
  ctx.lineTo(115.549, 121.989);
  ctx.lineTo(114.614, 134.484);
  ctx.lineTo(112.788, 129.021);
  ctx.lineTo(110.738, 125.931);
  ctx.lineTo(110.872, 121.722);
  ctx.lineTo(109.535, 111.766);
  ctx.lineTo(110.337, 105.552);
  ctx.lineTo(112.275, 98.068);
  ctx.lineTo(114.547, 92.923);
  var grd = ctx.createLinearGradient(114.547, 92.923, 114.614, 134.484);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_body2_16_1_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(120.894,93.124);
  ctx.lineTo(125.638, 92.723);
  ctx.lineTo(124.035, 98.87);
  ctx.lineTo(121.229, 114.505);
  ctx.lineTo(117.687, 142.168);
  ctx.lineTo(114.614, 134.484);
  ctx.lineTo(115.549, 121.989);
  ctx.lineTo(120.894, 93.124);
  var grd = ctx.createLinearGradient(120.894, 93.124, 117.687, 142.168);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_body2_15_2_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(125.638,92.723);
  ctx.lineTo(127.309, 92.456);
  ctx.lineTo(133.189, 101.877);
  ctx.lineTo(122.097, 154.863);
  ctx.lineTo(117.687, 142.168);
  ctx.lineTo(124.035, 98.87);
  ctx.lineTo(125.638, 92.723);
  var grd = ctx.createLinearGradient(125.638, 92.723, 122.097, 154.863);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_body2_12_3_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(133.189,101.877);
  ctx.lineTo(136.262, 107.957);
  ctx.lineTo(141.608, 120.252);
  ctx.lineTo(148.824, 144.439);
  ctx.lineTo(150.895, 160.877);
  ctx.lineTo(151.764, 176.846);
  ctx.lineTo(130.516, 177.514);
  ctx.lineTo(125.572, 163.148);
  ctx.lineTo(122.097, 154.863);
  ctx.lineTo(133.189, 101.877);
  var grd = ctx.createLinearGradient(133.189, 101.877, 151.764, 176.846);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_arm2_13_18_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(127.309,92.456);
  ctx.lineTo(128.37, 92.316);
  ctx.lineTo(134.229, 95.813);
  ctx.lineTo(141.032, 100.254);
  ctx.lineTo(145.001, 103.986);
  ctx.lineTo(157.711, 126.334);
  ctx.lineTo(163.427, 135.925);
  ctx.lineTo(166.499, 141.359);
  ctx.lineTo(176.657, 147.265);
  ctx.lineTo(200.8, 156.572);
  ctx.lineTo(195.555, 162.289);
  ctx.lineTo(155.773, 146.462);
  ctx.lineTo(150.671, 140.981);
  ctx.lineTo(148.356, 138.382);
  ctx.lineTo(146.891, 133.327);
  ctx.lineTo(145.379, 132.949);
  ctx.lineTo(141.608, 120.252);
  ctx.lineTo(133.189, 101.877);
  ctx.lineTo(127.309, 92.456);
  var grd = ctx.createLinearGradient(127.309, 92.456, 195.555, 162.289);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_arm2_14_19_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(128.37,92.316);
  ctx.lineTo(131.385, 91.988);
  ctx.lineTo(135.594, 91.854);
  ctx.lineTo(137.666, 92.99);
  ctx.lineTo(153.411, 94.065);
  ctx.lineTo(165.979, 124.397);
  ctx.lineTo(167.821, 129.264);
  ctx.lineTo(166.593, 133.185);
  ctx.lineTo(166.924, 136.729);
  ctx.lineTo(168.294, 139.422);
  ctx.lineTo(174.578, 139.422);
  ctx.lineTo(177.885, 140.934);
  ctx.lineTo(180.058, 140.508);
  ctx.lineTo(183.507, 142.493);
  ctx.lineTo(207.792, 148.54);
  ctx.lineTo(200.8, 156.572);
  ctx.lineTo(176.657, 147.265);
  ctx.lineTo(166.499, 141.359);
  ctx.lineTo(145.001, 103.986);
  ctx.lineTo(141.032, 100.254);
  ctx.lineTo(128.37, 92.316);
  var grd = ctx.createLinearGradient(128.37, 92.316, 207.792, 148.54);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_arm2_10_u_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(148.261,92.647);
  ctx.lineTo(169.333, 126.854);
  ctx.lineTo(166.593, 133.185);
  ctx.lineTo(166.924, 136.729);
  ctx.lineTo(168.294, 139.422);
  ctx.lineTo(174.578, 139.422);
  ctx.lineTo(177.885, 140.934);
  ctx.lineTo(180.058, 140.508);
  ctx.lineTo(183.507, 142.493);
  ctx.lineTo(207.792, 148.54);
  ctx.lineTo(207.887, 143.201);
  ctx.lineTo(166.593, 133.185);
  ctx.lineTo(169.27, 126.933);
  var grd = ctx.createLinearGradient(148.261, 92.647, 207.792, 148.54);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_body2_11_4_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(145.379,132.949);
  ctx.lineTo(146.891, 133.327);
  ctx.lineTo(148.356, 138.382);
  ctx.lineTo(155.773, 146.462);
  ctx.lineTo(157.474, 158.557);
  ctx.lineTo(150.895, 160.877);
  ctx.lineTo(148.824, 144.439);
  ctx.lineTo(145.379, 132.949);
  var grd = ctx.createLinearGradient(145.379, 132.949, 150.895, 160.877);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_arm_10_u_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(94.683,117.839);
  ctx.lineTo(102.999, 119.54);
  ctx.lineTo(107.693, 124.182);
  ctx.lineTo(111.155, 140.573);
  ctx.lineTo(114.307, 145.912);
  ctx.lineTo(128.512, 203.451);
  ctx.lineTo(130.591, 216.415);
  ctx.lineTo(125.866, 217.36);
  ctx.lineTo(124.354, 204.585);
  ctx.lineTo(109.424, 172.268);
  ctx.lineTo(100.542, 143.92);
  ctx.lineTo(101.676, 128.801);
  var grd = ctx.createLinearGradient(94.683, 117.839, 130.591, 216.415);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_arm_r_9_u_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(94.346,113.787);
  ctx.lineTo(105.839, 117.796);
  ctx.lineTo(112.788, 129.021);
  ctx.lineTo(117.465, 141.315);
  ctx.lineTo(125.082, 163.365);
  ctx.lineTo(131.764, 180.47);
  ctx.lineTo(140.851, 216.953);
  ctx.lineTo(133.768, 221.63);
  ctx.lineTo(130.591, 215.357);
  ctx.lineTo(128.512, 203.451);
  ctx.lineTo(114.307, 145.912);
  ctx.lineTo(111.155, 140.573);
  ctx.lineTo(107.693, 124.182);
  ctx.lineTo(102.999, 119.54);
  ctx.lineTo(94.683, 117.839);
  var grd = ctx.createLinearGradient(94.346, 113.787, 133.768, 221.63);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_body_7_6_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(73.18,123.385);
  ctx.lineTo(82.702, 123.967);
  ctx.lineTo(90.12, 120.674);
  ctx.lineTo(88.068, 211.766);
  ctx.lineTo(70.493, 212.711);
  var grd = ctx.createLinearGradient(73.18, 123.385, 88.068, 211.766);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_body_8_5_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(90.12,120.674);
  ctx.lineTo(92.545, 117.706);
  ctx.lineTo(97.424, 121.801);
  ctx.lineTo(101.676, 128.801);
  ctx.lineTo(99.482, 152.271);
  ctx.lineTo(102.311, 212.237);
  ctx.lineTo(95.19, 212.002);
  ctx.lineTo(88.068, 211.766);
  var grd = ctx.createLinearGradient(90.12, 120.674, 102.311, 212.237);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_body_11_4_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(102.311,212.237);
  ctx.lineTo(116.262, 209.068);
  ctx.lineTo(100.627, 170.047);
  var grd = ctx.createLinearGradient(102.311, 212.237, 100.627, 170.047);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_arm_13_18_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(100.542,143.92);
  ctx.lineTo(109.424, 172.268);
  ctx.lineTo(124.354, 204.585);
  ctx.lineTo(126.819, 221.496);
  ctx.lineTo(120.806, 222.298);
  ctx.lineTo(119.202, 203.99);
  ctx.lineTo(107.977, 180.871);
  ctx.lineTo(100.627, 166.706);
  var grd = ctx.createLinearGradient(100.542, 143.92, 126.819, 221.496);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_bodyr_7_6_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(66.335,123.509);
  ctx.lineTo(73.18, 123.385);
  ctx.lineTo(70.493, 212.711);
  ctx.lineTo(53.578, 212.239);
  ctx.lineTo(59.626, 120.485);
  var grd = ctx.createLinearGradient(66.335, 123.509, 53.578, 212.239);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_armr_10_u_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(53.295,122.092);
  ctx.lineTo(48.664, 124.926);
  ctx.lineTo(43.373, 134.659);
  ctx.lineTo(46.397, 141.274);
  ctx.lineTo(43.562, 157.338);
  ctx.lineTo(43.278, 162.062);
  ctx.lineTo(44.507, 166.22);
  ctx.lineTo(40.538, 166.976);
  ctx.lineTo(36.097, 172.457);
  ctx.lineTo(35.246, 178.788);
  ctx.lineTo(28.537, 182.19);
  ctx.lineTo(25.797, 185.119);
  ctx.lineTo(20.222, 195.513);
  ctx.lineTo(23.812, 203.64);
  ctx.lineTo(27.781, 204.679);
  ctx.lineTo(33.923, 199.482);
  ctx.lineTo(43.656, 185.025);
  ctx.lineTo(43.751, 182.284);
  ctx.lineTo(50.176, 175.859);
  ctx.lineTo(51.027, 172.079);
  ctx.lineTo(49.137, 163.102);
  ctx.lineTo(49.609, 147.132);
  ctx.lineTo(48.286, 131.446);
  var grd = ctx.createLinearGradient(53.295, 122.092, 23.812, 203.64);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_armr_9_u_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(59.153,116.8);
  ctx.lineTo(58.019, 119.351);
  ctx.lineTo(53.295, 122.092);
  ctx.lineTo(48.664, 124.926);
  ctx.lineTo(43.373, 134.659);
  ctx.lineTo(46.397, 141.274);
  ctx.lineTo(43.278, 162.062);
  ctx.lineTo(44.507, 166.22);
  ctx.lineTo(40.538, 166.976);
  ctx.lineTo(36.097, 172.457);
  ctx.lineTo(35.246, 178.788);
  ctx.lineTo(28.537, 182.19);
  ctx.lineTo(25.797, 185.119);
  ctx.lineTo(20.222, 195.513);
  ctx.lineTo(11.812, 198.726);
  ctx.lineTo(15.025, 189.56);
  ctx.lineTo(35.246, 153.369);
  ctx.lineTo(42.9, 120.769);
  ctx.lineTo(58.492, 115.382);
  var grd = ctx.createLinearGradient(59.153, 116.8, 11.812, 198.726);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_armr_13_18_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(50.176,175.859);
  ctx.lineTo(49.893, 179.26);
  ctx.lineTo(46.869, 191.261);
  ctx.lineTo(30.805, 208.743);
  ctx.lineTo(19.56, 212.711);
  ctx.lineTo(23.813, 203.64);
  ctx.lineTo(27.781, 204.679);
  ctx.lineTo(33.923, 199.482);
  ctx.lineTo(43.656, 185.025);
  ctx.lineTo(43.751, 182.284);
  var grd = ctx.createLinearGradient(50.176, 175.859, 19.56, 212.711);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_body_12_3_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(100.627,166.706);
  ctx.lineTo(109.33, 183.229);
  ctx.lineTo(107.156, 185.875);
  ctx.lineTo(100.627, 170.047);
  var grd = ctx.createLinearGradient(100.627, 166.706, 107.156, 185.875);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_bodyr_8_5_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(58.019,119.351);
  ctx.lineTo(59.626, 120.485);
  ctx.lineTo(53.578, 212.239);
  ctx.lineTo(42.333, 210.198);
  ctx.lineTo(46.869, 191.261);
  ctx.lineTo(49.893, 179.26);
  ctx.lineTo(50.176, 175.859);
  ctx.lineTo(51.027, 172.079);
  ctx.lineTo(53.295, 166.447);
  ctx.lineTo(51.594, 157.187);
  ctx.lineTo(51.594, 146.509);
  ctx.lineTo(52.161, 134.603);
  ctx.lineTo(53.295, 122.092);
  var grd = ctx.createLinearGradient(58.019, 119.351, 53.578, 212.239);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_bodyr_11_4_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(53.295,122.092);
  ctx.lineTo(48.286, 131.446);
  ctx.lineTo(49.609, 147.132);
  ctx.lineTo(49.137, 163.102);
  ctx.lineTo(51.027, 172.079);
  ctx.lineTo(53.295, 166.447);
  ctx.lineTo(51.594, 157.187);
  ctx.lineTo(53.295, 122.092);
  var grd = ctx.createLinearGradient(53.295, 122.092, 51.027, 172.079);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}