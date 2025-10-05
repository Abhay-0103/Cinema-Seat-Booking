<div align="center">

# Cinema Seat Booking

A responsive React app to visualize a cinema hall layout, select seats by type, and book them with a clear pricing summary.

</div>

---

## Overview

This project renders a cinema seating plan with an aisle, row labels, and color-coded seat types (Regular, Premium, VIP). Users can:
- Select/deselect available seats
- See a running list of selected seats and the total price
- Clear selections
- Book seats, which marks them as booked and triggers a callback with the booking summary

Built with React + Vite + Tailwind CSS.

## Features

- Configurable layout: number of rows, seats per row, aisle position
- Configurable seat types: name, price, rows mapping, and automatic type color
- Pre-booked seats supported (array or comma/space-delimited string)
- Responsive UI with overflow handling for wide layouts
- Accessible interactions: keyboard selection (Enter/Space), aria labels
- Live summary with selected seats and total price
- Book/Clear actions with an `onBookingComplete` callback

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- ESLint (preconfigured)

## Getting Started

Prerequisites:
- Node.js 18+ and npm

Install dependencies:
```bash
npm install
```

Start the dev server:
```bash
npm run dev
```
Then open the URL printed in the terminal (e.g., http://localhost:5173/).

Build for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
Cinema-Seat-Booking/
├─ public/
│  └─ vite.svg
├─ src/
│  ├─ components/
│  │  └─ cinema-seat-booking.jsx     # Seat map component
│  ├─ App.css
│  ├─ App.jsx                        # Demo usage of the component
│  ├─ index.css                      # Tailwind CSS entry
│  └─ main.jsx                       # React bootstrap
├─ index.html                        # App HTML shell
├─ package.json                      # Scripts and deps
├─ eslint.config.js                  # ESLint config
├─ vite.config.js                    # Vite + Tailwind plugin config
└─ README.md
```

- `src/components/cinema-seat-booking.jsx` — main seat booking component
- `src/App.jsx` — sample usage of the component
- `src/main.jsx` and `index.html` — app bootstrap
- `src/index.css` — Tailwind CSS entry

## Using the Component

The component accepts the following props:

- `layout` (object)
  - `rows` (number): total number of rows
  - `seatsPerRow` (number): seats per row
  - `aislePosition` (number): index where the aisle splits the row
- `seatTypes` (object): map of seat type keys to config
  - Each config: `{ name, price, rows }` where `rows` is an array of zero-based row indexes
- `bookedSeats` (string | string[]): pre-booked seat IDs (e.g., "C4", "D10"); can also be a comma/space-delimited string
- `currency` (string): currency symbol for price display
- `onBookingComplete` (function): callback invoked after booking with `{ seats, total, currency, breakdown }`
- `title` and `subtitle` (string): page headings

Example:
```jsx
<CinemaSeatBooking
  layout={{ rows: 8, seatsPerRow: 12, aislePosition: 8 }}
  seatTypes={{
    regular: { name: "Regular", price: 150, rows: [0, 1, 2] },
    premium: { name: "Premium", price: 250, rows: [3, 4, 5] },
    vip: { name: "VIP", price: 350, rows: [6, 7] },
  }}
  bookedSeats={["C4", "C5"]}
  onBookingComplete={(summary) => {
    console.log("Booking complete:", summary);
    alert(`Booked ${summary.seats.length} seat(s): ${summary.seats.join(", ")}\nTotal: ${summary.currency}${summary.total}`);
  }}
/>
```

## Keyboard and Accessibility

- Focus a seat and press Enter or Space to toggle selection
- Booked seats are not focusable (`tabIndex={-1}`) and are styled as disabled
- Each seat has an `aria-label` with seat id, type, and status

## Customization Tips

- Change seat dimensions by adjusting Tailwind classes in `getSeatClassName`
- Modify type colors by editing the `SEAT_TYPE_COLORS` palette and `getColorClass`
- Add a maximum selection rule by guarding inside `handleSeatClick`
- Persist bookings by calling your API inside `onBookingComplete`

## Troubleshooting

- Seats don’t toggle selection
  - Hard refresh the browser (Ctrl+Shift+R) to clear cached CSS and JS
  - Ensure Tailwind is loaded (inspect an element and check class styles)
  - Confirm you didn’t pass booked seats that include the seat you try to select
- Dev server not starting on 5173
  - Vite will try another port automatically; check the terminal output

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## License

This project is provided as-is for learning and demonstration purposes.
