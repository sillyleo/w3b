import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { styled } from '@stitches/react';

const StyledSwitchRoot = styled(Switch.Root, {
  width: '50px',
  height: '50px',
  backgroundColor: 'red',
});

export const SwitchDemo = () => (
  <form>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label
        className="Label"
        htmlFor="airplane-mode"
        style={{ paddingRight: 15 }}
      >
        Airplane mode
      </label>
      <StyledSwitchRoot id="airplane-mode">
        <Switch.Thumb className="SwitchThumb" />
      </StyledSwitchRoot>
    </div>
  </form>
);
