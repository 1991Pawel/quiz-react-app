import React from 'react'
import styled from 'styled-components';

const Timer = styled.div`
    font-size:2rem;
    color:#fff;
`;


const Wrapper = styled.section`
    border:2px solid #5990C4;
    color:#004A7C;
    color:#fff;
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

const QuestionPanel = ({ questionTime, questionNumber, currentQuestionIndex, questionBank, fn: clickQuestionHandler }) => {

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
                    <QuestionContent>
                        {question.question}
                    </QuestionContent>
                    <QuestionCounter>
                        {numberQuestion}
                    </QuestionCounter>
                    <Timer>
                        {questionTime}
                    </Timer>
                </DisplayWrapper>
                <ButtonWrapper>
                    {answers}
                </ButtonWrapper>
            </Wrapper>
        </>
    )
}

export default QuestionPanel;