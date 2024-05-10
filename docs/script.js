let container = document.querySelector('#answer');

function isScrolledIntoView(elem) {
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  
  return isVisible;
}

window.addEventListener("scroll", function() {
  if (isScrolledIntoView(container)) {
    container.classList.add('inView');
  }
});