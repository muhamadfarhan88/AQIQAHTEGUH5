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
// Modal
document.getElementById('getStarted').addEventListener('click', function() {
    fetch('modal-content.html')
        .then(response => response.text())
        .then(data => {
            // Tambahkan modal ke body
            document.body.insertAdjacentHTML('beforeend', data);
            
            // Tampilkan modal
            const modal = document.getElementById('crud-modal-paket-hemat-laki-i');
            modal.classList.remove('hidden');

            // Tambahkan event listener untuk menutup modal
            modal.querySelector('[data-modal-toggle="crud-modal-paket-hemat-laki-i"]').addEventListener('click', function() {
                modal.classList.add('hidden');
                modal.remove();
            });
        })
        .catch(error => console.error('Error loading modal:', error));
});
