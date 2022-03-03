import '../css/footer.css'

export default function() {
    const footer = document.createElement('div')
    footer.classList.add('footer')
    footer.innerHTML = `
        <p class="footer-text">Photos from <a href="https://allrecipes.com" class="footer-text footer-link">allrecipes.com</a></p>
        <p class="footer-text">Made by ZuriPL</p>
        <a href="https://github.com/ZuriPL/odin-restaurant-page" class="footer-text footer-link">GitHub</a>
    `
    return footer
}