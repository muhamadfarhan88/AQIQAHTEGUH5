// Navbar
$(document).ready(function() {
    // Tampilkan navbar
    $('#navbar-show-btn').click(() => $('.navbar-box').removeClass('translate-x-full'));

    // Sembunyikan navbar
    $('#navbar-hide-btn').click(() => $('.navbar-box').addClass('translate-x-full'));

    // Menutup navbar saat mengklik di luar navbar
    $(document).click(function(event) {
        // Cek apakah klik terjadi di luar navbar
        if (!$(event.target).closest('.navbar-box, #navbar-show-btn').length) {
            $('.navbar-box').addClass('translate-x-full');
        }
    });


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

                // Tambahkan event listener untuk menutup modal saat klik di luar modal
                modal.addEventListener('click', function(event) {
                    // Cek apakah target klik adalah modal itu sendiri
                    if (event.target === modal) {
                        modal.classList.add('hidden');
                        modal.remove();
                    }
                });
            })
            .catch(error => console.error('Error loading modal:', error));
    });
});


function toggleDropdown() {
    const dropdown = document.getElementById('dropdownAvatarName');
    
    dropdown.classList.toggle('hidden');
}

// Optional: Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('#dropdownAvatarNameButton')) {
        const dropdown = document.getElementById('dropdownAvatarName');
        if (!dropdown.classList.contains('hidden')) {
            dropdown.classList.add('hidden');
        }
    }
}

//log out
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownAvatarName');
    dropdown.classList.toggle('hidden');
}

function signOut() {
    // Here you can add your sign-out logic, such as clearing user data or redirecting to a login page
    alert('You have signed out successfully!');
    // Example: Redirect to login page
    // window.location.href = '/login';
}