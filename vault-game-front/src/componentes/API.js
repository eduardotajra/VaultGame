import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.igdb.com/v4/games";
const CLIENT_ID = "YOUR_CLIENT_ID";
const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";

function GamesList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios({
          url: API_URL,
          method: "POST",
          headers: {
            "Client-ID": CLIENT_ID,
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          data: `fields name, cover.url; limit 10;`,
        });

        setGames(response.data);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      <h2>Jogos Populares</h2>
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <h3>{game.name}</h3>
            {game.cover && (
              <img
                src={`https:${game.cover.url}`}
                alt={game.name}
                className="game-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesList;
