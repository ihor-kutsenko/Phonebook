import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';

import { selectFilter } from 'redux/selectors';
import { filterContact } from 'redux/filter/filterSlice';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const searchFilter = e => {
    dispatch(filterContact(e.currentTarget.value.toLowerCase()));
  };

  return (
    <label className={css.label}>
      <div className={css.label_wrapper}>
        <BsSearch size="14" /> Find contacts by name
      </div>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={searchFilter}
        placeholder="search"
      />
    </label>
  );
};

export default Filter;
