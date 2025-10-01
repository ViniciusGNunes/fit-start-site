import Styles from "./styles.module.scss";

export default function CalorieCalculatorPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 col-xl-12 bg-dark text-white mt-5 mx-auto text-center rounded-4 p-3">
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
                  Insert your Weight(Kg)
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
                  Insert your Height(cm)
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
                  Insert your Age(Yrs)
                </label>
              </div>
              <div className="row my-4 mx-auto w-75">
                <div className="form-check text-right border-white">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btn-check-Male"
                  />
                  <label className="btn" htmlFor="btn-check-Male">
                    Male
                  </label>
                </div>
                <div className="form-check text-right border-white">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btn-check-Female"
                  />
                  <label className="btn" htmlFor="btn-check-Female">
                    Female
                  </label>
                </div>
              </div>

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
