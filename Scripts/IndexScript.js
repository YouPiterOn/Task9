
function addUser(e) {
    e.preventDefault();
    const password = document.getElementById('passwordInput').value;
    const repeatPassword = document.getElementById('repeatPasswordInput').value;
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const birthdate = document.getElementById('birthdate').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const form = document.getElementById('registration-form');
    const usersList = document.getElementById('users-list');
    const newRow = usersList.insertRow(usersList.rows.length);

    if (password !== repeatPassword) {
        document.getElementById('passwordMatch').style.display = 'block';
    } else {
        document.getElementById('passwordMatch').style.display = 'none';
        alert('Form submitted successfully');

        newRow.insertCell(0).innerHTML = name;
        newRow.insertCell(1).innerHTML = number;
        newRow.insertCell(2).innerHTML = birthdate;
        newRow.insertCell(3).innerHTML = email;
        newRow.insertCell(4).innerHTML = gender;
    
        form.reset();
    }
}

function initial(){
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', addUser);
}

window.onload = initial();