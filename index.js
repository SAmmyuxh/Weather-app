const apiKey = "b3509b564459b89ad94ac8bd530bc3ca"
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

       const searchbox = $(".search input");
       const searchbtn = $(".search button");
       const weatherIcon = $(".weather-icon");

        async function checkweather(city){
            const response = await fetch(apiurl + city + `&appid=${apiKey}`);
            var data = await response.json();
            if(response.status == 404){
                $(".error").css("display","block");
                $(".weather").css("display","none");
            }else{
            var a =Math.round(data.main.temp);
            $(".temp").text(a +"°c")  ;
            $(".city").text(data.name);
            $(".humidity").text(data.main.humidity +"%");
            $(".wind").text(data.wind.speed +"km/h");
            if(data.weather[0].main == "Clouds"){
            $(weatherIcon).attr("src","images/clouds.png");
           }else if(data.weather[0].main == "Clear"){
            $(weatherIcon).attr("src","images/clear.png");
           }else if(data.weather[0].main == "Rain"){
            $(weatherIcon).attr("src","images/raining (1).png");
           }else if(data.weather[0].main == "Mist"){
            $(weatherIcon).attr("src","images/mist.png");
           }else if(data.weather[0].main == "Drizzle"){
            $(weatherIcon).attr("src","images/drizzle.png");
           }
           $(".weather").css("display","block");
           $(".error").css("display","none");
        }
        }
        searchbtn.on("click",()=>{
            checkweather(searchbox.val());
        })