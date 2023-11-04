//let slideIndex = 1;

//function showSlides() {
  //let slideIndex = 1;
  //let slides = document.getElementsByClassName("Myslide");
  //let dots = document.getElementsByClassName("dot");
  //console.log(slides);
  //console.log(slides[slideIndex-1]);
  //slides[slideIndex].style.display = "block";
  
//}

//showSlides(); // Start the automatic slideshow
function alertt(){
    alert("That page is not yet available.", "my-icon", ["OK", "Cancel"]);
}

document.addEventListener('DOMContentLoaded', function() {
  const scrollLinks = document.querySelectorAll('.nav__link');

  scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop -50,
                  behavior: 'smooth'
              });
          }
      });
  });
});