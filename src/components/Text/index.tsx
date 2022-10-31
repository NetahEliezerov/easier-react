import React, { PropsWithChildren } from 'react';

interface TextProps {
  size: number;
  font: string;
}

const TextElement = (props: PropsWithChildren<TextProps>, secondProps: any) => {
  return (
    <p style={{ fontSize: props.size, fontFamily: props.font }}>
      {props.children}
    </p>
  )
}

export default TextElement;