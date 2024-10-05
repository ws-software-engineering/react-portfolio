const ResumeDownload = () => {
  const onButtonClick = () => {
    fetch("/" + "react_portfolio.pdf", {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    }).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "william_schultz_software_resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <button className="resume-download-button" onClick={onButtonClick}>Download PDF</button>
    </>
  );
};

export default ResumeDownload;
