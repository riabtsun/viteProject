import { z } from 'zod';

export const schema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Ім'я має бути не менше 3 символів" })
    .max(15, { message: "Ім'я має бути не більше 15 символів" }),
  phone: z.string().includes('+380').length(13),
  address: z.string().min(10, { message: 'Адреса має бути повною' }).max(99),
  priority: z.boolean(),
});
