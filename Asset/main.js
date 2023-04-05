function Open_Sidebar() {
    var element = document.getElementById('Sidebar_menu');
    element.classList.add('Active_Sidebar');
}

function Close_Sidebar() {
    var element = document.getElementById('Sidebar_menu');
    element.classList.remove('Active_Sidebar');
}


// SearchBox Toggle Function
function Open_SearchBox() {
    var element = document.getElementById('SearchBox');
    element.classList.add('Active_SearchBox');
}

function Close_SearchBox() {
    var element = document.getElementById('SearchBox');
    element.classList.remove('Active_SearchBox');
}



//Swiper slider Script
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
        pagination: {
            el: ".swiper-pagination",
          },
    });