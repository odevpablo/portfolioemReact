import React, { useEffect, useState } from 'react';

function Text() {
  const text = "Olá, seja bem vindo ao lugar onde exploro o meu potencial!";
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 50); 

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, text]);

  return (
    <div className='text'>
      <p>{displayText}</p>
    </div>
  );
}

export default Text;