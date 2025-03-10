class bodySegLogic extends Component {
    constructor() {
        super()
    }

    update(){
        this.angle = 0
        this.speed = 0
        this.move()
        
    }


    normalize(){

        magnitude = Math.sqrt(x**2 + y **2)

        y = y / magnitude
        x = x / magnitude


    }

    move() {
        
        this.radians = this.angle * (Math.PI / 180)
        this.vecX = Math.cos(this.radians) * this.dirX
        this.vecY = Math.sin(this.radians) * this.dirY
        

        //Time.deltaTime? How does js know which instance of Time are we reading this variable from from? Is this similar to Math.PI?
        //vector angle not working, how is transformx,y diffrent from GV3
        this.parent.transform.x += this.vecX * (this.speed * Time.deltaTime )
        this.parent.transform.y += -1*(this.vecY * (this.speed * Time.deltaTime))

    }


}