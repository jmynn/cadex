'use client';
import { useToast } from '@chakra-ui/react';
import { ReactNode } from 'react';

const MainFrame = (): ReactNode => {
  const toast = useToast();
  return (
    <iframe
      src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      loading="lazy"
      title="a certain video on youtube"
      sandbox="allow-scripts allow-same-origin"
      onError={() =>
        toast({
          title: 'Error',
          description: 'An error occurred when uploading a youtube video',
          status: 'error',
          duration: 5000,
          variant: 'subtle',
          position: 'bottom'
        })
      }
    />
  );
};

export default MainFrame;
