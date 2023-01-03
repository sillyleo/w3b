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
      <h1 className="text-orange-500 text-5xl font-bold underline">
        Hello, Next.js!
      </h1>
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb" />
    </Slider.Root>
  </form>
);

export { SliderDemo };
