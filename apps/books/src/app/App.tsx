import { useState, type FC } from 'react';

import s from './App.module.scss';
import { Counter } from './Counter';

export const App: FC = () => {
  const title = 'title App';

  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className={s.app}>
      <h1>{title}</h1>

      <Counter />
      <Counter />

      <div>
        <input value={inputValue} type="text" />
        <button onClick={() => setInputValue(`${inputValue}a`)}>Add</button>
      </div>
    </div>
  );
};
