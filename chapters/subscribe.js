import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
import { db } from "./firebase-config.js";  // Adjust path to your Firebase initialization file


// Form submission handler
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = document.querySelector("input[type='email']").value;
      const message = document.querySelector("#message").value;
  
      if (email && message) {
        const messagesRef = ref(db, "messages");
        const newMessageRef = push(messagesRef);
  
        const timestamp = new Date();
        const localTimestamp = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString()}`;
  
        set(newMessageRef, {
          email: email,
          message: message,
          timestamp: localTimestamp,
        })
          .then(() => {
            alert("Mesajınız Gönderilmiştir. Aramıza Hoş Geldiniz");
            form.reset();
          })
          .catch((error) => {
            console.error("Error saving message:", error);
            alert("Mesajınız gönderilirken sorun oluştu. Lütfen tekrar deneyiniz");
          });
      } else {
        alert("Please fill in both fields.");
      }
    });
  });