window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const body = document.querySelector("body");
  const colors = [
    "#AEE8FF",
    "#C8F3F6",
    "#FFFFC5",
    "#FFDCDC",
    "#DBD1FF",
    "#FFC5EF",
    /*
    "rgba(253, 239, 253)",
    "rgba(200, 243, 246)",
    "rgba(255, 255, 197)",
    "rgba(255, 220, 220)",
    "rgba(219, 209, 255)",
    "rgba(255, 197, 239)",
    */
  ];
  var numBubbles = 0;

  //make sounds work
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      //use normal function to use "this" to refer to parent pad
      this.querySelector("audio").currentTime = 0;
      this.querySelector("audio").play();

      createBubbles(index);
      body.style.background = "linear-gradient(180deg, #F6F6F6, #232323";
      body.style.color = "#232323";
      body.style.textShadow = "4px 4px 5px"+colors[index];
    });
  });

  //create a function to make bubbles
  const createBubbles = (index) => {
    var bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    numBubbles += 1;
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
      numBubbles -= 1;
      if (numBubbles == 0) {
        body.style.background = "#232323";
        body.style.color = "#F6F6F6";
        body.style.textShadow = "0px 0px 0px white"
      }
    });
  };
});
