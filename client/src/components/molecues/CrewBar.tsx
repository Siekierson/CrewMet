import React, { useContext, useEffect, useState } from "react";
import { LoggedContext } from "contexts/LoggedContext";
import {
  Wrapper,
  Item,
  Photo,
  Text,
} from "components/styledComponents/CrewBar";
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
      {logData.groups
        ? logData.groups.map((item: string, index: number) => (
            <Item key={item} to={`/crews/${item}`}>
              <Photo src={photos[index]} />
              <Text>{item}</Text>
            </Item>
          ))
        : "You aren't in any group"}
    </Wrapper>
  );
};
export default CrewBar;
