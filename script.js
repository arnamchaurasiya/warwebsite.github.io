const backToTopButton = document.getElementById('backToTopButton');
const icon1 = './icon/Frame 2Icon-3.png';
const icon2 = './icon/Frame\ 3Icon.png';
const initialWidth = '61.7880px';
const initialHeight='40px';
const hoverSize = '60px';

backToTopButton.addEventListener('mouseover', function () {
  backToTopButton.src = icon2;
  backToTopButton.style.width = initialWidth;
  backToTopButton.style.height = initialHeight;
});

backToTopButton.addEventListener('mouseout', function () {
  backToTopButton.src = icon1;
  backToTopButton.style.width = initialWidth;
  backToTopButton.style.height = initialHeight;
});



const firstSection = document.getElementById('section1');
backToTopButton.style.display = 'none'; // Hide the button initially
window.addEventListener('scroll', function () {
  if (isScrolledPast(firstSection)) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function isScrolledPast(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom <= 0;
}
