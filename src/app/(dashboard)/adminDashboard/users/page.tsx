import React from "react";
import { DataTable } from "@/components/userTable/DataTable";
import { columns } from "@/components/userTable/columns";

async function getData() {
  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'GET',
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default async function DemoPage() {
  
  try {
    const data = await getData();

    console.log("Columns:", columns);
    console.log("Data:", data);

    return (
      <div className="m-10">
        <DataTable columns={columns} data={data} />
      </div>
    );
  } catch (error) {
    console.error('Error in DemoPage:', error);
    return (
      <div className="m-10">
        <p>Error loading data.</p>
      </div>
    );
  }
}
