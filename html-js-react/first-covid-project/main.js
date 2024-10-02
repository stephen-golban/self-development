
const mapbox_token = "pk.eyJ1Ijoic3RlZmFuZWxlZSIsImEiOiJja2IwMGtqdHQwM2U4MnNvM2toYTJwMTJoIn0.p72U6uDuRpT52azhsUjVrA";


mapboxgl.accessToken = mapbox_token;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 1
});
$('#Worldwide').show();

// ON ENTER SEARCH COUNTRY ********************************************************************

$('#input-value').keyup((event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        loadCorona();
    }
})

// ON CLICK SEARCH COUNTRY *********************************************************************

$('#button').click(loadCorona);

// DISPLAYS INFO ABOUT SEARCHED COUNTRY ********************************************************

function loadCorona(){
    $('#headeer').hide();
    $('.country-virus-info').css("display", 'flex');
    $('.tabcontent:nth-child(2)').show();
    let value = $('#input-value').val();
    if(value == 0){
        $('.country-virus-info').css("display", 'none');
        $('#headeer').show();
        $('#headeer').text("Please Search for a country or a country code ! Example: United States of America or search for country code  US or USA").css("color", "red").css('text-align',"center");
        $('#input-value').focus();
    }
    const api = `https://corona.lmao.ninja/v2/countries/${value}`;
    fetch(api)
    .then(response => response.json())
    .then(data => {
        let longitute = data.countryInfo.long; 
        let latitude = data.countryInfo.lat;
        let countryId = data.country;
        let {flag} = data.countryInfo;
        const {cases, critical, deaths, population, recovered, tests, todayCases, todayDeaths, updated} = data;
        //Set DOM Elements from the API
        $('#country-name').text(data.country + "-" + data.countryInfo.iso2);
        $('#flag').attr("src", data.countryInfo.flag);
        $('#cases').text(cases.toLocaleString());
        $('#critical').text(critical.toLocaleString());
        $('#deaths').text(deaths.toLocaleString());
        $('#recovered').text(recovered.toLocaleString());
        $('#tests').text(tests.toLocaleString());
        $('#country-population').text(population.toLocaleString());
        $('#today-cases').text(todayCases.toLocaleString());
        $('#today-deaths').text(todayDeaths.toLocaleString());
  
        //----------- Convert unix timestamp to  number into real time---------
 
        let b = new Date(updated).getHours();
        let d = new Date(updated).getUTCMinutes();
        if(d < 10 && b < 10) {
            $('#update').text("0"+b+":"+"0"+d);
            var updateTime = "0"+b+":"+"0"+d;
        }
        else if(d < 10 && b > 10) {
            $('#update').text(b+":"+"0"+d);
            var updateTime = b+":"+"0"+d;
        }
        else{
            $('#update').text(b + ":" + d);
            var updateTime = b + ":" + d;
        }

        map.flyTo({
            center: [longitute,latitude],
            speed: 0.4,
            zoom: 3,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });

            
            var popup = new mapboxgl.Popup()
            .setHTML('Country: ' + countryId + ' <img src="' +  flag + '" width="30px" >' + '<br> Total Cases: ' + cases.toLocaleString() + '<br> Total Deaths: ' + deaths + '<br> Last Updated: ' + updateTime)
            var marker = new mapboxgl.Marker({color: "red",width: "100px"})
            .setLngLat([longitute, latitude])
            .setPopup(popup)
            .addTo(map);
    });
}

// GLOBAL STATS ***************************************************************

var totalInfo = {
	"async": true,
	"crossDomain": true,
	"url": "https://coronavirus-map.p.rapidapi.com/v1/summary/latest",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
		"x-rapidapi-key": "b0a1453f66msh83a8c621326e4afp15daabjsna9f38433c29b"
	}
}
$.ajax(totalInfo).done(function (response) {


    let generatedOn = response.data.generated_on;
    const {total_cases, critical, deaths, recovered, active_cases} = response.data.summary;
    //Set DOM Elements from the API
    $('#title-live').text("Coronavirus - " + total_cases.toLocaleString() + " Confirmed - live");
    $('#total-confirmed').text(total_cases.toLocaleString());
    $('#total-deaths').text(deaths.toLocaleString());
    $('#total-recovered').text(recovered.toLocaleString());
    $('#total-critical').text(critical.toLocaleString());
    $('#total-unresolved').text(active_cases.toLocaleString());
    $('#new-confirmed').text(response.data.change.total_cases.toLocaleString());
    $('#new-deaths').text(response.data.change.deaths.toLocaleString());

  //----------- Convert unix timestamp to  number into real time---------
        let b = new Date().getMinutes()
        let d = new Date(generatedOn*1000).getMinutes();
        let y = b-d;
        if(y === 0){
            $('#update-time').text("just now")
        }
        else if(y === 1) {
            $('#update-time').text("1 minute ago")
        }
        else{
            $('#update-time').text(y + " minutes ago")
        }
  
});
// NAVBAR ******************************************************************************
  $('.fa-bars').click(() => {
      $('#mySidenav').css("width", "250px");
      $('.black-container').toggleClass('open-black-container');
  })
  $('.black-container').click(() => {
        $('#mySidenav').css("width", "0px");
        $('.black-container').removeClass('open-black-container');
  })
  $('.closebtn').click(() => {
    $('#mySidenav').css("width", "0px");
    $('.black-container').removeClass('open-black-container');
  })
// MIDDLE MENU ***************************************************************************
var arr = [
    $('.tab .tablink:nth-child(1)'),
    $('.tab .tablink:nth-child(2)'),
    $('.tab .tablink:nth-child(3)')
]
arr.forEach(element => {
    element.click(() => {
       element.addClass('active').siblings().removeClass('active');
    })
});
$('.tab .tablink:nth-child(1)').click(() => {
    $('#Worldwide').show();
    $('#Country-info').hide();
    $('#Latest-New').hide();
})
$('.tab .tablink:nth-child(2)').click(() => {
    $('#Worldwide').hide();
    $('#Country-info').show();
    $('#Latest-New').hide();
})
$('.tab .tablink:nth-child(3)').click(() => {
    $('#Worldwide').hide();
    $('#Country-info').hide();
    $('#Latest-New').show();
})

// If clicked on search bar then opens the country tab
$('#input-value').click(() => {
    $('#Worldwide').hide();
    $('#Country-info').show();
    $('#Latest-New').hide();
    $('.tab .tablink:nth-child(2)').addClass('active').siblings().removeClass('active');
})
$('#button').click(() => {
    $('#Worldwide').hide();
    $('#Country-info').show();
    $('#Latest-New').hide();
    $('.tab .tablink:nth-child(2)').addClass('active').siblings().removeClass('active');
})

// WEATHER TEMPERATURE
$(window).on('load', ()=> {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            let long = position.coords.longitude;
            let lat = position.coords.latitude;
            let ApiKey = "e1d19c24a5f02e48728be67b1bf22c65";
            let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${ApiKey}`;
  
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                       let temp = data.main.temp;
                       let name = data.name;
                    //Set DOM Elements from the API
                    $('#temp').unbind().append(name + ', ' + (Math.round(temp - 273.15)) + '&deg;' + 'C');
                });
        });
    }
});
