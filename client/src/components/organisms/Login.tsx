import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import ButtonLink from "components/molecues/ButtonLink";
import Input from "components/atoms/Input";
import Form from "components/atoms/Form";
import { Redirect } from "react-router-dom";
import { LoggedContext } from "contexts/LoggedContext";
import Valid from "components/atoms/Valid";
import { logVariant } from "framerVariants/login";
const Head = styled.h1`
  font-size: 4.8rem;
`;
interface Inputs {
  username: string;
  password: string;
}
// setLogData, setWait
const Login = () => {
  const { setLogData, setWait }: any = useContext(LoggedContext);
  const [inputs, setInputs] = useState<Inputs>({ username: "", password: "" });
  const [rdr, setRdr] = useState<null | boolean>(null);
  const [ls, setLs] = useState({ username: null }); //null
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
    setWait(true);
    await fetch(`/users/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    })
      .then((response) => response.json())
      .then((data) => (data ? isLogged(data) : setRdr(false)))
      .catch((err) => setRdr(false));
  };

  const slg = (): void => setLogData(ls);
  const pswd = "password";
  useEffect(() => {
    const newls = JSON.parse(localStorage.getItem("logData") || "{}");
    setLs(newls);
  }, []);
  return (
    <Form
      variants={logVariant}
      initial="hidden"
      animate="visible"
      onSubmit={submit}
    >
      {rdr && <Redirect to="/home" />}
      <Head>Log In</Head>
      {rdr === false && <Valid>Invalid fields or user is not exist</Valid>}
      <Input name="username" placeholder="username" onChange={change} />
      <Input
        name={pswd}
        placeholder={pswd}
        type={pswd}
        // holder={pswd}
        onChange={change}
      />
      <Button type="submit">Log In</Button>
      {ls && (
        <ButtonLink
          onClick={() => slg()}
          path="/home"
          text={`Or log as ${ls.username}`}
        />
      )}
    </Form>
  );
};
export default Login;
