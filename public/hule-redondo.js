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
       var textElement = document.getElementById("text1");
       if(textElement.className) {
           textElement.className = "";
       }
      textElement.className = 'fadeOut';
      textElement.innerHTML = "Haz añadido " + name + ", ahora elige tu cantidad.";
      textElement.focus(); // use focus trick without setTimeOut
     textElement.className = 'fadeIn';
     textElement.style.color = "white";
}


//BUTTON 1


var button = document.getElementById("31");
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
  } else {
      if (form.contains(e.target)) {
          console.log("Fuck");
      } else {
      some();
      console.log("Clicked outside the box");
      }
  }
});
var button2 = document.getElementById("32");
button2.addEventListener("click", idss);


// BUTTON 3


var button3 = document.getElementById("33");
button3.addEventListener("click", idss);


//BUTTON 4


var button4 = document.getElementById("34");
button4.addEventListener("click", idss);



//BUTTON 5


var button5 = document.getElementById("35");
button5.addEventListener("click", idss);



var button6 = document.getElementById("36");
button6.addEventListener("click", idss);



var button7 = document.getElementById("37");
button7.addEventListener("click", idss);



var button8 = document.getElementById("38");
button8.addEventListener("click", idss);

