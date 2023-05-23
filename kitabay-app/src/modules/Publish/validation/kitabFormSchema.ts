import { object, string, number } from 'yup';

export const KitabFormSchema = object({
  title: string().required('Title is required'),
  description: string().required('Description is required'),
  copies: number()
    .required('Please enter the number of copies you want to sell')
    .min(1, 'You must sell at least one copy of the book'),
  price: number().required('Please fill in the price of the book').min(0, 'Price cannot be negative. Right!?'),
  bookCover: string().required('Please upload the book cover'),
});
