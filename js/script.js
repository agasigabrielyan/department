let Department = (function() {

    const CommonPage = {
        mainbody: $("body"),
        link: ('.header_main_menu__link'),
        navicon: ('#nav-icon3'),
        mainmenu: ('.menu-wrapper'),
        /* main page boxes */
        aboutDocuments: ("#about-documents"),
        aboutDepartment: ("#about-department"),
        aboutStatistics: ("#about-statistics"),
        aboutStructure: ("#about-structure"),
        /* end: main page boxes */
    }

    let init = function() {
        $(document).on('click',CommonPage.link, scrollToAnchor);
        $(document).on('click', CommonPage.navicon, toggleNavIcon);
        $(document).on('scroll', CommonPage.mainbody, changeDigits);
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
        let offsetTopPositionOfStatiscs = $(CommonPage.aboutStatistics)[0].offsetTop;
        let windowScrollTopPosition = window.scrollTop;
        let alreadyScrolled = window.scrollY;


        console.log(offsetTopPositionOfStatiscs);
        console.log(alreadyScrolled);
        console.log('-------------------------------')
        let difference = parseInt(offsetTopPositionOfStatiscs - alreadyScrolled);
        console.log('Осталось доскроллить ' + (offsetTopPositionOfStatiscs - alreadyScrolled) + 'px');
        if(difference <= 0) {
            alert('Салют');
        }

    }






    return {
        init: init
    }
 
})();


Department.init();