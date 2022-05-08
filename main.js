
const dev = document.querySelector(".Dev");
const menu = document.querySelector(".menu");
const bonjour = document.querySelector('.bonjour')

const TL1 = new TimelineMax({paused:true});

TL1
.from(dev,1,{x:-50,opacity:0})
.from(bonjour,1.4,{y:-50,opacity:0},'+=0.5')
.from(menu,1,{x:50,opacity:0},'-=2.8')

TL1.play();

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

// window.addEventListener("scroll",function(){

//     var menu = document.querySelector(".menulateral");

//     window.scrollY.value == menu.scrollTop
// })

//--------------------------------JEU

// setInterval(personnage,2000)

function personnage(){

    $(".personnage").animate({
        "top":"+=35px"
    },2500,"linear",function(){
        $(this).css({
            "top":"770px"
        });
    });
}

$(document).keydown(function (e) { 
    switch(true){
        case(e.which == 39)://droite
        if($(".personnage").offset().left<1800){
            $(".personnage").css({
                "left":"+=42",
            })
            $(".missile").css({
                "left":"+=42",
            })
        }
        break;
        case(e.which == 37)://gauche
        if($(".personnage").offset().left>0){
            $(".personnage").css({
            "left":"-=42",
            })
            $(".missile").css({
                "left":"-=42",
                })
        }
        break;
    }
});

$(document).keydown(function(e){
    if(e.which == 32 ){

$(".missile").animate({
    "top":"-=950px"
},500,"linear",function(){
    $(this).css({
        "top":" 870px"
    });
});
}
});

$(document).mousedown(function(e){
if($(".blocsouris").mouseover()){

$(".missile").animate({
    "top":"-=950px"
},500,"linear",function(){
    $(this).css({
        "top":" 870px",

    });
});
}
});

$(".blocsouris").mousemove(function(event){
       $(".personnage").attr("style","margin-left:"+event.pageX+"px; margin-top:"+event.pageY+"px");
    $(".missile").attr("style","margin-left:"+event.pageX+"px; margin-top:"+event.pageY+"px");
    });
