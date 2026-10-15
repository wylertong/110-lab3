import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();

// create our shape
const circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4
});

const lemon2 = new Konva.Line({

  points: [stage.width() / 2 + 75, stage.height() / 2,
           stage.width() / 2 + 40, stage.height() / 2 - 30,
           stage.width() / 2, stage.height() / 2 - 35,
           stage.width() / 2 - 40, stage.height() / 2 - 30,
           stage.width() / 2 - 75, stage.height() / 2,
           stage.width() / 2 - 40, stage.height() / 2 + 35,
           stage.width() / 2, stage.height() / 2 + 35,
           stage.width() / 2 + 40, stage.height() / 2 + 30,
           
          ],
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 5,
  closed: true,
  tension: 0.3,
  draggable: true
});

// Change cursor on hover
lemon2.on('mouseover', () => {
  document.body.style.cursor = 'pointer';
});

// Revert cursor when hover ends
lemon2.on('mouseout', () => {
    document.body.style.cursor = 'default';

});


lemon2.on('mousedown', () => {
    lemon2.to({
        scaleX : lemon2.scaleX() * 200,
        scaleY : lemon2.scaleY() * 200,
        duration : 100,
    })
});

lemon2.on('mouseup', () => {
    lemon2.to({
        scaleX : 1,
        scaleY : 1,
        duration : 0.15,
    })
});

// add the shape to the layer
layer.add(lemon2);

// add the layer to the stage
stage.add(layer);
