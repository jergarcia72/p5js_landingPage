const canvasSize = 800;
const grSize = canvasSize;
function setup() {
  var canvas = createCanvas(canvasSize, canvasSize);
  frameRate(15);
  pg = createGraphics(grSize, grSize);
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
}

function draw() {
  //background(0);
  pg.background(0);
  pg.fill(255);
  pg.textFont("Hind");
  pg.textSize(canvasSize / 5);
  pg.push();
  pg.translate(grSize / 2, grSize / 2);
  pg.textAlign(LEFT, CENTER);
  pg.textLeading(canvasSize / 6.6 - 10);
  pg.text("please hire me", -canvasSize / 3.5, -canvasSize / 5.25, 0);
  pg.pop();

  let tilesX = 50;
  let tilesY = 8;

  let tileW = int(width / tilesX);
  let tileH = int(height / tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {

      // WARP
      let wave = int(sin(frameCount * 0.05 + (x * y) * 0.04) * 60);
      // SOURCE
      let sx = int(x * tileW + wave);
      let sy = int(y * tileH + wave * 1.25);
      let sw = int(tileW);
      let sh = int(tileH);


      // DESTINATION
      let dx = int(x * tileW);
      let dy = int(y * tileH);
      let dw = int(tileW);
      let dh = int(tileH);
      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

    }
  }
}
