import { search } from '../common/common';

describe('common', () => {
    it('Search function to check if a searchString is present in text', () => {
        expect(search('text','random text')).toBeTruthy();
    })

    it('Search function to check if a searchString is not present in text or not', () => {
        expect(search('text','random value')).toBeFalsy();
    })

    it('Search function to check if a searchString has two words', () => {
        expect(search('some text','random value some text')).toBeTruthy();
    })
})