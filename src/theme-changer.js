const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyTheme = document.querySelector('body');
// console.log(bodyTheme)

const themeSwitcher = document.querySelector('#theme-switch-toggle');
// console.log(themeSwitcher);

themeSwitcher.addEventListener('change', switchBodyTheme);

function switchBodyTheme(event) {
  if (event.target.checked) {
    switchTheme(Theme.LIGHT, Theme.DARK);
    // localStorage.setItem('theme-dark', event.target.checked);
  } else {
    switchTheme(Theme.DARK, Theme.LIGHT);
    // localStorage.setItem('theme-dark', event.target.checked);
  }
}

const switchTheme = (oldTheme, newTheme) => {
  bodyTheme.classList.add(newTheme);
  bodyTheme.classList.remove(oldTheme);
  localStorage.setItem('theme', newTheme);
};

function setThemeCheckbox() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    bodyTheme.classList.add(Theme.DARK);
    themeSwitcher.setAttribute('checked', 'true');
  } else {
    bodyTheme.classList.add(Theme.LIGHT);
  }
}

setThemeCheckbox();

// console.log(localStorage);

// localStorage.setItem('my-data', JSON.stringify({ name: 'Misha', age: 28 }));

// const savedData = localStorage.getItem('my-data');
// console.log('savedData', savedData);

// const parsedData = JSON.parse(savedData);
// console.log('parsedData', parsedData);
