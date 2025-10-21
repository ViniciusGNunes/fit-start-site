"use client";
import { useState } from "react";
import Styles from "./styles.module.scss";
import CalorieForm from "../CalorieForm/CalorieForm";

export default function CalorieCalculatorPage() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 col-sm-12 col-xl-6 bg-dark text-white mt-5 mx-auto text-center rounded-2 p-3">
            <div className="row">
              <h1 className="mt-2">This is your calorie calculator</h1>
            </div>
            <div className="row">
              <h4>
                Insert your information below to improve your fitness journey
              </h4>
            </div>
            <CalorieForm />
          </div>
        </div>
      </div>
    </>
  );
}
