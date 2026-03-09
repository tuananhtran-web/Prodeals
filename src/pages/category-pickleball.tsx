import { useState } from "react";
import { Page, Icon, Button, Text } from "zmp-ui";
import { useNavigate } from "zmp-ui";

const subcats = [
  { key: "vot", label: "Vợt", icon: "zi-badminton" },
  { key: "giay", label: "Giày", icon: "zi-shoe" },
  { key: "luoi", label: "Lưới", icon: "zi-grid" },
  { key: "dongphuc", label: "Đồng phục", icon: "zi-tshirt" },
];

const items = [
  {
    brand: "ADIDAS",
    title: "Adidas Carbon Paddles",
    desc: "Dành cho vận động viên chuyên nghiệp hạng A.",
    image:
      "https://images.unsplash.com/photo-1570006164253-437f3b36f2ed?q=80&w=800&auto=format&fit=crop",
    progressText: "Số lượng hỗ trợ 15/20",
    progressPercent: 75,
    hot: false,
    soldOut: false,
  },
  {
    brand: "NIKE",
    title: "Nike Pickleball Shoes",
    desc: "Đế ngoài cao su tăng cường độ bám trên mặt sân.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    progressText: "Số lượng hỗ trợ 8/30",
    progressPercent: 30,
    hot: false,
    soldOut: false,
  },
  {
    brand: "VJD SPORTS",
    title: "Professional Net set",
    desc: "Bộ lưới tiêu chuẩn thi đấu quốc tế USAPA.",
    image:
      "https://images.unsplash.com/photo-1519996529153-2d42c5598b6e?q=80&w=800&auto=format&fit=crop",
    progressText: "Số lượng hỗ trợ 5/5",
    progressPercent: 100,
    hot: false,
    soldOut: true,
  },
  {
    brand: "TEAM",
    title: "Team Uniforms",
    desc: "Thiết kế áo đấu riêng biệt cho câu lạc bộ.",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
    progressText: "Số lượng hỗ trợ 12/30",
    progressPercent: 40,
    hot: false,
    soldOut: false,
  },
];

function CategoryPickleball() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("vot");
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
              placeholder="Tìm kiếm ưu đãi Pickleball"
            />
          </div>
          <button className="icon-badge">
            <Icon icon="zi-cart" className="text-red-600" />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <Text className="font-semibold">Danh mục: Pickleball</Text>
          <button className="icon-badge">
            <Icon icon="zi-filter" className="text-red-600" />
          </button>
        </div>
      </div>

      <div className="px-4 mt-4 grid grid-cols-4 gap-3">
        {subcats.map((s) => (
          <button
            key={s.key}
            className={`pill-chip ${selected === s.key ? "active" : ""}`}
            onClick={() => setSelected(s.key)}
          >
            <Icon icon={s.icon as any} />
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      <div className="px-4 mt-5 flex items-center justify-between">
        <Text className="font-medium">Ưu đãi nổi bật</Text>
        <button className="text-red-600 text-xs">Xem tất cả</button>
      </div>

      <div className="px-4 mt-3 grid grid-cols-1 gap-3">
        {items.map((p, idx) => (
          <div key={idx} className="rounded-xl border border-gray-200 overflow-hidden bg-white">
            <div className="relative">
              <img src={p.image} alt={p.title} className="w-full h-36 object-cover" />
              {p.hot && (
                <span className="status-badge hot">HOT DEAL</span>
              )}
              {p.soldOut && (
                <span className="status-badge soldout">Đã hết</span>
              )}
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
                <Button className="w-full elevated" disabled={p.soldOut} variant="primary">
                  {p.soldOut ? "Hết lượt đăng ký" : "Đăng ký ngay"}
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

export default CategoryPickleball;
