import React from 'react';
import { Button } from 'react-bootstrap';

const generateCSV = () => {
  const headers = ['Column1', 'Column2', 'Column3'];
  const rows = [
    ['Row1Col1', 'Row1Col2', 'Row1Col3'],
    ['Row2Col1', 'Row2Col2', 'Row2Col3'],
    ['Row3Col1', 'Row3Col2', 'Row3Col3'],
  ];

  let csvContent = "data:text/csv;charset=utf-8," 
    + headers.join(',') + '\n'
    + rows.map(e => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "error_report.csv");
  document.body.appendChild(link);
  link.click();
};

const Error = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 Page not found</h1>
      <Button variant="outline-danger" onClick={generateCSV}>Download Error Report</Button>
    </div>
  );
};

export default Error;
