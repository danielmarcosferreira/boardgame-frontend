import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate
import styled from 'styled-components';
import { RiHandHeartLine } from 'react-icons/ri';

export default function NewRentalButton() {
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    return (
        <Button onClick={() => navigate('/rentals/new')} title="Alugar Jogo">
            <RiHandHeartLine />
        </Button>
    );
}

const Button = styled.button`
    width: 64px;
    height: 64px;
    position: fixed;
    right: 24px;
    bottom: 24px;
    border-radius: 50%;
    background-color: rgb(53, 121, 220);
    color: #FFF;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .4);
    cursor: pointer;
    z-index: 10;

    &:hover {
        background-color: rgb(44, 97, 176);
    }
`;