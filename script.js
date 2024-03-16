let yes = document.getElementById("yes");
let no = document.getElementById("no");
// offsetTop:363
// offsetLeft:180

let px = "px";
let X = Math.floor(Math.random() * 300);
let Y = Math.floor(Math.random() * 250);
no.addEventListener("click", () => {
  no.style.position = "absolute";
  if (X <= 210) no.style.left = X + px;
  else no.style.left - X - 90 + px;
  if (Y <= 220) no.style.top = Y + px;
  else no.style.left - Y - 30 + px;

  X = Math.floor(Math.random() * 300);
  Y = Math.floor(Math.random() * 250);
});

yes.addEventListener("click", () => {
  alert("oh Thank you! and 'I Love You to' ❤️😘");
});
