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
