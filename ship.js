class Ship extends gameObject
{
    constructor(position, size)
    {
        super(position, size);
        this.heading = 0;
        this.rotation = 0;
        this.velocity = createVector(0,0);
        this.isBoosting = false;
    }

    update()
    {
        this.position.add(this.velocity);
        this.velocity.mult(0.97);
        if(this.isBoosting)
        {
            this.boost();
        }
    }

    boost()
    {
        let force = p5.Vector.fromAngle(this.heading);
        force.mult(0.5);
        this.velocity.add(force);
    }

    boosting(isBoosting)
    {
        this.isBoosting = isBoosting;
    }

    display()
    {
        translate(this.position.x, this.position.y);
        rotate(this.heading + PI / 2);
        noFill();
        stroke(255);
        triangle(-this.size, this.size, this.size, this.size, 0, -this.size)
    }

    setRotation(rotation)
    {
        this.rotation = rotation;
    }

    turn(angle)
    {
        this.heading += this.rotation;
    }
}