import { useState } from "react";
import { Page, Icon, Button, Text } from "zmp-ui";
import { useNavigate } from "zmp-ui";

const filters = [
  { key: "giay", label: "Giày bóng" },
  { key: "bong", label: "Bóng đá" },
  { key: "trangphuc", label: "Trang phục" },
  { key: "baohộ", label: "Bảo hộ" },
];

const items = [
  {
    brand: "Adidas Official",
    title: "Giày đá bóng Adidas Predator Elite FG",
    desc: "Đế FG cho sân cỏ tự nhiên.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
    progressText: "Suất hỗ trợ 12/15",
    progressPercent: 75,
    hot: true,
  },
  {
    brand: "FIFA Spec",
    title: "Bóng Pume Matchball Pro - FIFA Quality",
    desc: "Đạt chuẩn thi đấu quốc tế.",
    image:
      "https://images.unsplash.com/photo-1521417531140-0fe25be70f86?q=80&w=800&auto=format&fit=crop",
    progressText: "Suất hỗ trợ 6/10",
    progressPercent: 60,
    hot: false,
  },
  {
    brand: "Nike Football",
    title: "Áo đấu Nike Club Jersey - Dri-FIT Technology",
    desc: "Thoáng mát, co giãn tốt.",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
    progressText: "Suất hỗ trợ 40/100",
    progressPercent: 40,
    hot: false,
  },
  {
    brand: "VJD Pro",
    title: "Bọc ống chân Carbon Professional Shin Guard",
    desc: "Giảm chấn mạnh.",
    image:
      "https://images.unsplash.com/photo-1598136490953-cf28ea4f8a43?q=80&w=800&auto=format&fit=crop",
    progressText: "Suất hỗ trợ 20/50",
    progressPercent: 40,
    hot: false,
  },
];

function CategoryBongDa() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(filters[0].key);

  return (
    <Page className="bg-white">
      <div className="w-full bg-red-600 text-white pt-4 pb-3 px-4">
        <div className="flex items-center gap-2">
          <button className="icon-badge" onClick={() => navigate(-1)}>
            <Icon icon="zi-arrow-left" className="text-red-600" />
          </button>
          <div className="search-box flex items-center bg-white rounded-full px-3 py-2 flex-1">
            <Icon icon="zi-search" className="text-gray-500 mr-2" />
            <input
              className="flex-1 bg-transparent text-sm outline-none placeholder-gray-400 text-gray-700"
              placeholder="Tìm kiếm ưu đãi Bóng đá"
            />
          </div>
          <button className="icon-badge">
            <Icon icon="zi-cart" className="text-red-600" />
          </button>
        </div>
        <div className="mt-3">
          <Text className="font-semibold">Danh mục: Bóng đá</Text>
        </div>
      </div>

      <div className="px-4 mt-3 flex gap-2 overflow-x-auto">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`pill-chip ${filter === f.key ? "active" : ""}`}
            onClick={() => setFilter(f.key)}
          >
            <span>{f.label}</span>
          </button>
        ))}
      </div>

      <div className="px-4 mt-4 grid grid-cols-1 gap-3">
        {items.map((p, idx) => (
          <div key={idx} className="rounded-xl border border-gray-200 overflow-hidden bg-white">
            <div className="relative">
              <img src={p.image} alt={p.title} className="w-full h-36 object-cover" />
              {p.hot && <span className="status-badge hot">TẤT NHIÊN</span>}
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <span className="brand-chip">{p.brand}</span>
              </div>
              <div className="mt-1 text-sm font-medium text-gray-800">{p.title}</div>
              <div className="mt-1 text-xs text-gray-500">{p.desc}</div>
              <div className="mt-2 text-xs text-gray-500">{p.progressText}</div>
              <div className="mt-1 progress-bar">
                <div className="progress-fill" style={{ width: `${p.progressPercent}%` }} />
              </div>
              <div className="mt-3">
                <Button className="w-full elevated" variant="primary">
                  Đăng ký ngay
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-28" />
    </Page>
  );
}

export default CategoryBongDa;
