// Navbar
$(document).ready(function(){
    $('#navbar-show-btn').click(() => $('.navbar-box').removeClass('translate-x-full'));
    $('#navbar-hide-btn').click(() => $('.navbar-box').addClass('translate-x-full'));


// swiper slider
    $('.welcome-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });
});

//modal
// Ambil semua elemen dengan kelas 'send-order'
const sendOrderLinks = document.querySelectorAll('.send-order');

// Tambahkan event listener untuk setiap link
sendOrderLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default link

        fetch('modal-content.html')
            .then(response => response.text())
            .then(data => {
                // Tambahkan modal ke body
                document.body.insertAdjacentHTML('beforeend', data);
                
                // Tampilkan modal
                const modal = document.getElementById('crud-modal-package');
                modal.classList.remove('hidden');

                // Tambahkan event listener untuk menutup modal
                modal.querySelector('[data-modal-toggle="crud-modal-package"]').addEventListener('click', function() {
                    modal.classList.add('hidden');
                    modal.remove();
                });
            })
            .catch(error => console.error('Error loading modal:', error));
    });
});


