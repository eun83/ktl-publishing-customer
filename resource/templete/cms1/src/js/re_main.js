$(document).ready(function () {
    
    
//css 테스트 하느라 넣어둔거
    const menuItems = document.querySelectorAll('.visual_slider > .visual_content');

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('on');
        });

        item.addEventListener('mouseleave', function() {
            this.classList.remove('on');
        });

        item.addEventListener('click', function() {
            this.classList.add('on');
        });
    });



});