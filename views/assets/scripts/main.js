
// let app = document.querySelector(".app");
//
//
// app.addEventListener("click", () => {
//   if(app.style.backgroundColor === "black") {
//     app.style.backgroundColor = "white";
//   } else {
//     app.style.backgroundColor = "black";
//   }
// });

let quoteApp = (() => {
  let number = document.querySelector(".number"),
      button = document.querySelector(".button");


    function init () {
      buttonsInit();
    }

    function buttonsInit () {
      button.addEventListener("click", () => {
        newNumber();
      });
    }

    function newNumber() {
      number.innerHTML = generateRandomNumber();
    }

    function generateRandomNumber () {
      var randNum = Math.floor(Math.random() * 100);
      return randNum;
    }

    return {
      init: init
    }

})()

quoteApp.init();
