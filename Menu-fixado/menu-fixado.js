// Author - suchsoak
// GreatPages Custom Script
<script>
console.log("Menu-fixado carregado com sucesso!");

// Início do código de fixação do menu ao rolar a página

window.addEventListener('scroll', function(){
        // Home
         if ((window.pageYOffset || window.scrollY) > 0) {             
             $('.e_1076967_1_176303728847048113').css({ 'position': 'fixed','left': '180px', 'z-index': '9999' });
             console.log("fixado");
         } else {
             $('.e_1076967_1_176303728847048113').css({ 'position': '', 'left': '-82px' });
             console.log("desfixado");
         }
        //  Expositores
         if ((window.pageYOffset || window.scrollY) > 0) {
                $('.e_1076967_1_07694').css({ 'position': 'fixed', 'left': '480px', 'z-index': '9999'});
                console.log("fixado");
            } else {
                $('.e_1076967_1_07694').css({ 'position': '', 'left': '260px' });
                console.log("desfixado");
            }
        // Sobre
         if ((window.pageYOffset || window.scrollY) > 0) {
                $('.e_1076967_1_17325698046744eacceb2f8572178237').css({ 'position': 'fixed', 'left': '650px', 'z-index': '9999'});
                console.log("fixado");
            } else {
                $('.e_1076967_1_17325698046744eacceb2f8572178237').css({ 'position': '', 'left': '430px' });
                console.log("desfixado");
            }
        // Conheça Aracaju
        if ((window.pageYOffset || window.scrollY) > 0) {
                $('.e_1076967_1_17325698046744eacceb36e031459566').css({ 'position': 'fixed', 'left': '740px', 'z-index': '9999'});
                console.log("fixado");
            } else {
                $('.e_1076967_1_17325698046744eacceb36e031459566').css({ 'position': '', 'left': '520px' });
                console.log("desfixado");
            }
        // Credenciamento
        if ((window.pageYOffset || window.scrollY) > 0) {
                $('.e_1076967_1_176307724547145879').css({ 'position': 'fixed', 'left': '960px', 'z-index': '9999'});
                console.log("fixado");
            } else {
                $('.e_1076967_1_176307724547145879').css({ 'position': '', 'left': '720px' });
                console.log("desfixado");
            }
        // instagram-icon
        if ((window.pageYOffset || window.scrollY) > 0) {
                $('.e_1076967_1_176303718290263202').css({ 'position': 'fixed', 'left': '1200px', 'z-index': '9999'});
                console.log("fixado");
            } else {
                $('.e_1076967_1_176303718290263202').css({ 'position': '', 'left': '960px' });
                console.log("desfixado");
            }
        // Whatsapp-icon
        if ((window.pageYOffset || window.scrollY) > 0) {
                $('.e_1076967_1_176303722292304383').css({ 'position': 'fixed', 'left': '1270px', 'z-index': '9999'});
                console.log("fixado");
            } else {
                $('.e_1076967_1_176303722292304383').css({ 'position': '', 'left': '1020px' });
                console.log("desfixado");
            }
            // Barra
        if ((window.pageYOffset || window.scrollY) > 0) {
                $('.e_1076967_1_176502560392035818').css({ 'position': 'fixed','opacity': '1', 'left': '0', 'witdh': '100%', 'z-index': '9999'});
                console.log("fixado-barra");
            } else {
                $('.e_1076967_1_176502560392035818').css({ 'position': '', 'opacity': '0' });
                console.log("desfixado-barra");
            }
     });
// End of Dd_system.js
</script>
