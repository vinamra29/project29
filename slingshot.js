class slingshot {
    constructor(bodyA,pointB){
    var options = {
        bodyA :bodyA,
        pointB : pointB,
        stiffness : 0.04,
        length: 1
    }

    this.pointB= pointB
    this.slingshot1 = Constraint.create(options)
    World.add(world,this.slingshot1)
    }
    fly(){
        this.slingshot1.bodyA = null
    }
    display(){
        if (this.slingshot1.bodyA ){
            line(this.slingshot1.bodyA.position.x,this.slingshot1.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
       
    }
}