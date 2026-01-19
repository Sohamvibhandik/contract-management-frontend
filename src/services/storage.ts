// src/services/storage.ts

export const saveData = (key: string, data: any): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadData = <T>(key: string): T[] => {
  const raw = localStorage.getItem(key);
  if (!raw) return [];
  return JSON.parse(raw) as T[];
};
