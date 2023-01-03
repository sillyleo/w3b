import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import './styles.css';

interface SliderDemo {}

const SliderDemo = () => (
  <form>
    <Slider.Root
      className="SliderRoot"
      defaultValue={[20]}
      max={100}
      step={1}
      aria-label="Volume"
    >
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb" />
    </Slider.Root>
  </form>
);

export { SliderDemo };
