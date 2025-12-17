/**
 * Logika Navigasi Saku Sampah (Single Page App Simulation)
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi halaman: pastikan Home aktif saat load
    showPage('home');
});

function showPage(pageId) {
    // 1. Sembunyikan semua section (home, order, dashboard, prices)
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.add('d-none'); // Class Bootstrap untuk hide
        section.classList.remove('fade-in'); // Reset animasi
    });

    // 2. Tampilkan section yang dipilih
    const activeSection = document.getElementById(pageId + '-page');
    if (activeSection) {
        activeSection.classList.remove('d-none');
        // Tambahkan animasi fade-in sederhana
        activeSection.style.opacity = 0;
        setTimeout(() => {
            activeSection.style.transition = 'opacity 0.4s ease-in-out';
            activeSection.style.opacity = 1;
        }, 10);
    }

    // 3. Update status aktif di Navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active', 'text-success', 'fw-bold'));
    
    // Cari link yang sesuai dengan pageId
    const activeLink = document.getElementById('nav-' + pageId);
    if (activeLink) {
        activeLink.classList.add('active', 'text-success', 'fw-bold');
    }

    // 4. Tutup menu mobile jika sedang terbuka (Bootstrap behavior)
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true
        });
        bsCollapse.hide();
    }
    
    // 5. Scroll ke atas
    window.scrollTo(0, 0);
}

/**
 * Logika Formulir Pemesanan
 */
function submitOrder(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil elemen form dan pesan sukses
    const formContainer = document.getElementById('order-form-container');
    const successMsg = document.getElementById('order-success-msg');

    // Sembunyikan form, tampilkan pesan sukses
    formContainer.classList.add('d-none');
    successMsg.classList.remove('d-none');
    successMsg.classList.add('fade-in');

    // (Opsional) Di sini Anda bisa menambahkan logika kirim data ke backend/API
    console.log("Pesanan dikonfirmasi!");
}

function resetOrderForm() {
    // Reset form inputs
    document.getElementById('bookingForm').reset();

    // Kembalikan tampilan ke form
    document.getElementById('order-form-container').classList.remove('d-none');
    document.getElementById('order-success-msg').classList.add('d-none');
}