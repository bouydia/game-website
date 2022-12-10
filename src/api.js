const base_url = 'https://api.rawg.io/api/'
const apiKey="5a831d3bf06d4bf3847dea63530af023"
// getting the Date

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `0${month}`
  } else {
    return month;
  }
}

const getCurrentDay = () => {
  const day = new Date().getDate()
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}

const currentYear = new Date().getFullYear()
const currentDay = getCurrentDay()
const currentMonth = getCurrentMonth()

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`
export const popularGamesUrl = () => `${base_url}${popular_games}`
export const newGamesUrl = () => `${base_url}${new_games}`

//Get game detail
export const gameDetailUrl = game_id => `${base_url}games/${game_id}?key=${apiKey}`
export const gameScreenUrl = game_id => `${base_url}games/${game_id}/screenshots?key=${apiKey}`
export const SearchGameUrl = game_name =>`${base_url}games?search=${game_name}&key=${apiKey}&page_size=9`

