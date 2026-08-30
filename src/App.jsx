import { useState } from "react";

import FindGame from "./pages/FindGame";
import Facilities from "./pages/Facilities";
import Players from "./pages/Players";
import Teams from "./pages/Teams";
import Booking from "./pages/Booking";

function App() {
  const [page, setPage] = useState("find");

  if (page === "facilities") {
    return (
      <Facilities
        onSelectFacility={() => setPage("players")}
      />
    );
  }

  if (page === "players") {
    return (
      <Players
        onBuildTeam={() => setPage("teams")}
      />
    );
  }

  if (page === "teams") {
    return (
      <Teams
        onContinueBooking={() => setPage("booking")}
      />
    );
  }

  if (page === "booking") {
    return (
      <Booking
        onGameReady={() => setPage("ready")}
      />
    );
  }

  if (page === "ready") {
    return (
      <div className="game-ready-page">

        <div className="success-icon">
          ✓
        </div>

        <span className="page-label">
          SPORTSSYNC • GAME CONFIRMED
        </span>

        <h1>Game Ready!</h1>

        <p>
          Your game is confirmed. Your facility and teams are
          ready to play.
        </p>

        <div className="ready-card">

          <div>
            <span>FACILITY</span>
            <strong>Innovexa Sports Arena</strong>
          </div>

          <div>
            <span>DATE & TIME</span>
            <strong>Tomorrow • 6:00 PM</strong>
          </div>

          <div>
            <span>MATCH</span>
            <strong>Blue Strikers vs Red Falcons</strong>
          </div>

        </div>

        <button
          className="back-home-button"
          onClick={() => setPage("find")}
        >
          Find Another Game
        </button>

      </div>
    );
  }

  return (
    <FindGame
      onFindGame={() => setPage("facilities")}
    />
  );
}

export default App;