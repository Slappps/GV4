class HeadLogic extends Component {
    constructor() {
        super()
    }

    body = []

    update() {
        this.moveTail2()
    }

    setup() {
        this.addBodySegment(3)
    }

    addBodySegment(amount) {
        for (let i = 0; i < amount; i++) {
            let x = new BodySegment
            this.body.push(x)
            Engine.currentScene.gameObjects.push(x)
        }
    }

    // variable x is in addBodySegment and moveTail. I want it to be local to each function. How do i do this. using: var, let, or this.
    moveTail1() {
        for (let i = 0; i < this.body.length; i++) {
            let seg = this.body[i]
            
            
            
            for (let j = 0; j < seg.components.length; j++) {

                let x = seg.components[j]

                if (x instanceof bodySegLogic) {

                    x.move(this.parent.transform.x, this.parent.transform.y)

                }
            }
        }
    }

    moveTail2(){

        for (let i = 0; i < this.body.length; i++){
            let seg = this.body[i]

            for (let j = 0; j < seg.components.length; i++){
                let segComp = seg.components[j]
                if(segComp instanceof bodySegLogic){


                    if( i == 0){
                        let target = [this.parent.transform.x, this.parent.transform.y]
                    }
                    else if (i > 0){

                        let target = [body[i-1].parent.transform.x , body[i-1].parent.transform.y]
                    }

                    segComp.move(target)


                }
            }
        }





    }


}