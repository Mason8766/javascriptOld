// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';



/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakNow(textToSpeak);


//Variable declerations
var nouns = ['The Turkey',"Mom","Dad","The Dog","My Teacher","The Elephant","The Cat"];
var verbs = ['Sat on', 'ate',"danced with",'saw','doesnt like','kissed'];
var adjactives = ['a funny','a scary','a goofy','a slimy','a barking','a fat'];
var nounsTwo = ['goat','monkey','fish','cow','frog','bug','worm'];
var places = ['on the moon','on the chair','in my spaghetti','in my soup','on the grass','in my shoes'];
var story = '';




//The following comments may be applied for all 5 word types
nounBTN.onclick = function(){ //if noun button is clicked
  let random =Math.floor(Math.random() * 7); //chose random number
  console.log(nouns[random]);//log it to console, for admin use
  speakNow(nouns[random]); //speak the random array value
  story+=nouns[random] + " "  ;  //store it to story
  document.getElementById("storyTxt").innerHTML = story; //displays text version of story
}

verbsBTN.onclick = function(){
  let random =Math.floor(Math.random() * 6);
  console.log(verbs[random]);
  speakNow(verbs[random]);
  story+=verbs[random] + " " ;
  document.getElementById("storyTxt").innerHTML = story;  
}

adjactivesBTN.onclick = function(){
  let random =Math.floor(Math.random() * 6);
  console.log(adjactives[random]);
  speakNow(adjactives[random]);
  story+=adjactives[random] + " ";   
  document.getElementById("storyTxt").innerHTML = story;
}

nounsTwoBTN.onclick = function(){
  let random =Math.floor(Math.random() * 6);
  console.log(nounsTwo[random]);
  speakNow(nounsTwo[random]);
  story+=nounsTwo[random] + " " ;  
  document.getElementById("storyTxt").innerHTML = story;
}

placesBTN.onclick = function(){
  let random =Math.floor(Math.random() * 6);
  console.log(places[random]);
  speakNow(places[random]);
  story+=places[random] + " " ;
  document.getElementById("storyTxt").innerHTML = story;  
}

playbackBTN.onclick = function(){//play back story function
  
  console.log(story);//submits story to console
  speakNow(story);//speaks story
  document.getElementById("storyTxt").innerHTML = story;
  
}
resetBTN.onclick = function(){
  
	story = "";//resets the story to a blank string, resesting the playbck memeroy
  document.getElementById("storyTxt").innerHTML = story;
	
  }
surpriseBTN.onclick = function(){ //randomly makes a new story
  
  story = "";
  let random =Math.floor(Math.random() * 7); //pick a random value
  story+=nouns[random] + " ";//add random vaslue to the story, based of the current array
  random =Math.floor(Math.random() * 6);
  story+=verbs[random] + " " ;
  random =Math.floor(Math.random() * 6);
  story+=adjactives[random] + " "  ;
  random =Math.floor(Math.random() * 6);     
  story+=nounsTwo[random] + " " ; 
  random =Math.floor(Math.random() * 6);
  story+=places[random] + " " ; 
  speakNow(story); //speak story
  document.getElementById("storyTxt").innerHTML = story;
  
}


