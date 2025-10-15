import Styles from "./styles.module.scss";

export default function CalorieCalculatorPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 col-sm-12 col-xl-12 bg-dark text-white mt-5 mx-auto text-center rounded-4 p-3">
            <div className="row">
              <h1 className="mt-2">This is your calorie calculator</h1>
            </div>
            <div className="row">
              <h4>
                Insert your information below to improve your fitness journey
              </h4>
            </div>

            <form className="row mt-3 mx-auto w-75">
              <div className=" form-floating mb-3 col-12 ">
                <input
                  type="number"
                  className={`form-control ${Styles.numberInput}`}
                  id="floatingWeight"
                  placeholder="70Kg"
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
                    name="gender"
                    id="btn-check-Male"
                    autoComplete="off"
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
                    name="gender"
                    id="btn-check-Female"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-light w-100"
                    htmlFor="btn-check-Female"
                  >
                    Female
                  </label>
                </div>
              </div>
              <select className="form-select mb-3" aria-label="Activity Level">
                <option selected> Choose your activity Level</option>
                <option value="Sedentary">
                  Sedentary - No physical activity
                </option>
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

              <button
                className="btn btn-primary mx-auto w-75 mb-4"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
