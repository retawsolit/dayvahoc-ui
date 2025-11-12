const TimeRangeSelect = () => {
  return (
    <select
      className="border text-sm rounded-md px-3 py-1 text-gray-700 shadow-sm"
      defaultValue="6 tháng"
    >
      <option>Tuần này</option>
      <option>Tháng này</option>
      <option>6 tháng</option>
      <option>Năm nay</option>
    </select>
  );
};

export default TimeRangeSelect;
