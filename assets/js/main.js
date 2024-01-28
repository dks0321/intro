const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

$(document).mousemove(function(e){
    gsap.to('.custom-cursor',{
        x:e.clientX,
        y:e.clientY
    })
})

 //header
 gsap.to('.header  .video-box',{
    scrollTrigger:{
        trigger:".header",
        start:"0 10%",
        end:"100% 100%",
        //markers:true,
        scrub:1,
    },
    width:"100%",
    yPercent:30,
    borderRadius: "400px",
})
//header txt
const subTxt = new SplitType('.header .subtitle-area', { types: 'words, chars', });
setTimeout(() => {
    $('.subtitle-area').addClass('on')
    gsap.from('.header .subtitle-area .char',{
        opacity:0,
        yPercent:40,
        stagger:1,
    })
}, 500);

$('.gnb-item a').on('click', function() {  
    $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1000);
    return false;
});

//sc-visual
setTimeout(() => {
    gsap.to('.sc-visual .wrap',{
        opacity:1,
        yPercent:-30,
        stagger:0.5,
    })
}, 500);

$('[data-scroll]').each(function(i,el){
    yVal=$(this).data('scroll');
    gsap.to(el,{
        scrollTrigger:{
            trigger:el,
            start:"0 100%",
            end:"100% 0%",
            // markers:true,
            scrub:1,
        },
        yPercent:yVal
    })    
})

gsap.to('.marquee .wrap.lt',20,{
    xPercent:-50,
    ease:'none',
    repeat:-1,
})
gsap.to('.marquee .wrap.rt',20,{
    xPercent:50,
    ease:'none',
    repeat:-1,
})

//sc-build
gsap.to('.sc-build .bg',{
    scrollTrigger:{
        trigger:".sc-build",
        start:"0 50%",
        end:"100% 100%",
        //markers:true,
        scrub:1,
    },
    xPercent:-15
})

//sc-skill
$('.skill-wrap').hover(function(){
    $(this).stop().addClass('back')
}, function(){
    $(this).siblings().stop().removeClass('back')
})




