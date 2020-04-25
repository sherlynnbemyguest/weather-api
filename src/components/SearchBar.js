import React, { Component } from 'react';
import styled from 'styled-components'

const SearchWrapper = styled.div`
    padding: 30px 12px 12px 12px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    
    .t-orange{
        color: #ec7532;
    }

    @media (max-width: 500px){
        flex-wrap: wrap
    }
`;

const CompanyName = styled.div`
    width: 100%;
    margin-bottom: 12px;
    text-align: center;
`;

const H1 = styled.h1`
    line-height: 0.5;
    color: #fff;
    font-weight: normal;
    margin-bottom: 12px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 0;
    background: none;
    color: #fff;
    font-size: 18px;
`;

const Button = styled.button`
    position: absolute;
    right: 10px;
    border: 0;
    background: none;

    & svg{
        position: relative;
        top: -2px;
        width: 18px;
    }
`;

const BarWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    border-bottom: 1px #636161 solid;
    position: relative;
    align-items: center;
}
`;




class SearchBar extends Component{
    state = { cityQuery: '' };
    
    updateMovieQuery = event => {
        console.log('event.target.value', event.target.value);
        this.setState({cityQuery: event.target.value })
    }

    handleKeyPress = event => {
        if(event.key === 'Enter'){
            this.searchCity();
        }
    }

    searchCity = () => {
        this.props.searchCity(this.state.cityQuery);
    }

    render() {
        return(
            <SearchWrapper>
                <CompanyName>
                    <H1><span className="t-orange">W</span>eatherSearch</H1>
                </CompanyName>
                <BarWrapper>
                    <Input 
                        onChange={this.updateMovieQuery}
                        onKeyPress={this.handleKeyPress}
                        placeholder='Search for City' 
                    />
                    <Button onClick={this.searchCity}>
                        <svg className="svg-icon" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path className="cls-1" d="M23.73 22.41l-5.175-5.175A10.446 10.446 0 0021 10.5C21 4.695 16.305 0 10.5 0S0 4.695 0 10.5 4.695 21 10.5 21c2.565 0 4.905-.915 6.735-2.445l5.175 5.175c.18.18.42.27.66.27.24 0 .48-.09.66-.27a.915.915 0 000-1.32zM10.5 19.515c-4.965 0-9-4.035-9-9s4.035-9 9-9 9 4.035 9 9-4.035 9-9 9z"/></svg>
                    </Button>
                </BarWrapper>
            </SearchWrapper>
        )
    }
}

export default SearchBar;