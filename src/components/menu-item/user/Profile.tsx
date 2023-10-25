import { Button } from '@/components/ui/button';
import { User2 } from 'lucide-react';
import React from 'react';

const Profile = () => {
	return (
		<div>
			<Button variant='menu_item'>
				<User2 className='w-4 mr-2'/>Profile
			</Button>
		</div>
	);
};

export default Profile;