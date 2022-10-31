import React, { PropsWithChildren } from 'react'

interface ButtonProps {
  onButtonClick: () => void;
  styled: boolean;
  color: string;
  bgColor: string;
  width: number;
  height: number;
  animateOnHover: boolean;
}

const Button = (props: Partial<PropsWithChildren<ButtonProps>>) => {

  const onBtnClick = () => {
    props.onButtonClick?.()
  }

  return (
    <button onClick={onBtnClick} className={`${props.styled ? 'styledBtn' : ''} ${props.animateOnHover ? 'animationOnBtnHover' : ''}`} style={{
      color: props.color,
      backgroundColor: props.bgColor,
      width: `${props.width} !important`,
      height: `${props.height} !important`
    }}>
      {props.children}
    </button>
  )
}

export default Button;