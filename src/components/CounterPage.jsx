import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./CounterPage.css";

const CounterPage = () => {
  const [counterState, setCounterState] = useState(false);
  return (
    <div className="counter-page-container">
      <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
        <div className="counter-page-grid">
          <div>
            <h2 className="counter-item-title">
                { counterState &&
                    <CountUp
                     
                    start={0} 
                    end={95} duration={2.75}></CountUp>
                }
              %
            </h2>
            <p className="counter-item-subtitle">Success Rate</p>
          </div>
          <div>
            <h2 className="counter-item-title">
              <CountUp start={0} end={55} duration={2.75}></CountUp>%
            </h2>
            <p className="counter-item-subtitle">Complete Project</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default CounterPage;
