const endpoint = 'http://aws.random.cat/meow';
// const endpoint = 'http://thecatapi.com/api/images/get?format=src&size=mid&api_key=MzE0NDQ2';

const btn = document.querySelector('#refresh');
const container = document.querySelector('#container');

function createImageElement(src) {
    return $('img').attr('src', src);
}

function handleImageRefresh() {
    $.ajax({
        method: 'GET',
        url: endpoint,
        dataType: 'json'
    })
    .done((data) => {
        console.log(data);

        $('#container').append(`<img src="${data.file}">`);
    })
    .fail(() => {
        console.error('There was a problem retreiving the response');
    });
}

btn.addEventListener('click', handleImageRefresh);
