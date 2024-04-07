// FETCH and APIs

// API - Application Programming Interface
// Websites/Services will often offer their data via an API that you can access
// URL (endpoint) that will give you data in JSON format
// This data is actually just a big string - you will need to convert it into an actual object so you can access the data
// JSON.parse(data) - will convert the string to a JS object


const endpoint = 'https://api.open-meteo.com/v1/forecast?latitude=51.5002&longitude=-0.1262&daily=sunrise,sunset&current_weather=true&timezone=Europe%2FLondon';

const promise = fetch(endpoint);

// A promise represents an operation that hasn't completed yet
// A Promise is a placeholder for a value not necessarily known when the promise is created

promise.then(function(response) {
  console.log(response);
}).catch(function(err) {
  console.error(err);
})


// ---------------------------


promise.then(response => {
  return response.json();
}).then(data => {
  
  console.log(data);
  const sunsets = data.daily.sunset;

  const ul = document.querySelector('.sunsets');

  sunsets.forEach(ss => {
    console.log(ss);

    ss = new Date(ss);

    const li = document.createElement('li');
    li.classList.add('w-full');
    li.textContent = ss;

    ul.insertAdjacentElement('afterbegin', li);

  });

}).catch(err => {
  console.error(err);
})


// ---------------------------



promise.then(response => {
  return response.json();
}).then(data => {
  
  console.log(data);
  const sunsets = data.daily.sunset;

  const ul = document.querySelector('.sunsets');

  if(ul) {
    ul.innerHTML = "";

    sunsets.forEach(ss => {
      console.log(new Date(ss));

      ss = new Date(ss);

      const ssDate = ss.getDate();
      const ssMonth = ss.getMonth()+1;
      const ssHour = ss.getHours();
      const ssMins = ss.getMinutes() < 10 ? '0'+ss.getMinutes() : ss.getMinutes();

      const li = document.createElement('li');
      li.classList.add('w-full');
      li.textContent = `${ssDate}/${ssMonth} - ${ssHour}:${ssMins}`;

      ul.insertAdjacentElement('afterbegin', li);

    });
  }

}).catch(err => {
  console.error(err);
})


