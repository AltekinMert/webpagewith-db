// Kitaplara göre sorular ve karakterler
const books = {
  "yarınlar_zifiri_karanlık": {
    name: "Yarınlar Zifiri Karanlık",
    characters: [
      "YEVAL",
      "BARKIN",
      "SELCEN",
      "LEMAN",
      "ZELAL",
      "ÇAKIR",
      "KARMEN"
    ],
    questions: [
      {
        question: "En sevdiğin an?",
        answers: [
          { text: "Yalnız kaldığım an", names: ["YEVAL"] },
          { text: "Sevgilimle geçirdiğim an", names: ["BARKIN"] },
          { text: "Arkadaşlarımla geçirdiğim an", names: ["SELCEN"] },
          { text: "Oyun oynadığım an", names: ["ÇAKIR"] },
        ],
      },
      {
        question: "En büyük korkun?",
        answers: [
          { text: "Sevdiğini Kaybetmek", names: ["ZELAL","BARKIN"] },
          { text: "Karanlık", names: ["KARMEN"] },
          { text: "Yalnızlık", names: ["YEVAL"] },
          { text: "Ölüm", names: ["ÇAKIR"] },
        ],
      },
      {
        question: "İnsanlara zarar veren özelliğin?",
        answers: [
          { text: "Takıntılı olman", names: ["YEVAL","KARMEN"] },
          { text: "Öfken", names: ["ZELAL","BARKIN"] },
          { text: "Saflığın", names: ["LEMAN"] },
          { text: "Cesaretin", names: ["ÇAKIR"] },
        ],
      },
      {
        question: "Seni ağlatacak şey ne olurdu?",
        answers: [
          { text: "Ölüm", names: ["SELCEN","BARKIN"] },
          { text: "Kırgınlık", names: ["ÇAKIR"] },
          { text: "Öfke", names: ["ZELAL"] },
          { text: "Geçmişin", names: ["KARMEN","YEVAL"] },
        ],
      },
      {
        question: "Başın dertte olsaydı ilk hangisini arardın?",
        answers: [
          { text: "Barkın", names: ["BARKIN"] },
          { text: "Karmen", names: ["KARMEN"] },
          { text: "Yeval", names: ["YEVAL"] },
          { text: "Zelal", names: ["ZELAL"] },
        ],
      },
      {
        question: "En büyük zaafın?",
        answers: [
          { text: "Gücün", names: ["ZELAL"] },
          { text: "Aşkın", names: ["BARKIN"] },
          { text: "Duyguların", names: ["ÇAKIR","SELCEN"] },
          { text: "Korkuların", names: ["KARMEN","YEVAL"] },
        ],
      },
      {
        question: "Eğer bir yarınlar zifiri karanlık karakteri olsaydın ekibin nesi olurdun?",
        answers: [
          { text: "Neşesi", names: ["LEMAN","SELCEN"] },
          { text: "Korkusuzu", names: ["KARMEN"] },
          { text: "Güçlüsü", names: ["BARKIN"] },
          { text: "İntikamcısı", names: ["YEVAL"] },
        ],
      },
      {
        question: "En sevdiğin oyun?",
        answers: [
          { text: "Satranç", names: ["BARKIN"] },
          { text: "Bilardo", names: ["YEVAL"] },
          { text: "Atış", names: ["KARMEN"] },
          { text: "Kart", names: ["SELCEN"] },
        ],
      },
      // Daha fazla soru eklemek için buraya ekleyin
    ]
  },
  "leza": {
    name: "Leza",
    characters: [
      "LEZA ŞAHİN",
      "KADİR GÜL",
      "ELİF ÖZTÜRK",
      "SERDAR YILMAZ",
      "BELİK KOÇ"
    ],
    questions: [
      {
        question: "Hafta sonunu nasıl geçirmeyi seversin?",
        answers: [
          { text: "Kitap okuyarak", names: ["LEZA ŞAHİN"] },
          { text: "Doğa yürüyüşlerine çıkarak", names: ["KADİR GÜL"] },
          { text: "Film izleyerek", names: ["ELİF ÖZTÜRK"] },
          { text: "Arkadaşlarla buluşarak", names: ["SERDAR YILMAZ"] },
        ],
      },
      {
        question: "En büyük korkun nedir?",
        answers: [
          { text: "Yükseklik", names: ["BELİK KOÇ"] },
          { text: "Karanlık", names: ["LEZA ŞAHİN"] },
          { text: "Yalnızlık", names: ["ELİF ÖZTÜRK"] },
          { text: "Başarısızlık", names: ["SERDAR YILMAZ"] },
        ],
      },
      // Daha fazla soru eklemek için buraya ekleyin
    ]
  },
  // Diğer kitaplar için benzer yapılar ekleyin
  "mabel": {
    name: "Mabel",
    characters: [
      "MABEL ERDEM",
      "TÜLAY KAPLAN",
      "CAN KILIÇ",
      "FERHAT YILDIZ",
      "BÜNYAMİN ÖZDEMİR"
    ],
    questions: [
      {
        question: "Hangi müzik türünü daha çok seversin?",
        answers: [
          { text: "Klasik", names: ["MABEL ERDEM"] },
          { text: "Rock", names: ["CAN KILIÇ"] },
          { text: "Pop", names: ["TÜLAY KAPLAN"] },
          { text: "Caz", names: ["FERHAT YILDIZ"] },
        ],
      },
      {
        question: "En çok hangi mevsimi seversin?",
        answers: [
          { text: "İlkbahar", names: ["BÜNYAMİN ÖZDEMİR"] },
          { text: "Yaz", names: ["MABEL ERDEM"] },
          { text: "Sonbahar", names: ["CAN KILIÇ"] },
          { text: "Kış", names: ["FERHAT YILDIZ"] },
        ],
      },
      // Daha fazla soru eklemek için buraya ekleyin
    ]
  },
  "sonun_baslangici": {
    name: "Sonun Başlangıcı",
    characters: [
      "DENİZ ÇELİK",
      "SİLA KAYA",
      "ONUR ŞEN",
      "GÖKHAN ARAS",
      "NURİYE YILDIZ"
    ],
    questions: [
      {
        question: "Hangi sporu yapmayı seversin?",
        answers: [
          { text: "Futbol", names: ["DENİZ ÇELİK"] },
          { text: "Yüzme", names: ["SİLA KAYA"] },
          { text: "Tenis", names: ["ONUR ŞEN"] },
          { text: "Basketbol", names: ["GÖKHAN ARAS"] },
        ],
      },
      {
        question: "En çok hangi yemeği seversin?",
        answers: [
          { text: "Pizza", names: ["NURİYE YILDIZ"] },
          { text: "Sushi", names: ["DENİZ ÇELİK"] },
          { text: "Kebap", names: ["ONUR ŞEN"] },
          { text: "Salata", names: ["SİLA KAYA"] },
        ],
      },
      // Daha fazla soru eklemek için buraya ekleyin
    ]
  },
  "derin_sular": {
    name: "Derin Sular",
    characters: [
      "ALİ VURAL",
      "AYLA DEMİR",
      "SERAP KAYA",
      "TUNÇ ÖZTÜRK",
      "ELİF TÜRKER"
    ],
    questions: [
      {
        question: "En çok hangi hobin var?",
        answers: [
          { text: "Fotoğrafçılık", names: ["ALİ VURAL"] },
          { text: "Pişirme", names: ["AYLA DEMİR"] },
          { text: "Yüzme", names: ["SERAP KAYA"] },
          { text: "Yazılım geliştirme", names: ["TUNÇ ÖZTÜRK"] },
        ],
      },
      {
        question: "Hangi tür filmleri izlemeyi seversin?",
        answers: [
          { text: "Bilim Kurgu", names: ["ELİF TÜRKER"] },
          { text: "Dram", names: ["ALİ VURAL"] },
          { text: "Komedi", names: ["SERAP KAYA"] },
          { text: "Gerilim", names: ["TUNÇ ÖZTÜRK"] },
        ],
      },
      // Daha fazla soru eklemek için buraya ekleyin
    ]
  },
  "valens": {
    name: "Valens",
    characters: [
      "TUNA",
      "ATILLA",
      "DAĞHAN",
      "BURÇAK",
      "ZEYD",
      "CEYDA",
      "VERA",
      "DEFNE"
    ],
    questions: [
      {
        question: "Arkadaş grubunda ön plana hangi özelliğinle çıkarsın?",
        answers: [
          { text: "Eğlenceli kişiliğimle", names: ["TUNA","ATILLA","DAĞHAN"] },
          { text: "Ağır başlılığımla", names: ["BURÇAK","ZEYD"] },
          { text: "Başıma bela almamla", names: ["VERA","TUNA"] },
          { text: "Mantığımla", names: ["CEYDA","ZEYD"] },
        ],
      },
      {
        question: "Hangisini daha çok seversin?",
        answers: [
          { text: "Motor", names: ["CEYDA","ZEYD","BURÇAK"] },
          { text: "Araba", names: ["ATILLA","DAĞHAN","VERA"] },
          { text: "Bisiklet", names: ["TUNA"] },
          { text: "Paten", names: ["DEFNE"] },
        ],
      },
      {
        question: "Hangi renk seni yansıtıyor?",
        answers: [
          { text: "Yeşil", names: ["ZEYD","CEYDA"] },
          { text: "Mavi", names: ["BURÇAK","VERA"] },
          { text: "Siyah", names: ["ATILLA","DAĞHAN"] },
          { text: "Başka bir renk", names: ["DEFNE","TUNA"] },
        ],
      },
      {
        question: "Hangi aktivite senlik?",
        answers: [
          { text: "Kitap okumak", names: ["ZEYD","VERA"] },
          { text: "Film izlemek", names: ["TUNA"] },
          { text: "Yarışa Katılmak", names: ["BURÇAK","CEYDA"] },
          { text: "Maç izlemek", names: ["ATILLA","DAĞHAN"] },
        ],
      },
      {
        question: "Karşı cinste seni çeken özellik?",
        answers: [
          { text: "Düşünceli oluşu", names: ["ZEYD","VERA"] },
          { text: "Korumacı oluşu", names: ["ATILLA","DAĞHAN"] },
          { text: "Kötü çocuk oluşu", names: ["BURÇAK","CEYDA"] },
          { text: "Eğlenceli oluşu", names: ["DEFNE","TUNA"] },
        ],
      },
      {
        question: "Eğer kötü yola düşseydin hangisine düşerdin?",
        answers: [
          { text: "Toz bağımlılığı", names: ["BURÇAK","ZEYD"] },
          { text: "Alkol bağımlılığı", names: ["CEYDA","BURÇAK"] },
          { text: "Tütün bağımlılığı", names: ["VERA","TUNA"] },
          { text: "Antidepresan bağımlılığı", names: ["ATILLA","DAĞHAN"] },
        ],
      },
      {
        question: "Hangisi sana huzur veriyor?",
        answers: [
          { text: "Ormanlar", names: ["CEYDA","ZEYD"] },
          { text: "Okyanuslar", names: ["VERA","BURÇAK"] },
          { text: "Pistler", names: ["DAĞHAN","ATILLA"] },
          { text: "Uçurum Kenarları", names: ["CEYDA"] },
        ],
      },
      // Daha fazla soru eklemek için buraya ekleyin
    ]
  }
};

// HTML elemanları
const bookSelect = document.getElementById("book-select");
const startQuizButton = document.getElementById("start-quiz");
const setupContainer = document.getElementById("setup-container");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const testcontent = document.getElementById("test-content");
const result_text = document.getElementById("result_text");

// Seçilen kitap verilerini saklamak için değişkenler
let selectedBook = null;
let score = {};
let currentQuestionIndex = 0;

// Kitap seçildiğinde "Testi Başlat" butonunu etkinleştir
bookSelect.addEventListener("change", () => {
  if (bookSelect.value) {
    startQuizButton.disabled = false;
  } else {
    startQuizButton.disabled = true;
  }
});

// "Testi Başlat" butonuna tıklandığında testi başlat
startQuizButton.addEventListener("click", () => {
  const bookKey = bookSelect.value;
  selectedBook = books[bookKey];

  if (!selectedBook) {
    alert("Lütfen geçerli bir kitap seçiniz.");
    return;
  }

  // Başlangıç ayarlarını yap
  initializeQuiz();
});

function initializeQuiz() {
  // Setup bölümünü gizle ve test bölümünü göster
  setupContainer.style.display = "none";
  quizContainer.style.display = "flex";
  resultEl.style.display = "none";
  result_text.style.display = "none";

  // Skoru sıfırla ve tüm karakterleri sıfırla
  score = {};
  selectedBook.characters.forEach(name => {
    score[name] = 0;
  });

  // İlk soruyu göster
  currentQuestionIndex = 0;
  showQuestion();
}

function showQuestion() {
  if (currentQuestionIndex >= selectedBook.questions.length) {
    // Test bitti, sonuçları göster
    showResult();
    return;
  }

  const currentQuestion = selectedBook.questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  answersEl.innerHTML = "";

  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement("div");
    btn.className = "answer";
    btn.textContent = answer.text;

    btn.addEventListener("click", () => {
      // Seçilen cevabın isimlerine göre puan arttır
      answer.names.forEach(name => {
        if (score[name] !== undefined) {
          score[name]++;
        }
      });

      // Sonraki soruya geç
      currentQuestionIndex++;
      showQuestion();
    });

    answersEl.appendChild(btn);
  });
}

function showResult() {
  // Test bölümünü gizle ve sonuç bölümünü göster
  quizContainer.style.display = "none";
  resultEl.style.display = "block";
  result_text.style.display = "block";
  testcontent.style.backgroundColor = "black";

  // En yüksek puanı bul
  const maxScore = Math.max(...Object.values(score));

  // En yüksek puanı alan tüm isimleri bul
  const topNames = Object.keys(score).filter(name => score[name] === maxScore);

  // Eğer tie varsa rastgele seçim yap
  let finalName;
  if (topNames.length === 1) {
    finalName = topNames[0];
  } else {
    const randomIndex = Math.floor(Math.random() * topNames.length);
    finalName = topNames[randomIndex];
  }
  
  // Debug amaçlı tüm isimlerin puanlarını listele
  let debugText = "";
  // for (const name in score) {
  //   debugText += `- ${name}: ${score[name]} defa\n`;
  // }
  debugText += `\nEn çok ${finalName} ile benzeşiyorsun!`;

  // Sonucu ekrana yaz
  testcontent.style.background = "black";
  setupContainer.style.paddingBottom = "0px";
  result_text.textContent = debugText;

  // Add character image
  const characterImage = document.createElement('img');
  characterImage.src = `assets/karakter/${finalName.toLowerCase()}.jpeg`;
  const imagePath = `assets/karakter/${finalName.toLowerCase()}.jpeg`;
  console.log("Attempting to load image from:", imagePath); // Debug log
  characterImage.alt = finalName;
  characterImage.style.cssText = `
    display: block;
    margin: 0 auto;
    max-width: 300px;
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
  `;

  console.log("Selected character:", finalName);
  console.log("Image element created:", characterImage);

  // Clear resultEl first
  resultEl.innerHTML = '';
  
  // Add image and text
  resultEl.appendChild(characterImage);
  resultEl.appendChild(result_text);
  // result_text.textContent = debugText;
  
}