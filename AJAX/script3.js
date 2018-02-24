document.getElementById('button').addEventListener('click', loadUsers);

//load github users
function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users', true);
  xhr.onload = function() {
    if (this.status === 200) {
      var users = JSON.parse(this.responseText);
      console.log(users);
      output = '';
      for(var i = 0; i < users.length; i++) {
        output +=
        '<div class="user">' +
          '<img src="'+users[i].avatar_url+'" width="70" height="70"> ' +
          '<ul>' +
            '<li>' + 'ID: ' + users[i].id + '</li>' +
            '<li>' + users[i].login + '</li>' +
          '</ul>' +
        '</div>'
      }
      document.getElementById('users').innerHTML = output;
    }
  }
  xhr.send();
}