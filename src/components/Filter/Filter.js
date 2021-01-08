import './Filter.css';
const Filter = ({ value, onChangle }) => (
  <label className="item_filter">
    <p className="item_text-filter">Contacts search</p>
    <input
      className="item_element"
      type="text"
      value={value}
      onChange={onChangle}
    />
  </label>
);

export default Filter;
