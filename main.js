var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
   crsr.style.left = dets.x+"px"
   crsr.style.top = dets.y+20+"px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -70%",
        scrub:2
        
    }
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    console.log(elem)
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:3,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
       // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
     //   markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:1
    }
})

gsap.from("#quotes1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#quotes1",
    scroller:"body",
   // markers:true,
    start:"top 55%",
    end:"top 5%",
    scrub:4
  }
    })

    gsap.from("#quotes2",{
        y:70,
        x:70,
        scrollTrigger:{
          trigger:"#quotes1",
          scroller:"body",
        //  markers:true,
          start:"top 55%",
          end:"top 5%",
          scrub:4
        }
          })

          gsap.from("#page4 h1" ,{
            y:50,
            scrollTrigger:{
                trigger:"#page4 h1",
                scroller:"body",
                start:"top 75%",
                end:"top 70%",
                scrub:2
          }
        })