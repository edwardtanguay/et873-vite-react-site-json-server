import axios from 'axios';
import { useEffect, useState } from 'react';
import { IEmployee } from '../interfaces';

export const PageEmployees = () => {
	const [employees, setEmployees] = useState<IEmployee[]>([])
	
	useEffect(() => {
		(async () => {
			setEmployees((await axios.get('http://localhost:3021/employees')).data);
		})();	
	}, []);
	return (
		<p>There are {employees.length} employees.</p>
	)
}
