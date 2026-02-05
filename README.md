# Flight Planner

A multi-service flight planning system that models real-world
aviation workflows using React, Node.js, Python, and C++.

## Architecture
- React frontend
- Node.js (TypeScript) API
- C++ performance service
- Python weather service
- SQLite datastore

## Why multiple languages?
- C++: performance-critical calculations
- Python: external data + rapid iteration
- Node.js: orchestration + persistence
- React: interactive UI

## Running locally
1. Start performance-service
2. Start weather-service
3. Start API
4. Start frontend
