import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-intl-redux';
import CheckboxWidget from './CheckboxWidget';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';

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

  it('renders a checkbox', () => {
    const { getByText } = render(
      <Provider store={store} locale="en">
        <CheckboxWidget
          id="test"
          title="Test Checkbox"
          onChange={mockOnChange}
        />
      </Provider>,
    );
    expect(getByText('Test Checkbox')).toBeInTheDocument();
  });

  it('sets a default value if given', () => {
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
    expect(mockOnChange).toHaveBeenCalledWith('test', true);
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
