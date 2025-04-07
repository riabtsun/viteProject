import { z } from 'zod';
import { schema } from '../pages/Form/schemaForm.ts';

export type FormState = z.infer<typeof schema>;
