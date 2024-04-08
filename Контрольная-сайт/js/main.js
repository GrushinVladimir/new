let menuBtn = document.querySelector('.menu-btn');
let menumobile = document.querySelector('.menu-mobile');
let menu = document.querySelector('.menu');
let ulmenu = document.querySelector('.menu ul');
let homeMenu = document.querySelector('.homemenu');
let footerMenu = document.querySelector('.footermenu');
// Создаем копию меню
let copiedMenu = ulmenu.cloneNode(true);
let copiedMenufooter = ulmenu.cloneNode(true);
// Вставляем скопированное меню в элемент с классом homemenu
homeMenu.appendChild(copiedMenu);
footerMenu.appendChild(copiedMenufooter);
// Выдвегаем menu при клике
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');

})
// Выдвегаем menu при клике
menumobile.addEventListener('click', function(){
	menumobile.classList.toggle('active');
	homeMenu.classList.toggle('active');

})

const submenuParent = document.querySelector('.submenu-parent');
const submenu = submenuParent.querySelector('.submenu');
// Показываем или скрываем подменю при клике на .submenu-parent
submenuParent.addEventListener('click', function(event) {
    event.stopPropagation(); // Остановить распространение события, чтобы не скрывать подменю при клике на него
    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
        submenuParent.classList.add('open'); // Добавляем класс для поворота стрелки

    } else {
        submenuParent.classList.remove('open'); // Удаляем класс для поворота стрелки
        submenu.style.display = 'none';
    }
});

// Скрываем подменю при клике на любое место документа
document.addEventListener('click', function(event) {
    if (event.target !== submenuParent && !submenuParent.contains(event.target)) {
        submenu.style.display = 'none';
        submenuParent.classList.remove('open'); // Удаляем класс для поворота стрелки
    }
});



//home Слайдер
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.page_slide');
    let currentSlide = 0;

    function showSlide(index, direction) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'grid';
                slide.style.transition = 'transform 0.5s ease-in-out';

                if (direction === 'next') {
                    slide.classList.add('slide-in-right');
                    slide.classList.remove('slide-in-left');

                } else if (direction === 'prev') {
                    slide.classList.add('slide-in-left');
                    slide.classList.remove('slide-in-right');
                } 
            } else {
                slide.style.display = 'none';
            }
        });
    }

    document.querySelector('.next').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide, 'next');
    });

    document.querySelector('.prev').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide, 'prev');
    });

    showSlide(currentSlide); 
});
//Табы
function openUs(evt, openUs) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    visib = document.getElementsByClassName("vis");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      
    }
    document.getElementById(openUs).style.display = "flex";
    evt.currentTarget.className += " active";
}
//Slick
    $('.otziv').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<p  class='prevs'>&#8249;</p>",
        nextArrow: "<p  class='nexts'>&#8250;</p>",
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,                 
                }
            },
            {
                breakpoint: 600,
                settings: {
                  arrows : false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
//Отзывы
const comments = document.querySelectorAll('.comment');
comments.forEach(comment => {
    if (comment.textContent.length > 67) {
        const truncatedText = comment.textContent.substring(0, 67);
        const hiddenText = comment.textContent.substring(67);
        comment.textContent = truncatedText + '...';

        const continueButton = document.createElement('button');
        continueButton.textContent = 'Читать полностью';
        let isExpanded = false;
        continueButton.addEventListener('click', () => {
            comment.textContent = isExpanded ? truncatedText + '...' : truncatedText + hiddenText;
            continueButton.textContent = isExpanded ? 'Читать полностью' : 'Скрыть';
            isExpanded = !isExpanded;
        });

        comment.parentNode.appendChild(continueButton);
    }
    else{
      const greeting = document.createElement('button');
      greeting.textContent = '#web-studio';
      greeting.style.visibility='hidden'
      comment.parentNode.appendChild(greeting);
      //comment.style.margin='0 0 4.3rem 0';  
    }
});

 document.getElementById('fileInput').addEventListener('change', function() {
    var file = this.files[0];
    if (file) {
      document.getElementById('fileStatus').textContent = file.name;
      }
     else {
      document.getElementById('fileStatus').textContent = 'не выбрано';
    }
  });


//Клавиатура
  const link = document.querySelector(".key");
  const keyboard = document.getElementById("keyboard");
  const keys = document.querySelectorAll(".keys");
  const langSwitchButton = document.querySelector(".lang-switch");
  let activeInputElement = null;
  let currentLang = "RU";
  
  const keysLayouts = {
    "EN": ["1","2","3","4","5","6","7","8","9","-","+","q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", ".", ",", " " ],
    "RU": ["1","2","3","4","5","6","7","8","9","-","+","й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "к", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", ",", " "]
  };
  
  const replaceKeys = (lang) => {
    keys.forEach((key, index) => {
      key.textContent = keysLayouts[lang][index];
    });
  };
  
  link.addEventListener("click", () => {
    if (keyboard.style.display === "" || keyboard.style.display === "none") {
      keyboard.style.display = "block";
      link.classList.toggle("active_key");
    } else {
      link.classList.remove("active_key");
      keyboard.style.display = "none";
    }
  });
  
  document.addEventListener("click", (event) => {
    const activeElement = document.activeElement;
    if (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA") {
      activeInputElement = activeElement;
    }
  });
  
  keys.forEach(key => {
    key.addEventListener("click", () => {
      if (activeInputElement) {
        activeInputElement.value += key.textContent;
      }
    });
  });
  
  const closeButton = document.querySelector(".close");
  closeButton.addEventListener("click", () => {
    link.classList.remove("active_key");
    keyboard.style.display = "none";
  });
  
  const backspaceButton = document.querySelector(".backspace");
  const spaceButton = document.querySelector(".space");
  
  backspaceButton.addEventListener("click", () => {
    if (activeInputElement) {
      activeInputElement.value = activeInputElement.value.slice(0, -1);
    }
  });
  
  spaceButton.addEventListener("click", () => {
    if (activeInputElement) {
      activeInputElement.value += " ";
    }
  });
  
  const newlineButton = document.querySelector(".newline");
  
  newlineButton.addEventListener("click", () => {
    if (activeInputElement) {
      activeInputElement.value += "\n";
    }
  });
  
  langSwitchButton.addEventListener("click", () => {
    currentLang = currentLang === "EN" ? "RU" : "EN";
    langSwitchButton.textContent = currentLang;
    replaceKeys(currentLang);
  });
 