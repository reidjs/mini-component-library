/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper>
      <Value>{value}</Value>
      <OuterBar>
        <InnerBar percentage={value} />
      </OuterBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 400px;
  display: flex;
  align-items: center;
`

const Value = styled.strong`
  margin-right: 20px;
  &:after {
    content: '%'
  }
`

const OuterBar = styled.div`
  width: 100%;
  position: relative;
  display: inline;
  border: 1px solid black;
  height: 24px;
  border-radius: 8px;
`

const InnerBar = styled.div`
  width: ${props => props.percentage}%;
  background: blue;
  position: absolute;
  height: 85%;
  box-sizing: border-box;
  top: 0;
  left: 4px;
  bottom: 0;
  margin: auto;
  border-radius: 8px 0 0 8px;
`

export default ProgressBar;
