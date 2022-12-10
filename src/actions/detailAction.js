import axios from 'axios';
import { gameDetailUrl,gameScreenUrl } from '../api';

export const loadDetail = (id) => async dispatch => {
  dispatch({
    type: "LOAD_DETAIL"
  })
  const detailData = await axios.get(gameDetailUrl(id))
  const screenShotData = await axios.get(gameScreenUrl(id))

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenShotData.data
    },
  })
}
 