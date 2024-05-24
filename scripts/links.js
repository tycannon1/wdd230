const baseURL = 'https://tycannon1.github.io/wdd230/';

fetch('../data/links.json')
  .then(response => response.json())
  .then(data => {
    const learningActivitiesSection = document.getElementById('learning-activities');

    data.weeks.forEach(week => {
      const weekDiv = document.createElement('div');
      const weekHeading = document.createElement('h2');
      weekHeading.textContent = week.week;
      weekDiv.appendChild(weekHeading);

      const linksList = document.createElement('ul');

      week.links.forEach(link => {
        const linkItem = document.createElement('li');
        const linkAnchor = document.createElement('a');
        linkAnchor.href = `${baseURL}${link.url}`;
        linkAnchor.textContent = link.title;
        linkItem.appendChild(linkAnchor);
        linksList.appendChild(linkItem);
      });

      weekDiv.appendChild(linksList);
      learningActivitiesSection.appendChild(weekDiv);
    });
  })
  .catch(error => console.error('Error fetching the links.json:', error));