
import { Square } from './Square'

export const WinnerModal = ({winner, resetGame}) => {

    const winnerText = winner === false ? 'Draw': 'Win'
    
    if(winner === null) return null

    return (
        <div>

            <section className="winner">
                <div className="text">
                    <h2>
                        {winnerText}
                    </h2>

                    <header className="win">
                        {winner && <Square>{winner}</Square>}
                    </header>

                    <footer>
                        <button onClick={resetGame}>Empezar de nuevo</button>
                    </footer>
                </div>
            </section>

        </div>
    )
}
