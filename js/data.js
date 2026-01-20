const tripDetails = {
    title: "Macau & Hong Kong Family Trip",
    startDate: "2026-01-23T08:30:00",
    endDate: "2026-01-28T01:20:00",
    coverImage: "https://images.unsplash.com/photo-1536704942918-62025ece1928?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Macau/HK vibe
};

const itinerary = [
    {
        day: 1,
        date: "1. 23 (금)",
        title: "마카오 도착 & 올드타운",
        city: "마카오",
        events: [
            { time: "05:30", title: "인천공항 집결", desc: "여권, E-ticket 확인 (비행기 08:30)", mapQuery: "Incheon International Airport" },
            { time: "08:30", title: "인천 출발", desc: "에어마카오 NX825", mapQuery: "" },
            { time: "11:30", title: "마카오 공항 도착", desc: "입국 심사 및 짐 찾기 (NX825)", mapQuery: "Macau International Airport" },
            { time: "13:00", title: "호텔 이동 & 짐 맡기기", desc: "브로드웨이 마카오 호텔 (Broadway Macau)", mapQuery: "Broadway Macau" },
            { time: "14:00", title: "점심 식사", desc: "타이파 빌리지 근처 / 호텔식", mapQuery: "Taipa Village" },
            { time: "16:00", title: "올드타운 관광", desc: "세나도광장, 성바울 성당 (호텔셔틀/택시)", mapQuery: "Senado Square" },
            { time: "19:00", title: "저녁 식사", desc: "영도죽 (Yeng Do Juk) 또는 매캐니즈", mapQuery: "Yeng Do Juk Macau" },
            { time: "21:00", title: "마카오 타워 야경", desc: "야경 감상 (선택사항)", mapQuery: "Macau Tower" },
            { time: "22:30", title: "호텔 체크인 & 휴식", desc: "브로드웨이 마카오 호텔" }
        ]
    },
    {
        day: 2,
        date: "1. 24 (토)",
        title: "마카오 호캉스 & 타이파",
        city: "마카오",
        events: [
            { time: "10:00", title: "자유시간", desc: "수영, 아침 로컬식사, 산책 등" },
            { time: "11:00", title: "타이파 빌리지로 이동", desc: "호텔셔틀 이용", mapQuery: "Taipa Village Macau" },
            { time: "12:30", title: "점심 식사", desc: "Restaurant Litoral (매캐니즈) 등", mapQuery: "Restaurante Litoral Taipa" },
            { time: "14:30", title: "베네시안 / 파리지앵 투어", desc: "카지노, 운하, 쇼핑 (브로드웨이 호텔과 연결됨)", mapQuery: "The Venetian Macao" },
            { time: "19:00", title: "분수쇼 관람", desc: "원팰리스 (무료)", mapQuery: "Wynn Palace" },
            { time: "20:00", title: "하우스 오브 워터", desc: "공연 관람 (예약 확인)", mapQuery: "The House of Dancing Water" },
            { time: "22:00", title: "야경 투어 & 복귀", desc: "파리지앵/런더러 야경" }
        ]
    },
    {
        day: 3,
        date: "1. 25 (일)",
        title: "홍콩 이동 & 센트럴",
        city: "마카오 -> 홍콩",
        events: [
            { time: "10:00", title: "체크아웃 & 이동", desc: "페리 터미널로 이동 (홍콩행)", mapQuery: "Macau Outer Harbour Ferry Terminal" },
            { time: "13:00", title: "홍콩 셩완/센트럴 도착", desc: "입국 심사 후 숙소 이동" },
            { time: "14:00", title: "호텔 체크인", desc: "큐그린 호텔 (Kew Green Hotel Wanchai)", mapQuery: "Kew Green Hotel Wanchai Hong Kong" },
            { time: "15:00", title: "점심 식사 & 센트럴 관광", desc: "딤섬 / 미드레벨 에스컬레이터", mapQuery: "Central-Mid-Levels Escalators" },
            { time: "17:30", title: "빅토리아 피크", desc: "피크트램 탑승 (야경)", mapQuery: "Victoria Peak" },
            { time: "20:00", title: "저녁 식사", desc: "홍콩 로컬식", mapQuery: "Wan Chai" },
            { time: "21:30", title: "숙소 복귀", desc: "큐그린 호텔 휴식" }
        ]
    },
    {
        day: 4,
        date: "1. 26 (월)",
        title: "홍콩 침사추이",
        city: "홍콩",
        events: [
            { time: "09:00", title: "아침 식사", desc: "로컬 차탄탱" },
            { time: "11:00", title: "침사추이 이동", desc: "스타페리 또는 지하철" },
            { time: "12:30", title: "점심 식사", desc: "하이퐁 로드 마켓 (임시)", mapQuery: "Haiphong Road Temporary Market" },
            { time: "14:00", title: "침사추이 관광", desc: "하버시티, 1881 헤리티지", mapQuery: "Harbour City" },
            { time: "18:00", title: "저녁 식사", desc: "Ocean Super Seafood", mapQuery: "Ocean Super Seafood Restaurant" },
            { time: "20:00", title: "심포니 오브 라이트", desc: "스타의 거리 야경", mapQuery: "Avenue of Stars Hong Kong" },
            { time: "21:30", title: "숙소 복귀", desc: "휴식" }
        ]
    },
    {
        day: 5,
        date: "1. 27 (화)",
        title: "마무리 & 귀국",
        city: "홍콩",
        events: [
            { time: "11:00", title: "체크아웃 & 짐 보관", desc: "호텔에 짐 보관 or 얼리체크인(공항)" },
            { time: "12:30", title: "점심 식사 & 쇼핑", desc: "IFC 몰 / 코즈웨이베이 등", mapQuery: "IFC Mall Hong Kong" },
            { time: "17:30", title: "공항으로 이동", desc: "AEL 공항철도 또는 택시", mapQuery: "Hong Kong International Airport" },
            { time: "18:45", title: "공항 체크인 & 저녁", desc: "홍콩항공 HX626 (20:45 출발)" },
            { time: "20:45", title: "홍콩 출발", desc: "HX626편 탑승", mapQuery: "" }
        ]
    },
    {
        day: 6,
        date: "1. 28 (수)",
        title: "한국 도착",
        city: "인천",
        events: [
            { time: "01:20", title: "인천공항 도착", desc: "즐거운 여행 종료! (HX626)", mapQuery: "Incheon International Airport" }
        ]
    }
];

const checklistItems = [
    { category: "옷 (12~19°C)", items: ["가디건/경량패딩 (아침저녁 쌀쌀)", "활동하기 편한 긴바지/운동화", "호텔 수영복 & 물안경 (온수풀)", "잠옷 (호텔 난방 약할 수 있음)"] },
    { category: "필수품", items: ["여권 (만료 6개월 전)", "유심 / 로밍 신청"] },
    { category: "돈", items: ["홍콩달러 (HKD) 환전", "트래블로그/트래블월렛 카드", "마카오 파타카(MOP)는 HKD 사용가능"] },
    { category: "교통카드", items: ["아이폰 : Octopus for Tourists 설치 후 Apple wallet에 추가", "갤럭시 : Octopus App for Tourists 다운로드", "앱으로 안되면 카드 현지에서 구매예정"] },
    { category: "전자기기", items: ["돼지코 (홍콩/마카오 3구 G타입 필수)", "충전기 & 보조배터리", "멀티탭"] },
    { category: "개인용품", items: ["상비약 (소화제, 밴드, 종합감기약)", "우산 (비상용)", "물티슈/휴지"] }
];
