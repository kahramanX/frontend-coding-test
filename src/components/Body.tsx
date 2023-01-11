import React from "react";
import {
  BodyContainer,
  Count,
  Button,
} from "../assets/styles/componentsStyles";

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Body: React.FC<Props> = ({ count, setCount }) => {
  const _descreaseCount = () => {
    setInterval(() => {
      setCount(value => --value);
    }, 1000);
  };

  return (
    <BodyContainer>
      <Count>{count}</Count>
      <Button
        onClick={() => {
          _descreaseCount();
        }}
      >
        Decrease
      </Button>
    </BodyContainer>
  );
};

export default Body;
