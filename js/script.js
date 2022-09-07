function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}

window.onload  = () => {
    const header = document.querySelector('header')
    
    window.addEventListener('scroll', e => {
        let scroll = window.scrollY
        header.style = `position: ${scroll > 0 ? 'fixed':'relative'}`
    })
}

