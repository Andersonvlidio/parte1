// Menu fixo no topo
const navbar = document.querySelector('.container-main-nav-bar');
const header = document.querySelector('.container-nav-bar');

const offsetTop = header.offsetHeight;

function fixNavbarOnScroll() {
    if (window.scrollY >= offsetTop) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
}

window.addEventListener('scroll', fixNavbarOnScroll);

// Menu mobile

function toggleMenu() {
    var menu = document.getElementById("menu");
    var toggleButton = document.querySelector(".toggle-button");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        toggleButton.innerHTML = "☰"; // Altera o ícone para o hamburger original
    } else {
        menu.style.display = "block";
        toggleButton.innerHTML = "✕"; // Altera o ícone para o "x" quando o menu estiver aberto
    }
}


// carousel 

function createCarousel(container, controls, maxItems) {
    let currentItem = 0;
    const itemWidth = 185;

    function arrowRight() {
        currentItem = (currentItem + 1) % maxItems;
        updateCarousel();
    }

    function arrowLeft() {
        currentItem = (currentItem - 1 + maxItems) % maxItems;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = currentItem * itemWidth;
        container.style.transform = `translateX(-${offset}px)`;
    }

    controls.forEach(control => {
        control.addEventListener('click', () => {
            const isLeft = control.classList.contains("arrow-left");
            if (isLeft) {
                arrowLeft();
            } else {
                arrowRight();
            }
        });
    });

    return { updateCarousel };
}

const containerImgsBrand = document.getElementById('container-imgs-brand');
const controls = document.querySelectorAll('.control');
const imgBrand = document.querySelectorAll('.img-brand');
const maxBrands = imgBrand.length;

const carouselPrimary = createCarousel(containerImgsBrand, controls, maxBrands);

const containerImgscarousel = document.getElementById('container-imgs-carousel');
const controls02 = document.querySelectorAll('.control-02');
const imgCarousel = document.querySelectorAll('.img-brand-02');
const maxBrands02 = imgCarousel.length;

const carouselSecondary = createCarousel(containerImgscarousel, controls02, maxBrands02);



function sendNewsletter() {
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;

  if (email.trim() === "") {
    alert("Por favor, digite um endereço de e-mail válido.");
    return;
  }

  console.log(`E-mail enviado: ${email}`);
  emailInput.value = "";
}