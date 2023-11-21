import { FileEdit } from 'lucide-react';
import React, { useState } from 'react';
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
} from '../ui/alert-dialog';
import { Input } from '../ui/Input';

interface EditAlertDialogProps {
  lessonId: string;
}

const EditAlertdialog: React.FC<EditAlertDialogProps> = ({ lessonId }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [lessonNumber, setLessonNumber] = useState(String);
  const [lessonTitle, setLessonTitle] = useState(String);
  const [lessonUrl, setLessonUrl] = useState(String);

  console.log(isUpdating)

  const handleUpdate = async () => {
    try {
      const lessons = await fetch(`/api/lessons/id/${lessonId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          lessonNumber: lessonNumber,
          lessonTitle: lessonTitle,
          lessonUrl: lessonUrl,
        }),
      });

      if (lessons.ok) {
        console.log('Lesson updated successfully');
        window.location.reload();
      } else {
        console.error('Error updating lesson');
        setIsUpdating(false);
      }
    } catch (error) {
      console.error('Error updating lesson: ', error);
    } 
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 flex items-center rounded-md text-sm">
          <FileEdit className="h-4" />
          Edit
        </AlertDialogTrigger>
        <AlertDialogContent className="w-full max-w-sm">
          <AlertDialogHeader className="flex justify-center items-center mb-6">
            <AlertDialogTitle className="mb-6">Edit Lesson</AlertDialogTitle>
            <AlertDialogDescription>
              Lesson no.
              <Input
                placeholder="Lesson no."
                value={lessonNumber}
                onChange={(e) => setLessonNumber(e.target.value)}
                className="mb-3"
              />
              Title
              <Input
                placeholder="Title"
                value={lessonTitle}
                onChange={(e) => setLessonTitle(e.target.value)}
                className="mb-3"
              />
              File Url
              <Input
                placeholder="File"
                value={lessonUrl}
                onChange={(e) => setLessonUrl(e.target.value)}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 flex items-center rounded-md text-sm"
              onClick={() => {
                setIsUpdating(true);
                handleUpdate();
              }}
            >
              <FileEdit className="h-4" />
              Edit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default EditAlertdialog;
