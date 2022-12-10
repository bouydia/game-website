import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { smallImage } from '../util'
import nitnendo from '../img/nintendo.svg'
import xbox from '../img/xbox.svg'
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import gamepade from '../img/gamepad.svg'
import apple from '../img/apple.svg'
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

const GameDetail = ({pathId}) => {
  let navigate=useNavigate()
  const exitDetailHandler = (e) => {
    let element = e.target
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto'
      navigate('/')
    }
  }
  const getStar = () => {
    let stars = []
    const rating = Math.floor(game.rating)
    for (let i = 1; i < 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" src={starFull} />)
      }
      else {
        stars.push(<img alt="star" src={starEmpty} />)
      }
      
    }
    
    return stars
  }
  const getPlatform = (platformName) => {
    switch (platformName) {
      case 'PlayStation 4':
        return playstation
      case 'Xbox One':
        return xbox
      case 'PC':
        return steam
      case 'Nintendo Switch':
        return nitnendo
      case 'IOS':
        return apple
      default:
        return gamepade
    }
  }
  const { screen, game ,isLoading} = useSelector(state => state.detail)
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating : {game.rating}</p>
                {getStar()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map(data => (
                    <img
                      src={getPlatform(data.platform.name)}
                      key={data.platform.id}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt="background_image"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map(screen => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    max-width: 100%;
  }
  @media screen and (max-width: 700px) {
    padding: 1rem 2rem;
  }
`
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`
const Info = styled(motion.div)`
  text-align: center;
`
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`
export default GameDetail