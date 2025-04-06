gsap.from("#page1 #box", {
    scale: 0,
    duration: 1,
    transition: "ease-in-out",
    delay: 0.5,
    rotate: 360,
    backgroundColor: "blue",
})

gsap.from("#page2 #box", {
    scale: 0,
    duration: 1,
    transition: "ease-in-out",
    delay: 0.5,
    rotate: 360,
    backgroundColor: "red",
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 1, // for anination with repsect to scroll
        pin: false //for pinning element
    }
})
