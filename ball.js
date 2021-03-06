class Ball
{
  constructor(x, y,r) 
  {
    let options = {
     isStatic:false
    };
    
    this.body = Bodies.circle(x, y, r, options);
    this.x = x;
    this.y = y;
    this.r = r;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    ellipseMode(CENTER);
    noStroke();
    fill(148,127,146);
    ellipse(pos.x,pos.y, this.r, this.r);
    pop();
  }
}
