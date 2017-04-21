function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

(function(){
  var services = [
    'https://opencollective.com/gulpjs/sponsor.json',
    'https://opencollective.com/gulpjs/backer.json'
  ].map(function (url) {
    return fetch(url)
      .then(function(resp) {
        return resp.json();
      });
  })

  Promise.all(services).then(function (entries) {
    var fragment = document.createDocumentFragment();
    var nodes = [];
    var supporters = [].concat.apply([], entries);
    var supportersToDisplay = shuffleArray(supporters).slice(0, 10);

    supportersToDisplay.forEach(function(supporter) {
      var img = new Image();
      img.src = 'https://opencollective.com/proxy/images/?width=320&height=320&src=' + supporter.avatar ;
      img.width = 80;
      img.onload = function(e) {
        e.currentTarget.parentNode.classList.remove('supporter--skeleton');
      }

      var link = document.createElement('a');
      link.className = 'supporter supporter--skeleton';
      link.href = supporter.website;

      link.appendChild(img);
      nodes.push(link);
    });

    nodes.forEach(function(node) {
      fragment.appendChild(node);
    });

    document.getElementById('supporters').innerHTML = ''; // Clear prerendered items
    document.getElementById('supporters').appendChild( fragment );
  });
})();
