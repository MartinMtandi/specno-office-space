# Specno Office Space Management

A React application for managing office spaces and employees. This application allows users to create, view, and manage office spaces along with their assigned employees.

## Features

- **Office Management**
  - Create new office spaces with details like name, location, and capacity
  - View list of all offices with their current occupancy
  - Delete offices when no longer needed
  - Responsive design for various screen sizes

- **Employee Management**
  - Add employees to specific offices
  - View employee details within each office
  - Remove employees from offices
  - Track office capacity and available seats

- **Form Validation**
  - Comprehensive form validation using Formik and Yup
  - Real-time validation feedback
  - Prevention of duplicate office names
  - Capacity validation for employee assignments

## Technology Stack

- React 18.3
- TypeScript
- Vite (for build tooling)
- React Router DOM (for navigation)
- Styled Components (for styling)
- Formik & Yup (for form management and validation)
- Testing Library (React, Jest DOM, User Event)

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

Development mode:
```bash
npm run dev
# or
yarn dev
```

Production build:
```bash
npm run build
npm run preview
# or
yarn build
yarn preview
```

## Testing

The application includes a comprehensive test suite. To run the tests:

```bash
# Run tests in watch mode
npm test
# or
yarn test

# Run tests once
npm run test:run
# or
yarn test:run

# Run tests with coverage
npm run test:coverage
# or
yarn test:coverage
```

## Optimization Techniques

1. **Code Splitting**
   - Lazy loading of routes using React.lazy()
   - Dynamic imports for better initial load time

2. **Performance**
   - Memoization of components where beneficial
   - Efficient state management
   - Optimized re-renders

3. **TypeScript Integration**
   - Strong type safety
   - Better developer experience
   - Reduced runtime errors

4. **Build Optimization**
   - Vite's built-in optimizations
   - Tree shaking for smaller bundle size
   - Incremental TypeScript builds

## Future Improvements

1. **Features**
   - Office floor plans and visual representation
   - Employee scheduling and desk booking
   - Office resources management
   - Advanced search and filtering capabilities

2. **Technical Enhancements**
   - Implementation of state management solution (Redux/Context) for larger scale
   - Backend integration for persistent data storage
   - Real-time updates using WebSocket
   - Progressive Web App (PWA) capabilities
   - Enhanced accessibility features
   - More comprehensive test coverage
   - CI/CD pipeline setup

3. **UI/UX Improvements**
   - Dark mode support
   - More interactive animations
   - Customizable themes

## Architecture

### Project Structure

The application follows a modular architecture with clear separation of concerns:

```
src/
├── assets/          # Static assets (images, icons, logos)
├── components/      # Reusable UI components
├── layouts/         # Layout components and templates
├── pages/          # Route-level components
├── services/       # Business logic and data handling
├── theme/          # Styling themes and constants
└── __tests__/      # Test files for each module
```

### Key Architectural Decisions

1. **Component Architecture**
   - Follows atomic design principles
   - Components are organized by functionality and reusability
   - Strict separation between presentational and container components
   - Each component has its own dedicated test suite

2. **Routing System**
   - React Router v7 for client-side routing
   - Lazy-loaded routes for better performance
   - Route-based code splitting

3. **State Management**
   - Local component state using React hooks
   - Props drilling minimized through careful component composition
   - Form state managed by Formik

4. **Styling Architecture**
   - Styled Components for component-level styling
   - Theme provider for consistent design system
   - Responsive design patterns
   - CSS-in-JS for better maintainability

5. **Testing Strategy**
   - Jest and React Testing Library
   - Component-level unit tests
   - Mock service workers for API testing

6. **Performance Optimizations**
   - Code splitting using React.lazy()
   - Asset optimization and lazy loading
   - Memoization of expensive computations
   - Tree-shakeable imports

7. **Type System**
   - TypeScript for type safety
   - Strict type checking enabled
   - Interface-first design approach
   - Shared type definitions
   - Generic types for reusable components

8. **Build System**
   - Vite for fast development and optimized production builds
   - Hot Module Replacement (HMR)
   - Optimized asset bundling
   - Incremental TypeScript compilation

### Data Flow

1. **Component Hierarchy**
   - MainLayout: Provides the base structure
   - Page Components: Handle route-level logic
   - Feature Components: Implement specific functionality
   - Common Components: Provide reusable UI elements

2. **State Management Flow**
   - User interactions trigger state updates
   - State changes propagate through component tree
   - Side effects handled by useEffect hooks
   - Form state managed by Formik with Yup validation

3. **Error Handling**
   - Component-level error states
   - Form validation error handling
   - Graceful fallbacks for loading states


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
