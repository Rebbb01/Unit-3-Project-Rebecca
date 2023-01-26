/* Declare variables below to save the different sections (divs) of your story*/
let friendlyplasticbags2= document.querySelector(".option-one-screen");

let Ordinaryplasticbags2 = document.querySelector(".option-two-screen");
let friendlyplasticbags3= document.querySelector(".option-one-end");
let friendlyplasticbags = document.querySelector(".option-two-end");
let OpeningMessage = document.querySelector(".message");
let Question = document.querySelector(".question");
let BagButton = document.querySelector(".option-one");
let BagButton2 = document.querySelector(".option-two");
let title= document.querySelector(".title");
let Environment= document.querySelector(".Environment");
let changecolor= document.querySelector("h1");
let threeButton=document.querySelector(".option-three");
let fourButton=document.querySelector(".option-four");

// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!


BagButton.onclick=function(){
    
 friendlyplasticbags2.style.display="block";
   changecolor.style.color="blue";

};
console.log(BagButton);

BagButton2.onclick=function(){
    
 Ordinaryplasticbags2.style.display="block";
   changecolor.style.color="blue";

};
console.log(BagButton);


threeButton.onclick=function(){
 Ordinaryplasticbags2.style.display="block";
};
console.log(BagButton);

threeButton.onclick=function(){
    
 friendlyplasticbags3.style.display="block";
   changecolor.style.color="blue";

};
console.log(BagButton);

fourButton.onclick=function(){
    
 friendlyplasticbags.style.display="block";
   changecolor.style.color="blue";

};


console.log(BagButton);

title.onclick=function(){
    title.innerHTML="Protect!!";
};