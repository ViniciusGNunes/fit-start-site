"use client";

import Router from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
        <div className="container-fluid bg-dark py-3">
          <button
            className="navbar-brand bg-dark px-2 border-0 text-white "
            onClick={() => router.push("/")}
          >
            FitStart
          </button>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <button
                className="nav-link text-white"
                onClick={() => router.push("/calorie-calculator")}
              >
                Calorie Calculator
              </button>
              <button
                className="nav-link text-white"
                onClick={() => router.push("/calorie-calculator")}
              >
                Pricing
              </button>
              <button
                className="nav-link text-white"
                onClick={() => router.push("/exercise-generator")}
              >
                Exercise Generator
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
