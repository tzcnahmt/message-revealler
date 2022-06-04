import { MessageLayout } from './Message.style';
import React from 'react';
import gsap from 'gsap';

export default function Message({ text, rotate, left, top, index, generate }) {
  let messageRef = React.useRef(null);

  const handleMouseOver = () => {
    gsap.to(messageRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 0.5,
      display: 'none',
    });

    gsap.to(messageRef.current, {
      delay: 1.5,
      scale: 1,
      x: `${generate().left}%`,
      y: `${generate().top}%`,
      rotation: generate().rotate,
      zIndex: generate().index,
    });

    gsap.to(messageRef.current, {
      display: 'block',
      opacity: 1,
      delay: 2.5,
    });
  };

  return (
    <MessageLayout
      ref={messageRef}
      onMouseOver={handleMouseOver}
      left={left}
      top={top}
      rotate={rotate}
      index={index}
    >
      <p>{text}</p>
    </MessageLayout>
  );
}
