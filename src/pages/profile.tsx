import { useState } from "react";
import { Page } from "zmp-ui";
import { useNavigate } from "zmp-ui";

const HomeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
);

const ExploreIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
);

const DealIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>
);

const NotifIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
);

const ProfileIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
);

const ChevronRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
);

function ProfilePage() {
  const navigate = useNavigate();
  const [bottomTab, setBottomTab] = useState("profile");

  const bottomTabs = [
    { key: "home", label: "Trang chủ", icon: HomeIcon },
    { key: "explore", label: "Khám phá", icon: ExploreIcon },
    { key: "deal", label: "Deal", icon: DealIcon },
    { key: "notif", label: "Thông báo", icon: NotifIcon },
    { key: "profile", label: "Cá nhân", icon: ProfileIcon },
  ];

  return (
    <Page className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="bg-primary pt-10 pb-16 px-4 rounded-b-[2rem] relative shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full border-2 border-white overflow-hidden bg-white shadow-md">
                <img
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5QI0XYiSvtVDS5EeOppXvDpHYiDgcOoFhfbuAM-09nF71ve2ic6xIcTFhfEH0LU79BMeI_K2-EKKeYaFV4qdh-vqqTLoIfyJkf8H4JLvt_c7y0qS46vRAHAa8Aa2yn1chX4pwWa_GrADEFXKLYIwn3si2ZdRTIrOGJCXEX7JOT7yPQqUncokZoAmOv9AIGAU96QgbONLjXI_iCdmwZTMuyoMxdNWYs2_RJTGcweb7N5z2AhZcUonCStC_t6rZo0lDs2BRlEPFQUgG"
                  alt="Avatar"
                />
              </div>
              <div>
                <h1 className="text-white text-xl font-bold">VJD Sports User</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">Pickleball</span>
                  <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">Level 2</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="text-white p-2 hover:bg-white/10 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </button>
              <button className="text-white p-2 hover:bg-white/10 rounded-full relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                <span className="absolute top-1 right- w-2 bg-yellow-400 rounded-full"></span>
1 h-2              </button>
            </div>
          </div>
          <div className="absolute -bottom-10 left-4 right-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 flex justify-between items-center border border-slate-100 dark:border-slate-700">
            <div className="flex flex-col items-center flex-1 border-r border-slate-100 dark:border-slate-700">
              <span className="text-primary text-xl font-bold">12</span>
              <span className="text-slate-500 dark:text-slate-400 text-xs">Deal đã đăng</span>
            </div>
            <div className="flex flex-col items-center flex-1 border-r border-slate-100 dark:border-slate-700">
              <span className="text-primary text-xl font-bold">05</span>
              <span className="text-slate-500 dark:text-slate-400 text-xs">Đang chờ</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <span className="text-primary text-xl font-bold">28</span>
              <span className="text-slate-500 dark:text-slate-400 text-xs">Tài trợ</span>
            </div>
          </div>
        </div>

        <div className="mt-14 px-4 pb-24 space-y-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4 border-b border-slate-50 dark:border-slate-700 pb-2">
              <h2 className="font-bold text-slate-900 dark:text-slate-100">Quản lý Deal của tôi</h2>
              <button className="text-primary text-xs font-medium flex items-center">
                Xem tất cả <ChevronRight />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <div className="text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                </div>
                <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300">Đã đăng ký</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <div className="text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300">Đang chờ</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <div className="text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300">Lịch sử tài trợ</span>
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="p-4 border-b border-slate-50 dark:border-slate-700">
              <h2 className="font-bold text-slate-900 dark:text-slate-100">Cài đặt tài khoản</h2>
            </div>
            <div className="divide-y divide-slate-50 dark:divide-slate-700">
              <button className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors w-full">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  <span className="text-sm font-medium">Hồ sơ cá nhân</span>
                </div>
                <ChevronRight />
              </button>
              <button className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors w-full">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  <span className="text-sm font-medium">Bảo mật & Tài khoản</span>
                </div>
                <ChevronRight />
              </button>
              <button className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors w-full">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span className="text-sm font-medium">Trung tâm trợ giúp</span>
                </div>
                <ChevronRight />
              </button>
              <button className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors w-full">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>
                  <span className="text-sm font-medium">Ngôn ngữ</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-slate-400">Tiếng Việt</span>
                  <ChevronRight />
                </div>
              </button>
            </div>
          </div>

          <button className="w-full py-4 bg-white dark:bg-slate-800 text-primary font-bold rounded-xl shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Đăng xuất
          </button>
          <div className="text-center py-4">
            <p className="text-slate-400 text-xs">Phiên bản 2.4.0 (Prodeals by VJD Sports)</p>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 px-4 py-2 flex justify-between items-center z-50">
          {bottomTabs.map((b) => {
            const IconComponent = b.icon;
            return (
              <button
                key={b.key}
                className={`flex flex-col items-center gap-1 flex-1 ${
                  bottomTab === b.key ? "text-primary" : "text-slate-400"
                }`}
                onClick={() => {
                  if (b.key === "home") {
                    navigate("/");
                  } else if (b.key === "explore") {
                    navigate("/discover");
                  } else if (b.key === "notif") {
                    navigate("/notification");
                  } else {
                    setBottomTab(b.key);
                  }
                }}
              >
                {b.key === "deal" ? (
                  <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center -mt-8 shadow-lg shadow-primary/30 border-4 border-white dark:border-slate-900">
                    <IconComponent />
                  </div>
                ) : (
                  <IconComponent />
                )}
                <span className="text-[10px] font-medium">{b.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </Page>
  );
}

export default ProfilePage;
