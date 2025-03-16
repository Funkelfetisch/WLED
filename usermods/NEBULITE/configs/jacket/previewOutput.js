// Base64-encoded WebP images
const imageData = {
  "backpack_leds": "data:image/webp;base64,UklGRsIFAABXRUJQVlA4ILYFAACwKACdASrIAMgAP3Gwz2C0rSmlpfQq4pAuCWluIJ/R68/6sNdfDryIsnAGavwLqdDNNLX4qwVDr+uqfy9IvWgwN7ZUMBnBR9Jpx9NN3w0kHlVbXddtOXYI2HpOjxV28cg2wwFZeMcwwUR3rBldc29sqDlgTp0G9fPqw+SGPzrBdqspSDJGEmYXoWI1Si15PBbQyv6NChTqhE57kaMXFYZfNVirUdZ0G3nuNK1GuW2PfkZy2tSIZ0cuvjv9cc4EY9TG0Ntm9imnuJGNq+Q7p9Xj9KrzVYGQILqj8DY2vEf0+aT/KY8/snLnFhxrZIZu/QBiJ08F1m++gjGNRtFZTDs0dEochQ7gTgP986QI7LeyMOnqNS/lFpRo8EyRNom9oTYwcTGb0mbn/IrsW9bi3W7uStkRw99C/PBrgzZtHZmNrlpKFACi34jIGj7eU+CAAP7vTEAAAAAC37064jFi6jfZRCiG6iFQTg71p3ru2Kk9dooj/acG9jzn7D7hLC+TLwlGgUFuiQZiD/04YiNam6SOOyaVQMvRNH/uITI4vJqMxwHdjSUkNC1N9qiKBdRDNTy5+nEJXJqUpXxjD3+n3u90ZL3AqrEE1XevILkXTUc2LBFiOS/u+esXw6vXrQbudXRxGdMp3rhyh2QcUbGvem4i6NN21JLyAMfZPBK4sWyAtu/y3LpNS73n3teixW3t1ah1A0qu4oK2vZEhw0wKmIjC1WgsaLiAD0PDk4fbuCCugYgVwJbddqzUYA+MHt7rEdU3dkzU1N9aQ9dALfE6O/RQH5L9jtc03OW4dP09RVLYA9Mv8yzrGkKQ9L+3eVe93aX0EPe+PyXRIXgpGPO4FJQvZzs3yrOzSNnNZqrrupfE/cBy61crdH6ANlKM/VFj90W6+q1Mtuam1R8nkAOWU4VzBB1+JIRF6qYX/JEvoQ1alEutv1pthEt8u2vrlBCvpds0qSFahb6im2yjeL8gAYeSYYv8JeAzmB6tGMhatfL3m0W2G5GZ9PjfSFS1HLvg3Pfe55CTKaWiH8LqHQjmPt52db83uhxoqIhrvtW0Un82V4ECSXqAjNb0QTdy9IKShtYVeg9wmX5s9WILyhUqd7U7HMBW15+VRNE1mhdhyRqkI67N7IhRbtzAEnI+KkM1Tux0kC+qyPcBFy5F7OfT2litb4T6PCj02Qf2UtRgVNf0sQ6dxLM1439ebw7myoAEHAQrAeH4TbvFjoQ9a3xlVgKt6U+JdN6eT5kYKRHE/X/i1tmoSn3BmIvZPU4Byd123ArZdOq2JNIijGxkXqPReS1tNr9Rh1Q8/OyZlK7FxIemGZ4XFmNPkPnkCNqpEY2CCfRuk+msa708M/mVBlVpEB2UNQax1dHzGnCXFqlO2WzcGMhhHRjKzE1uc3vhST9POcMbpOZ7LO0BezguiIMdLX1uM5KIopM33OgXGVKnnDhomgJQ9RYEdlBGtQ5bNwp7keI1lb4AgQvTYvYpiZvO56lv/PbAc7kPNGnp8/F5FyrFRnpAywiQ1PaYpEt4dBP3hujjS9KaWMnH+/tjF9LCeSIuuFE22r3axycOOuv0ruRHZA5Z0k9I8cDMbuStIgaUgx65Y1u5nncTYPn4QypHBIs55ntZCsXudjqhmG/3lPw5/kaU7VzN/pVwOphXCWZnURzBT4Jm+LI/gz8tTjWKIOgywTsBJ4mj3Rlcd6vaxl0F03KeRZHrGOvIqa4OzV2NgnWygfrRY8Y0aJUIX6Sj0vX2dkbDh/Ky2OAs6bsh+8ol2CaBVHlG/PAAgZ7a7M7tXNLUmYnUE0jtUdRv2NpDX7ai+Hy+hvv57GnqdXEdlDPSKDlnqZ77AoJus6e5L7ZSDcow3+k0ZYF7CpfuLCX9ouyx1l3jHEzrvmL4jloTx3FHYwuBJMeA0EsSVKeaAsixXBGLfAPZPgG/yTG/4zQ9Hu9xFJbc4AAA",
  "backpack_top": "data:image/webp;base64,UklGRg4DAABXRUJQVlA4IAIDAAAQIQCdASrIAMgAP3G20GA0uzUlp5LZ22AuCWkNwG4Zif2lXsDljOH00o2ADAer1w6EVPbrksfbaAENfZ/aWOgtdZMBBYL2Ft8FEnuODuIfP5qZ4UGqF27HYLdXuuLjyCVfqM6nWCyFJCIVuFfa52Z5DZ1rWBa9Z3uH6t4pxhNjcRbtIjjQK5vjqRCfBjVthPRBrABz3SPG9Bw+GEBwuqX6GVy1rpHphxTj/mw0OghMBBH4K9xmYMsNT61yUqF1dezRLrDTs8I1Pw3Z5rb0VngJlTGtL+wWG2zx4FvkyPZScfjmllyedbpCIZcIKVhIFC0GXhwT7gILsyaIvriQl1JA+T9pg6y6oZZQR9mOdloHIgAA/u9NoBzr5MDY/LpuRQd0or9O9oXWgx5NYP/3LlQqltcJc1nlmzesm64Vp7pje6cu6VomMni0sH4bYjkzLtvP4pYjig1UWK5pDIMmkiFeHTW4iVDc9wx24IvT0e7Lc9QVPm1oEpMO54JejP1a6VxcBN2iDNAJp2RVxGKY59pnvoOGpJez6jYiH/T87G1DA+6hWstKVOJhlsEwuT1YGUk3fUv54qHcZa5bhIBOlAQf7Ykf/YgDxNeV9hGidQvBiXU7WNhE9DmvuB+cPgLJvd6Vwayy/ggVNdIwqiVc5wIT2M+dmEcZElLDg34v8q4HGFnPbAbs4Y/t31ArTWbWuAfGQ4rEmiBaeTJ3lwgIUexr+kWOCBZ0HIMRrjHrYPAkqjH04vckb8c9AYsvrAKkIZK8NDLggeC0HmUGMwU7Xi4yS6/qk+s5GpbajvodTXXY8H4lzfb5MQ3BNkc9Zu4UA9mMEHwuHdqaR6wKerpqVi72gyevucXjPjPI+mnwlJor2lkaT5PExW7mzrqMHYuSe/lT2Rg9aBB2HiyFl4KmEylG0dH9VhYEc2jytmWfiu4o2BSVD1tMUzlWk1drRHMx6gXqKHFB8rZ4j5xF53TRsx3snSPIieQTUMGqrhQBN+14tU/qknDLcOB23mn64RagQAAAAA==",
  "croptop_leds": "data:image/webp;base64,UklGRgIDAABXRUJQVlA4IPYCAADQGACdASrIAMgAP3G41GO0r6omofTY8pAuCWlu4XShG/PA+AXDy09KIzfu9fQAD/8Nt0ua+G26XNfDbdLmvhtulzXw23S5r3sij5XAQPmvheuyVnI9/Y6+8clxjmRBwiHUnJ2xmdhO2Q8RAI9Y+5bO5P+2+CunWpWhs11cB02JSG/Rim4N4E5g5yiOTP77O9y4BkpQUOFd7RLdViXD+up2SF0C0bSL3EeUJCHJAhj1bLi2OA+drIucwiXLCdDTD3YheKNrztQQrcoaNzztQOAA/v5oIAFps6fK3BZBxT93Ngpk1+sO49bdI/fV8pxvJO/QdTsnPMHoQzgs44GQC5zn1TKe0W0XYS5j+rtjZMcBdrIFZi1m+PZjUUOezGwBDOecvuKFaZkDa9K9nqAqf3vhBtXrQoCWvlP+fzgvhVam2uibvdGMIiyUFeDIXkuL2eF7IqoZJor9+Ow6C2fYG/TQImMnPFYLcxOtnKLbeiXDjGGjm2hBraUuRa+Jn1GbRbLn0St7b78KAUBaE6b+72zEVsxrnFxytAuPEn3U5uawzRO7EzSJZL+Ch4TErtYPkOCIay0HW2iLg591bMeRMx+igLB2Rc9BU4GX7L60uIRrWjklEl+DQyMLPzMQpqCdI73L43LNXoG8MD9bP+V2zAGMfU54yHzXn4oraB2fPdFTvE3up+Kpr7d1/jWoa26iuymUnAd+sBbQomwRI6rDeKShH4txvVwOrXb1AO2KRT8j0kuQ1ghjkrYLxtAbvMSeZeUaksTn0FAUUJZrj3xCWz6JT5PYx8noVslCUR3SfYwB3+VmBursdmeSa3tpon5m/7bsLkxtKYfeKZr8mapEtNTby943YOaVnGm442UL4uPJ6dP9LtRWAl8268o7CxkxOjByaJvmBNwSchvtJAflwyfwHfRDQNHdngL+Vr8NQBk9+rRSpK7+bL2PBRGmYH50T7B0yq5cR6OytpO9m7uvUfxXlPSPu3LBnWzBoJt9CD6MAAAAAAAAAA==",
  "croptop_top": "data:image/webp;base64,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",
  "fannypack_leds": "data:image/webp;base64,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",
  "fannypack_top": "data:image/webp;base64,UklGRhACAABXRUJQVlA4IAQCAACQEwCdASrIAMgAP3G41GQ0rrcyIEmS4C4JaW66YGkqx0C18v8AHwCmZjun7CMTxieMTxdEEJvJnCJgPAIFYV4QChfncRfMnABpyH3P2dhukIRLccyohVNTZuzinq7X2HDYDEjes85rTSyCX0sIXlWfAPrD+2+0op1aS9tsKW4Cn3K/MBorBD/aycJRqfYDijEolUfmA4oxJLibTN5+FI1dsPTJaAAA/u76QAAodn6JNtPfAwNk/LmOjKnWJmvndvy0JVf5xBrU/kWXVnzLfTCMXotHSq5/vshPrNqSVetW5ZWzwOqaY3y5ujwOZkhxpfvdo4dR3ehxTd8pp0SljwaOImGORG7kwwD4zDwMoDfn7Qx/ZEvViXIFLeWVMrRvRpyUFSIvC+g30Q/unWxmtD8u9MbWLg1bn6zBvuXW5m1LZx8q6jOevkreDfKcAVwce48H+/55SLcfCJREY9bDBPT7YyAd+QmIM7WAisPAReYGV9Gs1OZGWSR7dmt5AVuPE/O+D7KJLeJwejAnDRsQSSj3OBSpsD6jCeRICB5Fw3J2LWk/X1zeZ54mkW5dt9HOphk5Grbl5wvd2wNHUWP1YCuSLvPddH2gQJFWqD88m2zlIgB0vGMNxEdiIhD4Kb6P7LRIPEIwiJxvvRHU431EAG213nsLCC8mqP0pAX6g3ACoAAAAAAA=",
  "jacket_leds": "data:image/webp;base64,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",
  "jacket_top": "data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAACwDQCdASrIAMgAP3G42WW0ryunIEgCkC4JaQDYzK+wCe16KuEGOTMzMZmZnBGZmYzMzOCMzMxmZmcEZmZjMzM4IzMzGZmZwRmZmMzMzgjMzMZmZnBGZmYzMzOCMzMxmZmcEZmZjMzM4IzMzGZmZwRmZmMzMzMAAP7uPAAAAAAAAAAA",
};

// Create image elements
const canvases = {};
for (let key in imageData) {
  let img = new Image();
  img.src = imageData[key];
  canvases[key] = img;
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

var outputTypes = {
  "backpack": { //backpack outside
    type: 'ws2812',
    name: 'backpack',
    width: 200,
    height: 200,
    drawFn: function drawBackPack2(c, colors) {
      //if the images haven't loaded yet, show some gray
      if (!canvases['backpack_leds'] || ! canvases['backpack_top']) {
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
      let bpTransform = [.23,.04,-.04,.8,25,15];
      c.transform.apply(c, bpTransform);

      let r1 = 80;
      let r2 = 190;
      let i = 0;
      c.fillStyle = radialGradient(c, 100,0,r1,r2, colors[i + 0], colors[i + 1], colors[i + 2]);
      c.fillRect(0, 0, 600,200);
      i += 4;
      c.fillStyle = radialGradient(c, 300,0,r1,r2, colors[i + 0], colors[i + 1], colors[i + 2]);
      c.fillRect(0, 0, 600,200);
      i += 4;
      c.fillStyle = radialGradient(c, 500,0,r1,r2, colors[i + 0], colors[i + 1], colors[i + 2]);
      c.fillRect(0, 0, 600,200);
      i += 4;

      c.fillStyle = radialGradient(c, 100,200,r1,r2, colors[i + 0], colors[i + 1], colors[i + 2]);
      c.fillRect(0, 0, 600,200);
      i += 4;
      c.fillStyle = radialGradient(c, 300,200,r1,r2, colors[i + 0], colors[i + 1], colors[i + 2]);
      c.fillRect(0, 0, 600,200);
      i += 4;
      c.fillStyle = radialGradient(c, 500,200,r1,r2, colors[i + 0], colors[i + 1], colors[i + 2]);
      c.fillRect(0, 0, 600,200);

      c.setTransform(storedTransform);

      c.globalCompositeOperation = 'hard-light';
      c.drawImage(canvases['backpack_leds'], 0, 0);
      c.globalCompositeOperation = 'source-over';
      c.drawImage(canvases['backpack_top'], 0, 0);
    },
    images: [
      'backpack_leds',
      'backpack_top'
    ],
    numPixels: 6
  },

  "fannypack": {
    width: 200,
    height: 100,
    drawFn: function (c, colors) {
      //if the images haven't loaded yet, show some gray
      if (!canvases['fannypack_leds'] || ! canvases['fannypack_top']) {
          console.log("images not loaded yet...");
        c.globalCompositeOperation = 'source-over';
        c.fillStyle = "rgb(64,64,64)";
        c.fillRect(0, 0, 200, 100);
        return;
      }

      c.globalCompositeOperation = 'source-over';
      c.fillStyle = "rgb(0,0,0)";
      c.fillRect(0, 0, 200, 100);


      let storedTransform = c.getTransform();

      draw_path4621_0(c, colorsRGB(colors, 1), colorsRGB(colors, 2));
      draw_path4623_0(c, colorsRGB(colors, 3), colorsRGB(colors, 4));

      c.setTransform(storedTransform);

      c.globalCompositeOperation = 'hard-light';
      c.drawImage(canvases['fannypack_leds'], 0, 0);
      c.globalCompositeOperation = 'source-over';
      c.drawImage(canvases['fannypack_top'], 0, 0);
    },
    images: [
      'fannypack_leds',
      'fannypack_top'
    ],
    numPixels: 6
  },
  "jacket": { //jacket
    width: 200,
    height: 200,
    drawFn: function (c, colors) {
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
    },
    images: [
      'jacket_leds',
      'jacket_top'
    ],
    numPixels: 6
  },
  "croptop": {
    width: 200,
    height: 200,
    drawFn: function (c, colors) {
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
    },
    images: [
      'croptop_leds',
      'croptop_top'
    ],
    numPixels: 8
  },
};


//load all images into off screen canvases
for (let [key, outputType] of Object.entries(outputTypes)) {
  let images = outputType.images || [];
  images.forEach((name) => {
    var img = new Image();
    img.onload = function () {
      var canvas = document.createElement('canvas');
      canvas.width = outputType.width;
      canvas.height = outputType.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, outputType.width, outputType.height);
      canvases[name] = canvas;
    };
    img.src = '/NEBULITE_' + name;
  });
}


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


// This file is generated from the pathgen tool from the fannypack svg file

function draw_path4621_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(35.012,54.412);
  ctx.lineTo(46.772, 27.952);
  ctx.lineTo(109.848, 30.09);
  ctx.lineTo(175.062, 24.745);
  ctx.lineTo(181.61, 58.421);
  ctx.lineTo(156.353, 94.235);
  ctx.lineTo(50.781, 94.235);
  var grd = ctx.createLinearGradient(35.012, 54.412, 181.61, 58.421);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}
function draw_path4623_0(ctx, c1, c2) {
  ctx.beginPath();
  ctx.moveTo(49.445,21.003);
  ctx.lineTo(77.241, 8.709);
  ctx.lineTo(168.914, 10.045);
  ctx.lineTo(175.329, 15.39);
  ctx.lineTo(170.251, 22.072);
  ctx.lineTo(109.848, 30.09);
  ctx.lineTo(53.187, 25.279);
  var grd = ctx.createLinearGradient(49.445, 21.003, 175.329, 15.39);
  grd.addColorStop(0.2, c1);
  grd.addColorStop(.8, c2);
  ctx.fillStyle = grd;
  ctx.fill();
}

// This file is generated from the pathgen tool from the jacket svg file

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
