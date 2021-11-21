import styled from'styled-components';
export const ButtomContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.5rem solid var(--LightBlue);
color:var( --LightBlue);
border-radius:0.5rem;
padding:0.2rem 0.5rem 0.2rem 0;
cursor pointer;
transition:all 0.5s ease-in-out;
&:hover{
    background:var( --LightBlue);
    color:var(--mainBlue);
}
`;
