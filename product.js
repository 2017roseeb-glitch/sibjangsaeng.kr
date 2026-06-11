const cheonsimImages = [
  "assets/cheonsim-water.png",
  "assets/cheonsim-emulsion.png",
  "assets/cheonsim-essence.png",
  "assets/cheonsim-cream.png",
  "assets/cheonsim-eye-cream.png",
  "assets/cheonsim-2set.png",
  "assets/cheonsim-sun-cream.png",
];

const productLines = {
  cheonsim: [
    {
      kicker: "Cheonshim Toner",
      title: "<span>세안 직후,</span><span>피부 속 수분을 채우는</span><span>천심수</span>",
      body:
        "천심 토너는 자극 없이 가볍게 스며드는 질감으로 피부 속 수분을 빠르게 공급합니다. 한방 추출 성분이 피부 표면을 촉촉하게 정돈해 건조함과 당김을 줄여주며, 다음 단계 제품이 더 잘 흡수될 수 있도록 피부 환경을 만들어 줍니다.",
      meta: "150ml ㅣ 55,000원",
      image: "assets/cheonsim-water.png",
      alt: "천심수 제품 이미지",
      thumbLabel: "천심수",
    },
    {
      kicker: "Cheonshim Emulsion",
      title: "<span>피부 속 수분과</span><span>영양을 채워주는</span><span>천심액</span>",
      body:
        "천심액은 가볍고 촉촉한 질감으로 피부 속 수분과 영양을 빠르게 공급합니다. 한방 추출 성분이 피부 표면을 부드럽게 정돈해 건조함과 당김을 줄여주며, 피부 보호막을 형성해 수분이 날아가지 않도록 잡아줍니다.",
      meta: "150ml ㅣ 55,000원",
      image: "assets/cheonsim-emulsion.png",
      alt: "천심액 제품 이미지",
      thumbLabel: "천심액",
    },
    {
      kicker: "Cheonshim Essence",
      title: "<span>피부 속 깊이</span><span>자양분을 채우는</span><span>한방 에센스</span>",
      body:
        "천심 자양에센스는 고농축 한방 추출 성분이 피부 속 깊이 빠르게 흡수되어 집중적인 자양과 영양을 공급합니다. 피부 본연의 생기와 탄력을 끌어올려 칙칙함과 건조함을 개선하며, 다음 단계 제품의 효과를 극대화할 수 있도록 피부 결을 정돈해 줍니다.",
      meta: "45ml ㅣ 110,000원 ㅣ Ampoule 10ml",
      image: "assets/cheonsim-essence.png",
      alt: "천심 자양 에센스 제품 이미지",
      thumbLabel: "자양 에센스",
    },
    {
      kicker: "Cheonshim Cream",
      title: "<span>피부 속 자양분을</span><span>겉으로 완성하는</span><span>천심 자양크림</span>",
      body:
        "천심 크림은 발효 한방 추출 성분이 피부 깊은 곳에서부터 장벽을 단단히 다져줍니다. 피부 본연의 탄력과 윤기를 끌어올려 거칠고 푸석한 피부결을 개선하며, 하루의 스킨케어를 풍성하게 마무리해 줍니다.",
      meta: "50ml ㅣ 110,000원 ㅣ Ampoule 10ml",
      image: "assets/cheonsim-cream.png",
      alt: "천심 자양크림 제품 이미지",
      thumbLabel: "자양크림",
    },
    {
      kicker: "Cheonshim Eye Cream",
      title: "<span>눈가의 섬세한</span><span>결을 가꾸는</span><span>천심 아이크림</span>",
      body:
        "천심 아이크림은 발효 한방 추출 성분이 눈가의 얇고 예민한 피부 깊이 빠르게 스며들어 집중적인 영양을 공급합니다. 잔주름과 건조함을 개선하고 처진 눈가에 탄력과 생기를 더해 또렷하고 건강한 눈매로 가꾸어 줍니다.",
      meta: "50ml ㅣ 110,000원 ㅣ Ampoule 10ml",
      image: "assets/cheonsim-eye-cream.png",
      alt: "천심 아이크림 제품 이미지",
      thumbLabel: "아이크림",
    },
    {
      kicker: "Cheonshim 2-Set",
      title: "<span>수분과 영양감을 채워</span><span>완성하는 피부아름다움</span><span>천심 2종 세트</span>",
      body:
        "천심수와 천심액, 천심 아이크림으로 구성된 피부관리 루틴. 피부 속 깊이 수분을 채우고 아이크림으로 단단히 마무리하여, 맑고 건강한 피부결을 보다 효과적으로 이끌어 줍니다.",
      meta: "150ml + 150ml ㅣ 110,000원 ㅣ Eyecream 30ml",
      image: "assets/cheonsim-2set.png",
      alt: "천심 2종 세트 제품 이미지",
      thumbLabel: "2종 세트",
      copyClass: "product-copy-compact",
      visualClass: "product-visual-smaller",
    },
    {
      kicker: "Cheonshim Sun Cream<br />SPF50+ PA+++",
      title: "<span>피부를 지키고</span><span>결을 정돈하는</span><span>천심 썬크림</span>",
      body:
        "천심 썬크림은 발효 한방 추출 성분이 자외선 차단과 동시에 피부 결을 부드럽게 정돈해 줍니다. 외부 자극으로부터 피부를 보호하면서도 산뜻하고 가볍게 마무리되어 일상의 마지막 한방 케어로 완성됩니다.",
      meta: "80ml ㅣ 40,000원 ㅣ Foam Cleanser 50ml",
      image: "assets/cheonsim-sun-cream.png",
      alt: "천심 썬크림 제품 이미지",
      thumbLabel: "썬크림",
      visualClass: "product-visual-sun",
    },
  ],
  cheonjiyang: [
    {
      kicker: "Cheonjiyang Skin Toner",
      title: "<span>산삼의힘을 피부에,</span><span>영양 시작을 알리는</span><span>천지향 수액</span>",
      body:
        "천지향 수액은 산삼배양근 성분을 담아 손상된 피부를 재생하고 수분을 공급합니다. 피부결을 매끄럽게 정돈하며 이후 단계의 흡수를 돕는 스킨케어의 첫 걸음입니다.",
      meta: "150ml ㅣ 60,000원",
      image: "assets/cheonjiyang-skin-toner-cropped.png",
      alt: "천지향 수액 제품 이미지",
      thumbLabel: "수액",
    },
    {
      kicker: "Cheonjiyang Emulsion",
      title: "<span>수분과 영양의</span><span>균형을 잡아주는</span><span>천지향 유액</span>",
      body:
        "천지향 유액은 한방 발효 추출 성분이 피부 속 수분막을 형성하여 촉촉함을 오래 유지시켜 줍니다. 가볍고 산뜻하게 흡수되며 수분과 유분의 밸런스를 균형 있게 케어합니다.",
      meta: "150ml ㅣ 60,000원",
      image: "assets/cheonjiyang-emulsion-cropped.png",
      alt: "천지향 유액 제품 이미지",
      thumbLabel: "유액",
    },
    {
      kicker: "Cheonjiyang Essence",
      title: "<span>피부 깊이</span><span>스며드는</span><span>천지향진액</span>",
      body:
        "천지향진액은 야생 산삼 배양 성분을 고농축으로 담아 피부 탄력과 윤기를 집중적으로 케어합니다. 바르는 즉시 피부 깊은 층까지 흡수되어 생기 있는 피부결로 가꾸어 줍니다.",
      meta: "45ml ㅣ 130,000원 ㅣ toner, emulsion 31ml / cream 15ml",
      image: "assets/cheonjiyang-essence-set.png",
      alt: "천지향진액 제품 이미지",
      thumbLabel: "진액",
      visualClass: "product-visual-smaller",
    },
    {
      kicker: "Cheonjiyang Cream",
      title: "<span>피부 장벽을</span><span>단단히 채우는</span><span>천지향 자양크림</span>",
      body:
        "천지향 크림은 한방 유효 성분이 피부 깊은 곳에서 영양을 집중 공급하고 탄탄한 장벽을 형성합니다. 건조하고 푸석한 피부를 윤기 있게 가꾸며 스킨케어 마지막 단계를 풍성하게 마무리해 줍니다.",
      meta: "50ml ㅣ 130,000원 ㅣ toner, emulsion 31ml / ampoule 10ml",
      image: "assets/cheonjiyang-cream-set.png",
      alt: "천지향 크림 제품 이미지",
      thumbLabel: "크림",
      visualClass: "product-visual-scale-130",
    },
    {
      kicker: "Cheonjiyang Eye Cream",
      title: "<span>눈가 탄력을</span><span>되살리는</span><span>천지향 아이크림</span>",
      body:
        "천지향 아이크림은 섬세한 눈가 피부에 집중적으로 영양을 전달합니다. 잔주름과 처짐을 개선하고 눈가를 환하고 탄탄하게 정돈해 주는 눈가 전용 크림입니다.",
      meta: "50ml ㅣ 130,000원 ㅣ toner, emulsion 31ml",
      image: "assets/cheonjiyang-eye-cream.png",
      alt: "천지향 아이크림 제품 이미지",
      thumbLabel: "아이크림",
    },
    {
      kicker: "Cheonjiyang Massage Cream",
      title: "<span>피부 순환을</span><span>깨워주는</span><span>천지향 마사지 크림</span>",
      body:
        "천지향 마사지 크림은 한방 성분의 풍부한 영양을 담아 마사지하는 동안 피부 순환을 촉진시킵니다. 긴장된 피부를 이완시키고 광채 나는 탄력 피부로 가꾸어 줍니다.",
      meta: "250ml ㅣ 42,000원",
      image: "assets/cheonjiyang-massage-cream.png",
      alt: "천지향 마사지 크림 제품 이미지",
      thumbLabel: "마사지 크림",
      visualClass: "product-visual-scale-60",
      thumbClass: "product-thumb-small",
    },
    {
      kicker: "Cheonjiyang Cleansing Cream",
      title: "<span>부드럽게</span><span>씻어내는</span><span>천지향 클렌징 크림</span>",
      body:
        "천지향 클렌징 크림은 한방 성분이 메이크업과 노폐물을 부드럽게 용해하여 깨끗하게 씻어냅니다. 세정 후에도 피부 당김 없이 촉촉하고 편안한 세정감을 선사합니다.",
      meta: "250ml ㅣ 35,000원",
      image: "assets/cheonjiyang-cleansing-cream.png",
      alt: "천지향 클렌징 크림 제품 이미지",
      thumbLabel: "클렌징 크림",
      visualClass: "product-visual-scale-60",
      thumbClass: "product-thumb-small",
    },
    {
      kicker: "Cheonjiyang Foam Cleansing",
      title: "<span>풍성한 거품으로</span><span>산뜻하게 정리하는</span><span>천지향 폼클렌징</span>",
      body:
        "천지향 폼클렌징은 부드럽고 풍성한 거품이 모공 속 노폐물과 피지를 깔끔하게 세정합니다. 세정 후에도 피부 본연의 수분을 지켜 촉촉하고 산뜻한 사용감을 줍니다.",
      meta: "200ml ㅣ 32,000원",
      image: "assets/cheonjiyang-foam-cleansing.png",
      alt: "천지향 폼클렌징 제품 이미지",
      thumbLabel: "폼클렌징",
      visualClass: "product-visual-scale-80",
    },
    {
      kicker: "Cheonjiyang Peeling Gel",
      title: "<span>묵은 각질을</span><span>매끄럽게 정리하는</span><span>천지향 필링겔</span>",
      body:
        "천지향 필링겔은 한방 성분과 부드러운 각질 케어 성분이 만나 거칠어진 피부결을 매끄럽게 정리합니다. 자극 없이 묵은 각질을 제거하여 피부 흡수력을 높이고 밝은 피부로 가꾸어 줍니다.",
      meta: "150ml ㅣ 36,000원 ㅣ foam cleansing 50ml",
      image: "assets/cheonjiyang-peeling-gel.png",
      alt: "천지향 필링겔 제품 이미지",
      thumbLabel: "필링겔",
      visualClass: "product-visual-scale-120",
    },
    {
      kicker: "Cheonjiyang Sun Cream",
      title: "<span>자외선으로부터</span><span>피부를 지키는</span><span>천지향 썬크림</span>",
      body:
        "천지향 썬크림은 SPF50+ PA++++의 강력한 자외선 차단력과 함께 한방 보습 성분이 피부를 편안하게 케어합니다. 산뜻하게 밀착되며 자외선 차단과 스킨케어를 동시에 완성합니다.",
      meta: "80ml ㅣ 40,000원 ㅣ SPF50+ PA++++ / foam cleansing 50ml",
      image: "assets/cheonjiyang-sun-cream.png",
      alt: "천지향 썬크림 제품 이미지",
      thumbLabel: "썬크림",
      visualClass: "product-visual-sun",
    },
    {
      kicker: "Cheonjiyang BB Cream",
      title: "<span>자연스러운</span><span>피부 표현을 완성하는</span><span>천지향 비비크림</span>",
      body:
        "천지향 비비크림은 SPF50+ PA++++의 자외선 차단 기능과 자연스러운 피부 커버력을 동시에 제공합니다. 피부 톤을 균일하게 정돈하며 한방 성분이 피부를 편안하게 가꾸어 줍니다.",
      meta: "50ml ㅣ 45,000원 ㅣ SPF50+ PA++++ / BB cream 10ml",
      image: "assets/cheonjiyang-bb-cream.png",
      alt: "천지향 비비크림 제품 이미지",
      thumbLabel: "비비크림",
      visualClass: "product-visual-smaller",
    },
    {
      kicker: "Cheonjiyang Moisture Luminous Essence",
      title: "<span>풍부한 수분으로</span><span>빛나는 피부광채</span><span>천지향 수분광채 에센스</span>",
      body:
        "천지향 수분광채 에센스는 피부 속 깊이 수분을 집중 공급하며 환하고 윤기 있는 피부결을 만들어 줍니다. 묵직하지 않고 가볍게 흡수되어 하루 종일 생기 있는 광채를 유지시켜 줍니다.",
      meta: "150ml ㅣ 60,000원",
      image: "assets/cheonjiyang-moisture-luminous-essence.png",
      alt: "천지향 수분광채 에센스 제품 이미지",
      thumbLabel: "광채 에센스",
    },
    {
      kicker: "Cheonjiyang Moisture Luminous Cream",
      title: "<span>촉촉한 수분광채로</span><span>마무리하는</span><span>천지향 수분광채 크림</span>",
      body:
        "천지향 수분광채 크림은 수분과 영양을 풍부하게 담아 피부 표면을 촉촉하고 탄탄하게 마무리합니다. 오랜 시간 수분막을 유지하며 건조함 없이 생기 있는 광채 피부를 완성해 줍니다.",
      meta: "150ml ㅣ 60,000원",
      image: "assets/cheonjiyang-moisture-luminous-cream.png",
      alt: "천지향 수분광채 크림 제품 이미지",
      thumbLabel: "광채 크림",
      visualClass: "product-visual-scale-60",
    },
    {
      kicker: "Cheonjiyang 2-Set",
      title: "<span>완벽한 향,</span><span>완벽한 피부밸런스</span><span>천지향 2종 세트</span>",
      body:
        "천지향 수액과 유액으로 구성된 2종 세트로, 피부 재생과 수분 공급을 동시에 시작할 수 있습니다. 선물용으로도 손색없는 고품격 한방 스킨케어 세트입니다.",
      meta: "150ml ㅣ 120,000원 ㅣ toner 150ml / emulsion 31ml / cream 15ml",
      image: "assets/cheonjiyang-2set.png",
      alt: "천지향 2종 세트 제품 이미지",
      thumbLabel: "2종 세트",
      visualClass: "product-visual-scale-130",
    },
    {
      kicker: "Cheonjiyang 3-Set",
      title: "<span>천지향 라인의</span><span>정수를 담은</span><span>3종 세트</span>",
      body:
        "천지향 수액, 유액, 크림과 앰플까지 구성한 3종 세트로, 천지향 라인의 핵심 제품을 한번에 경험할 수 있습니다. 피부 근본부터 재생, 수분, 마무리까지 완성하는 프리미엄 선물 세트입니다.",
      meta: "150ml ㅣ 246,000원 ㅣ toner, emulsion 150ml, 31ml / cream 50ml / ampoule 30ml",
      image: "assets/cheonjiyang-3set.png",
      alt: "천지향 3종 세트 제품 이미지",
      thumbLabel: "3종 세트",
      visualClass: "product-visual-smaller",
    },
  ],
  kuman: [
    {
      kicker: "Kum-An Skin",
      title: "<span>피부 근본부터</span><span>채우는</span><span>금안수</span>",
      body:
        "금안수는 물 대신 100% '금안수'와 발효십장생복합체를 활용하여 피부 근본부터 다스리는 고품격 한방 수분 베이스입니다. 피부 속 깊이 수분을 공급하며 이후 단계의 흡수력을 높여줍니다.",
      meta: "150ml ㅣ 50,000원",
      image: "assets/kuman-skin-cropped.png",
      alt: "금안수 제품 이미지",
      thumbLabel: "금안수",
    },
    {
      kicker: "Kum-An Emulsion",
      title: "<span>피부 결을</span><span>촉촉하게 정돈하는</span><span>금안액</span>",
      body:
        "금안액은 100% 금안수와 발효십장생복합체가 피부 깊은 곳까지 수분과 영양을 전달합니다. 가볍고 부드럽게 흡수되어 피부 밸런스를 균형 있게 맞추며 하루 종일 촉촉함을 유지시켜 줍니다.",
      meta: "150ml ㅣ 50,000원",
      image: "assets/kuman-emulsion-cropped.png",
      alt: "금안액 제품 이미지",
      thumbLabel: "금안액",
    },
    {
      kicker: "Kum-An Jin Essence",
      title: "<span>피부 탄력을</span><span>집중 케어하는</span><span>금안 진 에센스</span>",
      body:
        "금안 진 에센스는 고농축 금안수와 발효 한방 성분이 피부 속 탄력을 집중적으로 끌어올립니다. 피부 결 깊은 곳부터 생기와 윤기를 채워 건강하고 빛나는 피부로 가꾸어 줍니다.",
      meta: "45ml ㅣ 85,000원 ㅣ toner, emulsion 31ml",
      image: "assets/kuman-jin-essence.png",
      alt: "금안 진 에센스 제품 이미지",
      thumbLabel: "진 에센스",
      visualClass: "product-visual-smaller",
    },
    {
      kicker: "Kum-An Jin Cream",
      title: "<span>피부를 풍성하게</span><span>마무리하는</span><span>금안 진 크림</span>",
      body:
        "금안 진 크림은 금안수와 발효십장생복합체의 영양이 피부 표면에 보호막을 형성하여 수분 증발을 막아줍니다. 피부 탄력과 윤기를 높이며 스킨케어의 마지막을 풍성하게 완성해 줍니다.",
      meta: "50ml ㅣ 90,000원 ㅣ toner, emulsion 31ml",
      image: "assets/kuman-jin-cream.png",
      alt: "금안 진 크림 제품 이미지",
      thumbLabel: "진 크림",
      visualClass: "product-visual-smaller",
    },
    {
      kicker: "Kum-An Jin Eye Cream",
      title: "<span>눈가 탄력을</span><span>집중 케어하는</span><span>금안 진 아이크림</span>",
      body:
        "금안 진 아이크림은 섬세한 눈가 피부에 금안수와 발효 한방 성분을 집중적으로 전달합니다. 눈가의 잔주름과 처짐을 개선하고 밝고 탄탄한 눈가로 가꾸어 줍니다.",
      meta: "50ml ㅣ 90,000원 ㅣ toner, emulsion 31ml",
      image: "assets/kuman-eye-cream.png",
      alt: "금안 진 아이크림 제품 이미지",
      thumbLabel: "아이크림",
      visualClass: "product-visual-smaller",
    },
    {
      kicker: "Kum-An 2-Set",
      title: "<span>금안 스킨케어의</span><span>시작을 위한</span><span>2종 세트</span>",
      body:
        "금안수와 금안액으로 구성된 2종 세트로, 피부 근본부터 수분과 영양을 채우는 금안 라인을 간편하게 시작할 수 있습니다. 선물용으로도 손색없는 고품격 한방 스킨케어 세트입니다.",
      meta: "150ml ㅣ 100,000원 ㅣ toner 150ml, emulsion 31ml",
      image: "assets/kuman-2set.png",
      alt: "금안 2종 세트 제품 이미지",
      thumbLabel: "2종 세트",
      visualClass: "product-visual-smaller",
    },
    {
      kicker: "Kum-An 3-Set",
      title: "<span>금안 라인의</span><span>정수를 담은</span><span>3종 세트</span>",
      body:
        "금안수, 금안액, 금안 진 크림과 에센스까지 구성한 3종 세트로, 금안 라인의 핵심 제품을 한번에 경험할 수 있습니다. 피부 근본부터 탄력, 수분, 마무리까지 완성하는 프리미엄 선물 세트입니다.",
      meta: "150ml ㅣ 190,000원 ㅣ toner, emulsion 150ml, 31ml / cream 50ml / essence 10ml",
      image: "assets/kuman-3set.png",
      alt: "금안 3종 세트 제품 이미지",
      thumbLabel: "3종 세트",
      visualClass: "product-visual-smaller",
    },
  ],
  cheonsamjin: [
    {
      kicker: "Cheonsamjin Vitalze Stick Ampoule",
      title: "<span>집중 재생을 위한</span><span>천삼진 초보양</span><span>스틱 앰플</span>",
      body:
        "천삼진 초보양 스틱 앰플은 야생 산삼 배양 성분이 고농축으로 담겨 지친 피부에 집중적인 영양과 활력을 공급합니다. 간편한 스틱 타입으로 언제 어디서나 손쉽게 사용할 수 있습니다.",
      meta: "27g ㅣ 60,000원 ㅣ ampoule 10ml",
      image: "assets/cheonsamjin-stick-ampoule.png",
      alt: "천삼진 초보양 스틱 앰플 제품 이미지",
      thumbLabel: "스틱 앰플",
      visualClass: "product-visual-smaller",
    },
    {
      kicker: "Cheonsamjin Vitalze Ampoule",
      title: "<span>피부 재생을</span><span>완성하는</span><span>천삼진 초보양 앰플</span>",
      body:
        "천삼진 초보양 앰플은 야생 산삼 배양 성분을 10개입으로 구성하여 집중 케어 기간 동안 매일 피부에 깊은 영양과 활력을 전달합니다. 피부 재생과 탄력 개선에 도움을 주는 스페셜 케어 앰플입니다.",
      meta: "10ml ㅣ 220,000원 ㅣ ampoule 10ml × 10EA",
      image: "assets/cheonsamjin-ampoule.png",
      alt: "천삼진 초보양 앰플 제품 이미지",
      thumbLabel: "초보양 앰플",
      visualClass: "product-visual-smaller",
    },
  ],
  yegyul: [
    {
      kicker: "Yegyul Toner",
      title: "<span>피부를 밝고 맑게</span><span>가꾸는</span><span>예결 수액</span>",
      body:
        "예결 수액은 상황버섯추출물이 피부 속 깊이 스며들어 칙칙하고 거친 피부결을 맑고 깨끗하게 정돈합니다. 산뜻한 텍스처로 빠르게 흡수되며 이후 스킨케어 단계의 흡수력을 높여줍니다.",
      meta: "130ml ㅣ 39,000원",
      image: "assets/yegyul-toner.png",
      alt: "예결 수액 제품 이미지",
      thumbLabel: "예결 수액",
    },
    {
      kicker: "Yegyul Emulsion",
      title: "<span>산뜻하게</span><span>수분을 채우는</span><span>예결 유액</span>",
      body:
        "예결 유액은 상황버섯추출물이 피부 수분 밸런스를 균형 있게 케어합니다. 가볍고 산뜻한 텍스처로 빠르게 흡수되어 끈적임 없이 촉촉하고 청결한 피부결로 가꾸어 줍니다.",
      meta: "130ml ㅣ 39,000원",
      image: "assets/yegyul-emulsion.png",
      alt: "예결 유액 제품 이미지",
      thumbLabel: "예결 유액",
    },
    {
      kicker: "Yegyul Essence",
      title: "<span>맑은 피부로</span><span>이끄는</span><span>예결 진액</span>",
      body:
        "예결 진액은 상황버섯추출물의 고농축 영양이 피부 깊은 곳까지 침투하여 피부 톤을 환하게 밝히고 탄력을 더해줍니다. 피부 본연의 맑고 깨끗한 빛을 끌어올려 줍니다.",
      meta: "60ml ㅣ 55,000원 ㅣ toner, emulsion 30ml",
      image: "assets/yegyul-essence.png",
      alt: "예결 진액 제품 이미지",
      thumbLabel: "예결 진액",
    },
    {
      kicker: "Yegyul Cream",
      title: "<span>피부 결을</span><span>환하게 완성하는</span><span>예결 크림</span>",
      body:
        "예결 크림은 상황버섯추출물과 한방 보습 성분이 피부 표면에 촉촉한 보호막을 형성합니다. 피부 톤을 균일하게 정돈하고 맑고 윤기 있는 피부결로 하루를 마무리해 줍니다.",
      meta: "50ml ㅣ 55,000원 ㅣ toner, emulsion 30ml",
      image: "assets/yegyul-cream.png",
      alt: "예결 크림 제품 이미지",
      thumbLabel: "예결 크림",
      visualClass: "product-visual-smaller",
    },
    {
      kicker: "Yegyul Eye Cream",
      title: "<span>눈가를 환하고</span><span>탄탄하게 가꾸는</span><span>예결 아이크림</span>",
      body:
        "예결 아이크림은 상황버섯추출물이 예민한 눈가 피부에 집중적으로 영양을 전달합니다. 눈가의 잔주름과 어두움을 개선하여 밝고 탄탄한 눈가로 가꾸어 줍니다.",
      meta: "50ml ㅣ 55,000원 ㅣ toner, emulsion 30ml",
      image: "assets/yegyul-eye-cream.png",
      alt: "예결 아이크림 제품 이미지",
      thumbLabel: "아이크림",
      visualClass: "product-visual-smaller",
    },
    {
      kicker: "Yegyul 2-Set",
      title: "<span>맑고 깨끗한</span><span>피부의 시작을 위한</span><span>예결 2종 세트</span>",
      body:
        "예결 수액과 유액으로 구성된 2종 세트로, 상황버섯추출물의 한방 기초 케어를 간편하게 시작할 수 있습니다. 선물용으로도 손색없는 한방 기초 스킨케어 세트입니다.",
      meta: "130ml ㅣ 78,000원 ㅣ toner 130ml / emulsion 30ml",
      image: "assets/yegyul-2set.png",
      alt: "예결 2종 세트 제품 이미지",
      thumbLabel: "2종 세트",
      visualClass: "product-visual-smaller",
    },
  ],
  areumdaunseon: [
    {
      kicker: "Beautiful Line Make-Up Base",
      title: "<span>피부 톤을 자연스럽게</span><span>정돈하는</span><span>아름다운 선 메이크업베이스</span>",
      body:
        "아름다운 선 메이크업베이스는 십장생 복합체와 순금 성분이 피부를 건강하고 윤기나게 표현합니다. 메이크업의 밀착력을 높이며 자외선으로부터 피부를 편안하게 보호합니다.",
      meta: "40ml ㅣ 45,000원 ㅣ SPF30 PA++",
      image: "assets/beautiful-line-makeup-base.png",
      alt: "아름다운 선 메이크업베이스 제품 이미지",
      thumbLabel: "메이크업베이스",
    },
    {
      kicker: "Beautiful Line Foundation",
      title: "<span>균일하고 자연스러운</span><span>커버를 완성하는</span><span>아름다운 선 파운데이션</span>",
      body:
        "아름다운 선 파운데이션은 십장생 복합체와 순금 성분이 피부를 건강하고 빛나게 표현합니다. 21호(회사한색), 23호(자분한색) 두 가지 컬러로 피부 톤에 맞는 자연스러운 커버를 완성합니다.",
      meta: "40ml ㅣ 45,000원 ㅣ SPF35 PA++",
      image: "assets/beautiful-line-foundation.png",
      alt: "아름다운 선 파운데이션 제품 이미지",
      thumbLabel: "파운데이션",
    },
    {
      kicker: "Beautiful Line Two-Way Cake",
      title: "<span>건강한 광채로</span><span>마무리하는</span><span>아름다운 선 투웨이케익</span>",
      body:
        "아름다운 선 투웨이케익은 십장생 복합체와 순금 성분이 피부에 건강한 광채를 더하며 자외선을 차단합니다. 21호(회사한색), 23호(자분한색) 두 가지 컬러로 가볍고 산뜻하게 피부를 마무리해 줍니다.",
      meta: "15g ㅣ 60,000원 ㅣ SPF30 PA+++ / refill 내장",
      image: "assets/beautiful-line-two-way-cake.png",
      alt: "아름다운 선 투웨이케익 제품 이미지",
      thumbLabel: "투웨이케익",
      visualClass: "product-visual-smaller",
    },
    {
      kicker: "Beautiful Line Skin Cover",
      title: "<span>가볍게 밀착되는</span><span>아름다운 선</span><span>스킨커버</span>",
      body:
        "아름다운 선 스킨커버는 십장생 복합체와 순금 성분이 피부 결점을 자연스럽게 커버하며 건강한 피부 톤을 완성합니다. 21호(회사한색), 23호(자분한색) 두 가지 컬러로 피부에 가볍게 밀착되어 산뜻하게 마무리해 줍니다.",
      meta: "13g ㅣ 55,000원 ㅣ SPF30 PA++ / refill 내장",
      image: "assets/beautiful-line-skin-cover.png",
      alt: "아름다운 선 스킨커버 제품 이미지",
      thumbLabel: "스킨커버",
      visualClass: "product-visual-smaller",
    },
  ],
};

const currentLineKey = document.querySelector("[data-product-line]")?.dataset.productLine || "cheonsim";
const detailProducts = productLines[currentLineKey] || productLines.cheonsim;

const detailCopy = document.querySelector("[data-detail-copy]");
const detailVisual = document.querySelector("[data-detail-visual]");
const detailPrev = document.querySelector("[data-detail-prev]");
const detailNext = document.querySelector("[data-detail-next]");
const detailThumbTrack = document.querySelector("[data-detail-thumb-track]");
let detailThumbs = [];
let activeDetail = 0;
const lineInfoContent = document.querySelector(".line-info-content");
const originalLineInfoHtml = lineInfoContent?.innerHTML || "";

function stripHtml(value) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = value || "";
  return wrapper.textContent?.replace(/\s+/g, " ").trim() || "";
}

function getCompactThumbLabel(productName) {
  return productName
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s+SPF.*$/i, "")
    .replace(/^(Cheonshim|Cheonjiyang|Kum-An|Cheonsamjin|Yegyul|Beautiful Line)\s+/i, "")
    .trim();
}

function localizeProductItem(item) {
  const lang = window.SJS_I18N?.currentLanguage || "ko";
  if (lang === "ko") return item;

  const productName = stripHtml(item.kicker);
  const thumbLabel = getCompactThumbLabel(productName) || productName;
  return {
    ...item,
    copyClass: [item.copyClass || "", "product-copy-translated"].filter(Boolean).join(" "),
    title: `<span>${productName}</span>`,
    body: window.SJS_I18N?.t("product.genericBody") || item.body,
    thumbLabel,
  };
}

function localizeLineInfo() {
  if (!lineInfoContent || !window.SJS_I18N) return;

  const lang = window.SJS_I18N.currentLanguage || "ko";
  if (lang === "ko") {
    lineInfoContent.innerHTML = originalLineInfoHtml;
    return;
  }

  const lineNameKey =
    {
      cheonjiyang: "line.cheonjihyang",
      cheonsim: "line.cheonsim",
      kuman: "line.kuman",
      cheonsamjin: "line.cheonsamjin",
      yegyul: "line.yegyeol",
      areumdaunseon: "line.beautiful",
    }[currentLineKey] || "line.cheonsim";
  const lineName = window.SJS_I18N.t(lineNameKey);
  const title = window.SJS_I18N.t("product.lineInfoTitle").replace("{line}", lineName);

  lineInfoContent.innerHTML = `
    <p class="line-info-label">${lineName.toUpperCase()} LINE</p>
    <h2>${title}</h2>
    <p class="line-info-subtitle">SIBJANGSAENG ${lineName.toUpperCase()}</p>
    <p class="line-info-quote">${window.SJS_I18N.t("product.lineInfoQuote")}</p>
    <span class="line-info-rule" aria-hidden="true"></span>
    <p class="line-info-lead">${window.SJS_I18N.t("product.lineInfoLead")}</p>
    <div class="line-info-tags" aria-label="${lineName}">
      <span>${lineName}</span>
      <span>SibJangSaeng</span>
      <span>Herbal skincare</span>
    </div>
  `;
}

function getVisibleThumbCount() {
  return window.matchMedia("(max-width: 1280px)").matches ? 5 : 4;
}

function renderThumbs() {
  if (!detailThumbTrack) return;

  detailThumbTrack.innerHTML = detailProducts
    .map((item, index) => {
      const localizedItem = localizeProductItem(item);
      const media = item.image
        ? `<img src="${item.image}" alt="" />`
        : `<span class="product-thumb-pending" aria-hidden="true"></span>`;

      return `
        <button class="${[index === activeDetail ? "is-active" : "", item.thumbClass || ""].filter(Boolean).join(" ")}" type="button" data-detail-thumb="${index}" aria-label="${localizedItem.thumbLabel}">
          ${media}
          <span>${localizedItem.thumbLabel}</span>
        </button>
      `;
    })
    .join("");

  detailThumbs = Array.from(document.querySelectorAll("[data-detail-thumb]"));
  detailThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      renderDetail(Number(thumb.dataset.detailThumb));
    });
  });
}

function updateThumbStrip() {
  if (!detailThumbTrack || !detailThumbs.length) return;

  const firstThumb = detailThumbs[0];
  const trackStyles = window.getComputedStyle(detailThumbTrack);
  const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap) || 0;
  const thumbStep = firstThumb.getBoundingClientRect().width + gap;
  const visibleThumbCount = getVisibleThumbCount();
  const maxStart = Math.max(0, detailThumbs.length - visibleThumbCount);
  const centeredStart = activeDetail - Math.floor(visibleThumbCount / 2);
  const startIndex = Math.min(Math.max(0, centeredStart), maxStart);

  detailThumbTrack.style.transform = `translateX(${-startIndex * thumbStep}px)`;
}

function renderDetail(index) {
  activeDetail = (index + detailProducts.length) % detailProducts.length;
  const item = localizeProductItem(detailProducts[activeDetail]);

  detailCopy.classList.remove("is-active");
  detailVisual.classList.remove("is-active");

  window.setTimeout(() => {
    detailCopy.className = `product-copy ${item.copyClass || ""}`.trim();
    detailVisual.className = `product-visual ${item.visualClass || ""}`.trim();
    detailCopy.innerHTML = `
      <p class="product-kicker">${item.kicker}</p>
      <h1>${item.title}</h1>
      <p>${item.body}</p>
      ${item.meta ? `<p class="product-meta">${item.meta}</p>` : ""}
    `;
    detailVisual.innerHTML = item.image
      ? `<img src="${item.image}" alt="${item.alt}" />`
      : `<div class="product-image-pending" aria-label="${item.alt}">${window.SJS_I18N?.t("product.imagePending") || "이미지 준비중"}</div>`;
    detailCopy.classList.add("is-active");
    detailVisual.classList.add("is-active");
    detailThumbs.forEach((thumb, thumbIndex) => {
      thumb.classList.toggle("is-active", thumbIndex === activeDetail);
    });
    updateThumbStrip();
  }, 120);
}

detailPrev?.addEventListener("click", () => renderDetail(activeDetail - 1));
detailNext?.addEventListener("click", () => renderDetail(activeDetail + 1));

const productHeader = document.querySelector(".product-header");
const productMenuButton = document.querySelector("[data-product-menu-button]");
const productMenuNav = productHeader?.querySelector("nav");
const languageMenu = document.querySelector(".language-menu");
const languageToggle = document.querySelector(".language-toggle");
const languageButtons = Array.from(document.querySelectorAll("[data-lang]"));

function closeProductMenu() {
  productHeader?.classList.remove("is-menu-open");
  productMenuButton?.setAttribute("aria-expanded", "false");
}

function closeLanguageMenu() {
  languageMenu?.classList.remove("is-open");
  languageToggle?.setAttribute("aria-expanded", "false");
}

function applyLanguage(targetLang) {
  window.SJS_I18N?.setLanguage(targetLang || "ko");
  closeLanguageMenu();
}

productMenuButton?.addEventListener("click", () => {
  const isOpen = productHeader?.classList.toggle("is-menu-open") ?? false;
  productMenuButton.setAttribute("aria-expanded", String(isOpen));
  closeLanguageMenu();
});

languageToggle?.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = languageMenu?.classList.toggle("is-open") ?? false;
  languageToggle.setAttribute("aria-expanded", String(isOpen));
  closeProductMenu();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

productMenuNav?.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("a")) {
    closeProductMenu();
  }
});

document.addEventListener("click", (event) => {
  if (event.target instanceof Node && productHeader && !productHeader.contains(event.target)) {
    closeProductMenu();
    closeLanguageMenu();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProductMenu();
    closeLanguageMenu();
  }
});

window.addEventListener("resize", updateThumbStrip);
renderThumbs();
renderDetail(0);

window.addEventListener("sjs:languagechange", () => {
  renderThumbs();
  renderDetail(activeDetail);
  localizeLineInfo();
});

localizeLineInfo();

const lineInfoSections = Array.from(document.querySelectorAll(".line-info-section"));

if (lineInfoSections.length) {
  const revealLineInfo = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        entry.target.classList.remove("is-visible");
      }
    });
  };

  const lineInfoObserver = new IntersectionObserver(revealLineInfo, {
    threshold: window.matchMedia("(max-width: 1280px)").matches ? 0.08 : 0.28,
  });

  lineInfoSections.forEach((section) => lineInfoObserver.observe(section));
}
