import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';

import { selectFilter } from 'redux/selectors';
import { filterContact } from 'redux/filter/filterSlice';

import { Label, LabelWrapper, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const searchFilter = e => {
    dispatch(filterContact(e.currentTarget.value.toLowerCase()));
  };

  return (
    <Label>
      <LabelWrapper>
        <BsSearch size="14" /> Find contacts by name
      </LabelWrapper>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={searchFilter}
        placeholder="search"
      />
    </Label>
  );
};

export default Filter;
