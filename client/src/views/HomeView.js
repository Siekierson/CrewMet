import React,{useContext} from 'react'
import styled from 'styled-components';
import ButtonLink from 'components/molecues/ButtonLink';
import SearchGroup from 'components/molecues/SearchGroup';
import CrewBar from 'components/organisms/CrewBar';
import {LoggedContext} from 'contexts/LoggedContext';
import DefWrapper from 'components/atoms/DefWrapper';
const HomeView = () =>{
    const {setLogData} = useContext(LoggedContext)
    const logOut = () =>{
        localStorage.clear();
        setLogData(false)
    }
    return(
        <DefWrapper>
            <CrewBar/>
            <ButtonLink path='/create'>Create New Crew</ButtonLink>
            <ButtonLink onClick={logOut} path='/login'>Log out</ButtonLink>
            <SearchGroup/>
        </DefWrapper>
    )
}

export default HomeView