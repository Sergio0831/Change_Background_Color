const colors = [
  "red",
  "blue",
  "yellow",
  "green",
  "orange",
  "indigo",
  "purple",
  "brown",
  "violet",
  "pink",
  "maroon",
];

const button = document
  .getElementById("btn")
  .addEventListener("click", function randomBackgroundColor() {
    for (let i = 0; i < colors.length; i++) {
      document.body.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    }
  });
