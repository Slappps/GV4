class HeadLogic extends Component {
    constructor() {
        super()
        body = []
    }

    addBodySegment(){

        this.body.push([[objThis,name]]);


    }

    getContext(name){

        for (let i = 0; i < gameobjects.length; i++) {
            
            if (gameobjects[i][1] == name){
                objCntxt = gameobjects[i][0]
                return objCntxt
            }

          }

    }
}