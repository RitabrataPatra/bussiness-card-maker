import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import BusinessCard from './BusinessCard';
import Button from '@mui/material/Button';

const Preview = ({ Values }) => {
  const bcRef = useRef();

  const handleDownload = async (format) => {
    const element = bcRef.current;

    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const dataUrl = canvas.toDataURL(`image/${format.toLowerCase()}`);

    if (format === 'PDF') {
      const pdf = new jsPDF('portrait', 'px', [canvas.width, canvas.height]);
      pdf.addImage(dataUrl, 'JPEG', 0, 0, canvas.width, canvas.height);
      pdf.save(`${Values.Name || 'business-card'}.pdf`);
    } else {
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `${Values.Name || 'business-card'}.${format.toLowerCase()}`;
      link.click();
    }
  };

  return (
    <section className="Preview">
      <h2>Preview</h2>
      <pre>{JSON.stringify(Values, null, 2)}</pre>
      <div className="Preview-wrapper" ref={bcRef}>
        <BusinessCard Values={Values} />
      </div>
      <div className="Preview-actions">
        <Button
          variant="outlined"
          size="medium"
          color="primary"
          onClick={() => handleDownload('PDF')}
        >
          Save as PDF
        </Button>
        <Button
          variant="contained"
          size="medium"
          onClick={() => handleDownload('PNG')}
        >
          Save as PNG
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          onClick={() => handleDownload('JPEG')}
        >
          Save as JPEG
        </Button>
      </div>
    </section>
  );
};

export default Preview;
