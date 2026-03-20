const THEME_KEY = 'garden-theme'
const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

function getSavedTheme () {
  return localStorage.getItem(THEME_KEY) || LIGHT_THEME
}

function applyTheme (theme) {
  const html = document.documentElement
  const header = document.querySelector('header')
  const garden = document.querySelector('#garden')

  if (theme === DARK_THEME) {
    html.setAttribute('data-theme', 'dark')
    html.classList.add('dark-mode')
    html.classList.remove('light-mode')

    if (header) {
      header.classList.remove('sky-wrapper')
      header.classList.add('sky-wrapper-darkmode')
    }
    if (garden) {
      garden.classList.remove('garden-wrapper{')
      garden.classList.add('garden-wrapper-darkmode')
    }
  } else {
    html.setAttribute('data-theme', 'light')
    html.classList.add('light-mode')
    html.classList.remove('dark-mode')

    if (header) {
      header.classList.remove('sky-wrapper-darkmode')
      header.classList.add('sky-wrapper')
    }
    if (garden) {
      garden.classList.remove('garden-wrapper-darkmode')
      garden.classList.add('garden-wrapper{')
    }
  }

  localStorage.setItem(THEME_KEY, theme)
}

function toggleTheme () {
  const currentTheme = getSavedTheme()
  const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME
  applyTheme(newTheme)
  updateToggleButton(newTheme)
}

function updateToggleButton (theme) {
  const btn = document.getElementById('theme-toggle-btn')
  if (btn) {
    btn.textContent = theme === DARK_THEME ? 'Light' : 'Dark'
    btn.setAttribute('data-theme', theme)
  }
}

export function initTheme () {
  const savedTheme = getSavedTheme()
  applyTheme(savedTheme)

  const btn = document.createElement('button')
  btn.id = 'theme-toggle-btn'
  btn.type = 'button'
  btn.className = 'theme-toggle-btn'
  btn.textContent = savedTheme === DARK_THEME ? 'Light' : 'Dark'
  btn.setAttribute('data-theme', savedTheme)

  btn.addEventListener('click', toggleTheme)

  document.body.append(btn)
}
