import Card from '../Card'
import ShallowRenderer from 'react-test-renderer/shallow';


describe('src/components/Card', () => {
  test('should be rendered correctly', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Card />);
    expect(tree).toMatchSnapshot();
  })
})
