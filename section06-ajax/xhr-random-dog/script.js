const dogImage = document.getElementById('photo');
const getDogButton = document.getElementById('btn');
const XHR = new XMLHttpRequest();

const dogApiUrl = "https://dog.ceo/api/breeds/image/random";

/* **************************************
   METHOD 1: non-promise
   ************************************** */ 

// XHR.onreadystatechange = function() {
//     if (XHR.readyState == 4 && XHR.status == 200) {
//         const data = JSON.parse(XHR.responseText);

//         if (data.status === 'success') {
//             dogImage.src = data.message;
//         }
//     }
// };

// getDogButton.addEventListener('click', (event) => {
//     if (XHR.readyState !== 4) {
//         XHR.abort();
//     }

//     XHR.open("GET", dogApiUrl);
//     XHR.send();
// });

/* **************************************
   METHOD 2: promise
   ************************************** */ 

function getRequest(url) {

    const promise = new Promise((resolve, reject) => {
        const promisedXHR = new XMLHttpRequest();

        promisedXHR.onreadystatechange = function() {
            if (promisedXHR.readyState == 4) {
                if (promisedXHR.status == 200) {
                    const data = JSON.parse(promisedXHR.responseText);
    
                    if (data.status === 'success') {
                        resolve({status: data.status, url: data.message});
                    } else {
                        reject(data);
                    }
                } else {
                    reject({status:'problem', message: ('XHR returned status ' + XHR.status)});
                }
            } 
        };

        promisedXHR.open('GET', url);
        promisedXHR.send();
    });

    return promise;
}

function getDog() {
    return getRequest(dogApiUrl);
}

getDogButton.addEventListener('click', (event) => {
    getDog()
        .then((data) => {
            dogImage.src = data.url;
        })
        .catch((error) => {
            console.error(error);
        });
});