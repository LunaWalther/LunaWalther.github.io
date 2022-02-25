let counter = 1;
<!-- alert("Willkommen bei Hangman"); --> 
const buttonContainer = document.querySelectorAll('.buttonContainer');
for (let i = 0; i < buttonContainer.length; i++) {
	buttonContainer[i].addEventListener('click', signalButton);
}


const svg = document.querySelector('svg');

document.getElementById("neustart").addEventListener('click', neustart);
 function neustart(event){
	 for (let i = 0; i < buttonContainer.length; i++) {
	     for (let j = 1; j < buttonContainer[i].children.length; j++){
			 buttonContainer[i].children[j].disabled = false;
		 }
	 }
	 counter = 1
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
  
  
  <!--
  if(counter < 2){
    document.getElementById("Luna").style.visibility = "visible";
  } else {
    document.getElementById("Yunus").style.visibility = "visible";
  }
  -->
  document.querySelector('svg').children[counter].style.visibility = "visible"
  counter++;  ;
}


