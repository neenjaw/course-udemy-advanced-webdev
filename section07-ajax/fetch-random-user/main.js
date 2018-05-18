// Colt Steele's Solution can be found here: https://codepen.io/Colt/pen/LjzaxN
// This is my take on it.

const fetchUserBtn = document.querySelector('.footer');
const elements = {
    avatar: document.querySelector('#avatar'),
    fullname: document.querySelector('#fullname'),
    username: document.querySelector('#username'),
    email: document.querySelector('#email'),
    city: document.querySelector('#city'),
};

function handleFetchUser() {
    const endpoint = 'https://randomuser.me/api/';

    function checkResponse(response) {
        console.log(response);

        if (!response.ok) {
            throw Error('There was a problem with the response');
        }

        return response;
    }

    function properCase(str) {
        return str.substring(0,1).toUpperCase() + str.substring(1);
    }

    fetch(endpoint)
        .then(checkResponse)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const user = data.results[0];

            console.log(user);
            
            elements.avatar.src = user.picture.medium;
            elements.fullname.innerHTML = properCase(user.name.first) + ' ' + properCase(user.name.last);
            elements.username.innerHTML = user.login.username;
            elements.email.innerHTML = user.email;
            elements.city.innerHTML = properCase(user.location.city);
        })
        .catch((error) => {
            console.error(error);
        });
}

fetchUserBtn.addEventListener('click', handleFetchUser);

handleFetchUser();