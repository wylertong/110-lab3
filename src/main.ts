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
lemon2.on('mouseover', (e) => {
  const stage = e.target.getStage();
  stage.container().style.cursor = 'pointer';
});

// Revert cursor when hover ends
lemon2.on('mouseout', (e) => {
  const stage = e.target.getStage();
  stage.container().style.cursor = 'default';
});

// add the shape to the layer
layer.add(lemon2);

// add the layer to the stage
stage.add(layer);
