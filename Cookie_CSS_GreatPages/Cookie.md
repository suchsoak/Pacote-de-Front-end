# Mudança de cor no Cookie do GreatPages

>[!TIP]
>Verifique com o inspecionar elementos a parte certa que você que está modificando.

O pequeno script em `CSS` foi criado com algumas alterações nas cores, mantendo a estrutura alinhada às práticas recomendadas para evitar conflitos no site.

Dentro do script foi mudado o corpo e a cor do botão, podendo mudar apenas um ou os dois se quiser.

```sh
<style>
#gpc-lgpd_botoes-confirmar{ 
color: #FFFFFF!important;
background: #000000 !important; - Aqui você muda a cor do botão
opacity:1;
transition: all .85s ease;
}
#gpc-lgpd_botoes-confirmar:hover{
opacity:0.85;
}

.gpc-lgpd-cor_ffffff {
    background-color: #c7804a; - Aqui você muda o corpo do Cookie
}

</style>

```

<p align="center">
  <img src="https://github.com/suchsoak/Pacote-de-Front-end/blob/main/Cookie_CSS_GreatPages/Captura%20de%20tela%202025-01-09%20150119.png" alt="Cookie.png">
</p>

| Utilitários |  Link |
| ------ | ------ |
|  GreatPages Cookie  | https://ajuda.greatsoftwares.com.br/pt-br/article/como-alterar-a-cor-do-botao-de-aviso-de-cookies-1mjx7zj/

