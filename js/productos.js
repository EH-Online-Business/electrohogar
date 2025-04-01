const productosContainer = document.getElementById('productosContainer');

const productosPorCategoria = {
  telefonos: [
    /*'telefono1.png',*/
    'telefono2.png',
    /*'telefono3.png',*/
    'telefono4.png',
    'telefono5.png',
    /*'telefono6.png',*/
    'telefono7.png',
    'telefono8.png',
    'telefono9.png',
    'telefono10.png',
    /*'telefono11.png',
    'telefono12.png'*/
  ],
  linea_blanca: [
    'lb1.png',
    'lb2.png',
    'lb3.png',
    'lb4.png',
    'lb5.png',
    'lb6.png',
    'lb7.png',
    'lb8.png',
    'lb9.png',
    'lb10.png',
    'lb11.png',
    'lb12.png',
    'lb13.png',
    'lb14.png',
    'lb15.png',
    'lb16.png',
    'lb17.png',
    'lb18.png',
    'lb19.png',
    'lb20.png',
    'lb22.png',
    'lb21.png',
    'lb23.png',
    'lb24.png',
    'lb25.png'
  ],
  electrodomesticos: [
    'producto1.png',
    'producto2.png',
    'producto3.png',
    'producto4.png',
    'producto5.png',
    'producto6.png',
    'producto7.png',
    'producto8.png',
    'producto9.png',
    'producto10.png',
    'producto11.png',
    'producto12.png',
    'producto13.png',
    'producto14.png',
    'producto15.png',
    'producto16.png',
    'producto21.png',
    'producto18.png',
    'producto19.png',
    'producto20.png'
  ],
  muebleria: [
    'mueble1.png',
    'mueble2.png',
    'mueble3.png',
    'mueble4.png',
    'mueble5.png',
    'mueble6.png',
    'mueble7.png',
    'mueble8.png',
    'mueble9.png',
  ],
  bici: [
    'bici1.png',
    'bici2.png',
    'bici3.png',
    'bici4.png',
    'bici5.png',
    'bici6.png',
    'bici7.png',
  ],
  sonido: [
    'son1.png',
    'son2.png',
    'son3.png',
    'son4.png',
    'son5.png',
    'son6.png',
    'son7.png',
    'son8.png',
  ],
  centro: [
    'c1.png',
    'c2.png',
    'c3.png',
    'c4.png',
    'c5.png',
    'c6.png',
    'c7.png',
    'c8.png',
    'c9.png',
    'c10.png',
    'c12.png',
    'c13.png',
    'c14.png',
    'c15.png',
  ],
};

let categoriaActual = '';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function cargarProductos(categoria) {
  if (categoriaActual === '' || categoria !== categoriaActual) {
    productosContainer.innerHTML = '';

    if (productosPorCategoria[categoria]) {
      const productosAleatorios = shuffleArray([...productosPorCategoria[categoria]]); // Crea una copia y baraja el array

      productosAleatorios.forEach(archivo => {
        const img = document.createElement('img');
        img.src = `img/productos/${categoria}/${archivo}`;
        img.alt = archivo;
        productosContainer.appendChild(img);
      });
    } else {
      productosContainer.innerHTML = '<p>No hay productos en esta categoría.</p>';
    }

    categoriaActual = categoria;
  }
}

productosContainer.innerHTML = '<p>Seleccione una categoría</p>';

const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

document.querySelectorAll('button[data-categoria]').forEach(button => {
  button.addEventListener('click', event => {
    const categoria = event.target.getAttribute('data-categoria');
    cargarProductos(categoria);
  });
});