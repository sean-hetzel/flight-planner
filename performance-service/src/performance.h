#pragma once

struct PerformanceResult {
  double ete_hours;
  double fuel_required;
};

PerformanceResult compute_leg(
  double distance_nm,
  double tas,
  double fuel_flow
);
