import Navbar from '../Navbar'
import ShallowRenderer from 'react-test-renderer/shallow';


describe('src/components/Navbar', () => {
  test('should be rendered correctly', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Navbar />);
    expect(tree).toMatchSnapshot();
  })
})
