const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const from = document.querySelector("form");
const search = document.querySelector(".search_input");
const Weather = document.querySelector("#weather");
let date=new Date();
let date_str=date.toString();
let splt_dt=date_str.split(" ");
let newDT=splt_dt[0]+" "+splt_dt[1]+" "+splt_dt[2]+" "+splt_dt[3]+" "+splt_dt[4]
// const API="http://api.weatherstack.com/current?access_key=5ea76317cec52e4ab55163389febbc4a&query=chomu";
// const imgURL="";


//get reports
const getWeatherReport = async (city) => {
    weather.innerHTML = `<div class="col-sm-12"><center><h1> Loading...</h1></center></div>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const res = await fetch(url);
    const data = await res.json();

    return showWeatherReport(data);

}

//show reports
const showWeatherReport = (data) => {
    if (data.cod == "404") {

        weather.innerHTML = `<div class="col-sm-12"><center><h1> city no found</h1></center></div>`
    }
    else {
        console.log(data);

        weather.innerHTML =
            `
       <div class="col-sm-12">
                <div class="row">
                     <div class="col-sm-4"></div>
                     <div class="col-sm-4 mt-5">
                        <div class="row">
                            <div class="col-sm-12">
                                <center><b>${data.main.temp} &#8451;</b></center>
                            </div>
                            <div class="col-sm-12" id="sky_status">
                                
                            </div>
                        </div>
                       
                        
                        <!--&#8457;--->
                        <div class="row">
                            <div class="col-sm-12">
                               <center> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                                    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                                  </svg> 
                                ${data.wind.speed} ${data.weather[0].main}
                                </center>
                            </div>
                            <div class="col-sm-12 mt-4">
                                <center><span id="city">${data.name}<span></center>
                                
                            </div>
                        </div>
                     </div>
                     <div class="col-sm-4"></div>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-6 img">
                        <center><img src="suntrans.png"></center>
                    </div>
                    <div class="col-sm-3"></div>
                </div>
            </div>
            <div class="col-sm-12 ">
                <div class="row">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4 time">
                        <center>timezone:Asia-Kolkata</center>
                        <center>local-time:${newDT}</center>
                       
                    </div>
                    <div class="col-sm-4"></div>
               </div>
            </div>
            <div class="col-sm-12 all">
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-8">
                        <div class="row">
                            <div class="col-sm-2 card">
                                <div class="row">
                                    <div class="col-sm-12">Pressure</div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-2">
                                              <iconify-icon icon="fluent:weather-snowflake-20-regular" style="font-size:20px;margin-left:20px"></iconify-icon>
                                    
                                            </div>
                                            <div class="col-sm-9 float-left">
                                              ${data.main.pressure} mbar
                                             </div>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            <div class="col-sm-2 card">
                               <div class="row">
                                    <div class="col-sm-12">visibility</div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                           <div class="col-sm-2">
                                             <iconify-icon icon="wi:sunset"style="font-size:20px;margin-left:20px"></iconify-icon>
                                            </div>
                                            <div class="col-sm-9 float-left">
                                             ${data.visibility/1000} km
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2 card">
                                <div class="row">
                                    <div class="col-sm-12">feels like</div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-2">
                                             
                                                <iconify-icon icon="wi:thermometer" style="font-size:20px;margin-left:20px"></iconify-icon>
                                            </div>
                                            <div class="col-sm-9 float-left">
                                                ${data.main.feels_like}&#8451;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2 card">
                                <div class="row">
                                    <div class="col-sm-12">humidity</div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-2">
                                                <iconify-icon icon="iwwa:humidity" style="font-size:20px;margin-left:20px"></iconify-icon>
                                               
                                            </div>
                                            <div class="col-sm-9 float-left">
                                              ${data.main.humidity}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2 card">
                                <div class="row">
                                    <div class="col-sm-12">max temp.</div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                             <div class="col-sm-2">
                                     
                                                <iconify-icon icon="raphael:temp" style="font-size:20px;margin-left:20px"></iconify-icon>
                                            </div>
                                            <div class="col-sm-9 float-left">
                                             ${data.main.temp_max}&#8451;
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2 card">
                                <div class="row">
                                   <div class="col-sm-12">min temp.</div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-2">
                             
                                              <iconify-icon icon="ri:temp-cold-line" style="font-size:20px;margin-left:20px"></iconify-icon>
                                            </div>
                                            <div class="col-sm-9 float-left">
                                            ${data.main.temp_min}&#8451;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2"></div>
            </div>
        </div>
   `
    }
}


from.addEventListener(
    "submit",
    function (event) {
        getWeatherReport(search.value);
        // console.log(search.value);
        event.preventDefault()       //stop from to reload
    }
)
//<img src="https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">