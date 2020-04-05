(function(){
  var services = [
    'https://rest.opencollective.com/v2/gulpjs/orders/incoming?status=active,cancelled,paid&limit=1000',
    'https://api.npmjs.org/downloads/point/last-week/gulp',
    'https://api.npms.io/v2/search?q=keywords%3Agulpplugin',
  ].map(function (url) {
    return fetch(url).then(asJson);
  })

  function asJson(resp) {
    return resp.json();
  }

  function uniqueBySlug(array) {
    var predicate = function (o) {
      return o.fromAccount.slug;
    }
    return array.reduce(function(acc, curr) {
      return acc.filter(function (a) {
        return predicate(a) === predicate(curr);
      }).length ? acc : acc.push(curr) && acc
    }, []);
  }

  function sortByTotalDonations(a, b) {
    return b.totalDonations.value - a.totalDonations.value;
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
    var uniqueSupporters = uniqueBySlug(orders.nodes.sort(sortByTotalDonations));
    var supportersToDisplay = uniqueSupporters.slice(0, 10);

    supportersToDisplay.forEach(function(supporter) {
      var fromAccount = supporter.fromAccount;
      var totalDonations = supporter.totalDonations;

      var name = fromAccount.name;
      var slug = fromAccount.slug;
      var website = fromAccount.website;
      var twitterHandle = fromAccount.twitterHandle;
      var imageUrl = fromAccount.imageUrl;

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
      link.title = name + ' with $' + totalDonations.value + ' total';

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
