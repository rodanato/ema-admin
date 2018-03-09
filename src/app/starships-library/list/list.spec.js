import { searchWordInEachItem } from './list.component';

let list = {
  'first': 'Water',
  'second': 'Executor'
};

test('returns false if search word does not exist inside the item', () => {
  expect(searchWordInEachItem('agua', list.first.toLowerCase())).toBe(false);
});


test('returns true if search word does exist inside the item', () => {
  expect(searchWordInEachItem('e', list.second.toLowerCase())).toBe(true);
});
