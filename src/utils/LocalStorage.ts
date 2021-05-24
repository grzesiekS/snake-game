interface scoreObject {
  id: string,
  playerName: string,
  score: number,
}

export const getLocalStorageData = (key: string):string | null => {
  return localStorage.getItem(key);
};

export const setLocalStorageScoreData = (key:string, data: scoreObject[]):void => {
  localStorage.setItem(key, JSON.stringify(data));
};