import { PatientRespositoryImpl, PatientLocalDataSourceImpl } from '@patients/infraestructure';

export const patientRepository = new PatientRespositoryImpl(new PatientLocalDataSourceImpl());
