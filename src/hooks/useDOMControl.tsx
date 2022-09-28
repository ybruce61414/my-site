import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const useDOMControl = (sketchFunc: any): JSX.Element => {
  const domRef = useRef<HTMLDivElement>(null!)
  // Later... No need to check if it is null

  useEffect(() => {
    // can be omitted (line 9)
    if (!domRef.current) throw Error("divRef is not assigned");
    new p5(sketchFunc, domRef.current);

  }, []);

  return (
    <div ref={domRef} />
  )
};


export default useDOMControl;

