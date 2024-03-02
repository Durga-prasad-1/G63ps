import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


export default function History() {
        const rows = [
            { id: 1, col1: 'Hello', col2: 'World', col3:"akjlhfl",col4:"jglsnl"},
            { id: 2, col1: 'DataGridPro', col2: 'is Awesome' ,col3:"akjlhfl",col4:"jglsnl"},
            { id: 3, col1: 'MUI', col2: 'is Amazing' ,col3:"akjlhfl",col4:"jglsnl"},
        ];
        
        const columns= [
            { field: 'col1', headerName: 'Column 1', width: 150 },
            { field: 'col2', headerName: 'Column 2', width: 150 },
            { field: 'col3', headerName: 'Column 3', width: 150 },
            { field: 'col4', headerName: 'Column 4', width: 150 },
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
