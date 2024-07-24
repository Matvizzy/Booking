document.addEventListener('DOMContentLoaded', (event) => {
    var checkin = document.getElementById('checkin');
    var checkout = document.getElementById('checkout');

    // Установить минимальную дату на сегодня
    var today = new Date().toISOString().split('T')[0];
    checkin.setAttribute('min', today);
    checkout.setAttribute('min', today);

    checkin.addEventListener('change', function() {
        var checkinDate = this.value;
        checkout.value = checkinDate;
        checkout.setAttribute('min', checkinDate); // Установить минимальную дату для выезда
    // Логика работы с голосовым помощником
    var voiceAssistantBtn = document.getElementById('voiceAssistantBtn');

    voiceAssistantBtn.addEventListener('click', function() {
        if ('webkitSpeechRecognition' in window) {
            var recognition = new webkitSpeechRecognition();
            recognition.lang = 'ru-RU';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.start();

            recognition.onresult = function(event) {
                var command = event.results[0][0].transcript.toLowerCase();
                console.log('Распознано: ' + command);

                if (command.includes('открыть главную страницу') || command.includes('перейти на главную')) {
                    window.location.href = 'index.html'; // или любой URL главной страницы
                } else {
                    console.log('Команда не распознана');
                }
            };

            recognition.onspeechend = function() {
                recognition.stop();
            };

            recognition.onerror = function(event) {
                console.log('Ошибка распознавания: ' + event.error);
            };
        } else {
            alert('Ваш браузер не поддерживает Web Speech API');
        }
    });
    });
})

document.addEventListener('DOMContentLoaded', function() {
    // Проверка наличия кнопки
    var voiceAssistantBtn = document.getElementById('voiceAssistantBtn');

    if (!voiceAssistantBtn) {
        console.error('Кнопка голосового помощника не найдена');
        return;
    }

    voiceAssistantBtn.addEventListener('click', function() {
        if ('webkitSpeechRecognition' in window) {
            console.log('Web Speech API поддерживается');

            var recognition = new webkitSpeechRecognition();
            recognition.lang = 'ru-RU';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.start();

            recognition.onstart = function() {
                console.log('Распознавание речи началось');
            };

            recognition.onresult = function(event) {
                var command = event.results[0][0].transcript.toLowerCase();
                console.log('Распознано: ' + command);

                if (command.includes('открыть главную страницу') || command.includes('перейти на главную')) {
                    console.log('Команда распознана: переходим на главную страницу');
                    window.location.href = 'index.html';
                } else if (command.includes('акции') || command.includes('акции')) {
                    console.log('Команда распознана: переходим на новую страницу');
                    window.location.href = 'newpage.html';
                } else {
                    console.log('Команда не распознана');
                }
            };

            recognition.onspeechend = function() {
                console.log('Распознавание речи завершено');
                recognition.stop();
            };

            recognition.onerror = function(event) {
                console.error('Ошибка распознавания: ' + event.error);
            };
        } else {
            console.error('Web Speech API не поддерживается вашим браузером');
            alert('Ваш браузер не поддерживает Web Speech API');
        }
    });
});
