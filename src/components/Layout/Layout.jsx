import { LayoutContainer } from './Layout.style';
import Message from '../Message/Message';
import React from 'react';
import { messageData } from '../../data/text';

export default function Layout() {
  const generateCoords = () => {
    const items = [1, 3];
    return {
      left: Math.floor(Math.random() * 67 + 5),
      top: Math.floor(Math.random() * (80 - 20) + 20),
      rotate: Math.floor(Math.random() * -70 + 35),
      index: items[Math.floor(Math.random() * items.length)],
    };
  };

  return (
    <LayoutContainer>
      <h1>
        This in an <span style={{ fontWeight: '900' }}>experiment.</span>
        <br /> &emsp; &emsp; &emsp; &emsp; &emsp;You can check the{' '}
        <span style={{ fontWeight: '900' }}>source code</span> on{' '}
        <span style={{ fontWeight: '900' }}>github</span> <br />
        &emsp; &emsp; &emsp;and play around.
      </h1>
      {messageData.map((text, index) => {
        const coord = generateCoords();
        return (
          <Message
            key={index}
            left={coord.left}
            top={coord.top}
            rotate={coord.rotate}
            index={coord.index}
            text={text.text}
            generate={generateCoords}
          />
        );
      })}
    </LayoutContainer>
  );
}
