import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { text } from 'stream/consumers';

import jsPDF from 'jspdf';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-generate-pdf',
  standalone: true,
  imports: [],
  templateUrl: './generate-pdf.component.html',
  styleUrl: './generate-pdf.component.css'
})
export class GeneratePdfComponent implements OnInit {

  ngOnInit(): void {}

  constructor() { }

  title = 'pdfmake-example';

  // ---------------------------static pdf as per design -------------------------------
  // generatePDF() {
  //   const documentDefinition: any = {
  //     content: [
  //       // First Table
  //       {
  //         canvas: [
  //           {
  //             type: 'rect',
  //             x: 0, // Start at the leftmost position
  //             y: 0, // Start right after the second table
  //             w: 555, // Full width for A4 size PDF (adjust if needed)
  //             h: 38, // Height of the rectangle (adjust as needed)
  //             r: 10, // Rounded corners only at the top
  //             lineWidth: 0.5, // Line width for the border
  //             lineColor: '#87CEEB', // Border color
  //             color: '#f0f8ff', // Background color inside the rectangle (optional)
  //           },
  //         ],
  //       },
  //       {
  //         table: {
  //           widths: ['5%', '30%', '5%', '10%', '10%', '15%', '25%'],
  //           body: [
  //             [
  //               { text: 'logo', style: 'header', rowSpan: 2, alignment: 'center', margin: [0, 10, 0, 10], color: '#3f7f89', bold: true },
  //               {
  //                 text: 'Abcd Pqr Xyz',
  //                 style: 'header',
  //                 rowSpan: 2,
  //                 alignment: 'left',
  //                 margin: [0, 10],
  //                 fillColor: '#f0f8ff',
  //                 color: '#3f7f89',
  //                 bold: true
  //               },
  //               { text: 'Ward', style: 'header', alignment: 'left', color: '#3f7f89', bold: true },
  //               { text: 'Bed No.', style: 'header', alignment: 'left', color: '#3f7f89', bold: true },
  //               { text: 'Doctor Name', style: 'header', alignment: 'left', color: '#3f7f89', bold: true },
  //               { text: 'Approval', style: 'header', alignment: 'left', color: '#3f7f89', bold: true },
  //               { text: 'Insurance name', style: 'header', alignment: 'left', color: '#3f7f89', bold: true }
  //             ],
  //             [
  //               {}, {}, { text: 'icu', style: 'tableContent' },
  //               { text: '1', style: 'tableContent' },
  //               { text: 'Dr.', style: 'tableContent' },
  //               { text: '-', style: 'tableContent' },
  //               { text: 'Insurance', style: 'tableContent' }
  //             ],
  //           ],
  //         },
  //         layout: {
  //           hLineWidth: () => 0, // No horizontal lines
  //           vLineWidth: () => 0, // No vertical lines
  //           // hLineColor: () => '#87CEEB',
  //           // vLineColor: () => '#87CEEB',
  //         },
  //         absolutePosition: {x: 20, y: 20}
  //       },
        
  //       // Space between tables
  //       // { text: '\n' },
  
  //       // Second Table
  //       {
  //         table: {
  //           widths: ['8%', '8%', '10%', '10%', '10%', '10%', '10%', '14%', '12%', '8%'], // Adjusted widths
  //           body: [
  //             // Header row with 10 columns
  //             [
  //               { text: 'BP', style: 'tableHeader', color: '#25616b' },
  //               { text: 'Temp', style: 'tableHeader', color: '#25616b' },
  //               { text: 'Allergy', style: 'tableHeader', color: '#25616b' },
  //               { text: 'Height', style: 'tableHeader', color: '#25616b' },
  //               { text: 'Weight', style: 'tableHeader', color: '#25616b' },
  //               { text: 'Blood Group', style: 'tableHeader', color: '#25616b' },
  //               { text: 'Results', style: 'tableHeader', color: '#25616b' },
  //               { text: 'Admin Date', style: 'tableHeader', color: '#25616b', noWrap: true },
  //               { text: 'Exp Discharge Date', style: 'tableHeader', color: '#25616b', colSpan: 2 },
  //             ],
  //             // One content row with 10 columns
  //             [
  //               { text: '122/79', style: 'tableContent', alignment: 'center' },
  //               { text: '39 c', style: 'tableContent', alignment: 'center' },
  //               { text: 'Yes', style: 'tableContent', alignment: 'center' },
  //               { text: '170 Cm(s)', style: 'tableContent', alignment: 'center' },
  //               { text: '65 Kg(s)', style: 'tableContent', alignment: 'center' },
  //               { text: 'A+ve', style: 'tableContent', alignment: 'center' },
  //               { text: '', style: 'tableContent', alignment: 'center' },
  //               { text: '10-Oct-2024 11:15', style: 'tableContent', alignment: 'center', noWrap: true },
  //               { text: '15-Oct-2024', style: 'tableContent', alignment: 'center', colSpan: 2 },
  //             ]
  //           ]
  //         },
  //         layout: {
  //           hLineWidth: () => 0, // No horizontal lines
  //           vLineWidth: (i: number) => (i === 0 || i === 10 ? 0 : 0.5), // Right border for each cell
  //           hLineColor: () => '#ffffff', // No horizontal line color
  //           vLineColor: () => '#87CEEB' // Right border color
  //         },
  //         margin: [0, 5, 0, 0] // Add some margin after the table
  //       },

  //       // { text: '\n' },
       
  //       // Full-width canvas below the second table
  //       {
  //         canvas: [
  //           {
  //             type: 'rect',
  //             x: 0, // Start at the leftmost position
  //             y: 0, // Start right after the second table
  //             w: 555, // Full width for A4 size PDF (adjust if needed)
  //             h: 40, // Height of the rectangle (adjust as needed)
  //             r: 10, // Rounded corners only at the top
  //             lineWidth: 0.5, // Line width for the border
  //             lineColor: '#87CEEB', // Border color
  //             color: '#f0f8ff', // Background color inside the rectangle (optional)
  //           },
  //         ],
  //         margin: [0, 5, 0, 0] // Add some margin after the canvas
  //       },

  //       {
  //         text: 'Code Blue Documentation Form (A)',
  //         fontSize: 10,
  //         bold: true,
  //         color: '#3f7f89', // Header text color
  //         absolutePosition: { x: 35, y: 105 }, // Position the text at the top left of the canvas
  //       },

  //       // New canvas for the bottom part without background color
  //       {
  //         canvas: [
  //           {
  //             type: 'rect',
  //             x: 0, // Start at the leftmost position
  //             y: -10, // Start right after the line
  //             w: 555, // Full width for A4 size PDF (adjust if needed)
  //             h: 675, // Height of the rectangle (adjust as needed) 675
  //             r: 0, // No border radius
  //             lineWidth: 0.5, // Line width for the border
  //             lineColor: '#87CEEB', // Border color
  //             color: '#ffffff' // No background color
  //           },
  //            // Second (inner) canvas with margin
  //           {
  //             type: 'rect',
  //             x: 10, // 10 points right from the left edge of the outer canvas
  //             y: 0, // Position relative to the outer canvas
  //             w: 535, // 555 (outer canvas width) - 20 (10pt margin on each side)
  //             h: 100, // 675 (outer canvas height) - 20 (10pt margin on top and bottom)
  //             r: 5, // No border radius
  //             lineWidth: 0.5, // Line width for the border
  //             lineColor: '#87CEEB', // Border color for the inner canvas (you can change this)
  //             color: '#ffffff' // Background color for the inner canvas
  //           },
  //           {
  //             type: 'rect',
  //             x: 10, // 10 points right from the left edge of the outer canvas
  //             y: 100+10, // Position relative to the outer canvas
  //             w: 535, // 555 (outer canvas width) - 20 (10pt margin on each side)
  //             h: 50, // 675 (outer canvas height) - 20 (10pt margin on top and bottom)
  //             r: 5, // No border radius
  //             lineWidth: 0.5, // Line width for the border
  //             lineColor: '#87CEEB', // Border color for the inner canvas (you can change this)
  //             color: '#ffffff' // Background color for the inner canvas
  //           },
  //           {
  //             type: 'rect',
  //             x: 10, // 10 points right from the left edge of the outer canvas
  //             y: 100+50+20, // Position relative to the outer canvas
  //             w: 535, // 555 (outer canvas width) - 20 (10pt margin on each side)
  //             h: 200, // 675 (outer canvas height) - 20 (10pt margin on top and bottom)
  //             r: 5, // No border radius
  //             lineWidth: 0.5, // Line width for the border
  //             lineColor: '#87CEEB', // Border color for the inner canvas (you can change this)
  //             color: '#ffffff' // Background color for the inner canvas
  //           },
  //           {
  //             type: 'rect',
  //             x: 10, // 10 points right from the left edge of the outer canvas
  //             y: 100+50+200+30, // Position relative to the outer canvas
  //             w: 535, // 555 (outer canvas width) - 20 (10pt margin on each side)
  //             h: 100, // 675 (outer canvas height) - 20 (10pt margin on top and bottom)
  //             r: 5, // No border radius
  //             lineWidth: 0.5, // Line width for the border
  //             lineColor: '#87CEEB', // Border color for the inner canvas (you can change this)
  //             color: '#ffffff' // Background color for the inner canvas
  //           },
  //           {
  //             type: 'rect',
  //             x: 10, // 10 points right from the left edge of the outer canvas
  //             y: 100+50+200+100+40, // Position relative to the outer canvas
  //             w: 535, // 555 (outer canvas width) - 20 (10pt margin on each side)
  //             h: 50, // 675 (outer canvas height) - 20 (10pt margin on top and bottom)
  //             r: 5, // No border radius
  //             lineWidth: 0.5, // Line width for the border
  //             lineColor: '#87CEEB', // Border color for the inner canvas (you can change this)
  //             color: '#ffffff' // Background color for the inner canvas
  //           },
  //           {
  //             type: 'rect',
  //             x: 10, // 10 points right from the left edge of the outer canvas
  //             y: 100+50+200+100+50+50, // Position relative to the outer canvas
  //             w: 535, // 555 (outer canvas width) - 20 (10pt margin on each side)
  //             h: 100, // 675 (outer canvas height) - 20 (10pt margin on top and bottom)
  //             r: 5, // No border radius
  //             lineWidth: 0.5, // Line width for the border
  //             lineColor: '#87CEEB', // Border color for the inner canvas (you can change this)
  //             color: '#ffffff' // Background color for the inner canvas
  //           },
  //         ],
  //         margin: [0, 0, 0, 0] // Add some margin after the canvas
  //       },

  //     ],
  //     styles: {
  //       header: {
  //         fontSize: 8,
  //         bold: false,
  //         margin: [0, 0, 0, 0],
  //       },
  //       tableContent: {
  //         fontSize: 8,
  //       },
  //       tableHeader: {
  //         fontSize: 8,
  //         bold: true,
  //         alignment: 'center'
  //       },
  //       defaultStyle: {
  //         fontSize: 8,
  //       },
  //     },
  //     pageSize: 'A4',
  //     pageMargins: [20, 20, 20, 20],
  //   };
  
  //   const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
  //   pdfDocGenerator.getBlob((blob) => {
  //     const url = URL.createObjectURL(blob);
  //     window.open(url); // Opens the PDF in a new tab
  //   });
  // }


// ---------------------------Displaying table row by continue on next page -------------------------------
// generatePDF() {
//   const docDefinition:any = {
//     header: this.getHeader(),
//     footer: (currentPage: number, pageCount: number) => this.getFooter(currentPage, pageCount),
//     content: [
//       {
//         text: 'Your Content Here',
//         style: 'content'
//       },
//       this.createTable(),
//       // You can add more tables or content as needed
//     ],
//     styles: {
//       content: {
//         margin: [0, 20, 0, 20],
//         fontSize: 12,
//       },
//       table: {
//         margin: [0, 10, 0, 10],
//       }
//     },
//     pageMargins: [40, 60, 40, 60], // Adjust margins as needed
//   };

//   const pdfDocGenerator = pdfMake.createPdf(docDefinition);
//   pdfDocGenerator.getBlob((blob) => {
//     const url = URL.createObjectURL(blob);
//     window.open(url); // Opens the PDF in a new tab
//   });
// }

// getHeader() {
//   return {
//     text: 'Your Header Text',
//     alignment: 'center',
//     margin: [0, 20],
//     fontSize: 15,
//   };
// }

// getFooter(currentPage: number, pageCount: number) {
//   return {
//     text: `Page ${currentPage} of ${pageCount}`,
//     alignment: 'center',
//     margin: [0, 20],
//     fontSize: 10,
//   };
// }

// createTable() {
//   const tableData = this.getTableData(); // Fetch or define your table data here

//   const table = {
//     style: 'table',
//     table: {
//       headerRows: 1,
//       widths: ['*', '*', '*', '*', '*'], // Adjust as needed

//       body: [
//         ['Header 1', 'Header 2', 'Header 3', 'Header 4', 'Header 5'], // Header Row
//         ...tableData // Add your table data here
//       ]
//     },
//     layout: 'lightHorizontalLines',
//   };

//   // Handling for pagination
//   return {
//     stack: [
//       table,
//       { text: '', pageBreak: 'before' }, // Adds a page break before the next table if needed
//     ],
//   };
// }

// getTableData() {
//   // Return the array of data for the table
//   // Example:
//   const data = [];
//   for (let i = 0; i < 50; i++) { // Example for 50 rows
//     data.push([`Row ${i + 1} Col 1`, `Row ${i + 1} Col 2`, `Row ${i + 1} Col 3`, `Row ${i + 1} Col 4`, `Row ${i + 1} Col 5`]);
//   }
//   return data;
// }

// ---------------------------displaying tables dynamically depends on table height -------------------------------

generatePDF() {
  const documentDefinition: any = {
    pageSize: 'A4',
    pageMargins: [20, 30, 20, 20], 
    content: [],
    styles: {
      header: {
        fontSize: 8,
        bold: true,
        color: '#3f7f89'
      },
      tableHeader: {
        fontSize: 10,
        bold: true,
        fillColor: '#ecf6f8',
        alignment: 'left',
        color: '#3f7f89',
        noWrap: true,
      },
      tableContent: {
        fontSize: 8,
        color: '#3f7f89',
        noWrap: true,
      },
      footerText: {
        fontSize: 8,
        alignment: 'center',
        color: '#3f7f89'
      },
    },

    background: function () {
      return [
        {
          canvas: [
            // Top border
            { type: 'line', x1: 10, y1: 10, x2: 585, y2: 10, lineWidth: 1, color: '#87CEEB' }, // Width and positions are relative to A4 size
            // Bottom border
            { type: 'line', x1: 10, y1: 832, x2: 585, y2: 832, lineWidth: 1, color: '#87CEEB' },
            // Left border
            { type: 'line', x1: 10, y1: 10, x2: 10, y2: 832, lineWidth: 1, color: '#87CEEB' },
            // Right border
            { type: 'line', x1: 585, y1: 10, x2: 585, y2: 832, lineWidth: 1, color: '#87CEEB' },
          ],
        },
      ];
    },

    header: {},
    footer: {},
  };

  const headerHeight = 0;
  const footerHeight = 0;
  const pageHeight = 842; // A4 page height in points (fixed)
  const availableContentHeight = 660// Initial content height for the first page

  // Header section.
  const headerSection = {
    text: 'Header Section - PDF Title or Logo',
    alignment: 'center',
    style: 'header',
    margin: [0, 10, 0, 0],
  };

  // Footer section.
  const footerSection = (currentPage: number, pageCount: number) => ({
    text: `Page ${currentPage} of ${pageCount}`,
    style: 'footerText',
    margin: [0, 0, 0, 0],
  });

  // Generate a sample table with specified rows.
  // const generateTable = (rows: number) => ({
  //   table: {
  //     widths: ['10%', '25%', '10%', '10%', '15%', '15%', '15%'],
  //     body: [
  //       [
  //         { text: 'Logo', style: 'tableHeader' },
  //         { text: 'Patient Name', style: 'tableHeader' },
  //         { text: 'Ward', style: 'tableHeader' },
  //         { text: 'Bed No.', style: 'tableHeader' },
  //         { text: 'Doctor Name', style: 'tableHeader' },
  //         { text: 'Approval', style: 'tableHeader' },
  //         { text: 'Insurance Name', style: 'tableHeader' }
  //       ],
  //       ...Array(rows).fill(0).map(() => [
  //         { text: 'logo', style: 'tableContent' },
  //         { text: 'Abcd Pqr Xyz', style: 'tableContent' },
  //         { text: 'ICU', style: 'tableContent' },
  //         { text: '1', style: 'tableContent' },
  //         { text: 'Dr.', style: 'tableContent' },
  //         { text: '-', style: 'tableContent' },
  //         { text: 'Insurance', style: 'tableContent' }
  //       ]),
  //     ]
  //   },
  //   layout: 'lightHorizontalLines', // Apply some default styling for the table
  //   margin: [0, 0, 0, 10] // Margin around each table
  // });

  const generateTable = (columns: string[], data: any[]) => {
    // Calculate the width of each column to make the table take up the full width of the page.
    const columnCount = columns.length;
    const columnWidth = (100 / columnCount).toFixed(2) + '%'; // Split width equally for all columns
    const columnWidths = Array(columnCount).fill(columnWidth); // Create an array of widths for each column
  
    // Create the header row based on the columns array.
    const headerRow = columns.map((col) => ({ text: col, style: 'tableHeader' }));
  
    // Create table rows using the provided data array.
    const tableBody = [
      headerRow, // Add the header row at the top of the table
      ...data.map((row) =>
        row.map((cell:any) => ({ text: cell, style: 'tableContent' })) // Map each cell in the row to a table content cell
      ),
    ];

    const customLayout = {
      hLineWidth: (i: number) => (i === 0 || i === tableBody.length ? 0.1 : 0), // Draw top and bottom lines
      vLineWidth: (i: number) => (i === 0 || i === columnCount ? 0.1 : 0), // Draw left and right lines
      hLineColor: '#87CEEB',
      vLineColor: '#87CEEB',
      // paddingLeft: (i: number) => 4, // Padding inside cells
      // paddingRight: (i: number) => 4, // Padding inside cells
      // paddingTop: (i: number) => 2, // Padding on top
      // paddingBottom: (i: number) => 2, // Padding on bottom
    };
  
    // Return the table definition object.
    return {
      table: {
        widths: columnWidths, // Apply dynamic widths for each column
        body: tableBody, // Use the dynamically generated table body
        heights: (rowIndex: number) => 20, // Set a fixed height of 20 points for each row
      },
      layout: customLayout, // Apply default table layout styling
      margin: [0, 0, 0, 10], // Set margin around the table
    };
  };
  

  // Function to calculate the height of the table (approximation).
  const calculateTableHeight = (rows: number) => {
    const rowHeight = 20;
    const marginBottom = 10;
    return (rowHeight * rows) + marginBottom;
  };

  // Array of tables to be added to the document.
  const inOutPatientTableColumns = ['Inpatient', 'Outpatient', '', '', ''];
  const inOutPatientTableData = [
    ['Patient ID', '', 'Date', 'Time', 'Area / Unit'],
    ['456123', '', '09-Oct-2024', '00.00', 'ICCU / ICU 9 ISO'],
    ['Witnessed By:abcd', '', 'Call Out', 'Phone', ''],
    ['Yes', '', 'No', 'Yes', ''],
    // Add more rows as needed
  ];

  const resuscitationTableColumns = ['Resuscitation', '', '', '', ''];
  const resuscitationTableData = [
    ['Time Initiated', 'Time Ended', 'Length of code', '', ''],
    ['00', '00', '', '', ''],
  ];

  const respondersTableColumns = ['Responders', '', '', ''];
  const respondersTableData = [
    ['NAME', 'ID NO.', 'TIME', 'SPECIALITY'],
    ['search', '', '00.00', ''],
    ['search', '', '00.00', ''],
    ['search', '', '00.00', ''],
    ['search', '', '00.00', ''],
    ['search', '', '00.00', ''],
    ['search', '', '00.00', ''],
    ['search', '', '00.00', ''],
  ];

  const patientInitialAssessmentTableColumns = ['Patient Initial Assessment (On Arrival)', '', '', '', ''];
  const patientInitialAssessmentTableData = [
    ['Response', 'Spont. Resp.', 'Rate', 'Carotid Pulse',''],
    ['Yes', 'No', '10 c/m', 'Yes',''],
    ['Pupils Reactivity', '', 'Cardiac Rate', '',''],
    ['No', '', '20 b/m', '',''],
    ['Rhythm','','Sysncrinized Pulseless Ventricular Tachycardia','','Blood Pressure'],
    ['Asynchronized Ventricular Fibrillation', '', '00.00', '',''],
    ['Saturation', 'Witness', 'DOA', '',''],
    ['10%', '', '20 mg/dl', '',''],
  ];

  const preArrestStateTableColumns = ['Pre- Arrest State', '', '', '', '', ''];
  const preArrestStateTableData = [
    ['Cardiac Monitor','ET Tube.','Ventilation','IV in situ','Central Line','Others'],
    ['Yes','No','Yes','Yes','No','No'],
    ['Cardiac Monitor','ET Tube.','Ventilation','IV in situ','Central Line','Others'],
    ['Yes','No','Yes','Yes','No','No'],
  ];

  const procedureTableColumns = ['Procedure','', '', ''];
  const procedureTableData = [
    ['Monitor','Open Airway','Ambu Bag','Backboard'],
    ['Yes','No','Yes','Yes',],
    ['Chest Comp','Intubation','Ventilation','IV Access'],
    ['No','No','Yes','Yes',],
    ['ABG','ECG','Central Line','Pacemekar'],
    ['No','No','No','Yes',],
    ['Others','','',''],
    ['No','','',''],
  ];

  const defibrillationTableColumns = ['Defibrillation', '', '', ''];
  const defibrillationTableData = [
    ['Rhythm', 'Joules / Type', 'Time', 'Remarks'],
    ['', 'Neonates/F', '00.00', ''],
    ['', '', '00.00', ''],
    ['', '', '00.00', ''],
    ['', '', '00.00', ''],
  ];

  const medicationTableColumns = ['Medication', '', '', '',''];
  const medicationTableData = [
    ['Type', 'Dose', 'Time', 'Route', 'Remarks'],
    ['', '', '00.00', '', ''],
    ['', '', '00.00', '', ''],
    ['', '', '00.00', '', ''],
    ['', '', '00.00', '', ''],
  ];

  const patietResponseTableColumns = ['Patiet Response', '', '', '',''];
  const patietResponseTableData = [
    ['Successfull risuscitation', 'Unsuccessfull risuscitation', '', '', ''],
    ['Vital Signs Post Resuscitation', '', '', '', ''],
    ['BP', 'Pulse', 'RR', 'Temp', 'O2 Saturation'],
    ['ABG', 'ECG', 'Transfer to', '', ''],
    ['Yes', 'No', 'ICU', '', ''],
  ];

  const nurseNotesTableColumns = ['Nurse notes', '', '',];
  const nurseNotesTableData = [
    ['Swift Declaration', '', 'Remarks'],
    ['Nurse Attendanded number', '3', ''],
    ['IV line insertion', 'Radial vein', ''],
    ['Medication Given: Total number given', '', ''],
    ['CPR Team Leader Number attended', '3', ''],
  ];

  const signatureTableColumns = ['Signature', '', '',];
  const signatureTableData = [
    ['ID No.', 'Name', 'Signature'],
    ['4565', 'abcd xyz', ''],
    ['Date', '', ''],
    ['', '', ''],
  ];

  const physicianNotesTableColumns = ['Physician notes', '', '',];
  const physicianNotesTableData = [
    ['Diagnosis', '', ''],
    ['Acute case', 'Chronic case', 'DOA'],
    ['', '', 'Remarks'],
    ['Intubation time:', '', ''],
    ['Cause of Arrest:', '', ''],
    ['Team number and specialities:', '', ''],
    ['Outcome', 'Successfull', ''],
    ['Negative notes', '', ''],
  ];

  const remarksTableColumns = ['Remarks', '', '',''];
  const remarksTableData = [
    ['Team Leader', '', 'Team Recorder',''],
    ['', 'Signature', '','Signature'],
  ];

  const tables = [
    generateTable(inOutPatientTableColumns, inOutPatientTableData),
    generateTable(resuscitationTableColumns, resuscitationTableData),
    generateTable(respondersTableColumns, respondersTableData),
    generateTable(patientInitialAssessmentTableColumns, patientInitialAssessmentTableData),
    generateTable(preArrestStateTableColumns, preArrestStateTableData),
    generateTable(procedureTableColumns, procedureTableData),
    generateTable(defibrillationTableColumns, defibrillationTableData),
    generateTable(medicationTableColumns, medicationTableData),
    generateTable(patietResponseTableColumns, patietResponseTableData),
    generateTable(nurseNotesTableColumns, nurseNotesTableData),
    generateTable(signatureTableColumns, signatureTableData),
    generateTable(physicianNotesTableColumns, physicianNotesTableData),
    generateTable(signatureTableColumns, signatureTableData),
    generateTable(remarksTableColumns, remarksTableData),
  ];

  // Track the current content height for the page.
  let currentContentHeight = availableContentHeight ; // Initialize with full available content height for the first page
  let currentPage = 1; // Start on the first page

  const addTableToDocument = (table:any) => {
    const tableHeight = calculateTableHeight(table.table.body.length); // Calculate height of the table
    console.log(currentContentHeight);
    console.log(tableHeight);
    
    if (tableHeight > currentContentHeight) {
        // If the table height exceeds the current page's content height, create a new page.
        documentDefinition.content.push({ text: '', pageBreak: 'after' });
        
        // Update the current content height for the new page
        currentContentHeight = availableContentHeight; 
        console.log('after page add',currentContentHeight);
        
        // Add the table to the new page
        documentDefinition.content.push(table);
        
        // Update the current content height
        currentContentHeight -= tableHeight;
        currentPage++; // Move to the next page
    } else {
        // If the table fits within the current content height, add it to the current page.
        documentDefinition.content.push(table);
        currentContentHeight -= tableHeight;
    }
};
  // Loop through each table and add it to the document content.
  // for (const table of tables) {
  //   const tableHeight = calculateTableHeight(table.table.body.length);
  //   // Check if the table, in its entirety, can fit within the current available content height on this page.
  //   if (tableHeight > currentContentHeight) {
  //     // If the table height is greater than the remaining content height, add a page break
  //     // and place the table at the top of the new page.
  //     documentDefinition.content.push({ text: '', pageBreak: 'after' });
  //     currentContentHeight = availableContentHeight;
      
  //     // Add the table at the top of the new page.
  //     documentDefinition.content.push(table);
  //     // availableContentHeight = pageHeight - headerHeight - footerHeight;
  //     // Reset the current content height to the new page's available height after adding the table.
  //     currentContentHeight -=  tableHeight;

  //   } else {
  //     // If the table fits within the remaining height, add it to the current page.
  //     documentDefinition.content.push(table);

  //     // Update the current content height tracker after adding the table.
  //     currentContentHeight -= tableHeight;

  //   }
  // }

  tables.forEach(table => {
    addTableToDocument(table);
});

  // Add header and footer to the document definition.
  documentDefinition.header = headerSection;
  documentDefinition.footer = footerSection;

  // Generate and display the PDF.
  const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
  pdfDocGenerator.getBlob((blob) => {
    const url = URL.createObjectURL(blob);
    window.open(url); // Opens the PDF in a new tab
  });
}

// ---------------------------Displaying table row by continue on next page -------------------------------

// generatePDF() {
//   const docDefinition:any = {
//     content: [
//       {
//         canvas: [
//           {
//             type: 'rect',
//             x: 0, // Start at the leftmost position
//             y: -10, // Start just above the top of the page
//             w: 555, // Full width for A4 size PDF
//             h: 900, // Height of the rectangle
//             r: 0, // No border radius
//             lineWidth: 0.5, // Line width for the border
//             lineColor: '#87CEEB', // Border color
//             color: '#ffffff' // Background color
//           }
//         ]
//       },
//       {
//         text: 'Your content here',
//         margin: [10, 10, 0, 0], // Adjust margin as needed
//         pageBreak: 'before' // Prevent content from going to the next page
//       },
//       // Add more content as needed, it will be ignored in terms of page break
//     ],
//     pageSize: 'A4', // Keep the page size as A4
//     pageMargins: [40, 60, 40, 60], // Adjust margins if needed
//   };
  

//   // Generate and open the PDF in a new window
//   pdfMake.createPdf(docDefinition).open(); const pdfDocGenerator = pdfMake.createPdf(docDefinition);
//   pdfDocGenerator.getBlob((blob) => {
//     const url = URL.createObjectURL(blob);
//     window.open(url); // Opens the PDF in a new tab
//   });
// }

// ---------------------------Displaying table border continue on all page -------------------------------

// generatePDF() {
//   const doc = new jsPDF();

//   // Set the outer border margins and content dimensions
//   const outerMargin = 10; // Outer margin from page edges
//   const pageWidth = doc.internal.pageSize.getWidth(); // Full page width
//   const pageHeight = doc.internal.pageSize.getHeight(); // Full page height
//   const contentWidth = pageWidth - outerMargin * 2; // Inner width for content
//   const contentHeight = pageHeight - outerMargin * 2; // Inner height for content

//   const setBorderColor = () => {
//     doc.setDrawColor(135, 206, 235); // Set the RGB color values for borders
//   };

//   const drawAllBorders = () => {
//     setBorderColor();
//     doc.setLineWidth(0.1); // Set line width for borders
//     doc.line(outerMargin, outerMargin, outerMargin + contentWidth, outerMargin); // x1- x start, y1 - y start, x2 - x end, y2 - y end
//     doc.line(outerMargin, outerMargin, outerMargin, 30); // Draw left border
//     doc.line(outerMargin + contentWidth, outerMargin, outerMargin + contentWidth, 30); // Draw right border
//     doc.line(outerMargin, 30, outerMargin + contentWidth, 30); // Draw bottom border
//   };

//   // Function to draw top, left, and right borders
//   const drawTopLeftRightBorders = () => {
//     setBorderColor();
//     doc.setLineWidth(0.1); // Set line width for borders
//     doc.line(outerMargin, 50, outerMargin + contentWidth, 50); // Draw top border
//     doc.line(outerMargin, 50, outerMargin, outerMargin + contentHeight); // Draw left border
//     doc.line(outerMargin + contentWidth, 50, outerMargin + contentWidth, outerMargin + contentHeight); // Draw right border

//     // doc.line(outerMargin, contentHeight+outerMargin, outerMargin + contentWidth, contentHeight+outerMargin);// Draw bottom border
//   };

//   // Function to draw left and right borders
//   const drawLeftRightBorders = () => {
//     setBorderColor();
//     doc.setLineWidth(0.1); // Set line width for borders
//     // doc.line(outerMargin, outerMargin, outerMargin + contentWidth, outerMargin); // Draw top border

//     doc.line(outerMargin, outerMargin, outerMargin, outerMargin + contentHeight); // Draw left border
//     doc.line(outerMargin + contentWidth, outerMargin, outerMargin + contentWidth, outerMargin + contentHeight); // Draw right border

//     // doc.line(outerMargin, contentHeight+outerMargin, outerMargin + contentWidth, contentHeight+outerMargin);// Draw bottom border
//   };

//   // Function to draw left, right, and bottom borders
//   const drawLeftRightBottomBorders = () => {
//     setBorderColor();
//     doc.setLineWidth(0.1); // Set line width for borders
//     // doc.line(outerMargin, outerMargin, outerMargin + contentWidth, outerMargin); // Draw top border

//     doc.line(outerMargin, outerMargin, outerMargin, outerMargin + 100); // Draw left border
//     doc.line(outerMargin + contentWidth, outerMargin, outerMargin + contentWidth, outerMargin + 100); // Draw right border
//     doc.line(outerMargin, outerMargin + 100, outerMargin + contentWidth, outerMargin + 100); // Draw bottom border
//   };

//   // Function to draw a table with only an outer border and specified margin and starting Y position
//   const drawTable = (rows: number, columns: number, tableMargin: number, startY: number,
//     textContent?: string[][],borderRadius?:number,showHeader?: boolean) => {
//     const tableWidth = contentWidth - tableMargin * 2;
//     const rowHeight = 6; // Height of each row in the table
//     const tableHeight = rows * rowHeight; // Set a fixed height for the table rows (e.g., 10 units per row)
//     const colWidth = tableWidth / columns; // Width of each column based on the number of columns
//     const currentYposition = startY + tableHeight + tableMargin; // Calculate the current Y position for the next table

//     // Calculate table's position
//     const startX = outerMargin + tableMargin; // Table's x position within the outer border

//     // if (backgroundColor) {
//     //   doc.setFillColor(240, 248, 255);
//     //   if (borderRadius) {
//     //     doc.roundedRect(startX, startY, tableWidth, tableHeight, borderRadius, borderRadius, 'F'); // Draw rounded rectangle with fill
//     //   }else{
//     //     doc.rect(startX, startY, tableWidth, tableHeight, 'F'); // 'F' fills the rectangle with the fill color
//     //   }
//     // }
//     setBorderColor();

//     // Draw outer border for the table
//     doc.setLineWidth(0.1);
//     if (borderRadius) {
//       doc.roundedRect(startX, startY, tableWidth, tableHeight, borderRadius, borderRadius, 'S'); // Draw rounded rectangle for stroke
//     } else{
//       doc.rect(startX, startY, tableWidth, tableHeight);
//     }

//     if (showHeader && textContent && textContent.length > 0) {
//       const headerText = textContent[0];
//       const headerYPosition = startY; // Y position for header row
  
//       // Fill header background color
//       doc.setFillColor(240, 248, 255); // Header background color
//       // doc.rect(startX, headerYPosition, tableWidth, rowHeight, 'F'); // Draw filled rectangle for header
//       doc.roundedRect(startX, headerYPosition, tableWidth, rowHeight, 2, 2, 'F'); // Draw rounded rectangle for header
//       // Set text color for header
//       doc.setFontSize(10);
//       doc.setTextColor(63, 127, 137); // White text color
//       headerText.forEach((text, colIndex) => {
//         const textX = startX + colIndex * colWidth + 2; // X position for text within each header cell
//         const textY = headerYPosition + 5; // Adjusted Y position for header text
//         doc.text(text, textX, textY); // Add the header text to the PDF
//       });
  
//       // Adjust content rows starting position
//       startY += rowHeight; // Move the startY down for the content rows
//       rows--; // Decrease the row count since we added a header row
//     }

//   // Draw content rows
//   if (textContent) {
//     doc.setFontSize(8); // Set font size for the text
//     doc.setTextColor(63, 127, 137);
//     textContent.forEach((row, rowIndex) => {
//       // Skip the header row in the content
//       if (showHeader && rowIndex === 0) return;

//       row.forEach((text, colIndex) => {
//         const textX = startX + colIndex * colWidth + 2; // X position for text within each cell
//         const textY = startY + rowIndex * rowHeight + 3; // Y position for text within each cell (adjusted for padding)
//         doc.text(text, textX, textY); // Add the text to the PDF
//       });
//     });
//   }

//     // const cellWidth = tableWidth / columns;
//     //  // Draw inner horizontal borders
//     // for (let i = 1; i < rows; i++) {
//     //   const y = startY + i * rowHeight;
//     //   doc.line(startX, y, startX + tableWidth, y); // Draw horizontal line across the table width
//     // }

//     // // Draw inner vertical borders
//     // for (let j = 1; j < columns; j++) {
//     //   const x = startX + j * cellWidth;
//     //   doc.line(x, startY, x, startY + tableHeight); // Draw vertical line down the table height
//     // }

//     return currentYposition; // Return the height of the table to calculate next table's position
//   };

//   const drawRightBorderTable = (
//     rows: number,
//     columns: number,
//     tableMargin: number,
//     startY: number,
//     textContent?: string[][],
//     borderRadius?: number
//   ) => {
//     const tableWidth = contentWidth - tableMargin * 2;
//     const rowHeight = 5; // Fixed height for each row in the table
//     const tableHeight = rows * rowHeight; // Total height of the table
//     const colWidth = tableWidth / columns; // Width of each column based on the number of columns
//     const startX = outerMargin + tableMargin; // Starting X position for the table
  
//     // Set the border color
//     setBorderColor(); // Ensure the border color is set as before
//     doc.setLineWidth(0.1); // Set the same line width for borders
  
//     // Draw the outer border of the table
//     // if (borderRadius) {
//     //   doc.roundedRect(startX, startY, tableWidth, tableHeight, borderRadius, borderRadius, 'S'); // Draw rounded outer border
//     // } else {
//     //   doc.rect(startX, startY, tableWidth, tableHeight); // Draw outer rectangle border
//     // }
  
//     // Draw the right inner borders for each cell in the table
//     for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
//       for (let colIndex = 0; colIndex < columns; colIndex++) {
//         const cellX = startX + (colIndex + 1) * colWidth; // Calculate the x-position for the right border
//         const cellYStart = startY + rowIndex * rowHeight; // Calculate the y start position for each row
//         const cellYEnd = cellYStart + rowHeight; // Calculate the y end position for each row
  
//         // Draw the right border line for each cell
//         doc.line(cellX, cellYStart, cellX, cellYEnd); // Draw the right border for each cell
//       }
//     }
  
//     // Add text content inside the table cells, if provided
//     if (textContent) {
//       doc.setFontSize(6); // Set the same font size
//       doc.setTextColor(63, 127, 137); // Set the same font color
//       textContent.forEach((row, rowIndex) => {
//         row.forEach((text, colIndex) => {
//           const textX = startX + colIndex * colWidth + 2; // X position for text within each cell
//           const textY = startY + rowIndex * rowHeight + 3; // Y position for text within each cell (adjusted for padding)
//           doc.text(text, textX, textY); // Add the text to the PDF at the calculated position
//         });
//       });
//     }
  
//     return startY + tableHeight + tableMargin; // Return the next Y position based on the height of the table
//   };
  

//   drawAllBorders();
//   // Draw borders for the first page (top, left, and right borders)

//   const mainTableText = [
//     ['BP','Temp','Allergy','Height','Weight','Blood Group','Results','Admit Date','Exp Discharrge Date'],
//     ['122/79','39 C','Yes','170 Cm(s)','65 Kg(s)','A +ve','','08-Oct-2024 10:15','20-Oct-2024'],
//   ];

//   const maintableHeight = drawRightBorderTable(2, 10, 0, 35,mainTableText,5);

//   drawTopLeftRightBorders();
  
//   const formHeaderText = [
//     ['Code Blue Documentation Form (A)'],
//   ];

//   const formHeaderHeight = drawTable(2, 1, 0, maintableHeight + 5,formHeaderText,0,true);

//   const firstTableData = [
//     ['Inpatient','Outpatient'],
//     ['Patient ID','','Date','','Time','Area / Unit:'],
//     ['123456789','','08-Oct-2024','','00.00','ICCU / ICU 9 ISO'],
//     ['Witnessed by:abcd','Call Out','Phone'],
//     ['Yes','Yes','No',],
//   ];
//   const firstTableHeight = drawTable(5, 6, 5, formHeaderHeight+5,firstTableData,2); // rows, columns, margin, starting Y position
  
//   const secondTableData = [
//     ['Resuscitation'],
//     ['Time Initiated','Time Ended','Length of code'],
//     ['00','00',''],
//   ];

//   const secondTableStartY = drawTable(4, 5, 5, firstTableHeight,secondTableData,2,true);

//   const thirdTableData = [
//     ['Responders'],
//     ['NAME','ID NO.','TIME','SPECIALITY'],
//     ['search','','00.00',''],
//     ['search','','00.00',''],
//     ['search','','00.00',''],
//     ['search','','00.00',''],
//     ['search','','00.00',''],
//     ['search','','00.00',''],
//     ['search','','00.00',''],
//   ];
//   const thirdTableStartY = drawTable(10, 4, 5, secondTableStartY,thirdTableData,2,true);

//   const fourthTableData = [
//     ['Patient Initial Assessment (On Arrival)'],
//     ['Response','Spont. Resp.','Rate','Carotid Pulse'],
//     ['Yes','No','10 c/m','Yes'],
//     ['Pupils Reactivity','','Cardiac Rate',''],
//     ['No','','20 b/m',''],
//     ['Rhythm','','Sysncrinized Pulseless Ventricular Tachycardia','', 'Blood Pressure'],
//     ['Asynchronized Ventricular Fibrillation','','00.00',''],
//     ['Saturation','Witness','DOA',''],
//     ['10%','','20 mg/dl',''],
//   ];

//   const fourthTableStartY = drawTable(10, 5, 5, thirdTableStartY,fourthTableData,2,true);

//   const fifthTableData = [
//     ['Pre- Arrest State'],
//     ['Cardiac Monitor','ET Tube.','Ventilation','IV in situ','Central Line','Others'],
//     ['Cardiac Monitor','ET Tube.','Ventilation','IV in situ','Central Line','Others'],
//     ['Yes','No','Yes','Yes','No','No'],
//   ];

//   const fifthTableStartY = drawTable(5, 6, 5, fourthTableStartY,fifthTableData,2,true);

//   doc.addPage();
//   drawLeftRightBorders();

//   const secondPageFirstTableData = [
//     ['Procedure'],
//     ['Monitor','Open Airway','Ambu Bag','Backboard'],
//     ['Yes','No','Yes','Yes',],
//     ['Chest Comp','Intubation','Ventilation','IV Access'],
//     ['No','No','Yes','Yes',],
//     ['ABG','ECG','Central Line','Pacemekar'],
//     ['No','No','No','Yes',],
//     ['Others'],
//     ['No'],
//   ];
//   const secondPageFirstTableHeight = drawTable(10, 4, 5, 15,secondPageFirstTableData,2,true);
//   const secondPageSecondTableHeight = drawTable(2, 6, 5, secondPageFirstTableHeight,[],2);
//   const secondPageTheirdTableHeight = drawTable(7, 6, 5, secondPageSecondTableHeight,[],2);
//   const secondPageFourthTableHeight = drawTable(3, 6, 5, secondPageTheirdTableHeight,[],2);
//   const secondPageFifthTableHeight = drawTable(10, 6, 5, secondPageFourthTableHeight,[],2);
//   const secondPageSixthTableHeight = drawTable(8, 6, 5, secondPageFifthTableHeight,[],2);
//   // const secondPageSeventhTableHeight = drawTable(5, 6, 5, secondPageSixthTableHeight,[],2);

//   doc.addPage();
//   drawLeftRightBottomBorders();
  
//   const thirdPageFirstTableHeight = drawTable(5, 6, 5, 15,[],2);
//   const thirdPageSecondTableHeight = drawTable(9, 6, 5, thirdPageFirstTableHeight,[],2);

//   // Save the PDF
//   const pdfBlob = doc.output('blob');
//   const pdfUrl = URL.createObjectURL(pdfBlob);
//   window.open(pdfUrl);
// }



// generatePDF() {
//   const docDefinition: any = {
//     content: [
//       this.createPage('First Page Content', ['top', 'left', 'right']),
//       this.createPage('Second Page Content', ['left', 'right']),
//       this.createPage('Third Page Content', ['left', 'right', 'bottom']),
//     ],
//     footer: (currentPage: number, pageCount: number) => ({
//       text: `Page ${currentPage} of ${pageCount}`,
//       alignment: 'center',
//       margin: [0, 10],
//     }),
//   };

//   const pdfDocGenerator = pdfMake.createPdf(docDefinition);
//   pdfDocGenerator.getBlob((blob) => {
//     const url = URL.createObjectURL(blob);
//     window.open(url); // Opens the PDF in a new tab
//   });
// }

// private createPage(content: string, borders: string[]): any {
//   // Create a table with content and spacer rows to ensure it fills up the page
//   const borderTable = {
//     table: {
//       widths: ['*'],
//       body: [
//         [
//           {
//             text: content,
//             margin: [10, 20, 10, 20],
//             border: this.getBorderStyle(borders), // Apply border styles
//           },
//         ],
//         [{ text: '', margin: [0, 580, 0, 0] }] // Spacer row with large top margin
//       ],
//     },
//     layout: {
//       defaultBorder: false, // Disable default borders
//     },
//     pageBreak: 'after', // Ensure a new page after this content
//   };

//   return borderTable;
// }

// private getBorderStyle(borders: string[]): number[] {
//   const borderStyles = [0, 0, 0, 0]; // [top, right, bottom, left]

//   if (borders.includes('top')) {
//     borderStyles[1] = 1; // Top border
//   }
//   if (borders.includes('right')) {
//     borderStyles[2] = 1; // Right border
//   }
//   if (borders.includes('bottom')) {
//     borderStyles[3] = 1; // Bottom border
//   }
//   if (borders.includes('left')) {
//     borderStyles[0] = 1; // Left border
//   }

//   return borderStyles; // Return an array representing borders
// }





}

