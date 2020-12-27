import { createSelector } from 'reselect';

const selectHeader = (state) => state.header;

export const selectMenuHidden = createSelector(
  [selectHeader],
  (header) => header.isMenuHidden
);

export const selectLoginHidden = createSelector(
  [selectHeader],
  (header) => header.isLoginHidden
);

export const selectUserDropdownHidden = createSelector(
  [selectHeader],
  (header) => header.isUserDropdownHidden
);
