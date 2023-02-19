const localStorageHandler = (key: string) => ({
  setItem: (value: any) => localStorage.setItem(key, JSON.stringify(value)),
  getItem: () =>
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) as any)
      : null,
  removeItem: () => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
});

export const localStorageTokenPair = localStorageHandler(
  "localStorageTokenPair"
);
