var box1 
function setup() {
  createCanvas(400,400);
  box1 = createSprite(200,200,100,100)

}

function draw() 
{
  background(30);
if (keyIsDown(RIGHT_ARROW))
{
  box1.x += 5 
}
drawSprites () 
}




