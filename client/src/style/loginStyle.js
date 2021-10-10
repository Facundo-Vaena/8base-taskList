import styled from 'styled-components';
import { Input } from 'antd';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10%;
    padding-top: 1%;
    background-color: #b5ead7;
`;
export const StyledInput = styled(Input)`
padding:2%;
/* width:50%; */
/* border-radius: 7%; */
margin:1%;
`;

export const StyledButton = styled.button`
background-color: #808080;
color: white;
padding:1%;
border-radius: 12%;
:hover {
    cursor: pointer;
}
`;

export const LogoutButton = styled.button`
background-color: #808080;
color: white;
padding:3%;
border-radius: 12%;
margin-left:130%;
:hover {
    cursor: pointer;
}
`;
