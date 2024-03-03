import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function History() {
    const [rows, setRows] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://thyro-aid.vercel.app/auth/history", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                const pred_history = await response.json();
                setRows(pred_history.Name); // Update the component state with fetched data
                setLoading(false); // Set loading state to false
            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); // Call the fetchData function
    }, []);

    const columns = [
        { field: 'col1', headerName: 'Name', width: 150 },
        { field: 'col2', headerName: 'Disease', width: 150 },
        { field: 'col3', headerName: 'T3', width: 150 },
        { field: 'col4', headerName: 'Tsh', width: 150 },
        { field: 'col5', headerName: 'T4', width: 150 },
        { field: 'col6', headerName: 'Date', width: 150 },
    ];

    return (
        <div>
            <h1 style={{ padding: "20px 0px", textAlign: "center", fontFamily: "Roboto,san-serif" }}>History</h1>
            <div style={{ height: 300, width: '100%' }}>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <DataGrid rows={rows} columns={columns} />
                )}
            </div>
        </div>
    );
}
