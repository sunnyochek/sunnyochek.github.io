window.onload = setWraperHeight;
window.addEventListener("resize", setWraperHeight);

// function start() {
//     setWraperHeight();
// }

function setWraperHeight() {
  let lastProject = document.querySelector(".project:last-child");
  let style = getComputedStyle(lastProject);

  let marginTop = parseInt(style.marginTop);
//   let marginBottom = 0.05 * document.body.clientWidth;
  let marginBottom = 24;
  let height = parseInt(style.height);

  let wrapperHeight = (marginTop + height + marginBottom).toString() + "px";

  let r = document.querySelector(":root");
  r.style.setProperty("--wrapper-height", wrapperHeight);
}

function writeProjectLabel(a) {
  let element = a.target;
  document.getElementById("projectlabel").innerHTML = element.id;
  document.getElementById("projectlabel").style.opacity = 1;
  console.log(element.id);
}

function cleanProjectLabel () {
    document.getElementById("projectlabel").style.opacity = 0;
}
