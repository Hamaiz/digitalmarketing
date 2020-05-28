//Side Nav
document.addEventListener('DOMContentLoaded', function () {
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {
        edge: 'right'
    });
});



//GSAP
let isMobilePhone = window.matchMedia("only screen and (min-width: 991px)").matches

if (isMobilePhone) {
    let controller = new ScrollMagic.Controller();

    // Scroll Magic Animations
    const priceAnim = gsap.timeline({ defaults: { ease: "circ.easeInOut", duration: 1 } })
        .from('#pricing', { opacity: 0 })

    const contactAnim = gsap.timeline({ defaults: { ease: "circ.easeInOut", duration: 1 } })
        .from('.contact', { x: "-100%" })
        .from('.contact_heading', { y: -100, opacity: 0 })
        .from('.contact_para', { x: -150, opacity: 0 }, '-=1')
        .from('.contact_side', { opacity: 0 }, '-=1')
        .from('.contact_form', { opacity: 0 }, '-=1')

    const footerAnim = gsap.timeline({ defaults: { ease: "circ.easeInOut", duration: 1 } })
        .from('.footer_logo', { x: '-100%' })
        .from('.footer_icons', { x: '-200%' }, '-=1')
        .from('.footer_copy', { opacity: 0 })

    priceAnim.pause();
    contactAnim.pause()
    footerAnim.pause()
    window.addEventListener('load', () => {

        gsap.from('.header_img img', {
            duration: 1,
            x: "-500px",
            ease: "power1.inOut"
        })

        gsap.from(".header_list", {
            duration: 1,
            y: "-500px",
            ease: "back.out(1.7)"
        })

        gsap.from(".main", {
            duration: 1.5,
            opacity: 0,
            ease: "expo.inOut"

        })
        gsap.from(".main_img", {
            duration: 1.5,
            x: 500,
            ease: "power1.inOut"

        })
        new ScrollMagic.Scene({
            triggerElement: "#pricing"
        })
            .on("enter", function (e) {
                priceAnim.play();
            })
            .on("leave", function (e) {
                priceAnim.reverse();
            })
            .addTo(controller);


        new ScrollMagic.Scene({
            triggerElement: "#contactTrigger"
        })
            .on("enter", function (e) {
                contactAnim.play();
            })
            .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: "#footer"
        })
            .on("enter", function (e) {
                footerAnim.play();
            })
            .addTo(controller);
    })
}