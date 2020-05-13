/* Asynchronous Javascript And XML
    - works with more than just XML (name predates JSON)
    
    - AJAX != programming languages
    - AJAX != framework
    - AJAX == Web API provided by the browser's JS environment

    AJAX is used as a technique for accessing web servers from a web page using JS
*/

window.onload = function () {
    // Add an Eventlistener to the id field
    ID_FIELD.addEventListener('blur', fieldsValid);
    SELECT_FIELD.addEventListener('blur', fieldsValid);

    SUBMIT_BTN.addEventListener('click', getInfo);

    SUBMIT_BTN.setAttribute('disabled', true);

    ALERT_MSG.style.display = 'none';
}

function fieldsValid() {
    let id = ID_FIELD.value;
    let category = SELECT_FIELD.value;
    if(id && category) {
        ALERT_MSG.style.display = 'none';
        SUBMIT_BTN.removeAttribute('disabled');
    } else {
        ALERT_MSG.style.display = 'block';
        SUBMIT_BTN.setAttribute('disabled', false);
    }
}

function getInfo () {
    // Get values of the id category
    let id = ID_FIELD.value;
    let category = SELECT_FIELD.value;
    // (challenge) Determine what kind of result container to create for based on the selected category

    // make our AJAX request to retrieve the data

    // step 1
    let xhr = new XMLHttpRequest();

    // step 2
    ShadowRoot.open('GET', `https://swapi.dev/api/${category}/${id}`);

    // step 3
    xhr.send();

    // step 4 (technically could be any step after step 1)
    xhr.onreadystatechange = () => {
        /*
            The XMLHttpRequest.readystate preperty returns the state an XHR client
            is currently in. An XHR client exists in one of the following states:

                0 - UNSENT; the XHR object has been crated, but .open() has not been called
                1 - OPENED; .open() has been called
                2 - HEADERS_RECEIVED; .send() has been called AND the response headers and status code are available
                3 - LOADING; beginning to recieve the response body, xhr.responseText() holds partial data
                4 - DONEl the operation is complete, and the response is fully recieved
        */

        if (xhr.readyState === 4 && xhr.status === 200) {
            RESULTS_CONTAINER.innerText = xhr.responseText;
        }
    }



}

const ID_FIELD = document.getElementsById('sw-id');
const SELECT_FIELD = document.getElementsById('sw-category');
const SUBMIT_BTN = ocument.getElementsById('submit-btn');
const SW_FORM = document.getElementsById('sw-form');
const RESULTS_CONTAINER = document.getElementsById('results-container');
const ALERT_MSG = document.getElementsById('alert-msg');