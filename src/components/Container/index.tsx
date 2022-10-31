import React, { PropsWithChildren } from 'react';
import './index.css';

interface TextProps {
  isCentered: boolean;
}

const Container = (props: PropsWithChildren<TextProps>) => {
  return (
    <div className={`${props.isCentered ? "centered" : ""}`}>
      { props.children }
    </div>
  )
}

export default Container;