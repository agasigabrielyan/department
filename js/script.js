let Department = (function() {

    const CommonPage = {
        mainbody: $("body"),
        link: ('.header_main_menu__link'),
        navicon: ('#nav-icon3'),
        mainmenu: ('.menu-wrapper'),
        /* main page boxes and data */
        digitsActed: false,
        aboutDocuments: ("#about-documents"),
        aboutDepartment: ("#about-department"),
        aboutStatistics: ("#about-statistics"),
        aboutStructure: ("#about-structure"),
        statisticDigit: (".statistic-digit")
        /* end: main page boxes */
    }

    let init = function() {
        $(document).on('click',CommonPage.link, scrollToAnchor);
        $(document).on('click', CommonPage.navicon, toggleNavIcon);
        $(document).on('scroll', CommonPage.mainbody, changeDigits);
    }


    /** begin: methods **/

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
        if(isScrolledIntoView(CommonPage.aboutStatistics)) {
            changeDigitValues();
        }
    }

    function changeDigitValues() {
        let statisticDigits = $(CommonPage.statisticDigit);

        statisticDigits.each(function() {
            if(!CommonPage.digitsActed) {
                let valueToReach = this.dataset.value;
                let currNum = 0;
                let speed = parseInt((1 / parseInt(valueToReach)) * 1000);

                setInterval(() => {
                  if(currNum < valueToReach) {
                    currNum += 1;
                    this.innerText = currNum;
                  }
                }, speed); // time in miliseconds.



            }
        });

        CommonPage.digitsActed = true;
    }

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    /** end: methods **/


    return {
        init: init
    }
 
})();


Department.init();