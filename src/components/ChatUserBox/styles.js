import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgrey;
  padding: 1rem;
&:hover{
    background: lightgrey;
    cursor:pointer;
}
  .container-info {
    display: flex;
    justify-content: space-between;
  }

  .name {
    white-space: nowrap;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    padding-bottom: 0.5rem;
  }
  .date {
    color: grey;
    font-size: 14px;
  }

  span {
    white-space: nowrap;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }
`;
