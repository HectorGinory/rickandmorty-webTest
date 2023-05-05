import React from 'react'
import './CharacterCard.css'

const CharacterCard = ({character}) => {
    const {name, status, species, image} = character
  return (
    <div className='characterCard flex-c-sb'>
        <img src={image} />
        <div className='info-character opacity-d1'>
            <p>{name}</p>
            <p><span>Status  - </span>{status}</p>
            <p><span>Species  - </span>{species}</p>      
        </div>
    </div>
  )
}

export default CharacterCard
