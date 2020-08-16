import { useState, Dispatch, SetStateAction, useEffect } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export default function usePersistedState<T>(
  key: string,
  initalState: T,
): Response<T> {
  const [state, setState] = useState(() => {
    const PersistedValue = localStorage.getItem(key);

    if (PersistedValue) {
      return JSON.parse(PersistedValue);
    }

    return initalState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
