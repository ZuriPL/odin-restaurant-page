import footerF from './components/footer'
import navF from './components/nav'
import home from './components/home'
import menu from './components/menu'
import about from './components/about'
import './css/global.css'

const nav = navF()
document.body.appendChild(nav)

const links = [...document.querySelectorAll('a')]

const content = document.createElement('div')
content.classList.add('main')
document.body.appendChild(content)

function changeTab(e) {
    links.forEach(link => {
        link.classList.remove('active')
    })
    e.target.classList.add('active')

    if (content.hasChildNodes()) content.children[0].remove()
    let fn
    switch (e.target.getAttribute('loc')) {
        case 'home':
            fn = home
            break
        case 'menu':
            fn = menu
            break
        case 'about':
            fn = about
            break
    }
    content.appendChild(fn())
}

links.forEach(link => {
    link.addEventListener('click', changeTab)
})

changeTab({ target: document.querySelector('a[loc="home"]') })

document.querySelector('#home-link-to-menu').addEventListener('click', changeTab)


document.body.appendChild(footerF())