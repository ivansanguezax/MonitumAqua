# Monitum Aqua 

## Summary

In 2019 nearly 4,800 people died worldwide and millions of people we’re at risk because of floods. This is why our team created Monitum Aqua, an early warning and flood prevention system with the main goal to save lives. Our project is an Internet of Things solution which will provide a Web Application that analyze and monitors near real time satellite images provided by NASA and we combine this measurements with the data captured by our proprietary Hardware solution on-site



## How We Addressed This Challenge
We develop a web Application to monitor and analyze in near-real time satellite images provided by NASA and we integrate our solution with a virtual assistant for immediate alert. This software is connected to a 3G mobile module that controls the turrets stations that are powered with multiple sensors and allocated to few meters from the rivers, with the aim that will provide constant information in real time; in addition to alerting nearby communities with a siren system with a range of 2 km.

This project will help, provide and alert respective information to sites at risk of flood risk, making a solid and complete resilience


## How We Developed This Project


##### Web application

We use the NASA's Global Imagery Browse Services (GIBS) APIs as a Data Provider for the satellite imagery and visualize the Data Layers such as: Humidity, Precipitations, Air Velocity, among many other parameters that allow us train a machine learning model that predicts eventual floods hazards. 

Try it with the following lines of code:

    let searchButton = document.querySelector("#search")
    
    
    searchButton.addEventListener("click", ()=>{
      console.log("button pressed")
      sendApiRequest()
    });
    
    
    async function sendApiRequest(){
      let API_KEY = "Your API Key"
      let response = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=-63.505657&lat=-16.859075&date=2020-08-21&&dim=0.10&api_key=${API_KEY}`);
      console.log(response)
      let data = await response.json()
      console.log(data)
      useApiData(data)
    }
    
    function useApiData(data){
        document.querySelector("#content").innerHTML += `<img src="${data.url}">`
    }
    

learn more here: https://monitumaqua.us/

##### Hardware

The idea was inspired by the current weather turrets found in different countries, the idea was to create a turret that has only one function, which is to provide early warning of flooding.

You can see more here: https://monitumaqua.us/Solid.html

As you see in the following image, that would be the turret in its 100%

operation. The turret consists of a rigid structural base formed of stainless steel, we are going to describe all its components.


## Project Demo

https://youtu.be/GwBDbZMeixM 

## Data & Resources

Arduino Repo: https://github.com/ivansanguezax/MonitumAqua

Solidworks Design: https://github.com/ivansanguezax/MonitumAqua

Solidwork https://n9.cl/6lcvg


