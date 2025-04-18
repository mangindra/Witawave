// Smooth scroll untuk navigasi
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link[href^='#']");
    for (let link of navLinks) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }

    // Highlight nav active saat scroll
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".nav-link[href*=" + sectionId + "]").classList.add("active");
            } else {
                document.querySelector(".nav-link[href*=" + sectionId + "]").classList.remove("active");
            }
        });
    });
});

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.innerHTML = translations[lang][key]; // GANTI dari textContent ke innerHTML
    });
}

const translations = {
    en: {
        'dashboard': '<strong>Dashboard</strong>',
        'packages': '<strong>Packages</strong>',
        'about-us': '<strong>About Us</strong>',
        'contact': '<strong>Contact</strong>',
        'language': '<strong>Language</strong>',
        'hero-heading': 'Explore Lovina with WITAWAVE Dolphin Tour',
        'hero-subheading': 'Discover your dream destination and make your vacation unforgettable.',
        'view-package': 'View Tour Packages',
        'witawave': 'WITAWAVE',
        'welcome-text': 'Welcome to WITAWAVE Dolphin Tour! Experience the magic of watching wild dolphins in their natural habitat with our exclusive tour packages in Lovina, Buleleng – Singaraja, Bali. We provide safe and comfortable boats, friendly service, and experienced local guides to ensure an unforgettable adventure on the northern coast of Bali. Start your morning with the beauty of the ocean and the joy of seeing dolphins dance in the waves!.',
        'payment-info': '<strong>Payment Information</strong>',
        'payment-confirmation': '<i class="bi bi-check-circle"></i> Payment Confirmation',
        'payment-conf-detail': 'After making the transfer, please confirm your payment immediately through our WhatsApp or email.',
        'transfer-to': '<i class="bi bi-bank"></i> Transfer to Bank',
        'transfer-to-detail': 'Please transfer the payment to the following bank account:',
        'our-location': '<strong>Our Location</strong>',
        'contact-us': 'Contact Us',
        'contact-us2': 'Contact Us: nandasuryawitadarma@gmail.com | WhatsApp: 0819-3316-5101',
        'hak-cipta': '© 2025 WITAWAVE Dolphin Tour. All rights reserved.',
        'paket1': 'Watching Dolphins at Sunrise',
        'paket2': 'Snorkeling Around the Coral Reefs',
        'paket3': 'Swim With Dolphins',
        'paket4': 'Discount Package – All Activities',
        'paket1-detail': 'you can already enjoy the beauty of the sunrise while watching the dolphin attraction.',
        'paket2-detail': 'Snorkeling is an activity that allows you to explore the underwater beauty of coral reefs and marine life.',
        'paket3-detail': 'Swimming with dolphins is a unique experience that allows you to interact with these intelligent creatures in their natural habitat.',
        'paket4-detail': 'This package includes all activities at a discounted price.',
        'paket4-full': 'Maximize your Lovina experience with our <strong>Discount Package</strong>! This all-in-one deal includes <em>Watching Dolphins at Sunrise</em>, <em>Swimming with Dolphins</em>, and <em>Snorkeling around Coral Reefs</em> at a more affordable price. Ideal for individuals, couples, or groups who want to enjoy the full adventure without breaking the bank!',
        'detail': 'View Details',
        'close': 'Close',
        'watch-dolphin': 'Enjoy an unforgettable experience watching wild dolphins dance in the open sea as the sun rises! With friendly service and comfortable boats, this journey will be a special moment you will never forget.You can choose between a Private Boat for a more exclusive atmosphere, or a Sharing Boat for a more affordable yet still fun experience.',
        'private-boat': 'Private Boat',
        'private-boat-detail': '<ul><li>1 Person: Rp340,000/person</li><li>2 Persons: Rp255,000/person</li><li>3 Persons: Rp212,500/person</li><li>4 Persons: Rp170,000/person</li><li>More than 4 Persons: Rp100,000/person</li></ul>',
        'sharing-boat': 'Sharing Boat',
        'sharing-boat-detail': '<ul><li>1 Person: Rp255,000/person</li><li>2 Persons: Rp212,500/person</li><li>3 Persons: Rp170,000/person</li><li>4 Persons: Rp127,500/person</li><li>More than 4 Persons: Rp85,000/person</li></ul>',
        'swim-with-dolphins': 'Feel the extraordinary sensation of swimming with dolphins in their natural habitat! This package is specially designed for those who want to get closer and interact directly with these intelligent and friendly sea creatures. Under the close supervision of our professional guides, this experience is safe for all ages and will become an unforgettable memory.',
        'package-price': 'Package Price:',
        'detail-price': '<ul><li>1–2 Persons: Rp127,500/person</li><li>More than 2 Persons: Rp85,000/person</li></ul>',
        'snorkeling-detail': 'Explore the breathtaking underwater beauty of Lovina with snorkeling in the coral reef area! Enjoy the experience of diving in crystal-clear waters while witnessing vibrant tropical fish and stunning coral formations. This package is perfect for all levels, whether you are a beginner or an experienced diver.',
        'snorkeling-price': '<ul><li>1-2 Persons: Rp127.500/person</li><li>More than 2 Persons: Rp85.000/person</li></ul>',
        'discount-price': `
        <ul>
            <li>1 Person: <strong>Rp510,000</strong>/boat <span style="text-decoration: line-through;">Rp595,000</span></li>
            <li>2 Persons: <strong>Rp680,000</strong>/boat <span style="text-decoration: line-through;">Rp1,020,000</span></li>
            <li>3 Persons: <strong>Rp935,000</strong>/boat <span style="text-decoration: line-through;">Rp1,147,500</span></li>
            <li>4 Persons: <strong>Rp1,190,000</strong>/boat <span style="text-decoration: line-through;">Rp1,360,000</span></li>
            <li>More than 4 Persons: <strong>Rp255,000</strong>/person <span style="text-decoration: line-through;">Rp297,500</span></li>
        </ul>`
    },
    id: {
        'dashboard': '<strong>Beranda</strong>',
        'packages': '<strong>Paket</strong>',
        'about-us': '<strong>Tentang Kami</strong>',
        'contact': '<strong>Kontak</strong>',
        'language': '<strong>Bahasa</strong>',
        'hero-heading': 'Jelajahi Lovina Bersama WITAWAVE Dolphin Tour',
        'hero-subheading': 'Temukan destinasi impianmu dan buat liburanmu tak terlupakan.',
        'view-package': 'Lihat Paket Wisata',
        'witawave': 'WITAWAVE',
        'welcome-text': 'Selamat datang di WITAWAVE Dolphin Tour! Rasakan keajaiban menyaksikan lumba-lumba liar di habitat aslinya melalui paket wisata eksklusif kami di Lovina, Buleleng – Singaraja, Bali. Kami menyediakan perahu yang aman dan nyaman, pelayanan ramah, serta pemandu lokal berpengalaman untuk memastikan petualangan tak terlupakan di pesisir utara Bali. Mulailah pagi Anda dengan keindahan laut dan kegembiraan melihat lumba-lumba menari di antara ombak!.',
        'payment-info': '<strong>Informasi Pembayaran</strong>',
        'payment-confirmation': '<i class="bi bi-check-circle"></i> Konfirmasi Pembayaran',
        'payment-conf-detail': 'Setelah melakukan transfer, silakan konfirmasi pembayaran Anda segera melalui WhatsApp atau email kami.',
        'transfer-to': '<i class="bi bi-bank"></i> Transfer ke Bank',
        'transfer-to-detail': 'Silakan transfer pembayaran ke rekening bank berikut:',
        'our-location': '<strong>Lokasi Kami</strong>',
        'contact-us': 'Hubungi Kami',
        'contact-us2': 'Hubungi Kami: nandasuryawitadarma@gmail.com | WhatsApp: 0819-3316-5101',
        'hak-cipta': '© 2025 WITAWAVE Dolphin Tour. Hak Cipta Dilindungi Undang-Undang.',
        'paket1': 'Menonton Lumba-lumba Saat Matahari Terbit',
        'paket2': 'Snorkeling di Sekitar Terumbu Karang',
        'paket3': 'Berenang Bersama Lumba-lumba',
        'paket4': 'Paket Diskon – Semua Aktivitas',
        'paket1-detail': 'Anda sudah bisa menikmati keindahan matahari terbit sambil menyaksikan atraksi lumba-lumba.',
        'paket2-detail': 'Snorkeling adalah aktivitas yang memungkinkan Anda menjelajahi keindahan bawah laut terumbu karang dan kehidupan laut.',
        'paket3-detail': 'Berenang dengan lumba-lumba adalah pengalaman unik yang memungkinkan Anda berinteraksi dengan makhluk cerdas ini di habitat alaminya.',
        'paket4-detail': 'Paket ini mencakup semua aktivitas dengan harga diskon.',
        'paket4-full': 'Maksimalkan petualangan Anda di Lovina dengan <strong>Paket Diskon</strong> kami! Paket lengkap ini mencakup <em>Melihat Lumba-Lumba Saat Matahari Terbit</em>, <em>Berenang Bersama Lumba-Lumba</em>, dan <em>Snorkeling di Sekitar Terumbu Karang</em> dengan harga yang lebih terjangkau. Cocok untuk individu, pasangan, maupun kelompok yang ingin menikmati semua aktivitas tanpa menguras kantong.',
        'detail': 'Lihat Detail',
        'close': 'Tutup',
        'watch-dolphin': 'Nikmati pengalaman tak terlupakan menyaksikan lumba-lumba liar menari di laut lepas saat matahari terbit! Dengan layanan ramah dan perahu nyaman, perjalanan ini akan menjadi momen spesial yang sulit dilupakan. Anda bisa memilih antara Private Boat untuk suasana lebih eksklusif, atau Sharing Boat untuk pengalaman yang lebih ekonomis namun tetap seru.',
        'private-boat': 'Prahu Pribadi',
        'private-boat-detail': '<ul><li>1 Orang: Rp340.000/orang</li><li>2 Orang: Rp255.000/orang</li><li>3 Orang: Rp212.500/orang</li><li>4 Orang: Rp170.000/orang</li><li>Lebih dari 4 Orang: Rp100.000/orang</li></ul>',
        'sharing-boat': 'Prahu Bersama',
        'sharing-boat-detail': '<ul><li>1 Orang: Rp255.000/orang</li><li>2 Orang: Rp212.500/orang</li><li>3 Orang: Rp170.000/orang</li><li>4 Orang: Rp127.500/orang</li><li>Lebih dari 4 Orang: Rp85.000/orang</li></ul>',
        'swim-with-dolphins': 'Rasakan sensasi luar biasa berenang bersama lumba-lumba di habitat alami mereka! Paket ini dirancang khusus untuk Anda yang ingin lebih dekat dan berinteraksi langsung dengan hewan laut yang cerdas dan bersahabat ini. Dengan pengawasan ketat dari pemandu profesional kami, pengalaman ini aman untuk semua usia dan menjadi kenangan yang tak terlupakan.',
        'package-price': 'Harga Paket:',
        'detail-price': '<ul><li>1–2 Orang: Rp127.500/orang</li><li>Lebih dari 2 Orang: Rp85.000/orang</li></ul>',
        'snorkeling-detail': 'Jelajahi keindahan bawah laut Lovina yang memukau dengan kegiatan snorkeling di kawasan terumbu karang! Nikmati pengalaman menyelam di perairan jernih sambil menyaksikan warna-warni ikan tropis dan formasi terumbu karang yang menakjubkan. Paket ini cocok untuk semua kalangan, baik pemula maupun yang sudah berpengalaman.',
        'snorkeling-price': '<ul><li>1-2 Orang: Rp127.500/orang</li><li>Lebih dari 2 Orang: Rp85.000/orang</li></ul>',
        'discount-price': `
        <ul>
            <li>1 Orang: <strong>Rp510.000</strong>/perahu <span style="text-decoration: line-through;">Rp595.000</span></li>
            <li>2 Orang: <strong>Rp680.000</strong>/perahu <span style="text-decoration: line-through;">Rp1.020.000</span></li>
            <li>3 Orang: <strong>Rp935.000</strong>/perahu <span style="text-decoration: line-through;">Rp1.147.500</span></li>
            <li>4 Orang: <strong>Rp1.190.000</strong>/perahu <span style="text-decoration: line-through;">Rp1.360.000</span></li>
            <li>Lebih dari 4 Orang: <strong>Rp255.000</strong>/orang <span style="text-decoration: line-through;">Rp297.500</span></li>
        </ul>`
    }
};

