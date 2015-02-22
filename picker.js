var initiate = function() {
  var content = document.getElementById('content');
  var faces = json.faces;

  for (var i = 0; i < faces.length; i++) {
    var button = document.createElement('button');
    button.innerHTML = faces[i].face;

    button.addEventListener('click', function() {
      copy(this.innerHTML);
    });

    content.appendChild(button);
  }
};

// TODO(apacible): Make this nicer.
var copy = function(text) {
    var input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = text;
    input.focus();
    input.select();
    document.execCommand('Copy');
    input.remove();
}

window.onload = initiate();