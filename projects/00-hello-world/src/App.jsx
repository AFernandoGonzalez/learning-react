import './App.css'
import XCard from './XCard'
import { useState } from 'react'

const App = () => {


    const formatUsername = (userName) => `@${userName}`

    return (
        <div className='App'>
            <XCard
                formatUsername={formatUsername}
                userName="fernando"
                name="fernando"
                isFollowing={true} />
            <XCard
                formatUsername={formatUsername}
                userName="fer"
                name="fer"
                isFollowing={false} />
            <XCard
                formatUsername={formatUsername}
                userName="midudev"
                name="midudev"
                isFollowing={true} />
        </div>
    )
}



export default App