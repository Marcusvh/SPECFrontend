interface metricProps {
    label: string,
    color: string,
    value: string | any
}

const Metric : React.FC<metricProps> = ({ label, color, value }) => (
  <div className="metric">
    <span>{label}</span>
    <div className="bar">
      <div className={`fill ${color}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);
export default Metric