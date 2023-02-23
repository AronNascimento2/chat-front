import React from "react";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <img src="/download.png" alt="sami" />
      <div className="list-container">
        <div>
          <ul>
            <li>Home</li>
            <li>Chat</li>
          </ul>
        </div>
        <div>
          <p>Sair</p>
        </div>
      </div>
    </S.Container>
  );
};
