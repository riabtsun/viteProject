import { z } from 'zod';
import { schema } from '../pages/Form/Form';

export type FormState = z.infer<typeof schema>;
