// Alpine
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

// lightningbox
// import lightningimg from 'lightningbox'
// lightningimg('.gallery > a')

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

// No context menu
// const imgs = document.querySelectorAll('img')
// imgs.forEach(img => {
//     img.addEventListener('contextmenu', (e) => {
//         e.preventDefault()
//     })
// })