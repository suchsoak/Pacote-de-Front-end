# 📌 AspenMed - Site Institucional

> [!TIP]
> O site está disponível em [aspenmed.com.br](https://aspenmed.com.br)

## 📝 Descrição

Este projeto contém o código HTML, CSS e JavaScript para o site institucional da **AspenMed**, uma empresa médica especializada em soluções de saúde.

Desenvolvido para plataformas de desenvolvimento web, como o **GreatPages**, com foco em responsividade e navegação intuitiva.

## 🚀 Como Funciona

### Estrutura HTML

O site é composto por seções principais:
- **Header**: Contém o logo e menu de navegação fixo (hamburger em mobile).
- **Hero Section**: Banner principal com chamada para ação.
- **Sobre Nós**: Informações sobre a empresa.
- **Serviços**: Lista de serviços oferecidos.
- **Contato**: Formulário e informações de contato.
- **Footer**: Links adicionais e direitos autorais.

```html
<header>
    <div class="logo">
        <img src="https://aspenmed.com.br/assets/logo.png" alt="AspenMed Logo">
    </div>
    <nav class="custom-menu left" onclick="toggleMenu()">
        <button class="custom-menu-button"><!-- ícone SVG --></button>
        <div class="custom-menu-content">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
        </div>
    </nav>
</header>
<section id="hero">
    <h1>Bem-vindo à AspenMed</h1>
    <p>Soluções médicas de ponta.</p>
    <img src="https://aspenmed.com.br/assets/hero-image.jpg" alt="Equipe médica">
</section>
<!-- Outras seções -->
```

### Estilos CSS Personalizáveis

```css
:root {
    --primary-color: #012f3f;
    --secondary-color: #afff00;
    --background-color: #FFFFFF;
    --text-color: #012f3f;
}
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
header {
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--background-color);
}
```

### Funcionalidade JavaScript

```js
function toggleMenu() {
    var menuContent = document.querySelector('.custom-menu-content');
    menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
}
// Outras funções para interatividade
```

## 🖼️ Fotos do Site

- ![Logo AspenMed](https://aspenmed.com.br/assets/logo.png)
- ![Hero Image](https://aspenmed.com.br/assets/hero-image.jpg)
- ![Equipe](https://aspenmed.com.br/assets/team.jpg)

## 📚 Recursos Úteis

| Utilitário | Link |
|-----------|------|
| 🌐 GreatPages | [https://www.greatpages.com.br](https://www.greatpages.com.br) |
| 🎨 CSS | [MDN - CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) |
| ⚙️ JavaScript | [MDN - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) |
| 📄 HTML | [MDN - HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) |
| 🏥 AspenMed | [https://aspenmed.com.br](https://aspenmed.com.br) |
