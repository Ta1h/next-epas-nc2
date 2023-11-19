import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Plus } from 'lucide-react';
import { Input } from '../ui/Input';

const AddAlertdialog: React.FC<{ unitId: string }> = ({ unitId }) => {

  const [formData, setFormData] = useState({
    lessonNumber: '',
    title: '',
    file: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAdd = async () => {
    const { lessonNumber, title, file } = formData;

    if (!lessonNumber || !title || !file) {
      console.error('Required fields are empty. Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/lessons', {
        method: 'POST',
        body: JSON.stringify({
          lessonNumber: formData.lessonNumber,
          lessonTitle: formData.title,
          lessonUrl: formData.file,
          unitId: unitId,
        }),
      });

      if (response.ok) {
        console.log('Lesson added successfully')
        window.location.reload();
      } else {
        console.error('Failed to add lesson');
      }
    } catch (error) {
      console.log('Error in adding lesson: ', error);
    }
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white px-4 py-2 rounded-md flex items-center text-sm">
          <Plus className="h-5" />
          Add
        </AlertDialogTrigger>
        <AlertDialogContent className="w-full max-w-sm">
          <AlertDialogHeader className="flex justify-center items-center mb-6">
            <AlertDialogTitle className="mb-6">Add Lesson</AlertDialogTitle>
            <AlertDialogDescription>
              Lesson no.
              <Input
                placeholder="ex. Lesson 1:"
                className="mb-4"
                onChange={(e) => handleInputChange('lessonNumber', e.target.value)}
              />
              Title
              <Input
                placeholder="ex. OH&S policies and procedures"
                className="mb-4"
                onChange={(e) => handleInputChange('title', e.target.value)}
              />
              File Url
              <Input
                placeholder="ex. https://docs.google.com/document/d/1ytOkjMK7ioDNNKpCh-WJLMlmttx6sQaO/preview"
                onChange={(e) => handleInputChange('file', e.target.value)}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleAdd()}
              className="bg-white text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white"
            >
              <Plus className="h-5" />
              Add
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AddAlertdialog;
