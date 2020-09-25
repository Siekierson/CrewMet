import React from "react";
import styled from "styled-components";

const ScreenChooser = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 25px;
  width: 60px;
  background-color: #666;
  border: 2px solid white;
  border-radius: 30px;
`;
const Dot = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: white;
  border-radius: 50%;
  transition: 0.3s;
  transform: translate(${({ screen }: any) => (screen ? "20%" : "250%")}, -50%);
`;
interface Props {
  circle: boolean;
  setCircle: () => void;
}
const Switch = ({ setCircle, circle }: Props) => {
  return (
    <ScreenChooser onClick={setCircle}>
      <Dot screen={circle} />
    </ScreenChooser>
  );
};

export default Switch;
