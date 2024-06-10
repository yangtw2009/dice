input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showNumber(randint(0, 6))
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.clearScreen()
})
