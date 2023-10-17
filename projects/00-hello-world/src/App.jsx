import { useState } from 'react'
import './App.css'
import XCard from './XCard'

const App = () => {

    // const formatUsername = (userName) => `@${userName}`

    const users = [
        {
            userName: "fernando",
            name: "fernando",
            isFollowing: true
        },
        {
            userName: "midudev",
            name: "midudev",
            isFollowing: false
        }
    ]

    return (
        <div className='App'>
            {users?.map((user)=> {
                const { userName, name, isFollowing} = user;
                return(
                    <XCard
                    key={userName+name}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </XCard>
                )
            })}
        </div>
    )
}



export default App