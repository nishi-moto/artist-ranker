import React from 'react';
import ArtistInput from '../ArtistInput/ArtistInput';
import ArtistsList from '../ArtistsList/ArtistList';

function Home() {
  return (
    <div>
      <header className="Header">
        <h1> Artist Ranker </h1>
      </header>
      <section>
        <ArtistInput />
        <h3>Ranking List</h3>
        <ArtistsList />
      </section>
    </div>
  );
}
export default Home;
