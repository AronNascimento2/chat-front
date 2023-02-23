import React from "react";
import * as S from "./styles";
import { Avatar } from "../Avatar";

export const SideBar = () => {
    return (
        <S.Container>
          <div className="container-avatar">
          <Avatar name="Aron Nascimento" cargo='Desenvolvedor Front-End'/>
          </div>
          <div>
            <ul>
                <li>Perfil</li>
                <li>Arquivos</li>
                <li>Agenda</li>
                <li>Configurações</li>
            </ul>
          </div>
        </S.Container>
    );
};