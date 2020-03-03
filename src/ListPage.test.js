import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ListPage from './ListPage';

test('ListPage should update product name on change', () => {
  const testFn = jest.fn();
  const propItems = [];
  const user = {a: 1};
  const house = {a: 1};

  const { getByTestId } = render(
    <ListPage propItems={propItems} user={user} house={house} testFn={testFn} />
  );
  
})
