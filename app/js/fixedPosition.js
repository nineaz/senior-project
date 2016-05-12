var $fixedContainerRetraite = document.getElementById("fixed-container-retraite");
function getScrollPosition(){
 console.log("pageYOffset: " + window.pageYOffset);
  var taille_page = window.pageYOffset;
    if(taille_page > 630){
     $fixedContainerRetraite.style.position = "fixed";
     $fixedContainerRetraite.style.width = "28%";
    }else{
     $fixedContainerRetraite.style.position = "relative";
    }
}
window.addEventListener("scroll", getScrollPosition);
