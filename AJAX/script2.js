document.getElementById('buttonOne').addEventListener('click', loadUser);
document.getElementById('buttonTwo').addEventListener('click', loadUsers);

function loadUser() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'user.json', true);
  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      var user = JSON.parse(xhr.responseText);
      var output = '';
      output += '<ul>' + 
      '<li>' + 'ID: ' + user.id + '</li>' +
      '<li>' + 'Name: ' + user.name + '</li>' +
      '<li>' + 'Email: ' + user.email + '</li>' +
      '</ul>';
      
      document.getElementById('user').innerHTML = output;

    } else if (this.status === 404) {
      document.getElementById('user').innerHTML = '404 - Not Found';
    }
  }
  xhr.send();
}

function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.json', true);
  xhr.onload = function() {
    if (this.status === 200) {
      var users = JSON.parse(xhr.responseText);
      console.log(users);
      var output = '';
      for (var i = 0; i < users.length; i++) {
        output += '<ul>' + 
        '<li>' + 'ID: ' + users[i].id + '</li>' +
        '<li>' + 'Name: ' + users[i].name + '</li>' +
        '<li>' + 'Email: ' + users[i].email + '</li>' +
        '</ul>';
      }
      
      document.getElementById('users').innerHTML = output;

    } else if (this.status === 404) {
      document.getElementById('users').innerHTML = '404 - Not Found';
    }
  }
  xhr.send();
}