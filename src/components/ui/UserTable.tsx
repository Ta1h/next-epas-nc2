'use client';

import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Username', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'role', headerName: 'Role', width: 130 },
  { field: 'image', headerName: 'Image', width: 130 },
  { field: 'createdAt', headerName: 'Created At', width: 200 },
];

const UserTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/users', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const { users } = await response.json();

        const mappedData = users.map((user: any) => ({
          id: user.id,
          username: user.username || 'null', // Handle potential null or undefined values
          email: user.email || 'null',
          role: user.role || 'null',
          image: user.image || 'null',
          createdAt: user.created || 'null', // Corrected the field name to "created"
        }));

        setRows(mappedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
      />
    </div>
  );
};

export default UserTable;
