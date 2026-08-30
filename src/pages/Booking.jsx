import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  CreditCard,
} from "lucide-react";

function Booking({ onGameReady }) {
  return (
    <div className="booking-page">

      <div className="booking-header">
        <div>
          <span className="page-label">
            STEP 4 • FACILITY BOOKING
          </span>

          <h1>Reserve your game.</h1>

          <p>
            Review your game details and confirm your facility booking.
          </p>
        </div>

        <div className="booking-status">
          <CheckCircle2 size={15} />
          Teams Ready
        </div>
      </div>


      <div className="booking-layout">

        <div className="booking-main">

          <div className="booking-card">

            <div className="booking-card-title">
              <MapPin size={20} />

              <div>
                <span>SELECTED FACILITY</span>
                <h2>Innovexa Sports Arena</h2>
              </div>
            </div>

            <div className="facility-booking-info">

              <div>
                <span>LOCATION</span>
                <strong>Hyderabad</strong>
              </div>

              <div>
                <span>SPORT</span>
                <strong>Cricket</strong>
              </div>

              <div>
                <span>RATING</span>
                <strong>4.8 / 5</strong>
              </div>

            </div>

          </div>


          <div className="booking-card">

            <h2 className="card-heading">
              Game Schedule
            </h2>

            <div className="schedule-grid">

              <div className="schedule-option selected">
                <CalendarDays size={20} />

                <div>
                  <span>DATE</span>
                  <strong>Tomorrow</strong>
                </div>
              </div>

              <div className="schedule-option selected">
                <Clock size={20} />

                <div>
                  <span>TIME</span>
                  <strong>6:00 PM – 7:00 PM</strong>
                </div>
              </div>

            </div>

          </div>


          <div className="booking-card">

            <div className="booking-teams-heading">

              <h2 className="card-heading">
                Match Teams
              </h2>

              <span>
                <Users size={14} />
                4 Players
              </span>

            </div>

            <div className="mini-teams">

              <div>
                <strong>Blue Strikers</strong>
                <span>Arjun • Sai</span>
              </div>

              <b>VS</b>

              <div>
                <strong>Red Falcons</strong>
                <span>Rahul • Karthik</span>
              </div>

            </div>

          </div>

        </div>


        <div className="booking-summary">

          <h2>Booking Summary</h2>

          <div className="summary-row">
            <span>Facility</span>
            <strong>₹800</strong>
          </div>

          <div className="summary-row">
            <span>Duration</span>
            <strong>1 hour</strong>
          </div>

          <div className="summary-row">
            <span>Players</span>
            <strong>4</strong>
          </div>

          <div className="summary-divider"></div>

          <div className="total-row">
            <span>Total</span>
            <strong>₹800</strong>
          </div>

          <button
            className="confirm-booking"
            onClick={onGameReady}
          >
            <CreditCard size={17} />

            Confirm Booking

            <ArrowRight size={16} />
          </button>

          <p className="secure-note">
            Secure booking • No hidden charges
          </p>

        </div>

      </div>

    </div>
  );
}

export default Booking;