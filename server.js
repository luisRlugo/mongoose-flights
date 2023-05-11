const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Flight = require("./models/flight");
const methodOverride = require("method-override");
const Destination = require("./models/destination");
const db = require("./config/database");

// View Engine Middleware Configure
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set("view engine", "jsx");
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set("views", "./views");
// Custom Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// I.N.D.U.C.E.S

// Index
app.get("/flights", async (req, res) => {
  try {
    const foundFlights = await Flight.find({});
    res.render("flights/Index", { flights: foundFlights });
  } catch (error) {
    res.status(400).send(error);
  }
});

//New
app.get("/flights/new", async (req, res) => {
  res.render("flights/New");
});

// //Update
// app.put("/flights/:id", async (req, res) => {
//   try {
//     const updatedFlight = Flight.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.redirect(`/fights/${req.params.id}`);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// Create
app.post("/flights", async (req, res) => {
  try {
    const newFlight = await Flight.create(req.body);
    res.redirect("/flights");
  } catch (error) {
    res.status(400).send(error);
  }
});

//Destinations INDUCES
//Create
app.post("/destinations/:id", async (req, res) => {
  try {
    const newDestination = await Destination.create(req.body);
    const updatedFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { destinations: newDestination._id } },
      { new: true }
    );
    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Show
app.get("/flights/:id", async (req, res) => {
  try {
    const selectedFlight = await Flight.findById(req.params.id).populate(
      "destinations"
    );
    res.render("flights/Show", { flight: selectedFlight });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/*", (req, res) => {
  res.redirect("/flights");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
