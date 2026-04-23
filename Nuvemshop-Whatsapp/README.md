# 💬 Sistema de Solicitação de Cotação via WhatsApp (Nuvemshop)

Este projeto implementa um **modal de solicitação de cotação integrado ao WhatsApp** dentro de lojas da Nuvemshop.

A solução substitui o botão padrão de compra por um fluxo mais estratégico, permitindo que o cliente envie um pedido detalhado diretamente para atendimento.

---

## 🚀 Funcionalidades

* 🧾 **Abertura de modal** ao clicar em “Preço sob consulta” ou botões com classe `.js-addtocart`.
* 👤 **Captura de dados do cliente:**
  * Nome
  * Email
  * Cidade
  * Urgência
  * Mensagem personalizada
* 📦 **Captura automática de informações do produto:**
  * Nome do produto
  * Variações (tamanho, capacidade, cor, etc.)
* 🔍 **Suporte a diferentes tipos de variação:**
  * Select (`<select>`)
  * Radio (`<input type="radio">`)
  * Botões personalizados (Nuvemshop)
* 🧠 **Filtro inteligente:**
  * Ignora valores irrelevantes como “Início” ou “Selecione”
  * Evita duplicações
* 📲 **Geração de mensagem formatada para WhatsApp**
* 🔗 **Redirecionamento automático** para conversa com o cliente

---

## 💡 Como funciona

1. O cliente clica no botão **"Solicitar cotação"**
2. Um modal é exibido com formulário de contato
3. O sistema coleta:
   * Dados preenchidos
   * Informações do produto atual
   * Variações selecionadas
4. Uma mensagem estruturada é criada automaticamente
5. O cliente é redirecionado para o WhatsApp com a mensagem pronta

---

## 🧱 Estrutura do Projeto

O código é dividido em três partes principais:

### 🎨 CSS
Responsável pelo estilo do modal:
* Layout centralizado
* Design moderno com cores azuis
* Animação de entrada suave

### 🧩 HTML
Define o modal:
* Campos de entrada intuitivos
* Botão de envio destacado
* Estrutura semântica

### ⚙️ JavaScript
Responsável por toda a lógica:
* Abertura e fechamento do modal
* Captura de dados em tempo real
* Leitura de variações do produto (compatível com diversos temas)
* Filtros inteligentes de UI
* Geração da mensagem e redirecionamento

---

## 📦 Exemplo de mensagem gerada

<div align="center">
  <img src="file:///C:/Users/max14/.gemini/antigravity/brain/da80855e-5dca-45fd-9cfa-2d1a85a760c2/whatsapp_message_format_1776980382412.png" width="300px" />
</div>

```text
📩 NOVA SOLICITAÇÃO DE COTAÇÃO

👤 Cliente:
João Silva

📧 Email:
joao@email.com

📍 Cidade:
Aracaju

⚡ Urgência:
Alta

━━━━━━━━━━━━━━━━━━

📦 Produto:
Campo Operatório Estéril

🔧 Especificações do produto:
Tamanho: 25x28cm
Capacidade: 1ml

━━━━━━━━━━━━━━━━━━

📝 Detalhes do pedido:
Preciso com urgência

━━━━━━━━━━━━━━━━━━

📲 Enviado pelo site
```

---

## ⚠️ Requisitos

* Loja ativa na **Nuvemshop**
* Acesso ao código do tema (**Editor de CSS/JS** ou **FTP**)
* Botão de compra com a classe padrão `.js-addtocart` (ou ajuste no script)

---

## 🔧 Personalização

Você pode adaptar facilmente no arquivo `index.html`:

* 📞 **Número do WhatsApp:**
  Altere o número no final do script:
  ```js
  const url = "https://api.whatsapp.com/send?phone=SEUNUMERO"
  ```
* 🎨 **Cores do modal:** Ajuste as variáveis de cor no bloco `<style>`.
* 🧾 **Campos do formulário:** Adicione ou remova inputs no HTML.

---

## 🧠 Diferenciais

* **Funciona com temas dinâmicos (AJAX):** Captura as variações mesmo após a mudança de seleção do cliente.
* **Compatibilidade:** Testado com múltiplos formatos de variação da Nuvemshop.
* **UX Otimizada:** Evita erros comuns de captura de dados e melhora a conversão.

---

## 📈 Possíveis melhorias

* 🔗 **Integração com CRM:** Enviar os dados via Webhook (Zapier/Make).
* 💾 **Salvamento de leads:** Armazenar dados em LocalStorage ou Banco de Dados.
* 📧 **Envio por e-mail:** Cópia da solicitação para o lojista.
* 📸 **Imagem do produto:** Inclusão do link da imagem na mensagem.

---

## 📄 Licença

Uso livre para projetos pessoais e comerciais.

---

## ✨ Autor

Desenvolvido para otimizar processos de venda e atendimento em e-commerce Nuvemshop.
