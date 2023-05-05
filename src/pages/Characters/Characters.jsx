import React from 'react'
import './Characters.css'
import { useState, useEffect } from 'react'
import { bringCharacters } from '../../services/apiCall'
import CharacterCard from '../../common/CharacterCard/CharacterCard'
import spinner from '../../assets/spinner.gif'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    if (characters.length === 0) {
      setTimeout(() => {
        bringCharacters()
        .then((resultado) => {
          if (resultado.length > 0) {
            setCharacters(resultado);
          }
        })
        .catch((error) => console.log(error));
      }, 3000)
    }
  }, []);

  return (
    <div className='characters-container flex-c-c'>
      {characters.length > 0 ?
      <div className='card-container flex-c-start-col'>
      {characters.map((character) => {
          return <CharacterCard character={character} key={`character_${character.id}`}/>
        })} 
      </div>
        :
        <img src={spinner} className='spinner'/>
        } 
    </div>
  )
}

export default Characters
