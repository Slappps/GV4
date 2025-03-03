class MainScene extends Scene {
    constructor() {
      super("lightgray")
      
      let playerGameObject = new PlayerGameObject()
      playerGameObject.transform.x = 100
      playerGameObject.transform.y = 100

      this.gameObjects.push(playerGameObject)
      this.gameObjects.push(new BouncyBall())
      console.log(this)

      //this.gameObjects.push(new TextGameObject())
    }
}