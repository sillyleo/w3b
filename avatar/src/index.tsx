import React, { FC } from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import './styles.css';

export interface Props {
  initial?: string;
}

export const AvatarDemo: FC<Props> = (props) => (
  <Avatar.Root className="AvatarRoot">
    <Avatar.Image
      className="AvatarImage"
      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      alt="Colm Tuite"
    />
    <Avatar.Fallback className="AvatarFallback" delayMs={600}>
      {props.initial ? props.initial : 'CT'}
    </Avatar.Fallback>
  </Avatar.Root>
);
