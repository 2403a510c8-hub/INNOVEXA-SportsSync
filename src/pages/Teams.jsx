import {
  ArrowRight,
  Sparkles,
  Users,
  Trophy,
  Zap,
} from "lucide-react";

const teamA = [
  { name: "Arjun Kumar", skill: "Intermediate", score: 82 },
  { name: "Sai Teja", skill: "Advanced", score: 91 },
];

const teamB = [
  { name: "Rahul Sharma", skill: "Intermediate", score: 80 },
  { name: "Karthik Reddy", skill: "Intermediate", score: 79 },
];

function Teams({ onContinueBooking }) {
  return (
    <div className="teams-page">

      {/* HEADER */}

      <div className="teams-header">

        <div>
          <span className="page-label">
            STEP 3 • AI TEAM FORMATION
          </span>

          <h1>Balanced teams.</h1>

          <p>
            SportsSync AI has created balanced teams based on
            player skill, performance and compatibility.
          </p>
        </div>

        <div className="ai-team-badge">
          <Sparkles size={15} />
          AI Balanced
        </div>

      </div>


      {/* AI SUMMARY */}

      <div className="team-ai-summary">

        <div className="team-ai-icon">
          <Sparkles size={19} />
        </div>

        <div>
          <strong>
            SportsSync AI created an optimized match
          </strong>

          <p>
            Team balance score: <b>94%</b> • Skill difference
            minimized • 4 players selected
          </p>
        </div>

      </div>


      {/* TEAMS */}

      <div className="teams-container">

        {/* TEAM A */}

        <div className="team-card">

          <div className="team-card-header">

            <div>
              <span>TEAM A</span>
              <h2>Blue Strikers</h2>
            </div>

            <div className="team-score">
              88
              <small>Rating</small>
            </div>

          </div>


          <div className="team-members">

            {teamA.map((player, index) => (

              <div
                className="team-player"
                key={index}
              >

                <div className="team-player-avatar">
                  {player.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <strong>{player.name}</strong>
                  <span>{player.skill}</span>
                </div>

                <b>{player.score}</b>

              </div>

            ))}

          </div>


          <div className="team-stat">

            <span>
              <Users size={14} />
              2 Players
            </span>

            <span>
              <Trophy size={14} />
              Avg. 86.5
            </span>

          </div>

        </div>


        {/* VS */}

        <div className="team-vs">
          VS
        </div>


        {/* TEAM B */}

        <div className="team-card">

          <div className="team-card-header">

            <div>
              <span>TEAM B</span>
              <h2>Red Falcons</h2>
            </div>

            <div className="team-score">
              87
              <small>Rating</small>
            </div>

          </div>


          <div className="team-members">

            {teamB.map((player, index) => (

              <div
                className="team-player"
                key={index}
              >

                <div className="team-player-avatar">
                  {player.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <strong>{player.name}</strong>
                  <span>{player.skill}</span>
                </div>

                <b>{player.score}</b>

              </div>

            ))}

          </div>


          <div className="team-stat">

            <span>
              <Users size={14} />
              2 Players
            </span>

            <span>
              <Trophy size={14} />
              Avg. 79.5
            </span>

          </div>

        </div>

      </div>


      {/* BALANCE */}

      <div className="balance-card">

        <div className="balance-icon">
          <Zap size={18} />
        </div>

        <div className="balance-info">

          <strong>
            Team Balance
          </strong>

          <span>
            Teams are closely matched based on player performance.
          </span>

        </div>

        <div className="balance-score">
          94%
        </div>

      </div>


      {/* ACTION */}

      <div className="teams-action">

        <div>

          <strong>
            Teams are ready!
          </strong>

          <span>
            Continue to reserve the selected facility.
          </span>

        </div>

        <button
          className="continue-booking"
          onClick={onContinueBooking}
          type="button"
        >

          Continue to Booking

          <ArrowRight size={17} />

        </button>

      </div>

    </div>
  );
}

export default Teams;