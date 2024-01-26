import { useEffect } from 'react';

export const useTitle = (title) => {
    useEffect(()=>{
        document.title = `GMovie ${title}`
    })
  return null;
}
