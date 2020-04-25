import React from 'react';
import styled from 'styled-components'

const StyledWrapper = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    .mb12{
        margin-bottom: 12px;
    }

    .t-label{
        color: #ec7532
    }
    
    .bold{
        font-weight: 600;
    }

    @media (max-width: 768px){
        flex-wrap: wrap
    }
`;

const H2 = styled.h2`
    font-family: HelveticaNeueBold;
    font-size: 22px;
    color: #fff;

    @media (max-width: 768px){
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
    }
`;

const Weather = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    position: relative;
    padding: 15px 30px 15px 60px;
    margin-left: 60px;

    background: rgba(255,255,255, 0.4);
    border-radius: 8px;
    color: #fff;

    @media (max-width: 768px){
        margin-left: 0;
    }
`;
const Temp = styled.div`
    font-size: 40px; 
    font-family: HelveticaNeueBold;
`;
const Text = styled.div`
    font-size: 22px;
    margin-left: 12px;
    text-transform: capitalize;

    p{
        font-size: 14px;
        margin-top: 2px;
    }
`;
const Icon = styled.div`
    position: absolute;
    left: -40px;
    top: -30px;

    img{
        width: 120px;
    }
`;

const WeatherForecast = ({ cityWeather }) => {
    if (!cityWeather) return null;
    const { sys, weather, name, main } = cityWeather;

    var today = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    

    return(
        <StyledWrapper>
            <H2 className="upper-case">{ name } - { sys.country } </H2>
            
            <Weather>
                <Icon>
                    <img src={require(`../assets/image/weather-icon/${ weather[0].icon }.svg`)}></img>
                </Icon>
                <Temp>
                    {
                        (Math.round(main.temp))
                    }&deg;
                </Temp>
                <Text>
                    {weather[0].description}
                <p>{days[today.getDay()]}, {months[today.getDay()]} {today.getDay()} {today.getFullYear}</p>
                </Text>
            </Weather>
            
        </StyledWrapper>
    )
}

export default WeatherForecast;

