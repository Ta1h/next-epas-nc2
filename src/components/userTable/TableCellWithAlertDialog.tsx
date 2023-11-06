import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { FileX2 } from 'lucide-react';

interface TableCellWithAlertDialogProps {
  deletedRow: string;
}

export function TableCellWithAlertDialog({deletedRow}: TableCellWithAlertDialogProps) {
	const handleDelete = () =>{
		try {
			const response = fetch('http://localhost:3000/api/users/id/'+deletedRow, {
				method: 'DELETE',
			});
			window.location.reload();
		} catch (error) {
			console.error('Error Deleting data:', error);
		}
	};

	return (
		<>
			<AlertDialog>
				<AlertDialogTrigger className='bg-transparent text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white py-2 px-3 rounded-lg flex items-center text-sm'>
					<FileX2 className='h-4'/>
					Delete
				</AlertDialogTrigger>
				<AlertDialogContent className='w-full max-w-lg'>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
						<AlertDialogDescription>
              				This action cannot be undone. This will permanently delete the user account
              				and remove the user data from our database.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction className='bg-transparent text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white py-2 px-3 rounded-lg flex items-center' onClick={handleDelete} >
							<FileX2 className='h-4'/>
							Delete
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
}
