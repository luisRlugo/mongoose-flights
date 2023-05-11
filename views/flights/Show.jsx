import React, { Component } from "react";

export default class Show extends Component {
  render() {
    const { flight } = this.props;
    return (
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <div>
          <div>
            <h3
              style={{ color: "#333", fontSize: "24px", marginBottom: "10px" }}
            >
              Flight Number:
            </h3>
            <h3 style={{ color: "#555" }}> {flight.flightNo}</h3>
          </div>
          <div>
            <div>
              <h3
                style={{
                  color: "#333",
                  fontSize: "24px",
                  marginBottom: "10px",
                }}
              >
                Departure Time:
              </h3>
              <h3 style={{ color: "#555" }}>
                {flight.departs.toISOString().slice(0, 16)}
              </h3>
            </div>
            <div>
              <h3
                style={{
                  color: "#333",
                  fontSize: "24px",
                  marginBottom: "10px",
                }}
              >
                Flight Airline:
              </h3>
              <h3 style={{ color: "#555" }}>{flight.airline}</h3>
            </div>
            <div>
              <h3
                style={{
                  color: "#333",
                  fontSize: "24px",
                  marginBottom: "10px",
                }}
              >
                Airport:
              </h3>
              <h3 style={{ color: "#555" }}>{flight.airport}</h3>
            </div>
          </div>
          <div>
            <label
              style={{ color: "#333", fontSize: "24px", marginBottom: "10px" }}
            >
              Destinations
            </label>
            {flight.destinations.map((destination, index) => (
              <h1 key={index} style={{ color: "#555" }}>
                {destination.airport}
              </h1>
            ))}
          </div>
        </div>
        <form method="POST" action={`/destinations/${flight._id}`}>
          <label
            style={{ color: "#333", fontSize: "24px", marginBottom: "10px" }}
          >
            Choose Destination
          </label>
          <select name="airport" style={{ marginBottom: "10px" }}>
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <input
            type="submit"
            value="Submit"
            style={{
              backgroundColor: "#333",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          />
        </form>
        <br />
        <button>
          <a
            href="/"
            style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}
          >
            Back to Main
          </a>
        </button>
      </div>
    );
  }
}
