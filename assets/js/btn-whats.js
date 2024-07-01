function handleScroll() {
    const whatsappButton = document.querySelector('.btn-whats');
    if (window.innerWidth < 500) {
        if (window.scrollY > 0) {
            whatsappButton.style.opacity = '1'; 
        } else {
            whatsappButton.style.opacity = '0';
        }
    } else {
        whatsappButton.style.opacity = '1';
    }
}

document.addEventListener('scroll', handleScroll);


window.addEventListener('resize', handleScroll);


handleScroll();
