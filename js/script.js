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

/*
window.addEventListener('load', () => {
    const ERROR = 8
    const header = document.querySelector('header')
    const gap = document.body.scrollHeight - window.innerHeight
    console.table({ gap, sh: header.scrollHeight })

    if (gap <= header.scrollHeight + ERROR)
        header.style = 'position: fixed';
    else {

        window.addEventListener('scroll', () => {
            let scroll = window.scrollY
            header.style = `position: ${scroll > ERROR ? 'fixed' : 'relative'}`
        })
    }

})
*/