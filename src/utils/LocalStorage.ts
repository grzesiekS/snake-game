interface scoreObject {
  id: string,
  playerName: string,
  score: number,
}

export const getLocalStorageData = (key: string):void => {
  const localData = localStorage.getItem(key);
  console.log(localData);
};

export const setLocalStorageScoreData = (key:string, data: scoreObject[]):void => {
  localStorage.setItem(key, JSON.stringify(data));
};