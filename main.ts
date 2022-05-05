input.onGesture(Gesture.Shake, function () {
	
})
let Steps = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        Steps += 1
        basic.showNumber(Steps)
    }
})
