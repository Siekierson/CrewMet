import React from 'react'
import styled from 'styled-components';
import ButtonLink from 'components/molecues/ButtonLink';
import CrewBar from 'components/organisms/CrewBar';
const Wrapper = styled.div`

`
const HomeView = () =>{
    return(
        <Wrapper>
            <CrewBar/>
            <ButtonLink path='/create'>Create New Crew</ButtonLink>
        </Wrapper>
    )
}

export default HomeView