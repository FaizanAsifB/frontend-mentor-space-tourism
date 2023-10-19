// import * as tabEvents from

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

window.addEventListener('load', () => {
  const urlPath = window.location.pathname
  if (urlPath === '/index.html') return

  import('./tabs.js').then(
    ({ tabList, tabs, changeTabFocus, changeTabPanel }) => {
      console.log(tabList)

      tabList.addEventListener('keydown', changeTabFocus)
      tabs.forEach(tab => tab.addEventListener('click', changeTabPanel))
    }
  )
})
