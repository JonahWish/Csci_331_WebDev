window.addEventListener("DOMContentLoaded", domLoaded);

// When the DOM has finished loading, add the event listeners.
function domLoaded() {
   // TODO: Use addEventListener() to register a click event handler for the convert button.
   const convert_button = document.getElementById("convertButton")
   convert_button.addEventListener("click", convert)

   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#add_a_simple_listener

   // Add event listeners to handle clearing the box that WAS NOT clicked,
   // e.g., the element C_in listens for 'input', with a callback fn to
   // execute after that event does happen. 
   const c_input = document.getElementById("C_in")
   c_input.addEventListener("input", clearF)
   
   const f_input = document.getElementById("F_in")
   f_input.addEventListener("input", clearC)

   // You don't send arguments to the event handler function.
   // So, if you want the event handler to call another function that
   // DOES take arguments, you can send that other function as a callback.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#event_listener_with_anonymous_function
   // Here is an example of anonymous event handler fn that calls alert with an argument:
   // document.getElementById("weatherIcon").addEventListener("click", function() {alert("You clicked the icon.")})

}
// TODO: (Part of the above is to write the functions to be executed when the event handlers are invoked.)

function convertCtoF(C) {
   // TODO: Return temp in °F. 
   // °F = °C * 9/5 + 32
   return C * 9/5 + 32;
}

function convertFtoC(F) {
   // TODO: Return temp in °C. 
   // °C = (°F - 32) * 5/9
   return (F-32)*5/9;
}

function clearF(){
   //
   const f_input = document.getElementById("F_in")
   f_input.value = ""
}

function clearC(){
   const c_input = document.getElementById("C_in")
   c_input.value = ""
}

// TODO: write a fn that can be called with every temp conversion
function convert(){
   // to display the correct weather icon.
   
   const Fahrenheit_in  = document.getElementById("F_in");
   const Celsius_in     = document.getElementById("C_in");
   const message        = document.getElementById("message")


   var F_temp = ""
   var C_temp = ""
   message.textContent = ""
   if(Celsius_in.value !== ""){
      F_temp = convertCtoF(Celsius_in.value)
      Fahrenheit_in.value = F_temp
   }
   else if( Fahrenheit_in.value !== ""){
      C_temp = convertFtoC(Fahrenheit_in.value)
      F_temp = Fahrenheit_in.value
      Celsius_in.value = C_temp
   }
   else{
      Fahrenheit_in.value = ""
      Celsius_in.value = ""
      message.textContent = "Enter a temperature to convert"
   }


   const icon = document.getElementById("weatherIcon")
   if(F_temp === ""){
      icon.src = "images/C-F.png"
   }
   else if(F_temp <= -200 || F_temp >= 200){
      icon.src = "images/dead.png"
   }
   else if(F_temp <= 32 && F_temp > -200){
      icon.src = "images/cold.png"
   }
   else if(F_temp < 90){
      icon.src = "images/cool.png"
   }
   else if(F_temp < 200){
      icon.src = "images/hot.png"
   }



   // Based on degrees Fahrenheit:
   // 32 or less, but above -200: cold
   // 90 or more, but below 200: hot
   // between hot and cold: cool
   // 200 or more, -200 or less: dead
   // both input fields are blank: C-F
}

