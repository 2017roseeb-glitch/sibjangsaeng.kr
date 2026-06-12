const SJS_LANG_STORAGE_KEY = "sjs-language";

const SJS_I18N = {
  supported: ["ko", "en", "ja", "zh-CN", "fr", "it", "es", "de", "pt", "th", "ru", "uz"],
  dictionaries: {
    ko: {
      meta: {
        title: "십장생 | 시간을 다스리는 아름다움",
        description:
          "로제화장품의 프리미엄 한방 스킨케어 브랜드 십장생. 30년 전통의 천지향, 천심, 천삼진, 예결, 아름다운선, 금안 제품 라인으로 시간을 되돌리는 깊은 아름다움을 경험하세요.",
      },
      nav: { brand: "브랜드", lines: "제품라인", store: "스토어" },
      common: { learnMore: "더 알아보기", exploreLine: "라인 둘러보기" },
      line: {
        cheonjihyang: "천지향",
        cheonsim: "천심",
        kuman: "금안",
        cheonsamjin: "천삼진",
        yegyeol: "예결",
        beautiful: "아름다운선",
      },
      home: {
        hero1: {
          title: "시간이 빚어낸 깊은 아름다움",
          copy: "십장생이 전하는 고요하고 우아한 피부 리추얼.",
          cta: "제품 라인 보기",
        },
        hero2: {
          title:
            '<span class="mobile-title-line">깊어진 농축감,</span><span class="mobile-title-line">더욱 품격있게</span>',
          copy: "천심의 섬세한 에너지를 담아낸 새로운 골드 에센스.",
        },
        hero3: {
          subtitle: "한국적인 아름다움에서 시작된",
          title:
            '<span class="mobile-title-line">천지향만의 깊고 우아한</span><span class="mobile-title-line">스킨케어</span>',
          copy: "향과 결, 윤기의 균형으로 완성하는 프리미엄 케어.",
        },
        philosophy: {
          line1: "30년동안 이어온 가치 십장생",
          line2: "당신의 피부가 더 오랜 시간,",
          line3: "온전히 빛날 수 있도록.",
          copy:
            "십장생은 자연의 지속성과 한국적 미감을 현대적인 피부 리추얼로 해석합니다. 깊은 향, 단정한 제형, 매일의 손길에 남는 편안함을 중심으로 제품을 설계합니다.",
        },
        ritual: {
          title1: "한국의 자연이 깃든",
          title2: "피부의 결",
          p1:
            "솔싹의 맑음, 영지버섯의 깊이, 홍삼의 온기. 십장생이 품어온 것들이 발효의 시간을 거쳐 피부가 본래 지닌 자리로 돌아오게 합니다.",
          p2:
            "서두르지 않아도 괜찮습니다. 자연이 오래 걸려 만든 것은 피부 안에서도 천천히, 그러나 분명하게 작용합니다.",
          p3: "향으로 하루를 열고 결로 하루를 닫는 것. 그것이 우리가 생각하는 아름다움입니다.",
        },
        contact: {
          title1: "유통 파트너십 문의는",
          title2: "아래 메일로 보내주세요",
          note: "본 메일은 유통 파트너십 문의 전용입니다 · 일반 소비자 문의는 공식 채널을 이용해 주세요",
        },
      },
      footer: {
        company: "로제화장품 주식회사 | 대표 : 조종현",
        business: "사업자등록번호 : 132-86-15385",
        address: "주소 : 경기도 포천시 소흘읍 죽엽산로 385-89",
      },
      product: {
        genericBody:
          "십장생의 한방 스킨케어 철학을 담아 피부에 편안한 보습감과 정돈된 윤기를 전하는 제품입니다.",
        imagePending: "이미지 준비중",
        lineInfoTitle: "십장생 {line}",
        lineInfoQuote: "피부 본연의 균형과 아름다움을 위한 프리미엄 한방 라인",
        lineInfoLead:
          "자연 유래 성분과 한방 스킨케어 철학을 바탕으로 피부에 편안한 보습감, 탄력, 윤기를 전하는 십장생의 대표 라인입니다.",
      },
    },
    en: {
      meta: {
        title: "SibJangSaeng | Timeless Beauty",
        description:
          "SibJangSaeng is a premium Korean herbal skincare brand by Rosee Cosmetics, offering Cheonjihyang, Cheonshim, Cheonsamjin, Yegyul, Beautiful Line, and Kum-An collections.",
      },
      nav: { brand: "Brand", lines: "Product Lines", store: "Store" },
      common: { learnMore: "Learn more", exploreLine: "Explore line" },
      line: {
        cheonjihyang: "Cheonjihyang",
        cheonsim: "Cheonshim",
        kuman: "Kum-An",
        cheonsamjin: "Cheonsamjin",
        yegyeol: "Yegyul",
        beautiful: "Beautiful Line",
      },
      home: {
        hero1: {
          title: "Deep beauty shaped by time",
          copy: "A calm and elegant skincare ritual from SibJangSaeng.",
          cta: "View product lines",
        },
        hero2: {
          title: "Richer concentration, refined elegance",
          copy: "A renewed gold essence infused with the delicate energy of Cheonshim.",
        },
        hero3: {
          subtitle: "Rooted in Korean beauty",
          title: "Deep, elegant skincare by Cheonjihyang",
          copy: "Premium care completed through a balance of scent, texture, and glow.",
        },
        philosophy: {
          line1: "The lasting value of SibJangSaeng",
          line2: "So your skin can glow",
          line3: "fully, for longer.",
          copy:
            "SibJangSaeng interprets the endurance of nature and Korean aesthetics as a modern skincare ritual, designed around deep scent, refined textures, and daily comfort.",
        },
        ritual: {
          title1: "The texture of skin",
          title2: "touched by Korean nature",
          p1:
            "Clear pine buds, deep reishi mushroom, and the warmth of red ginseng. Through fermentation, SibJangSaeng helps skin return to its natural balance.",
          p2:
            "There is no need to rush. What nature creates slowly works gently, yet surely, within the skin.",
          p3: "Open the day with scent and close it with texture. That is the beauty we believe in.",
        },
        contact: {
          title1: "For distribution partnerships,",
          title2: "please contact us by email",
          note: "This email is for distribution partnership inquiries only. For consumer inquiries, please use official channels.",
        },
      },
      footer: {
        company: "Rosee Cosmetics Co., Ltd. | CEO: Jonghyun Cho",
        business: "Business registration number: 132-86-15385",
        address: "Address: 385-89 Gomori, Jugeopsan-ro, Soheul-eup, Pocheon-si, Gyeonggi-do, Korea",
      },
      product: {
        genericBody:
          "A SibJangSaeng herbal skincare product designed to deliver comfortable moisture, refined texture, and a graceful glow.",
        imagePending: "Image coming soon",
        lineInfoTitle: "SibJangSaeng {line}",
        lineInfoQuote: "A premium herbal line for natural skin balance and beauty",
        lineInfoLead:
          "This SibJangSaeng line blends nature-inspired ingredients with Korean herbal skincare philosophy to support moisture, resilience, and a graceful glow.",
      },
    },
  },
};

const localeOverrides = {
  ja: {
    meta: { title: "シプチャンセン | 時を整える美しさ" },
    nav: { brand: "ブランド", lines: "製品ライン", store: "ストア" },
    common: { learnMore: "詳しく見る", exploreLine: "ラインを見る" },
    line: {
      cheonjihyang: "チョンジヒャン",
      cheonsim: "チョンシム",
      kuman: "クムアン",
      cheonsamjin: "チョンサムジン",
      yegyeol: "イェギョル",
      beautiful: "ビューティフルライン",
    },
    home: {
      hero1: { title: "時が育んだ深い美しさ", copy: "シプチャンセンが届ける静かで優雅なスキンケアリチュアル。", cta: "製品ラインを見る" },
      hero2: { title: "より濃密に、より上品に", copy: "チョンシムの繊細な力を込めた新しいゴールドエッセンス。" },
      hero3: { subtitle: "韓国の美しさから始まる", title: "チョンジヒャンの深く優雅なスキンケア", copy: "香り、肌理、艶のバランスで完成するプレミアムケア。" },
      philosophy: { line1: "受け継がれてきたシプチャンセンの価値", line2: "あなたの肌がより長く", line3: "美しく輝くために。", copy: "シプチャンセンは自然の持続性と韓国的な美意識を現代のスキンケアリチュアルとして表現します。" },
      ritual: { title1: "韓国の自然が宿る", title2: "肌の肌理", p1: "松の芽の清らかさ、霊芝の深み、高麗人参の温もり。発酵の時間を経て肌本来のバランスへ導きます。", p2: "急がなくても大丈夫。自然が時間をかけて作ったものは、肌の中でもゆっくり確かに働きます。", p3: "香りで一日を始め、肌理で一日を終える。それが私たちの考える美しさです。" },
      contact: { title1: "流通パートナーシップのご相談は", title2: "下記メールまでご連絡ください", note: "このメールは流通パートナーシップ専用です。一般のお問い合わせは公式窓口をご利用ください。" },
    },
    product: { genericBody: "シプチャンセンの韓方スキンケア哲学を込め、心地よいうるおいと整った艶を届ける製品です。", imagePending: "画像準備中", lineInfoQuote: "肌本来のバランスと美しさのためのプレミアム韓方ライン", lineInfoLead: "自然由来成分と韓方スキンケア哲学で、うるおい、ハリ、上品な艶をサポートします。" },
  },
  "zh-CN": {
    meta: { title: "十长生 | 掌控时间之美" },
    nav: { brand: "品牌", lines: "产品系列", store: "商店" },
    common: { learnMore: "了解更多", exploreLine: "浏览系列" },
    line: { cheonjihyang: "天地香", cheonsim: "天心", kuman: "金安", cheonsamjin: "天参津", yegyeol: "睿洁", beautiful: "美丽线" },
    home: {
      hero1: { title: "由时间塑造的深层之美", copy: "十长生带来的宁静优雅护肤仪式。", cta: "查看产品系列" },
      hero2: { title: "更浓缩，更具格调", copy: "蕴含天心细腻能量的全新黄金精华。" },
      hero3: { subtitle: "源自韩国之美", title: "天地香深邃优雅的护肤", copy: "以香气、肤质与光泽的平衡完成高端护理。" },
      philosophy: { line1: "延续至今的十长生价值", line2: "让您的肌肤更长久地", line3: "完整绽放光彩。", copy: "十长生将自然的持久生命力与韩国美学转化为现代护肤仪式，重视深邃香气、细致质地与日常舒适感。" },
      ritual: { title1: "蕴含韩国自然", title2: "肌肤纹理", p1: "松芽的清澈、灵芝的深邃、红参的温润，经发酵时光引导肌肤回归自然平衡。", p2: "无需着急。自然慢慢创造的力量，也会在肌肤中缓缓而明确地发挥作用。", p3: "以香气开启一天，以肤质结束一天。这就是我们相信的美。" },
      contact: { title1: "流通合作咨询", title2: "请发送邮件至下方地址", note: "本邮箱仅用于流通合作咨询。普通消费者咨询请使用官方渠道。" },
    },
    product: { genericBody: "蕴含十长生韩方护肤理念，为肌肤带来舒适保湿、细腻肤质与优雅光泽。", imagePending: "图片准备中", lineInfoQuote: "呵护肌肤自然平衡与美丽的高端韩方系列", lineInfoLead: "结合自然成分与韩方护肤理念，帮助肌肤保持水润、弹力与优雅光泽。" },
  },
  fr: {
    nav: { brand: "Marque", lines: "Gammes", store: "Boutique" },
    common: { learnMore: "En savoir plus", exploreLine: "Voir la gamme" },
    home: { hero1: { title: "Une beauté profonde façonnée par le temps", copy: "Un rituel de soin calme et élégant signé SibJangSaeng.", cta: "Voir les gammes" }, hero2: { title: "Plus concentré, plus raffiné", copy: "Une nouvelle essence dorée infusée de l'énergie délicate de Cheonshim." }, hero3: { subtitle: "Né de la beauté coréenne", title: "Le soin profond et élégant de Cheonjihyang", copy: "Un soin premium équilibrant parfum, texture et éclat." }, philosophy: { line1: "La valeur durable de SibJangSaeng", line2: "Pour que votre peau rayonne", line3: "pleinement, plus longtemps.", copy: "SibJangSaeng transforme la force de la nature et l'esthétique coréenne en un rituel de soin moderne." }, ritual: { title1: "La texture de la peau", title2: "touchée par la nature coréenne", p1: "Bourgeons de pin, reishi et ginseng rouge guident la peau vers son équilibre naturel.", p2: "Il n'est pas nécessaire de se hâter. Ce que la nature crée lentement agit avec douceur et précision.", p3: "Commencer la journée par le parfum et la terminer par la texture : c'est notre idée de la beauté." }, contact: { title1: "Pour les partenariats de distribution,", title2: "contactez-nous par e-mail", note: "Cet e-mail est réservé aux demandes de partenariat de distribution." } },
    product: { genericBody: "Un soin herbal SibJangSaeng conçu pour apporter une hydratation confortable, une texture affinée et un éclat gracieux.", imagePending: "Image à venir", lineInfoQuote: "Une gamme premium pour l’équilibre naturel et la beauté de la peau", lineInfoLead: "Cette gamme associe des ingrédients inspirés de la nature à la philosophie coréenne du soin herbal." },
  },
  it: {
    nav: { brand: "Brand", lines: "Linee prodotto", store: "Store" },
    common: { learnMore: "Scopri di più", exploreLine: "Esplora la linea" },
    home: {
      hero1: { title: "Bellezza profonda plasmata dal tempo", copy: "Un rituale skincare calmo ed elegante di SibJangSaeng.", cta: "Vedi le linee" },
      hero2: { title: "Più concentrato, più raffinato", copy: "Una nuova essenza oro con la delicata energia di Cheonshim." },
      hero3: { subtitle: "Nata dalla bellezza coreana", title: "La skincare profonda ed elegante di Cheonjihyang", copy: "Un trattamento premium tra profumo, texture e luminosità." },
      philosophy: { line1: "Il valore duraturo di SibJangSaeng", line2: "Per una pelle luminosa", line3: "più a lungo e pienamente.", copy: "SibJangSaeng interpreta la forza della natura e l'estetica coreana come un rituale skincare moderno." },
      ritual: { title1: "La texture della pelle", title2: "ispirata dalla natura coreana", p1: "Germogli di pino, reishi e ginseng rosso aiutano la pelle a ritrovare il suo equilibrio naturale.", p2: "Non serve affrettarsi. Ciò che la natura crea lentamente agisce sulla pelle con dolcezza e precisione.", p3: "Aprire il giorno con il profumo e chiuderlo con la texture: questa è la nostra idea di bellezza." },
      contact: { title1: "Per partnership di distribuzione,", title2: "contattaci via e-mail", note: "Questa e-mail è riservata alle richieste di partnership di distribuzione." },
    },
    product: { genericBody: "Un prodotto skincare herbal SibJangSaeng pensato per donare idratazione confortevole, texture raffinata e luminosità elegante.", imagePending: "Immagine in arrivo", lineInfoQuote: "Una linea premium per equilibrio e bellezza naturale della pelle", lineInfoLead: "Questa linea unisce ingredienti ispirati alla natura e filosofia skincare herbal coreana." },
  },
  es: {
    nav: { brand: "Marca", lines: "Líneas", store: "Tienda" },
    common: { learnMore: "Ver más", exploreLine: "Explorar línea" },
    home: {
      hero1: { title: "Belleza profunda moldeada por el tiempo", copy: "Un ritual de cuidado sereno y elegante de SibJangSaeng.", cta: "Ver líneas" },
      hero2: { title: "Más concentración, más elegancia", copy: "Una nueva esencia dorada con la energía delicada de Cheonshim." },
      hero3: { subtitle: "Nacida de la belleza coreana", title: "El cuidado profundo y elegante de Cheonjihyang", copy: "Cuidado premium con equilibrio de aroma, textura y brillo." },
      philosophy: { line1: "El valor duradero de SibJangSaeng", line2: "Para que tu piel brille", line3: "plenamente y por más tiempo.", copy: "SibJangSaeng interpreta la fuerza de la naturaleza y la estética coreana como un ritual moderno de cuidado de la piel." },
      ritual: { title1: "La textura de la piel", title2: "tocada por la naturaleza coreana", p1: "Brotes de pino, hongo reishi y ginseng rojo ayudan a la piel a volver a su equilibrio natural.", p2: "No hace falta apresurarse. Lo que la naturaleza crea lentamente actúa en la piel con suavidad y certeza.", p3: "Abrir el día con aroma y cerrarlo con textura: esa es nuestra idea de belleza." },
      contact: { title1: "Para alianzas de distribución,", title2: "contáctenos por correo", note: "Este correo es exclusivo para consultas de alianzas de distribución." },
    },
    product: { genericBody: "Un producto herbal de SibJangSaeng diseñado para aportar hidratación confortable, textura refinada y un brillo elegante.", imagePending: "Imagen próximamente", lineInfoQuote: "Una línea premium para el equilibrio natural y la belleza de la piel", lineInfoLead: "Esta línea combina ingredientes inspirados en la naturaleza con la filosofía herbal coreana." },
  },
  de: {
    nav: { brand: "Marke", lines: "Produktlinien", store: "Shop" },
    common: { learnMore: "Mehr erfahren", exploreLine: "Linie ansehen" },
    home: {
      hero1: { title: "Tiefe Schönheit, von Zeit geformt", copy: "Ein ruhiges, elegantes Pflegeritual von SibJangSaeng.", cta: "Produktlinien ansehen" },
      hero2: { title: "Konzentrierter und eleganter", copy: "Eine neue Gold-Essenz mit der feinen Energie von Cheonshim." },
      hero3: { subtitle: "Aus koreanischer Schönheit geboren", title: "Tiefe, elegante Pflege von Cheonjihyang", copy: "Premium-Pflege im Gleichgewicht von Duft, Textur und Glow." },
      philosophy: { line1: "Der bleibende Wert von SibJangSaeng", line2: "Damit Ihre Haut länger", line3: "vollkommen strahlen kann.", copy: "SibJangSaeng überträgt die Kraft der Natur und koreanische Ästhetik in ein modernes Pflegeritual." },
      ritual: { title1: "Die Hauttextur", title2: "berührt von koreanischer Natur", p1: "Kiefernknospen, Reishi und roter Ginseng helfen der Haut, zu ihrem natürlichen Gleichgewicht zurückzufinden.", p2: "Es braucht keine Eile. Was die Natur langsam erschafft, wirkt sanft und bestimmt in der Haut.", p3: "Den Tag mit Duft öffnen und mit Textur schließen: Das ist unsere Vorstellung von Schönheit." },
      contact: { title1: "Für Vertriebspartnerschaften", title2: "kontaktieren Sie uns per E-Mail", note: "Diese E-Mail ist ausschließlich für Anfragen zu Vertriebspartnerschaften bestimmt." },
    },
    product: { genericBody: "Ein SibJangSaeng Kräuterpflegeprodukt für angenehme Feuchtigkeit, verfeinerte Textur und einen eleganten Glow.", imagePending: "Bild folgt", lineInfoQuote: "Eine Premium-Kräuterlinie für natürliches Gleichgewicht und Schönheit", lineInfoLead: "Diese Linie verbindet naturinspirierte Inhaltsstoffe mit koreanischer Kräuterpflegephilosophie." },
  },
  pt: {
    nav: { brand: "Marca", lines: "Linhas", store: "Loja" },
    common: { learnMore: "Saiba mais", exploreLine: "Explorar linha" },
    home: {
      hero1: { title: "Beleza profunda moldada pelo tempo", copy: "Um ritual de skincare calmo e elegante da SibJangSaeng.", cta: "Ver linhas" },
      hero2: { title: "Mais concentrado, mais refinado", copy: "Uma nova essência dourada com a energia delicada de Cheonshim." },
      hero3: { subtitle: "Nascida da beleza coreana", title: "Skincare profundo e elegante de Cheonjihyang", copy: "Cuidado premium equilibrando aroma, textura e brilho." },
      philosophy: { line1: "O valor duradouro da SibJangSaeng", line2: "Para que sua pele brilhe", line3: "plenamente por mais tempo.", copy: "A SibJangSaeng transforma a força da natureza e a estética coreana em um ritual moderno de skincare." },
      ritual: { title1: "A textura da pele", title2: "tocada pela natureza coreana", p1: "Broto de pinheiro, reishi e ginseng vermelho ajudam a pele a retornar ao seu equilíbrio natural.", p2: "Não há pressa. O que a natureza cria lentamente age na pele com suavidade e precisão.", p3: "Abrir o dia com aroma e encerrá-lo com textura: essa é a beleza em que acreditamos." },
      contact: { title1: "Para parcerias de distribuição,", title2: "entre em contato por e-mail", note: "Este e-mail é exclusivo para consultas sobre parcerias de distribuição." },
    },
    product: { genericBody: "Um produto herbal SibJangSaeng criado para oferecer hidratação confortável, textura refinada e brilho elegante.", imagePending: "Imagem em breve", lineInfoQuote: "Uma linha premium para equilíbrio natural e beleza da pele", lineInfoLead: "Esta linha combina ingredientes inspirados na natureza com a filosofia herbal coreana de skincare." },
  },
  th: {
    nav: { brand: "แบรนด์", lines: "ไลน์ผลิตภัณฑ์", store: "ร้านค้า" },
    common: { learnMore: "ดูเพิ่มเติม", exploreLine: "ดูไลน์ผลิตภัณฑ์" },
    home: {
      hero1: { title: "ความงามลึกซึ้งที่ก่อร่างด้วยกาลเวลา", copy: "พิธีกรรมดูแลผิวที่สงบและสง่างามจาก SibJangSaeng", cta: "ดูไลน์ผลิตภัณฑ์" },
      hero2: { title: "เข้มข้นขึ้น งดงามยิ่งขึ้น", copy: "เอสเซนส์ทองคำใหม่ที่อัดแน่นด้วยพลังละเอียดอ่อนของ Cheonshim" },
      hero3: { subtitle: "เริ่มต้นจากความงามแบบเกาหลี", title: "สกินแคร์ลึกซึ้งและสง่างามของ Cheonjihyang", copy: "การดูแลพรีเมียมที่สมดุลระหว่างกลิ่น เนื้อสัมผัส และความเปล่งประกาย" },
      philosophy: { line1: "คุณค่าที่ยืนยาวของ SibJangSaeng", line2: "เพื่อให้ผิวของคุณเปล่งประกาย", line3: "อย่างสมบูรณ์และยาวนาน", copy: "SibJangSaeng ถ่ายทอดพลังของธรรมชาติและสุนทรียภาพเกาหลีเป็นพิธีกรรมดูแลผิวสมัยใหม่" },
      ritual: { title1: "ผิวสัมผัสที่ได้รับแรงบันดาลใจ", title2: "จากธรรมชาติเกาหลี", p1: "ยอดสน เห็ดหลินจือ และโสมแดงช่วยนำผิวกลับสู่สมดุลตามธรรมชาติ", p2: "ไม่จำเป็นต้องรีบร้อน สิ่งที่ธรรมชาติสร้างอย่างช้าๆ จะค่อยๆ ทำงานกับผิวอย่างอ่อนโยน", p3: "เริ่มวันด้วยกลิ่นหอมและปิดท้ายด้วยผิวสัมผัส นี่คือความงามที่เราเชื่อมั่น" },
      contact: { title1: "สำหรับความร่วมมือด้านการจัดจำหน่าย", title2: "กรุณาติดต่อทางอีเมล", note: "อีเมลนี้ใช้สำหรับการสอบถามเรื่องความร่วมมือด้านการจัดจำหน่ายเท่านั้น" },
    },
    product: { genericBody: "ผลิตภัณฑ์สกินแคร์สมุนไพรจาก SibJangSaeng ที่ช่วยมอบความชุ่มชื้น สัมผัสผิวที่เรียบเนียน และความเปล่งประกายอย่างสง่างาม", imagePending: "กำลังเตรียมรูปภาพ", lineInfoQuote: "ไลน์พรีเมียมเพื่อสมดุลและความงามตามธรรมชาติของผิว", lineInfoLead: "ไลน์นี้ผสานส่วนผสมที่ได้แรงบันดาลใจจากธรรมชาติกับปรัชญาสกินแคร์สมุนไพรเกาหลี" },
  },
  ru: {
    meta: {
      title: "SibJangSaeng | Красота вне времени",
      description:
        "SibJangSaeng — премиальный корейский бренд травяного ухода за кожей от Rosee Cosmetics.",
    },
    nav: { brand: "Бренд", lines: "Линии", store: "Магазин" },
    common: { learnMore: "Подробнее", exploreLine: "Смотреть линию" },
    line: {
      cheonjihyang: "Cheonjihyang",
      cheonsim: "Cheonshim",
      kuman: "Kum-An",
      cheonsamjin: "Cheonsamjin",
      yegyeol: "Yegyul",
      beautiful: "Beautiful Line",
    },
    home: {
      hero1: {
        title: "Глубокая красота, созданная временем",
        copy: "Спокойный и элегантный ритуал ухода от SibJangSaeng.",
        cta: "Смотреть линии",
      },
      hero2: {
        title: "Более насыщенно, более изысканно",
        copy: "Новая золотая эссенция с деликатной энергией Cheonshim.",
      },
      hero3: {
        subtitle: "Вдохновлено корейской красотой",
        title: "Глубокий и элегантный уход Cheonjihyang",
        copy: "Премиальный уход с балансом аромата, текстуры и сияния.",
      },
      philosophy: {
        line1: "Непреходящая ценность SibJangSaeng",
        line2: "Чтобы ваша кожа сияла",
        line3: "полноценно и дольше.",
        copy:
          "SibJangSaeng превращает силу природы и корейскую эстетику в современный ритуал ухода за кожей.",
      },
      ritual: {
        title1: "Текстура кожи,",
        title2: "которой коснулась природа Кореи",
        p1:
          "Почки сосны, рейши и красный женьшень помогают коже вернуться к естественному балансу.",
        p2:
          "Не нужно спешить. То, что природа создает медленно, мягко и уверенно работает в коже.",
        p3: "Начинать день ароматом и завершать текстурой — так мы понимаем красоту.",
      },
      contact: {
        title1: "По вопросам дистрибуции",
        title2: "свяжитесь с нами по e-mail",
        note: "Этот e-mail предназначен только для запросов о дистрибьюторском партнерстве.",
      },
    },
    footer: {
      company: "Rosee Cosmetics Co., Ltd. | CEO: Jonghyun Cho",
      business: "Регистрационный номер компании: 132-86-15385",
      address: "Адрес: 385-89 Gomori, Jugeopsan-ro, Soheul-eup, Pocheon-si, Gyeonggi-do, Korea",
    },
    product: {
      genericBody:
        "Травяной уход SibJangSaeng помогает обеспечить комфортное увлажнение, refined texture и элегантное сияние.",
      imagePending: "Изображение скоро появится",
      lineInfoTitle: "SibJangSaeng {line}",
      lineInfoQuote: "Премиальная травяная линия для естественного баланса и красоты кожи",
      lineInfoLead:
        "Эта линия объединяет ингредиенты, вдохновленные природой, и корейскую философию травяного ухода.",
    },
  },
  uz: {
    meta: {
      title: "SibJangSaeng | Vaqt bilan yaratilgan goʻzallik",
      description:
        "SibJangSaeng — Rosee Cosmetics tomonidan yaratilgan premium koreys oʻsimlik asosidagi teri parvarishi brendi.",
    },
    nav: { brand: "Brend", lines: "Mahsulot liniyalari", store: "Doʻkon" },
    common: { learnMore: "Batafsil", exploreLine: "Liniyani koʻrish" },
    line: {
      cheonjihyang: "Cheonjihyang",
      cheonsim: "Cheonshim",
      kuman: "Kum-An",
      cheonsamjin: "Cheonsamjin",
      yegyeol: "Yegyul",
      beautiful: "Beautiful Line",
    },
    home: {
      hero1: {
        title: "Vaqt shakllantirgan chuqur goʻzallik",
        copy: "SibJangSaengdan sokin va nafis teri parvarishi marosimi.",
        cta: "Mahsulot liniyalarini koʻrish",
      },
      hero2: {
        title: "Yanada boy, yanada nafis",
        copy: "Cheonshimning nozik energiyasi bilan yaratilgan yangi oltin essensiya.",
      },
      hero3: {
        subtitle: "Koreys goʻzalligidan ilhomlangan",
        title: "Cheonjihyangning chuqur va nafis parvarishi",
        copy: "Hid, tekstura va jiloning uygʻunligidagi premium parvarish.",
      },
      philosophy: {
        line1: "SibJangSaengning davomli qadriyati",
        line2: "Teringiz uzoqroq vaqt",
        line3: "toʻliq porlab turishi uchun.",
        copy:
          "SibJangSaeng tabiat kuchi va koreys estetikasi asosida zamonaviy teri parvarishi marosimini yaratadi.",
      },
      ritual: {
        title1: "Koreya tabiatidan ilhomlangan",
        title2: "teri teksturasi",
        p1:
          "Qaragʻay kurtagi, reishi qoʻziqorini va qizil jenshen terining tabiiy muvozanatiga qaytishiga yordam beradi.",
        p2:
          "Shoshilish shart emas. Tabiat sekin yaratgan narsalar terida ham muloyim va aniq taʼsir qiladi.",
        p3: "Kunni hid bilan boshlash va tekstura bilan yakunlash — biz ishonadigan goʻzallik shu.",
      },
      contact: {
        title1: "Distribyutorlik hamkorligi uchun",
        title2: "bizga e-mail orqali murojaat qiling",
        note: "Ushbu e-mail faqat distribyutorlik hamkorligi soʻrovlari uchun moʻljallangan.",
      },
    },
    footer: {
      company: "Rosee Cosmetics Co., Ltd. | CEO: Jonghyun Cho",
      business: "Biznes roʻyxat raqami: 132-86-15385",
      address: "Manzil: 385-89 Gomori, Jugeopsan-ro, Soheul-eup, Pocheon-si, Gyeonggi-do, Korea",
    },
    product: {
      genericBody:
        "SibJangSaeng oʻsimlik asosidagi teri parvarishi mahsuloti qulay namlik, silliq tekstura va nafis jilo beradi.",
      imagePending: "Rasm tez orada",
      lineInfoTitle: "SibJangSaeng {line}",
      lineInfoQuote: "Terining tabiiy muvozanati va goʻzalligi uchun premium oʻsimlik liniyasi",
      lineInfoLead:
        "Ushbu liniya tabiatdan ilhomlangan ingredientlar va koreys oʻsimlik parvarishi falsafasini birlashtiradi.",
    },
  },
};

function deepMerge(base, override) {
  const output = { ...base };
  Object.entries(override || {}).forEach(([key, value]) => {
    output[key] = value && typeof value === "object" && !Array.isArray(value) ? deepMerge(output[key] || {}, value) : value;
  });
  return output;
}

Object.entries(localeOverrides).forEach(([lang, override]) => {
  SJS_I18N.dictionaries[lang] = deepMerge(SJS_I18N.dictionaries.en, override);
});

function getNestedValue(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

SJS_I18N.getLanguage = function getLanguage() {
  const params = new URLSearchParams(window.location.search);
  const savedLanguage = (() => {
    try {
      return window.localStorage?.getItem(SJS_LANG_STORAGE_KEY);
    } catch {
      return null;
    }
  })();
  const requested = params.get("lang") || savedLanguage || "ko";
  return this.supported.includes(requested) ? requested : "ko";
};

SJS_I18N.t = function translate(key, lang = this.currentLanguage) {
  return getNestedValue(this.dictionaries[lang], key) ?? getNestedValue(this.dictionaries.en, key) ?? getNestedValue(this.dictionaries.ko, key) ?? "";
};

SJS_I18N.apply = function applyLanguage(lang = this.getLanguage()) {
  this.currentLanguage = this.supported.includes(lang) ? lang : "ko";
  try {
    window.localStorage?.setItem(SJS_LANG_STORAGE_KEY, this.currentLanguage);
  } catch {}
  document.documentElement.lang = this.currentLanguage;
  document.documentElement.classList.toggle("is-ko", this.currentLanguage === "ko");
  document.documentElement.classList.toggle("is-translated", this.currentLanguage !== "ko");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = this.t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    node.innerHTML = this.t(node.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === this.currentLanguage);
  });
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", this.t("meta.description"));
  document.title = this.t("meta.title");
  window.dispatchEvent(new CustomEvent("sjs:languagechange", { detail: { lang: this.currentLanguage } }));
};

SJS_I18N.setLanguage = function setLanguage(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url);
  this.apply(lang);
};

window.SJS_I18N = SJS_I18N;
document.addEventListener("DOMContentLoaded", () => SJS_I18N.apply());
