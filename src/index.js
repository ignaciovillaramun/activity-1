var fullYear = new Date().getFullYear();
var year = document.querySelector('#year');
year ? (year.textContent = fullYear.toString()) : '';
var button = document.getElementById('myButton');
button.addEventListener('click', function () {
    alert('Button clicked!');
});
