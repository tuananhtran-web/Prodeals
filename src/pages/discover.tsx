import { useState } from "react";
import { Page } from "zmp-ui";
import { useNavigate } from "zmp-ui";

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);

const ExploreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
);

const MallIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);

const NotifIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
);

const ProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const categories = [
  { label: "Bóng đá", emoji: "⚽", color: "bg-orange-100" },
  { label: "Chạy bộ", emoji: "🏃", color: "bg-blue-100" },
  { label: "Gym", emoji: "🏋️", color: "bg-purple-100" },
  { label: "Cầu lông", emoji: "🎾", color: "bg-green-100" },
  { label: "Voucher", emoji: "🎁", color: "bg-red-100" },
];

const tabs = ["Gợi ý", "Flash Sale", "Bóng đá", "Chạy bộ", "Gym & Fitness", "Cầu lông"];

const flashSaleItems = [
  {
    price: "1.250.000đ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRc4eBRKbfZ7Vj4vIFGGFJSRK_uVwLvlJLGUNPTeT9kGDJAKFHbCEmeHLXTnwNmadqXzFQHAqencTxfZ3MwCD1P-rztk8kohnA4m9hZjf1pU7BcEVAr8iy6KJ84tJRQ15hoCy_HiZM7T-M5lLMu_MtupmuTOjL6NrE178WVwnhRMKcsvaixC8of-PXL4ojIuxNatDdNrcWzvDLNdvzqBEyAxtCDXU8tyIZdmfn2QsrO1hdB80ARzMhdoq2aEkRJB_9-2eEoTbhQb37",
    discount: "-35%",
    progress: 70,
    label: "Đang bán chạy",
  },
  {
    price: "890.000đ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpFU54VWKHGn_QqiRzg2GmK4pSBUM6-vG7DItOYELm-xmMUFbgGqhfRpMyFlSU4FZ4BJVOPChqmnNsTRfEKKaLR2VmCHdrwvF1jWbLZdztwu-1IAxVDrHxq033j18E3nCwCy6A48cHez7Ggq7Jod_d0Jz8-KWiz7vrl6yTi9SP8J4o2XotoVdeBNlFaTIvgRiW_-MTt4M_pAFWAcR1pFNcVpzoMMHu37nBGNwGiQeXAsmxwf07guZ8pU432ajQeZzzyaYCTeeBfdKK",
    discount: "-20%",
    progress: 40,
    label: "Đã bán 12",
  },
  {
    price: "450.000đ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3UyFEe5q3X-ek3bQvCpRRY7_aLr38Op5IDA1GZU4hFalqeTyJ159ZXqNhHjI6ykgaq7XOoHyU2yZ7VA3NcbRKZ5s1RLm6md_yfZC80rQ_bNMFDd12tP7svYlepBMF4pqrXtvAxJDX9RJVdVWUib5zvdVNrV_EzQBhq5UBofoZGhpTacYOrbSxdqroIE1Mu63tw2VgmRmYCM99upfkC0DdbJo4AcpVY8iwWdwfb3MT77la70foyL5JaEuuQNEpD9NseQsJtOrXB_e2",
    discount: "-50%",
    progress: 90,
    label: "Sắp cháy hàng",
  },
];

const products = [
  {
    title: "Giày thể thao Nike Zoom Air thế hệ mới 2024 - Chuyên chạy bộ",
    price: "2.300.000đ",
    sold: "1.2k",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_MSyZbFiBl_UhIo-A7XxC4PCf0BzB0VurLFc63Jo5LNlB46QLsMASuHhKrgdwnRmxpSoFeUUmeTx3ZssSVo7YBVzFmqm2EHy5NPTYC-AJTFUmTsolkJJgAbSaxjPNVcWSxMtZl0ipM6Rtc70Z7qZQLC6fAVhnlNE_8rqrGqcwNIWCJMnrOCXIBnTtigt8TDnmtBLFNh0sgb43azI2VjY2OMq50SCntvMEuf_UyltgFfybIXgxhKC384EZQ0ki56H7lXtwU4aLgqbq",
    tags: ["Rẻ vô địch", "Freeship"],
  },
  {
    title: "Bóng đá VJD FIFA Quality Pro - Tiêu chuẩn thi đấu quốc tế",
    price: "750.000đ",
    sold: "562",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyu08P61Lx3B_jgkrlIW6xdtcr-AsZsIpMRfl8fBPqR1-7DepVLXusuKcUaKgNz4Xmb49KOSTuOi_QGDuS3Rqqc4tHrbP4m77x9LT7XkZsM17YJ419zz5XEqQHClJ2h4FVAaqKze92h25txijTdzzc9ZP0LDHzL5FZeKmIkePpu4XKb108Q59t8Ed5Ees_QreUgb9D_pUk4ds7kmSXX-5kbsuh2yyLgardEXdXa3gR1eqr5_7Hwyk-ELpo_kKM0miDLrsCXvJ470Cq",
    tags: ["Yêu thích"],
  },
  {
    title: "Bộ đồ tập Gym nữ VJD Pro - Co dãn 4 chiều cao cấp",
    price: "320.000đ",
    sold: "3k",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEcTucluiyep5uzoqQ0R5QJ2ei3aWUjg-4LRO0TcT-HGMeRwDKrX7u5Tfjm-ovb52zHUr3tv5-0IjaisX1sZohH52VcMH89mSbIemdSUQhrJlEqkj6esE_giHvC_iFwEDyJYBSz4O0GXZjYWvQgy1GanXqvBZm-eiN6rWWWSd4DNOqOzeBvDRAGx_zXFFbz7nEKF04NYvNoffTj_rnZjVZo2ji72pptM3OPYjMVrTCH1NmIOt9tAc2rdaBGbsaKuVt7tOAq2LkwvF-",
    tags: [],
  },
  {
    title: "Balo thể thao đa năng - Kháng nước, ngăn giày riêng",
    price: "450.000đ",
    sold: "890",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRXCYG08ISYMDSxoZlZqu7dMBfe_aodLnvPEkE1gys73Wqt6WLOKmfEYTRAJDCdapWp412NRVH5zT0epmNfzPQVc3xm8LuhJdI3oWMRYw4dEc3MelLjRu5RO3TpOEinSKQ3Fgh0OU48Lioue9d48hYvYBUwSzSOEqxXLAPyG2wm0xrkg7fOxlqJTNchgzOMscOb25mvwI2GBDdlFIti5vGYKXLZ1aakdksGDO3GM1RNwP7XQV3C1BHDDDO4VSkcuQPYc7RurM9nWdo",
    tags: [],
  },
];

function DiscoverPage() {
  const navigate = useNavigate();
  const [bottomTab, setBottomTab] = useState("explore");
  const [activeTab, setActiveTab] = useState("Gợi ý");

  const bottomTabs = [
    { key: "home", label: "Trang chủ", icon: HomeIcon },
    { key: "explore", label: "Khám phá", icon: ExploreIcon },
    { key: "mall", label: "ProMall", icon: MallIcon },
    { key: "notif", label: "Thông báo", icon: NotifIcon },
    { key: "profile", label: "Tôi", icon: ProfileIcon },
  ];

  return (
    <Page className="bg-background-light dark:bg-background-dark font-display">
      <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-primary/10">
          <div className="flex items-center p-4 gap-3">
          <div className="flex-1">
            <div className="flex items-center h-10 w-full bg-primary/5 rounded-lg px-3 border border-primary/20">
              <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400"
                placeholder="Săn deal hot VJD Sports ngay..."
                type="text"
              />
            </div>
          </div>
          <button className="relative p-1">
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] px-1.5 rounded-full">3</span>
          </button>
          <button className="p-1">
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
          </button>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar px-4 pb-2 gap-6 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`shrink-0 pb-1 ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary"
                  : "text-slate-500 dark:text-slate-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <main className="pb-24">
        <div className="px-4 py-3">
          <div
            className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-primary/20 bg-cover bg-center"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBp-lLaX0igmBCP-1etLk_BrsD6c7wzdVoQd_gts93didAjWvz7ijPDFe9WJBhJ7k846ubUf0fnX3MdSolkbwCH-9xZzeIODjXACYksXbo6_VbcwUO_DiBASsns7A961ogWmCxMcDnosHx0pM9TwHyDmgD851aIBlXAs3BN3M84uziiIVMcsi51LPi48vkScVQCZz1YR9c667qvPDF-QyBZ8H1-ZhoFqOi-0aHRL1SBYSxYISX1xOLkHdsEyCz6E_M5-m3us7n60n2m')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-6">
              <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded w-fit mb-2">
                SIÊU SALE 12.12
              </span>
              <h2 className="text-white text-xl font-bold leading-tight">
                Giày Đá Bóng <br />
                Giảm Đến 50%
              </h2>
              <p className="text-white/80 text-xs mt-1">Chỉ áp dụng trong hôm nay</p>
            </div>
          </div>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar px-4 py-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.label} className="flex flex-col items-center gap-2 min-w-[64px]">
              <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center text-3xl`}>
                {cat.emoji}
              </div>
              <span className="text-xs text-center font-medium">{cat.label}</span>
            </div>
          ))}
        </div>

        <section className="bg-white dark:bg-slate-900/50 py-4 mt-2">
          <div className="px-4 flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-primary flex items-center italic">FLASH SALE</h3>
              <div className="flex gap-1 items-center">
                <span className="bg-slate-800 text-white text-[10px] p-1 rounded">02</span>
                <span className="text-slate-800">:</span>
                <span className="bg-slate-800 text-white text-[10px] p-1 rounded">45</span>
                <span className="text-slate-800">:</span>
                <span className="bg-slate-800 text-white text-[10px] p-1 rounded">12</span>
              </div>
            </div>
            <button className="text-primary text-xs font-medium flex items-center">
              Xem tất cả <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
          <div className="flex overflow-x-auto hide-scrollbar px-4 gap-3">
            {flashSaleItems.map((item, idx) => (
              <div key={idx} className="min-w-[140px] w-[140px]">
                <div className="relative aspect-square rounded-lg bg-slate-100 overflow-hidden mb-2">
                  <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
                  <div className="absolute top-0 right-0 bg-yellow-400 text-red-700 text-[10px] font-bold px-1 py-0.5">
                    {item.discount}
                  </div>
                </div>
                <p className="text-primary font-bold">{item.price}</p>
                <div className="w-full bg-primary/20 h-3 rounded-full relative mt-1 overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: `${item.progress}%` }}></div>
                  <span className="absolute inset-0 text-[8px] flex items-center justify-center text-white font-bold uppercase">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4 px-4">
          <h3 className="text-lg font-bold mb-4">Xu hướng mới</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-xl border border-primary/10">
              <p className="text-xs font-semibold text-primary mb-1">Thịnh hành</p>
              <h4 className="font-bold text-sm mb-2">Thời trang Pickleball</h4>
              <img
                className="w-full h-24 object-cover rounded-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Y3g78QZlvdLS2B2CjfET4TF665dCUQHNWNtTLbg4pfznSIkrTsb4xa-0VrK275N1uxvUJFepSgRQLOWHpCbeoIGc6k64w8mM8lZ4O1A34ap8XvthSuX_CxA9qImsVEi7ViPrbr5CAf1FZCvn1ZsQk40TKkYClAzTkycqzDAUvxWG5tyvY5NA4wmf2M8q00kBNdJCBJQeUvOIcMCt3VyIkZ_YP0u_PWWFTV8YUnG4vO2s-C4klM0snEq7cLDyp0xLcW-DLcqNjOhw"
                alt="Pickleball"
              />
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-4 rounded-xl border border-blue-500/10">
              <p className="text-xs font-semibold text-blue-600 mb-1">Bộ sưu tập</p>
              <h4 className="font-bold text-sm mb-2">Phụ kiện công nghệ</h4>
              <img
                className="w-full h-24 object-cover rounded-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyUs6Fc4PAFUDPCo9eNurD1zEiXW1gq9ZenkWMDYPJi0BkM7vki3G6-Pw1_HZep4PyIOYBA0JvVi-onvL3wZe14o3qN002YiMet1Q_MuLP8fjKU7HWdFjMvXbQLqoB7VU0XBJ9Ryb4vU-tajR0_bPNTyIVGzrocg5c_7BkkzZJQT5xbmz-XYWHfyXzO-AHcM_YcWiEdkAv9CN10vigB0A4kAPd5BOVwAZ4c2ovEYN_CmSTWJ6D6JcY8rOl67skD-XHJRta6r0TrYFO"
                alt="Tech accessories"
              />
            </div>
          </div>
        </section>

        <section className="mt-6 px-4">
          <h3 className="text-lg font-bold mb-4">Gợi ý hôm nay</h3>
          <div className="grid grid-cols-2 gap-2">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm"
              >
                <div className="aspect-square bg-slate-200">
                  <img className="w-full h-full object-cover" src={product.image} alt={product.title} />
                </div>
                <div className="p-2">
                  <h5 className="text-xs line-clamp-2 leading-relaxed h-8">{product.title}</h5>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-primary font-bold text-sm">{product.price}</span>
                    <span className="text-[10px] text-slate-400">Đã bán {product.sold}</span>
                  </div>
                  {product.tags.length > 0 && (
                    <div className="flex gap-1 mt-1">
                      {product.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`text-[8px] border px-1 rounded ${
                            tag === "Rẻ vô địch"
                              ? "border-primary text-primary"
                              : tag === "Freeship"
                              ? "border-orange-500 text-orange-500"
                              : "border-primary text-primary"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-3 mt-6 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 text-sm font-medium">
            Xem thêm sản phẩm
          </button>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pb-safe-area-inset-bottom">
        <div className="flex justify-around items-center py-2">
          {bottomTabs.map((b) => {
            const IconComponent = b.icon;
            return (
              <button
                key={b.key}
                className={`flex flex-col items-center gap-1 ${
                  bottomTab === b.key ? "text-primary" : "text-slate-400 dark:text-slate-500"
                }`}
                onClick={() => {
                  if (b.key === "notif") {
                    navigate("/notification");
                  } else if (b.key === "home") {
                    navigate("/");
                  } else if (b.key === "mall" || b.key === "profile") {
                    navigate("/profile");
                  } else {
                    setBottomTab(b.key);
                  }
                }}
              >
                <IconComponent />
                <span className="text-[10px] font-medium">{b.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </Page>
  );
}

export default DiscoverPage;
