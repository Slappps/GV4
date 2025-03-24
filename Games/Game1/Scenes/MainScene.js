class MainScene extends Scene {
    constructor() {
      super("lightgray")
      
      let playerGameObject = new Head(this)
      playerGameObject.transform.x = 100
      playerGameObject.transform.y = 100

      this.gameObjects.push(playerGameObject)
      
      console.log(this)

      //this.gameObjects.push(new TextGameObject())
    }


    //Can the main scene be acessable globally?
    //how can i change the color of circle dynamically
    //how do i make objects talk to eachother - i.e. collisions
    //can i set up a one time inseperable connection i.e the body to the head
  
}