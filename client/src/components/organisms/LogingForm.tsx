import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Form from "components/atoms/Form";
import Button from "components/atoms/Button";
import ButtonLink from "components/molecues/ButtonLink";
import Input from "components/atoms/Input";
import { Redirect } from "react-router-dom";
import { LoggedContext } from "contexts/LoggedContext";
import Valid from "components/atoms/Valid";

const Head = styled.h1`
  font-size: 4.8rem;
`;
interface Inputs {
  username: string;
  password: string;
  email: string;
}
interface Props {
  toLog: Function;
  variant: any;
  type?: boolean; // true = login , false = register
}

const LogingForm = ({ toLog, variant, type }: Props) => {
  const { setLogData, setWait }: any = useContext(LoggedContext);
  enum InputAtributes {
    username,
    password,
    email,
  }
  const [inputs, setInputs] = useState<Inputs>({
    username: "",
    password: "",
    email: "",
  });
  const [rdr, setRdr] = useState<null | boolean>(null);
  const [valid, setValid] = useState(false);
  const [localstorage, setLocalstorage] = useState({
    username: null,
  });
  const change = (e: any): void =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  const isLogged = (data: object) => {
    setRdr(true);
    setLogData(data);
    localStorage.setItem("logData", JSON.stringify(data));
  };
  const submit = async (e: any) => {
    e.preventDefault();
    e.target.reset();
    const loginInputs = {
      username: inputs.username,
      password: inputs.password,
    };
    setWait(true);
    await fetch(`/users/${type ? "auth" : "add"}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(type ? loginInputs : inputs),
    })
      .then((response) => response.json())
      .then((data) =>
        type
          ? data
            ? isLogged(data)
            : setRdr(false)
          : data === "User added!"
          ? toLog(true)
          : setValid(true)
      )
      .catch((err) => {
        setRdr(false);
        setValid(true);
      });
  };
  const slg = (): void => setLogData(localstorage);
  useEffect(() => {
    const newls = JSON.parse(localStorage.getItem("logData") || "{}");
    setLocalstorage(newls);
  }, []);
  return (
    <Form
      variants={variant}
      initial="hidden"
      animate="visible"
      onSubmit={submit}
    >
      {rdr && type && <Redirect to="/home" />}
      <Head>{type ? "Log In" : "Register"}</Head>
      {(rdr === false || valid) && (
        <Valid>
          Invalid fields or user {type ? "is not" : "arleady"} exist
        </Valid>
      )}
      <Input
        name={InputAtributes[0]}
        placeholder={InputAtributes[0]}
        onChange={change}
      />
      <Input
        name={InputAtributes[1]}
        placeholder={InputAtributes[1]}
        type={InputAtributes[1]}
        onChange={change}
      />
      {!type && (
        <Input
          name={InputAtributes[2]}
          placeholder={InputAtributes[2]}
          type={InputAtributes[2]}
          onChange={change}
        />
      )}
      <Button type="submit">{type ? "Log In" : "Create account"}</Button>
      {localstorage.username && (
        <ButtonLink
          onClick={() => slg()}
          path="/home"
          text={`Or log as ${localstorage.username}`}
        />
      )}
    </Form>
  );
};
export default LogingForm;
