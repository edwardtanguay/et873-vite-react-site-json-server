/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const PageSimpleForm = () => {
	const navigate = useNavigate();

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const employee = Object.fromEntries(formData);
		const headers = {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
		};

		(async () => {
			try {
				const response = await axios.post(
					"http://localhost:3021/employees",
					employee,
					{headers}
				);
				if (response.status === 201) {
					navigate('/info');
				} else {
					console.log(`ERROR: ${response.status}`);
				}
			} catch (error: any) {
				console.log(`ERROR: ${error.message}`);
			}
		})();
	};
	return (
		<form onSubmit={handleFormSubmit} encType="multipart/form-data">
			<fieldset className="border border-slate-500 p-4 rounded">
				<legend>New Employee</legend>

				<div className="mb-4 flex gap-2">
					<label className="w-40" htmlFor="firstName">
						First Name:
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						required
					/>
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="lastName">
						Last Name:
					</label>
					<input type="text" id="lastName" name="lastName" required />
				</div>
				
				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="age">
					Age:
					</label>
					<input type="text" id="age" name="age" required />
				</div>
				
				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="hireDate">
						Hire Date:
					</label>
					<input type="date" id="hireDate" name="hireDate" required />
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="employeeNumber">
						Employee Number:
					</label>
					<div>
						<input
							type="text"
							id="employeeNumber"
							name="employeeNumber"
							pattern="^[DSM]-\d{4}$"
							required
						/>
						<p className="text-sm">e.g. D-2832, S-7771, M-8123</p>
					</div>
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="notes">
						Notes:
					</label>
					<textarea id="notes" name="notes"></textarea>
				</div>
				<div className="mt-5 flex justify-end pr-3">
					<button>Add Employee</button>
				</div>
			</fieldset>
		</form>
	);
};
