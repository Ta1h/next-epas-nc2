import { FileEdit } from 'lucide-react'
import React from 'react'
import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from '../ui/alert-dialog'
import { Input } from '../ui/Input'

const EditAssessmentsAlertdialog = () => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 flex items-center rounded-md text-sm">
          <FileEdit className="h-4" />
          Edit
        </AlertDialogTrigger>
        <AlertDialogContent className="w-full max-w-sm">
          <AlertDialogHeader className="flex justify-center items-center mb-6">
            <AlertDialogTitle className="mb-6">Edit Question</AlertDialogTitle>
            <AlertDialogDescription>
              <Input placeholder="Lesson no." className="mb-3"></Input>
              <Input placeholder="Title" className="mb-3"></Input>
              <Input placeholder="File"></Input>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 flex items-center rounded-md text-sm">
              <FileEdit className="h-4" />
              Edit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default EditAssessmentsAlertdialog
