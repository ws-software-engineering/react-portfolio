import ResumeDownload from "../components/UI/ResumeDownload.jsx";

export default function ResumePage() {
  return (
    <div className="container pt-4 main-resume-page">
      <h2>Resume</h2>
      {<ResumeDownload />}
      <div className="container pt-4">
        <h3>Data Engineer Portfolio Projects</h3>
        <ul>
          <li>
            <a
              href="https://github.com/DataForHealthCare/fhir-facade-api"
              target="_blank"
            >
              FHIR Facade API
            </a>
          </li>
          <ul>
            <li>
              <a
                href="https://github.com/DataForHealthCare/fhir-facade-api/blob/main/fhir_api_devdays.pdf"
                target="_blank"
              >
                PowerPoint
              </a>
            </li>
          </ul>
          <li>
            <a
              href="https://github.com/DataForHealthCare/airflow"
              target="_blank"
            >
              Apache Airflow Orchestration
            </a>
          </li>
          <ul>
            <li>
              <a
                href="https://github.com/DataForHealthCare/airflow/tree/main/presentation_claims_driver_orchestration"
                target="_blank"
              >
                PowerPoint
              </a>
            </li>
          </ul>
          <li>
            <a
              href="https://github.com/DataForHealthCare/python-code/tree/main/cost_prediction_model"
              target="_blank"
            >
              Machine Learning Cost Prediction Model (Databricks)
            </a>
          </li>
          <ul>
            <li>
              <a
                href="https://github.com/DataForHealthCare/python-code/blob/main/cost_prediction_model/cost_prediction_model.pdf"
                target="_blank"
              >
                PowerPoint
              </a>
            </li>
          </ul>
          <li>
            <a
              href="https://github.com/DataForHealthCare/data-transformation"
              target="_blank"
            >
              Data Transformation SQL & Pandas
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DataForHealthCare/python-code"
              target="_blank"
            >
              Python Coding Projects
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DataForHealthCare/diagrams"
              target="_blank"
            >
              Process Diagram Designs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
