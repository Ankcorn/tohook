import React, { useState } from 'react';
import styled from 'styled-components';
import pose from 'react-pose';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  background: #F0F4F8;
  border-radius: 8px;
  width: 305px;
  height: 37px;

`;

const Input = styled.input`
  background: #F0F4F8;
  border-radius: 8px;
  width: 281px;
  height: 37px;
  border: none;
  font-size: 16px;
  padding: 12px;
  color: #102A43;
  &:focus {
    outline: none;
    outline-offset: 0;
    height:auto
  } 
`

const HR = styled.hr `
  padding: 1px;
  border: none;
  width: 90%;
  margin-top: 0px;
  background-color: #199473;
`;

const AnimatedHR = pose(HR)({
  init: {
    scaleX: 0,
    scaleY: 1
  },
  focus: {
    scaleX: 1,
    scaleY: 1.01, 
    delay: 80
  }
})
const AnimateContainer = pose(Style)({
  init: {
    height: '37px'
  },
  focus: {
    height: `${37*3}px`
  }
});


export function Text() {
  const [focus, setFocus] = useState(false)
  console.log('Focus:', focus)
  return (<AnimateContainer pose={focus ? 'focus': 'init'}>
      <Input type="text" focus={focus} onFocus={() => {setFocus(!focus)}} onBlur={(e) => {
        console.log(e)
        setFocus(!focus);
      }}/>
      <AnimatedHR />
    </AnimateContainer>)
};