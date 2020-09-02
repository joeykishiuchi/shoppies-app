import {useState} from 'react';

function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  const transition = (newMode) => {
    setMode()
  };


  return {mode, transition}
};

export default useVisualMode;