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
}