// MENU SHOW 
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show');
            
        })
    }
}

showMenu("nav_toggle","nav_menu");


// REMOVE MENU
const navLink = document.querySelectorAll('.nav_link'),
 nav_menu = document.getElementById('nav_menu')

function linkAction(){
    nav_menu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// // Mixup Filter
// const mixer = mixitup('.portfolio_items', {
//     selectors: {
//         target: '.portfolio_item'
//     },
//     animation: {
//         duration: 400
//     }
// })

// footter scroll
// const ft = document.querySelector('.footer_copy');

// console.log(window.scrollBy(20))



// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId =current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active')
        }    
    })
}

// CHANGE COLOR HEADER
window.onscroll = ()=>{
    const nav = document.getElementById('header')
    if(this.screenY >=200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}