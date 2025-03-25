# Whatsapp Botão

Nesse script escrito em `html`, está o botão flutuante do whatsapp que ficará fixado no canto inferior direito da tela.

<p align="center">
  <img src="https://github.com/suchsoak/Pacote-de-Front-end/blob/main/Whatsapp_Botão/Captura%20de%20tela%202025-03-25%20115648.png">
</p>

>[!NOTE]
> A cor padrão está `laranja (#e54b1e)` , porque foi utilizada para um cliente em especifico.

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

# Veja aqui como fica em uma página real:

<p align="center">
  <img src="https://github.com/suchsoak/Pacote-de-Front-end/blob/main/Whatsapp_Botão/Captura%20de%20tela%202025-03-25%20120310.png">
</p>


| Utilitários |  Link |
| ------ | ------ |
|  GreatPages Whatsapp Botão Flutuante  | https://ajuda.greatsoftwares.com.br/pt-br/article/como-criar-um-botao-flutuante-do-whatsapp-19a12fy/
|  Site de exemplo  | https://www.animallecurso.com
