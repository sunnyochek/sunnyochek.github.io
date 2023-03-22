window.onload = setWraperHeight;
window.addEventListener("resize", setWraperHeight);

function setWraperHeight() {
  let lastProject = document.querySelector(".project:last-child");
  let style = getComputedStyle(lastProject);

  let marginTop = parseInt(style.marginTop);
  let marginBottom = 24;
  let height = parseInt(style.height);

  let wrapperHeight = (marginTop + height + marginBottom).toString() + "px";

  let r = document.querySelector(":root");
  r.style.setProperty("--wrapper-height", wrapperHeight);
}

function writeProjectLabel(event) {
  let projectLabelNode = document.getElementById("projectlabel");
 
  projectLabelNode.innerHTML = event.currentTarget.dataset.projectLabel;
  projectLabelNode.style.opacity = 1;
}

function cleanProjectLabel () {
    document.getElementById("projectlabel").style.opacity = 0;
}
