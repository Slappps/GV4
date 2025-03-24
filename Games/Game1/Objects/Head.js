class Head extends GameObject{
    constructor(scene){
        super()
        this.scene = scene
        this.addComponent(new Circle())
        this.addComponent(new KeyboardMovement())
        this.addComponent(new HeadLogic(this.scene))
        
    }
}