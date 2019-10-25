const canvas = document.querySelector('canvas')

// setting constants
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

//defining properties for Snow
function Snow(x, y, radius, dy) {
    this.x =  x
    this.y = y
    this.radius = radius
    this.color = '#fff'
    this.dy = dy

    // this function draw snow
    this.draw = () => {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = this.color
        c.fill()
        c.strokeStyle = '#fff'
        c.stroke()
    }

    // this function move snow
    this.move = () => {
        if ((this.y + radius > canvas.height)){
            this.y = - this.dy
        }
        this.draw()
        this.y += this.dy
        this.x += Math.random() - 0.5
    }
}
var snow = []
// drawing snow
for (let i = 0; i < 400; i++){
    let radius = Math.random() * 5
    let x = Math.random() * (window.innerWidth - radius * 2)
    let y = Math.random() * (window.innerHeight - radius * 2)
    let dy = 3
    snow.push(new Snow(x, y, radius, dy))
}

// animation
function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)
    for (let i = 0; i < snow.length; i++){
        snow[i].move()
    }
}
animate()

