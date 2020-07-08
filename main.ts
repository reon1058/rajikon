radio.onReceivedString(function (receivedString) {
    servos.P1.stop()
    servos.P2.stop()
    if (input.buttonIsPressed(Button.A)) {
        basic.showArrow(ArrowNames.North)
        servos.P1.run(100)
        servos.P2.run(100)
    }
})
basic.showString("welcome")
radio.setGroup(1)
basic.forever(function () {
	
})
