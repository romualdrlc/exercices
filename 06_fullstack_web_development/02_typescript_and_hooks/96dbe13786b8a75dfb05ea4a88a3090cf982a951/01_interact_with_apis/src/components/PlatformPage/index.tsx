import React from "react";

import { Game, Platform } from "../../types/Platform";

const PlatformPage: React.FC = (): JSX.Element => {
  const [platforms, setPlatforms] = React.useState<Platform[]>([]);
  const [selectedPlatform, setSelectedPlatform] = React.useState<Platform>();
  const [slugGame, setSlugGame] = React.useState<string>();
  React.useEffect(() => {
    fetch("https://videogames-sparta.herokuapp.com/platforms", {
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((change) => {
        setPlatforms(change);
      });
  }, []);

  React.useEffect(() => {
    fetch(`https://videogames-sparta.herokuapp.com/games/${slugGame}`, {
      headers: { Accept: "application/json" },
    }).then((response) => response.json());
    // .then((slug) => {
    //   setSlugGame(slug);
    // });
  }, []);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">
          <select
            onChange={(event): void => {
              const namePlatform = platforms.find((platform) => platform.slug === event.target.value);
              if (namePlatform) {
                setSelectedPlatform(namePlatform);
              }
            }}
          >
            {platforms.map((platform) => (
              <option key={platform.name} value={platform.slug}>
                {platform.slug}
              </option>
            ))}
          </select>
        </div>
        <ul className="list-group">
          {selectedPlatform
            ? selectedPlatform.games.map((listGame) => (
                <li key={listGame.name}>
                  <button onClick={() => setSlugGame(listGame.slug)}>{listGame.name}</button>
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
};

export default PlatformPage;
