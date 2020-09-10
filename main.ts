input.onButtonPressed(Button.A, function () {
    basic.showNumber(Celsius)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    let Fahrenheit = 0
    basic.showNumber(Fahrenheit)
    basic.showIcon(IconNames.Sad)
})
let Celsius = 0
basic.showString("Pau")
basic.showString("A01027714")
Celsius = input.temperature()
basic.forever(function () {
	
})
