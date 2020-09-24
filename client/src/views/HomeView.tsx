import React, { useContext } from "react";
import ButtonLink from "components/molecues/ButtonLink";
import SearchGroup from "components/molecues/SearchGroup";
import CrewBar from "components/organisms/CrewBar";
import { LoggedContext } from "contexts/LoggedContext";
import DefWrapper from "components/atoms/DefWrapper";
const HomeView = () => {
  const { setLogData }: any = useContext(LoggedContext);
  const logOut = () => {
    localStorage.clear();
    setLogData(false);
  };
  return (
    <DefWrapper>
      <CrewBar />
      <ButtonLink path="/create" text="Create New Crew" />
      <ButtonLink onClick={logOut} path="/login" text="Log out" />
      <SearchGroup />
    </DefWrapper>
  );
};

export default HomeView;
