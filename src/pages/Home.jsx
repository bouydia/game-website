import React, { useEffect } from 'react'
import GameDetail from '../components/GameDetail'
import Game from '../components/Game'
import { useDispatch , useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'
//Styling and Animation
import styled from 'styled-components'
import { motion,AnimatePresence,AnimateSharedLayout} from 'framer-motion'
import {useLocation} from 'react-router-dom'
import { fadeIn } from '../animation'
import SearchedGame from '../components/SearchedGame'
const Home = () => {
 const location=useLocation()
 const pathId=location.pathname.split('/')[2]
  
  //FETCH GAMES
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])
  //Get that data back
  const { popular, newGames, upcoming, searched } = useSelector(
    state => state.games
  )
  
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="serched">
            <Games>
              {searched.map(game => (
                <SearchedGame
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ''
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map(game => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map(game => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map(game => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  )
}
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem ;
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(45deg, #ff0055 0%, #000066 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap: 3rem;
`;
export default Home