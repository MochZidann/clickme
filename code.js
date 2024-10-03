function saklar() {
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");
  let toggle4 = document.getElementById("default-toggle4");
  let toggle5 = document.getElementById("default-toggle5");
  let toggle6 = document.getElementById("default-toggle6");
  let toggle7 = document.getElementById("default-toggle7");
  let toggle8 = document.getElementById("default-toggle8");
  let toggle9 = document.getElementById("default-toggle9");
  let toggle10 = document.getElementById("default-toggle10");
  let toggle11 = document.getElementById("default-toggle11");
  let toggle12 = document.getElementById("default-toggle12");
  let toggle13 = document.getElementById("default-toggle13");
  let toggle14 = document.getElementById("default-toggle14");
  let toggle15 = document.getElementById("default-toggle15");

  if (toggle14.checked) {
    lampu4.src = "assets/images/on.gif";
  } else if (toggle4.checked) {
    lampu4.src = "assets/images/on.gif";
  } else {
    lampu4.src = "assets/images/off.gif";
  }

  if (toggle12.checked) {
    lampu5.src = "assets/images/on.gif";
    lampu6.src = "assets/images/on.gif";
  } else if (toggle5.checked) {
    lampu5.src = "assets/images/on.gif";
  } else if (toggle6.checked) {
    lampu6.src = "assets/images/on.gif";
  } else {
    lampu5.src = "assets/images/off.gif";
    lampu6.src = "assets/images/off.gif";
  }

  if (toggle13.checked) {
    lampu7.src = "assets/images/on.gif";
    lampu8.src = "assets/images/on.gif";
    lampu9.src = "assets/images/on.gif";
    lampu10.src = "assets/images/on.gif";
  } else if (toggle7.checked) {
    lampu7.src = "assets/images/on.gif";
  } else if (toggle8.checked) {
    lampu8.src = "assets/images/on.gif";
  } else if (toggle9.checked) {
    lampu9.src = "assets/images/on.gif";
  } else if (toggle10.checked) {
    lampu10.src = "assets/images/on.gif";
  } else {
    lampu7.src = "assets/images/off.gif";
    lampu8.src = "assets/images/off.gif";
    lampu9.src = "assets/images/off.gif";
    lampu10.src = "assets/images/off.gif";
  }

  if (toggle11.checked) {
    lampu1.src = "assets/images/on.gif";
    lampu2.src = "assets/images/on.gif";
    lampu3.src = "assets/images/on.gif";
  } else if (toggle1.checked) {
    lampu1.src = "assets/images/on.gif";
  } else if (toggle2.checked) {
    lampu2.src = "assets/images/on.gif";
  } else if (toggle3.checked) {
    lampu3.src = "assets/images/on.gif";
  } else {
    lampu1.src = "assets/images/off.gif";
    lampu2.src = "assets/images/off.gif";
    lampu3.src = "assets/images/off.gif";
  }
