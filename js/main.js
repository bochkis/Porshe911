function displayText(id) {
    var oldLine =  document.querySelector(".active-nav-line");
    oldLine.classList.remove("active-nav-line");
    var oldText = document.querySelector(".active-text");
    oldText.classList.remove("active-text");
    oldText.classList.add("non-active-text");

    var lineEl = document.getElementById(id);
    var textEl =  document.getElementById("text"+id);
    console.log(lineEl.classList);
    console.log(textEl.classList);

    lineEl.classList.toggle("active-nav-line");
    textEl.classList.add("active-text");
    textEl.classList.remove("non-active-text");
  }

  function displayDetails() {
    var elements = document.querySelectorAll(".non-active-text");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("non-active-text");
        elements[i].classList.add("active-text");
      }

      var oldLine =  document.querySelector(".active-nav-line");
      oldLine.classList.remove("active-nav-line");

      var nav = document.querySelector(".nav");
      nav.classList.add("do-not-display");
    
      var details = document.getElementById("details-btn");
      details.classList.add("do-not-display");

      var hide =  document.getElementById("hide-btn");
      hide.classList.remove("do-not-display");

      var container =document.querySelector(".text-content-container"); 
      container.classList.add("full-text-content");
  }


  function hideDetails() {
    var elements = document.querySelectorAll(".active-text");
    for (var i = 1; i < elements.length; i++) {
        elements[i].classList.add("non-active-text");
      }

      var lines = document.querySelectorAll(".nav-line");
      lines[0].classList.add("active-nav-line");

      var nav = document.querySelector(".nav");
      nav.classList.remove("do-not-display");
    
      var details = document.getElementById("details-btn");
      details.classList.remove("do-not-display");

      var hide =  document.getElementById("hide-btn");
      hide.classList.add("do-not-display");

      var container =document.querySelector(".text-content-container"); 
      container.classList.remove("full-text-content");
  }


  function opensearch(){
    var container =document.querySelector(".non-active-search"); 
      container.classList.remove("non-active-search");
      container.classList.add("active-search");
  }

  function goDown(){

    console.log('sdfsgd')
    var leftContainer=document.querySelector(".left-container"); 
    leftContainer.classList.remove("active-container");
    var rightContainer=document.querySelector(".right-container"); 
    rightContainer.classList.add("active-container");
  }
