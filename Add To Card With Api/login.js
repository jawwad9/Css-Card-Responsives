
const loginForm = document.querySelector ('#loginForm');
const userName = document.querySelector ('#username');
const password = document.querySelector ('#password');



loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    console.log(userName.value);
    console.log(password.value);

    const storedUser = localStorage.getItem(userName.value);

    if(storedUser === null){
        alert('Not register username');
    }
    else{

        if(storedUser === password.value){
        alert('Login succesfully');
    window.location.href = "home.html"
        }
        else{
            alert('Invalid password');
            return;
        }

    }
});

