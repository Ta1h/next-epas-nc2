import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';
import { Input } from '../ui/Input';

const AddAlertdialog = () => {
	return (
		<>
			<AlertDialog>
				<AlertDialogTrigger className='bg-transparent text-black border-2 border-black hover:bg-black hover:text-white px-4 py-2 rounded-md flex items-center text-sm'>
                    <Plus className='h-5'/>
                    Add
                </AlertDialogTrigger>
				<AlertDialogContent className='w-full max-w-sm'>
					<AlertDialogHeader className='flex justify-center items-center mb-6'>
						<AlertDialogTitle className='mb-6'>Add Lesson</AlertDialogTitle>
						<AlertDialogDescription>
              				<Input placeholder='Lesson no.' className='mb-3'></Input>
                            <Input placeholder='Title' className='mb-3'></Input>
                            <Input placeholder='File'></Input>
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction className='bg-white text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white'>
                            <Plus className='h-5'/>
                            Add
                        </AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	)
}

export default AddAlertdialog
