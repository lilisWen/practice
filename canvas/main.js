var div = document.getElementById('canvas')
var eraser = document.getElementById('eraser')
var context = div.getContext('2d')
var lwidth = 5;
autoSetCanvasSize()

listenToUser()

var eraserEnabled = false
eraser.onclick = function () {
    eraserEnabled = true
    eraser.classList.add('active')
    brush.classList.remove('active')
}
brush.onclick = function () {
    eraserEnabled = false
    brush.classList.add('active')
    eraser.classList.remove('active')
}

red.onclick = function () {
    context.fillStyle = 'brown'
    context.strokeStyle = 'brown'
}

// pink.onclick = function () {
//     context.fillStyle = 'palevioletred'
//     context.strokeStyle = 'palevioletred'
// }

blue.onclick = function () {
    context.fillStyle = 'cornflowerblue'
    context.strokeStyle = 'cornflowerblue'
}
black.onclick = function () {
    context.fillStyle = 'black'
    context.strokeStyle = 'black'
}
thin.onclick = function () {
    lwidth = 5;
}
thick.onclick = function () {
    lwidth = 8;
}
clear.onclick = function () {
    context.clearRect(0, 0, div.width, div.height)
}
save.onclick = function () {
    var url = div.toDataURL("image/png")
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.target = "_blank"
    a.download = '我的画'
    a.click()
}
//特性检测
function listenToUser() {
    var using = false
    var lastpoint = {
        'x': undefined,
        'y': undefined
    }
    if (document.body.ontouchstart !== undefined) {
        //手机端
        div.ontouchstart = function (e) {
            var x = e.touches[0].clientX
            var y = e.touches[0].clientY - 40
            using = true
            if (eraserEnabled) {
                context.clearRect(x - 5, y - 5, 10, 10)
            } else {
                lastpoint = { 'x': x, 'y': y }
                drawCircle(x, y, 2)
            }
        }
        div.ontouchmove = function (e) {
            if (using) {
                var x = e.touches[0].clientX
                var y = e.touches[0].clientY - 40
                if (eraserEnabled) {
                    context.clearRect(x - 5, y - 5, 10, 10)
                } else {
                    var newpoint = { 'x': x, 'y': y }
                    drawCircle(x, y, 2)
                    drawLine(lastpoint.x, lastpoint.y, newpoint.x, newpoint.y)
                    lastpoint = newpoint
                }
            }
        }
        div.ontouchend = function (e) {
            using = false
        }
    } else {
        //pc端
        div.onmousedown = function (e) {
            var x = e.clientX
            var y = e.clientY - 40
            using = true
            if (eraserEnabled) {
                context.clearRect(x - 5, y - 5, 10, 10)
            } else {
                lastpoint = { 'x': x, 'y': y }
                drawCircle(x, y, 2)
            }
        }
        div.onmousemove = function (e) {
            if (using) {
                var x = e.clientX
                var y = e.clientY - 40
                if (eraserEnabled) {
                    context.clearRect(x - 5, y - 5, 10, 10)
                } else {
                    var newpoint = { 'x': x, 'y': y }
                    drawCircle(x, y, 2)
                    drawLine(lastpoint.x, lastpoint.y, newpoint.x, newpoint.y)
                    lastpoint = newpoint
                }
            }
        }
        div.onmouseup = function (e) {
            using = false
        }
    }

}

function drawLine(x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineWidth = lwidth
    context.lineTo(x2, y2)
    context.stroke()
}
function drawCircle(x, y, r) {
    context.beginPath()
    context.arc(x, y, r, 0, Math.PI * 2)
    context.fill()
}
function setCanvasSize() {
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    div.width = pageWidth
    div.height = pageHeight - 60
}
function autoSetCanvasSize() {
    setCanvasSize()
    window.onresize = function () {
        setCanvasSize()
    }
}
