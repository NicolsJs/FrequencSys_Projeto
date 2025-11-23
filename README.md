# 📘 FrequenSys – Sistema de Monitoramento de Vibração (ESP32 + MPU6050 + API + Power BI)

O **FrequenSys** é um sistema completo de monitoramento e análise de vibração para manutenção preditiva.  
Ele utiliza um **ESP32**, um sensor **MPU6050**, uma **API Node.js**, banco de dados **MongoDB Atlas** e um **dashboard Power BI** para exibir os dados ao cliente final.

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

### ** Configurar o ESP32**

* Instalar ESP32 Core no Arduino IDE
* Instalar biblioteca `Adafruit MPU6050`
* Configurar WiFi
* Alterar o IP da API no código
* Fazer upload para a porta correta

### ** Subir a API Node.js**

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
```

## 🗄 Armazenamento no MongoDB Atlas
Todos os dados são gravados automaticamente no banco em nuvem.

## 📊 Dashboard Power BI
O Power BI consome a API e exibe:

## Dados brutos

RMS
Status do motor
Tendências
Gráficos em tempo real

---

## 🌐 Rotas da API
▶️ POST /dados
Recebe dados do ESP32 e salva no banco.

▶️ GET /dados
Retorna todos os registros.

▶️ GET /dados/last
Retorna a última leitura (ideal para dashboards).

## 🗂 Estrutura do Projeto
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
--- 

## ▶️ Como Executar a API
Instalar dependências
Copiar código
npm install
Iniciar servidor
nginx
Copiar código
node server.js
A API rodará em:
👉 http://localhost:3000

## 🧪 Testando com Postman
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

## 📊 Dashboard Power BI
Abra o Power BI Desktop

Obter Dados → Web

Informe a URL:

arduino
Copiar código
http://SEU-IP-PUBLICO:3000/dados
Carregar dados

## Criar gráficos de vibração, RMS e status

🔐 Segurança
Arquivo .env para credenciais

MongoDB com whitelist de IP

API preparada para token futuramente

👩‍💻 Autores
Nicole Julio
Daniel Araujo 
Projeto: FrequenSys – Sistema de Monitoramento de Vibração
2025
