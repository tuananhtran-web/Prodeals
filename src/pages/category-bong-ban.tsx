import { useState } from "react";
import { Page, Icon, Button, Text } from "zmp-ui";
import { useNavigate } from "zmp-ui";

const filters = [
  { key: "popular", label: "Phổ biến" },
  { key: "newest", label: "Mới nhất" },
  { key: "bestseller", label: "Bán chạy" },
  { key: "bestprice", label: "Giá tốt" },
];

const items = [
  {
    brand: "Butterfly Official",
    title: "Vợt Butterfly Timo Boll ALC",
    price: "3.250.000đ",
    oldPrice: "4.100.000đ",
    progressText: "Đã đăng ký 18/20",
    progressPercent: 90,
    badge: "MỚI",
    badgeColor: "bg-primary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMYaC7A_J-IeXLbv20cuUGlDiz_ZuE8cqoDqKCMBW70CGnawaT_n0gXk6UWG3RbCvyFSE22sslCBwpFx6HtYSR-M-bKFyJN_qz7U7EWeKiLE8lx0_6gbSzcZn_hFb1ERMZAg0NL_FK7ZDXCSQa0iXHHIRDv8Gp_QM-kDJAC3WHMMLB6Zedz7X7q9Inqez4F8Uyema4WNJHYvhC6J8UJBV_ibxL_S7r6DGPDWCMwF076E0wp0i3JTBDpvBE0VaxvkJfpGmZFl_85q9_",
    brandLogo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAqaxFQXBWdZN4FCHGUecUobOmC43_SginPWfAnZ_rHbS8dSb4h8eRgNisQtUBYX0DuJvLsiVLTVxDx7MbCWxOgFXvZuY54-wYMnfAXAdBS0RSlUUkklb-DPWjpHrwFz6422l57txsAVqy3UyJ9MiX2c-2vaBFbnlx_ajEPELvAFWbnJonvFPVtq5NYlF1s4vaLOYUxhGP7sbJYjQHHHgsQ_ZuzDreVQshF8FRhWZ0MfeACmmzU6Bnr_Ey1gZTM0AI0TTHgSv0rv5a",
  },
  {
    brand: "Double Fish Store",
    title: "Bàn bóng bàn Double Fish 233",
    price: "15.800.000đ",
    oldPrice: "19.000.000đ",
    progressText: "Đã đăng ký 4/5",
    progressPercent: 80,
    badge: "HOT DEAL",
    badgeColor: "bg-amber-500",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvzRaeDLfMtdF6Tgk03QYNcZSDmQCm-wGn581Y4iIwFqE3koAu8LN5es4r6ICsvSLD5q_J2cvfBNCS5Q5qpqE5WN2x98qdUBQxmy5UktndwkQ4NRYvyy5BsUc1NBN0_3fYNtlo9-yk9DKEWq-EXeGJXl7gYH24yPmhJ4ISY5MF1IfCpAANXa0Pe37tCZMWBJzEzRYoO2UQmq6UaqGaVn-QjL-yS5KuKR3Og0-D6Ms_XOiZT4ItGpId-dd4YFHrpZxdhx-VNumZKgpi",
    brandLogo: "",
  },
  {
    brand: "Mizuno Japan",
    title: "Giày Mizuno Wave Drive 9",
    price: "2.150.000đ",
    oldPrice: "2.800.000đ",
    progressText: "Đã đăng ký 45/50",
    progressPercent: 90,
    badge: "BÁN CHẠY",
    badgeColor: "bg-blue-600",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEN2bENWWpUXA_--NTl1U7zYlUr4wfnPSy1JZT7XeMevTKoYhjZFLPTJHATzILqTSkceCWjjQBADMM07kn-SjxXbjCHjvLMZkYomugrqBbjJRwpnptVO8lizI00UvZoqqiYELlyXCph6HC0F-tUPFcSoLYbqvcW81Kxfpi_wkRuhp1JeqoQ19H5B-RUV2FFNvlmQzljVSof3xnkYXubqgH7JWbicJJ2kjvJQgCDBy5McLybU2-JMbanMYciQ_QRPYpaYR8bWtX9kTQ",
    brandLogo: "",
  },
  {
    brand: "Stiga Sports",
    title: "Vợt Stiga Carbon DNA",
    price: "2.800.000đ",
    oldPrice: "3.600.000đ",
    progressText: "Đã đăng ký 12/30",
    progressPercent: 40,
    badge: "",
    badgeColor: "",
    image: "https://images.unsplash.com/photo-1617088660598-45dfd7482591?q=80&w=400&auto=format&fit=crop",
    brandLogo: "",
  },
];

function CategoryBongBan() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(filters[0].key);
  const [bottomTab, setBottomTab] = useState("home");

  const bottomTabs = [
    { key: "home", label: "Trang chủ", icon: "home" },
    { key: "discover", label: "Khám phá", icon: "local_offer" },
    { key: "add", label: "", icon: "add" },
    { key: "notif", label: "Thông báo", icon: "notifications" },
    { key: "profile", label: "Tài khoản", icon: "person" },
  ];

  return (
    <Page className="bg-background-light dark:bg-background-dark">
      <header className="bg-primary sticky top-0 z-50 shadow-md">
        <div className="flex items-center p-4 gap-3">
          <button className="text-white flex size-10 shrink-0 items-center justify-center cursor-pointer" onClick={() => navigate(-1)}>
            <Icon icon="zi-arrow-left" />
          </button>
          <div className="flex-1">
            <label className="flex flex-col min-w-40 h-10 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-white/20 backdrop-blur-md">
                <div className="text-white flex items-center justify-center pl-3">
                  <Icon icon="zi-search" className="text-[20px]" />
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden border-none bg-transparent focus:ring-0 h-full placeholder:text-white/70 px-2 text-white text-sm font-normal"
                  placeholder="Tìm kiếm ưu đãi Bóng bàn..."
                />
              </div>
            </label>
          </div>
          <div className="flex gap-2">
            <button className="text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
              <Icon icon="zi-cart" />
            </button>
            <button className="text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
              <Icon icon="zi-chat" />
            </button>
          </div>
        </div>
        <div className="flex bg-white dark:bg-slate-900 overflow-x-auto hide-scrollbar border-b border-slate-200 dark:border-slate-800">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`flex flex-col items-center justify-center border-b-2 pb-3 pt-3 px-6 flex-none ${
                filter === f.key
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-500 dark:text-slate-400"
              }`}
              onClick={() => setFilter(f.key)}
            >
              <span className="text-sm font-medium tracking-tight">{f.label}</span>
            </button>
          ))}
        </div>
      </header>

      <main className="p-4 space-y-4 pb-24">
        {items.map((p, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col"
          >
            <div className="relative w-full aspect-[16/9] bg-slate-200 dark:bg-slate-800">
              <img
                alt={p.title}
                className="w-full h-full object-cover"
                src={p.image}
              />
              {p.badge && (
                <div className={`absolute top-2 left-2 ${p.badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded`}>
                  {p.badge}
                </div>
              )}
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {p.brandLogo ? (
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center p-1">
                        <img alt={p.brand} className="w-full h-full object-contain" src={p.brandLogo} />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                        <span className="text-[10px] font-black text-primary italic">{p.brand.charAt(0)}</span>
                      </div>
                    )}
                    <span className="text-xs text-slate-500 font-medium">{p.brand}</span>
                  </div>
                  <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold leading-tight">
                    {p.title}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-primary font-bold text-lg">{p.price}</p>
                  <p className="text-slate-400 text-xs line-through">{p.oldPrice}</p>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-medium mb-1">
                  <span className="text-primary">{p.progressText}</span>
                  <span className="text-slate-500">Còn lại {20 - parseInt(p.progressText.split('/')[0].split(' ')[2])}</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: `${p.progressPercent}%` }}></div>
                </div>
              </div>
              <div className="flex gap-2 pt-1">
                <Button
                  className="flex-1 bg-primary text-white text-sm font-bold py-2.5 rounded-lg"
                  variant="primary"
                  onClick={() => alert(`Đăng ký deal: ${p.title}`)}
                >
                  Đăng ký ngay
                </Button>
              </div>
            </div>
          </div>
        ))}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-4 py-2 flex justify-between items-center z-50">
        {bottomTabs.map((b) => (
          <button
            key={b.key}
            className={`flex flex-col items-center gap-0.5 ${
              bottomTab === b.key && b.key !== "add" ? "text-primary" : "text-slate-400 dark:text-slate-500"
            } ${b.key === "add" ? "relative -top-5" : ""}`}
            onClick={() => {
              if (b.key === "add") {
                alert("Thêm mới");
              } else {
                setBottomTab(b.key);
              }
            }}
          >
            {b.key === "add" ? (
              <div className="bg-primary text-white size-12 rounded-full flex items-center justify-center shadow-lg shadow-primary/40 border-4 border-white dark:border-slate-950">
                <span className="material-symbols-outlined text-[28px]">{b.icon}</span>
              </div>
            ) : (
              <span className="material-symbols-outlined text-[24px]">{b.icon}</span>
            )}
            <span className="text-[10px] font-medium">{b.label}</span>
          </button>
        ))}
      </nav>
    </Page>
  );
}

export default CategoryBongBan;
