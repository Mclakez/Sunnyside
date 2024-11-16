const navbar = document.getElementById('nav-bar')
const navigation = document.getElementById('navigation')

navbar.addEventListener('click', () => {
    navigation.classList.toggle('show')
})