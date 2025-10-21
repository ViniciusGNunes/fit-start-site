import { useState } from "react";
import { CalorieCalcModel } from "@/app/Models/CalorieCalcModel";
import { submitCalorieData } from "@/app/Services/submitCalorieData";
import Styles from "./styles.module.scss";

export default function CalorieForm() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [totalCalories, setTotalCalories] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload: CalorieCalcModel = {
      weight: Number(weight),
      height: Number(height),
      age: Number(age),
      gender,
      activityLevel,
    };

    try {
      const data = await submitCalorieData(payload);
      setTotalCalories(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="row mt-3 mx-auto w-75">
        <div className=" form-floating mb-3 col-12 ">
          <input
            type="number"
            className={`form-control ${Styles.numberInput}`}
            id="floatingWeight"
            placeholder="70Kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label htmlFor="floatingWeight" className="form-label">
            &nbsp;Insert your Weight(Kg)
          </label>
        </div>

        <div className=" form-floating mb-3 col-12">
          <input
            type="number"
            className="form-control"
            id="floatingHeight"
            placeholder="170cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <label htmlFor="floatingHeight" className="form-label">
            &nbsp;Insert your Height(cm)
          </label>
        </div>

        <div className=" form-floating col-12">
          <input
            type="number"
            className="form-control"
            id="floatingAge"
            placeholder="18y"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="floatingAge" className="form-label">
            &nbsp;Insert your Age(Yrs)
          </label>
        </div>
        <div className="row my-3 mx-auto w-75">
          <div className="col-6">
            <input
              type="radio"
              className="btn-check"
              name="Male"
              id="btn-check-Male"
              autoComplete="off"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />
            <label
              className="btn btn-outline-light w-100"
              htmlFor="btn-check-Male"
            >
              Male
            </label>
          </div>

          <div className="col-6">
            <input
              type="radio"
              className="btn-check"
              name="Female"
              id="btn-check-Female"
              autoComplete="off"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
            />
            <label
              className="btn btn-outline-light w-100"
              htmlFor="btn-check-Female"
            >
              Female
            </label>
          </div>
        </div>
        <select
          className="form-select mb-3"
          aria-label="Activity Level"
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option defaultValue=""> Choose your activity Level</option>
          <option value="Sedentary">Sedentary - No physical activity</option>
          <option value="Light">
            Light - Light exercise 1-3 times per week
          </option>
          <option value="Moderate">
            Moderate - Moderate exercise 3-5 times per week
          </option>
          <option value="Intense">
            Intense - Heavy activity 6-7 times per week
          </option>
          <option value="Very Intense">
            Very Intense - Physical labour or exercises 2 times per day
          </option>
        </select>

        <button className="btn btn-primary mx-auto w-75 mb-4" type="submit">
          Submit
        </button>
      </form>

      <div className="">
        {totalCalories != 0 ? (
          <h3>Your daily total Expenditure is: {totalCalories}</h3>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
