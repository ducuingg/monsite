const loader=document.querySelector(".loader");

window.addEventListener("load",() => {

	loader.classList.add("fondu-out");
})

const titre = document.querySelector(".Dev");
const menu = document.querySelector(".menu");
const imgcode = document.querySelector('.imgcode')
const bonjour = document.querySelector('.bonjour')

const TL1 = new TimelineMax({paused:true});

TL1
.from(titre,1,{y:-100,opacity:0})
.from(bonjour,1,{y:-100,opacity:0})
.from(menu,1,{x:100,opacity:0}, '-=0.5')
.from(imgcode,1,{y:-40,opacity:0}, '-=0.5')

TL1.play();


function car(){
	nbr=3;
	p=0;
	container=document.getElementById("containerx");
	g=document.getElementById("g");
	d=document.getElementById("d");
	container.style.width=(800*nbr)+"px";
	for(i=1;i<=nbr;i++){
		div=document.createElement("div");
		div.className="photo";
		div.style.backgroundImage="url('images/im"+i+".jpg')";
		container.appendChild(div);
	}
	afficherMasquer();

}
g.onmouseover=function(){
	if(p>-nbr+1)
	p--;
	container.style.transform="translate("+p*800+"px)";
	container.style.transition="all 3s ease";
	afficherMasquer();
}
d.onmouseover=function(){
	if(p<0)
	p++;
	container.style.transform="translate("+p*800+"px)";
	container.style.transition="all 3s ease";
	afficherMasquer();
}
function afficherMasquer(){
	if (p==-nbr+1)
		g.style.visibility="hidden";
	else
		g.style.visibility="visible";
	if (p==0)
		d.style.visibility="hidden";
	else
		d.style.visibility="visible";
}


/*
tab=["Bonjour, je suis Guillaume. Heureux de vous rencontrer !"];
         i=0;
         dir="G";
         index=0;
         function f(){
          t=setTimeout("f()",80);
          document.getElementById("presentation").innerHTML=tab[index%2].substring(0,i);
          if(dir=="G"){
            i+=1;
            
            }
            /*
            if(dir=="D"){
               i-=1;
               if(i<-5){
                  dir='G';
                  index+=1;
               }
            }*/

       //}



function init(){
	//f();
	car();
}