import './Card.css'

const Card = () => {
    return (
            <div className='container-card'>
                <article>
                    <img src='/images/kenner-ben10.png' alt='ben10 kenner'></img>
                    <div id="text-box">
                        <h2>Card title</h2>
                        <h2>R$109.55</h2>
                    </div>
                        <h4>See more</h4>
                </article>
            </div>
    )
}

export default Card