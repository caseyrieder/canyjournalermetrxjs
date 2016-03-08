const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Main from '../Main.jsx';
import Navigation from '../Navigation.jsx';

describe('core.layouts.Main', () => {
  it('should contain navigation', () => {
    const el = shallow(<Main />);
    expect(el.contains(<Navigation />)).to.be.equal(true);
  });

  it('should render children', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <Main content={() => (<Comp />)}/>
    );
    expect(el.contains(<Comp />)).to.be.equal(true);
  });
});
