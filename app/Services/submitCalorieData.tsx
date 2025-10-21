import { CalorieCalcModel } from "../Models/CalorieCalcModel";

export async function submitCalorieData(data: CalorieCalcModel) {
  const response = await fetch("https://localhost:7109/calories", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao enviar dados");
  }

  return response.json();
}
