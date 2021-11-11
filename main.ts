input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.giggle.playUntilDone()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
    soundExpression.happy.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    soundExpression.hello.playUntilDone()
})
basic.forever(function () {
	
})
