let callme = (player) => {
  switch (player) {
    case "1":
      document.getElementById("details").style.opacity = 1;
      document.getElementById("details").style.zIndex = "1";
      document.getElementById("player").src = "./assets/Player6.png";
      break;
    case "2":
      document.getElementById("details").style.opacity = 1;
      document.getElementById("details").style.zIndex = "1";
      document.getElementById("player").src = "./assets/Player5.png";
      break;
    case "3":
      document.getElementById("details").style.opacity = 1;
      document.getElementById("details").style.zIndex = "1";
      document.getElementById("player").src = "./assets/Player4.png";
      break;
    case "4":
      document.getElementById("details").style.opacity = 1;
      document.getElementById("details").style.zIndex = "1";
      document.getElementById("player").src = "./assets/Player3.png";
      break;
    case "5":
      document.getElementById("details").style.opacity = 1;
      document.getElementById("details").style.zIndex = "1";
      document.getElementById("player").src = "./assets/Player2.png";
      break;
    case "6":
      document.getElementById("details").style.opacity = 1;
      document.getElementById("details").style.zIndex = "1";
      document.getElementById("player").src = "./assets/Player1.png";
      break;
    case "7":
      document.getElementById("details").style.opacity = 1;
      document.getElementById("details").style.zIndex = "1";
      document.getElementById("player").src = "./assets/Player1-1.png";
      break;
    case "8":
      document.getElementById("details").style.opacity = 1;
      document.getElementById("details").style.zIndex = "1";
      document.getElementById("player").src = "./assets/Player1-2.png";
      break;
    case "9":
      document.getElementById("details").style.opacity = 1;
      document.getElementById("details").style.zIndex = "1";
      document.getElementById("player").src = "./assets/Player1-3.png";
      break;
    case "10":
      document.getElementById("details").style.opacity = 1;
      document.getElementById("details").style.zIndex = "1";
      document.getElementById("player").src = "./assets/Player1-4.png";
      break;
    case "11":
      document.getElementById("details").style.opacity = 1;
      document.getElementById("details").style.zIndex = "1";
      document.getElementById("player").src = "./assets/Player1-5.png";
      break;
  }
};
let closeit = () => {
  document.getElementById("details").style.opacity = 0;
  document.getElementById("details").style.zIndex = "-1";
};
