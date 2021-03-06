import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Form = styled.form`
  position: absolute;
  bottom: 17%;
  height: 70%;
  width: 90%;
  left: 5%;
`;
const Input = styled.input`
  position: absolute;
  font-size: 2.5rem;
  bottom: 0;
  transition: 0.4s;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 10px;
  border-bottom: 2px solid white;
  :focus {
    border-bottom-color: orange;
  }
`;
const H1 = styled.h1`
  font-size: 4rem;
  margin: 2%;
`;
const Conv = styled.div`
  width: 100%;
  height: 80%;
  overflow-x: hidden;
  overflow-y: auto;
`;
const InWrap = styled.div`
  position: absolute;
  width: 100%;
  bottom: 8%;
`;
const Item = styled.div`
  background-color: ${({ own }: any) =>
    own ? "rgba(255,165,0,.8)" : "rgba(50,50,50,.8)"};
  margin: 5px;
  padding: 12px;
  border-radius: 30px;
  width: 40%;
  font-size: 2rem;
  margin-left: ${({ own }: any) => (own ? "60%" : "5px")};
`;
interface Props {
  user: string;
  groupId: string;
  name: string;
}
const Conversation = ({ user, groupId, name }: Props) => {
  const [input, setInput] = useState("");
  const [mess, setMess] = useState([]);
  const submit = (e: any) => {
    e.preventDefault();
    e.target.reset();
    fetch(`/messages/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: input,
        owner: user,
        date: new Date().toLocaleString(),
        group: groupId,
      }),
    });
  };
  useEffect(() => {
    setInterval(async () => {
      await fetch(`/messages/get/${groupId}`)
        .then((res) => res.json())
        .then((data) => setMess(data));
    }, 2000);
  }, [groupId]);
  return (
    <>
      <H1>Conversation</H1>
      <Form onSubmit={submit}>
        <Conv>
          {mess.length ? (
            mess.map((item: any) => (
              <Item own={item.owner === user} key={`${Math.random()}`}>
                {item.owner} : {item.message}
              </Item>
            ))
          ) : (
            <h1>Refreshing</h1>
          )}
        </Conv>
        <InWrap>
          <Input
            conv
            type="text"
            onChange={(e: any) => setInput(e.target.value)}
            placeholder="text to crew"
          />
        </InWrap>
      </Form>
    </>
  );
};
export default Conversation;
