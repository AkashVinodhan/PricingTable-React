import React from "react";

export default function Card({ tier, planBenefits, price }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {tier}
          </h5>
          <h6 className="card-price text-center">
            ${price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {planBenefits.map((obj, index) => {
              const { feature, available, isStrong } = obj;
              return (
                <li key={index} className={available ? "" : "text-muted"}>
                  <span className="fa-li">
                    <i
                      className={available ? "fas fa-check" : "fas fa-times"}
                    ></i>
                  </span>
                  {isStrong ? <strong>{feature}</strong> : feature}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
