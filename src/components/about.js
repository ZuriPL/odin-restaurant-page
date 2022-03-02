import '../css/about.css'
import '../css/main-section.css'

export default function() {
    const about = document.createElement('div')
    about.classList.add('about')
    about.innerHTML = `
        <h2 class="header"><span style="color: var(--accent-color)">A</span>bout</h2>
    `
    return about
}