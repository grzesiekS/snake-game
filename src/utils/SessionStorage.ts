interface playerData {
  id: string,
  name: string
}

export const getSessionStorageData = (key: string) :string | null => {
  return sessionStorage.getItem(key);
};

export const removeSessionStorageData = (key: string):void => {
  sessionStorage.removeItem(key);
};

export const setSessionStoragePlayerData = (key: string, playerData:playerData):void => {
  sessionStorage.setItem(key, JSON.stringify(playerData));
};