import Axios from 'axios';

export const apiGetFootballPlayers = (url) => () => 
  Axios(url)
  .then(r => {
    const { data } = r;

    return data;
  })
  .catch(err => console.log("err: ", err))
