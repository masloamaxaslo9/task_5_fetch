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
        return console.error('Only method \'GET\'');
    } else {
        fetch(url, method)
            .then((response) => {
                let result = response.json();
                return callbackApi(result);
            })
            .catch((error) => {
                return console.error('Error', error.message)
            })
    }
}

function callbackApi(respondApi) {
    console.log(respondApi);
}

let buttonClearConsole = document.getElementById('clearConsole');
buttonClearConsole.addEventListener('click', () => {
   console.clear();
});