import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Primary, Secondary } = composeStories(stories);

test('renders primary <Button/> with default args', () => {
  render(<Primary />);
  const buttonElement = screen.getByText(/Primary Button/i);

  expect(buttonElement).not.toBeNull();
});

test('renders secondary <Button/> with default args', () => {
  render(<Secondary />);
  const buttonElement = screen.getByText(/Secondary Button/i);

  expect(buttonElement).not.toBeNull();
});
