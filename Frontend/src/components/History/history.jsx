import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


export default function History() {
        const rows = [
            { id: 1, col1: 'Shiva', col2: 'primary thyroid', col3:"14.5",col4:"11",col5:"15",col6:"14 March,2020"},
            { id: 2, col1: 'Rama', col2: 'secondary thyroid' ,col3:"12.5",col4:"84",col5:"52",col6:"15 march ,2019"},
            { id: 3, col1: 'Kalyan', col2: 'compensated thyroid' ,col3:"10",col4:"15",col5:"65",col6:"5 march ,2019"},
        ];
        
        const columns= [
            { field: 'col1', headerName: 'Name', width: 150 },
            { field: 'col2', headerName: 'Disease', width: 150 },
            { field: 'col3', headerName: 'T3', width: 150 },
            { field: 'col4', headerName: 'Tsh', width: 150 },
            { field: 'col5', headerName: 'T4', width: 150 },
            { field: 'col6', headerName: 'Date', width: 150 },
        ];
    return (
        <div>
        <h1 style={{padding:"20px 0px",textAlign:"center",fontFamily:"Roboto,san-serif"}}>History</h1>
        <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
        </div>
        </div>
    );
}
