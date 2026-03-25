import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-intl-redux';
import CheckboxWidget from './CheckboxWidget';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);
const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
    formatMessage: jest.fn(),
  },
});

const mockOnChange = jest.fn();

describe('CheckboxWidget', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders a checkbox', async () => {
    const { findByText } = render(
      <Provider store={store} locale="en">
        <CheckboxWidget
          id="test"
          title="Test Checkbox"
          onChange={mockOnChange}
        />
      </Provider>,
    );
    expect(await findByText('Test Checkbox')).toBeInTheDocument();
  });

  it('sets a default value if given', async () => {
    render(
      <Provider store={store} locale="en">
        <CheckboxWidget
          id="test"
          title="Test Checkbox"
          onChange={mockOnChange}
          defaultValue={true}
        />
      </Provider>,
    );
    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith('test', true);
    });
  });

  it('does not set a default value if already having a value', () => {
    render(
      <Provider store={store} locale="en">
        <CheckboxWidget
          id="test"
          title="Test Checkbox"
          onChange={mockOnChange}
          value={false}
          defaultValue={true}
        />
      </Provider>,
    );
    expect(mockOnChange).not.toHaveBeenCalled();
  });
});
