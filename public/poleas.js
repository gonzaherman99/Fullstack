var name;

function some() {
    var textElement = document.getElementById("text1");
    textElement.className = "fadeOut2";
    function await() {
        textElement.innerHTML = "";
    }
    setTimeout(await, 1000);
}

function something(json) {
       name = json.data.name;
       var box = document.getElementById("btns");
        var textElement = document.getElementById("text1");
       if(textElement.className) {
           textElement.className = "";
       }
      textElement.className = 'fadeOut';
      textElement.innerHTML = "Haz añadido " + name + ", ahora elige tu cantidad.";
      box.className = "btns2";
      textElement.focus(); // use focus trick without setTimeOut
     textElement.className = 'fadeIn';
     textElement.style.color = "white";
}


//BUTTON 1


var button = document.getElementById("21");
button.addEventListener("click", idss);
function idss() {
    var id = this.id;
    var data = {
    name : id 
    }
 fetch("/clicked", {
     method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    }, 
     body: JSON.stringify(data)
})
   .then(response => response.json() )
   .then(json => (something(json)))  //{
    .catch(err => {
       console.log(err);
    });
}
var form = document.getElementById("btns");
window.addEventListener("click", function(e){   
  if (button.contains(e.target)){
    // Clicked in box
      console.log("Fuck");
  } else if (button2.contains(e.target)) {
      console.log("Fuck");
 } else if (button3.contains(e.target)) {
      console.log("Fuck");
  } else if (button4.contains(e.target)) {
      console.log("Fuck");
  } else if (button5.contains(e.target)) {
      console.log("Fuck");
  } else if (button6.contains(e.target)) {
      console.log("Fuck");
  } else if (button7.contains(e.target)) {
      console.log("Fuck");
  } else if (button8.contains(e.target)) {
      console.log("Fuck");
  } else if (button9.contains(e.target)) {
      console.log("Fuck");
  } else if (button10.contains(e.target)) {
      console.log("Fuck");
  } else if (button11.contains(e.target)) {
      console.log("Fuck");
  } else if (button12.contains(e.target)) {
      console.log("Fuck");
  } else if (button13.contains(e.target)) {
      console.log("Fuck");
  } else if (button14.contains(e.target)) {
      console.log("Fuck");
  } else if (button15.contains(e.target)) {
      console.log("Fuck");
  } else if (button16.contains(e.target)) {
      console.log("Fuck");
  } else if (button17.contains(e.target)) {
      console.log("Fuck");
  } else if (button18.contains(e.target)) {
      console.log("Fuck");
  }  else if (button19.contains(e.target)) {
      console.log("Fuck");
  } else if (button20.contains(e.target)) {
      console.log("Fuck");
  } else if (button21.contains(e.target)) {
      console.log("Fuck");
  } else if (button22.contains(e.target)) {
      console.log("Fuck");
  } else if (button23.contains(e.target)) {
      console.log("Fuck");
  } else if (button24.contains(e.target)) {
      console.log("Fuck");
  } else {
      if (form.contains(e.target)) {
          console.log("Fuck");
      } else {
      some();
      console.log("Clicked outside the box");
      }
  }
});


var button2 = document.getElementById("22");
button2.addEventListener("click", idss);


// BUTTON 13


var button3 = document.getElementById("23");
button3.addEventListener("click", idss);


//BUTTON 14


var button4 = document.getElementById("24");
button4.addEventListener("click", idss);


//BUTTON 15

var button5 = document.getElementById("25");
button5.addEventListener("click", idss);


//BUTTON 16


var button6 = document.getElementById("26");
button6.addEventListener("click", idss);


//BUTTON 17

var button7 = document.getElementById("27");
button7.addEventListener("click", idss);


///BUTTON 18

var button8 = document.getElementById("28");
button8.addEventListener("click", idss);


//BUTTON 19


var button9 = document.getElementById("29");
button9.addEventListener("click", idss);


//BUTTON 20


var button10 = document.getElementById("210");
button10.addEventListener("click", idss);


//BUTTON 21


var button11 = document.getElementById("211");
button11.addEventListener("click", idss);


//BUTTON 212


var button12 = document.getElementById("212");
button12.addEventListener("click", idss);


//BUTTON 213


var button13 = document.getElementById("213");
button13.addEventListener("click", idss);


//BUTTON 214


var button14 = document.getElementById("214");
button14.addEventListener("click", idss);


//BUTTON 215


var button15 = document.getElementById("215");
button15.addEventListener("click", idss);


//BUTTON 216


var button16 = document.getElementById("216");
button16.addEventListener("click", idss);


//BUTTON 217


var button17 = document.getElementById("217");
button17.addEventListener("click", idss);


//BUTTON 218


var button18 = document.getElementById("218");
button18.addEventListener("click", idss);


//BUTTON 219


var button19 = document.getElementById("219");
button19.addEventListener("click", idss);


//BUTTON 220


var button20 = document.getElementById("220");
button20.addEventListener("click", idss);


//BUTTON 221


var button21 = document.getElementById("221");
button21.addEventListener("click", idss);


//BUTTON 222


var button22 = document.getElementById("222");
button22.addEventListener("click", idss);


//BUTTON 223


var button23 = document.getElementById("223");
button23.addEventListener("click", idss);


//BUTTON 224


var button24 = document.getElementById("224");
button24.addEventListener("click", idss);