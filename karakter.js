// Kitaplara göre sorular ve karakterler
const books = {
  "yarınlar_zifiri_karanlık": {
    name: "Yarınlar Zifiri Karanlık",
    characters: [
      "YEVAL",
      "BARKIN",
      "SELCEN",
      "LEMAN",
      "HAZAN",
      "ZELAL",
      "BARKIN",
      "ÇAKIR",
      "KUTAY",
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
          { text: "Civciv", names: ["LEMAN"] },
          { text: "Dışlanmak", names: ["HAZAN"] },
          { text: "Güçsüz olmak", names: ["ZELAL"] },
          { text: "Yalnız olmak", names: ["YEVAL"] },
        ],
      },
      {
        question: "İnsanlara zarar veren özelliğin?",
        answers: [
          { text: "Takıntılı olman", names: ["YEVAL","KARMEN"] },
          { text: "Öfken", names: ["ZELAL","BARKIN"] },
          { text: "Saflığın", names: ["HAZAN","LEMAN"] },
          { text: "Cesaretin", names: ["ÇAKIR"] },
        ],
      },
      {
        question: "Seni ağlatacak şey ne olurdu?",
        answers: [
          { text: "Ölüm", names: ["SELCEN","BARKIN"] },
          { text: "Kırgınlık", names: ["KUTAY","ÇAKIR"] },
          { text: "Öfke", names: ["ZELAL"] },
          { text: "Geçmişin", names: ["KARMEN","YEVAL"] },
          { text: "Öfke", names: ["ZELAL"] },
          { text: "Geçmişin", names: ["KARMEN","YEVAL"] },
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
      "VALİ ÖZKAN",
      "ESRA KARA",
      "BERKAY DEMİR",
      "MELİH ŞEN",
      "ZEYNEP YILMAZ"
    ],
    questions: [
      {
        question: "En çok hangi tatili seversin?",
        answers: [
          { text: "Plajda dinlenmek", names: ["VALİ ÖZKAN"] },
          { text: "Dağda kamp yapmak", names: ["ESRA KARA"] },
          { text: "Şehir turu yapmak", names: ["BERKAY DEMİR"] },
          { text: "Evde kitap okumak", names: ["MELİH ŞEN"] },
        ],
      },
      {
        question: "Hangi dili öğrenmek istersin?",
        answers: [
          { text: "İspanyolca", names: ["ZEYNEP YILMAZ"] },
          { text: "Fransızca", names: ["VALİ ÖZKAN"] },
          { text: "Almanca", names: ["BERKAY DEMİR"] },
          { text: "Japonca", names: ["MELİH ŞEN"] },
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
  let debugText = "Seçtiğin isimlerin sayıları:\n";
  for (const name in score) {
    debugText += `- ${name}: ${score[name]} defa\n`;
  }
  debugText += `\nEn çok ${finalName} ile benzeşiyorsun!`;

  // Sonucu ekrana yaz
  resultEl.textContent = debugText;
}