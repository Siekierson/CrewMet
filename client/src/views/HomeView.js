import React from 'react'
import styled from 'styled-components';
import ButtonLink from 'components/molecues/ButtonLink';
const Wrapper = styled.div`
padding:60px;
`
const HomeView = () =>{
    return(
        <Wrapper>
            <ButtonLink path='/create'>Create New Crew</ButtonLink>
        </Wrapper>
    )
}

export default HomeView