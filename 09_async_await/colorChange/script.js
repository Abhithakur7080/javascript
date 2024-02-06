//generate a random color with hex value
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
const button = document.querySelector("#btn");

let intervalRef;

const handleChangingColor = () => {
  if (button.innerHTML === "start") {
    button.innerHTML = "stop";
    if (!intervalRef) {
      intervalRef = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
      }, 1000);
    }
  } else {
    button.innerHTML = "start";
    clearInterval(intervalRef);
    intervalRef = null;
  }
};
button.addEventListener("click", handleChangingColor);
