import * as saga from '../sagas/saga';
import * as commonFunctions from '../common/common'

describe('saga', () => {
    var fetchBookData;
    beforeAll(() => {
        fetchBookData = saga.fetchBookData();
        commonFunctions.fetchBookData = jest.fn(() => 'haveBeenCalled');
    })

    it('fetching book data', () => {
        expect(fetchBookData.next().value.CALL.fn()).toEqual('haveBeenCalled');
    })

    it('fetching book data', () => {
        expect(fetchBookData.next().value.CALL.fn()).toEqual('haveBeenCalled');
    })
})