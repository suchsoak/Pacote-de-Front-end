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

| Utilitários |  Link |
| ------ | ------ |
|  GreatPages  | [https://www.greatpages.com.br](https://www.greatpages.com.br)
|  CSS  | [https://developer.mozilla.org/pt-BR/docs/Web/CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
|  Javascript  | [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
|  HTML  | [https://developer.mozilla.org/pt-BR/docs/Web/HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
|  Webhook  | https://webhook.site
