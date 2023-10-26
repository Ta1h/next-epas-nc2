import { Button } from '@/components/ui/Button';
import { History } from 'lucide-react';
import React from 'react';

const page = () => {
	return (
		<div>
			<Button variant='menu_item'>
				<History className='w-4 mr-2'/>History
			</Button>
		</div>
	);
};

export default page;