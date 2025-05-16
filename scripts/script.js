// Establishes 'mode' variable
export let mode = localStorage.getItem('mode') || 'light' 
console.log(mode);

// Makes sure dark mode stays on when page is reloaded.
if (mode === 'dark') {
  document.body.classList.add('dark-mode');

  document.querySelectorAll('a').forEach(link => {
    link.classList.add('dark-mode-a');
  });

  document.querySelector('header').style.boxShadow = '0 2px 4px rgba(90,90,90,1)';
}

// Triggers functions to be ran when moon icon is clicked.
document.querySelector('.js-moon').addEventListener('click', () => {
  updateMode();
  toggleMode();

  document.documentElement.classList.toggle('dark-mode');
});

// Changes which mode is on.
export function updateMode() {
  document.body.classList.toggle('dark-mode');
  
  document.querySelectorAll('a').forEach(link => {
    link.classList.toggle('dark-mode-a');
  });
}

// Keeps track of which mode is currently on.
export function toggleMode() {
  mode = mode === 'light' ? 'dark' : 'light';

  localStorage.setItem('mode', mode);

  console.log(`${mode} mode turned on`);
}