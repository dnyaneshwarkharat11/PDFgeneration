import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

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
            { type: 'line', x1: 10, y1: 10, x2: 585, y2: 10, lineWidth: 1, color: '#87CEEB' }, // Width and positions are relative to A4 size
            { type: 'line', x1: 10, y1: 832, x2: 585, y2: 832, lineWidth: 1, color: '#87CEEB' },
            { type: 'line', x1: 10, y1: 10, x2: 10, y2: 832, lineWidth: 1, color: '#87CEEB' },
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
  const pageHeight = 842;
  const availableContentHeight = 660;

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



  const generateTable = (columns: string[], data: any[]) => {
    const columnCount = columns.length;
    const columnWidth = (100 / columnCount).toFixed(2) + '%';
    const columnWidths = Array(columnCount).fill(columnWidth);
  
    const headerRow = columns.map((col) => ({ text: col, style: 'tableHeader' }));
  
    const tableBody = [
      headerRow,
      ...data.map((row) =>
        row.map((cell:any) => ({ text: cell, style: 'tableContent' }))
      ),
    ];

    const customLayout = {
      hLineWidth: (i: number) => (i === 0 || i === tableBody.length ? 0.1 : 0),
      vLineWidth: (i: number) => (i === 0 || i === columnCount ? 0.1 : 0),
      hLineColor: '#87CEEB',
      vLineColor: '#87CEEB',
    };
  
    return {
      table: {
        widths: columnWidths,
        body: tableBody,
        heights: (rowIndex: number) => 20
      },
      layout: customLayout,
      margin: [0, 0, 0, 10],
    };
  };
  
  const calculateTableHeight = (rows: number) => {
    const rowHeight = 20;
    const marginBottom = 10;
    return (rowHeight * rows) + marginBottom;
  };

  const inOutPatientTableColumns = ['Inpatient', 'Outpatient', '', '', ''];
  const inOutPatientTableData = [
    ['Patient ID', '', 'Date', 'Time', 'Area / Unit'],
    ['456123', '', '09-Oct-2024', '00.00', 'ICCU / ICU 9 ISO'],
    ['Witnessed By:abcd', '', 'Call Out', 'Phone', ''],
    ['Yes', '', 'No', 'Yes', ''],
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

  let currentContentHeight = availableContentHeight ;
  let currentPage = 1;

  const addTableToDocument = (table:any) => {
    const tableHeight = calculateTableHeight(table.table.body.length);
    
    if (tableHeight > currentContentHeight) {
        documentDefinition.content.push({ text: '', pageBreak: 'after' });
        
        currentContentHeight = availableContentHeight; 

        documentDefinition.content.push(table);
        
        currentContentHeight -= tableHeight;
        currentPage++; // Move to the next page
    } else {
        documentDefinition.content.push(table);
        currentContentHeight -= tableHeight;
    }
};

  tables.forEach(table => {
    addTableToDocument(table);
});

  documentDefinition.header = headerSection;
  documentDefinition.footer = footerSection;

  const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
  pdfDocGenerator.getBlob((blob) => {
    const url = URL.createObjectURL(blob);
    window.open(url); 
  });
}

}

