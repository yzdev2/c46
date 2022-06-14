var ball,engine,world
const Bodies=Matter.Bodies
const World=Matter.World
const Engine=Matter.Engine
var ground
var solider
var charger
var boss 
var landmine
var ball
var base1
function setup(){
    createCanvas(1500,600)
engine=Engine.create()
world=engine.world
ground= new Ground(750,580,1500,10)
ball= new Ball(100,20,30)
base1= new Ground(850,200,150,10)
boss= new Boss(850,150,25)
}
function draw(){
    background("#A3A3A3")
    ground.show()
    ball.show()
    base1.show()
    boss.display()
Engine.update(engine)    
}
function keyPressed(){
    if(keyCode==38){
        ball.Moveup()
    }

if(keyCode==40){
    ball.Movedown()
}

if(keyCode==39){
    ball.Moveforward()
}
if(keyCode==37){
    ball.MoveBackward()
}
}