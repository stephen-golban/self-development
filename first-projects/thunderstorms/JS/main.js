window.onload = () => {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const key = "66d6dd5057b73752a0babdd3bf02100d";
            const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&exclude=daily&APPID=${key}&units=metric&lang=ro`;

            fetch(api)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const {name} = data.city;
                // Displaying user's location
                $('#location').text(name);

                // If user clicks on one of the 5 days forecast it opens the specific day hourly forecast *****************

                document.querySelector('.day-box1').addEventListener('click', open1stDay);
                document.querySelector('.day-box2').addEventListener('click', open2ndDay);
                document.querySelector('.day-box3').addEventListener('click', open3rdDay);
                document.querySelector('.day-box4').addEventListener('click', open4thDay);
                document.querySelector('.day-box5').addEventListener('click', open5thDay);
                
                // Displaying only the 1st day hourly forecast
                function open1stDay(){
                    // adding the active class to the clicked forecast day
                    var current = document.getElementsByClassName("active");
                        current[0].className = current[0].className.replace(" active", "");
                        document.querySelector('.day-box1').className += " active";

                    $('.hourly-container1').show();
                    $('.hourly-container2').hide();
                    $('.hourly-container3').hide();
                    $('.hourly-container4').hide();
                    $('.hourly-container5').hide();

                    document.querySelector('.day-box1').style.transition = '1s';
                    $('html,body').animate({scrollTop: $(".hour-case").offset().top},'slow');
                }
                // Displaying only the 2nd day hourly forecast
                function open2ndDay(){

                    // adding the active class to the clicked forecast day
                    var current = document.getElementsByClassName("active");
                        current[0].className = current[0].className.replace(" active", "");
                        document.querySelector('.day-box2').className += " active";

                    $('.hourly-container1').hide();
                    $('.hourly-container2').show();
                    $('.hourly-container3').hide();
                    $('.hourly-container4').hide();
                    $('.hourly-container5').hide();
                    document.querySelector('.day-box2').style.transition = '1s';
                    $('html,body').animate({scrollTop: $(".hour-case").offset().top},'slow');
                }
                // Displaying only the 3rd day hourly forecast
                function open3rdDay(){
                    // adding the active class to the clicked forecast day
                    var current = document.getElementsByClassName("active");
                        current[0].className = current[0].className.replace(" active", "");
                        document.querySelector('.day-box3').className += " active";

                    $('.hourly-container1').hide();
                    $('.hourly-container2').hide();
                    $('.hourly-container3').show();
                    $('.hourly-container4').hide();
                    $('.hourly-container5').hide();
                    document.querySelector('.day-box3').style.transition = '1s';
                    $('html,body').animate({scrollTop: $(".hour-case").offset().top},'slow');
                }
                 // Displaying only the 4th day hourly forecast
                function open4thDay(){
                     // adding the active class to the clicked forecast day
                    var current = document.getElementsByClassName("active");
                        current[0].className = current[0].className.replace(" active", "");
                        document.querySelector('.day-box4').className += " active";

                    $('.hourly-container1').hide();
                    $('.hourly-container2').hide();
                    $('.hourly-container3').hide();
                    $('.hourly-container4').show();
                    $('.hourly-container5').hide();
                    document.querySelector('.day-box4').style.transition = '1s';
                    $('html,body').animate({scrollTop: $(".hour-case").offset().top},'slow');
                }
                 // Displaying only the 5th day hourly forecast
                function open5thDay(){
                     // adding the active class to the clicked forecast day
                    var current = document.getElementsByClassName("active");
                        current[0].className = current[0].className.replace(" active", "");
                        document.querySelector('.day-box5').className += " active";

                    $('.hourly-container1').hide();
                    $('.hourly-container2').hide();
                    $('.hourly-container3').hide();
                    $('.hourly-container4').hide();
                    $('.hourly-container5').show();
                    document.querySelector('.day-box5').style.transition = '1s';
                    $('html,body').animate({scrollTop: $(".hour-case").offset().top},'slow');
                }

                // Collecting the 1st day hourly forecast and appending it to a div
                function getHour1(){
                  data.list.forEach(element => {
                      var datanow = element.dt;
                      var melesec = datanow * 1000;
                      var dateres = new Date(melesec).getDate();
                      lelele = parseInt(document.querySelector('#row-date1').innerHTML);
                        
                      if (lelele == dateres){
                          
                             // Declaring vars
                             const boxDiv = document.createElement('div');
                             var imgHour = document.createElement('img');
                             var dateString = document.createElement('span');
                             var tempString = document.createElement('h2');
                             var descString = document.createElement('p');
                             var humidityString = document.createElement('span');
                             boxDiv.id = "hour-box";
                             imgHour.id = "hour-image";
             
                             // Collecting the data 
                             imgHour.src = 'https://openweathermap.org/img/wn/' + element.weather[0].icon + '@2x' + '.png';
                             let hourdate = new Date(element.dt * 1000);
                             if (hourdate.getHours() == "0" || hourdate.getHours() == "3" || hourdate.getHours() == "6" || hourdate.getHours() == "9") {
                                dateString.textContent = "Astăzi" + ', ' + '0' + hourdate.getHours() + ':' + hourdate.getMinutes() + '0';
                             }
                             else{
                                dateString.textContent = "Astăzi" + ', ' + hourdate.getHours() + ':' + hourdate.getMinutes() + '0';
                             }
                             dateString.style.textTransform = 'capitalize';
                             tempString.textContent = Math.round(element.main.temp) + '°C';
                             descString.textContent = element.weather[0].description;
                             humidityString.textContent = '💧 ' + element.main.humidity + '%';
             
                             // Appending the data into html 
                             boxDiv.append(dateString);
                             boxDiv.append(imgHour);
                             boxDiv.append(tempString);
                             boxDiv.append(descString);
                             boxDiv.append(humidityString);
                             document.querySelector('.hourly-container1').append(boxDiv);
             
                             
                      }
                  });
              
                }

                // Collecting the 2nd day hourly forecast and appending it to a div
                function getHour2(){
                  data.list.forEach(element => {
                      var datanow = element.dt;
                      var melesec = datanow * 1000;
                      var dateres = new Date(melesec).getDate();
                      lelele = parseInt(document.querySelector('#row-date2').innerHTML);
                     
                      if (lelele == dateres){
                          
                             // Declaring vars
                             const boxDiv = document.createElement('div');
                             var imgHour = document.createElement('img');
                             var dateString = document.createElement('span');
                             var tempString = document.createElement('h2');
                             var descString = document.createElement('p');
                             var humidityString = document.createElement('span');
                             boxDiv.id = "hour-box";
                             imgHour.id = "hour-image";
             
                             // Collecting the data 
                             imgHour.src = 'https://openweathermap.org/img/wn/' + element.weather[0].icon + '@2x' + '.png';
                             let hourdate = new Date(element.dt * 1000);
                             if (hourdate.getHours() == "0" || hourdate.getHours() == "3" || hourdate.getHours() == "6" || hourdate.getHours() == "9") {
                                dateString.textContent = hourdate.toLocaleString("Ro-RO", {weekday: "long"}) + ', ' + '0' + hourdate.getHours() + ':' + hourdate.getMinutes() + '0';
                             }
                             else{
                                dateString.textContent = hourdate.toLocaleString("Ro-RO", {weekday: "long"}) + ', ' + hourdate.getHours() + ':' + hourdate.getMinutes() + '0';
                             }
                             dateString.style.textTransform = 'capitalize';
                             tempString.textContent = Math.round(element.main.temp) + '°C';
                             descString.textContent = element.weather[0].description;
                             humidityString.textContent = '💧 ' + element.main.humidity + '%';
             
                             // Appending the data into html 
                             boxDiv.append(dateString);
                             boxDiv.append(imgHour);
                             boxDiv.append(tempString);
                             boxDiv.append(descString);
                             boxDiv.append(humidityString);
                             document.querySelector('.hourly-container2').append(boxDiv);
             
                             
                      }
                  });
              
                }

                // Collecting the 3rd day hourly forecast and appending it to a div     
                function getHour3(){
                  data.list.forEach(element => {
                      var datanow = element.dt;
                      var melesec = datanow * 1000;
                      var dateres = new Date(melesec).getDate();
                      lelele = parseInt(document.querySelector('#row-date3').innerHTML);
                      
                      if (lelele == dateres){
                          
                             // Declaring vars
                             
                             const boxDiv = document.createElement('div');
                             var imgHour = document.createElement('img');
                             var dateString = document.createElement('span');
                             var tempString = document.createElement('h2');
                             var descString = document.createElement('p');
                             var humidityString = document.createElement('span');
                             boxDiv.id = "hour-box";
                             imgHour.id = "hour-image";
             
                             // Collecting the data 
                             imgHour.src = 'https://openweathermap.org/img/wn/' + element.weather[0].icon + '@2x' + '.png';
                             let hourdate = new Date(element.dt * 1000);
                             if (hourdate.getHours() == "0" || hourdate.getHours() == "3" || hourdate.getHours() == "6" || hourdate.getHours() == "9") {
                                dateString.textContent = hourdate.toLocaleString("Ro-RO", {weekday: "long"}) + ', ' + '0' + hourdate.getHours() + ':' + hourdate.getMinutes() + '0';
                             }
                             else{
                                dateString.textContent = hourdate.toLocaleString("Ro-RO", {weekday: "long"}) + ', ' + hourdate.getHours() + ':' + hourdate.getMinutes() + '0';
                             }
                             dateString.style.textTransform = 'capitalize';
                             tempString.textContent = Math.round(element.main.temp) + '°C';
                             descString.textContent = element.weather[0].description;
                             humidityString.textContent = '💧 ' + element.main.humidity + '%';
             
                             // Appending the data into html 
                             boxDiv.append(dateString);
                             boxDiv.append(imgHour);
                             boxDiv.append(tempString);
                             boxDiv.append(descString);
                             boxDiv.append(humidityString);
                             document.querySelector('.hourly-container3').append(boxDiv);
             
                             
                      }
                  });
              
                }

                // Collecting the 4th day hourly forecast and appending it to a div
                function getHour4(){ 
                  data.list.forEach(element => {
                      var datanow = element.dt;
                      var melesec = datanow * 1000;
                      var dateres = new Date(melesec).getDate();
                      lelele = parseInt(document.querySelector('#row-date4').innerHTML);
                      
                      if (lelele == dateres){
                          
                             // Declaring vars
                             const boxDiv = document.createElement('div');
                             var imgHour = document.createElement('img');
                             var dateString = document.createElement('span');
                             var tempString = document.createElement('h2');
                             var descString = document.createElement('p');
                             var humidityString = document.createElement('span');
                             boxDiv.id = "hour-box";
                             imgHour.id = "hour-image";
             
                             // Collecting the data 
                             imgHour.src = 'https://openweathermap.org/img/wn/' + element.weather[0].icon + '@2x' + '.png';
                             let hourdate = new Date(element.dt * 1000);
                             if (hourdate.getHours() == "0" || hourdate.getHours() == "3" || hourdate.getHours() == "6" || hourdate.getHours() == "9") {
                                dateString.textContent = hourdate.toLocaleString("Ro-RO", {weekday: "long"}) + ', ' + '0' + hourdate.getHours() + ':' + hourdate.getMinutes() + '0';
                             }
                             else{
                                dateString.textContent = hourdate.toLocaleString("Ro-RO", {weekday: "long"}) + ', ' + hourdate.getHours() + ':' + hourdate.getMinutes() + '0';
                             }
                             dateString.style.textTransform = 'capitalize';
                             tempString.textContent = Math.round(element.main.temp) + '°C';
                             descString.textContent = element.weather[0].description;
                             humidityString.textContent = '💧 ' + element.main.humidity + '%';
             
                             // Appending the data into html 
                             boxDiv.append(dateString);
                             boxDiv.append(imgHour);
                             boxDiv.append(tempString);
                             boxDiv.append(descString);
                             boxDiv.append(humidityString);
                             document.querySelector('.hourly-container4').append(boxDiv);
 
                      }
                  });
              
                }

                // Collecting the 5th day hourly forecast and appending it to a div
                function getHour5(){
                  data.list.forEach(element => {
                      var datanow = element.dt;
                      var melesec = datanow * 1000;
                      var dateres = new Date(melesec).getDate();
                      lelele = parseInt(document.querySelector('#row-date5').innerHTML);
                      
                      if (lelele == dateres){
                          
                             // Declaring vars
                             const boxDiv = document.createElement('div');
                             var imgHour = document.createElement('img');
                             var dateString = document.createElement('span');
                             var tempString = document.createElement('h2');
                             var descString = document.createElement('p');
                             var humidityString = document.createElement('span');
                             boxDiv.id = "hour-box";
                             imgHour.id = "hour-image";
             
                             // Collecting the data 
                             imgHour.src = 'https://openweathermap.org/img/wn/' + element.weather[0].icon + '@2x' + '.png';
                             let hourdate = new Date(element.dt * 1000);
                             if (hourdate.getHours() == "0" || hourdate.getHours() == "3" || hourdate.getHours() == "6" || hourdate.getHours() == "9") {
                                dateString.textContent = hourdate.toLocaleString("Ro-RO", {weekday: "long"}) + ', ' + '0' + hourdate.getHours() + ':' + hourdate.getMinutes() + '0';
                             }
                             else{
                                dateString.textContent = hourdate.toLocaleString("Ro-RO", {weekday: "long"}) + ', ' + hourdate.getHours() + ':' + hourdate.getMinutes() + '0';
                             }
                             dateString.style.textTransform = 'capitalize';
                             tempString.textContent = Math.round(element.main.temp) + '°C';
                             descString.textContent = element.weather[0].description;
                             humidityString.textContent = '💧 ' + element.main.humidity + '%';
             
                             // Appending the data into html 
                             boxDiv.append(dateString);
                             boxDiv.append(imgHour);
                             boxDiv.append(tempString);
                             boxDiv.append(descString);
                             boxDiv.append(humidityString);
                             document.querySelector('.hourly-container5').append(boxDiv);
                             
                      }
                  });
              
                }
                 // calling each function to display the hourly forecast
                 getHour1();
                 getHour2();
                 getHour3();
                 getHour4();
                 getHour5();
                
               
            })
            // If there is any error , it will be displayed in a alert box or in the dev console
            .catch(err => {
                alert(err);
                console.log(err);
            })

           
        })
    }
    document.querySelector('#go-Up').addEventListener('click', scrolUp)
    function scrolUp(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
}
