import '../css/home.css'
import '../css/main-section.css'
import Icon from '../images/home-image.jpg'

export default function() {
    const home = document.createElement('div')
    home.classList.add('home')
    home.innerHTML = `
        <h2 class="header"><span style="color: var(--accent-color)">H</span>ome</h2>

        <h3>Best food in the area</h3>

        <p class="home-text">Visit our location or <a href="#" id="home-link-to-menu" loc="menu">order online</a></p>

        <img src="${Icon}">
    `
    return home
}