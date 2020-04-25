import React from 'react';
import styled from 'styled-components'



const StyledWrapper = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;
    max-width: 500px;
    margin: auto;

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
    padding: 0 0 0 20px;
    width: 80%;
    color: #fff;

    @media (max-width: 768px){
        width: 100%;
    }
`;

const H3 = styled.h3`
    font-size: 18px;
    letter-spacing: 1px;
    color: #fff;
    margin-bottom: 12px;

    @media (max-width: 768px){
        font-size: 20px;
    }
`;

const CityVenue = ({ cityVenue }) => {
    if (!cityVenue) return null;
    return(
        <div className="col s12 h-flex wrap">
            { 
                cityVenue.map(venue =>{
                    const { id, location, name, categories } = venue;
                    return(
                        <div  className="col s6 t12 left">
                            <StyledWrapper key={ id }>
                            <TextWrapper>
                                    <P className="t-label">{categories[0].name}
                                    </P>
                                    <H3 title={name}>{name}</H3>
                                    
                                    <P className="mb12">
                                        Address: {
                                        (`${location.address}`) + (`, ${location.city}`) + (`, ${location.country}`)
                                        + (`, ${location.postalCode}`)
                                        }
                                    </P>
                                </TextWrapper>
                            </StyledWrapper>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CityVenue;

