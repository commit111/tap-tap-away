window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  
  console.log(sounds[0]);
  
  //make sounds work
  pads.forEach(pad =>{
    pad.addEventListener("click", function(){ //use normal function to use "this" to refer to parent pad
      sounds[4];
    });
  });
  
});
