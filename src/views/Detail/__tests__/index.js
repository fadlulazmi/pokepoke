import Detail from '../Detail'
import ShallowRenderer from 'react-test-renderer/shallow';
import { useSelector } from 'react-redux';

describe('src/components/Detail', () => {
  test('should be rendered correctly', () => {
    useSelector.mockImplementationOnce(fn => {
      fn()
      return {
        detailPokemon: {}
      }
    })
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Detail match={{params: { id: '1' }}}/>);
    expect(tree).toMatchSnapshot();
  })
})
