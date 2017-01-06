let position = {x: 0, y: 0}
let angle, angleDelta, distance, distanceDelta, colorBackground

let textToDraw = 'random\nrainbow'

function setup () {
  createCanvas(1000, 1000)

  position.x = position.y = 500 // width / 2 && height / 2 to keep things centered
  angle = random(0, 360)
  angleDelta = 20
  distance = 1
  distanceDelta = 0.1

  colorBackground = color('black')
  colorStroke = randomColor()

  background(colorBackground)
  stroke(colorStroke)

  textAlign(CENTER)
  textFont("Futura") // ma
  textSize(25)
}

function randomColor () {
  return color(random(255), random(255), random(255))
}

function newPosition () {
  angle = angle + random(-1 * angleDelta, angleDelta)
  distance = distance + random(-1 * distanceDelta, distanceDelta)

  position.x += distance * cos(radians(angle))
  position.y += distance * sin(radians(angle))
}

function draw () {
  fill(randomColor())
  newPosition()
  text(textToDraw, position.x, position.y)
}

/*
  Commands:
  - S for save
  - D for repaint in black
  - R for restart
*/
function keyPressed () {
  switch (keyCode) {
    case 68: // D
      background(colorBackground)
      break
    case 83: // S
      saveCanvas('random-rainbow')
      break
    case 82: // R
      setup()
      break
  }
}
