export default function PortfolioPage() {
  return (
    <div className="container pt-4 portfolio-cards-container">
      <h2>Portfolio Page</h2>
      <div className="container portfolio-cards">
        <div class="card-one">
          <center>
            <a
              href="https://github.com/ws-data-engineering/employee-tracker"
              target="_blank"
            >
              <h1>Employee Tracker</h1>
            </a>
          </center>
        </div>
        <div class="card-two">
          <center>
            <a
              href="https://weather-dashboard-qf8r.onrender.com"
              target="_blank"
            >
              <h1>Weather Dashboard</h1>
            </a>
            <a
              href="https://github.com/ws-data-engineering/weather-dashboard"
              target="_blank"
            >
              <h3>GitHub</h3>
            </a>
          </center>
        </div>
        <div class="card-three">
          <center>
            <a
              href="https://github.com/ws-data-engineering/vehicle-builder"
              target="_blank"
            >
              <h1>Vehicle Builder</h1>
            </a>
          </center>
        </div>
        <div class="card-four">
          <center>
            <a
              href="https://github.com/ws-data-engineering/readme-generator"
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
