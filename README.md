#FrequenSys 

## Projeto Vibração - ESP32 + MPU6050
Prova de conceito: coleta de vibração e diagnóstico via RMS.
API: https://vibracao-api.onrender.com
Dashboard: https://seu-dashboard.netlify.app

Como rodar local:
1. `npm install`
2. `export MONGO_URI="sua_string"`
3. `npm start`



# 📡 Projeto de Monitoramento de Vibração com ESP32 + MPU6050 + API Node.js + MongoDB Atlas

Este projeto realiza a coleta de dados de vibração a partir do sensor **MPU6050** conectado ao **ESP32**. Os dados são enviados para uma **API em Node.js/Express**, armazenados no **MongoDB Atlas** e posteriormente podem ser usados em dashboards de análise.

---

## 🚀 **Arquitetura Geral do Projeto**

1. **ESP32** coleta dados do acelerômetro e giroscópio.
2. Calcula o **RMS** da vibração e gera um **status automático** (Normal / Atenção / Perigo).
3. A cada X ms envia via HTTP POST para sua API.
4. A API recebe, valida e salva no MongoDB Atlas.
5. Os dados podem ser consumidos por dashboards (Power BI, Grafana, etc.).

---

## 🧩 **Componentes Utilizados**

* ESP32 DevKit
* Sensor MPU6050
* Protoboard + jumpers
* Cabo USB
* Node.js + Express
* MongoDB Atlas
* Teste de API no Postman
---

## 🔧 **Como Rodar o Projeto**

### **1. Configurar o ESP32**

* Instalar ESP32 Core no Arduino IDE
* Instalar biblioteca `Adafruit MPU6050`
* Configurar WiFi
* Alterar o IP da API no código
* Fazer upload para a porta correta

### **2. Subir a API Node.js**

Dentro da pasta do projeto, execute:

```bash
npm install
npm start
```

Se tudo estiver certo, verá:

```
🚀 Servidor rodando na porta 3000
✅ Conectado ao MongoDB!
```

### **3. Testar a API**

Use o Postman ou Insomnia para enviar:

POST → [http://localhost:3000/dados](http://localhost:3000/dados)

```json
{
  "ax": 0.12,
  "ay": -0.04,
  "az": 1.01,
  "gx": 0.33,
  "gy": -0.12,
  "gz": 0.51
}
```

Se salvar corretamente:

```
{ "message": "Dado salvo com sucesso!" }
```

### **4. Visualizar os Dados no MongoDB Atlas**

Acesse:

```
Data Explorer → Seu cluster → database vibracao_db → collection dados
```

---

## 📊 **Status Automático de Vibração (RMS)**

Os thresholds utilizados no ESP32 são:

| RMS       | Status         |
| --------- | -------------- |
| < 0.9     | **Normal** ✔️  |
| 0.9 a 1.5 | **Atenção** ⚠️ |
| > 1.5     | **Perigo** ❌   |

Esses valores devem ser ajustados após testes reais.

---

## 🌐 **Como Compartilhar o Projeto com o Grupo**

### 1️⃣ Criar um repositório no GitHub

* Clique em **New Repository**
* Escolha público ou privado

### 2️⃣ No VS Code, faça:

```bash
git init
git add .
git commit -m "Primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/seu_repo.git
git push -u origin main
```

### 3️⃣ O colega agora pode rodar:

```bash
git clone https://github.com/SEU_USUARIO/seu_repo.git
```

---

## ❗ Por que aparecem tantas alterações no VS Code?

Isso acontece porque:

* Você provavelmente criou o repositório **dentro de uma pasta que já tinha centenas de arquivos**.
* Várias dependências do Node.js (**node_modules**) ou arquivos internos foram incluídos.

### ✔️ **O que precisa subir?**

Suba **apenas**:

* `server.js`
* `models/`
* `package.json`
* `package-lock.json`
* Arquivos do ESP32 (`.ino`)
* Documentação (README)

### ❌ **O que NÃO deve subir?**

> **Não envie a pasta `node_modules`**

Crie um `.gitignore` assim:

```
node_modules/
.env
.DS_Store
```

---

## 📦 Estrutura Final do Projeto

```
Projeto/
├── server.js
├── models/
│   └── Dado.js
├── package.json
├── package-lock.json
├── README.md
└── esp32_codigo/
    └── vibracao.ino
```

---

## 📞 Suporte

Se precisar gerar prints, diagramas, dashboards ou slides da apresentação, posso montar tudo para você.
