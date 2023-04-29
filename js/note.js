var container2 = document.getElementsByClassName("desk-area")[0];
var container3 = document.getElementsByClassName("note-create")[0];
var container4 = document.getElementsByClassName("desk-area-progress")[0];
var container5 = document.getElementsByClassName("desk-area-done")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0;
var nextContainer = container4
var isClicked = false

xIcon.addEventListener("click", function () {
  typeNote();
});

checkIcon.addEventListener("click", function () {
  createNote();
});

function typeNote() {
  if (container3.style.display == "none") {
    container3.style.display = "block";
  } else {
    container3.style.display = "none";
  }
}

function createNote() {
  var noteText = document.getElementById("note-text").value;
  var node0 = document.createElement("div");
  var node1 = document.createElement("p");

  node1.innerHTML = noteText;

  node1.setAttribute(
    "style",
    "width: 12rem; height: 12rem; font-size: 1.5rem; text-align: left; padding: .5rem; margin-top: .5rem; overflow: hidden; box-shadow: 0 1rem 2.4rem 0 rgba(0,0,0, 0.75);"
  );

  node1.style.transform = rotate();
  node1.style.background = color();

  node0.appendChild(node1);

  container2.insertAdjacentElement("beforeend", node0);

  node0.addEventListener("mouseenter", function () {
    node0.style.transform = "scale(1.1)";
  });

  node0.addEventListener("mouseleave", function () {
    node0.style.transform = "scale(1)";
  });


  node0.addEventListener('click', function(){
    nextContainer.appendChild(node0)
    nextContainer = (nextContainer === container4) ? container5 : container4

    node0.classList.add('delete')
  })

  document.getElementById("note-text").value = "";
}

function rotate() {
  var random_rotate = [
    "rotate(10deg)",
    "rotate(3deg)",
    "rotate(1deg)",
    "rotate(-1deg)",
    "rotate(-3deg)",
    "rotate(-5deg)",
  ];

  return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
  var random_color = [
    "#ff3de8",
    "#3dc2ff",
    "#04e022",
    "#bc83e6",
    "#ebb328",
  ];

  if (i > random_color.length - 1) {
    i = 0;
  }

  return random_color[i++];
}
