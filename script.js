window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelectorAll(".visual");
  const colors = [
    "rgba(253, 239, 253)",
    "rgba(200, 243, 246)",
    "rgba(255, 255, 197)",
    "rgba(255, 220, 220)",
    "rgba(219, 209, 255)",
    "rgba(255, 197, 239)",
  ];
  
  //make sounds work
  pads.forEach(pad =>{
    pad.addEventListener("click", function(){ //use normal function to use "this" to refer to parent pad
      this.querySelector("audio").currentTime = 0;
      this.querySelector("audio").play();
    });
  });
  
  //create a function to make bubbles
  const createBubbles = () => {
    const bubble = document.create
  }
  
  
});
