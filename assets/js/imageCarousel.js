// Projects
// Projects list with information
const projects = [
    {
        name: 'Coffee Hub',
        image: 'assets/img/74521_fGP2YxUq7j4.png',
        desc: 'An own project where I have created a website with recipes on different types of coffee drinks, tea drinks and food. The website has been adapted for use for mobile, desktop and tablet.',
        languages: 'HTML CSS JavaScript',
        github: 'https://github.com/angelinakoloska/CoffeeHub',
        liveDemo: 'https://angelinakoloska.github.io/CoffeeHub/'
    },
    {
        name: 'Club Website',
        image: 'assets/img/48206_kIO9BvXu2N3.png',
        desc: 'A project I have done through Codecademy. In this project I have created a website for a cooking club. Responsive design has been used to optimize the site on mobile, desktop and tablet.',
        languages: 'HTML CSS',
        github: 'https://github.com/angelinakoloska/Responsive-Club-Website',
        liveDemo: 'https://angelinakoloska.github.io/Responsive-Club-Website/'
    },
    {
        name: 'Company Home Page',
        image: 'assets/img/39205_gKO6WiHs8c5.png',
        desc: 'A project I have done through Codecademy. In this project I have created a home page for a fictional company. Responsive design has been used to optimize the site on mobile, desktop and tablet.',
        languages: 'HTML CSS',
        github: 'https://github.com/angelinakoloska/Company-Home-Page',
        liveDemo: 'https://angelinakoloska.github.io/Company-Home-Page/'
    },
]

var imageCarouselDiv = document.querySelector('#image-carousel');
for (let i = 0; i < projects.length; i++) {
    imageCarouselDiv.innerHTML += `
                                    <div class="image-carousel__item">
                                        <a href="${projects[i].liveDemo}" target="_blank">
                                            <img src="${projects[i].image}" alt="${projects[i].name}" class="project-img">
                                        </a>
                                        <div class="image-carousel__itemText">
                                            <a href="${projects[i].liveDemo}" target="_blank">
                                                <h3>${projects[i].name}</h3>
                                            </a>
                                            <p class="desc-text">${projects[i].desc}</p>
                                            <br>
                                            <p class="languages">${projects[i].languages}</p>
                                            <div class="image-carousel__itemLink">
                                                <a href="${projects[i].github}" target="_blank">
                                                    <i class="fa-brands fa-github"></i>
                                                </a>
                                                <a href="${projects[i].liveDemo}" target="_blank">
                                                    <i class="fa-solid fa-link"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                `
}

// slideshow
var nextAndPrev = document.querySelector('#next-and-prev');

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(num) {
    showSlides(slideIndex += num);
}

function currentSlide(num) {
    showSlides(slideIndex = num);
}

function showSlides(num) {
    let slides = document.querySelectorAll('.image-carousel__item');
    if (num > slides.length) {
        slideIndex = 1;
    }

    if (num < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block'
}

document.querySelector('.prev').addEventListener('click', () => {
    plusSlides(-1);
})

document.querySelector('.next').addEventListener('click', () => {
    plusSlides(1)
})
