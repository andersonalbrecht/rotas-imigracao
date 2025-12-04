const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyChqL_X444XhX6qPvrCvJrRyLtQxmBfwvc",
  authDomain: "vendasimigracao-b5a34.firebaseapp.com",
  databaseURL: "https://vendasimigracao-b5a34-default-rtdb.firebaseio.com",
  projectId: "vendasimigracao-b5a34",
  storageBucket: "vendasimigracao-b5a34.firebasestorage.app",
  messagingSenderId: "739933304098",
  appId: "1:739933304098:web:7a1f1722109bdbd8fc217b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Criar usuário admin
createUserWithEmailAndPassword(auth, 'admin@empresa.com', 'SuaSenha123')
  .then((userCredential) => {
    console.log('✅ Admin criado com sucesso!');
    console.log('E-mail:', userCredential.user.email);
    console.log('UID:', userCredential.user.uid);
    console.log('\n📋 Credenciais para login:');
    console.log('E-mail: admin@empresa.com');
    console.log('Senha: SuaSenha123');
  })
  .catch((error) => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('ℹ️  Usuário admin já existe');
    } else {
      console.error('❌ Erro ao criar admin:', error.message);
    }
  });