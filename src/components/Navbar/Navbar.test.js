import { useContext,createContext } from "react";
import { InputContext } from '../BookContext';

import {configure,shallow} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16'

import Navbar from './Navbar'

configure({adapter: new Adapter()})

const MyContext = createContext({});

export const MyComponent = () => {
  const { search } = useContext(InputContext);

  return <div data-test="my-component">{search}</div>;
};
describe('Navbar', () => {
    test('should click button', () => {
        const wrapper = shallow(<Navbar/>,
            {
                wrappingComponent: InputContext,
                wrappingComponentProps: { value: { search: 'foobar' }
              }
            }
              );
        console.log(wrapper.debug());
    })
})
