import {FC} from 'react';
import React from 'react';

interface props{
    params: {id: string}
}

const Questions: FC<props> = ({params}) => {
	return (
		<div>
        questions galing sa database
			<p>params ay eto: {params.id}</p>
		</div>
	);
};

export default Questions;