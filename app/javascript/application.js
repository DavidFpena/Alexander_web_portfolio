// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import { Turbo } from "@hotwired/turbo-rails"
Turbo.session.drive = false
import "controllers"

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
