import Button from '../Button'
import ShallowRenderer from 'react-test-renderer/shallow';


describe('src/components/Button', () => {
  test('should be rendered correctly', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Button />);
    expect(tree).toMatchSnapshot();
  })
})
