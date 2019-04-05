import Axios from 'axios';

export const apiGetFootballPlayers = (url) => () => 
  Axios(url)
  .then(r => {
    const { data } = r;

    console.log(data)
  })
  .catch(err => console.log("err: ", err))
