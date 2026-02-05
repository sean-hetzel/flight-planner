import express, { Request, Response } from "express";
import flightPlanRoutes from "./routes/flightPlans.js";

const app = express();
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.use("/flight-plans", flightPlanRoutes);

app.listen(3001, () => {
  console.log("Node API running on port 3001");
});
