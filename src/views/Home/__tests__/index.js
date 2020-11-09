import Home from '../Home'
import ShallowRenderer from 'react-test-renderer/shallow';
import { useSelector } from 'react-redux';


describe('src/components/Home', () => {
  test('should be rendered correctly', () => {
    useSelector.mockImplementationOnce(fn => {
      fn()
      return {
        listPokemon: [],
        nextFetcehdList: ''
      }
    })
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Home />);
    expect(tree).toMatchSnapshot();
  })
})
