# 📌 Menu Fixado

> [!TIP]
> O script está disponível em um arquivo `html` isolado

## 📝 Descrição

Este script foi criado para **fixar um menu hamburger personalizado** de um site durante a rolagem da página.

Desenvolvido originalmente para validar dados em plataformas de desenvolvimento web, como o **GreatPages**.

## 🚀 Como Funciona

### Estrutura HTML

O menu hamburger é composto por:
- Um botão fixo no canto superior esquerdo
- Um menu dropdown com links de navegação
- Comportamento responsivo (oculto em telas maiores)

```html
<div class="custom-menu left" onclick="toggleMenu()">
    <button class="custom-menu-button"><!-- ícone SVG --></button>
    <div class="custom-menu-content">
        <a href="#seção">Link</a>
    </div>
</div>
```

### Estilos CSS Personalizáveis

```css
:root {
    --color-icon: #012f3f;
    --color-background-icon: #FFFFFF;
    --text-color: #012f3f;
    --text-background-color: #FFFFFF;
    --hover-color: #afff00;
    --menu-icon-size: 17px;
}
```

### Funcionalidade JavaScript

```js
function toggleMenu() {
    var menuContent = document.querySelector('.custom-menu-content');
    menuContent.style.display = menuContent.style.display === 'block' ? '' : 'block';
}
```

## 📚 Recursos Úteis

| Utilitário | Link |
|-----------|------|
| 🌐 GreatPages | [https://www.greatpages.com.br](https://www.greatpages.com.br) |
| 🎨 CSS | [MDN - CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) |
| ⚙️ JavaScript | [MDN - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) |
| 📄 HTML | [MDN - HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) |

