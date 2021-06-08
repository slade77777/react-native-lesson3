import {render, fireEvent, waitFor} from '@testing-library/react-native';
import React from 'react';
import Input from '../component/Input';

test('should match snapshot', () => {
  const view = render(<Input label={'name'} />);
  expect(view).toMatchSnapshot();
});

test('should render correct', () => {
  const view = render(
    <Input label={'name'} placeholder={'cuong'} value={'name updated'} />,
  );
  expect(view.getByText('name')).toBeTruthy();
  expect(view.getByDisplayValue('name updated')).toBeTruthy();
  expect(view.getByPlaceholderText('cuong')).toBeTruthy();
});

test('should run change correctly', async () => {
  const changeText = jest.fn() as jest.MockedFunction<any>;
  const view = render(
    <Input
      label={'name'}
      placeholder={'cuong'}
      value={'name updated'}
      onChange={changeText}
    />,
  );
  await waitFor(() => {
    fireEvent(
      view.getByPlaceholderText('cuong'),
      'onChangeText',
      'new cuong',
    );
  });
  expect(changeText).toBeCalled();
});
