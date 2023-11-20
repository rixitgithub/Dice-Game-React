import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play Dice Game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on the Dice</p>
        <p>
          If selected number is equal to dice you will be awarded same points as
          dice{" "}
        </p>
        <p>If you guess wrong then 1 point will be deducted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  margin-top: 40px;
  border-radius: 10px;
  background-color: #fbf1f1;
  padding: 20px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
