import { FileX2, Plus } from 'lucide-react'
import React, { FC } from 'react'
import Router, { useRouter } from 'next/router'
import { AlertDialogHeader, AlertDialogFooter, AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from '../ui/alert-dialog'

const SubmitAssessmentsAlertdialog: FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const handleContinue = () => {
    // Trigger the onSubmit function when "Continue" is clicked
    onSubmit();

  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className='bg-green-600 text-white px-4 py-2 flex items-center text-sm rounded-md'>
        Submit
      </AlertDialogTrigger>
      <AlertDialogContent className='w-full max-w-md space-y-2'>
        <AlertDialogHeader>
          <AlertDialogTitle className='mb-3'>Submit</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone, so double check your answers in every question before you submit.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className='bg-green-600 hover:bg-white hover:border-green-600 hover:border-2 hover:text-green-600 text-white px-4 py-2 flex items-center text-sm rounded-md'
            onClick={handleContinue} 
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default SubmitAssessmentsAlertdialog;
