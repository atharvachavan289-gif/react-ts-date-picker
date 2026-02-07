import type { Meta, StoryObj } from '@storybook/react';
import { CalendarGrid } from './CalendarGrid';

//Telling Storybook about our component 
const meta: Meta<typeof CalendarGrid> = {
  title: 'Components/CalendarGrid', // This is how it will appear in Storybook's sidebar
  component: CalendarGrid, // The actual component we're showcasing
  parameters : {
    layout : 'centered' // This centers the component in the Storybook canvas
  },
  tags: ['autodocs'], // This enables automatic documentation generation
};

export default meta ;
type Story = StoryObj<typeof meta>;

// Providing the required props for the story to work
export const Default : Story = {
  args: {
    startDate: null,
    endDate: null,
    onDateClick: (date : Date) => console.log('Clicked:', date),
  },
};

export const WithRangeSelected: Story = {
  args: {
    startDate: new Date(2026, 1, 10), // Feb 10
    endDate: new Date(2026, 1, 15),   // Feb 15
    onDateClick: (date : Date) => console.log('Clicked:', date),
  },
};