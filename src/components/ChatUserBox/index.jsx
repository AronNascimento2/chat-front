import React from "react";
import * as S from "./styles";

export const ChatUserBox = () => {
  const users = [
    {
      name: "Augusto",
      data: " 13 de Fev",
      message: "Bom dia !!!",
    },
    {
      name: "Augusto",
      data: " 13 de Fev",
      message: "Bom dia !!!",
    },
    {
      name: "Augusto",
      data: " 13 de Fev",
      message: "Bom dia !!!",
    },
    {
      name: "Augusto",
      data: " 13 de Fev",
      message: "Bom dia !!!",
    },
    {
        name: "Augusto",
        data: " 13 de Fev",
        message: "Bom dia !!!",
      },
      {
        name: "Augusto",
        data: " 13 de Fev",
        message: "Bom dia !!!",
      },
      {
        name: "Augusto",
        data: " 13 de Fev",
        message: "Bom dia !!!",
      },
      {
        name: "Augusto",
        data: " 13 de Fev",
        message: "Bom dia !!!",
      },
      {
        name: "Augusto",
        data: " 13 de Fev",
        message: "Bom dia !!!",
      },
      {
        name: "Augusto",
        data: " 13 de Fev",
        message: "Bom dia !!!",
      },
      {
        name: "Augusto",
        data: " 13 de Fev",
        message: "Bom dia !!!",
      },
      {
        name: "Augusto",
        data: " 13 de Fev",
        message: "Bom dia !!!",
      },
  ];
  return (
    <>
      {users.map((user, index) => {
        return (
          <S.Container key={index}>
            <div className="container-info">
              <div className="name">{user.name}</div>
              <div className="date">{user.data}</div>
            </div>
            <span>{user.message}</span>
          </S.Container>
        );
      })}
    </>
  );
};
