'use client';
import React, { useEffect, useState } from 'react';
import { DataTable } from '@/components/userTable/DataTable';
import { columns } from '@/components/userTable/columns';
import { User } from '@/types/data';

export default function DemoPage() {
	const [data, setData] = useState<User[]>([]);

	async function fetchData() {
		try {
			const response = await fetch('/api/users', {
				method: 'GET',
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const result = await response.json();
			console.log(result);

			if (Array.isArray(result)) {
				const usersWithUserRole = result
					.filter((user: User) => user.role === 'USER')
					.map((user: User) => ({
						id: user.id,
						email: user.email,
						name: user.name,
						role: user.role,
						created: user.created,
					}));

				setData(usersWithUserRole);
        
			} else {
				console.error('Response data is not an array');
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="m-5">
			<DataTable columns={columns} data={data} />
		</div>
	);
}
