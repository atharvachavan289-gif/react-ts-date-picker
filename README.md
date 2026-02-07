# 📅 React Date & Time Range Picker

A fully custom, zero-dependency Date & Time Range Picker built for the Frontend Internship assignment. 

This component allows users to select a date range, specify times, and automatically converts the selected time to a target timezone (e.g., converting Local Time to EST).

## 🚀 Live Demo
**[View Live Storybook Preview](https://react-ts-date-range-picker.vercel.app/)** *(Deployed via Vercel)*

## ✨ Key Features
* **Zero External UI Libraries:** Built entirely from scratch using React hooks and Tailwind CSS.
* **Date Range Logic:** specialized logic to handle start dates, end dates, and range highlighting.
* **Time Selection:** 12-hour format support with AM/PM toggles.
* **🌍 Timezone Awareness:** Uses the native `Intl.DateTimeFormat` API to accurately convert and display times across different zones (e.g., UTC, EST, IST) without heavy libraries like Moment.js.
* **Responsive Design:** styled with Tailwind CSS for a clean, modern interface.

## 🛠️ Tech Stack
* **Core:** React, TypeScript
* **Styling:** Tailwind CSS
* **Development Environment:** Storybook
* **Build Tool:** Vite

## 🏃‍♂️ How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/react-ts-date-picker.git](https://github.com/YOUR_USERNAME/react-ts-date-picker.git)
    cd react-ts-date-picker
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run Storybook**
    ```bash
    npm run storybook
    ```
    The component playground will open automatically at `http://localhost:6006`.

## 📂 Project Structure

```text
src/
├── components/
│   ├── DateRangePicker.tsx       # Main container (State Management & Timezone Logic)
│   ├── CalendarGrid.tsx          # The visual calendar grid & date math
│   ├── TimeSelect.tsx            # Reusable dropdown for hours/minutes
│   ├── TimezoneSelector.tsx      # Timezone selection dropdown
│   └── DateRangePicker.stories.tsx # Storybook configuration
