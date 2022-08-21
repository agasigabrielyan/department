let Department = (function() {

    const CommonPage = {
        mainbody: $("body"),
        link: ('.header_main_menu__link'),
        navicon: ('#nav-icon3'),
        mainmenu: ('.menu-wrapper'),
        scrollupwrapper: ('.scroll-up-wrapper'),
        contentStructureButton: (".open_structure"),
        contentStructureButtonUp: (".structure_button_opened"),
        contentStructureBottom: ('.content_structure_department__bottom'),

        /* main page boxes and data */
        digitsActed: false,
        contentMenuLeftItem: ('.content_menu_left_item'),
        headerMainMenuItem: ('.header_main_menu_item'),
        aboutDocuments: ("#about-documents"),
        aboutDepartment: ("#about-department"),
        aboutStatistics: ("#about-statistics"),
        aboutStructure: ("#about-structure"),
        statisticDigit: (".statistic-digit"),
        /* end: main page boxes */

        newspItemLinksCopyLink: (".newsp_item_links_copylink"),
    }

    let init = function() {
        $(document).ready(function() {changeDigitsOnLoad();});
        $(document).on('click',CommonPage.link, scrollToAnchor);
        $(document).on('click', CommonPage.navicon, toggleNavIcon);
        $(document).on('scroll', CommonPage.mainbody, changeDigits);
        $(document).on('scroll', CommonPage.mainbody, hideShowScrollupWrapper);
        $(document).on('click', CommonPage.contentMenuLeftItem, changeMenuDescription);
        $(document).on('click', CommonPage.scrollupwrapper, scrollup);
        $(document).on('click', CommonPage.contentStructureButton, slideDownStructure);
        $(document).on("click", CommonPage.contentStructureButtonUp, slideUpStructure);
        $(document).on('scroll', $(window), stickMenuOnScroll);
        $(document).on("click", CommonPage.newspItemLinksCopyLink, copyLinkIntoClipboard);
    }

    /** begin: methods **/

    function scrollToAnchor(event) {
        event.preventDefault();
        let dataId = this.dataset.id;
        let element = document.getElementById(dataId);

        let top = parseInt(element.offsetTop) - 150;
        let left = element.offsetLeft;

        // скроллим до текущего загруженного элемента
        setTimeout(function() {
            window.scrollTo(
                {
                    top: top,
                    left: left,
                    behavior: 'smooth'
                }
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

    function changeDigitsOnLoad() {
        if($(CommonPage.aboutStatistics)[0]) {
            let offsetTopPositionOfStatiscs = $(CommonPage.aboutStatistics)[0].offsetTop;
            let alreadyScrolled = window.scrollY;

            let difference = parseInt(offsetTopPositionOfStatiscs - alreadyScrolled);
            if(difference <= 0) {
                changeDigitValues();
            }
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
        if(($(elem).length) > 0) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
    }

    function changeMenuDescription() {
        if($(window).width() > 768) {
           $(CommonPage.contentMenuLeftItem).removeClass("content_menu_left_item_active");
           $(this).addClass("content_menu_left_item_active");
           let info = $(this).find(".info").html();
           $(".content_menu_right-description").html(info);
        } else {
            $(CommonPage.contentMenuLeftItem).removeClass("content_menu_left_item_active");
            $(this).addClass("content_menu_left_item_active");
            $(".info").hide();
            $(this).find(".info").show();
        }
    }

    function scrollup() {window.scrollTo({top: 0, behavior: 'smooth'});}

    function hideShowScrollupWrapper() {
        let viewportHeight = window.innerHeight;
        let windowScrollTopPosition = window.scrollY;

        if(parseInt(windowScrollTopPosition) > parseInt(viewportHeight)) {
            $(CommonPage.scrollupwrapper).removeClass("scroll-up-wrapper_hidden");
        } else {
            $(CommonPage.scrollupwrapper).addClass("scroll-up-wrapper_hidden");
        }
    }

    function slideDownStructure() {
        $(this).addClass("structure_button_opened");
        $(this).find("span").text("Скрыть структуру");
        $(CommonPage.contentStructureBottom).slideDown();
    }

    function slideUpStructure() {
        $(this).removeClass("structure_button_opened");
        $(this).find("span").text("Показать структуру");
        $(CommonPage.contentStructureBottom).slideUp();
    }

    function stickMenuOnScroll() {
        if ($(window).scrollTop() > 50) {
                $('.header_main').addClass('header_main_fixed');
            } else {
                $('.header_main').removeClass('header_main_fixed');
            }
    }

    function copyLinkIntoClipboard() {
        let currentLink = $(this).data('href');
        if(currentLink) {
            navigator.clipboard.writeText(currentLink);
            $(this).html("").append("<div class='successfully-copied'>ссылка скопирована</div>");
            setTimeout(() => {cleanCopied(this)},2000);
        }
    }

    function cleanCopied(element) {
       $(element).html("");
    }

    /** end: methods **/


    return {
        init: init
    }
 
})();


Department.init();