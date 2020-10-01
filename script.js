//let url = 'https://jsonplaceholder.typicode.com/users';

let btn = document.querySelector('input[type=submit');
btn.onclick = function (e) {
    e.preventDefault();




}

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res)
//.then(item => item[0].name)
.then(console.log);

