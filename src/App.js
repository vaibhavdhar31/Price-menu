import "./App.css";
import { useState } from "react";
import PricingCard from "./components/PricingCard";
import "./styles/PricingApp.css";
import PricingCardMiddle from "./components/PricingCardMiddle";
import TableBox from "./components/TableBox";

function App() {
  const [selectMonthly, setSelectMonthly] = useState(true);
  const [selectCurrency, setSelectCurrency] = useState(true);

  const calculatePrice = (plan) => {
    if (selectMonthly && selectCurrency) {
      // Monthly and USD
      if (plan === "Basic") {
        return "$49.99";
      }
      if (plan === "Premium") {
        return "$99.99";
      }
    } else if (!selectMonthly && selectCurrency) {
      // Yearly and USD
      if (plan === "Basic") {
        return "$599.99";
      }
      if (plan === "Premium") {
        return "$1199.99";
      }
    } else if (selectMonthly && !selectCurrency) {
      // Monthly and INR
      if (plan === "Basic") {
        return "₹399.99";
      }
      if (plan === "Premium") {
        return "₹799.99";
      }
    } else {
      // Yearly and INR
      if (plan === "Basic") {
        return "₹4799.99";
      }
      if (plan === "Premium") {
        return "₹9599.99";
      }
    }
  };
  const calculatePriceStrike = (plan) => {
    if (selectMonthly && selectCurrency) {
      // Monthly and USD
      if (plan === "Basic") {
        return "$99.99";
      }
      if (plan === "Premium") {
        return "$199.99";
      }
    } else if (!selectMonthly && selectCurrency) {
      // Yearly and USD
      if (plan === "Basic") {
        return "$1199.99";
      }
      if (plan === "Premium") {
        return "$2399.99";
      }
    } else if (selectMonthly && !selectCurrency) {
      // Monthly and INR
      if (plan === "Basic") {
        return "₹799.99";
      }
      if (plan === "Premium") {
        return "₹1599.99";
      }
    } else {
      // Yearly and INR
      if (plan === "Basic") {
        return "₹9599.99";
      }
      if (plan === "Premium") {
        return "₹19199.99";
      }
    }
  };
  console.log(selectMonthly);
  return (
    <div className="PricingApp">
      <div className="app-container">
        <header>
          <h1 className="header-topic">Our Pricing Plan</h1>
          <h4 className="header-para">
            Browse our pricing plans to find your perfect fit, whether you're an
            individual <br />
            or a business.
          </h4>
          <div className="header-row">
            <p className="annually-left">Annually</p>
            <label className="price-switch">
              <input
                className="price-checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
                type="checkbox"
              />
              <div className="switch-slider"></div>
            </label>
            <p className="annually-right">Monthly</p>
          </div>
          <div className="header-row">
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button b2" id="button-10">
                  <input
                    onChange={() => {
                      setSelectCurrency((prev) => !prev);
                    }}
                    type="checkbox"
                    class="checkbox"
                  />
                  <div class="knobs">
                    <span>USD</span>
                  </div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Cards Here*/}
        <div className="pricing-cards">
          <PricingCard
            title=<p class="title_deg">Basic</p>
            strike=<p class="strikethrough">{calculatePriceStrike("Basic")}</p>
            price=<p class="price_deg">{calculatePrice("Basic")}</p>
            month=<p class="month_deg">
              {selectMonthly ? "per month" : "per year"}
            </p>
            resumate=<span id="resumate_deg">(2000 AI Resume Screening)</span>
            assessments=<span id="assessment_deg">1000</span>
          />
          <PricingCardMiddle
            title=<p class="title1_deg">Premium</p>
            strike=<p class="strikethrough1">
              {calculatePriceStrike("Premium")}
            </p>
            price=<p class="price_deg1">{calculatePrice("Premium")}</p>
            month=<p class="month_deg1">
              {selectMonthly ? "per month" : "per year"}
            </p>
            resumate=<span id="resumate1_deg">(5000 AI Resume Screening)</span>
            assessments=<span id="assessment_deg">2500</span>
          />
          <PricingCard
            title=<p class="title3_deg">Unlimited</p>
            price=<p class="price_deg">Contact Us</p>
            month=<p class="month3_deg">
              our team will brief about <br />
              unlimited plan
            </p>
            resumate=<span id="resumate_deg">(Unlimited)</span>
            assessments=<span id="assessment_deg">Unlimited</span>
          />
        </div>
        <h1 className="pricing-table">Pricing Table</h1>
        <div className="table-box">
          <TableBox />
        </div>
      </div>
    </div>
  );
}

export default App;
