"use client"
import React, { useState } from 'react';

interface Story {
  id: number;
  title: string;
  content: string[];
  background: string;
}

interface Rapper {
  id: number;
  name: string;
  title: string;
  story: Story[];
  backgroundUrl: string;
  iconUrl: string;
}

const rappers: Rapper[] = [
  {
    id: 1,
    name: "Đen Vâu",
    title: "Nhà triết gia của Hip-hop Việt Nam",
    backgroundUrl: "../images/back/background.png",
    iconUrl: "../images/den/icon.png",
    story: [
      {
        id: 1,
        title: "Nguyễn Đức Cường",
        content: [
          "Tôi từng muốn có một cuộc sống an toàn và ổn định nên đã chọn nghề công nhân vệ sinh. Rồi lại nghĩ rằng xã hội thay đổi theo từng ngày, và chẳng có gì là an toàn cả. Khi bạn mạnh dạn đóng cánh cửa này lại, thì cánh cửa khác sẽ mở ra, nếu cảm thấy bế tắc quá thì hãy tìm một hướng đi khác. Thấy thoải mái thì mới làm công việc tốt được",
        ],
        background: "../images/den/background.png"
      },
      {
        id: 2,
        title: "Anh công nhân vệ sinh",
        content: [
          "Đen Vâu tên thật là Nguyễn Đức Cường, sinh năm 1989 tại Đồng Nai, theo trang Billboard Việt Nam.[6] Một số thông tin cho rằng anh sinh tại Thành phố Hạ Long.[1][2] Trong một cuộc phỏng vấn của Billboard Việt Nam, Đen Vâu tiết lộ quê gốc của anh là ở thôn Phần Hà, Bắc Sơn, Ân Thi, Hưng Yên.[6] Từ thời cấp 3, Đen Vâu đã biết đến rap một cách tình cờ",
        ],
        background: "../images/den/background.png"
      }
    ]
  },
  {
    id: 2,
    name: "Suboi",
    title: "'Nữ Hoàng' của Hip-Hop Việt Nam",
    backgroundUrl: "../images/suboi/background.png",
    iconUrl: "../images/suboi/icon.png",
    story: [
      {
        id: 1,
        title: "Hàng Lâm Trang Anh",
        content: [
          "Được sinh ra và lớn lên tại Thành phố Hồ Chí Minh, Suboi tiếp cận và yêu thích dòng nhạc hip hop kể từ khi cô chỉ mới 14 tuổi và bắt đầu trình diễn rap từ lúc 15 tuổi và sau đó cô nhanh chóng trở thành một trong những rapper nổi tiếng trong giới underground hip hop. Năm 19 tuổi, sau một lần thu âm cùng rapper Rapsoul và KraziNoyze, Suboi đã gây chú ý cho nhạc sĩ Dương Khắc Linh, người sau này đã mời cô gia nhập hãng đĩa Music Faces. ",
        ],
        background: "../images/suboi/background.png"
      },
      {
        id: 2,
        title: "'Nữ hoàng nhạc hip-hop' tại Việt Nam",
        content: [
          "Suboi là nghệ sĩ Việt Nam đầu tiên có banner riêng trên Apple Music và được biểu diễn tại Liên hoan South by Southwest, một trong những lễ hội âm nhạc thường niên lớn nhất nước Mỹ. Năm 2017, cô xuất hiện trên trang bìa của tạp chí Forbes Asia sau khi được lọt vào Danh sách 30 người trẻ tuổi ảnh hưởng nhất châu Á của năm và cũng là nghệ sĩ Việt Nam đầu tiên góp mặt vào danh sách này.", 
        ],
        background: "../images/suboi/background.png"
      }
    ]
  },
  {
    id: 3,
    name: "Binz",
    title: "Tiên phong cho làn sóng mới",
    backgroundUrl: "../images/binz/background.png",
    iconUrl: "../images/binz/icon.png",
    story: [
      {
        id: 1,
        title: "Binz Da Poet",
        content: [
          "Binz sinh ngày 24 tháng 5 năm 1988 tại Gia Lai, Việt Nam. Chịu ảnh hưởng từ sở thích nghe nhạc trữ tình từ mẹ, Binz sớm thần tượng các ca sĩ Việt Nam như Tuấn Ngọc, Khánh Ly, Giao Linh",


        ],
        background: "../images/binz/background.png"
      },
      {
        id: 2,
        title: "Xuân Đan",
        content: [
          "Binz từng sống và làm việc ở Texas, Hoa Kỳ (từ năm 2005). Trước khi quyết định đi theo con đường âm nhạc, Binz đã từng dành thời gian dài học về ngành kiến trúc tại trường đại học The Art Institute (Mỹ). Đối với anh, mỹ thuật đi song hành cùng âm nhạc, ảnh hưởng đến đời sống nghệ thuật của anh.",
        ],
        background: "../images/binz/background.png"
      }
    ]
  }
];

const RappersStory = () => {
  const [activeRapper, setActiveRapper] = useState<Rapper | null>(null);
  const [activeStory, setActiveStory] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleRapperSelect = (rapper: Rapper | null) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveRapper(rapper);
      setActiveStory(0);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-black">
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4">
        <div className="flex justify-between items-center">
          <button className="text-2xl font-bold hover:text-gray-300 transition-colors" onClick={() => handleRapperSelect(null)}>
            VN RAPPERS
          </button>
          {activeRapper && (
            <div className="flex items-center space-x-4">
              <span className="text-xl">{activeRapper.name}</span>
              <div className="h-px w-12 bg-white"></div>
              <span className="text-lg opacity-70">Story {activeStory + 1}/{activeRapper.story.length}</span>
            </div>
          )}
        </div>
      </nav>

      <main className="relative min-h-screen">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`} 
             style={{
               backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${activeRapper ? activeRapper.story[activeStory].background : rappers[0].backgroundUrl})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
        </div>

        {!activeRapper ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold mb-16">VIETNAMESE HIP HOP</h1>
            <div className="flex space-x-16">
              {rappers.map((rapper) => (
                <button key={rapper.id} onClick={() => handleRapperSelect(rapper)} className="group relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white transition-transform duration-500 group-hover:scale-110">
                    <img src={rapper.iconUrl} alt={rapper.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-2xl font-bold">{rapper.name}</h2>
                    <p className="text-sm opacity-80">{rapper.title}</p>
                  </div>
                </button>
              ))}
            </div>
            <div className="absolute bottom-8 animate-bounce text-4xl">↓</div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-4xl mx-auto p-8">
              <h2 className="text-4xl font-bold mb-8">{activeRapper.story[activeStory].title}</h2>
              <div className="space-y-6">
                {activeRapper.story[activeStory].content.map((line, index) => (
                  <p key={index} className="text-2xl leading-relaxed opacity-0 animate-fadeIn" style={{ animationDelay: `${index * 0.3}s` }}>
                    {line}
                  </p>
                ))}
              </div>
              
              <div className="absolute bottom-8 right-8 flex space-x-4">
                {activeStory > 0 && (
                  <button onClick={() => setActiveStory(prev => prev - 1)} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors text-2xl">
                    ←
                  </button>
                )}
                {activeStory < activeRapper.story.length - 1 && (
                  <button onClick={() => setActiveStory(prev => prev + 1)} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors text-2xl">
                    →
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default RappersStory;