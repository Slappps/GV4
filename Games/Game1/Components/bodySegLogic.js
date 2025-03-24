class bodySegLogic extends Component {
    constructor() {
        super()
        this.speed = 40

    }
    update(){

        
        
    }
    
    move(xparent,yparent) {
        
        let relx = -1 * (this.parent.transform.x - xparent)
        let rely = -1 * (this.parent.transform.y - yparent)


        let mag = Math.sqrt((relx**2) + (rely**2))

        let x = relx / mag
        let y = rely / mag

        console.log(relx , rely, "||", x,y)

        //this.parent.transform.x += x * (this.speed * Time.deltaTime )
        //this.parent.transform.y += -1*(y * (this.speed * Time.deltaTime))

    }

    normalize(x1,y1){

        
    }
    
}