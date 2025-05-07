import styles from './index.module.css';
import { ReactNode } from 'react';
import Form from 'next/form';

const FormContactUs = (): ReactNode => {
  const handleSubmit = async (formData: FormData) => {
    'use server';
    const username = formData.get('name');
    console.log(`Thank you for your interest, ${username}`);
  };
  return <Form className={styles.form} action={handleSubmit}></Form>;
};

export default FormContactUs;
