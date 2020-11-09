import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "components/atoms/Input";
import ButtonLink from "components/molecues/ButtonLink";

const Popup = styled.div``;
const Item = styled(ButtonLink)`
  display: flex;
  height: 50px;
  width: 80px;
  text-align: center;
  font-size: 4rem;
`;
const Photo = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: block;
`;
type Crews = {
  crewname: string;
  photo: string;
};
type Data = Crews[];
const SearchGroup = () => {
  const [letters, setLetters] = useState<string>("");
  const [data, setData] = useState<Data>([]);
  useEffect(() => {
    if (letters.length > 4) {
      fetch(`/crews/list/${letters}`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log(err));
    }
  }, [letters]);
  return (
    <>
      <Input
        placeholder="search crew"
        onChange={(e) => setLetters(e.target.value)}
      />
      <Popup>
        {data.length &&
          data.map((item, index) => (
            <Item path={`/crews/${item.crewname}`} key={item.crewname}>
              <Photo src={item.photo} />
              <h3>{item.crewname}</h3>
            </Item>
          ))}
      </Popup>
    </>
  );
};
export default SearchGroup;
