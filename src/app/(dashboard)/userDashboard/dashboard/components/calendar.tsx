import { Calendar } from '@/components/ui/calendar'
import React from 'react'

const calendar = () => {
    const [date] = React.useState<Date | undefined>(new Date())
  return (
    <div>
        <Calendar
          mode='single'
          selected={date}
          className="bg-gray-50 lg:col-span-3 mx-auto object-contain rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" 
        />
    </div>
  )
}

export default calendar