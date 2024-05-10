let answer = document.querySelector('#answer');
let highlight1 = document.querySelector('#highlight1');
let highlight2 = document.querySelector('#highlight2');

function isScrolledIntoView(elem) {
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  
  return isVisible;
}

window.addEventListener("scroll", function() {
  if (isScrolledIntoView(answer)) {
    answer.classList.add('inView');
  }
  if (isScrolledIntoView(highlight1)) {
    highlight1.classList.add('highlight');
  }
  if (isScrolledIntoView(highlight2)) {
    highlight2.classList.add('highlight');
  }
});