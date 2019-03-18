let buttonSubmitForm = document.getElementById('submit');
buttonSubmitForm.addEventListener('click', function () {
   let valueInputMethod = {
       method: document.getElementById('method').value
   };
   let valueInputUrl = document.getElementById('url').value;
   api(valueInputUrl, valueInputMethod, callbackApi);
});

function api(url, method, callbackApi) {
    if(method.method !== 'GET') {
        console.error('Only method \'GET\'');
    } else {
        fetch(url, method)
            .then((response) => {
                let resultPromise = response.json();
                resultPromise
                    .then(function (result) {
                        callbackApi(result);
                    })
                    .catch((erroe) => {
                        console.log(erroe)
                    })
            })
            .catch((error) => {
                console.error('Error', error.message);
            })
    }
}

function callbackApi(arrayObjectsPhones) {
    console.log(arrayObjectsPhones)
}

let buttonClearConsole = document.getElementById('clearConsole');
buttonClearConsole.addEventListener('click', () => {
   console.clear();
});
