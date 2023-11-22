import { FileX2 } from 'lucide-react'
import React from 'react'
import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '../ui/alert-dialog'

const DeleteAssessmentsAlertdialog = () => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="bg-transparent text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white px-4 py-2 flex items-center text-sm rounded-md">
          <FileX2 className="h-4" />
          Delete
        </AlertDialogTrigger>
        <AlertDialogContent className="w-full max-w-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delele the Question, Choices, and the Answer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-white text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white px-4 py-2 flex items-center text-sm rounded-md">
              <FileX2 className="h-4" />
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default DeleteAssessmentsAlertdialog
