
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const scrollProgress = document.getElementById('scrollProgress');
const sections = document.querySelectorAll('.section');


window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    

    if (scrolled > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrolled / winHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';


    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrolled >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });


    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});


navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

       
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});


menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    

    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});


document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});


navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const randomHue = Math.floor(Math.random() * 360);
        link.style.setProperty('--hover-color', `hsl(${randomHue}, 70%, 60%)`);
        link.style.boxShadow = `0 5px 15px hsla(${randomHue}, 70%, 60%, 0.4)`;
    });

    link.addEventListener('mouseleave', () => {
        link.style.removeProperty('--hover-color');
        link.style.boxShadow = '';
    });
});


window.addEventListener('load', () => {
    const scrolled = window.pageYOffset;
    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrolled / winHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});
