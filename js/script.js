let Department = (function() {

    const CommonPage = {
        body: ("body"),
        link: ('.header_main_menu__link'),
        navicon: ('#nav-icon3'),
        mainmenu: ('.menu-wrapper')
    }

    let init = function() {
        $(document).on('click',CommonPage.link, scrollToAnchor);
        $(document).on('click', CommonPage.navicon, toggleNavIcon);
        $(document).on('onscroll', CommonPage.body, changeDigits);
    }

    function scrollToAnchor(event) {
        event.preventDefault();
        let dataId = this.dataset.id;
        let element = document.getElementById(dataId);

        let top = element.offsetTop;
        let left = element.offsetLeft;

        // скроллим до текущего загруженного элемента
        setTimeout(function() {
            window.scrollTo(
                {top: top,left: left,behavior: 'smooth'}
            );
        }, 250);

    }

    function toggleNavIcon() {
        $(this).toggleClass('open').toggleClass("nav-icon_opened-menu");
        $(CommonPage.mainmenu).toggleClass("menu-wrapper_opened");
    }

    function changeDigits() {
        alert('Now we are going to change digits');
    }






    return {
        init: init
    }
 
})();


Department.init();