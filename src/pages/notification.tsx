import { useState } from "react";
import { Page } from "zmp-ui";
import { useNavigate } from "zmp-ui";

const HomeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
);

const DealIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>
);

const NotifIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
);

const LiveIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
);

const ProfileIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
);

const notifications = [
  {
    type: "approved",
    title: "Deal của bạn đã được phê duyệt",
    time: "2 phút trước",
    content: 'Nhà tài trợ VJD Sports đã chấp nhận yêu cầu apply của bạn cho "Găng tay Elite Pro". Hãy kiểm tra ngay!',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0gug9gsSpHkGmmOsHsc1cOabaSyDYmdkD9pDvGYm_oyYmqdFA5HRKXSOlh9AgayU5bVqNTNQBPp26YzRzc8P9p0FFkOz2m62NcRSPwe8Xnk10Q6UN9gZ4CDY-XLoHM1e35HA3-NlcNxIk3WJBZtdWHEjPrE4teF456seFQ6D7bZpe5npqIziEZoaJ3ct4uVBlZx2TJNc_FQgiFy5BjhDRnRspdztva11q4k2Z4l8m_XeJYpFo6UKkDVSvknDcCR-2qKxtIu01rGAD",
    showButton: true,
  },
  {
    type: "new",
    title: "Deal mới phù hợp với bạn",
    time: "1 giờ trước",
    content: "Có 5 deal găng tay thủ môn mới phù hợp với kỹ năng của bạn vừa được đăng tải từ các CLB chuyên nghiệp.",
    icon: "sports_soccer",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    type: "system",
    title: "Cập nhật trạng thái hồ sơ",
    time: "5 giờ trước",
    content: "Hồ sơ vận động viên của bạn đã được xác minh thành công. Bạn có thể bắt đầu apply các deal Premium.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHUXAl0EISEXilegOZCckekEBkyXf8t0pzkkAv3jPl7vCSHovfDovqQXNGWXt-8U6aePLV0q8QaGRoqZS1YTlpIqcI8QThYyty1CV6Q29ywiY_92FRHw97beWGSOJ0kBAe74GHSKEELKhqw0zoiLQ0DfZnktOlUie7MU3JqCPuD1ms8aIMb7LqWrAslX5KbwL6ZTozTxYkSRPSxCETZDtA8M2CtPCQIwoaQ3SHLAevFoviUSCzBTjHNS9kLbe3AdN4wuYnxkHEJmWs",
  },
  {
    type: "expiring",
    title: "Deal sắp hết hạn!",
    time: "Hôm qua",
    content: 'Deal "Giày bóng đá Predator" chỉ còn 24 giờ để đăng ký. Đừng bỏ lỡ cơ hội nhận tài trợ này.',
    icon: "timer",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    type: "rejected",
    title: "Kết quả ứng tuyển",
    time: "2 ngày trước",
    content: 'Tiếc quá! Yêu cầu của bạn cho deal "Áo đấu đội tuyển VJD" chưa được chấp nhận lần này. Hãy thử apply các deal khác nhé!',
    icon: "cancel",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-400",
  },
];

function NotificationPage() {
  const navigate = useNavigate();
  const [bottomTab, setBottomTab] = useState("notif");

  const bottomTabs = [
    { key: "home", label: "Trang chủ", icon: HomeIcon },
    { key: "deal", label: "Deal", icon: DealIcon },
    { key: "notif", label: "Thông báo", icon: NotifIcon },
    { key: "live", label: "Live", icon: LiveIcon },
    { key: "profile", label: "Tôi", icon: ProfileIcon },
  ];

  const getIcon = (icon: string) => {
    const icons: Record<string, JSX.Element> = {
      sports_soccer: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15l-2.5-2.5 1.41-1.41L10.5 14.17l4.59-4.59L16.5 11l-6 6z"/></svg>,
      timer: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
      cancel: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
    };
    return icons[icon] || null;
  };

  return (
    <Page className="bg-background-light dark:bg-background-dark font-display">
      <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
        <h1 className="text-xl font-bold tracking-tight">Thông báo</h1>
        <div className="flex gap-4">
          <button className="flex items-center justify-center">
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
          </button>
          <button className="flex items-center justify-center relative">
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">3</span>
          </button>
        </div>
      </header>

      <nav className="flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <button className="flex flex-1 flex-col items-center justify-center py-3 border-b-2 border-primary">
          <span className="text-sm font-semibold text-primary">Cập nhật Deal</span>
        </button>
        <button className="flex flex-1 flex-col items-center justify-center py-3">
          <span className="text-sm font-semibold text-slate-500">Khuyến mãi</span>
        </button>
        <button className="flex flex-1 flex-col items-center justify-center py-3">
          <span className="text-sm font-semibold text-slate-500">Hệ thống</span>
        </button>
      </nav>

      <main className="flex-1 overflow-y-auto pb-20">
        {notifications.map((notif, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-4 p-4 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 ${
              notif.type === "approved" ? "bg-primary/5" : ""
            }`}
          >
            <div className="flex-shrink-0">
              {notif.image ? (
                <div
                  className="w-14 h-14 rounded-lg bg-cover bg-center border border-slate-200"
                  style={{ backgroundImage: `url('${notif.image}')` }}
                />
              ) : notif.icon ? (
                <div className={`w-14 h-14 rounded-lg ${notif.iconBg} flex items-center justify-center ${notif.iconColor}`}>
                  {getIcon(notif.icon)}
                </div>
              ) : null}
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex justify-between items-start">
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-1">{notif.title}</p>
                <span className="text-[10px] text-slate-500 whitespace-nowrap ml-2">{notif.time}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{notif.content}</p>
              {notif.showButton && (
                <button className="mt-2 text-xs font-semibold text-primary w-fit px-3 py-1 rounded border border-primary/30 bg-primary/10">
                  Xem chi tiết
                </button>
              )}
            </div>
            {notif.type === "approved" && (
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
            )}
          </div>
        ))}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-2 pb-6 pt-2">
        <div className="flex justify-between items-center">
          {bottomTabs.map((b) => {
            const IconComponent = b.icon;
            return (
              <button
                key={b.key}
                className={`flex flex-1 flex-col items-center gap-1 ${
                  bottomTab === b.key ? "text-primary" : "text-slate-500"
                }`}
                onClick={() => {
                  if (b.key === "home") {
                    navigate("/");
                  } else if (b.key === "explore") {
                    navigate("/discover");
                  } else if (b.key === "profile") {
                    navigate("/profile");
                  } else {
                    setBottomTab(b.key);
                  }
                }}
              >
                {b.key === "notif" ? (
                  <div className="bg-primary/10 p-1 rounded-full px-4">
                    <IconComponent />
                  </div>
                ) : (
                  <IconComponent />
                )}
                <p className="text-[10px] font-medium leading-none">{b.label}</p>
              </button>
            );
          })}
        </div>
      </footer>
    </Page>
  );
}

export default NotificationPage;
