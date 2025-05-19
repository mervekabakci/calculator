//degişken tanımlamaları
let userInfoForm = document.getElementById("userInfoForm");
let inputElements = document.querySelector("input");

let savedButton = document.getElementById("savedButton");

let resultText = document.getElementById("result");

//ilk sayı option
let firstNumber = document.getElementById("firstNumber");
//İkinci sayı option
let secondNumber = document.getElementById("secondNumber");
//işlem operatoru select
let processing = document.getElementById("processing");

function processingFunction() {
    let firstNumberValue = firstNumber.value;
    let secondNumberValue = secondNumber.value;
    let processingValue = processing.value;
    console.log("first number : " + firstNumberValue);
    console.log("secondNumber number : " + secondNumberValue);
    console.log("processing number : " + processingValue);

    if(processingValue === "cikartma"){
        if(firstNumberValue < secondNumberValue){
            alert("Çıkartma işleminde 1. sayı 2. sayıdan küçük olamaz");
        }
        else{
            resultText.innerHTML = Number(firstNumberValue) - Number(secondNumberValue);
        }
    }
    else if(processingValue === "toplama"){
        resultText.innerHTML = Number(firstNumberValue) + Number(secondNumberValue);
    }
    else if(processingValue === "carpma"){
        resultText.innerHTML = Number(firstNumberValue) * Number(secondNumberValue);
    }
    else if(processingValue === "bolme"){
        if(firstNumberValue < secondNumberValue){
            alert("Bölme işleminde 1. sayı 2. sayıdan küçük olamaz");
        }
        else{
            resultText.innerHTML = Number(firstNumberValue) / Number(secondNumberValue);
        }
    }
}


// bootstrap form validation
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else if (form.checkValidity()) {
            processingFunction();
            //herhangı bır gonderım action olmadıgında gonderım ıslemını durdurmak ıcın sayfanın yenılenmesını engellemek ıcın
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
