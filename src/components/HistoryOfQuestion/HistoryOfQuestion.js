import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
margin: 15px 0;
display: flex;
justify-content: center;
`;

const handleColorType = ball => {
    switch (ball) {
        case true:
            return "background:#42f581;";
        case false:
            return "background: #f54e42;";
        default:
            return "background: #e6edea";
    }
};

const Question = styled.div`
    height:25px;
    width:25px;
    background-color:grey;
    ${({ balls }) => handleColorType(balls)};
    border-radius:50%;
    margin-right: 5px;
    transition: .3s ease-in;
`;

const HistoryOfQuestion = ({ questionBank, historyAnswers }) => {


    const HistoryBall = questionBank.map((question, index) => {
        const ball = historyAnswers[index];
        return (<Question key={index} balls={ball} />)
    })
    return (
        <Wrapper >
            {HistoryBall}
        </Wrapper >
    )
}

export default HistoryOfQuestion



