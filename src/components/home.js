import '../css/home.css'
import '../css/main-section.css'

export default function() {
    const home = document.createElement('div')
    home.classList.add('home')
    home.innerHTML = `
        <h2 class="header"><span style="color: var(--accent-color)">H</span>ome</h2>
        <p>Welcome</p>
    `
    return home
}