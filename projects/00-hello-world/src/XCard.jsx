import React from 'react'
import './xcard.css'
import { useState } from 'react'

const XCard = ({ formatUsername, userName, name}) => {

    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? "Follow" : "Unfollow"
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following' :
        'tw-followCard-button';

    


    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

  return (
      <article className='tw-followCard'>
          <header className='tw-followCard-header'>
              <img
                  className='tw-followCard-avatar'
                  alt='El avatar de midudev'
                  src={`https://unavatar.io/${userName}`}
              />
              <div className='tw-followCard-info'>
                  <strong>{name}</strong>
                  <span className='tw-followCard-infoUserName'>{formatUsername(userName)}</span>
              </div>
          </header>

          <aside>
              <button className={buttonClassName} onClick={handleClick}>
                  <span className='tw-followCard-text'>{text}</span>
                  <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
              </button>
          </aside>
      </article>
  )
}

export default XCard