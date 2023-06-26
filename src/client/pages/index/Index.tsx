import React, { useCallback } from 'react';

function Index() {
  const handleClick = useCallback(() => {
    alert('watch!!')
  }, []);
  return (
    <div>
      <h1>Page Index</h1>
      <button onClick={handleClick}>btn</button>
    </div>
  )
}

export default Index;
