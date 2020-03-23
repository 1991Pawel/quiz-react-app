import React from 'react'
import styled from 'styled-components';
import HistoryOfQuestion from '../../components/HistoryOfQuestion/HistoryOfQuestion';

const ResetQuiz = styled.button`
font-size:25px;
color:#fff;
padding: 5px 15px;
background-color:#004A7C;
border:none;
cursor:pointer;
    &:hover {
    opacity: .5
    }
`;

const ScoreContent = styled.h1`
font-size:25px;
color:#fff;
padding: 25px;

`;

const ScoreBoard = ({ props, fn }) => {

    return (
        <>
            <ScoreContent>
                Your Score : {props.score}
                <HistoryOfQuestion {...props} />
                <ResetQuiz onClick={fn}>Reset</ResetQuiz>
            </ScoreContent>
        </>
    )
}

export default ScoreBoard;
