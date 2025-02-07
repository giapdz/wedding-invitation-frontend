# Wedding Invitation Frontend

A beautiful and responsive wedding invitation website built with React.

## Features

- 📱 Fully responsive design for all devices
- 💫 Smooth animations and transitions
- 🎨 Modern and elegant UI
- 📝 Interactive RSVP and wishes wall
- 📍 Location maps integration
- ⏱️ Wedding countdown timer
- 📸 Photo gallery with lightbox

## Tech Stack

- React.js
- Material-UI (MUI)
- Framer Motion
- Axios
- React Router

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/giapdz/wedding-invitation-frontend.git
cd wedding-invitation-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=your_backend_api_url
```

4. Start the development server:
```bash
npm start:dev
# or
yarn start:dev
```

### Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

This project is configured for deployment on Vercel. Simply:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Configure environment variables
4. Deploy!

## Project Structure

```
src/
├── components/         # Reusable components
├── pages/             # Page components
├── assets/            # Static assets (images, fonts)
├── config/            # Configuration files
├── styles/            # Global styles
└── App.js             # Main application component
```

## Environment Variables

- `REACT_APP_API_URL`: Backend API URL

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
