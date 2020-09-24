import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoggedContext } from "contexts/LoggedContext";
const Wrapper = styled.div`
  height: 150px;
  width: calc(100% - 100px);
  padding: 10px;
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    height: 100px;
    width: calc(100vw - 40px);
  }
`;
const Item = styled(Link)`
  display: flex;
  height: 100%;
  width: 400px;
  margin-right: 10%;
  text-decoration: none;
  text-align: center;
`;
const Photo = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: block;
  @media (max-width: 500px) {
    height: 70px;
    width: 70px;
  }
`;
const Text = styled.h3`
  font-size: 3rem;
  line-height: 100%;
  padding: 15% 10%;
  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
`;
// type Data = {
//   groups: string[];
//   username: string;
//   password: string;
//   email: string;
// };
const CrewBar = () => {
  const { logData }: any = useContext(LoggedContext);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const a = async () => {
      await fetch("/crews/photos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ groups: logData.groups }),
      })
        .then((response) => response.json())
        .then((data) => setPhotos(data))
        .catch((err) => console.log(err));
    };
    a();
  }, [logData.groups]);
  return (
    <Wrapper>
      {logData &&
        logData.groups.map((item: string, index: number) => (
          <Item key={item} to={`/crews/${item}`}>
            <Photo src={photos[index]} />
            <Text>{item}</Text>
          </Item>
        ))}
    </Wrapper>
  );
};
export default CrewBar;
