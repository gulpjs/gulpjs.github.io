(function(){
  var services = [
    'https://rest.opencollective.com/v2/gulpjs/orders/incoming/active',
    'https://api.npmjs.org/downloads/point/last-week/gulp',
    'https://api.npms.io/v2/search?q=keywords%3Agulpplugin',
  ].map(function (url) {
    return fetch(url).then(asJson);
  })

  function asJson(resp) {
    return resp.json();
  }

  function uniqify(array, predicate) {
    return array.reduce((acc, curr) => acc.find(a => predicate(a) === predicate(curr)) ? acc : acc.push(curr) && acc, []);
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

  supporters.then(function (orders) {
    var fragment = document.createDocumentFragment();
    var nodes = [];
    var uniqueSupporters = uniqify(orders.nodes.sort((a, b) => a.totalDonations.value < b.totalDonations.value), o => o.fromAccount.slug);
    var supportersToDisplay = uniqueSupporters.slice(0, 10);

    supportersToDisplay.forEach(function(supporter) {
      var { fromAccount: { name, slug, website, twitterHandle, imageUrl }, totalDonations } = supporter;

      var img = new Image();
      img.src = imageUrl;
      img.width = 80;
      img.onload = function(e) {
        e.currentTarget.parentNode.classList.remove('supporter--skeleton');
      }
      img.alt = name;

      var link = document.createElement('a');
      link.className = 'supporter supporter--skeleton';
      link.rel = 'nofollow';
      link.title = `${name} with $${totalDonations.value} total`;

      if (website) {
        link.href = website;
      } else if (twitterHandle) {
        link.href = 'https://twitter.com/' + twitterHandle
      } else {
        link.href = 'https://opencollective.com/' + slug
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
