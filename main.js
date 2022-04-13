
const dev = document.querySelector(".Dev");
const menu = document.querySelector(".menu");
const bonjour = document.querySelector('.bonjour')

const TL1 = new TimelineMax({paused:true});

TL1
.from(dev,1,{x:-50,opacity:0})
.from(bonjour,1.4,{y:-50,opacity:0},'+=0.5')
.from(menu,1,{x:50,opacity:0},'-=2.8')

TL1.play();

