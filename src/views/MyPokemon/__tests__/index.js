import MyPokemon from '../MyPokemon'
import ShallowRenderer from 'react-test-renderer/shallow';
import { useSelector } from 'react-redux';


describe('src/views/MyPokemon', () => {
  test('should be rendered correctly', () => {
    useSelector.mockImplementationOnce(fn => {
      fn()
      return {
        myPokemon: []
      }
    })
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<MyPokemon />);
    expect(tree).toMatchSnapshot();
  })
})
