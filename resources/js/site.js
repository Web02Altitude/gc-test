// Alpine
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

// glightbox
import GLightbox from 'glightbox';
const lightbox = GLightbox({
  selector: '.gallery_element',
  loop: true,
  // skin: 'mon-theme',
  openEffect: 'zoom',
  closeEffect: 'fade',
  cssEfects: {
    fade: { in: 'fadeIn', out: 'fadeOut' },
    zoom: { in: 'zoomIn', out: 'zoomOut' }
  }
});
// const gals = document.querySelectorAll('*[class^="galerie"]')
// gals.forEach(gal => {
//   const lightbox = GLightbox({
//     selector: gal,
//     loop: true,
//     // skin: 'mon-theme',
//     openEffect: 'zoom',
//     closeEffect: 'fade',
//     cssEfects: {
//       fade: { in: 'fadeIn', out: 'fadeOut' },
//       zoom: { in: 'zoomIn', out: 'zoomOut' }
//     }
//   });
// })