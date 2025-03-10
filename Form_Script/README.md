# Script formulário

>[!TIP]
>O script está em um arquivo `HTML` com código em conjunto de `Javascript` e `CSS`

Este é um script para formulário que valida `CPF`, `CNPJ` e outros dados.

O script foi desenvolvido com uma finidade original, de validação de alguns dados para colocar em plataforma de desenvolvimento de site. A exemplo do `GreatPages` a qual foi utilizado.

No script para enviar algo via webhook pode-se colocar um link nessa parte do código:

```sh
    <form id="form" action="https://www.seulinkwebhook.com.br" method="POST">
        <label for="nome" style="color: white;"></label>
        <input type="text" id="nome" name="nome" placeholder="Nome" required />
        <span id="nome-error" class="error-message"></span>
```

Caso queira colocar um sistema de verificação de duplicação de CPF, aqui está um scrip a parte. Utilizado junto com um script para o `APPS SCRIPT do Google`, usando uma chave API de um `Excel`.

```sh
 async function verificarCPF(cpf) {

         if (!cpf) {
             return false;
         }

         try {
             const response = await fetch ('https://script.google.com/macros/s/verifique_o_CPF' + cpf)

             const data = await response.json();

             if (data.error) {
                 alert("Este CPF já está cadastrado!");
                 document.getElementById("cpf").value = ""; 
                 return false;
             } else {
                 console.log("CPF válido!");
                 alert("CPF válido!");
                 return true;
             }
         } catch (error) {
             console.error("Erro ao verificar CPF:", error);
             return false;
         }
         }

```

| Utilitários |  Link |
| ------ | ------ |
|  GreatPages  | [https://www.greatpages.com.br](https://www.greatpages.com.br)
|  CSS  | [https://developer.mozilla.org/pt-BR/docs/Web/CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
|  Javascript  | [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
|  HTML  | [https://developer.mozilla.org/pt-BR/docs/Web/HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
|  Webhook  | https://webhook.site
|  Apps Script  | https://developers.google.com/apps-script?hl=pt-br

