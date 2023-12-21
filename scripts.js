let x = 0
let y = 0
let z = 0
let interval
const cube = document.querySelector('.cube')

const playPause = () => {
    interval = setInterval(() => {
        cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
    }, 30)
}

playPause()
