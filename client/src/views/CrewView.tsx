import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LoggedContext } from "contexts/LoggedContext";
import DefWrapper from "components/atoms/DefWrapper";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import Form from "components/atoms/Form";
import Valid from "components/atoms/Valid";
import {
  InfoBar,
  Photo,
  Text,
  Desc,
  Main,
  StyledSwitch,
} from "./styled/styledCrewView";
import Switch from "components/atoms/Switch";
import Conversation from "./crewViews/Conversation";
import Meetings from "./crewViews/Meetings";

const CrewView = () => {
  const { logData, setLogData }: any = useContext(LoggedContext);
  const [photo, setPhoto] = useState("");
  const [input, setInput] = useState("s");
  const [log, setLog] = useState<any>(false);
  const [circle, setCircle] = useState(true);
  const [valid, setValid] = useState(false);
  let location = useLocation();
  const name = location.pathname.split("/").pop();
  const submit = async (e: any) => {
    e.preventDefault();
    e.target.reset();
    const truefun = async (data: Object) => {
      const dataObj = { ...logData, groups: [...logData.groups, name] };
      localStorage.setItem("logData", JSON.stringify(dataObj));
      setLogData(dataObj);
      setLog(data);
      await fetch(`/users/group`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login: logData.username, crewname: name }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    };
    await fetch(`/crews/auth/${name}/${input}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logData),
    })
      .then((response) => response.json())
      .then((data) => (data ? truefun(data) : setValid(true)))
      .catch((err) => console.log(err));
  };
  const change = (e: any) => setInput(e.target.value);
  const crcl = (): void => setCircle(!circle);
  useEffect(() => {
    const a = async () => {
      await fetch(`/crews/photoDesc/${name}`)
        .then((response) => response.json())
        .then((data) => setPhoto(data))
        .catch((err) => console.log(err));
      await fetch(`/crews/belong/${name}/${logData.username}`)
        .then((response) => response.json())
        .then((data) => setLog(data))
        .catch((err) => console.log(err));
    };
    a();
  }, [name, logData.username]);
  return (
    <DefWrapper flex>
      <InfoBar>
        <Photo src={photo[0]} />
        <Text>{name}</Text>
        <Desc>{photo[1]}</Desc>
      </InfoBar>
      {window.innerWidth <= 500 && <br />}
      <Main>
        {log ? (
          <>
            <StyledSwitch>
              <Switch circle={circle} setCircle={() => crcl()} />
            </StyledSwitch>
            {circle ? (
              <Conversation
                user={logData.username}
                groupId={log._id}
                name={name}
              />
            ) : (
              <Meetings user={logData.username} groupId={log._id} />
            )}
          </>
        ) : (
          <Form onSubmit={submit}>
            {valid && <Valid>Invalid password</Valid>}
            <Desc>You must enter a password, to see group</Desc>
            <Input type="password" placeholder="password" onChange={change} />
            <Button>Enter</Button>
          </Form>
        )}
      </Main>
    </DefWrapper>
  );
};

export default CrewView;
