import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const CustomPdfViewer = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  
  // 1. Set up a state to hold the dynamic width, defaulting to your original 800
  const [containerWidth, setContainerWidth] = useState(800);

  // 2. Listen for the screen size to change
  useEffect(() => {
    const handleResize = () => {
      // Calculate the width: take the full window width, subtract 48px for margins, 
      // but never let it grow larger than 800px on desktop monitors.
      const newWidth = Math.min(window.innerWidth - 48, 800);
      setContainerWidth(newWidth);
    };

    // Run it once immediately to set the initial size
    handleResize();

    // Attach the listener so it updates if they rotate their phone
    window.addEventListener('resize', handleResize);
    
    // Clean up the listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        {Array.from(new Array(numPages), (el, index) => (
          <div key={`page_${index + 1}`} style={{ marginBottom: '24px' }}>
            <Page 
              pageNumber={index + 1} 
              renderTextLayer={false} 
              renderAnnotationLayer={false} 
              
              // 3. Pass the dynamic width down to the canvas
              width={containerWidth} 
            />
          </div>
        ))}
      </Document>
    </div>
  );
};

export default CustomPdfViewer;