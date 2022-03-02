import '../css/menu.css'
import '../css/main-section.css'

export default function() {
    const menu = document.createElement('div')
    menu.classList.add('menu')
    
    menu.innerHTML = `
        <h2 class="header"><span style="color: var(--accent-color)">M</span>enu</h2>

        <div class="menu-item">
            <h3>1. Pumpkin Soup</h3>
            <p>$6</p>
        </div>
        <div class="menu-item">
            <h3>2. Tomato Soup</h3>
            <p>$5</p>
        </div>
        <div class="menu-item">
            <h3>3. Super Nachos</h3>
            <p>$7</p>
        </div>
        <div class="menu-item">
            <h3>4. Mac and Cheese</h3>
            <p>$12</p>
        </div>
        <div class="menu-item">
            <h3>5. Kung Pao Chicken</h3>
            <p>$14</p>
        </div>
        <div class="menu-item">
            <h3>6. Lasagna</h3>
            <p>$12</p>
        </div>
        <div class="menu-item">
            <h3>7. Meatballs</h3>
            <p>$15</p>
        </div>
        
    `

    return menu
}