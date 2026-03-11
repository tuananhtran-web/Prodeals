import { useEffect, useState } from "react";
import { Page, Button, Text } from "zmp-ui";
import { useNavigate } from "zmp-ui";

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);

const ExploreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
);

const NotifIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
);

const ProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const categories = [
  { label: "Pickleball", emoji: "🏓" },
  { label: "Tennis", emoji: "🎾" },
  { label: "Bóng đá", emoji: "⚽" },
  { label: "Cầu lông", emoji: "🏸" },
  { label: "Bida", emoji: "🎱" },
  { label: "Bóng bàn", emoji: "🏓" },
];

const tabs = ["Pickleball", "Tennis", "Bóng đá", "Cầu lông", "Bida", "Bóng bàn"];
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
    brand: "PADDLE",
    title: "Vợt Pickleball Selkirk Amped",
    price: "3.200.000đ",
    oldPrice: "4.500.000đ",
    progress: "8/20 Suất đã đăng ký",
    discount: "28%",
    image:
      "https://images.unsplash.com/photo-1626245027680-80a0880cf248?q=80&w=400&auto=format&fit=crop",
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
    brand: "ADIDAS",
    title: "Giày đá bóng Adidas Predator Elite FG",
    price: "5.200.000đ",
    oldPrice: "7.500.000đ",
    progress: "12/15 Suất đã đăng ký",
    discount: "30%",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400&auto=format&fit=crop",
    progressPercent: 80,
    category: "Bóng đá",
  },
  {
    brand: "NIKE",
    title: "Áo đấu Nike Club Jersey - Dri-FIT",
    price: "550.000đ",
    oldPrice: "850.000đ",
    progress: "40/100 Suất đã đăng ký",
    discount: "35%",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=400&auto=format&fit=crop",
    progressPercent: 40,
    category: "Bóng đá",
  },
  {
    brand: "YONEX",
    title: "Vợt Cầu Lông Yonex Astrox 100ZZ",
    price: "3.450.000đ",
    oldPrice: "4.800.000đ",
    progress: "75/100 Suất đã đăng ký",
    discount: "35%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0lEQ2-01ukxUxEo14Z4_Tz-DBlBFZ_I8WKT0IrbAs7042rWCPfXVc31hIuHBezGQ1xUpsbU5KjZdtajfDORtz8c8yOzODUaH_-r67Zp4aDSXjgKik_Gv5JyzOaQ8_eKcblqusJMhAief-8AdIjOG3_nCpnGiTEmRbMs4Rtk3ib8l89YZDkPsxyCyfmjN7cM-9uVhA17Uaqq2Q_ynu7xXMYlRY8B5K4oolGT4KIhOnowI30g6LDOBM-XmqLqs9f9T6O9SatDinx9sm",
    progressPercent: 75,
    category: "Cầu lông",
  },
  {
    brand: "VICTOR",
    title: "Giày Cầu Lông Victor P9200CC",
    price: "1.890.000đ",
    oldPrice: "2.400.000đ",
    progress: "42/50 Suất đã đăng ký",
    discount: "20%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAG-AeBVFJwtxEWYQWvPqgW5_0UQIVs_LlWcmpcRYiirm3rBB_szDGYyAgSl6QxES7MJWmaGm_XMbdt8hBPrt_rhXLAwpvgMK1Zlyepg2d68GO9YaLQKqpyF4uJkLQGNUAZNl2co2Hc5a0U8288T0KCXi-RGr9xfjF54j5Ai1hulHi52f_caYYuPb0MUVRmC7_YARcqQpUDa14C8c8ma_7n6Py_eklP7rJb8di4vBPHsHGCQaeK7_V1u-LYpdRq5crNRElJGcqome4I",
    progressPercent: 84,
    category: "Cầu lông",
  },
  {
    brand: "LINING",
    title: "Áo Cầu Lông Lining AT-DRY",
    price: "325.000đ",
    oldPrice: "650.000đ",
    progress: "120/200 Suất đã đăng ký",
    discount: "50%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5fO6llKDAkeXTNC7NbHVMW-5A0Udu_XzwjXV9uDnGUvF5bzHAIs6AHIvbxQzJI3Hlgj3P3g6D926wuTKlICsKukM-_Eaaz93y7QSF8V6kHntbr1SAlVAZgPyAIiZd944E_dugE07L612eoqfEsGWXvY-o1_rCrx_uooffCpzqZFSCNB11NJL0EV_6Kah948JXgjt9krtN4ryqOmZnH_wuaZbOSn_Doa0eiYKbxzf2hnEaFQjVXRhO0Vk_uTabDj6l2AiSs9qZqBVP",
    progressPercent: 60,
    category: "Cầu lông",
  },
  {
    brand: "VJD SPORTS",
    title: "Cơ Bida Carbon VJD Pro",
    price: "4.200.000đ",
    oldPrice: "7.000.000đ",
    progress: "45/50 Suất đã đăng ký",
    discount: "40%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1nyIDk8WrPbo9XxjyQ0C83d4YtDj7L-_6jIEFgXuIOOeSpMLzhW2xPkeEKzqFqr6c5ukoNfkk1K-CD2jpMIS-Dwgj8Pz7FLPOtnsKEUFKGw60yc3mlKUOWZ5E5h8XDPMR1DLUUnCiTZp-qkFUYMT6kpHmidxynCkeGI9gWGU-ASpetA96vUM7EVlSBmJs2ceU9qy_gD34ZA8AVIeuX0MxbHgCoA8SkzS2AFhJLYUge4QKQ1Kzo6G8jODw9loNIxl82oof7X1JG_Pr",
    progressPercent: 90,
    category: "Bida",
  },
  {
    brand: "ARAMITH",
    title: "Bộ bóng Aramith Premium",
    price: "5.850.000đ",
    oldPrice: "7.800.000đ",
    progress: "12/50 Suất đã đăng ký",
    discount: "25%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-zsLsjlxv0LuCPNwDj6ITycaEjBHsXUwN7r2nQ13CBfGSZRAzzRydLtVWgAAvF46E4xIszqVe9sEN3hH7jMhSem_2SsQlgn-UwToiu1y56gNYvcMfKMnhB3HZ0Zpp3iHccp66ITbnzbO6YRKCCZMybZv1uu6UY4X7vL1q_iwe3ZW4NaKM69Tlxb3LO1pGeZ10zSaUCly0SoEFUgZk4J2zH3mffWJkocaFYXMItd-XGUOmtvqL2QehDR-vrnrfSEym092cMeY0I5FV",
    progressPercent: 24,
    category: "Bida",
  },
  {
    brand: "BUTTERFLY",
    title: "Vợt Butterfly Timo Boll ALC",
    price: "3.250.000đ",
    oldPrice: "4.100.000đ",
    progress: "18/20 Suất đã đăng ký",
    discount: "20%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMYaC7A_J-IeXLbv20cuUGlDiz_ZuE8cqoDqKCMBW70CGnawaT_n0gXk6UWG3RbCvyFSE22sslCBwpFx6HtYSR-M-bKFyJN_qz7U7EWeKiLE8lx0_6gbSzcZn_hFb1ERMZAg0NL_FK7ZDXCSQa0iXHHIRDv8Gp_QM-kDJAC3WHMMLB6Zedz7X7q9Inqez4F8Uyema4WNJHYvhC6J8UJBV_ibxL_S7r6DGPDWCMwF076E0wp0i3JTBDpvBE0VaxvkJfpGmZFl_85q9_",
    progressPercent: 90,
    category: "Bóng bàn",
  },
  {
    brand: "DOUBLE FISH",
    title: "Bàn bóng bàn Double Fish 233",
    price: "15.800.000đ",
    oldPrice: "19.000.000đ",
    progress: "4/5 Suất đã đăng ký",
    discount: "16%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvzRaeDLfMtdF6Tgk03QYNcZSDmQCm-wGn581Y4iIwFqE3koAu8LN5es4r6ICsvSLD5q_J2cvfBNCS5Q5qpqE5WN2x98qdUBQxmy5UktndwkQ4NRYvyy5BsUc1NBN0_3fYNtlo9-yk9DKEWq-EXeGJXl7gYH24yPmhJ4ISY5MF1IfCpAANXa0Pe37tCZMWBJzEzRYoO2UQmq6UaqGaVn-QjL-yS5KuKR3Og0-D6Ms_XOiZT4ItGpId-dd4YFHrpZxdhx-VNumZKgpi",
    progressPercent: 80,
    category: "Bóng bàn",
  },
  {
    brand: "MIZUNO",
    title: "Giày Mizuno Wave Drive 9",
    price: "2.150.000đ",
    oldPrice: "2.800.000đ",
    progress: "45/50 Suất đã đăng ký",
    discount: "23%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEN2bENWWpUXA_--NTl1U7zYlUr4wfnPSy1JZT7XeMevTKoYhjZFLPTJHATzILqTSkceCWjjQBADMM07kn-SjxXbjCHjvLMZkYomugrqBbjJRwpnptVO8lizI00UvZoqqiYELlyXCph6HC0F-tUPFcSoLYbqvcW81Kxfpi_wkRuhp1JeqoQ19H5B-RUV2FFNvlmQzljVSof3xnkYXubqgH7JWbicJJ2kjvJQgCDBy5McLybU2-JMbanMYciQ_QRPYpaYR8bWtX9kTQ",
    progressPercent: 90,
    category: "Bóng bàn",
  },
];

function HomePage() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const bottomTabs = [
    { key: "home", label: "Trang chủ", icon: HomeIcon },
    { key: "discover", label: "Khám phá", icon: ExploreIcon },
    { key: "notif", label: "Thông báo", icon: NotifIcon },
    { key: "profile", label: "Cá nhân", icon: ProfileIcon },
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            </button>
            <button className="icon-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="search-box flex items-center bg-white rounded-full px-3 py-2 flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input
              className="flex-1 bg-transparent text-sm outline-none placeholder-gray-400 text-gray-700"
              placeholder="Tìm kiếm ưu đãi..."
            />
          </div>
          <button className="icon-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
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
                  : c.label === "Cầu lông"
                  ? "cau-long"
                  : c.label === "Bida"
                  ? "bida"
                  : c.label === "Bóng bàn"
                  ? "bong-ban"
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
            onClick={() => setSelectedTab(t)}
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
          {bottomTabs.map((b) => {
            const IconComponent = b.icon;
            return (
            <button
              key={b.key}
              className="flex flex-col items-center bottom-item"
              onClick={() => {
                if (b.key === "discover") {
                  navigate("/discover");
                } else if (b.key === "notif") {
                  navigate("/notification");
                } else if (b.key === "profile") {
                  navigate("/profile");
                } else {
                  setBottomTab(b.key);
                }
              }}
            >
              <span className={bottomTab === b.key ? "text-red-600" : "text-gray-600"}>
                <IconComponent />
              </span>
              <span className={`text-xs mt-1 ${bottomTab === b.key ? "text-red-600" : "text-gray-600"}`}>
                {b.label}
              </span>
            </button>
            );
          })}
        </div>
      </div>
    </Page>
  );
}

export default HomePage;
