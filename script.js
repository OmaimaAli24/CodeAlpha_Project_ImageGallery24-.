const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    lightboxImg.src = images[index].src;
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    showImage(currentIndex);
}

document.addEventListener('keydown', (event) => {
    if (lightbox.style.display === 'flex') {
        if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});

showImage(currentIndex);

