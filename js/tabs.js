(function () {

  window.addEventListener("load", function () {
    
    var myTabs = document.querySelectorAll("nav.tabs > a");
  
    function myTabClicks(tabClickEvent) {
      
      for (var i = 0; i < myTabs.length; i++) {
        myTabs[i].classList.remove("active");
      }
  
      var clickedTab = tabClickEvent.currentTarget; 
  
      clickedTab.classList.add("active");
  
      tabClickEvent.preventDefault();
  
      var myContentPanes = document.querySelectorAll(".grid");
  
      for (i = 0; i < myContentPanes.length; i++) {
        myContentPanes[i].classList.remove("active");
      }
  
      var anchorReference = tabClickEvent.target;
      var activePaneId = anchorReference.getAttribute("href");
      var activePane = document.querySelector(activePaneId);
  
      activePane.classList.add("active");
  
    }
  
    for (i = 0; i < myTabs.length; i++) {
      myTabs[i].addEventListener("click", myTabClicks)
    }
  });
  

})();