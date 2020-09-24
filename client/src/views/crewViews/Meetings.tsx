import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import Form from "components/atoms/Form";
const All = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 60%;
`;
const Head = styled.h1`
  font-size: 4rem;
`;
const Label = styled.label`
  font-size: 4rem;
  display: flex;
`;
const Create = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 700px;
  z-index: 9;
  top: 0;
  border-left: 2px solid orange;
  transition: 0.5s;
  right: 0;
  transform: translateX(${(is: boolean) => (is ? "0px" : "700px")});
  position: fixed;
`;
const Item = styled.div`
  position: relative;
  width: 80%;
  margin: 10px;
  padding: 10px;
  font-size: 2rem;
  border: 2px solid white;
  background-color: #000;
`;
interface Props {
  groupId: string;
  user: string;
}
const Meetings = ({ groupId, user }: Props) => {
  const [create, setCreate] = useState(false);
  const [inputs, setInputs] = useState({ groupId });
  const [meets, setMeets] = useState([]);
  const change = (e: any) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  const submit = async (e: any) => {
    setCreate(false);
    e.preventDefault();
    e.target.reset();
    await fetch(`/meetings/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    });
    await fetch(`/meetings/get/${groupId}`)
      .then((res) => res.json())
      .then((data) => setMeets(data));
  };
  // next update maybe
  // const confirm = (i)=>{
  //          fetch(`/meetings/confirm`,{
  //             method:"PUT",
  //             headers: { "Content-Type": "application/json" },
  //             body: JSON.stringify({id:meets[i]._id,user})
  //         })
  // }
  const crt = (): void => setCreate(!create);
  useEffect(() => {
    const a = async () =>
      await fetch(`/meetings/get/${groupId}`)
        .then((res) => res.json())
        .then((data) => setMeets(data));
    a();
  }, [groupId]);
  return (
    <>
      <Head>Upcoming meetings</Head>
      <Button onClick={() => crt()}>Create Meeting</Button>
      <Create is={create}>
        <Form scnd onSubmit={submit}>
          <Head>Creating</Head>
          <Input
            placeholder="name of meet"
            onChange={change}
            name="meetname"
            required
          />
          <Input
            placeholder="description"
            onChange={change}
            name="description"
            required
          />
          <Input
            placeholder="where ?"
            onChange={change}
            name="location"
            required
          />
          <Label>
            When ? <Input type="date" onChange={change} name="date" required />
          </Label>
          <Label>
            At ? <Input type="time" onChange={change} name="time" required />
          </Label>
          <Button>Create Meet</Button>
        </Form>
      </Create>
      <All>
        {meets.length ? (
          meets.map((item: any, index: any) => (
            <Item key={`${Math.random()}`}>
              Title of meet: {item.meetname},<br />
              Description: {item.description},<br />
              When? : {item.date},<br />
              Where? : {item.location},<br />
              Confirmed persons: {item.takes.length}
              <br />
              {/* <Button onClick={()=>confirm(index)}>I take part</Button> */}
            </Item>
          ))
        ) : (
          <Head>No meetings yet</Head>
        )}
      </All>
    </>
  );
};
export default Meetings;
