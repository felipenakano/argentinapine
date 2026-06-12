// ArgentinaPine.com — i18n system
// Design: Timber Atlas — Premium B2B Trade Portal

export type Language = "en" | "vi" | "fil" | "zh";

export const LANGUAGES: { code: Language; label: string; nativeLabel: string; flag: string }[] = [
  { code: "en", label: "English", nativeLabel: "English", flag: "🇺🇸" },
  { code: "vi", label: "Vietnamese", nativeLabel: "Tiếng Việt", flag: "🇻🇳" },
  { code: "fil", label: "Filipino", nativeLabel: "Filipino", flag: "🇵🇭" },
  { code: "zh", label: "Chinese", nativeLabel: "中文", flag: "🇨🇳" },
];

export const LANGUAGE_PATH_PREFIX: Record<Language, string> = {
  en: "",
  vi: "/vi",
  fil: "/fil",
  zh: "/zh",
};

export function getLangFromPath(pathname: string): Language {
  if (pathname.startsWith("/vi")) return "vi";
  if (pathname.startsWith("/fil")) return "fil";
  if (pathname.startsWith("/zh")) return "zh";
  return "en";
}

export function getPathForLang(currentPath: string, targetLang: Language): string {
  const currentLang = getLangFromPath(currentPath);
  const currentPrefix = LANGUAGE_PATH_PREFIX[currentLang];
  const targetPrefix = LANGUAGE_PATH_PREFIX[targetLang];

  // Strip current prefix
  const pathWithoutPrefix = currentPrefix
    ? currentPath.replace(new RegExp(`^${currentPrefix}`), "") || "/"
    : currentPath;

  return targetPrefix + pathWithoutPrefix;
}

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────

export type Translations = typeof enTranslations;

export const enTranslations = {
  nav: {
    home: "Home",
    products: "Products",
    species: "Species",
    sourcing: "Sourcing",
    blog: "Blog",
    about: "About",
    contact: "Contact",
    inquire: "Send Inquiry",
  },
  home: {
    heroHeadline: "Your Source for Argentine Pine Products",
    heroSub: "An independent reference and sourcing guide for international buyers of Argentine pine — timber, mouldings, panels, and more.",
    heroCta: "Explore Products",
    heroCtaSecondary: "Send an Inquiry",
    introTitle: "Why Argentine Pine?",
    introBody: "Argentina is one of the world's largest exporters of plantation pine, producing Pinus taeda across the Mesopotamia region of northeastern Argentina. The country's pine plantations yield consistent, well-graded timber prized by buyers across Asia, the Middle East, and the Pacific for its dimensional stability, workability, and competitive pricing.",
    whyTitle: "Why Source from Argentina",
    latestPosts: "Latest from the Blog",
    ctaTitle: "Ready to Source Argentine Pine?",
    ctaBody: "Send us your specifications and we will provide product information, typical pricing ranges, and sourcing guidance.",
    ctaBtn: "Send an Inquiry",
    originBadge: "Sourced from Argentina",
    stats: [
      { value: "900K+", label: "Hectares of plantation pine" },
      { value: "3", label: "Main growing provinces" },
      { value: "4", label: "Export product categories" },
      { value: "20+", label: "Key export markets" },
    ],
    whyPoints: [
      { title: "Consistent Quality", body: "Argentine pine plantations are managed to international forestry standards, producing uniform, well-graded timber with predictable moisture content and dimensional tolerances." },
      { title: "Competitive Pricing", body: "Lower land and labour costs relative to North American and European producers make Argentine pine one of the most cost-effective softwood options for Asian and Pacific buyers." },
      { title: "Established Export Infrastructure", body: "Argentina's northeastern ports are well-equipped for container loading of pine timber and processed wood products, with regular liner services to Asia, the Middle East, and the Pacific." },
      { title: "Broad Product Range", body: "From rough-sawn sawn timber and dressed boards to precision finger joint mouldings and laminated panels, Argentine mills offer a wide range of value-added pine wood products ready for export." },
    ],
  },
  products: {
    title: "Argentine Pine Products",
    subtitle: "Pine timber, mouldings, panels, and finger joint products for international buyers.",
    intro: "Argentine pine mills produce a comprehensive range of processed pine timber and wood products for export. Each product category below covers typical specifications, common applications, available grades, and how to submit an inquiry.",
    specs: "Specifications",
    uses: "Common Uses",
    grades: "Available Grades",
    inquire: "Send Inquiry",
    allProducts: "All Products",
  },
  species: {
    title: "Species",
    keyFacts: "Key Facts",
    comparison: "Comparison Table",
    properties: "Technical Properties",
  },
  sourcing: {
    title: "Sourcing",
  },
  blog: {
    title: "Blog",
    subtitle: "Insights on Argentine pine products, species, sourcing, and market intelligence.",
    filterBy: "Filter by category",
    allCategories: "All Categories",
    readMore: "Read Article",
    latestPosts: "Latest Articles",
    categories: {
      Species: "Species",
      Products: "Products",
      Sourcing: "Sourcing",
      "Market Intelligence": "Market Intelligence",
    },
  },
  about: {
    title: "About ArgentinaPine.com",
  },
  contact: {
    title: "Contact & Inquiry",
    intro: "Send us your product specifications and we will provide information, typical pricing guidance, and sourcing support.",
    email: "inquiry@argentinapine.com",
    name: "Name",
    company: "Company",
    country: "Country",
    message: "Message",
    submit: "Send Inquiry",
    success: "Your inquiry has been sent. We will be in touch shortly.",
    disclosure: "ArgentinaPine.com is operated by New Zealand Lumber Exports Limited.",
  },
  footer: {
    tagline: "An independent resource for international buyers of Argentine pine timber.",
    disclosure: "ArgentinaPine.com is operated by New Zealand Lumber Exports Limited, an independent pine timber sourcing specialist.",
    rights: "All rights reserved.",
    quickLinks: "Quick Links",
    products: "Products",
    resources: "Resources",
  },
  common: {
    learnMore: "Learn More",
    backTo: "Back to",
    loading: "Loading...",
    notFound: "Page not found.",
  },
};

export const viTranslations: Translations = {
  nav: {
    home: "Trang Chủ",
    products: "Sản Phẩm",
    species: "Loài Cây",
    sourcing: "Nguồn Cung",
    blog: "Blog",
    about: "Giới Thiệu",
    contact: "Liên Hệ",
    inquire: "Gửi Yêu Cầu",
  },
  home: {
    heroHeadline: "Nguồn Cung Cấp Sản Phẩm Gỗ Thông Argentina",
    heroSub: "Tài nguyên tham khảo và hướng dẫn thu mua độc lập dành cho người mua quốc tế về gỗ thông Argentina — gỗ xẻ, gỗ xẻ sawn timber, khuôn gỗ, tấm ván và nhiều sản phẩm khác.",
    heroCta: "Khám Phá Sản Phẩm",
    heroCtaSecondary: "Gửi Yêu Cầu",
    introTitle: "Tại Sao Chọn Gỗ Thông Argentina?",
    introBody: "Argentina là một trong những nước xuất khẩu gỗ thông trồng lớn nhất thế giới, sản xuất Pinus taeda tại vùng Mesopotamia ở đông bắc Argentina. Các đồn điền thông tạo ra gỗ đồng đều, phân loại tốt, được người mua tại châu Á, Trung Đông và Thái Bình Dương đánh giá cao nhờ độ ổn định kích thước, khả năng gia công và giá cạnh tranh.",
    whyTitle: "Tại Sao Mua Hàng Từ Argentina",
    latestPosts: "Bài Viết Mới Nhất",
    ctaTitle: "Sẵn Sàng Thu Mua Gỗ Thông Argentina?",
    ctaBody: "Gửi thông số kỹ thuật của bạn và chúng tôi sẽ cung cấp thông tin sản phẩm, mức giá tham khảo và hướng dẫn thu mua.",
    ctaBtn: "Gửi Yêu Cầu",
    originBadge: "Xuất xứ từ Argentina",
    stats: [
      { value: "900K+", label: "Héc-ta đồn điền thông" },
      { value: "3", label: "Tỉnh trồng thông chính" },
      { value: "4", label: "Danh mục sản phẩm xuất khẩu" },
      { value: "20+", label: "Thị trường xuất khẩu chính" },
    ],
    whyPoints: [
      { title: "Chất Lượng Đồng Đều", body: "Các đồn điền thông Argentina được quản lý theo tiêu chuẩn lâm nghiệp quốc tế, tạo ra gỗ đồng đều với độ ẩm và dung sai kích thước có thể dự đoán được." },
      { title: "Giá Cạnh Tranh", body: "Chi phí đất đai và lao động thấp hơn so với các nhà sản xuất Bắc Mỹ và châu Âu khiến gỗ thông Argentina trở thành lựa chọn gỗ mềm tiết kiệm nhất cho người mua châu Á và Thái Bình Dương." },
      { title: "Cơ Sở Hạ Tầng Xuất Khẩu Đã Được Thiết Lập", body: "Các cảng đông bắc Argentina được trang bị tốt để đóng container gỗ thông xẻ (sawn timber) và các sản phẩm gỗ chế biến, với các tuyến vận chuyển thường xuyên đến châu Á, Trung Đông và Thái Bình Dương." },
      { title: "Đa Dạng Sản Phẩm", body: "Từ gỗ thông xẻ thô (sawn timber) và ván đã bào đến khuôn gỗ ghép ngón chính xác và tấm ván ép, các xưởng Argentina cung cấp nhiều loại sản phẩm gỗ có giá trị gia tăng sẵn sàng để xuất khẩu." },
    ],
  },
  products: {
    title: "Sản Phẩm Gỗ Thông Argentina",
    subtitle: "Gỗ thông xẻ (pine timber), khuôn gỗ, tấm ván và sản phẩm ghép ngón cho người mua quốc tế.",
    intro: "Các xưởng gỗ thông Argentina sản xuất nhiều loại sản phẩm gỗ chế biến để xuất khẩu.",
    specs: "Thông Số Kỹ Thuật",
    uses: "Ứng Dụng Phổ Biến",
    grades: "Phân Loại Có Sẵn",
    inquire: "Gửi Yêu Cầu",
    allProducts: "Tất Cả Sản Phẩm",
  },
  species: {
    title: "Loài Cây",
    keyFacts: "Thông Tin Chính",
    comparison: "Bảng So Sánh",
    properties: "Thuộc Tính Kỹ Thuật",
  },
  sourcing: {
    title: "Nguồn Cung",
  },
  blog: {
    title: "Blog",
    subtitle: "Thông tin về sản phẩm gỗ thông Argentina, loài cây, nguồn cung và thông tin thị trường.",
    filterBy: "Lọc theo danh mục",
    allCategories: "Tất Cả Danh Mục",
    readMore: "Đọc Bài Viết",
    latestPosts: "Bài Viết Mới Nhất",
    categories: {
      Species: "Loài Cây",
      Products: "Sản Phẩm",
      Sourcing: "Nguồn Cung",
      "Market Intelligence": "Thông Tin Thị Trường",
    },
  },
  about: {
    title: "Giới Thiệu ArgentinaPine.com",
  },
  contact: {
    title: "Liên Hệ & Yêu Cầu",
    intro: "Gửi thông số kỹ thuật sản phẩm của bạn và chúng tôi sẽ cung cấp thông tin, hướng dẫn giá tham khảo và hỗ trợ thu mua.",
    email: "inquiry@argentinapine.com",
    name: "Họ Tên",
    company: "Công Ty",
    country: "Quốc Gia",
    message: "Tin Nhắn",
    submit: "Gửi Yêu Cầu",
    success: "Yêu cầu của bạn đã được gửi. Chúng tôi sẽ liên hệ sớm.",
    disclosure: "ArgentinaPine.com được vận hành bởi New Zealand Lumber Exports Limited.",
  },
  footer: {
    tagline: "Tài nguyên độc lập dành cho người mua quốc tế về gỗ thông Argentina.",
    disclosure: "ArgentinaPine.com được vận hành bởi New Zealand Lumber Exports Limited, chuyên gia thu mua gỗ thông độc lập.",
    rights: "Tất cả quyền được bảo lưu.",
    quickLinks: "Liên Kết Nhanh",
    products: "Sản Phẩm",
    resources: "Tài Nguyên",
  },
  common: {
    learnMore: "Tìm Hiểu Thêm",
    backTo: "Quay lại",
    loading: "Đang tải...",
    notFound: "Không tìm thấy trang.",
  },
};

export const filTranslations: Translations = {
  nav: {
    home: "Tahanan",
    products: "Mga Produkto",
    species: "Mga Species",
    sourcing: "Pagkuha",
    blog: "Blog",
    about: "Tungkol Sa",
    contact: "Makipag-ugnayan",
    inquire: "Magpadala ng Katanungan",
  },
  home: {
    heroHeadline: "Ang Inyong Pinagkukunan ng Mga Produktong Pine mula Argentina",
    heroSub: "Isang independiyenteng sanggunian at gabay sa pagkuha para sa mga internasyonal na mamimili ng pine mula Argentina — pine timber, mouldings, panels, at marami pa.",
    heroCta: "Tuklasin ang Mga Produkto",
    heroCtaSecondary: "Magpadala ng Katanungan",
    introTitle: "Bakit Pine mula Argentina?",
    introBody: "Ang Argentina ay isa sa mga pinakamalaking exporter ng plantation pine sa mundo, na gumagawa ng Pinus taeda sa rehiyon ng Mesopotamia sa hilagang-silangan ng Argentina. Ang mga plantation ng pine ay nagbubunga ng pare-pareho, mahusay na na-grade na kahoy na pinahahalagahan ng mga mamimili sa Asya, Gitnang Silangan, at Pasipiko.",
    whyTitle: "Bakit Kumuha mula Argentina",
    latestPosts: "Pinakabagong Mga Artikulo",
    ctaTitle: "Handa na Bang Kumuha ng Pine mula Argentina?",
    ctaBody: "Ipadala ang inyong mga detalye at magbibigay kami ng impormasyon ng produkto, mga tipikal na hanay ng presyo, at gabay sa pagkuha.",
    ctaBtn: "Magpadala ng Katanungan",
    originBadge: "Pinagmulan: Argentina",
    stats: [
      { value: "900K+", label: "Ektarya ng plantation pine" },
      { value: "3", label: "Pangunahing lalawigan" },
      { value: "4", label: "Kategorya ng produkto" },
      { value: "20+", label: "Mga pangunahing merkado" },
    ],
    whyPoints: [
      { title: "Pare-parehong Kalidad", body: "Ang mga plantation ng pine sa Argentina ay pinamamahalaan ayon sa mga internasyonal na pamantayan sa kagubatan, na gumagawa ng pare-pareho, mahusay na na-grade na kahoy." },
      { title: "Mapagkumpitensyang Presyo", body: "Ang mas mababang gastos sa lupa at paggawa kumpara sa mga producer sa Hilagang Amerika at Europa ay nagpapagawa sa pine mula Argentina na isa sa mga pinaka-cost-effective na softwood na opsyon." },
      { title: "Naitatag na Export Infrastructure", body: "Ang mga daungan sa hilagang-silangan ng Argentina ay mahusay na nilagyan ng kagamitan para sa container loading ng pine timber at mga processed na produktong kahoy." },
      { title: "Malawak na Hanay ng Produkto", body: "Mula sa rough-sawn sawn timber at dressed boards hanggang sa precision finger joint mouldings at laminated panels, nag-aalok ang mga mill sa Argentina ng malawak na hanay ng value-added na mga produktong kahoy." },
    ],
  },
  products: {
    title: "Mga Produktong Pine mula Argentina",
    subtitle: "Pine timber, mouldings, panels, at finger joint products para sa mga internasyonal na mamimili.",
    intro: "Ang mga mill ng pine sa Argentina ay gumagawa ng komprehensibong hanay ng mga processed na produktong kahoy para sa export.",
    specs: "Mga Detalye",
    uses: "Mga Karaniwang Gamit",
    grades: "Mga Available na Grado",
    inquire: "Magtanong",
    allProducts: "Lahat ng Produkto",
  },
  species: {
    title: "Mga Species",
    keyFacts: "Mga Pangunahing Katotohanan",
    comparison: "Talahanayan ng Paghahambing",
    properties: "Mga Teknikal na Katangian",
  },
  sourcing: {
    title: "Pagkuha",
  },
  blog: {
    title: "Blog",
    subtitle: "Mga kaalaman tungkol sa mga produktong pine mula Argentina, species, pagkuha, at market intelligence.",
    filterBy: "I-filter ayon sa kategorya",
    allCategories: "Lahat ng Kategorya",
    readMore: "Basahin ang Artikulo",
    latestPosts: "Pinakabagong Mga Artikulo",
    categories: {
      Species: "Mga Species",
      Products: "Mga Produkto",
      Sourcing: "Pagkuha",
      "Market Intelligence": "Impormasyon sa Merkado",
    },
  },
  about: {
    title: "Tungkol sa ArgentinaPine.com",
  },
  contact: {
    title: "Makipag-ugnayan at Katanungan",
    intro: "Ipadala ang inyong mga detalye ng produkto at magbibigay kami ng impormasyon, tipikal na gabay sa presyo, at suporta sa pagkuha.",
    email: "inquiry@argentinapine.com",
    name: "Pangalan",
    company: "Kumpanya",
    country: "Bansa",
    message: "Mensahe",
    submit: "Magpadala ng Katanungan",
    success: "Naipadala na ang inyong katanungan. Makikipag-ugnayan kami sa inyo sa lalong madaling panahon.",
    disclosure: "Ang ArgentinaPine.com ay pinapatakbo ng New Zealand Lumber Exports Limited.",
  },
  footer: {
    tagline: "Isang independiyenteng sanggunian para sa mga internasyonal na mamimili ng pine mula Argentina.",
    disclosure: "Ang ArgentinaPine.com ay pinapatakbo ng New Zealand Lumber Exports Limited, isang independiyenteng espesyalista sa pagkuha ng pine.",
    rights: "Lahat ng karapatan ay nakalaan.",
    quickLinks: "Mga Mabilis na Link",
    products: "Mga Produkto",
    resources: "Mga Mapagkukunan",
  },
  common: {
    learnMore: "Matuto Pa",
    backTo: "Bumalik sa",
    loading: "Naglo-load...",
    notFound: "Hindi nahanap ang pahina.",
  },
};

export const zhTranslations: Translations = {
  nav: {
    home: "首页",
    products: "产品",
    species: "树种",
    sourcing: "采购",
    blog: "博客",
    about: "关于我们",
    contact: "联系我们",
    inquire: "发送询价",
  },
  home: {
    heroHeadline: "阿根廷松木产品采购指南",
    heroSub: "面向国际买家的独立参考资源与采购指南——阿根廷松木（pine timber）、锯材（sawn timber）、线条、板材等产品一站式了解。",
    heroCta: "浏览产品",
    heroCtaSecondary: "发送询价",
    introTitle: "为何选择阿根廷松木？",
    introBody: "阿根廷是全球最大的人工林松木出口国之一，在阿根廷东北部的美索不达米亚地区生产火炬松（Pinus taeda）。该国松木人工林出产的木材规格一致、分级良好，因其尺寸稳定性、加工性能和具有竞争力的价格，深受亚洲、中东和太平洋地区买家的青睐。",
    whyTitle: "为何从阿根廷采购",
    latestPosts: "最新文章",
    ctaTitle: "准备好采购阿根廷松木了吗？",
    ctaBody: "请发送您的产品规格，我们将为您提供产品信息、参考价格区间及采购指导。",
    ctaBtn: "发送询价",
    originBadge: "产地：阿根廷",
    stats: [
      { value: "900K+", label: "公顷人工林松木" },
      { value: "3", label: "主要种植省份" },
      { value: "4", label: "出口产品类别" },
      { value: "20+", label: "主要出口市场" },
    ],
    whyPoints: [
      { title: "品质稳定", body: "阿根廷松木人工林按照国际林业标准管理，出产规格一致、分级良好的木材，含水率和尺寸公差可预测。" },
      { title: "价格具有竞争力", body: "与北美和欧洲生产商相比，阿根廷较低的土地和劳动力成本使阿根廷松木成为亚洲和太平洋地区买家最具成本效益的软木选择之一。" },
      { title: "成熟的出口基础设施", body: "阿根廷东北部港口具备完善的松木材（pine timber）及木制品集装箱装载设施，定期开通前往亚洲、中东和太平洋地区的航线。" },
      { title: "产品种类丰富", body: "从粗锯材（sawn timber）和刨光板到精密指接线条和层压板，阿根廷工厂提供多种增值木制品，可直接出口。" },
    ],
  },
  products: {
    title: "阿根廷松木产品",
    subtitle: "面向国际买家的松木材（pine timber）、线条、板材及指接产品。",
    intro: "阿根廷松木工厂生产多种加工木材产品供出口。",
    specs: "规格参数",
    uses: "常见应用",
    grades: "可用等级",
    inquire: "询价",
    allProducts: "所有产品",
  },
  species: {
    title: "树种",
    keyFacts: "关键数据",
    comparison: "对比表",
    properties: "技术性能",
  },
  sourcing: {
    title: "采购",
  },
  blog: {
    title: "博客",
    subtitle: "关于阿根廷松木产品、树种、采购及市场情报的深度文章。",
    filterBy: "按类别筛选",
    allCategories: "所有类别",
    readMore: "阅读文章",
    latestPosts: "最新文章",
    categories: {
      Species: "树种",
      Products: "产品",
      Sourcing: "采购",
      "Market Intelligence": "市场情报",
    },
  },
  about: {
    title: "关于 ArgentinaPine.com",
  },
  contact: {
    title: "联系与询价",
    intro: "请发送您的产品规格，我们将为您提供产品信息、参考价格指导及采购支持。",
    email: "inquiry@argentinapine.com",
    name: "姓名",
    company: "公司",
    country: "国家",
    message: "留言",
    submit: "发送询价",
    success: "您的询价已发送，我们将尽快与您联系。",
    disclosure: "ArgentinaPine.com由新西兰木材出口有限公司运营。",
  },
  footer: {
    tagline: "面向阿根廷松木产品国际买家的独立参考资源。",
    disclosure: "ArgentinaPine.com由新西兰木材出口有限公司（New Zealand Lumber Exports Limited）运营，该公司是一家独立的松木采购专家。",
    rights: "版权所有。",
    quickLinks: "快速链接",
    products: "产品",
    resources: "资源",
  },
  common: {
    learnMore: "了解更多",
    backTo: "返回",
    loading: "加载中...",
    notFound: "页面未找到。",
  },
};

export const translations: Record<Language, Translations> = {
  en: enTranslations,
  vi: viTranslations,
  fil: filTranslations,
  zh: zhTranslations,
};

export function useTranslations(lang: Language): Translations {
  return translations[lang] || enTranslations;
}
