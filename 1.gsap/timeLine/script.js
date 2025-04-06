var timeLine = gsap.timeline();

timeLine.to("#box1", {
    x: 1400,
    duration: 2,
    delay: 0.5,
    rotate: 360
})

timeLine.to("#box2", {
    x: 1400,
    duration: 2,
    delay: 0.5,
    rotate: 360,
    backgroundColor: "red"
})

timeLine.to("#box3", {
    x: 1400,
    duration: 2,
    delay: 0.5,
    rotate: 360,
    borderRadius: "50px"
})