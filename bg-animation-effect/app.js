const colors = [
 '2196f3',
 'e91e63',
 'ffeb3b',
 '2196f3',
]

function createSquare() {
 const section = document.querySelector('section')
 const squire = document.createElement('span')
 let size = Math.random() * 50

 squire.style.width = `${20  + size}px`
 squire.style.height = `${20  + size}px`

 squire.style.top = `${Math.random() * innerHeight}px`
 squire.style.left = `${Math.random() * innerWidth}px`
 squire.style.background = `#${colors[Math.floor(Math.random() * colors.length)]}`

 section.appendChild(squire)

 setTimeout(() => {
  squire.remove()
 }, 5000)
}

setInterval(createSquare, 150)
