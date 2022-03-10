  // slider
        
        let slideIndex = 1, // переменная которая отвечает за слайд, отображемый в текущий момент
            sliders = document.querySelectorAll('.slider-item'), // получаем сами слайды
            prev = document.querySelector('.prev'), // стрелки перелистывающие слайдер
            next = document.querySelector('.next'),
            dotsWrap = document.querySelector('.slider-dots'), // обертка точек
            dots = document.querySelectorAll('.dot'); // точки

            showSlides(slideIndex);

        function showSlides (n) {
            if (n > sliders.length) {
                slideIndex = 1; 
            } 
            if (n < 1) {
                slideIndex = sliders.length;
            } // делаем проверку, если мы на последнем слайде то переключаться будет на первый и наоборт с последнего на первый 
            sliders.forEach((item) => item.style.display = 'none'); // скрываем слайды
            dots.forEach((item) => item.classList.remove('dot-active')); // удаляем класс активности у наших точек
            sliders[slideIndex - 1].style.display = 'block'; // показываем активный слайд
            dots[slideIndex - 1].classList.add('dot-active'); // добавляем класс активности для точек действующего слайда
        } // функция показывает один активный слайдер, другие скрывает.
        
        function plusSlides (n) {
            showSlides(slideIndex += n);
        } // функция изменяет slidIndex  в зависимости от того в какую сторону мы идем
        
        function currentSlide (n) {
            showSlides (slideIndex = n);
        } // определяет какой слайд нужно показать

        prev.addEventListener('click', function(){
            plusSlides(-1);
        }); // при нажатии на стрелку назад мы двигаемся на один слайд назад
        next.addEventListener('click', function(){
            plusSlides(1); // при нахатии на стрелку вперед мы двигаемся на слайд вперед
        });

        dotsWrap.addEventListener('click', function(event) {
            for (let i = 0; i < dots.length + 1; i++) {
                if (event.target.classList.contains('dot') && event.target == dots[i-1]) { // проверяем, что мы действительно нажали на точку и определяем ее номер
                    currentSlide(i);
                }
            }
        }); // переключение слайдов при помощи точек
