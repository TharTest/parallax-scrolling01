let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

let scrollToTopBtn = document.getElementById('scrollToTopBtn');


window.addEventListener('scroll', () => {
	let value = window.scrollY;

	text.style.marginTop = value * 1.4 + 'px';
	leaf.style.marginTop = value * -0.5 + 'px';
	leaf.style.marginLeft = value * 0.5 + 'px';
	hill5.style.marginLeft = value * 0.3 + 'px';
	hill4.style.marginLeft = value * -0.3 + 'px';
	hill1.style.marginTop = value * 0.3 + 'px';
});



// Sctoll to top button

window.onscroll = function() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};


scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scrolling behavior
  });
});