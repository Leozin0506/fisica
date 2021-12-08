const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, circle;

function setup() {
  var canvas = createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true,
  };

  var circle_options = {
    restitution: 2.0
  };

  object = Bodies.rectangle(200, 390, 200, 20, object_options);
  circle = Bodies.circle(200,100, 10, circle_options);
  World.add(world, object);
  World.add(world, circle);

  console.log(object);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(circle.position.x, circle.position.y, 10);

}
