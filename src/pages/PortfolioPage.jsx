export default function PortfolioPage() {
  return (
    <div className="container pt-4 portfolio-cards-container">
      <h2>Portfolio Page</h2>
      <div className="container portfolio-cards">
        <div className="card-one">
          <center>
            <a
              href="https://github.com/ws-software-engineering/employee-tracker"
              target="_blank"
            >
              <h1>Employee Tracker</h1>
            </a>
          </center>
        </div>
        <div className="card-two">
          <center>
            <a
              href="https://weather-dashboard-api-im9j.onrender.com/"
              target="_blank"
            >
              <h1>Weather Dashboard</h1>
            </a>
            <a
              href="https://github.com/ws-software-engineering/weather-dashboard"
              target="_blank"
            >
              <h3>GitHub</h3>
            </a>
          </center>
        </div>
        <div className="card-three">
          <center>
            <a
              href="https://github.com/ws-software-engineering/vehicle-builder"
              target="_blank"
            >
              <h1>Vehicle Builder</h1>
            </a>
          </center>
        </div>
        <div className="card-four">
          <center>
            <a
              href="https://github.com/ws-software-engineering/readme-generator"
              target="_blank"
            >
              <h1>ReadMe Generator</h1>
            </a>
          </center>
        </div>
      </div>
    </div>
  );
}
