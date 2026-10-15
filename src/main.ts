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

const blob = new Konva.Line({


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
  tension: 0.3
});

// add the shape to the layer
layer.add(blob);

// add the layer to the stage
stage.add(layer);
