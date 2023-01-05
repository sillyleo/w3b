import { styled } from '@stitches/react';

export const Button = styled('button', {
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
    color: 'black',
  },
});
