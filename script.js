function randomPinHandler() {
  const randomNum = Math.random() * 10000;
  const pin = (randomNum + "").split(".")[0];
  const ganaratePIn = document.getElementById("randomPin");
  ganaratePIn.value = pin;
  if (pin.length === 4) {
    return pin;
  } else {
    return randomPinHandler();
  }
}

const desigitContianer = document.getElementById("digite-container");
desigitContianer.addEventListener("click", function (event) {
  const digite = event.target.innerText;
  if (isNaN(digite)) {
   if (digite === "C") {
    const typeInput = document.getElementById("inputPin");
    typeInput.value = "";
   }

  } else {
    const typeInput = document.getElementById("inputPin");
    typeInput.value = typeInput.value + digite;
  }
});

function varifyPin() {
  const pin = document.getElementById("randomPin").value;
  const typePin = document.getElementById("inputPin").value;

  if (pin === typePin) {
    // const currectPin = document.getElementById("currectPin");
    // currectPin.style.display = "block";
    // const inCurrectPin = document.getElementById("inCurrentPin");
    // inCurrectPin.style.display = "none";
    getPinNotify("block" , "none")
  } else {
    // const currectPin = document.getElementById("currectPin");
    // currectPin.style.display = "none";
    // const inCurrectPin = document.getElementById("inCurrentPin");
    // inCurrectPin.style.display = "block";
    getPinNotify("none", "block")
    
  }

}
function getPinNotify(currectPinStatas, inCurrectPinStatas){
    const currectPin = document.getElementById("currectPin");
    currectPin.style.display = currectPinStatas;
    const inCurrectPin = document.getElementById("inCurrentPin");
    inCurrectPin.style.display = inCurrectPinStatas;
}
