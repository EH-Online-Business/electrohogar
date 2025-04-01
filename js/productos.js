const productosContainer = document.getElementById('productosContainer');

// Array con los nombres de los archivos de los productos
const productos = ['producto1.png', 'producto2.png', 'producto3.png', 'producto4.png','producto5.png','producto6.png',
    'producto7.png','producto8.png','producto9.png','producto10.png',];

productos.forEach(producto => {
    const img = document.createElement('img');
    img.src = `img/productos/${producto}`;
    img.alt = producto;
    productosContainer.appendChild(img);
});

const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});