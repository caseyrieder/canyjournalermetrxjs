const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Home from '../Home.jsx';

describe('core.layouts.Home', () => {
  it('should contain welcome text in h1', () => {
    const el = shallow(<Home />);
    const hdr = el.find('h1');
    expect(hdr.text()).to.include('Welcome');
  });

  it('should render first h3 with register link', () => {
    const el = shallow(<Home />);
    const first = el.find('h3').at(0);
    const regLink = first.find('a');
    expect(regLink.text()).to.be.equal('register');
    expect(regLink.prop('href')).to.be.equal('/register');
  });

  it('should render second h3 with login link', () => {
    const el = shallow(<Home />);
    const second = el.find('h3').at(1);
    const lgnLink = second.find('a');
    expect(lgnLink.text()).to.be.equal('login');
    expect(lgnLink.prop('href')).to.be.equal('/login');
  });
});
