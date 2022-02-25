let word = "HANGMAN";
let counter = 1;
<!-- alert("Willkommen bei Hangman"); --> 
const buttonContainer = document.querySelectorAll('.buttonContainer');
for (let i = 0; i < buttonContainer.length; i++) {
	buttonContainer[i].addEventListener('click', signalButton);
}


const svg = document.querySelector('svg');
const letterContainer = document.querySelector('.word');

document.getElementById("neustart").addEventListener('click', neustart);
 function neustart(event){
	 for (let i = 0; i < buttonContainer.length; i++) {
	     for (let j = 0; j < buttonContainer[i].children.length; j++){
			 buttonContainer[i].children[j].disabled = false;
		 }
	 }
	 counter = 1
	 <!-- schleife bei 1 wegen dem Blauen hintergrund -->
     for (let i = 1; i < svg.children.length; i++) {
          document.querySelector('svg').children[i].style.visibility = "hidden" ;
		}

 }


function signalButton(event){
  <!-- damit bekommt man das auslösende Element, unseren <button...> -->
  const button = event.target;
  
  <!--
   if (button.nodeName !== 'BUTTON') {
    return;
  }
  -->
  
  
  <!-- damit bekommt man den Wert des Buttons <button..>WERT</button> -->
  const letter = button.textContent;
  
  
  
  <!-- damit kann man den Button deaktivieren -->
   button.disabled = true; 
  
  if (word.includes(letter)){
	  <!--document.querySelector("word").innerHTML = letterContainer;-->
	  for (let i = 1; i < word.length; i++){
        if (word[i] == letter){
			letterContainer.children[i].innerHTML=letter;
	    }		  
	  }
	  <!--Wenn der Buchstabe im Wort ist-->
	  
  }  else{ <!-- wenn der Buchstabe nicht da ist-->
	  document.querySelector('svg').children[counter].style.visibility = "visible";
      counter++; 
	 
  }
  
 
  if (gewonnen()){
	  setTimeout(()=>{
		  alert("Du hast gewonnen");
	  },500);
	  
  }
  else {
   if (counter>=12){
	   setTimeout(()=>{
		  alert("Du hast verloren!");
	  },500);
   }
  }
}


function gewonnen(){
      for (let i = 1; i < letterContainer.children.length; i++){
        if (letterContainer.children[i].innerHTML == ""){
		   return false;
	    }		  
	  }
	  return true;
}