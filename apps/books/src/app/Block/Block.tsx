import { type FC, useEffect, useState } from 'react';

const LOADING_DELAY = 1000;

export const Block: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, LOADING_DELAY);
  }, []);

  return isLoading ? <div>Loading...</div> : <div>Block</div>;
};
