(function(){
  var services = [
    'https://opencollective.com/api/groups/gulpjs/backers'
  ].map(function (url) {
    return fetch(url)
      .then(function(resp) {
        return resp.json();
      });
  })

  var npmService = [
    'https://api.npmjs.org/downloads/point/last-day/gulp'
  ].map(function (url) {
    return fetch(url)
      .then(function(resp) {
        return resp.json();
      });
  })

  var pluginService = [
    'https://api.npms.io/v2/search?q=keywords%3Agulpplugin'
  ].map(function (url) {
    return fetch(url)
      .then(function(resp) {
        return resp.json();
      });
  })

  var countUpOptions = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
  };

  Promise.all(npmService).then(function (data) {
    var downloads = data[0].downloads;
    var downloadsCount = new CountUp('installs', 100000, downloads, 0, 2.5, countUpOptions);
    if (!downloadsCount.error) {
      downloadsCount.start();
    } else {
      console.error(downloadsCount.error);
    }
  })

  Promise.all(pluginService).then(function (data) {
    var plugins = data[0].total;
    var pluginsCount = new CountUp('gulp-plugins', 1000, plugins, 0, 2.5, countUpOptions);
    if (!pluginsCount.error) {
      pluginsCount.start();
    } else {
      console.error(pluginsCount.error);
    }
  })

  Promise.all(services).then(function (entries) {
    var fragment = document.createDocumentFragment();
    var nodes = [];
    var supporters = [].concat.apply([], entries);
    var supportersToDisplay = supporters.slice(0, 10);

    supportersToDisplay.forEach(function(supporter) {
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
      } else if (supporter.twitterHandle) {
        link.href = 'https://twitter.com/' + supporter.twitterHandle
      } else {
        link.href = 'https://opencollective.com/' + supporter.slug
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
