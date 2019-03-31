// alert('CACILDIS');

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/drd-2rcl');
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
}