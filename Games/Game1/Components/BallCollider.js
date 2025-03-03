class BallCollider extends Component{
    constructor() {
        super()
        this.timeSinceLastShot = 0
        this.speed = 1000
    }

    update() {
        this.parent.transform.x += this.speed / Time.fps
        //how do i check if this.parent is currently colliding?
    }
}