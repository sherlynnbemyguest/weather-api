import React from 'react';
import styled from 'styled-components'



const StyledWrapper = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    margin: auto;
    border-radius: 8px;

    &:first-child{
        margin-top: 20px;
    }

    &:last-child{
        margin-bottom: 20px;
    }

    .t-label{
        color: #ec7532
    }
    
    .bold{
        font-weight: 600;
    }

    @media (max-width: 768px){
        flex-wrap: wrap;

        .col.s6{
            width: 100%;
        }
    }
`;

const P = styled.p`
    font-size: 14px;
    letter-spacing: 2px;
`;

const TextWrapper = styled.div`
    color: #fff;

    @media (max-width: 768px){
        width: 100%;
    }
`;

const H3 = styled.h3`
    font-size: 18px;
    letter-spacing: 1px;
    color: #fff;
    margin-bottom: 6px;

    @media (max-width: 768px){
        font-size: 20px;
    }
`;

const CityVenue = ({ cityVenue }) => {
    if (!cityVenue) return null;
    return(
        <div className="col s12 h-flex wrap">
            { 
                cityVenue.map(({location, name, categories}, i) =>{
                    return(
                            <StyledWrapper key={ i }>
                            <TextWrapper>
                                    {categories.map((category, j) => {
                                        return <P className="t-label" key={j}>{category.name}</P>
                                    })}
                                    <H3 title={name}>{name}</H3>
                                    
                                    <P>
                                        Address:
                                        {location.formattedAddress.map((address, k) => {
                                            return <span key={k}> {(`${address} `)}</span>
                                        })}
                                    </P>
                                </TextWrapper>
                            </StyledWrapper>
                    )
                })
            }
        </div>
    )
}

export default CityVenue;
