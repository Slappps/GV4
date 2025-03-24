class BodySegment extends GameObject{
    constructor(){
        super()

        //initialize position
        

        
        this.addComponent(new Circle())
        this.addComponent(new bodySegLogic())
        this.addComponent(new BallCollider())
        
    }
}