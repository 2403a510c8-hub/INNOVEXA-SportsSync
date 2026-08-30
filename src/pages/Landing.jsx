import {
  MapPin,
  Users,
  Trophy,
  ArrowRight,
  Search,
  CalendarDays,
} from "lucide-react";

function Landing() {
  return (
    <div className="landing-page">

      {/* NAVBAR */}
      <nav className="landing-nav">
        <div className="brand">
          <div className="brand-mark">S</div>

          <div>
            <h2>SportsSync</h2>
            <span>Innovexa 2.0</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

        <button className="nav-login">
          Login
        </button>
      </nav>


      {/* HERO */}
      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-badge">
            <span className="badge-dot"></span>
            Smart Sports Matchmaking Platform
          </div>

          <h1>
            Find your game.
            <br />
            <span>Find your people.</span>
          </h1>

          <p>
            SportsSync connects you with nearby sports facilities,
            compatible players, and balanced teams — all in one place.
          </p>

          <div className="hero-actions">

            <button className="primary-cta">
              Find My Game
              <ArrowRight size={18} />
            </button>

            <button className="secondary-cta">
              Explore Platform
            </button>

          </div>

          <div className="hero-trust">
            <div>
              <strong>500+</strong>
              <span>Players</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Facilities</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>Sports</span>
            </div>
          </div>

        </div>


        {/* FIND GAME CARD */}

        <div className="hero-card">

          <div className="hero-card-header">
            <div>
              <span className="small-label">QUICK MATCH</span>
              <h3>Find Your Game</h3>
            </div>

            <div className="search-icon">
              <Search size={20} />
            </div>
          </div>


          <div className="input-group">

            <label>Sport</label>

            <div className="fake-input">
              🏏
              <span>Choose a sport</span>
              <ArrowRight size={16} />
            </div>

          </div>


          <div className="input-group">

            <label>Location</label>

            <div className="fake-input">

              <MapPin size={17} />

              <span>Enter your location</span>

            </div>

          </div>


          <div className="input-row">

            <div className="input-group">

              <label>Date</label>

              <div className="fake-input">

                <CalendarDays size={16} />

                <span>Choose date</span>

              </div>

            </div>


            <div className="input-group">

              <label>Skill</label>

              <div className="fake-input">

                <Trophy size={16} />

                <span>Skill level</span>

              </div>

            </div>

          </div>


          <button className="find-button">

            Find Available Games

            <ArrowRight size={17} />

          </button>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="workflow-section" id="how-it-works">

        <div className="section-heading">

          <span>HOW SPORTSSYNC WORKS</span>

          <h2>
            From "I want to play"
            <br />
            to <strong>Game Ready.</strong>
          </h2>

          <p>
            Everything you need to organize your next game,
            without the usual hassle.
          </p>

        </div>


        <div className="workflow-grid">

          <div className="workflow-card">

            <div className="step-number">01</div>

            <div className="workflow-icon">
              <Search size={22} />
            </div>

            <h3>Find a Facility</h3>

            <p>
              Discover nearby sports facilities available
              at your preferred time.
            </p>

          </div>


          <div className="workflow-card">

            <div className="step-number">02</div>

            <div className="workflow-icon">
              <Users size={22} />
            </div>

            <h3>Match Players</h3>

            <p>
              Find players with compatible skill levels
              and availability.
            </p>

          </div>


          <div className="workflow-card">

            <div className="step-number">03</div>

            <div className="workflow-icon">
              <Trophy size={22} />
            </div>

            <h3>Build Balanced Teams</h3>

            <p>
              Create fair teams based on player skill
              and match requirements.
            </p>

          </div>


          <div className="workflow-card">

            <div className="step-number">04</div>

            <div className="workflow-icon">
              <ArrowRight size={22} />
            </div>

            <h3>Game Ready</h3>

            <p>
              Confirm the facility, teams and game details
              in one simple flow.
            </p>

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="features-section" id="features">

        <div className="section-heading">

          <span>WHY SPORTSSYNC</span>

          <h2>
            Everything for your game,
            <br />
            <strong>in one place.</strong>
          </h2>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <MapPin size={25} />

            <h3>Smart Facility Discovery</h3>

            <p>
              Find nearby facilities based on location,
              sport and availability.
            </p>

          </div>


          <div className="feature-card">

            <Users size={25} />

            <h3>Player Matching</h3>

            <p>
              Connect with players who match your
              sport, skill level and schedule.
            </p>

          </div>


          <div className="feature-card">

            <Trophy size={25} />

            <h3>Balanced Teams</h3>

            <p>
              Create competitive and fair teams
              using player skill information.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="final-cta">

        <h2>Ready to find your game?</h2>

        <p>
          Choose your sport, set your preferences,
          and let SportsSync handle the rest.
        </p>

        <button className="primary-cta">
          Find My Game
          <ArrowRight size={18} />
        </button>

      </section>


      {/* FOOTER */}

      <footer className="landing-footer">

        <div className="brand">

          <div className="brand-mark">S</div>

          <div>
            <h2>SportsSync</h2>
            <span>Innovexa 2.0</span>
          </div>

        </div>

        <p>
          Find. Match. Play.
        </p>

      </footer>

    </div>
  );
}

export default Landing;