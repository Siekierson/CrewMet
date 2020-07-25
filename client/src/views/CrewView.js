import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'
import DefWrapper from 'components/atoms/DefWrapper';
const CrewView = ()=>{
    let location = useLocation();
    return(
        <DefWrapper>{location.pathname.split("/").pop()}</DefWrapper>
    )
}

export default CrewView;