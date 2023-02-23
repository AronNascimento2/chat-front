import styled from "styled-components";


export const Container = styled.div`
width:400px;
height:800px;
margin: 1rem;
border-radius: 1rem;
border: 1px solid lightgrey;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
ul{     padding-top:1rem;
        font-weight:600;
        color: grey;
        list-style: none;
        li{
            padding-bottom:0.5rem;
        }
    }
.container-avatar{
    display: flex;
    justify-content:center;
    height: 300px;
    border-bottom: 1px solid lightgrey;
}
`