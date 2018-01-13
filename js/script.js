(function(){
  var services = [
    'https://opencollective.com/api/groups/gulpjs/backers',
    'https://api.npmjs.org/downloads/point/last-day/gulp',
    'https://api.npms.io/v2/search?q=keywords%3Agulpplugin',
  ].map(function (url) {
    return fetch(url).then(asJson);
  })

  function asJson(resp) {
    return resp.json();
  }

  var supporters = services[0];
  var downloads = services[1];
  var plugins = services[2];

  var countUpOptions = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
  };

  downloads.then(function (data) {
    var downloads = data.downloads;
    var downloadsCount = new CountUp('installs', 100000, downloads, 0, 2.5, countUpOptions);
    if (!downloadsCount.error) {
      downloadsCount.start();
    } else {
      console.error(downloadsCount.error);
    }
  })

  plugins.then(function (data) {
    var plugins = data.total;
    var pluginsCount = new CountUp('gulp-plugins', 1000, plugins, 0, 2.5, countUpOptions);
    if (!pluginsCount.error) {
      pluginsCount.start();
    } else {
      console.error(pluginsCount.error);
    }
  })

  supporters.then(function (entries) {
    var fragment = document.createDocumentFragment();
    var nodes = [];
    var supportersToDisplay = entries.slice(0, 10);

    supportersToDisplay.forEach(function(supporter) {
      console.log(supporter);
      var img = new Image();
      img.src = supporter.avatar;
      img.width = 80;
      img.onload = function(e) {
        e.currentTarget.parentNode.classList.remove('supporter--skeleton');
      }

      var link = document.createElement('a');
      link.className = 'supporter supporter--skeleton';
      if (supporter.website) {
        link.href = supporter.website;
        img.alt = supporter.website;
      } else if (supporter.twitterHandle) {
        link.href = 'https://twitter.com/' + supporter.twitterHandle
        img.alt = supporter.twitterHandle;
      } else {
        link.href = 'https://opencollective.com/' + supporter.slug
        img.alt = supporter.slug;
      }

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
