import React from 'react';

interface GradualBlurProps {
  target?: 'parent' | 'self';
  position?: 'top' | 'bottom' | 'left' | 'right';
  height?: string;
  width?: string;
  strength?: number;
  divCount?: number;
  curve?: 'linear' | 'bezier' | 'ease';
  exponential?: boolean;
  opacity?: number;
  className?: string;
}

const GradualBlur: React.FC<GradualBlurProps> = ({
  target = 'parent',
  position = 'bottom',
  height = '6rem',
  width = '100%',
  strength = 2,
  divCount = 5,
  curve = 'bezier',
  exponential = true,
  opacity = 1,
  className = ''
}) => {
  const generateBlurLayers = () => {
    const layers = [];
    
    for (let i = 0; i < divCount; i++) {
      const progress = i / (divCount - 1);
      
      let blurValue: number;
      if (exponential) {
        blurValue = Math.pow(progress, 2) * strength;
      } else {
        blurValue = progress * strength;
      }
      
      let opacityValue: number;
      switch (curve) {
        case 'bezier':
          opacityValue = 1 - Math.pow(progress, 0.5);
          break;
        case 'ease':
          opacityValue = 1 - (progress * progress * (3 - 2 * progress));
          break;
        default:
          opacityValue = 1 - progress;
      }
      
      opacityValue *= opacity;
      
      const layerStyle: React.CSSProperties = {
        position: 'absolute',
        backdropFilter: `blur(${blurValue}px)`,
        WebkitBackdropFilter: `blur(${blurValue}px)`,
        backgroundColor: `rgba(255, 255, 255, ${opacityValue * 0.1})`,
        pointerEvents: 'none',
        zIndex: 10 + i,
      };
      
      // Position-specific styles
      switch (position) {
        case 'bottom':
          layerStyle.bottom = 0;
          layerStyle.left = 0;
          layerStyle.right = 0;
          layerStyle.height = height;
          layerStyle.background = `linear-gradient(to top, rgba(255, 255, 255, ${opacityValue * 0.2}), transparent)`;
          break;
        case 'top':
          layerStyle.top = 0;
          layerStyle.left = 0;
          layerStyle.right = 0;
          layerStyle.height = height;
          layerStyle.background = `linear-gradient(to bottom, rgba(255, 255, 255, ${opacityValue * 0.2}), transparent)`;
          break;
        case 'left':
          layerStyle.left = 0;
          layerStyle.top = 0;
          layerStyle.bottom = 0;
          layerStyle.width = width;
          layerStyle.background = `linear-gradient(to right, rgba(255, 255, 255, ${opacityValue * 0.2}), transparent)`;
          break;
        case 'right':
          layerStyle.right = 0;
          layerStyle.top = 0;
          layerStyle.bottom = 0;
          layerStyle.width = width;
          layerStyle.background = `linear-gradient(to left, rgba(255, 255, 255, ${opacityValue * 0.2}), transparent)`;
          break;
      }
      
      layers.push(
        <div
          key={i}
          style={layerStyle}
          className={className}
        />
      );
    }
    
    return layers;
  };
  
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 10,
  };
  
  // Set container dimensions based on position
  switch (position) {
    case 'bottom':
      containerStyle.bottom = 0;
      containerStyle.left = 0;
      containerStyle.right = 0;
      containerStyle.height = height;
      break;
    case 'top':
      containerStyle.top = 0;
      containerStyle.left = 0;
      containerStyle.right = 0;
      containerStyle.height = height;
      break;
    case 'left':
      containerStyle.left = 0;
      containerStyle.top = 0;
      containerStyle.bottom = 0;
      containerStyle.width = width;
      break;
    case 'right':
      containerStyle.right = 0;
      containerStyle.top = 0;
      containerStyle.bottom = 0;
      containerStyle.width = width;
      break;
  }
  
  return (
    <div style={containerStyle}>
      {generateBlurLayers()}
    </div>
  );
};

export default GradualBlur;
