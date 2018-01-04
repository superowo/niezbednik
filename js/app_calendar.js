function showTextTime() {
    var currentDate = new Date();
    var days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    var months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];

    document.querySelector('.month').innerHTML = months[currentDate.getMonth()];
    document.querySelector('.year').innerHTML = currentDate.getFullYear();
    document.querySelector('.day').innerHTML = currentDate.getDate();
    document.querySelector('.day_of_the_week').innerHTML = days[currentDate.getDay()];

    setTimeout(function() {
        showTextTime()
    }, 10000000);
}

showTextTime();