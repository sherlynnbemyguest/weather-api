import React, { Component } from 'react';
import SearchBar from './SearchBar';
import WeatherForecast from './WeatherForecast';
import CityVenue from './CityVenue';

const API_ADDRESS = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '627e3d36605f94d2e2535a5fb7e456e6';
const clientID = "ZW1Y2EINRKCEED2L1ONRU5KG3ETJDYODQNYKJNB0D301ZQZG";
const secretKey = "FHPJZ2TFZCK5BB4M0EXBJSEUQKLZUC22YPQRIH03ZHP242JY";

class App extends Component{
    state = { cityQuery: '', cityWeather: null, cityVenue: []};

    searchCity = cityQuery => {
        console.log('this.state', this.state);

        fetch(`${API_ADDRESS}/weather?q=${cityQuery}&units=metric&APPID=${API_KEY}`)
            .then (response => response.json())
            .then (json => {
                console.log('json', json);

                if(json.cod == 200){
                    const cityWeather = json;
                    this.setState({ cityWeather });
                }else{
                    alert('City not found');
                }
            })

        fetch(`https://api.foursquare.com/v2/venues/search?near=${cityQuery}&limit=5&client_id=${clientID
        }&client_secret=${secretKey}&v=20200422`)
        .then (response => response.json())
        .then (json => this.setState({ cityVenue: json.response.venues }))
    }


    render() {
        console.log ('this.state', this.state);
        return(
            <div>
                <div className="search-cont">
                    <div className="container">
                        <SearchBar searchCity={this.searchCity} />
                    </div>
                </div>

                <div className="container">
                    <div className="col s12 left">
                        <WeatherForecast cityWeather={this.state.cityWeather} />
                    </div>
                        <CityVenue cityVenue={this.state.cityVenue} />
                </div>
            </div>
        );
    }
}
export default App;