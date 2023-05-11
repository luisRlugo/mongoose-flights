const React = require("react");

class Index extends React.Component {
  render() {
    const { flights } = this.props;
    return (
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}>
          Flights Index Page
        </h1>
        <a
          href={"/flights/new"}
          style={{ color: "blue", textDecoration: "none" }}
        >
          Create a Flight
        </a>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {flights.map((flight, i) => (
            <li key={i} style={{ marginBottom: "10px" }}>
              <a
                href={`/flights/${flight._id}`}
                style={{ color: "#555", textDecoration: "none" }}
              >
                {flight.airline}
              </a>
              <br></br>
              <a href={`/flights/${flight._id}`} style={{ color: "#777" }}>
                {flight.flightNo}
              </a>
              <br></br>
              <a href={`/flights/${flight._id}`} style={{ color: "#999" }}>
                {flight.departs.toISOString().slice(0, 16)}
              </a>
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
