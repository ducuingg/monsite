
const dev = document.querySelector(".Dev");
const menu = document.querySelector(".menu");
const bonjour = document.querySelector('.bonjour')

const TL1 = new TimelineMax({paused:true});

TL1
.from(dev,1,{x:-50,opacity:0})
.from(bonjour,1.4,{y:-50,opacity:0},'+=0.5')
.from(menu,1,{x:50,opacity:0},'-=2.8')

TL1.play();


function zoom(){

var imgzoom = document.querySelector(".contentphoto img");
window.addEventListener("scroll",()=>{
    if(window.scrollY>4400){
        imgzoom.style = "width:50vw "
    }
    if(window.scrollY>4450){
        imgzoom.style = "width:55vw"
    }
    if(window.scrollY>4500){
        imgzoom.style = "width:60vw"; 
    }
    if(window.scrollY>4550){
        imgzoom.style = "width:65vw"; 
    }
    if(window.scrollY>4600){
        imgzoom.style = "width:70vw";  
    }
    if(window.scrollY>4650){
        imgzoom.style = "width:75vw"; 
    }
    if(window.scrollY>4700){
        imgzoom.style = "width:80vw"; 
    }
    if(window.scrollY>4750){
        imgzoom.style = "width:85vw"; 
    }
    if(window.scrollY>4800){
        imgzoom.style = "width:90vw"; 
    }
    if(window.scrollY>4850){
        imgzoom.style = "width:95vw"; 
    }
    if(window.scrollY>4900){
        imgzoom.style = "width:100vw" 
    }
});

}
zoom();

document.addEventListener("scroll",function(){

let designer = document.querySelector("#designer");
let codeur = document.querySelector("#codeur");

if(window.scrollY>400){


}
if(window.scrollY>800){

}
if(window.scrollY>1200){

}
});

//--------------------------------JEU

let x=1;
//---------bouton toogle----
$(".jouer").click(function (e) { 
    e.preventDefault();
    let x=1;
    if($(".conteneurciel").is(":hidden")){
       $(".conteneurciel").slideDown().css("display","block");
       $(".conteneurjeu").slideDown().css("display","block");
    //    $(".jouer").css("margin-top","-=7em");
       $(".jouer").animate({
        "top":"-=13em"
    },490,"linear",function(){
        $(this).css({
            "top":"13em",
            "animation":"none"
        });
    });
       x=0;
    }
    if(x==1){
        $(".conteneurciel").slideUp().css("display","none");
        $(".conteneurjeu").slideUp().css("display","none");
        $(".jouer").animate({
            "top":"+=14.5em"
        },490,"linear",function(){
            $(this).css({
                "top":"27em",
                "animation":"move 5s ease-in-out alternate infinite"
            });
        });
        x=1;
}
});
//     // JEU
//     setInterval(son);
//     setInterval(resetPlane,1800);
//     setInterval(animCiel);
//     setInterval(animRocket,2000)
//     let win = 0;
//     if(x==0){
//     let missile = new Audio("missile.mp3");
//     missile.play();
//     missile.loop=true;
//     let explosion = new Audio("explosion.mp3");
// }

// // -----------ANIMATION CIEL----------------------------------
//     function animCiel(){
//     $(".conteneurciel").animate({
//         "left":"-=3500px"
//     },195000,"linear",function(){$(this).css({
//         "left":"0px"
//     });
//     animCiel();
// });
//     }
// // -----------ANIMATION AVION----------------------------------
//     $(document).keydown(function (e) { 
//         switch(true){
//             case(e.which == 38)://HAUT
//                 if($(".avion").offset().top>810){
//                     $(".avion").css({
//                         "bottom":"+=41",
//                         "transform":"rotate(-1deg)"              
//                     })
//                 }
//             break;
//             case(e.which == 40)://BAS
//                 if($(".avion").offset().top<1020){
//             $(".avion").css({
//                 "bottom":"-=42",
//                 "transform":"rotate(5deg)"
//             })
//                 }
//             break;
//         }
//     });
// // -----------ANIMATION ROCKET----------------------------------
//     function animRocket(){ 

//         $(".rocket").delay(1800).animate({
//             "left":"-=2550px"
//         },1900,"linear",function(){
//             let x = Math.random();
//             $(this).css({
//                 "left":"-201px",
//                 "bottom" :`${Math.floor((x*22)-13)}3px`
//             });
//         });
//         }
// // -----------SON----------------------------------
// function son(){
//         let monavion =$(".avion");
//         let marocket =$(".rocket");
//         let avionPosTop = parseInt(monavion.position().top);
//         let rocketPosTop = parseInt(marocket.position().top);
//         let avionlargeur = monavion.width();
//         let avionhauteur = monavion.height();
//         let rockethauteur = marocket.height();
//         let rocketlargeur = marocket.width();
//         let rocketPosLeft = parseInt(marocket.offset().left)
//         if(avionlargeur+260>rocketPosLeft && (( avionPosTop+75 > rocketPosTop && avionPosTop-45 < rocketPosTop ))){
//             $(".avion").attr("src", "images/explosion.png").fadeOut();
//             let number = $("h3");
//             win++;
//             number.html(win)        
//             $(".rocket").stop(true,true);
//             explosion.play()
//             return true
//         }        
//     }
// function resetPlane(){
//         let valid = son();
//         // if (valid){
//             $(".avion").attr("src", "images/plane3.png").fadeIn();
//         // }
//     }

    //--------------------menu latéral sticky--------------------------

    const sticky = document.querySelector(".menulateral");
    let fleche = document.querySelector("i.fa-circle-chevron-up");

    const posYNav = sticky.offsetTop;
    // console.log(posYNav);

    window.addEventListener('scroll',()=>{
        if(window.scrollY > posYNav + 25){
            sticky.style.position = "fixed";
            sticky.style.top = "1em";
            sticky.style.opacity = "0.7";
            fleche.style.display = "flex";
            fleche.style.animation = " 0.6s menulateral infinite alternate ";
            sticky.style.height ="23.5em";
        }
        else if (window.scrollY < posYNav - 110){
            sticky.style.position =  "absolute";
            sticky.style.top = "12em";
            sticky.style.opacity = "1";
            fleche.style.display = "none";
            sticky.style.height ="19em";
        }
    })

    //----------------menu formulaire-------
    function toggleform(){

    const envoi = document.querySelector("#mailme");
    const form = document.querySelector("form");
    envoi.addEventListener("click",()=>{
       form.classList.toggle("formtoggle");
    })
}
toggleform();