fetch("section-html/about.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("about").innerHTML = data;
    });

fetch("section-html/services.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("services").innerHTML = data;
    });
fetch("section-html/testimonials.html")
.then(response => response.text())
.then(data => {
    document.getElementById("testimonials").innerHTML = data;
    setupTestimonialsCarousel();
});
fetch("section-html/cta.html")
.then(response => response.text())
.then(data => {
    document.getElementById("cta").innerHTML = data;
});
fetch("section-html/footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});

const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
});

const navLinks = navigation.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navigation.classList.remove('active');
    });
});

function setupTestimonialsCarousel(){
    const carousel = document.getElementById('testimonialCarousel');
    if(!carousel) return;
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.querySelectorAll('.carousel-slide'));
    const nextBtn = carousel.querySelector('.carousel-button.next');
    const prevBtn = carousel.querySelector('.carousel-button.prev');
    let current = 0;
    function goTo(index){
        track.style.transform = `translateX(-${index * 100}%)`;
        current = index;
    }
    if(nextBtn){
        nextBtn.addEventListener('click', ()=>{ goTo((current + 1) % slides.length); resetAuto(); });
    }
    if(prevBtn){
        prevBtn.addEventListener('click', ()=>{ goTo((current - 1 + slides.length) % slides.length); resetAuto(); });
    }
    let auto = setInterval(()=>{ goTo((current + 1) % slides.length); }, 4000);
    function resetAuto(){ clearInterval(auto); auto = setInterval(()=>{ goTo((current + 1) % slides.length); }, 4000); }
}

const scrollButton = document.querySelector('.scroll-button');
window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
        scrollButton.style.display = 'flex';
    } else {
        scrollButton.style.display = 'none';
    }
});
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});