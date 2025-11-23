#FrequenSys 
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

# 📘 FrequenSys – Sistema de Monitoramento de Vibração (ESP32 + MPU6050 + API + Power BI)

O **FrequenSys** é um sistema completo de monitoramento e análise de vibração para manutenção preditiva.  
Ele utiliza um **ESP32**, um sensor **MPU6050**, uma **API Node.js**, banco de dados **MongoDB Atlas** e um **dashboard Power BI** para exibir os dados ao cliente final.

---

## 🧩 Arquitetura Geral do Projeto

[ESP32 + MPU6050]
↓ Envio HTTP POST
[API Node.js + Express]
↓
[MongoDB Atlas]
↓
[Dashboard Power BI]

yaml
Copiar código

---

## 🔧 Componentes Utilizados

### 📦 Hardware
- ESP32 DevKit
- Sensor MPU6050
- Protoboard
- Jumpers
- Cabo USB

### 🧑‍💻 Software / Serviços
- Node.js + Express
- MongoDB Atlas
- VS Code
- Postman
- Power BI

---

## ⚙️ Funcionalidades do Sistema

### 📡 Coleta de Dados
O ESP32 lê continuamente:
- Aceleração: **AX**, **AY**, **AZ**
- Giroscópio: **GX**, **GY**, **GZ**

### 📐 Cálculo de RMS
O firmware calcula o valor **RMS** da vibração para classificação automática de falhas.

### 🚨 Diagnóstico Automático

| RMS | Status |
|-----|--------|
| **< 0.5** | 🔵 Normal |
| **0.5 – 1.2** | 🟡 Atenção |
| **1.2 – 2.0** | 🟠 Alerta |
| **> 2.0** | 🔴 Crítico |

### 🌐 Envio para API (JSON)
Exemplo de envio do ESP32:

```json
{
  "ax": 0.10,
  "ay": 0.02,
  "az": 1.01,
  "gx": -0.3,
  "gy": 6.2,
  "gz": -1.7,
  "rms": 0.59,
  "status": "Normal"
}
🗄 Armazenamento no MongoDB Atlas
Todos os dados são gravados automaticamente no banco em nuvem.

📊 Dashboard Power BI
O Power BI consome a API e exibe:

Dados brutos

RMS

Status do motor

Tendências

Gráficos em tempo real

🌐 Rotas da API
▶️ POST /dados
Recebe dados do ESP32 e salva no banco.

▶️ GET /dados
Retorna todos os registros.

▶️ GET /dados/last
Retorna a última leitura (ideal para dashboards).

🗂 Estrutura do Projeto
pgsql
Copiar código
FrequenSys/
│
├── server.js
├── routes/
│
├── models/
│   └── Dado.js
│
├── esp32/
│   └── codigo.ino
│
├── README.md
└── .gitignore
▶️ Como Executar a API
Instalar dependências
nginx
Copiar código
npm install
Iniciar servidor
nginx
Copiar código
node server.js
A API rodará em:
👉 http://localhost:3000

🧪 Testando com Postman
POST → http://localhost:3000/dados

Body (JSON):

json
Copiar código
{
  "ax": 0.12,
  "ay": 0.03,
  "az": 1.02,
  "gx": 0.2,
  "gy": -0.1,
  "gz": 0.05,
  "rms": 0.6,
  "status": "ATENCAO"
}
📊 Dashboard Power BI
Abra o Power BI Desktop

Obter Dados → Web

Informe a URL:

arduino
Copiar código
http://SEU-IP-PUBLICO:3000/dados
Carregar dados

Criar gráficos de vibração, RMS e status

🔐 Segurança
Arquivo .env para credenciais

MongoDB com whitelist de IP

API preparada para token futuramente

🚀 Melhorias Futuras
Uso de MQTT

Ajuste dinâmico de thresholds

Filtro passa-baixa ou Kalman

Machine Learning para prever falhas

👩‍💻 Autores
Nicole Julio
Daniel Araujo 
Projeto: FrequenSys – Sistema de Monitoramento de Vibração
2025
