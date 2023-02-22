import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
	const [categories, setcategories] = useState(['One Punch']);

	const onAddCategory =(value)=>{
		if(!categories.includes(value))
		setcategories([...categories,value]);
	}
	return (
		<>
			<h1>GitExpertApp</h1>
			<AddCategory onAddCategory={(value)=>onAddCategory(value)}/>
	
				{
					categories.map((category)=>
						(
								<GifGrid key={category}
									category={category}
								/>
						)
					)
				}

		</>
	);
};


