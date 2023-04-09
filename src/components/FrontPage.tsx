import React from 'react'

const FrontPage = () => {
  return (
    <div>
        <div className='frontpage-top-div'>
        <h1 className='frontpage-headline'>Tournafy</h1>
        <p>Your go-to place for quality tournament running!</p>
        <div className='frontpage-menu'>
        <section >
          <h3>Tournaments</h3>
          <p>See all Tournaments</p>
          <button onClick={goToTournaments}>Go to Tournaments</button>
        </section>
        </div>
        <div className='frontpage-menu'>
        <section >
        <h3>Games</h3>
        <p> See all Games</p>
        <button onClick={goToTournaments}>Go to Games</button>
        </section>
        </div>
        <div className='frontpage-menu'>
        <section >
        <h3>Teams</h3>
        <p>See all Teams</p>
        <button onClick={goToTournaments}>Go to Teams</button>
        </section>
        </div>
      </div>
    </div>
  )

  function goToTournaments() {
}
}

export default FrontPage