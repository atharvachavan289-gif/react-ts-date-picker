// src/components/DateRangePicker.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from './DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'], // <--- THIS LINE WAS MISSING!
  decorators: [
    (Story) => (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-8">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none"></div>
        <div className="relative z-10">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};