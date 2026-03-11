import { useState } from "react";
import { Page, Icon, Button, Text } from "zmp-ui";
import { useNavigate } from "zmp-ui";

const filters = [
  { key: "tatca", label: "Tất cả" },
  { key: "cobida", label: "Cơ Bida" },
  { key: "gangtay", label: "Găng tay" },
  { key: "phukien", label: "Phụ kiện" },
  { key: "bongbida", label: "Bóng Bida" },
];

const items = [
  {
    brand: "VJD Sports",
    title: "Cơ Bida Carbon VJD Pro",
    price: "4.200.000đ",
    oldPrice: "7.000.000đ",
    discount: "GIẢM 40%",
    progressText: "Đã đăng ký: 45/50",
    progressPercent: 90,
    status: "sap Het",
    statusLabel: "Sắp hết",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1nyIDk8WrPbo9XxjyQ0C83d4YtDj7L-_6jIEFgXuIOOeSpMLzhW2xPkeEKzqFqr6c5ukoNfkk1K-CD2jpMIS-Dwgj8Pz7FLPOtnsKEUFKGw60yc3mlKUOWZ5E5h8XDPMR1DLUUnCiTZp-qkFUYMT6kpHmidxynCkeGI9gWGU-ASpetA96vUM7EVlSBmJs2ceU9qy_gD34ZA8AVIeuX0MxbHgCoA8SkzS2AFhJLYUge4QKQ1Kzo6G8jODw9loNIxl82oof7X1JG_Pr",
  },
  {
    brand: "VJD Exclusive",
    title: "Găng tay Bida cao cấp",
    price: "150.000đ",
    oldPrice: "350.000đ",
    discount: "CHÁY HÀNG",
    progressText: "Đã đăng ký: 100/100",
    progressPercent: 100,
    status: "het",
    statusLabel: "Hết lượt",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhQ50h3X85UOpIqoIp0O2VqFi0Zk0pEUWbPZprd0jS_WTdNH4Af4mnGu_X_IIOc6rPs-Nh80PDgfAnz-Et8hQUX9f9Jcxg-fiIfSKV0392fEIzfOTJ6gHWgtppbKhz3H2kKHhkM221prlILale0Iw2-utyTl_-bmk87fIAEUdfNu84zHhAJbocVQerhLlPnsIG51S9kvR38V541iD6LYAqa-r4xTmK4XdhDaB3XC3XRuPIKrPbDJ5H3UfeHRZFPuxHu6959t5PGd5b",
  },
  {
    brand: "Aramith Belgium",
    title: "Bộ bóng Aramith Premium",
    price: "5.850.000đ",
    oldPrice: "7.800.000đ",
    discount: "GIẢM 25%",
    progressText: "Đã đăng ký: 12/50",
    progressPercent: 24,
    status: "conCho",
    statusLabel: "Còn chỗ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-zsLsjlxv0LuCPNwDj6ITycaEjBHsXUwN7r2nQ13CBfGSZRAzzRydLtVWgAAvF46E4xIszqVe9sEN3hH7jMhSem_2SsQlgn-UwToiu1y56gNYvcMfKMnhB3HZ0Zpp3iHccp66ITbnzbO6YRKCCZMybZv1uu6UY4X7vL1q_iwe3ZW4NaKM69Tlxb3LO1pGeZ10zSaUCly0SoEFUgZk4J2zH3mffWJkocaFYXMItd-XGUOmtvqL2QehDR-vrnrfSEym092cMeY0I5FV",
  },
  {
    brand: "VJD Sports",
    title: "Cơ Bida Classic Maple",
    price: "2.800.000đ",
    oldPrice: "4.500.000đ",
    discount: "GIẢM 35%",
    progressText: "Đã đăng ký: 28/40",
    progressPercent: 70,
    status: "conCho",
    statusLabel: "Còn chỗ",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop",
  },
];

function CategoryBida() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(filters[0].key);
  const [bottomTab, setBottomTab] = useState("deal");

  const bottomTabs = [
    { key: "home", label: "Trang chủ", icon: "home" },
    { key: "deal", label: "Deals", icon: "sell" },
    { key: "qr", label: "", icon: "qr_code_scanner" },
    { key: "favorite", label: "Yêu thích", icon: "favorite" },
    { key: "profile", label: "Cá nhân", icon: "person" },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "sap Het":
        return "bg-orange-100 text-orange-700";
      case "het":
        return "bg-slate-200 text-slate-600";
      case "conCho":
        return "bg-green-100 text-green-700";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getButtonClass = (status: string) => {
    if (status === "het") {
      return "bg-slate-300 text-slate-500 cursor-not-allowed";
    }
    return "bg-primary text-white";
  };

  return (
    <Page className="bg-background-light dark:bg-background-dark">
      <div className="w-full bg-primary text-white pt-4 pb-3 px-4 sticky top-0 z-50">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button className="icon-badge" onClick={() => navigate(-1)}>
              <Icon icon="zi-arrow-left" className="text-primary" />
            </button>
            <h1 className="text-lg font-bold">Prodeals Bida</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="icon-badge">
              <Icon icon="zi-noti" className="text-primary" />
            </button>
            <button className="icon-badge">
              <Icon icon="zi-cart" className="text-primary" />
            </button>
          </div>
        </div>
        <div className="mt-3">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-slate-500">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-slate-900 border-none focus:ring-2 focus:ring-white/50 text-sm"
              placeholder="Tìm kiếm ưu đãi Bida..."
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-gradient-to-r from-primary to-orange-600 flex items-center px-6 text-white">
          <div className="z-10">
            <h2 className="text-2xl font-bold leading-tight">PRO DEALS BIDA</h2>
            <p className="text-sm opacity-90">Giảm đến 50% cho thành viên VJD</p>
            <div className="mt-2 inline-block bg-white text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Duy nhất tuần này
            </div>
          </div>
          <span className="material-symbols-outlined absolute right-[-20px] bottom-[-20px] text-[120px] opacity-20">
            pool
          </span>
        </div>
      </div>

      <nav className="flex overflow-x-auto hide-scrollbar px-4 gap-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 sticky top-[116px] z-40">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`py-3 border-b-2 font-semibold whitespace-nowrap text-sm ${
              filter === f.key
                ? "border-primary text-primary"
                : "border-transparent text-slate-500"
            }`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </nav>

      <main className="p-4 space-y-4 pb-24">
        {items.map((p, idx) => (
          <div
            key={idx}
            className={`bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm flex border border-slate-100 dark:border-slate-800 ${
              p.status === "het" ? "opacity-80" : ""
            }`}
          >
            <div className="w-32 h-32 flex-shrink-0 bg-slate-100 dark:bg-slate-800 relative">
              <img
                alt={p.title}
                className={`w-full h-full object-cover ${p.status === "het" ? "grayscale" : ""}`}
                src={p.image}
              />
              {p.status === "het" ? (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-bold text-xs border-2 border-white px-2 py-1 rotate-[-15deg]">
                    CHÁY HÀNG
                  </span>
                </div>
              ) : (
                <div className="absolute top-1 left-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                  {p.discount}
                </div>
              )}
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-primary font-bold uppercase">{p.brand}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${getStatusClass(p.status)}`}>
                    {p.statusLabel}
                  </span>
                </div>
                <h3 className="font-bold text-sm line-clamp-1">{p.title}</h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-primary font-bold text-base">{p.price}</span>
                  <span className="text-slate-400 text-xs line-through">{p.oldPrice}</span>
                </div>
              </div>
              <div className="mt-2">
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden flex">
                  <div
                    className={`h-full ${
                      p.status === "het" ? "bg-slate-400" : "bg-primary"
                    }`}
                    style={{ width: `${p.progressPercent}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[10px] text-slate-500">{p.progressText}</span>
                  <button
                    className={`text-[10px] font-bold px-3 py-1.5 rounded-lg ${getButtonClass(p.status)}`}
                    onClick={() => {
                      if (p.status !== "het") {
                        alert(`Đăng ký deal: ${p.title}`);
                      }
                    }}
                    disabled={p.status === "het"}
                  >
                    {p.status === "het" ? "Đã kết thúc" : "Đăng ký ngay"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          className="w-full py-3 text-sm text-primary font-semibold text-center border border-primary/20 rounded-xl bg-primary/5"
          onClick={() => alert("Xem thêm các ưu đãi khác")}
        >
          Xem thêm các ưu đãi khác
        </button>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pb-safe-area shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50">
        <div className="flex max-w-xl mx-auto items-center justify-around py-2">
          {bottomTabs.map((b) => (
            <button
              key={b.key}
              className={`flex flex-col items-center gap-1 ${
                bottomTab === b.key ? "text-primary" : "text-slate-400"
              } ${b.key === "qr" ? "relative -top-5" : ""}`}
              onClick={() => {
                if (b.key === "qr") {
                  alert("Quét QR code");
                } else {
                  setBottomTab(b.key);
                }
              }}
            >
              {b.key === "qr" ? (
                <div className="bg-primary p-3 rounded-full shadow-lg shadow-primary/30 text-white">
                  <span className="material-symbols-outlined text-2xl">{b.icon}</span>
                </div>
              ) : (
                <span className="material-symbols-outlined">{b.icon}</span>
              )}
              <span className={`text-[10px] font-medium ${bottomTab === b.key && b.key !== "qr" ? "text-primary font-bold" : ""}`}>
                {b.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </Page>
  );
}

export default CategoryBida;
