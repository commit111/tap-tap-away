window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
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
  
  //make sounds work
  pads.forEach((pad, index) =>{
    pad.addEventListener("click", function(){ //use normal function to use "this" to refer to parent pad
      this.querySelector("audio").currentTime = 0;
      this.querySelector("audio").play();
      
      createBubbles(index);
    });
  });
  
  //create a function to make bubbles
  const createBubbles = (index) => {
    var bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
  }
  
  
});
