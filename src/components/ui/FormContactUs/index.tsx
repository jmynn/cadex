'use client';
import styles from './index.module.css';
import { useState, type FormEvent, type ReactNode } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react';
import { ServerResponse } from '@/types';

const FormContactUs = (): ReactNode => {
  const [isServerAction, setIsServerAction] =
    useState<ServerResponse['isServerResponse']>(false);
  const [serverText, setServerText] =
    useState<ServerResponse['serverResponse']>('');

  const handleServerAction = (response: ServerResponse) => {
    const { isServerResponse, serverResponse } = response;
    setIsServerAction(isServerResponse);
    setServerText(serverResponse);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'post',
      body: new FormData(e.target as HTMLFormElement)
    });
    const data: ServerResponse = await response.json();
    handleServerAction(data);
  };

  return (
    <>
      {!!isServerAction && <h1 className={styles.title}>{serverText}</h1>}
      {!isServerAction && (
        <>
          <h1 className={styles.title}>Only CTA on the page</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <FormControl>
              <Box>
                <FormLabel htmlFor="inp-name">Name</FormLabel>
                <Input
                  type="name"
                  placeholder="Value"
                  name="name"
                  required
                  id="inp-name"
                  autoComplete="additional-name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="inp-email">Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Value"
                  name="email"
                  required
                  id="inp-email"
                  autoComplete="email"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="ta-message">Message</FormLabel>
                <Textarea
                  placeholder="Value"
                  name="message"
                  resize={'both'}
                  required
                  id="ta-message"
                />
              </Box>
              <Button
                type="submit"
                backgroundColor={'var(--color-primary)'}
                color={'var(--color-white)'}
              >
                Submit
              </Button>
            </FormControl>
          </form>
        </>
      )}
    </>
  );
};

export default FormContactUs;
