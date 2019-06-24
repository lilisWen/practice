var div = document.getElementById('canvas')
var eraser = document.getElementById('eraser')
var context = div.getContext('2d')

autoSetCanvasSize()

listenToUser()

var eraserEnabled = false
eraser.onclick = function () {
    eraserEnabled = true
    actions.className = 'action x'
}
brush.onclick = function () {
    eraserEnabled = false
    actions.className = 'action'
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
            var y = e.touches[0].clientY
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
                var y = e.touches[0].clientY
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
        div.ontouchend = function () {
            using = false
        }
    } else {
        //pc端
        div.onmousedown = function (e) {
            var x = e.clientX
            var y = e.clientY
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
                var y = e.clientY
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
    context.lineWidth = 5
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
    div.height = pageHeight
}
function autoSetCanvasSize() {
    setCanvasSize()
    window.onresize = function () {
        setCanvasSize()
    }
}
