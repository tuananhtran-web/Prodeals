import { useState } from "react";
import { Page, Icon, Button, Text } from "zmp-ui";
import { useNavigate } from "zmp-ui";

const filters = [
  { key: "tatca", label: "Tất cả" },
  { key: "vot", label: "Vợt" },
  { key: "giay", label: "Giày" },
  { key: "quanao", label: "Quần áo" },
  { key: "phukien", label: "Phụ kiện" },
];

const items = [
  {
    brand: "Yonex Official",
    title: "Vợt Cầu Lông Yonex Astrox 100ZZ Kurenai (Chính Hãng)",
    price: "3.450.000đ",
    oldPrice: "4.800.000đ",
    discount: "-35%",
    progressText: "Đã nhận: 75/100",
    progressPercent: 75,
    hot: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0lEQ2-01ukxUxEo14Z4_Tz-DBlBFZ_I8WKT0IrbAs7042rWCPfXVc31hIuHBezGQ1xUpsbU5KjZdtajfDORtz8c8yOzODUaH_-r67Zp4aDSXjgKik_Gv5JyzOaQ8_eKcblqusJMhAief-8AdIjOG3_nCpnGiTEmRbMs4Rtk3ib8l89YZDkPsxyCyfmjN7cM-9uVhA17Uaqq2Q_ynu7xXMYlRY8B5K4oolGT4KIhOnowI30g6LDOBM-XmqLqs9f9T6O9SatDinx9sm",
    brandLogo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0vcXKfgkQisuBMuUcwD5JuXZd9u5wLFTCnml6Y-liXkTRJXeGSUN5lbSGe_RiM-TeT-vlGCrftgh69sRgnH7Ai5F3JeTzLRgl8adxigpcbJA92QgbI-HLCuYbB2xW9z5MbukZN8nzHVDzZDwnwMknuLFKkTqvISmyAkFeps8Ucjc8k5xqK5ZD3O3i4mq7PBQFor9go73PDsTjJkbjzUTWdMxcXCuMPHLel_ZBdQTW5M__adL91hGkCgpmF2lDiATBkYCtZPXtM40N",
  },
  {
    brand: "Victor Sports",
    title: "Giày Cầu Lông Victor P9200CC - Chuyên Dụng Thi Đấu",
    price: "1.890.000đ",
    oldPrice: "2.400.000đ",
    discount: "-20%",
    progressText: "Đã nhận: 42/50",
    progressPercent: 84,
    hot: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG-AeBVFJwtxEWYQWvPqgW5_0UQIVs_LlWcmpcRYiirm3rBB_szDGYyAgSl6QxES7MJWmaGm_XMbdt8hBPrt_rhXLAwpvgMK1Zlyepg2d68GO9YaLQKqpyF4uJkLQGNUAZNl2co2Hc5a0U8288T0KCXi-RGr9xfjF54j5Ai1hulHi52f_caYYuPb0MUVRmC7_YARcqQpUDa14C8c8ma_7n6Py_eklP7rJb8di4vBPHsHGCQaeK7_V1u-LYpdRq5crNRElJGcqome4I",
    brandLogo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdlnWPQvZSewDTjfv3Ka3W_-vgrOWkqOqTDcpMZz_mU4-IJoDG3nC4gBrrIEG_LDc7g8eMfdsa5ddVytPg-cnrFQ9PuQv6eijGBDgvN_DfRe9gninEc1XK44yD9hefF_RXEzUDlce-r2zEX5i2RtMvFHB6tHD-8a9wVIJGV91F_Ok1amQ2Mv3t-V5IcJ86vWVMp31PYUjtgpaBonZt0IyPcjUa8UwmOvl4d56CYQW_sRr9JwEIt3Fy5NmCNK5DVkn8bMUYQGRSdMU0",
  },
  {
    brand: "Lining Vietnam",
    title: "Áo Cầu Lông Lining Chính Hãng - Công Nghệ AT-DRY",
    price: "325.000đ",
    oldPrice: "650.000đ",
    discount: "-50%",
    progressText: "Đã nhận: 120/200",
    progressPercent: 60,
    hot: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5fO6llKDAkeXTNC7NbHVMW-5A0Udu_XzwjXV9uDnGUvF5bzHAIs6AHIvbxQzJI3Hlgj3P3g6D926wuTKlICsKukM-_Eaaz93y7QSF8V6kHntbr1SAlVAZgPyAIiZd944E_dugE07L612eoqfEsGWXvY-o1_rCrx_uooffCpzqZFSCNB11NJL0EV_6Kah948JXgjt9krtN4ryqOmZnH_wuaZbOSn_Doa0eiYKbxzf2hnEaFQjVXRhO0Vk_uTabDj6l2AiSs9qZqBVP",
    brandLogo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVXSUpL7mF89SafHbrks2BQc_c8G5C4dQGWBSXCz_oNYPtMU0ubtnUz0Gv8d3HBxb7f61WUtluFgzPPU42Zs7QA_1YF90LzPacCHyOmIjT-hydyOE1eLXgffQj7JPJUNrgxrQ9m0fnl0Eu9almma7zwDdFSS8HXtr-JgX_QKQ1bcw7QsbXwwqxM-mLpwSt_kv3Fmk5Xl45hH2iJj9lleMlPHQcmQiGtsJw7bk6SGjexgqUfLgGskORRw4fXalDVPE4x03zUvUOy9yK",
  },
  {
    brand: "Yonex Official",
    title: "Vợt Cầu Lông Yonex Nanoflare 800LT",
    price: "2.150.000đ",
    oldPrice: "2.900.000đ",
    discount: "-25%",
    progressText: "Đã nhận: 30/40",
    progressPercent: 75,
    hot: false,
    image: "https://images.unsplash.com/photo-1626245027680-80a0880cf248?q=80&w=400&auto=format&fit=crop",
    brandLogo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0vcXKfgkQisuBMuUcwD5JuXZd9u5wLFTCnml6Y-liXkTRJXeGSUN5lbSGe_RiM-TeT-vlGCrftgh69sRgnH7Ai5F3JeTzLRgl8adxigpcbJA92QgbI-HLCuYbB2xW9z5MbukZN8nzHVDzZDwnwMknuLFKkTqvISmyAkFeps8Ucjc8k5xqK5ZD3O3i4mq7PBQFor9go73PDsTjJkbjzUTWdMxcXCuMPHLel_ZBdQTW5M__adL91hGkCgpmF2lDiATBkYCtZPXtM40N",
  },
];

function CategoryCauLong() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(filters[0].key);
  const [bottomTab, setBottomTab] = useState("home");

  const bottomTabs = [
    { key: "home", label: "Trang chủ", icon: "home" },
    { key: "deal", label: "Deal", icon: "confirmation_number" },
    { key: "notif", label: "Thông báo", icon: "notifications" },
    { key: "order", label: "Đơn hàng", icon: "assignment" },
    { key: "profile", label: "Tôi", icon: "person" },
  ];

  return (
    <Page className="bg-background-light dark:bg-background-dark">
      <div className="w-full bg-primary text-white pt-4 pb-3 px-4 sticky top-0 z-50">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button className="icon-badge" onClick={() => navigate(-1)}>
              <Icon icon="zi-arrow-left" className="text-primary" />
            </button>
            <h1 className="text-lg font-bold">Cầu lông - Prodeals</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="icon-badge">
              <Icon icon="zi-cart" className="text-primary" />
            </button>
            <button className="icon-badge">
              <Icon icon="zi-chat" className="text-primary" />
            </button>
          </div>
        </div>
        <div className="mt-4">
          <label className="flex flex-col w-full">
            <div className="flex w-full items-center rounded-lg bg-white/95 px-3 py-2 shadow-sm">
              <Icon icon="zi-search" className="text-primary mr-2" />
              <input
                className="w-full border-none bg-transparent focus:ring-0 text-slate-900 placeholder:text-slate-400 text-sm"
                placeholder="Tìm kiếm ưu đãi Cầu lông..."
                type="text"
              />
            </div>
          </label>
        </div>
      </div>

      <nav className="bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 sticky top-[116px] z-40">
        <div className="flex overflow-x-auto no-scrollbar whitespace-nowrap px-4 gap-6">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`py-3 text-sm font-semibold uppercase tracking-wider ${
                filter === f.key 
                  ? "active-tab text-primary border-b-2 border-primary" 
                  : "text-slate-500 dark:text-slate-400"
              }`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="p-4">
        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-lg group">
          <img
            alt="Pro Deals Banner"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAea3VjrAvrc47iVpoCH3Bb80Hyv6QY6e6iNN5PZTb4v889R0cS_YiC4PtVfnirc3poas7axr7RvUInaT8q5jeFpGa2Pa-OfLp3gX2sAQJAOnhoLpS-FJdzrs6yUJFkcxEY4IxQDFyvS1zqD213eRyhEFUahGsAzX_HAUM5yKZ5LmCLKe2HKgJCzZqZm9Jitb_rk-MTAUQmMnlCacoKbNvNzyIJ4b1vZXWECK7K2N_2eoTxsoH0MZr9oFiJyJmrfDtIhacVsVlNVmqM"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex flex-col justify-center p-6 text-white">
            <span className="bg-white text-primary text-[10px] font-extrabold px-2 py-0.5 rounded-full w-fit mb-2">
              HOT DEAL
            </span>
            <h2 className="text-xl font-bold leading-tight uppercase">
              Siêu Sale Cầu Lông
              <br />
              Giảm tới 50%
            </h2>
            <p className="text-xs mt-1 opacity-90">Duy nhất tuần này tại Prodeals</p>
          </div>
        </div>
      </div>

      <main className="px-4 pb-24 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">local_fire_department</span>
            Deal Đang Diễn Ra
          </h3>
          <span className="text-primary text-xs font-semibold cursor-pointer">Xem tất cả</span>
        </div>

        {items.map((p, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-zinc-800 flex flex-col"
          >
            <div className="flex p-3 gap-3">
              <div className="relative w-32 h-32 bg-slate-50 dark:bg-zinc-800 rounded-lg flex-shrink-0">
                <img
                  alt={p.title}
                  className="w-full h-full object-contain p-2"
                  src={p.image}
                />
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-bl-lg">
                  {p.discount}
                </div>
              </div>
              <div className="flex flex-col flex-1 justify-between py-1">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-4 h-4 bg-slate-100 rounded-full overflow-hidden">
                      <img src={p.brandLogo} alt={p.brand} />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500 uppercase">{p.brand}</span>
                  </div>
                  <h4 className="font-bold text-sm leading-tight line-clamp-2">{p.title}</h4>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-primary font-bold text-base">{p.price}</span>
                    <span className="text-slate-400 text-[10px] line-through">{p.oldPrice}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-medium text-slate-500">
                    <span>{p.progressText}</span>
                    <span>{p.progressPercent}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: `${p.progressPercent}%` }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 pb-3">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2.5 rounded-lg text-sm transition-colors uppercase tracking-wide"
                variant="primary"
                onClick={() => {
                  alert(`Đăng ký deal: ${p.title}`);
                }}
              >
                Đăng ký ngay
              </Button>
            </div>
          </div>
        ))}
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 px-2 py-2 flex justify-around items-center z-50">
        {bottomTabs.map((b) => (
          <button
            key={b.key}
            className={`flex flex-col items-center gap-1 ${
              bottomTab === b.key ? "text-primary" : "text-slate-400"
            } relative`}
            onClick={() => setBottomTab(b.key)}
          >
            <span className="material-symbols-outlined">{b.icon}</span>
            {b.key === "notif" && (
              <span className="absolute top-0 right-1 bg-primary w-2 h-2 rounded-full border border-white"></span>
            )}
            <span className="text-[10px] font-medium">{b.label}</span>
          </button>
        ))}
      </div>
    </Page>
  );
}

export default CategoryCauLong;
