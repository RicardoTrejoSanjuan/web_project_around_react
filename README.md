# Tripleten web_project_around_react

**Around The U.S.** is a photo gallery web application built at TripleTen. This version has been fully migrated from a class-based TypeScript architecture to **React 19** with **TypeScript**, using **Vite** as the bundler. The application uses **CSS (BEM methodology)**, **responsive design**, and **custom React hooks** for clean state management, card handling, user profile syncing, and real-time form validation.

## [🔗 Live Demo](https://ricardotrejosanjuan.github.io/web_project_around_react/)

![Around The U.S. Screenshot](./public/Screenshot.png)

## Current Features

- **REST API Integration**: Load and save profile data, user avatar, and cards dynamically from a remote server using a unified `Api` service.
- **Card Management**: Create new cards, like/unlike, and delete cards with server-side synchronization and immediate UI updates.
- **Interactive Modals (Popups)**:
  - Edit profile information through a form popup.
  - Change profile avatar image via a dedicated input form popup.
  - Delete cards securely with a confirmation popup dialog.
  - Open images in an enlarged popup view with captions.
  - Close modals via the close button, clicking the overlay, or pressing the `Escape` key.
- **Custom React Hooks (Decoupled State & Logic)**:
  - `usePopups`: Manages open/close states and keydown listener bindings.
  - `useUser`: Handles profile data loading, initialization, and server-side updates.
  - `useCards`: Handles card initialization, likes, and deletion flows.
  - `useFormValidation`: Handles input tracking, error reporting, and submit validation logic dynamically.
- **Form Validation**: Real-time validation with custom native error messages, disabling submit buttons when inputs are invalid.

## Technologies

- HTML5
- CSS3 (BEM Methodology)
- TypeScript
- React 19
- Custom React Hooks
- Vite
- ESLint & Prettier

## Project Structure

```text
├── public
│   ├── favicon.svg
│   ├── icons.svg
│   └── Screenshot.png
├── src
│   ├── assets
│   ├── blocks                     # BEM modular styles
│   │   ├── card.css
│   │   ├── cards.css
│   │   ├── content.css
│   │   ├── footer.css
│   │   ├── header.css
│   │   ├── page.css
│   │   ├── popup.css
│   │   └── profile.css
│   ├── components                 # Functional React components
│   │   ├── Popup
│   │   │   ├── AddPlacePopup.tsx
│   │   │   ├── DeleteConfirmationPopup.tsx
│   │   │   ├── EditAvatarPopup.tsx
│   │   │   ├── EditProfilePopup.tsx
│   │   │   ├── ImagePopup.tsx
│   │   │   └── Popup.tsx
│   │   ├── Card.tsx
│   │   ├── CardList.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Profile.tsx
│   ├── hooks                      # Custom state management hooks
│   │   ├── useCards.ts
│   │   ├── useFormValidation.ts
│   │   ├── usePopups.tsx
│   │   └── useUser.ts
│   ├── services                   # API services
│   │   ├── api.ts
│   │   └── api-old.ts
│   ├── types                      # Strict TypeScript types
│   │   ├── Api.ts
│   │   ├── Card.ts
│   │   ├── Popups.ts
│   │   └── User.ts
│   ├── utils                      # Constants and environment helpers
│   │   └── constants.ts
│   ├── vendor                     # Extenal font/reset assets
│   │   ├── fonts.css
│   │   └── normalize.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
├── .editorconfig
├── .prettierignore
├── .prettierrc
├── .gitignore
└── README.md
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/ricardotrejosanjuan/web_project_around_react.git
cd web_project_around_react
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Recent Changes

### Version 4.0.0 - 2026-06-26

- **React 19 & Vite Migration**: Ported the application from class-based OOP TypeScript to functional React components bundled with Vite.
- **Custom Hooks implementation**: Introduced `useUser`, `useCards`, `usePopups`, and `useFormValidation` to decouple business logic, state management, and side effects from the rendering layer.
- **BEM Modular Styles Integration**: Integrated existing stylesheet blocks (`card.css`, `popup.css`, etc.) into React components.
- **Prettier & ESLint Quality Tooling**: Added formatting check scripts and static code analyzer validation hooks.

### Version 3.0.0 - 2026-06-04

- **REST API Integration**: Built a custom `Api` class to handle remote calls for fetching cards and user info, updating details, managing likes, and deleting cards.
- **Profile Avatar Updates**: Added functionality to change the profile image via a dedicated popup modal, persisting the change on the server.
- **Confirmation Modal for Deletion**: Implemented a confirmation dialog (`#delete-popup`) that prompts users before removing a card, ensuring data integrity.
- **Liking & Unliking System**: Synchronized user likes with the server using `PUT` and `DELETE` requests, updating the count/UI state dynamically.
- **Clean Architecture Refactoring**: Reorganized files into distinct modular domains (`src/app/`, `src/components/popups/`, `src/services/`) and streamlined `src/index.ts` to coordinate loading and initialization through the new `App` class.

### Version 2.0.0 - 2026-06-01

- Refactored the entire project to **TypeScript** and **Object-Oriented Programming (OOP)**.
- Implemented class-based design pattern:
  - `Card`: Renders cards and manages event listeners (likes, deletes, card clicks).
  - `Section`: Manages rendering collections of elements into the DOM.
  - `Popup`: Base class for opening and closing modal windows.
  - `PopupWithImage`: Subclass of `Popup` that populates image and caption data.
  - `PopupWithForm`: Subclass of `Popup` that handles form inputs, validation integration, and submits.
  - `UserInfo`: Manages rendering and editing the user's profile info.
  - `FormValidator`: Reusable form validation logic.
- Integrated strict type definitions (`src/types/types.ts`) for data entities and form configurations.
- Set up a build workflow using a custom `tsconfig.json` to compile files from `src/` to `public/`.

## Future Improvements

- [ ] User authentication.
- [ ] Edit card details after creation.
- [ ] Unit testing with Vitest.
- [ ] End-to-end testing with Playwright.
- [x] Webpack/Vite migration.

## Versions

| Version | Date       | Description                                               |
| ------- | ---------- | --------------------------------------------------------- |
| 1.0.0   | 2026-04-28 | Initial version                                           |
| 1.0.2   | 2026-04-28 | Added JavaScript and profile popup functionality          |
| 1.0.3   | 2026-04-30 | Added initial cards, image popup, like and delete actions |
| 1.0.4   | 2026-05-21 | Modularized JavaScript and added form validation          |
| 2.0.0   | 2026-06-01 | Migrated project to TypeScript and OOP architecture       |
| 3.0.0   | 2026-06-04 | Integrated REST API, avatar edits, confirmation popups    |
| 4.0.0   | 2026-06-26 | Migrated project to React, Custom Hooks, and Vite         |

## Author

Ricardo Trejo
