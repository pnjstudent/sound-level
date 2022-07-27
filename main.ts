input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    sound.resetMaxVol()
})
input.setSoundThreshold(SoundThreshold.Loud, 200)
basic.forever(function () {
    led.setBrightness(input.soundLevel())
    sound.mapImagesToVolume([
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        # . # . #
        `),
    images.createImage(`
        . . . . .
        . . . . .
        # . # . #
        . # . # .
        # . # . #
        `),
    images.createImage(`
        . . . . .
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `),
    images.createImage(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    ])
})
