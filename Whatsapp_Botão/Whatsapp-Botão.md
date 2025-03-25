# Whatsapp Botão

Nesse script escrito em `html`, está o botão flutuante do whatsapp que ficará fixado no canto inferior direito da tela.

```sh
:root {
        --icon-color: #fff;
        --icon-hover: #fff;
        --background-color: #e54b1e; # Aqui você muda a cor.
        --background-hover: #009600 #Aqui você mudar a cor quando o ponteiro do mouse estiver em cima.
    }
```
Nessa parte do código você pode mudar da cor do botão.

```sh
    @-webkit-keyframes pulse {
        0% { -webkit-box-shadow: 0 0 0 0 rgba(229,75,30) }
        70% { -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0) }
        100% { -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0) }
    }

    @-o-keyframes pulse {
        0% { -webkit-box-shadow: 0 0 0 0 rgba(229,75,30) }
        70% { -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0) }
        100% { -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0) }
    }

    @-ms-keyframes pulse {
        0% { -webkit-box-shadow: 0 0 0 0 rgba(229,75,30) }
        70% { -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0) }
        100% { -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0) }
    }

    @-moz-keyframes pulse {
        0% { -webkit-box-shadow: 0 0 0 0 rgba(229,75,30) }
        70% { -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0) }
        100% { -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0) }
    }

    @keyframes pulse {
        0% { -webkit-box-shadow: 0 0 0 0 rgba(229,75,30) }
        70% { -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0) }
        100% { -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0) }
    }
```
Aqui você muda a pulsação do botão, serão as *cores que estarão mostrando* antes mesmo de aperta o botão do Whatsapp.

<br>

| Utilitários |  Link |
| ------ | ------ |
|  GreatPages  | https://ajuda.greatsoftwares.com.br/pt-br/article/como-criar-um-botao-flutuante-do-whatsapp-19a12fy/