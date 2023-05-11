const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <label
          style={{
            color: "#333",
            fontSize: "24px",
            marginBottom: "10px",
            display: "block",
          }}
        >
          Create a New Flight
        </label>
        <form action="/flights" method="POST">
          <label
            style={{
              display: "block",
              marginTop: "10px",
              color: "#555",
              fontSize: "16px",
            }}
          >
            Airline:
          </label>
          <input
            type="radio"
            id="American"
            value="American"
            name="airline"
            style={{ marginRight: "5px" }}
          />
          <label style={{ marginRight: "10px" }}>American</label>
          <input
            type="radio"
            id="Southwest"
            value="Southwest"
            name="airline"
            style={{ marginRight: "5px" }}
          />
          <label style={{ marginRight: "10px" }}>Southwest</label>
          <input
            type="radio"
            id="United"
            value="United"
            name="airline"
            style={{ marginRight: "5px" }}
          />
          <label>United</label>
          <br />
          <label
            style={{
              display: "block",
              marginTop: "10px",
              color: "#555",
              fontSize: "16px",
            }}
          >
            Add Flight No:
          </label>
          <input type="text" name="flightNo" style={{ marginBottom: "10px" }} />
          <br />
          <label
            style={{
              display: "block",
              marginTop: "10px",
              color: "#555",
              fontSize: "16px",
            }}
          >
            Add Date:
          </label>
          <input type="datetime-local" name="departure" />
          <br />
          <label
            style={{
              display: "block",
              marginTop: "10px",
              color: "#555",
              fontSize: "16px",
            }}
          >
            Choose Airport:
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
            value="Create Flight"
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

module.exports = New;
