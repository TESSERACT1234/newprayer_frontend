import * as React from 'react';
import { render, screen, act } from '@testing-library/react';

import { Provider } from 'react-redux';

import store from '@/redux/store';
import { CrudContextProvider } from '@/context/crud';

import ReadItem from './index';
import FeedStoreMock from '@/test/mocksComponent/FeedStoreMock';
import { crud } from '@/redux/crud/actions';

const data = {
  company: 'PRAYERS',
  managerSurname: 'Prayers ',
  managerName: 'Prayers',
  email: 'test@gmail.com',
  phone: '0777 777 777',
};

const readColumns = [
  {
    title: 'Company',
    dataIndex: 'company',
  },
  {
    title: 'Manager first name',
    dataIndex: 'managerSurname',
  },
  {
    title: 'Manager last name',
    dataIndex: 'managerName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
];

const config = { readColumns };

const RenderedComponent = () => {
  return (
    <Provider store={store}>
      <FeedStoreMock method={crud.currentItem} data={data} />
      <CrudContextProvider>
        <ReadItem config={config} />
      </CrudContextProvider>
    </Provider>
  );
};

describe('Integration Testing : Read Component', () => {
  test('renders read component', () => {
    const { debug } = render(<RenderedComponent />);
    act(() => debug());
  });
});
