document.addEventListener('DOMContentLoaded', function() {
    var dropbtn = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');

    // Показать выпадающее меню при наведении
    dropbtn.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'block';
        setTimeout(function() {
            dropdownContent.style.opacity = '1';
            dropdownContent.style.visibility = 'visible';
        }, 10); // Задержка для плавного появления
    });

    // Скрыть выпадающее меню при уходе курсора
    dropbtn.addEventListener('mouseout', function() {
        dropdownContent.style.opacity = '0';
        setTimeout(function() {
            dropdownContent.style.display = 'none';
            dropdownContent.style.visibility = 'hidden';
        }, 300); // Задержка для плавного скрытия
    });
});
