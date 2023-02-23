import React from "react";
import * as S from "./styles";

export const Avatar = ({name, cargo}) => {
  return (
    <S.Container>
            <div className="avatar">AR</div>
            <p>{name}</p>
            <span>{cargo}</span>
    </S.Container>
  );
};
