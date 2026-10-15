import Konva from 'konva';

// first we need to create a stage
console.log('main.ts is running');
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();

// create our shape
// const lemon = new Konva.Shape({
//   x: stage.width() / 2,
//   y: stage.height()/ 2,
//   fill : 'yellow' , 
//   stroke: 'black' , 
//   strokeWidth: 4,
// //   sceneFunc: (context: Konva.Context, shape: Konva.Shape) => {
// //     context.beginPath();
// //     context.ellipse(0, 0, 100, 60, 0, 0, Math.PI * 2);
// //     context.closePath();
// //     context.fillStrokeShape(shape);
// // }
//   scenFunc : (context: Konva.Context, shape: Konva.Shape) => {
//     context.beginPath();  

//     context.moveTo(-110, 0);
//     context.bezierCurveTo(-70, -70, 70, -70, 110, 0);
//     context.bezierCurveTo(70, 70, -70, 70, -110, 0);
//     //context.bezierCurveTo(10, 80, -70, 65, -90, 40);
//     //context.bezierCurveTo(-70, 10, -90, -15, -80, -40);
  
//     context.closePath();
//     context.fillStrokeShape(shape);
//   }
// });



const lemon = new Konva.Line({
  x: stage.width() / 2,
  y: stage.height() / 2,

points: [
  -115, 0,
  -100, -12,
  -85, -35,
  -45, -55,
  0, -60,
  45, -55,
  85, -35,
  100, -12,
  115, 0,
  100, 12,
  85, 35,
  45, 55,
  0, 60,
  -45, 55,
  -85, 35,
  -100, 12
],
  tension: 0.5,
  closed: true,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4,
  draggable:true,
});

layer.add(lemon);


lemon.on('mouseover', () => {
  document.body.style.cursor = 'pointer';
});

lemon.on('mouseout', () => {
  document.body.style.cursor = 'default';
});

lemon.on('mousedown', () => {
  lemon.to({
    scaleX : lemon.scaleX() * 200,
    scaleY : lemon.scaleY() * 200,
    duration : 100,
  })
});

lemon.on('mouseup', () => {
  lemon.to({
    scaleX : 1,
    scaleY : 1,
    duration : 0.15,
  })
});

stage.add(layer);
