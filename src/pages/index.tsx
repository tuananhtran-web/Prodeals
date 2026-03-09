import { useEffect, useState } from "react";
import { Page, Icon, Button, Text, Box } from "zmp-ui";
import { useNavigate } from "zmp-ui";

const categories = [
  { label: "Pickleball", emoji: "🏓" },
  { label: "Tennis", emoji: "🎾" },
  { label: "Bóng đá", emoji: "⚽" },
  { label: "Cầu lông", emoji: "🏸" },
  { label: "Bida", emoji: "🎱" },
  { label: "Bóng bàn", emoji: "🏓" },
];

const tabs = ["Pickleball", "Tennis", "Bóng đá", "Cầu lông"];
const products = [
  {
    brand: "ADIDAS",
    title: "Vợt Pickleball Adidas Adipower 2024",
    price: "2.450.000đ",
    oldPrice: "4.150.000đ",
    progress: "12/30 Suất đã đăng ký",
    discount: "40%",
    image:
      "https://images.unsplash.com/photo-1570006164253-437f3b36f2ed?q=80&w=400&auto=format&fit=crop",
    progressPercent: 40,
    category: "Pickleball",
  },
  {
    brand: "NIKE",
    title: "Giày Tennis Nike Zoom Vapor Air Max",
    price: "1.890.000đ",
    oldPrice: "3.050.000đ",
    progress: "24/30 Suất đã đăng ký",
    discount: "38%",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop",
    progressPercent: 80,
    category: "Tennis",
  },
  {
    brand: "WILSON",
    title: "Hộp Bóng Tennis Wilson US Open (12 bóng)",
    price: "450.000đ",
    oldPrice: "530.000đ",
    progress: "9/60 Suất đã đăng ký",
    discount: "15%",
    image:
      "https://images.unsplash.com/photo-1724868207721-26a509fb0fa3?q=80&w=400&auto=format&fit=crop",
    progressPercent: 15,
    category: "Tennis",
  },
  {
    brand: "UNDER ARMOUR",
    title: "Bộ Băng Đô Thể Thao UA Performance",
    price: "299.000đ",
    oldPrice: "420.000đ",
    progress: "95/100 Suất đã đăng ký",
    discount: "29%",
    image:
      "https://images.unsplash.com/photo-1520975693415-41ae163491eb?q=80&w=400&auto=format&fit=crop",
    progressPercent: 95,
    category: "Cầu lông",
  },
];

function HomePage() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const bottomTabs = [
    { key: "home", label: "Trang chủ", icon: "zi-home" },
    { key: "discover", label: "Khám phá", icon: "zi-discover" },
    { key: "notif", label: "Thông báo", icon: "zi-noti" },
    { key: "profile", label: "Cá nhân", icon: "zi-user" },
  ];
  const [bottomTab, setBottomTab] = useState(bottomTabs[0].key);

  const banners = [
    {
      badge: "ƯU ĐÃI KHỦNG",
      textA: "Trang Phục Thể Thao Cao Cấp",
      textB: "Ưu Đãi Đến 50%",
      gradient: "from-teal-500 to-green-400",
    },
    {
      badge: "HOT DEALS",
      textA: "Giày & Phụ Kiện Thể Thao",
      textB: "Giảm Sốc 40%",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      badge: "FLASH SALE",
      textA: "Dụng Cụ Tập Luyện Cao Cấp",
      textB: "Chỉ Hôm Nay",
      gradient: "from-orange-500 to-red-500",
    },
  ];
  const [activeBanner, setActiveBanner] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setActiveBanner((i) => (i + 1) % banners.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <Page className="bg-white">
      <div className="w-full bg-red-600 text-white pt-4 pb-3 px-4">
        <div className="flex items-center justify-between">
          <Text className="font-semibold">Prodeals by VJD Sports</Text>
          <div className="flex items-center gap-3">
            <button className="icon-badge">
              <Icon icon="zi-noti" className="text-red-600" />
            </button>
            <button className="icon-badge">
              <Icon icon="zi-user" className="text-red-600" />
            </button>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="search-box flex items-center bg-white rounded-full px-3 py-2 flex-1">
            <Icon icon="zi-search" className="text-gray-500 mr-2" />
            <input
              className="flex-1 bg-transparent text-sm outline-none placeholder-gray-400 text-gray-700"
              placeholder="Tìm kiếm ưu đãi..."
            />
          </div>
          <button className="icon-badge">
            <Icon icon="zi-camera" />
          </button>
        </div>
      </div>

      <div className="px-4 mt-4">
        <div className={`relative rounded-2xl h-28 bg-gradient-to-r ${banners[activeBanner].gradient} text-white p-4 transition-all`}>
          <div className="text-xs inline-flex px-2 py-1 bg-red-600 rounded-full">
            {banners[activeBanner].badge}
          </div>
          <div className="mt-2 font-semibold">
            {banners[activeBanner].textA}{" "}
            <span className="font-bold">{banners[activeBanner].textB}</span>
          </div>
          <div className="absolute right-4 bottom-3 flex gap-1">
            {banners.map((_, i) => (
              <button
                key={i}
                className={i === activeBanner ? "banner-dot active" : "banner-dot"}
                onClick={() => setActiveBanner(i)}
                aria-label={`banner-${i}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 mt-4 grid grid-cols-4 gap-4">
        {categories.slice(0, 8).map((c) => (
          <button
            key={c.label}
            className="flex flex-col items-center"
            onClick={() => {
              const slug =
                c.label === "Pickleball"
                  ? "pickleball"
                  : c.label === "Tennis"
                  ? "tennis"
                  : c.label === "Bóng đá"
                  ? "bong-da"
                  : "";
              if (slug) navigate(`/category/${slug}`);
            }}
          >
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-xl">
              {c.emoji}
            </div>
            <div className="mt-2 text-xs text-gray-700">{c.label}</div>
          </button>
        ))}
      </div>

      <div className="px-4 mt-5 flex gap-6 text-sm">
        {tabs.map((t) => (
          <button
            key={t}
            className="relative tab-item"
            onClick={() => {
              const slug =
                t === "Pickleball" ? "pickleball" : t === "Tennis" ? "tennis" : t === "Bóng đá" ? "bong-da" : "";
              if (slug) navigate(`/category/${slug}`);
              setSelectedTab(t);
            }}
          >
            <span className={selectedTab === t ? "text-red-600 font-medium" : "text-gray-600"}>
              {t}
            </span>
            {selectedTab === t && (
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-red-600 rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="px-4 mt-4 grid grid-cols-1 gap-3">
        {products.filter((p) => p.category === selectedTab).map((p) => (
          <div key={p.title} className="rounded-xl border border-gray-200 p-3 shadow-sm">
            <div className="flex gap-3">
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="brand-chip">{p.brand}</span>
                </div>
                <div className="mt-1 text-sm font-medium text-gray-800 line-clamp-2">
                  {p.title}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-red-600 font-semibold">{p.price}</span>
                  <span className="text-gray-400 line-through text-xs">{p.oldPrice}</span>
                  <span className="discount-pill">{p.discount}</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">{p.progress}</div>
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
          </div>
        ))}
      </div>

      <div className="h-28" />

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 bottom-nav">
        <div className="flex justify-around py-3">
          {bottomTabs.map((b) => (
            <button
              key={b.key}
              className="flex flex-col items-center bottom-item"
              onClick={() => setBottomTab(b.key)}
            >
              <Icon icon={b.icon as any} className={bottomTab === b.key ? "text-red-600" : "text-gray-600"} />
              <span className={`text-xs mt-1 ${bottomTab === b.key ? "text-red-600" : "text-gray-600"}`}>
                {b.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </Page>
  );
}

export default HomePage;
