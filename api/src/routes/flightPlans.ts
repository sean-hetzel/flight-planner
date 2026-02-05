import express from "express";
import db from "../db.js";
import { computeLeg } from "../services/performance.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { departure, destination, distance_nm, tas, fuel_flow } = req.body;

  if (!departure || !destination) {
    return res.status(400).json({ error: "Missing airports" });
  }

  // call C++ service
  const perf = await computeLeg({
    distance_nm,
    tas,
    fuel_flow
  });

  const stmt = db.prepare(`
    INSERT INTO flight_plans
    (departure, destination, distance_nm, ete_hours, fuel_required)
    VALUES (?, ?, ?, ?, ?)
  `);

  const result = stmt.run(
    departure,
    destination,
    distance_nm,
    perf.ete_hours,
    perf.fuel_required
  );

  res.json({
    id: result.lastInsertRowid,
    ...perf
  });
});

router.get("/", () => {
  const plans = db.prepare("SELECT * FROM flight_plans").all();
  return plans;
});

export default router;
