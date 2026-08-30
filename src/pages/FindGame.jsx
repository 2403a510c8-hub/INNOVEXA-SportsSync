import {
  MapPin,
  Clock,
  Trophy,
  ArrowRight,
} from "lucide-react";

function FindGame({ onFindGame }) {
  return (
    <div className="find-game-page">

      <div className="find-game-container">

        <div className="find-game-header">

          <span className="page-label">
            INNOVEXA SPORTSYNC 2.0
          </span>

          <h1>Find your game.</h1>

          <p>
            Tell us what you want to play. SportsSync will find
            the right facility and players for you.
          </p>

        </div>


        <div className="find-game-card">

          <div className="find-game-grid">

            {/* SPORT */}

            <div className="find-game-field">

              <label>SPORT</label>

              <select>
                <option>Cricket</option>
                <option>Football</option>
                <option>Badminton</option>
                <option>Basketball</option>
                <option>Volleyball</option>
              </select>

            </div>


            {/* LOCATION */}

            <div className="find-game-field">

              <label>LOCATION</label>

              <input
                type="text"
                placeholder="Enter your location"
                defaultValue="Hyderabad"
              />

            </div>


            {/* DATE */}

            <div className="find-game-field">

              <label>DATE</label>

              <input
                type="date"
              />

            </div>


            {/* TIME */}

            <div className="find-game-field">

              <label>TIME</label>

              <select>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
              </select>

            </div>


            {/* SKILL */}

            <div className="find-game-field">

              <label>SKILL LEVEL</label>

              <select>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

            </div>


            {/* PLAYERS */}

            <div className="find-game-field">

              <label>PLAYERS NEEDED</label>

              <select>
                <option>4 Players</option>
                <option>6 Players</option>
                <option>8 Players</option>
                <option>10 Players</option>
              </select>

            </div>

          </div>


          <button
            className="find-game-button"
            onClick={onFindGame}
          >
            Find My Game
            <ArrowRight size={17} />
          </button>

        </div>


        {/* FEATURES */}

        <div className="find-game-features">

          <div>
            <MapPin size={17} />
            <span>Nearby Facilities</span>
          </div>

          <div>
            <UsersIcon />
            <span>Smart Player Matching</span>
          </div>

          <div>
            <Trophy size={17} />
            <span>Balanced Teams</span>
          </div>

        </div>

      </div>

    </div>
  );
}


/* Small icon component */

function UsersIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default FindGame;