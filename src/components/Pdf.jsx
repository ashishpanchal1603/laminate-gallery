import pdfList from "../utils/pdfList";
import { useNavigate } from "react-router";

function Pdf() {
  const navigate = useNavigate();

  const handleViewPdf = (pdfUrl) => {
    navigate("/view-pdf", { state: { pdfUrl } });
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">All PDFs</h1>
      <div className="grid grid-cols-2 gap-6">
        {pdfList?.map((item) => (
          <div key={item.id} className="relative group">
            {/* Image */}
            <img src={item.image} alt={item.name} className="w-full h-auto rounded-lg shadow-md" />

            {/* Buttons (Appear on Hover) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              {/* View PDF Button */}
              <button
                onClick={() => handleViewPdf(item.pdf)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2 hover:bg-blue-600"
              >
                View PDF
              </button>
              {/* Download PDF Button */}
              <a
                href={item.pdf}
                download={item.name}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pdf;
