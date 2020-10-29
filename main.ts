input.onPinPressed(TouchPin.P0, function () {
    List.push(2)
    leds()
})
function leds () {
    if (HorizontalLeds == 5) {
        HorizontalLeds = 0
        VerticalLeds += 1
    }
    if (VerticalLeds == 5) {
        HorizontalLeds = 0
        VerticalLeds = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    led.plot(HorizontalLeds, VerticalLeds)
    HorizontalLeds += 1
    console.log(hleds)
}
input.onButtonPressed(Button.A, function () {
    List.push(1)
    leds()
})
input.onButtonPressed(Button.AB, function () {
    if (List.length <= SafeCode.length - 1) {
        return;
    }
    console.log("List length: " + code.length)
console.log("SafeCode length: " + secret.length)
while (times != SafeCode.length) {
        console.log("List: " + code[times])
times += 1
        if (List[times] == SafeCode[times]) {
            Correct += 1
        } else {
            if (Correct == SafeCode.length) {
                Correct += 1
            }
        }
    }
    if (Correct == SafeCode.length) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
        music.playMelody("C5 B G B A G A B ", 120)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.playMelody("E E E E E E E E ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    List.push(0)
    leds()
})
let Correct = 0
let VerticalLeds = 0
let HorizontalLeds = 0
let SafeCode: number[] = []
let List: number[] = []
let hleds = 0
let times = 0
let code: number[] = []
let secret: number[] = []
List = []
SafeCode = [1, 0, 2, 1, 0, 1, 2, 1, 0]
