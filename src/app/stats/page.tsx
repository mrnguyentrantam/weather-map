import WeatherSummary from "../WeatherSummary";

export default function StatsPage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Thống kê thời tiết</h2>
      <p>
        Trang này sẽ hiển thị các biểu đồ, số liệu thống kê về dữ liệu thời
        tiết, số điểm, vùng, cảnh báo, v.v.
      </p>
      <WeatherSummary />
    </div>
  );
}
