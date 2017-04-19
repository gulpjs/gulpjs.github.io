Promise.all(['https://opencollective.com/gulpjs/sponsor.json','https://opencollective.com/gulpjs/backer.json'].map(url =>
  fetch(url).then(resp => resp.json())
)).then(entries => {
  let html = '';
	const supporters = [].concat.apply([], entries);
	const supportersToDisplay = supporters
    .sort( (first, second) => {return (second.totalDonations - first.totalDonations)} )
    .slice(0, 10);

	supportersToDisplay.forEach((supporter) => {
    html += `<a class="supporter" href="${supporter.website}"><img alt="${supporter.name}" src="${supporter.avatar}" width="112"></a>`
	});

  document.getElementById('supporters').innerHTML = html;
});
