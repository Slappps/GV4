class HeadLogic extends Component {
     body = []
    constructor(scene) {
        super()
        this.scene = scene
        this.addBodySegment(3)

    }

    update(){

        this.moveTail()


    }

    addBodySegment(amount){

        for (let i = 0; i < amount; i++){
            let x = new BodySegment
            this.body.push(x)
            this.scene.gameObjects.push(x)
            
        }
        
    }
    // variable x is in addBodySegment and moveTail. I want it to be local to each function. How do i do this. using: var, let, or this.


    moveTail(){

        for (let i = 0; i < this.body.length; i++){
            let seg = this.body[i]
            
            for (let j = 0; j < seg.components.length; j++){
                
                let x = seg.components[j]
                
                if (x instanceof bodySegLogic){
                    
                    x.move(this.parent.transform.x,this.parent.transform.y)

                }
            }
            


        }


    }

    

    


}