/* import - node_modules */
import React from 'react';

/*
 * COMONENT
 */
const Filter = ({ value, onChange }) => (
  <form>
    <input type="text" value={value} onChange={onChange} name="filter" />
  </form>
);

export default Filter;
