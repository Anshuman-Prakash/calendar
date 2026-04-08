# Interactive Wall Calendar (React + Tailwind)

## Live Link : "https://calendar-blond-tau.vercel.app/"

## Overview

A modern, responsive **Wall Calendar Web Application** inspired by physical hanging calendars.
It combines **clean UI design, interactive date selection, and note-taking features** to create a polished frontend experience.

---

## Features

### Calendar Functionality

* Month navigation (Prev / Next)
* Displays full monthly grid (Mon–Sun)
* Highlights current date

### Date Range Selection

* Select **start and end date**
  
### Notes System

* Add notes for selected dates
* Data persists using **localStorage**
* Auto-loads notes on refresh

### UI / UX

* Hero section with background image
* Smooth hover and selection animations
* Clean white theme (professional look)
* Responsive layout (desktop + mobile)

### Animations

* Hover scale effects
* Smooth transitions on date selection
* Interactive UI feedback

---

## Tech Stack

* React.js
* Tailwind CSS
* JavaScript (ES6+)
* LocalStorage (for persistence)

---

## Project Structure

```
src/
 ├── components/
 │   ├── Calendar/
 │   │   ├── WallCalendar.jsx
 │   │   ├── CalendarGrid.jsx
 │   │   ├── DateCell.jsx
 │   │   ├── HeroSection.jsx
 │   │
 │   ├── Notes/
 │   │   └── NotesPanel.jsx
 │
 ├── utils/
 │   └── dateUtils.js
 │
 ├── App.jsx
 └── index.js
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/calendar-app.git
cd calendar-app
```

---

### Install dependencies

```bash
npm install
```

---

### Run the app

```bash
npm start
```

Open: http://localhost:3000

---

## How It Works

* **Date Selection Logic**

  * First click → Start date
  * Second click → End date
  * Range auto-highlighted

* **Notes Storage**

  * Stored in browser using:

    ```
    localStorage → "wcal_notes"
    ```
  * Automatically restored on reload

---

## UI Highlights

* Wall calendar-inspired layout
* Hero image section
* Smooth and intuitive interactions
* Clean and minimal design

---

## Future Improvements

* Dark / Light theme toggle
* Framer Motion animations
* Notes per individual date
* Drag-to-select date range
* Holiday indicators

---

## Author

**Anshuman Prakash**

* Software Engineer
* React | MERN Stack Developer

---

## Show Your Support

If you like this project:

* Star the repo
* Fork it
* Share it

---

## License

This project is open-source and available under the **MIT License**.
