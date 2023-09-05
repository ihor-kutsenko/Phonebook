import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
} from './operations';

const extraActions = [fetchContacts, addContact, deleteContact, changeContact];
export const getActions = type => extraActions.map(action => action[type]);

export const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
  state.isLoading = false;
};

export const handleFulfilledDelete = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
  state.isLoading = false;
};

export const handleFulfilledChange = (state, { payload }) => {
  const index = state.items.findIndex(({ id }) => id === payload.id);
  if (index !== -1) {
    state.items[index] = payload;
  }
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
