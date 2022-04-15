
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


