import { z } from 'zod';
import { schema } from '../pages/Form/Form';

export interface IFormState {
  username: string;
  age: number;
  password: string;
  email: string;
}

export type FormState = z.infer<typeof schema>;
