import { useLocation } from "react-router";

function ViewPdf() {
  const location = useLocation();
  const { pdfUrl } = location.state || {}; // Get the PDF URL from navigation state

  if (!pdfUrl) {
    return <h1 className="text-center text-xl font-bold">No PDF to display</h1>;
  }

  return (
    <div className="w-screen h-screen">
      <embed src={pdfUrl} width="100%" height="100%" type="application/pdf" />
    </div>
  );
}

export default ViewPdf;
