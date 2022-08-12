let Department = (function() {

    const CommonPage = {
        link: ('.header_main_menu__link')
    }

    let init = function() {
        $(document).on('click',CommonPage.link, scrollToAnchor);
    }



    function scrollToAnchor(event) {
        event.preventDefault();
        let dataId = this.dataset.id;
        let element = document.getElementById(dataId);

        // получим top и left позиции в браузере текущего загруженного урока
        let top = element.offsetTop;
        let left = element.offsetLeft;

        // скроллим до текущего загруженного элемента
        setTimeout(function() {
            window.scrollTo(
                {top: top,left: left,behavior: 'smooth'}
            );
        }, 250);

    }

 






    return {
        init: init
    }
 
})();


Department.init();