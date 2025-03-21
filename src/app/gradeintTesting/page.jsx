import React from 'react';

const MultipleGradientBorders = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'black',
    
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
  };
  
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    maxWidth: '800px',
    width: '100%',
    
  };
  
  // Define different gradient styles
  const gradientDivs = [
    {
        
      gradient: 'linear-gradient(330deg, rgba(198,254,149,1) 0%, rgba(94,123,254,1) 60%, rgba(198,254,149,1) 110%)',
      title: 'Rainbow ',
      bgColor: 'rgba(255, 255, 255, 0.1)'
    },{
        gradient: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
        title: 'Rainbow',
        bgColor: 'rgba(255, 255, 255, 0.1)'
      },{
        gradient: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
        title: 'Rainbow ',
        bgColor: 'rgba(255, 255, 255, 0.1)'
      },{
        gradient: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
        title: 'Rainbow ',
        bgColor: 'rgba(255, 255, 255, 0.1)'
      },
    
  ];
  
  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {gradientDivs.map((div, index) => (
          <div 
            key={index} 
            style={{
              position: 'relative',
              width: '130px',
              height: '34px',
              borderRadius: '100px'
            }}
          >
            {/* Gradient border pseudo-element */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '100px',
                border: '1px solid transparent',
                background: `${div.gradient} border-box`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none'
              }}
            />
            {/* Content container */}
            <div 
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                
                boxSizing: 'border-box',
                backgroundColor: div.bgColor,
                borderRadius: '100px',
                color: '#333',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <p className='text-[12px]' style={{ margin: '0 0 3px 0' }}>{div.title}</p>
              <p style={{ margin: 0 }}></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleGradientBorders;