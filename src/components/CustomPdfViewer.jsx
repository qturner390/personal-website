import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const CustomPdfViewer = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);

  // This function runs the moment the PDF successfully loads
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="custom-pdf-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Document 
        file={fileUrl} 
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => console.error("Error loading PDF:", error)}
      >
        {/* Loop through the total number of pages and render a Page component for each */}
        {Array.from(new Array(numPages), (el, index) => (
          <div key={`page_${index + 1}`} style={{ marginBottom: '24px' }}>
            <Page 
              pageNumber={index + 1} 
              renderTextLayer={false} 
              renderAnnotationLayer={false} 
              width={800} // Shrink this if it's too wide for your container
            />
          </div>
        ))}
      </Document>
    </div>
  );
};

export default CustomPdfViewer;