import axios from 'axios';
import { useEffect, useState } from 'react';
import { IEmployee } from '../interfaces';

export const PageEmployees = () => {
	const [employees, setEmployees] = useState<IEmployee[]>([])
	
	useEffect(() => {
		
	}, []);
	return (
		<p>This is the employees page.</p>
	)
}
