# 📌 Menu Fixado

> [!TIP]
> O script está disponível em um arquivo `js` isolado e também em `html`

## 📝 Descrição

Este script foi criado para **fixar o menu personalizado** de um site durante a rolagem da página.

Desenvolvido originalmente para validar dados em plataformas de desenvolvimento web, como o **GreatPages**.

## 🚀 Como Funciona

### Script Original (GreatPages)

```js
window.addEventListener('scroll', function () {
    if ((window.pageYOffset || window.scrollY) > 0) {             
        $('#site div.gpc-b:nth-child(1)').css({ 'position': 'fixed', 'z-index': '9999999' });         
        $('#site div.gpc-b:nth-child(2)').css({ 'margin-top': $('#site div.gpc-b:nth-child(1)').height() + 'px' });
    } else {            
        $('#site div.gpc-b:nth-child(1)').css({ 'position': 'initial', 'z-index': '' });
        $('#site div.gpc-b:nth-child(2)').css({ 'margin-top': '0px' });
    }
}, false);
```

### Minha Versão (Otimizada)

```js
console.log("Menu-fixado carregado com sucesso!");

window.addEventListener('scroll', function(){
    if ((window.pageYOffset || window.scrollY) > 0) {             
        $('.e_1076967_1_176303728847048113').css({ 'position': 'fixed','left': '180px', 'z-index': '9999' });
        $('.e_1076967_1_07694').css({ 'position': 'fixed', 'left': '480px', 'z-index': '9999'});
    } else {
        $('.e_1076967_1_176303728847048113').css({ 'position': '', 'left': '-82px' });
        $('.e_1076967_1_07694').css({ 'position': '', 'left': '260px' });
    }
});
```

## 📚 Recursos Úteis

| Utilitário | Link |
|-----------|------|
| 🌐 GreatPages | [https://www.greatpages.com.br](https://www.greatpages.com.br) |
| 🎨 CSS | [MDN - CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) |
| ⚙️ JavaScript | [MDN - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) |
| 📄 HTML | [MDN - HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) |
| 📌 Menu Sticky | [GreatPages Docs](https://ajuda.greatsoftwares.com.br/pt-br/article/como-manter-um-menu-fixo-na-tela-sticky-menu-3uhsx8/) |

🔗 [Ver Script Completo](https://github.com/suchsoak/Pacote-de-Front-end/blob/main/Menu-fixado/index.html)


