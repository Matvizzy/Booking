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
    });
});
