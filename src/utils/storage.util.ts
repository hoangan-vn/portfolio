export const loadState = <T>(key: string): T | undefined => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as T;
  } catch (err) {
    console.warn('Could not load state', err);
    return undefined;
  }
};

export const saveState = <T>(key: string, state: T): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.warn('Could not save state', err);
  }
};

export const removeState = (key: string): boolean => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return true;
    }
    localStorage.removeItem(key);
    return true;
  } catch (err) {
    console.warn('Could not remove state', err);
    return false;
  }
};
