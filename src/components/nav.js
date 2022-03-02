import '../css/nav.css'

export default function() {
    const nav = document.createElement('div')
    nav.classList.add('nav')
    nav.innerHTML = `
        <h1><span style="color: var(--accent-color)">R</span>estaurant</h1>
        <div class="buttons-wrapper">
            <a href="#" loc="home">Home</a>
            <a href="#"loc="menu">Menu</a>
            <a href="#" loc="about">About</a>
        </div>
    `

    return nav
}