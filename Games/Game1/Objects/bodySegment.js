class BodySegment extends GameObject{
    constructor(){
        super()

        //initialize position
        
        this.transform.x = 500
        this.transform.y = 200
        
        this.addComponent(new Circle('red'))
        this.addComponent(new bodySegLogic())
        this.addComponent(new BallCollider())
        
    }
}