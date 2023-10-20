import { useEffect, useState } from "react"


const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact';
// const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_URL = 'https://cataas.com/cat/says/hello?fontSize=50&fontColor=red'

export const App = () => {

    const [catFact, setCatFact] = useState()
    const [imgUrl, setImgUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_FACT)
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                setCatFact(fact)

                const threeFirstWords = catFact.split(' ').slice(0,3).join(' ')
                console.log(threeFirstWords);
                console.log(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`);


                //
                fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
                    .then(res => res.json())
                    .then(response => {
                        const {url} = response
                        setImgUrl(url)
                    })
                    console.log("url", url);
            })
    }, [])

    return (
        <main>

            <h1>Cats App</h1>
            {catFact && <p>{catFact}</p>}
            {imgUrl && <img src={`${CAT_PREFIX_URL}`} alt={`this image was generaed with this 3 words ${threeFirstWords}`}/>}
        </main>
    )
}