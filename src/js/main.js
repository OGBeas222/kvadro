const anchors = document.querySelectorAll('a[href*="#"]');

for( let anchor of  anchors){
    anchor.addEventListener("click",function (e){
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior:"smooth",
            block :"start"
        })
    })
}

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
                if (e.target == control || e.target ==  content || e.target == accordionImg){
                return;
                }else {
                    accordions.forEach( (item) =>{
                        item.classList.remove('open');
                    })
                    allContent.forEach((elem)=>{
                        elem.style.maxHeight = null;
                    });
                }
            }
        })

    })

});

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

$(function() {
    $('.header-slider__wrapper').slick({
        dots: true,
        vertical: true,
        verticalSwiping: true,
        arrows:false,
        speed:700,
        infinite: true,
        cssEase: 'ease-in-out',
        adaptiveHeight: true,
        appendDots: $('.slider-dots__box'),
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

});

