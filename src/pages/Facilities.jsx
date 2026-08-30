import {
  MapPin,
  Clock,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const facilities = [
  {
    name: "Innovexa Sports Arena",
    location: "Madhapur, Hyderabad",
    distance: "1.2 km",
    rating: "4.8",
    price: "₹800 / hour",
    time: "6:00 PM",
    sport: "Cricket",
  },
  {
    name: "City Sports Hub",
    location: "Kondapur, Hyderabad",
    distance: "2.1 km",
    rating: "4.6",
    price: "₹700 / hour",
    time: "6:00 PM",
    sport: "Cricket",
  },
  {
    name: "PlayZone Arena",
    location: "Gachibowli, Hyderabad",
    distance: "3.4 km",
    rating: "4.7",
    price: "₹900 / hour",
    time: "7:00 PM",
    sport: "Cricket",
  },
  {
    name: "Urban Sports Ground",
    location: "Hitech City, Hyderabad",
    distance: "4.2 km",
    rating: "4.5",
    price: "₹650 / hour",
    time: "8:00 PM",
    sport: "Cricket",
  },
];

function Facilities({ onSelectFacility }) {
  return (
    <div className="facilities-page">

      <div className="facilities-header">

        <div>

          <span className="page-label">
            STEP 1 • FACILITY MATCHING
          </span>

          <h1>Available facilities.</h1>

          <p>
            We found sports facilities matching your
            location, sport and preferred time.
          </p>

        </div>

        <div className="facility-result-count">
          4 facilities found
        </div>

      </div>


      {/* FACILITY LIST */}

      <div className="facility-list">

        {facilities.map((facility, index) => (

          <div
            className="facility-card"
            key={index}
          >

            <div className="facility-top">

              <div>

                <span className="facility-sport">
                  {facility.sport}
                </span>

                <h2>
                  {facility.name}
                </h2>

              </div>

              <div className="facility-rating">

                <Star size={13} />

                {facility.rating}

              </div>

            </div>


            <div className="facility-details">

              <span>
                <MapPin size={13} />
                {facility.location}
              </span>

              <span>
                {facility.distance}
              </span>

            </div>


            <div className="facility-bottom">

              <div>

                <span className="facility-time">
                  <Clock size={13} />
                  Available at {facility.time}
                </span>

                <strong>
                  {facility.price}
                </strong>

              </div>

              <CheckCircle2
                size={18}
                className="facility-check"
              />

            </div>


            <button
              className="select-facility-button"
              onClick={onSelectFacility}
            >

              Select Facility

              <ArrowRight size={15} />

            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Facilities;