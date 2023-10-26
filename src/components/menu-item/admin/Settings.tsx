import { Button } from '@/components/ui/Button';
import { Settings } from 'lucide-react';
import React from 'react';

const page = () => {
	return (
		<div>
			<Button variant='menu_item'>
				<Settings className='w-4 mr-2'/>Settings
			</Button>
		</div>
	);
};

export default page;