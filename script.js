const cities = [
    { name: "Roma", timezone: "Europe/Rome" },
    { name: "Londra", timezone: "Europe/London" },
    { name: "NewYork", timezone: "America/New_York" },
    { name: "HongKong", timezone: "Asia/Hong_Kong" },
    { name: "Mosca", timezone: "Europe/Moscow" },
    { name: "LosAngeles", timezone: "America/Los_Angeles" }

  ];
  
  function showTime(city) {
    var date = new Date();
    var options = { timeZone: city.timezone };
  
    var timeElement = document.getElementById(city.name + "Clock");
    var dateElement = document.getElementById(city.name + "Date");
  
    var time = date.toLocaleTimeString("en-US", options);
    var formattedDate = getFormattedDate(date, options);
  
    timeElement.textContent = time;
    dateElement.textContent = formattedDate;
  }
  
  function getTimeZone(city) {
    return city.timezone;
  }
  
  function getFormattedDate(date, options) {
    var day = date.toLocaleDateString("en-US", { weekday: 'long', timeZone: options.timeZone });
    var month = date.toLocaleDateString("en-US", { month: 'long', timeZone: options.timeZone });
    var numericDate = date.toLocaleDateString("en-US", { day: 'numeric', timeZone: options.timeZone });
    var year = date.toLocaleDateString("en-US", { year: 'numeric', timeZone: options.timeZone });
  
    return day + ", " + month + " " + numericDate + ", " + year;
  }
  
  window.addEventListener('load', function() {
    var clocksContainer = document.getElementById("clocksContainer");
  
    cities.forEach(function(city) {
      var cityClock = document.createElement("div");
      cityClock.className = "city-clock";
  
      var cityName = document.createElement("h2");
      cityName.textContent = city.name;
  
      var clockElement = document.createElement("div");
      clockElement.id = city.name + "Clock";
      clockElement.className = "clock";
  
      var dateElement = document.createElement("div");
      dateElement.id = city.name + "Date";
      dateElement.className = "date";
  
      cityClock.appendChild(cityName);
      cityClock.appendChild(clockElement);
      cityClock.appendChild(dateElement);
  
      clocksContainer.appendChild(cityClock);
  
      setInterval(function() {
        showTime(city);
      }, 1000);
    });
  });
  