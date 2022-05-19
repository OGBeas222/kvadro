document.addEventListener('DOMContentLoaded', () => {
    const headerInnerCon =document.querySelector('.header-content');
    const burger = document.querySelector('.header-burger'); //наша кнопка
    const mobileMenu = document.querySelector('.header-menu'); //мобильное меню
    let headerCon = document.querySelector('.header');
    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('menu--active'); //когда меню открыто
        if (mobileMenu.classList.contains('menu--active')) { //Проверяем, есть ли у меню активный класс
            burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
            headerCon.classList.add('header__bg--active');
            headerCon.classList.add('header__bg--active');
            headerInnerCon.style.display = 'none';
        } else { //Когда нету активного класса у меню
            burger.classList.remove('burger--active'); //Возвращает в исходное состояние
            headerCon.classList.remove('header__bg--active');
            headerInnerCon.style.display = 'flex';
        }
    });

    const form = document.getElementById('form');

    form.addEventListener('submit',formSend);
    async function formSend(e){
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if(error === 0){
            document.querySelector('.modal-large').classList.add('_loading');
            let response =  await fetch('sendmail.php',{
                method:'POST',
                body:formData,
            })
            if(response.ok){
                let result = await response.json();
                alert(response.message);
                form.reset();
                document.querySelector('.modal-large').classList.remove('_loading');
            }
            else{
                alert('error form')
                document.querySelector('.modal-large').classList.remove('_loading');
            }
        }else{
          alert("invalid Form")
        }
    }

    function formValidate(form){
        let error = 0 ;

        let formReq = document.querySelectorAll('._req');
        console.log(formReq);
        for( let index = 0 ; index < formReq.length ; index++){
            const input = formReq[index];
           formRemoveError(input);

            if(input.classList.contains('_num')){
                checkNum(input);
            }
            if(input.classList.contains('_text')){
                textForm (input);

            }

           if(input.classList.contains('_tel')){
              if( checkNumber(input) ){


              }
           }else{
               if(input.classList.contains('_req')){
                   if(input.value === ''){
                       formAddError(input);
                       document.querySelector('.modal-form__count').classList.add('_error');
                       error++;
                   }
               }
               console.log(222)
           }

        }
        function formAddError(input){
            input.parentElement.classList.add('_error');
            input.classList.add('_error');
        }
        function formRemoveError(input){
            input.parentElement.classList.remove('_error');
            input.classList.remove('_error');
        }
        function checkNumber(input) {
            let reg = /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/;
            if(!reg.test(input.value)){
                alert('add tel info')
                formAddError(input);
                console.log(3.2)
            }
        }

        function textForm (input){
            const Ukr  = /^[\u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F']+$/


                if(!Ukr.test(input.value)){
                    formAddError(input);
                    alert("text")
                }

        }

        function checkNum(input){
                if(input.value < 0){
                    alert('Error')
                    alert('add num info')
                    formAddError(input);
                }
        }
        return error;
    }


    const btnsClicker = document.querySelectorAll('.btn-click');


    btnsClicker.forEach(btns =>{
        btns.addEventListener('click', function (){
            const direction = this.dataset.direction;
            const input = this.parentElement.querySelector('.modal-form__count-num--inner');
            const currentValue = +input.value;
            let newValue;
            if(direction === 'plus'){

                newValue === currentValue + 1;
            }else {

                newValue === currentValue - 1 > 0 ? currentValue - 1 : 0;
            }

            input.value === newValue;
        })
    })
});
let headerNav = document.querySelector('.header-navigation');
let headerCon = document.querySelector('.header');
let firstBlock = document.querySelector('.advantages');
const headerHeight = headerCon.offsetHeight;
const headerHeight2 = headerNav.offsetHeight;
const firstHeight = firstBlock.offsetHeight;
let lastScrollTop = 0;


window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= firstHeight + headerHeight) {
        headerNav.classList.add('header--fixed');
        document.querySelector('body').style.paddingTop = headerHeight2 ;
    } else {
        headerNav.classList.remove('header--fixed');
        document.querySelector('body').style.paddingTop = null;
    }
    lastScrollTop = scrollDistance;
});

const btnModal = document.querySelectorAll('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay__large');


btnModal.forEach((el) =>{
    el.addEventListener('click',(e) => {
        let path = e.currentTarget.getAttribute('data-path');
        document.querySelector('header').style.display = 'none';
        document.querySelector('main').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
        modalOverlay.classList.add('modals__overlay--visible');
        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');

    })
})
let closeBtn = document.querySelector('.modal-close');

closeBtn.onclick = () => {
    document.querySelector('header').style.display = 'block';
    document.querySelector('main').style.display = 'block';
    document.querySelector('footer').style.display = 'block';
    modalOverlay.classList.remove('modals__overlay--visible');
     document.querySelector(`[data-target="${path}"]`).classList.remove('modal--visible');
}

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 25; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});




document.addEventListener('DOMContentLoaded', ()=>{
    const accordions = document.querySelectorAll('.dropdown-menu');
    const accordion = document.querySelector('.dropdown-menu');
    const allContent = document.querySelectorAll('.dropdown-menu__content');
    const accordionImg = document.querySelectorAll('.dropdown-menu__img');
    accordions.forEach(el =>{
        el.addEventListener('click',(e) => {
            const self = e.currentTarget;
            const  control = self.querySelector('.dropdown-menu__head');
            const  content = self.querySelector('.dropdown-menu__content');
            const accordion = document.querySelector('.dropdown-menu');

            self.classList.toggle('open')
            if(self.classList.contains('open')){
                control.setAttribute('aria-expended',true);
                content.setAttribute('aria-hidden',false);
                content.style.maxHeight = content.scrollHeight + 'px';
            }else{
                control.setAttribute('aria-expended',false);
                content.setAttribute('aria-hidden',true);
                content.style.maxHeight = null;
            }
            window.onclick = e => {
                if (e.target === control){
                    return
                }else {
                    allContent.forEach((elem)=>{
                        elem.style.maxHeight = null;
                    });
                    accordions.forEach( (item) =>{
                        item.classList.remove('open');
                    });
                }
            }
        })

    })



});



let frontImg= document.querySelectorAll('.modal-flip__front-img');
frontImg.forEach( item =>{
    item.addEventListener('click',event =>{
        const cc = event.target.parentElement;

        const cc1 = cc.nextElementSibling;

        cc.classList.toggle('modal-pricing__item-front--hidden');
        cc1.classList.toggle('modal-pricing__item-back--visible');
    })

})
let backImg= document.querySelectorAll('.modal-flip__back-img');

backImg.forEach( item =>{
    item.addEventListener('click',event =>{
        const cc2 = event.target.parentElement.parentElement;
        const cc3 = cc2.previousElementSibling;
        cc2.classList.remove('modal-pricing__item-back--visible');
        cc3.classList.remove('modal-pricing__item-front--hidden');
    })

})






function initMap() {
    // The location of Uluru
    const uluru = { lat: 48.681265,  lng: 24.073525 };

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: uluru,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

AOS.init();





$(function () {
    $('.header-slider__wrapper').slick({
        dots: true,
        mobileFirst: true,
        vertical: false,
        verticalSwiping: false,
        arrows: false,
        speed: 700,
        infinite: true,
        cssEase: 'ease-in-out',
        adaptiveHeight: true,
        appendDots: $('.slider-dots__box'),
        responsive: [
            {
                breakpoint: 578,
                settings: {
                    vertical: true,
                    verticalSwiping: true,
                }

            }
        ]
    });
});

    const mySwiper = new Swiper('.route-slider', {
        speed: 550,
        spaceBetween:0,
        slidesPerGroup:1,
        centeredSlides: true,
        slidesPerView: 2,
        initialSlide:1,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        pagination: {
            el: '.swiper-pagination__basic',
            clickable:true,
            type: 'bullets',
        },
    });

    const modalSwiper = new Swiper('.modal-slider', {
        speed: 550,
        spaceBetween:0,
        slidesPerGroup:1,
        centeredSlides: true,
        slidesPerView: 2,
        initialSlide:1,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        pagination: {
            el: '.swiper-pagination__modal',
            clickable:true,
            type: 'bullets',
        },
    });


    const mySwiper_1 = new Swiper('.route-extend__slider', {
        speed: 450,
        spaceBetween:22,
        slidesPerGroup:1,
        centeredSlides: true,
        slidesPerView: 2,
        initialSlide:0,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        pagination: {
            el: '.swiper-pagination__extend',
            clickable:true,
            type: 'bullets',
        },
    });

    const mySwiper_2 = new Swiper('.route-experience__slider', {
        speed: 450,
        spaceBetween:22,
        slidesPerGroup:1,
        centeredSlides: true,
        slidesPerView: 2,
        initialSlide:0,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        pagination: {
            el: '.swiper-pagination__experience',
            clickable:true,
            type: 'bullets',
        },
    });

    const gallery = new Swiper('.gallery-slider', {
        speed: 750,
        spaceBetween:80,
        slidesPerGroup:2,
        watchSlidesProgress: true,
        slidesPerView:3.4,
        simulateTouch:true,
        centeredSlides: true,
        initialSlide:1,
        loop: true,
        pauseOnMouseEnter:true,
        loopAdditionalSlides: 27,
        pagination: {
            el: '.swiper-pagination__gallery',
            clickable:true,
            type: 'bullets',
        },
    });

    $('[data-fancybox]').fancybox({
        transitionEffect: 'fade',
        youtube : {
            controls : 0,
            showinfo : 1
        },
    });


