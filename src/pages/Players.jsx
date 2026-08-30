import {
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";

const players = [
  {
    name: "Arjun Kumar",
    skill: "Intermediate",
    sport: "Cricket",
    location: "1.4 km away",
    availability: "Available",
    match: "96%",
    avatar: "AK",
  },
  {
    name: "Rahul Sharma",
    skill: "Intermediate",
    sport: "Cricket",
    location: "1.8 km away",
    availability: "Available",
    match: "93%",
    avatar: "RS",
  },
  {
    name: "Sai Teja",
    skill: "Advanced",
    sport: "Cricket",
    location: "2.2 km away",
    availability: "Available",
    match: "89%",
    avatar: "ST",
  },
  {
    name: "Karthik Reddy",
    skill: "Intermediate",
    sport: "Cricket",
    location: "2.5 km away",
    availability: "Available",
    match: "87%",
    avatar: "KR",
  },
];

function Players({ onBuildTeam }) {
  return (
    <div className="players-page">

      {/* HEADER */}

      <div className="players-header">

        <div>
          <span className="page-label">
            STEP 2 • PLAYER MATCHING
          </span>

          <h1>Find your players.</h1>

          <p>
            SportsSync found players with compatible skills,
            availability and location.
          </p>
        </div>

        <div className="ai-match-badge">
          <Sparkles size={15} />
          AI Matching Active
        </div>

      </div>


      {/* MATCH SUMMARY */}

      <div className="match-summary">

        <div>
          <span>SPORT</span>
          <strong>🏏 Cricket</strong>
        </div>

        <div>
          <span>FACILITY</span>
          <strong>Innovexa Sports Arena</strong>
        </div>

        <div>
          <span>TIME</span>

          <strong>
            <Clock size={14} />
            6:00 PM
          </strong>
        </div>

        <div>
          <span>PLAYERS NEEDED</span>

          <strong>
            <Users size={14} />
            4 more
          </strong>
        </div>

      </div>


      {/* AI MESSAGE */}

      <div className="ai-match-message">

        <div className="ai-icon">
          <Sparkles size={18} />
        </div>

        <div>
          <strong>
            SportsSync AI found compatible players
          </strong>

          <p>
            Players are ranked using sport, skill level,
            availability and distance.
          </p>
        </div>

      </div>


      {/* PLAYER LIST */}

      <div className="players-list">

        <div className="players-list-heading">

          <strong>
            Recommended Players
          </strong>

          <span>
            {players.length} compatible players
          </span>

        </div>


        {players.map((player, index) => (

          <div
            className="player-card"
            key={index}
          >

            {/* AVATAR */}

            <div className="player-avatar">
              {player.avatar}
            </div>


            {/* PLAYER INFO */}

            <div className="player-info">

              <h2>{player.name}</h2>

              <div className="player-details">

                <span>
                  {player.sport}
                </span>

                <span>
                  {player.skill}
                </span>

                <span>
                  <MapPin size={13} />
                  {player.location}
                </span>

              </div>

            </div>


            {/* MATCH SCORE */}

            <div className="player-match">

              <strong>
                {player.match}
              </strong>

              <span>
                Match
              </span>

            </div>


            {/* STATUS */}

            <div className="player-status">
              ● {player.availability}
            </div>


            {/* INVITE */}

            <button
              className="invite-player"
              type="button"
            >
              Invite
            </button>

          </div>

        ))}

      </div>


      {/* CONTINUE */}

      <div className="players-action">

        <div>

          <strong>
            Ready to build your team?
          </strong>

          <span>
            SportsSync AI will create balanced teams
            from the matched players.
          </span>

        </div>


        <button
          className="build-team-button"
          onClick={onBuildTeam}
          type="button"
        >

          Build Balanced Team

          <ArrowRight size={17} />

        </button>

      </div>

    </div>
  );
}

export default Players;