window.onload = () => {
  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          long = position.coords.longitude;
          lat = position.coords.latitude;
         
          
          const key = "66d6dd5057b73752a0babdd3bf02100d";
          const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
          exclude=hourly&appid=${key}&units=metric`;
          fetch(url)
          .then(response => response.json())
          .then(data => {
              const dataTime1 = data.daily[5].dt;
              const milliseconds = dataTime1 * 1000 ;
              const dateObject = new Date(milliseconds).getDate();
              $('.day-date1').text(dateObject.toLocaleString("en-US", {day: "numeric"}));

              const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&exclude=daily&APPID=${key}&units=metric`;

              fetch(api)
              .then(response => response.json())
              .then(data => {
                  function getHourData(){
                  console.log(data);
                data.list.forEach(element => {
                    var datanow = element.dt;
                    var melesec = datanow * 1000;
                    var dateres = new Date(melesec).getDate();
                    lelele = parseInt(document.querySelector('.day-date1').innerHTML);
           
                    if (lelele == dateres){
                       
                        console.log(element)    
                        // Declaring vars
                        const boxDiv = document.createElement('div');
                        var imgHour = document.createElement('img');
                        var dateString = document.createElement('span');
                        var tempString = document.createElement('h2');
                        var descString = document.createElement('p');
                        var humidityString = document.createElement('span');
                        boxDiv.id = "hour-box";
                        
                        // Collecting the data 
                        imgHour.src = 'https://openweathermap.org/img/wn/' + element.weather[0].icon + '@2x' + '.png';
                        let hourdate = new Date(element.dt * 1000);
                        dateString.textContent = hourdate.getDate();
                        tempString.textContent = Math.round(element.main.temp) + '°C';
                        descString.textContent = element.weather[0].description;
                        humidityString.textContent = '☂ ' + element.main.humidity + '%';
        
                        // Appending the data into html 
                        boxDiv.append(imgHour);
                        boxDiv.append(tempString);
                        boxDiv.append(descString);
                        boxDiv.append(humidityString);
        
                        boxDiv.append(dateString);
                        document.querySelector('.hourly-container').appendChild(boxDiv);
                    
                   
                        
                    }
                });
            }
            getHourData();
        });

    });
         
    })
    }
}