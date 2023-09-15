let fullYear: number = new Date().getFullYear();

let year = document.querySelector('#year');

year ? (year.textContent = fullYear.toString()) : '';

const button = document.getElementById('myButton') as HTMLButtonElement;

button.addEventListener('click', () => {
  alert('Button clicked!');
});
