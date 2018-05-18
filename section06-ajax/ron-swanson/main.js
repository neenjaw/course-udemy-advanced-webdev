const endpoint = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

const xhrBtn = document.getElementById('xhr');
const fetchBtn = document.getElementById('fetch');
const jQueryBtn = document.getElementById('jq');
const axiosBtn = document.getElementById('axios');

function getQuote(json) {
    return json[0];
}

function xhrGet(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            callback(getQuote(response));
        }
    }

    xhr.open('GET', url);
    xhr.send();
}

function fetchGet(url, callback) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error('An error occured with the request/response');
            }

            return response;
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            callback(getQuote(data));
        })
        .catch((err) => {
            console.error(err);
        });
}

function jQueryGet(url, callback) {
    $.getJSON(url)
        .done((response) => {
            callback(getQuote(response));
        })
        .fail((error) => {
            console.error(error);
        });
}

function axiosGet(url, callback) {
    axios.get(url)
        .then((response) => {
            console.log(response);
            
            callback(getQuote(response.data));
        })
        .catch((error) => {
            console.error(error);
        });
}

function changeQuote(quote) {
    const quoteContainer = document.querySelector('.quote');
    quoteContainer.innerHTML = quote;
}

function handleGetClick(method, event) {
    event.preventDefault();
    method(endpoint, changeQuote);
}

xhrBtn.addEventListener('click', function(e) { handleGetClick(xhrGet, e); });
fetchBtn.addEventListener('click', function(e) { handleGetClick(fetchGet, e); });
jQueryBtn.addEventListener('click', function(e) { handleGetClick(jQueryGet, e); });
axiosBtn.addEventListener('click', function(e) { handleGetClick(axiosGet, e); });

//get a quote on load
xhrGet(endpoint,changeQuote);