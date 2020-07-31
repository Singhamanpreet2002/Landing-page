var tl = gsap.timeline({
    defaults: {
        duration: 1.2
    }
});
tl.from("nav", {
        x: 1000,
        opacity: 0,
        ease: "back.in(.7)"
    }, "-=.5")

    .from(
        ".sm-rect", {
            y: -1000,
            opacity: 0,
            stagger: 0.6,

        },
        "-=0.5"
    )
    .from(".logo", {
        y: -40,
        opacity: 0,
        ease: "back.in(0.5)"
    }, "-=1")
    .from(".bg-rect", {
        x: 100,
        opacity: 0,
        ease: "back.in(.7)"
    }, "-=1.2")
    .from(".title", {
        opacity: 0,
        ease: "power3",

    }, "+=1")
    .from(".para", {
        opacity: 0,
        ease: "power3",

    }, "-=1")
    .from(".button", {
        opacity: 0,
        ease: "power3",

    }, "-=1")
    .from(".social", {

        opacity: 0,
        ease: "power3",
        stagger: {
            amount: 1.2,
        }

    }, "-=1")
    .from("ul", {
        opacity: 0,
        ease: "power3"
    }, "-=.5")