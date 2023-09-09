import styled from "styled-components";


export const TodoItem = styled.div`
    width: 300px;
    padding: 0px 15px;
    background-color: #211938;
    border-radius: 10px;
    border: 1px solid #311488;
    transition: 0.3s ease;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    font-size: 15px;

    input[type="checkbox"] {
        -webkit-appearance: none;
        appearance: none;
        margin-right: 15px;
        width: 14px;
        height: 14px;
        border: 0.15em solid white;
        border-radius: 0.15em;
    }

    input[type="checkbox"]:checked {
        border: 0.15em solid #00b800;
        background-color: #00b800;
        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:hover {
        background-color: #ffffff;
        
        div p {
            color: #3b3b3b;
        }

        input[type="checkbox"] {
            border: 0.15em solid #3b3b3b;
            padding: 2px;
        }

        input[type="checkbox"]:checked {
            border: 0.15em solid #00b800;
        }
    }
    
`

