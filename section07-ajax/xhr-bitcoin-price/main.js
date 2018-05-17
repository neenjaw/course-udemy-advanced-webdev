const bitcoinValue = document.querySelector('#bitcoin-value');
const refreshDataBtn =  document.querySelector('#refresh-data');
const currency = "EUR";

function getBitcoinData() {
    const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    const promise = new Promise(function(resolve, reject) {
        const XHR = new XMLHttpRequest();

        XHR.onreadystatechange = function() {
            if (XHR.readyState === 4) {
                if (XHR.status === 200) {
                    const data = JSON.parse(XHR.responseText);

                    resolve(Object.assign({status:'success'},data));
                } else {
                    reject({status: 'error', message: 'endpoint returned HTTP status' + XHR.status});
                }
            }
        };

        XHR.open("GET", endpoint);
        XHR.send();
    });

    return promise;
}

function updateBitcoinValue() {
    getBitcoinData()
    .then((data) => {
        bitcoinValue.innerHTML = data.bpi[currency].symbol + data.bpi[currency].rate + ' ' + data.bpi[currency].code;
    })
    .catch((error) => {
        bitcoinValue.innerHTML = "Unable to retreive data.";
        console.error(error.message);
    });
}

refreshDataBtn.addEventListener('click', updateBitcoinValue);

updateBitcoinValue();