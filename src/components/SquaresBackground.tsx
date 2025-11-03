import React from 'react';
import Squares from './Squares';

const SquaresBackground: React.FC = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    >
      <Squares 
        speed={0.5} 
        squareSize={40}
        direction='diagonal'
        borderColor='#e0d4ff'
        hoverFillColor='#8b5cf6'
      />
    </div>
  );
};

export default SquaresBackground;
