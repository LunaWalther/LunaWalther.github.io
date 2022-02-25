<!-- alert("Willkommen bei Hangman"); --> 
const buttonContainer = document.querySelector('.buttonContainer');
buttonContainer.addEventListener('click', signalButton);




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
  
  alert("Der gedrückte Button war: " + letter);
  
  <!-- damit kann man den Button deaktivieren -->
  <!-- button.disabled = true; -->
  
  document.getElementById("Luna").style.color = "blue";
  
}


