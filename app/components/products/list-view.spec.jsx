import React from 'react';
import { mount } from 'enzyme';

import ProductsList from './list-view';

const mockProductsList = [
  { id: 1, name: 'test product 1' },
  { id: 2, name: 'test product 2' },
];

let wrapper;
const deleteClickHandlerMock = jest.fn();

beforeAll(() => {
  wrapper = mount(<ProductsList
    products={mockProductsList}
    deleteHandler={deleteClickHandlerMock}
  />);
});

describe('ProductsList View', () => {
  it('Renders products component with properties', () => {
    expect(wrapper).toMatchSnapshot();
    expect(Array.isArray(wrapper.prop('products'))).toEqual(true);
    expect(wrapper.prop('products').length).toEqual(2);
  });

  it('Renders products list items and its titles', () => {
    expect(wrapper.find('tbody').find('tr').length).toEqual(2);
    const firstProduct = wrapper.find('tbody').find('tr').at(0);
    expect(firstProduct.find('td').at(2).text()).toEqual(mockProductsList[0].name);
  });
});
