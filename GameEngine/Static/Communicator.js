class Communicator {
    static gameobjects = []


    


    addObj(objThis, name) {

        let obj = {
            name: name,
            objThis: objThis
            }

        this.gameobjects.push(new obj);
        
    }


}