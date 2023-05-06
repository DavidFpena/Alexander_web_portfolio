import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }




const dropdownContainer = document.querySelector('.text-cont-port');
const dropdownButton = dropdownContainer.querySelector('#dropdown-button');
const dropdownMenu = dropdownContainer.querySelector('#dropdown-menu');

dropdownContainer.addEventListener('mouseenter', () => {
  dropdownMenu.classList.add('show');
  dropdownButton.setAttribute('aria-expanded', 'true');
});

dropdownContainer.addEventListener('mouseleave', () => {
  dropdownMenu.classList.remove('show');
  dropdownButton.setAttribute('aria-expanded', 'false');
});


const scrollToTopBtn = document.getElementById("backtotopsymbol");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
