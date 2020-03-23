import React from 'react'
import styled from 'styled-components';
import HistoryOfQuestion from '../../components/HistoryOfQuestion/HistoryOfQuestion';


const Timer = styled.div`
    position:absolute;
    padding:2.5rem;
    font-size:2.5rem;
    color:#fff;
    background-color: #5270C4;
    height:60px;
    width:60px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    @media screen and (max-width: 500px){
        font-size:2rem;
        padding:2rem;
        height:40px;
        width:40px;
        font-size:2rem;
  }
`;

const Wrapper = styled.section`
    position:relative;
    border:2px solid #5990C4;
    color:#004A7C;
    color:#fff;
  
`;


const handleWith = width => {
    let size = width * 10
    return `width:${size}%`
};

const ProgressBar = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
   height:10px;
   ${({ width }) => handleWith(width)};
   background-color: #42F581;
`;

const ButtonWrapper = styled.div`
    padding:20px 0;
    background-color:#f9f9f9;
    
`;

const DisplayWrapper = styled.div`
    background-color:#5990C4;
    padding:25px;
`
const QuestionContent = styled.h1`
    font-size:25px;
    width:100%;
    padding:20px 0;
    @media screen and (max-width: 500px){
        margin-top:3rem;
  }
`;
const QuestionCounter = styled.div`
    font-size:25px;
`;

const QuestionButton = styled.button`
  font-weight:bold;
  font-size: 16px;
  height: 50px;
  width:80%;
  background-color:#eee;
  color:cadetblue;
  margin: 5px 0;
  border: 1px solid #5990C4;
  border-radius:25px;
  color:#004A7C;
  cursor: pointer;
  position:relative;
  transition: .2s ease-in;
  background:transparent;

  &:hover {
      background-color: #5990C4;
      color:#fff;
  }

  &:before{
      content:'A';
      position:absolute;
      display:flex;
      justify-content:center;
      align-items:center;
      top:50%;
      left:10px;
      height:30px;
      width:30px;
      transform:translateY(-50%);
      background-color: #5990C4;
      border-radius:50%;
      color:#fff;
      font-size:13px;

  }

  &:nth-of-type(2)::before{
      content:'B';
  }
  &:nth-of-type(3)::before {
      content:'C';

  }
  &:nth-of-type(4)::before{
      content:'D';
  }
  &:hover::before {
      border:1px solid #fff;
  }
`;

const QuestionPanel = (props) => {
    const { questionTime, questionNumber, currentQuestionIndex, questionBank, fn: clickQuestionHandler } = props
    const question = questionBank[currentQuestionIndex];
    const numberQuestion = `${currentQuestionIndex + 1} / ${questionNumber}`;


    const answers = question.answers.map((answer, index) => {
        return (
            <QuestionButton key={index} value={answer} onClick={() => clickQuestionHandler(answer)}>
                {answer}
            </QuestionButton>

        )
    })


    return (
        <>
            <Wrapper>
                <DisplayWrapper>
                    <Timer>
                        {questionTime}
                    </Timer>
                    <QuestionContent>
                        {question.question}
                    </QuestionContent>
                    <QuestionCounter>
                        {numberQuestion}
                    </QuestionCounter>
                    <ProgressBar width={questionTime}>
                    </ProgressBar>
                    <HistoryOfQuestion {...props} />
                </DisplayWrapper>
                <ButtonWrapper>
                    {answers}
                </ButtonWrapper>
            </Wrapper>
        </>
    )
}

export default QuestionPanel;