interface dataObject {
  id: string,
  playerName: string,
  score: number,
}

export const getLocalStorageData = (key: string):void => {
  const localData = localStorage.getItem(key);
  console.log(localData);
};

export const setLocalStorageData = (key:string, data: dataObject[]):void => {
  localStorage.setItem(key, JSON.stringify(data));
};