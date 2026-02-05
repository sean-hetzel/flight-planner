#include "httplib.h"
#include "json.hpp"
#include "performance.h"

int main() {
  httplib::Server svr;

  svr.Post("/compute", [](const httplib::Request& req, httplib::Response& res) {
    auto input = nlohmann::json::parse(req.body);

    double distance_nm = input["distance_nm"].get<double>();
    double tas = input["tas"].get<double>();
    double fuel_flow = input["fuel_flow"].get<double>();

    auto perf = compute_leg(distance_nm, tas, fuel_flow);

    nlohmann::json output;
    output["ete_hours"] = perf.ete_hours;
    output["fuel_required"] = perf.fuel_required;

    res.set_content(output.dump(), "application/json");
  });

  svr.listen("0.0.0.0", 8081);
}
