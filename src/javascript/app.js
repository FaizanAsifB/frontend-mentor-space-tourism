import * as tabEvents from './tabs.js'

const navBtn = document.querySelector('.mobile-nav-toggle')
const nav = document.querySelector('.primary-navigation')
const srOnly = document.querySelector('.sr-only')

navBtn.addEventListener('click', () => {
  const expanded = srOnly.getAttribute('aria-expanded')
  nav.classList.toggle('visible')
  navBtn.classList.toggle('visible')
  srOnly.setAttribute(
    'aria-expanded',
    `${expanded === 'false' ? 'true' : 'false'}`
  )
})

tabEvents.tabList.addEventListener('keydown', tabEvents.changeTabFocus)

tabEvents.tabs.forEach(tab => {
  tab.addEventListener('click', tabEvents.changeTabPanel)
})
