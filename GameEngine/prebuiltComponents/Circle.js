class Circle extends Component{
  constructor(){
    super()
    this.fillStyle = "green"
    this.strokeStyle = "purple"
    this.lineWidth = 5
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle
    ctx.strokeStyle = this.strokeStyle
    ctx.lineWidth = this.lineWidth
    ctx.arc(this.parent.transform.x, this.parent.transform.y, 50, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
  }
}