import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function History() {
    const [rows, setRows] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/auth/history", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                const pred_history = await response.json();
                console.log(pred_history.Name);
                let result = [];
                //this is for taking required day from objects which are fetched from dbms
                for (const ele of pred_history){
                    // console.log(ele);
                    result.push({id:ele._id,sno:pred_history.indexOf(ele)+1,col1:ele.Name,col2:ele.result,col3:ele.T3,col4:ele.TSH,col5:ele.TT4,col6:ele.Time});
                }
                console.log(result);
                setRows(result); // Update the component state with fetched data
                setTimeout(function(){
                    setLoading(false)
                },1500);
                 // Set loading state to false
            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); // Call the fetchData function
    }, []);

    const columns = [
        { field: 'sno', headerName: 'Sno.', width: 150 },
        { field: 'col1', headerName: 'Name', width: 150 },
        { field: 'col2', headerName: 'Disease', width: 250 },
        { field: 'col3', headerName: 'T3', width: 150 },
        { field: 'col4', headerName: 'Tsh', width: 150 },
        { field: 'col5', headerName: 'TT4', width: 150 },
        { field: 'col6', headerName: 'Searched on', width: 150 },
    ];

    return (
        <div>
            <h1 style={{ padding: "20px 0px", textAlign: "center", fontFamily: "Roboto,san-serif" }}>History</h1>
            <div style={{ height: 300, width: '100%' }}>
                {loading ? (
                    <Box sx={{ display: 'flex',justifyContent:'center' }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    // <p>fd/</p>
                    <DataGrid rows={rows} columns={columns} />
                )}
            </div>
        </div>
    );
}
