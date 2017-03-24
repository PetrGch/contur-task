var xhr = new XMLHttpRequest();

var n = document.getElementById('n');
var surname = document.getElementById('surname');

var body = 'name=' + encodeURIComponent(n.value) +
    '&surname=' + encodeURIComponent(surname.value);

xhr.open("POST", '/submit', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

xhr.onreadystatechange = function() {

    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText)
    } else {
        console.log(xhr.responseText);
    }
};

xhr.send(body);

