import { useState } from "react";
import { Page, Icon, Button, Text } from "zmp-ui";
import { useNavigate } from "zmp-ui";

const filters = ["Tất cả", "Vợt Tennis", "Giày", "Phụ kiện", "Quần áo"];
const brands = ["Wilson", "Nike", "Lacoste"];

const items = [
  {
    brand: "Wilson",
    title: "Vợt Wilson Pro Staff Series",
    desc: "Ưu đãi hỗ trợ phí đổi mới dành cho vận động viên Đông Nam Á.",
    image:
      "https://images.unsplash.com/photo-1521417531140-0fe25be70f86?q=80&w=800&auto=format&fit=crop",
    progressText: "Suất hỗ trợ đã đăng ký: 12/20",
    progressPercent: 60,
    hot: true,
  },
  {
    brand: "Head",
    title: "Bóng Tennis Head Tour XT",
    desc: "Bồng có thành phần tăng độ bền cho các buổi luyện tập.",
    image:
      "https://images.unsplash.com/photo-1724868207721-26a509fb0fa3?q=80&w=800&auto=format&fit=crop",
    progressText: "Suất hỗ trợ đã đăng ký: 45/50",
    progressPercent: 90,
    hot: false,
  },
  {
    brand: "Nike",
    title: "Giày Nike Court Zoom Pro",
    desc: "Đế giày chuyên dụng cho mặt sân cứng với độ bền cao.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    progressText: "Suất hỗ trợ đã đăng ký: 8/15",
    progressPercent: 53,
    hot: false,
  },
  {
    brand: "Lacoste",
    title: "Áo Lacoste Tennis Polo",
    desc: "Trang phục thi đấu chính hãng theo công nghệ thoát mồ hôi.",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
    progressText: "Suất hỗ trợ đã đăng ký: 9/10",
    progressPercent: 90,
    hot: false,
  },
];

function CategoryTennis() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(filters[0]);
  const [brand, setBrand] = useState<string | null>(null);

  const shown = items.filter((i) => (brand ? i.brand === brand : true));

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
              placeholder="Tìm kiếm ưu đãi Tennis"
            />
          </div>
          <button className="icon-badge">
            <Icon icon="zi-cart" className="text-red-600" />
          </button>
        </div>
        <div className="mt-3">
          <Text className="font-semibold">Danh mục: Tennis</Text>
        </div>
      </div>

      <div className="px-4 mt-3 flex gap-2 overflow-x-auto">
        {filters.map((f) => (
          <button
            key={f}
            className={`pill-chip ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            <span>{f}</span>
          </button>
        ))}
      </div>
      <div className="px-4 mt-3 flex gap-2 overflow-x-auto">
        {brands.map((b) => (
          <button
            key={b}
            className={`brand-chip ${brand === b ? "bg-red-100 text-red-700" : ""}`}
            onClick={() => setBrand(brand === b ? null : b)}
          >
            {b}
          </button>
        ))}
      </div>

      <div className="px-4 mt-4 grid grid-cols-1 gap-3">
        {shown.map((p, idx) => (
          <div key={idx} className="rounded-xl border border-gray-200 overflow-hidden bg-white">
            <div className="relative">
              <img src={p.image} alt={p.title} className="w-full h-36 object-cover" />
              {p.hot && <span className="status-badge hot">HOT DEAL</span>}
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <span className="brand-chip">{p.brand}</span>
                <Icon icon="zi-more" />
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

export default CategoryTennis;
