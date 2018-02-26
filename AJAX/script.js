//create event listener
document.getElementById('button').loadText();


function loadText() {
  //create XHR object
  var xhr = new XMLHttpRequest();
  // open - type, url/file, async
  xhr.open('GET', 'sample.txt', true);

  xhr.onload = function() {
    if (this.status === 200) {
      document.getElementById('text').innerHTML = this.responseText; 
    } else if (this.status === 404) {
      document.getElementById('text').innerHTML = '404 - Not Found';
    }
  }

  xhr.error = function() {
    console.log('Request Error...');
  }

  // OPTIONAL - used for loaders
  // xhr.onprogress = function() {
  //   console.log('readyState:', xhr.readyState);
  // }

  // xhr.onreadystatechange = function(){
  //   if (this.readyState === 4 && this.status === 200) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.send();
}