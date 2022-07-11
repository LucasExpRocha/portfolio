/* Menu show and hidden */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu Show */

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu Hide */

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* Remove Menu Mobile */

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach( n => n.addEventListener('click', linkAction))

/* Parallax */

    let stars = document.getElementById('stars'),
        moon = document.getElementById('moon'),
        mountains_behind = document.getElementById('mountains_behind'),
        name = document.getElementById('titleOne'),
        mountains_front = document.getElementById('mountains_front')

    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        stars.style.left = value * 0.25 + 'px';
        moon.style.top = value * 0.2 + 'px';
        mountains_behind.style.top = value * 0.5 + 'px';
        mountains_front.style.top = value * 0 + 'px';
        name.style.marginTop = value * 1.5 + 'px';
    })

/* Accordion Skills */

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length ; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach( el => el.addEventListener('click', toggleSkills))

/* Qualifications */

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        console.log('primeiro')
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
            console.log('segundo')
        })
        target.classList.add('qualification__active')
        console.log('terceiro')
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
            console.log('quarto')
        })
        tab.classList.add('qualification__active')
        console.log('fim')
    })
})

/* Services */

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button')
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => 
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
)

modalCloses.forEach((modalCloses) => 
    modalCloses.addEventListener('click', () => 
        modalViews.forEach((modalView) =>
            modalView.classList.remove('active-modal')
        )
    )
)

/* Scrpll Active LINKS*/


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* Change background header */

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 60) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* Show Scroll */ 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 300) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




/* Dark/Light Theme */

const themeButton = document.getElementById('theme-button')
const backgroundHomeImage = document.querySelector('#background-front')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
