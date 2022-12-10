import axios from 'axios'
import { popularGamesUrl,upcomingGamesUrl,newGamesUrl, SearchGameUrl } from '../api'

/* Action Creator */

export const loadGames = () => async (dispatch) => {
  //Fetch Axios
  const popularData = await axios.get(popularGamesUrl())
  const upcomingData = await axios.get(upcomingGamesUrl())
  const newGameData = await axios.get(newGamesUrl())
  dispatch({
    type: 'FTECH_GAMES',
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGameData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(SearchGameUrl(game_name))

  dispatch({
    type: 'FETCH_SEARCHED',
    payload: {
      searched: searchGames.data.results,
    },
  })
}