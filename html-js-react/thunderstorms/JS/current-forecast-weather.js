if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        
        const key = "66d6dd5057b73752a0babdd3bf02100d";
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=ro`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const {temp} = data.current;
            const {description} = data.current.weather[0];

            $('#temp-now').unbind().append(Math.round(temp) + '&deg;');
            $('#description').text(description);
            $('#weather-icon').attr("src", 'https://openweathermap.org/img/wn/' + data.current.weather[0].icon + '@2x' + '.png');
            // FORECAST IMAGESSSSSSSSSS
            $('#forecast-icon1').attr("src", 'https://openweathermap.org/img/wn/' + data.daily[1].weather[0].icon + '@2x' + '.png' );
            $('#forecast-icon2').attr("src", 'https://openweathermap.org/img/wn/' + data.daily[2].weather[0].icon + '@2x' + '.png' );
            $('#forecast-icon3').attr("src", 'https://openweathermap.org/img/wn/' + data.daily[3].weather[0].icon + '@2x' + '.png' );
            $('#forecast-icon4').attr("src", 'https://openweathermap.org/img/wn/' + data.daily[4].weather[0].icon + '@2x' + '.png' );
            $('#forecast-icon5').attr("src", 'https://openweathermap.org/img/wn/' + data.daily[5].weather[0].icon + '@2x' + '.png' );


    // SETTING THE LAST UPDATED TIME ************************************************************************************************

    if (!Date.now) {
        Date.now = function() { return new Date().getTime(); }
    }
      var x =  Math.floor(Date.now() / 1000);
      var y = x - data.current.dt;
      var res = y / 60;
        if(res < 1){
            document.querySelector('#reload').textContent = "Actualizat cu mai puțin de un minut în urmă";
        } 
        if(res = 1){
            document.querySelector('#reload').textContent = 'Actualizat cu ' + res.toFixed(0) + " minut în urmă";
        } 
        if (res > 1){
            document.querySelector('#reload').textContent = 'Actualizat cu ' + res.toFixed(0) + " minute în urmă";
        }
        if(res > 60) {
            document.querySelector('#reload').textContent = "Actualizat cu o oră în urmă";
        }


        // CHANGING THE BACKGROUND ******************************************************************************
    const hourss = new Date().getHours();     
          
     if(hourss >= 21 && hourss > 5){
        $('body').css("background", "url('../images/night.jpg')");
        $('body').css("backgroundRepeat",'no-repeat');
        $('body').css("backgroundSize" ,'cover');
        $('body').css("width" ,'100%');
        $('body').css("height" ,'100%');
        $('body').css("backgroundPosition" ,'center');
    } 
    else {
        if(data.current.weather[0].id == "801"){
            $('body').css("background", "url('../images/few-clouds.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].id == "802"){
            $('body').css("background", "url('../images/scattered-clouds.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].id == "803"){
            $('body').css("background", "url('../images/few-clouds.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].id == "804"){
            $('body').css("background", "url('../images/overcast-clouds.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].main == "Thunderstorm"){
            $('body').css("background", "url('../images/thunderstorm.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].main == "Drizzle"){
            $('body').css("background", "url('../images/drizzle.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].id == "500"){
            $('body').css("background", "url('../images/light-rain.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].id == "501" || data.current.weather[0].id == "511" || data.current.weather[0].id == "520" || data.current.weather[0].id == "521" || data.current.weather[0].id == "522" || data.current.weather[0].id == "531"){
            $('body').css("background", "url('../images/moderate-rain.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].id == "502" || data.current.weather[0].id == "503" || data.current.weather[0].id == "504"){
            $('body').css("background", "url('../images/heavy-rain.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].main == "Snow"){
            $('body').css("background", "url('../images/snowing.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].main == "Clear"){
            $('body').css("background", "url('../images/clear-sky.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].id == "701"){
            $('body').css("background", "url('../images/mist.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].id == "721"){
            $('body').css("background", "url('../images/haze.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].id == "731"){
            $('body').css("background", "url('../images/dust.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].id == "741"){
            $('body').css("background", "url('../images/fog.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].id == "762"){
            $('body').css("background", "url('../images/ash.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }

        if(data.current.weather[0].id == "781"){
            $('body').css("background", "url('../images/tornado.jpg')");
            $('body').css("backgroundRepeat",'no-repeat');
            $('body').css("backgroundSize" ,'cover');
            $('body').css("width" ,'100%');
            $('body').css("height" ,'100%');
            $('body').css("backgroundPosition" ,'center');
        }
    }

        // FORECAST DATES *********************************************************
        // 1     
        const dataTime1 = data.daily[0].dt;
        const milliseconds = dataTime1 * 1000 ;
        const dateObject = new Date(milliseconds)
        //2
        const dataTime2 = data.daily[1].dt;
        const milliseconds2 = dataTime2 * 1000 ;
        const dateObject2 = new Date(milliseconds2)
        //3
        const dataTime3 = data.daily[2].dt;
        const milliseconds3 = dataTime3 * 1000 ;
        const dateObject3 = new Date(milliseconds3)
        //4
        const dataTime4 = data.daily[3].dt;
        const milliseconds4 = dataTime4 * 1000 ;
        const dateObject4 = new Date(milliseconds4)
        //5
        const dataTime5 = data.daily[4].dt;
        const milliseconds5 = dataTime5 * 1000 ;
        const dateObject5 = new Date(milliseconds5)

            $('.day-date1').text("Astăzi");
            $('.day-date2').text(dateObject2.toLocaleString("ro-RO", {weekday: "long"}));
            $('.day-date3').text(dateObject3.toLocaleString("ro-RO", {weekday: "long"}));
            $('.day-date4').text(dateObject4.toLocaleString("ro-RO", {weekday: "long"}));
            $('.day-date5').text(dateObject5.toLocaleString("ro-RO", {weekday: "long"}));

            $('#row-date1').text(dateObject.toLocaleString("en-US", {day: "numeric"}));
            $('#row-date2').text(dateObject2.toLocaleString("en-US", {day: "numeric"}));
            $('#row-date3').text(dateObject3.toLocaleString("en-US", {day: "numeric"}));
            $('#row-date4').text(dateObject4.toLocaleString("en-US", {day: "numeric"}));
            $('#row-date5').text(dateObject5.toLocaleString("en-US", {day: "numeric"}));

            
            // Temperature
        
            $('#temp-day1').unbind().append(Math.round(data.daily[0].temp.day) + '&deg;');
            $('#temp-night1').unbind().append(Math.round(data.daily[0].temp.night) + '&deg;');
            $('#temp-day2').unbind().append(Math.round(data.daily[1].temp.day) + '&deg;');
            $('#temp-night2').unbind().append(Math.round(data.daily[1].temp.night) + '&deg;');
            $('#temp-day3').unbind().append(Math.round(data.daily[2].temp.day) + '&deg;');
            $('#temp-night3').unbind().append(Math.round(data.daily[2].temp.night) + '&deg;');
            $('#temp-day4').unbind().append(Math.round(data.daily[3].temp.day) + '&deg;');
            $('#temp-night4').unbind().append(Math.round(data.daily[3].temp.night) + '&deg;');
            $('#temp-day5').unbind().append(Math.round(data.daily[4].temp.day) + '&deg;');
            $('#temp-night5').unbind().append(Math.round(data.daily[4].temp.night) + '&deg;');

            // Description

            $('.day-description1').text(data.daily[0].weather[0].description);
            $('.day-description2').text(data.daily[1].weather[0].description);
            $('.day-description3').text(data.daily[2].weather[0].description);
            $('.day-description4').text(data.daily[3].weather[0].description);
            $('.day-description5').text(data.daily[4].weather[0].description);

            // setting animated progress bars
 
 $('#myHumidityBar').css("width",data.current.humidity + '%');   
 $('#humidity-number').text(data.current.humidity + '%');
 $('#wind-speed').text(data.current.wind_speed + ' km/h');
 if(Math.round(data.current.uvi) <= 2){
     $('#index-number').text(Math.round(data.current.uvi) + ' , ' + " Scăzut");
     $('#myIndexBar').css("background-color", "green")
 }
 if(Math.round(data.current.uvi) > 2 && Math.round(data.current.uvi) <= 5){
    $('#index-number').text(Math.round(data.current.uvi) + ' , ' + " Moderat");
    $('#myIndexBar').css("background-color", "yellow")
}
if(Math.round(data.current.uvi) > 5 && Math.round(data.current.uvi) <= 7){
    $('#index-number').text(Math.round(data.current.uvi) + ' , ' + " Înalt");
    $('#myIndexBar').css("background-color", "orange")
}
if(Math.round(data.current.uvi) > 7 && Math.round(data.current.uvi) <= 10){
    $('#index-number').text(Math.round(data.current.uvi) + ' , ' + " Foarte Înalt");
    $('#myIndexBar').css("background-color", "tomato")
}
if(Math.round(data.current.uvi) > 10 && Math.round(data.current.uvi) >= 11){
    $('#index-number').text(Math.round(data.current.uvi) + ' , ' + " Extrem");
    $('#myIndexBar').css("background-color", "#EE82EE")
}

        const sunrais = new Date(data.current.sunrise * 1000);
        const sunsett = new Date(data.current.sunset * 1000);
        if (sunrais.getMinutes() < 10){
            $('#sunrise').text('0' + sunrais.getHours() + ':' + '0' + sunrais.getMinutes());
        }
        else{
            $('#sunrise').text('0' + sunrais.getHours() + ':' + sunrais.getMinutes());
        }
        if (sunsett.getMinutes() < 10){
            $('#sunset').text(sunsett.getHours() + ':' + '0' + sunsett.getMinutes());
        }
        else{
            $('#sunset').text(sunsett.getHours() + ':' + sunsett.getMinutes());
        }

        })
    })
}