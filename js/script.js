let Department = (function() {

    const CommonPage = {
        link: ('.header_main_menu__link'),
        navicon: ('#nav-icon3'),
        mainmenu: ('.menu-wrapper')
    }

    let init = function() {
        $(document).on('click',CommonPage.link, scrollToAnchor);
        $(document).on('click', CommonPage.navicon, toggleNavIcon);
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

 






    return {
        init: init
    }
 
})();


Department.init();