import { type FC, useCallback, useState } from 'react';

import { Button } from '@repo/ui/button';

import s from './Counter.module.scss';

export const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  return (
    <div className={s.counter}>
      <div>
        <div>count: {count}</div>
      </div>
      <Button onClick={handleIncrement}>Button</Button>
    </div>
  );
};
