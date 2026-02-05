export interface ComputeLegRequest {
  distance_nm: number;
  tas: number;
  fuel_flow: number;
}

export interface ComputeLegResponse {
  ete_hours: number;
  fuel_required: number;
}

export async function computeLeg(
  data: ComputeLegRequest
): Promise<ComputeLegResponse> {
  const response = await fetch("http://localhost:8081/compute", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Performance service failed");
  }

  return response.json();
}
