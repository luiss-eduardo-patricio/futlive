// Importando Firebase pela CDN (versão 12.2.1)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// Configuração do Firebase do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyD3pe3OwY5iR2GU9Ld2AxO2ijKihPSW9l0",
  authDomain: "futlive-67896.firebaseapp.com",
  projectId: "futlive-67896",
  storageBucket: "futlive-67896.firebasestorage.app",
  messagingSenderId: "648454895711",
  appId: "1:648454895711:web:7be079201d18a3a2be03ea",
  measurementId: "G-VD0EYSCGJ9"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Funções para usar no site
export async function adicionarJogador(nome, time) {
  try {
    await addDoc(collection(db, "jogadores"), { nome, time });
    console.log("✅ Jogador adicionado:", nome);
  } catch (e) {
    console.error("Erro ao adicionar jogador:", e);
  }
}

export async function listarJogadores() {
  const querySnapshot = await getDocs(collection(db, "jogadores"));
  querySnapshot.forEach((doc) => {
    console.log("👤", doc.data());
  });
}

export async function adicionarTime(nome) {
  try {
    await addDoc(collection(db, "times"), { nome });
    console.log("✅ Time adicionado:", nome);
  } catch (e) {
    console.error("Erro ao adicionar time:", e);
  }
}

export async function listarTimes() {
  const querySnapshot = await getDocs(collection(db, "times"));
  querySnapshot.forEach((doc) => {
    console.log("🏆", doc.data());
  });
}

console.log("🔥 Firebase conectado com sucesso!");
