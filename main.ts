input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Diamond)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.SmallDiamond)
})
input.setSoundThreshold(SoundThreshold.Loud, 112)
basic.forever(function () {
    led.setBrightness(input.soundLevel())
})
