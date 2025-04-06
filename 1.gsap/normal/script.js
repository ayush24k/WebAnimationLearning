gsap.to("#box", {
    x: 1300,
    duration: 2,
    delay: 1,
    backgroundColor: "red",
    rotate: 360,
    scale: 0.5,
    repeat: 1,
    yoyo: true,
})

gsap.from("h1", {
    y: 50,
    opacity: 0,
    delay: 0.2,
    duration: 1,
    stagger: 0.5
})