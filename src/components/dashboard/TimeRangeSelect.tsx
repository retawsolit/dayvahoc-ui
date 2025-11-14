const TimeRangeSelect = () => {
  return (
    <select
      className="border border-border bg-background text-sm rounded-md px-3 py-1 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
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
