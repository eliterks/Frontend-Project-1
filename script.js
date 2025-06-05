var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 150 + "px";
    blur.style.top = dets.y - 150 + "px";
});

// nav element pr gsap lga rhe ha
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -12%",
        scrub: 2
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        delay: 0.2,
        start: "top -50%",
        end: "top -100%",
        scrub: 2
    }
});
