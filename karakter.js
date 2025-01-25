// Sorular ve cevaplar dizisi
  // Her cevabın 'names' alanına göre puanlama yapılacak
  const questions = [
    {
      question: "Bir sabah uyandığında ilk işin ne olur?",
      answers: [
        { text: "Pencereyi açıp derin bir nefes almak", names: ["YEVAL LARDEN"] },
        { text: "Hemen kahve yapıp kendime gelmek", names: ["BARKIN KARADUMAN (SALVOR)"] },
        { text: "Sosyal medyada arkadaşlarımı kontrol etmek", names: ["HAZAN PARLAS"] },
        { text: "Güne egzersizle başlamak", names: ["KUTAY TOLUN"] },
        { text: "Beyzayı düşünmek", names: ["Mert"] },
      ],
    },
    {
      question: "En sevdiğin aktivite hangisi?",
      answers: [
        { text: "Resim yapıp yeni şeyler üretmek", names: ["KARMEN"] },
        { text: "Gece yürüyüşlerinde doğanın tadını çıkarmak", names: ["DOLUNAY AKKOR (ZELAL)"] },
        { text: "Bilgisayar oyunu oynayıp rekabet etmek", names: ["ÇAKIR ALABORA"] },
        { text: "Arkadaşlarla uzun sohbetler yapmak", names: ["SELCEN ALAKURT"] },
        { text: "Beyzaaaa", names: ["Mert"] },
      ],
    },
    {
      question: "Hangisi seni daha çok heyecanlandırır?",
      answers: [
        { text: "Yeni kültürler ve diller öğrenmek", names: ["KARMEN"] },
        { text: "Zor bir görevi başarıyla tamamlamak", names: ["BARKIN KARADUMAN (SALVOR)"] },
        { text: "Kendi yazdığım hikayeleri paylaşmak", names: ["LEMAN SAVSA"] },
        { text: "Çevremdeki insanlara rehberlik etmek", names: ["SELCEN ALAKURT"] },
        { text: "Beyzaaaaaaaa", names: ["Mert"] },
      ],
    },
    {
      question: "Kendini en rahat hissettiğin ortam hangisi?",
      answers: [
        { text: "Kalabalık şehir caddelerinde enerjik yürüyüşler", names: ["HAZAN PARLAS"] },
        { text: "Sakin bir göl kenarında yıldızları seyretmek", names: ["DOLUNAY AKKOR (ZELAL)"] },
        { text: "Kendi iç dünyamda meditasyon yapmak", names: ["YEVAL LARDEN"] },
        { text: "Arkadaşlarla kamp yapıp yeni yerler keşfetmek", names: ["KUTAY TOLUN"] },
        { text: "Beyzamın yanı", names: ["Mert"] },
      ],
    },
    {
      question: "Bir kitap yazacak olsan hangi türde olurdu?",
      answers: [
        { text: "Gizem ve macera dolu bir dedektif romanı", names: ["ÇAKIR ALABORA"] },
        { text: "Duygusal ve ilham veren kişisel gelişim kitabı", names: ["LEMAN SAVSA"] },
        { text: "Bilim kurgu ve yenilikçi buluşlar üzerine", names: ["BARKIN KARADUMAN (SALVOR)"] },
        { text: "Felsefi ve içsel yolculukları anlatan bir roman", names: ["YEVAL LARDEN"] },
        { text: "Beyzamı anlatan (yaz yaz bitiremem)", names: ["Mert"] },
      ],
    },
    // Daha fazla soru eklemek isterseniz buraya ekleyebilirsiniz
  ];

  // Tüm karakter isimleri
  const allNames = [
    "YEVAL LARDEN",
    "BARKIN KARADUMAN (SALVOR)",
    "KARMEN",
    "DOLUNAY AKKOR (ZELAL)",
    "ÇAKIR ALABORA",
    "SELCEN ALAKURT",
    "KUTAY TOLUN",
    "LEMAN SAVSA",
    "HAZAN PARLAS",
    "Mert"
  ];

  // Her karakterin kaç kere seçildiğini tutacağımız obje
  const score = {};

  // Başlangıçta tüm puanları sıfırla
  allNames.forEach(name => {
    score[name] = 0;
  });

  // Hangi soruda olduğumuzu tutan indeks
  let currentQuestionIndex = 0;

  // HTML elemanları
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const resultEl = document.getElementById("result");

  // İlk soruyu göster
  showQuestion();

  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    answersEl.innerHTML = "";

    currentQuestion.answers.forEach((answer) => {
      const btn = document.createElement("div");
      btn.className = "answer";
      btn.textContent = answer.text; // Kullanıcıya sadece metni gösteriyoruz

      // Cevabın tıklanma olayı
      btn.addEventListener("click", () => {
        // Seçilen cevabın names değerine göre puan arttırma
        answer.names.forEach((name) => {
          if (score[name] !== undefined) {
            score[name]++;
          }
        });

        // Sıradaki soruya geç
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          showQuestion();
        } else {
          // Test bitti, sonuçları göster
          showResult();
        }
      });

      answersEl.appendChild(btn);
    });
  }

  function showResult() {
    // Quiz içeriğini gizlemek için
    document.getElementById("quiz-container").style.display = "none";

    // En yüksek puanı bulmak
    let maxScore = Math.max(...Object.values(score));

    // En yüksek puanı alan tüm isimleri bulmak
    let topNames = [];
    for (let name in score) {
      if (score[name] === maxScore) {
        topNames.push(name);
      }
    }

    // Eğer tek bir isim varsa onu seç, birden fazlaysa rastgele seç
    let finalName;
    if (topNames.length === 1) {
      finalName = topNames[0];
    } else {
      // Rastgele seçim için Math.random kullanıyoruz
      const randomIndex = Math.floor(Math.random() * topNames.length);
      finalName = topNames[randomIndex];
    }

    // Debug amaçlı tüm isimleri ve puanlarını listelemek
    let debugText = "Seçtiğin isimlerin sayıları:\n";
    for (const name in score) {
      debugText += `- ${name}: ${score[name]} defa\n`;
    }
    debugText += `\nEn çok ${finalName} ile benzeşiyorsun!`;

    // Sonucu ekrana yaz
    resultEl.style.display = "block";
    resultEl.textContent = debugText;
  }