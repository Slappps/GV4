class VectorBounce extends Component{
    constructor() {
        super()
        this.timeSinceLastShot = 0
        this.speed = 1000

        //---persistant vars----
        //this.angle = Math.floor(Math.random() * 360) + 0
        this.angle = 30

        //entity speed should be a property of the bouncy ball and not of the component vectorBounce(), how can i do that?
        this.entitySpeed = 5
        this.dirX = 1
        this.dirY = 1
        


    }

    update() {
        
        
        this.radians = this.angle * (Math.PI / 180)
        this.vecX = Math.cos(this.radians) * this.dirX
        this.vecY = Math.sin(this.radians) * this.dirY
        console.log(this.vecX,this.vecY)

        //Time.deltaTime? How does js know which instance of Time are we reading this variable from from? Is this similar to Math.PI?
        //vector angle not working, how is transformx,y diffrent from GV3
        this.parent.transform.x += this.vecX * (this.entitySpeed * delta)
        this.parent.transform.y += -1*(this.vecY * (this.entitySpeed * delta))
        console.log(this.parent.transform.x,this.parent.transform.y)

        
        


    }
}