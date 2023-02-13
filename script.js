window.onload = function() {
    var resume = document.querySelector(".resume");
  
    if (resume) {
      resume.addEventListener("click", function() {
        window.open("resume.pdf", "_blank");
      });
    }
  };
