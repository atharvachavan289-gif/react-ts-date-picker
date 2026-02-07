// src/components/TimeSelect.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { TimeSelect } from './TimeSelect';

const meta: Meta<typeof TimeSelect> = {
  title: 'Components/TimeSelect',
  component: TimeSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Start Time',
    onChange: (timeString) => console.log('Selected time:', timeString),
  },
};