export interface Patient {
	id: string;
	name: string;
	age: number;
	symptoms: Array<Symptom>;
}

export interface Symptom {
	id: string;
	description: string;
	date: Date | string;
}
