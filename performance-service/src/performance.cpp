#include "performance.h"

PerformanceResult compute_leg(
  double distance_nm,
  double tas,
  double fuel_flow
) {
  PerformanceResult result;

  result.ete_hours = distance_nm / tas;
  result.fuel_required = result.ete_hours * fuel_flow;

  return result;
}
