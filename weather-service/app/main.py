from fastapi import FastAPI

app = FastAPI(title="Flight Planner Weather Service")

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/analyze-weather")
def analyze_weather(metar: str):
    return {
        "metar": metar,
        "category": "VFR"
    }
