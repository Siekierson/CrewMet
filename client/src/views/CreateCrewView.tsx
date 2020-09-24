import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Form from "components/atoms/Form";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import Valid from "components/atoms/Valid";
import { LoggedContext } from "contexts/LoggedContext";
const Header = styled.h1`
  font-size: 5rem;
  margin-bottom: 40px;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;
type Info = boolean | null;
const CreateCrewView = () => {
  const { logData, setLogData }: any = useContext(LoggedContext);
  const [info, setInfo] = useState<Info[]>([false, false]);
  const [inputs, setInputs] = useState({
    crewname: "",
    member: "",
    description: "",
    password: "",
  });
  const change = (e: any) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  const submit = async (e: any) => {
    e.preventDefault();
    e.target.reset();
    setInfo([true, null]);
    const fetchFun = () => {
      fetch(`/crews/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });
      setInfo([true, true]);
      fetch(`/users/group`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          login: logData.username,
          crewname: inputs.crewname,
        }),
      });
      localStorage.setItem(
        "logData",
        JSON.stringify({
          ...logData,
          groups: [...logData.groups, inputs.crewname],
        })
      );
      setLogData({ ...logData, groups: [...logData.groups, inputs.crewname] });
    };
    const exist = await fetch(`/crews/exist/${inputs.crewname}`).then((res) =>
      res.json()
    );
    exist &&
    inputs.member &&
    inputs.crewname.length > 4 &&
    inputs.description.length > 4 &&
    inputs.password.length > 4
      ? fetchFun()
      : setInfo([true, false]);
  };
  const vars = {
    hidden: { x: window.innerWidth < 500 ? "60%" : "150%", y: "30%" },
    visible: {
      x: window.innerWidth < 500 ? "50%" : "70%",
      y: "10%",
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 15,
      },
    },
  };
  useEffect(() => {
    setInputs({ ...inputs, member: logData.username });
  }, [logData, inputs]);
  return (
    <Form
      id="createCrew"
      create
      onSubmit={submit}
      variants={vars}
      initial="hidden"
      animate="visible"
    >
      <Header>Create your crew</Header>
      {info[0] && (
        <Valid scnd={info[1]}>
          {info[1] ? "Crew created" : "Something gone wrong"}
        </Valid>
      )}
      <Input name="crewname" placeholder="name of crew" onChange={change} />
      <Input name="description" placeholder="description" onChange={change} />
      <Input
        name="password"
        type="password"
        placeholder="password to group"
        onChange={change}
      />
      <Input
        name="photo"
        placeholder="link to photo (not required)"
        onChange={change}
      />
      <Button type="submit">Create crew</Button>
    </Form>
  );
};
export default CreateCrewView;
