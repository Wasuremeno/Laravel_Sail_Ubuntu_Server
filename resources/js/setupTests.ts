import '@testing-library/jest-dom';

// Mock Laravel Ziggy if you use it
jest.mock('ziggy-js', () => ({
  default: jest.fn(),
  route: jest.fn(),
}));

// Global test setup
beforeEach(() => {
  // Reset mocks or setup global test configuration
});

afterEach(() => {
  // Cleanup after tests
});