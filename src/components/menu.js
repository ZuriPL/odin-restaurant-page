import '../css/menu.css'
import '../css/main-section.css'

export default function() {
    const menu = document.createElement('div')
    menu.classList.add('menu')
    menu.innerHTML = `
        <h2 class="header"><span style="color: var(--accent-color)">M</span>enu</h2>
        <h3>Apetizers</h3>
        <h3>Soups</h3>
        <h3>Main Dishes</h3>
        <h3>Desserts</h3>
        <h3>Drinks</h3>
    `
    return menu
}