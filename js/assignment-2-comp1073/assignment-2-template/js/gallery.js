class flowers { // flower class containing all aspects of flower
    constructor(title,src,example) {
        this.title = title; //Name of flower type
        this.src = src;//image src
        this.example = example;//examples of colored flowers
      }
};

//The creation of objects , based on each color of flower
let purple = new flowers("Purple Flower","images/flowers-purple-large.jpg","Teasel,Sweet rocket, & Alliums");
let pink = new flowers("Pink Flower","images/flowers-pink-large.jpg","Azalea, Begonias, & Calla Lily");
let red = new flowers("Red Flower","images/flowers-red-large.jpg","Marigold, Anemone, & Rose");
let white = new flowers("White Flower","images/flowers-white-large.jpg","Heliotrope, Petunia, & Wisteria");    
let yellow = new flowers("Yellow Flower","images/flowers-yellow-large.jpg","Marigold, Lilium, & Calla Lily");

BTNpurple.onclick = function(){ //if flower image clicked
   
    document.getElementById("large").src = purple.src; //change the large pic url
    document.getElementById("fig").innerHTML = purple.title; //change the fig caption
    document.getElementById("desc").innerHTML = purple.example  ; //change the list of example flowers
    document.body.style.backgroundColor = "purple"; //changes background
    
}
BTNpink.onclick = function(){

    document.getElementById("large").src = pink.src;
    document.getElementById("fig").innerHTML = pink.title;
    document.getElementById("desc").innerHTML = pink.example  ;
    document.body.style.backgroundColor = "pink";
}
BTNred.onclick = function(){
 
    document.getElementById("large").src = red.src;
    document.getElementById("fig").innerHTML = red.title;
    document.getElementById("desc").innerHTML = red.example;
    document.body.style.backgroundColor = "red";
}
BTNwhite.onclick = function(){
 
    document.getElementById("large").src = white.src;
    document.getElementById("fig").innerHTML = white.title;
    document.getElementById("desc").innerHTML = white.example  ;
    document.body.style.backgroundColor = "white";
}
BTNyellow.onclick = function(){
 
    document.getElementById("large").src = yellow.src;
    document.getElementById("fig").innerHTML = yellow.title;
    document.getElementById("desc").innerHTML = yellow.example  ;
    document.body.style.backgroundColor = "yellow";
}