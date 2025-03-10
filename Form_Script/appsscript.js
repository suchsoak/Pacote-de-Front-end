// Função que verifica se o CPF já existe na coluna E
function verificarCPF(cpf) {
  var planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dados = planilha.getRange("E:E").getValues();
  
  for (var i = 0; i < dados.length; i++) {
    if (dados[i][0] == cpf) {
      return true; 
    }
  }
  
  return false; 
}

function doGet(e) {
  var cpf = e.parameter.cpf; 
  var resultado = verificarCPF(cpf);
  
  var resposta = resultado ? "CPF já existe" : "CPF não encontrado";
  
  var output = ContentService.createTextOutput(resposta);
  
  output.setMimeType(ContentService.MimeType.TEXT);
  output.addHeader("Access-Control-Allow-Origin", "*"); // Permite todas as origens
  output.addHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Permite os métodos GET, POST, OPTIONS
  output.addHeader("Access-Control-Allow-Headers", "Content-Type"); // Permite cabeçalhos de requisição

  return output;
}
