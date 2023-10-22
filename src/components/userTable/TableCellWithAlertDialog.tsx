
import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

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
        <AlertDialogTrigger><Button variant='destructive2'>Delete</Button></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the user account
              and remove the user data from our database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
