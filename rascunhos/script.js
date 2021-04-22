var produtos = [
    'Açucar', 'Andu', 'Arroz', 'Balas', 'Bolacha',
    'Tijolo', 'Trigo', 'Bombril', 'Sal', 'Doces',
    'Detergente', 'Sabão', 'Sabonete', 'Fava', 'Fava de Ross',
    'Sabão em barras', 'Sabão em pó', 'Carioca', 'Rosinha', 'Catador',
    'Pasta de dente', 'Rapadura', 'Rapadura', 'Fósforo','Papel Gold',
    'Papel Higiênico', 'Macarrão', 'Papel de cigarro', 'Oleo','Oleo(lata)',
];

var estoqueInicial = ['Açucar', 'Andu', 'Arroz', 'Balas', 'Bolacha',
'Tijolo', 'Trigo', 'Bombril', 'Sal', 'Doces',
'Detergente', 'Sabão', 'Sabonete', 'Fava', 'Fava de Ross',
'Sabão em barras', 'Sabão em pó', 'Carioca', 'Rosinha', 'Catador',
'Pasta de dente', 'Rapadura', 'Rapadura', 'Fósforo','Papel Gold',
'Papel Higiênico', 'Macarrão', 'Papel de cigarro', 'Oleo','Oleo(lata)',];

var estoqueFinal = ['Açucar', 'Andu', 'Arroz', 'Balas', 'Bolacha',
'Tijolo', 'Trigo', 'Bombril', 'Sal', 'Doces',
'Detergente', 'Sabão', 'Sabonete', 'Fava', 'Fava de Ross',
'Sabão em barras', 'Sabão em pó', 'Carioca', 'Rosinha', 'Catador',
'Pasta de dente', 'Rapadura', 'Rapadura', 'Fósforo','Papel Gold',
'Papel Higiênico', 'Macarrão', 'Papel de cigarro', 'Oleo','Oleo(lata)',];

var totalVendas = ['Açucar', 'Andu', 'Arroz', 'Balas', 'Bolacha',
'Tijolo', 'Trigo', 'Bombril', 'Sal', 'Doces',
'Detergente', 'Sabão', 'Sabonete', 'Fava', 'Fava de Ross',
'Sabão em barras', 'Sabão em pó', 'Carioca', 'Rosinha', 'Catador',
'Pasta de dente', 'Rapadura', 'Rapadura', 'Fósforo','Papel Gold',
'Papel Higiênico', 'Macarrão', 'Papel de cigarro', 'Oleo','Oleo(lata)',];



/*for (let i = 0; i < produtos.length; i++) {
    document.write(`<tr><th class="product">`+produtos[i]+`</th><th></th><th></th><th></th><th></th></tr>`);
  }*/



 /* function criaTabela(conteudo) {
      var tabela = document.createElement("table");
      var thead = document.createElement("thead");
      var tbody = document.createElement("tbody");
      var thd = function(i){return (i==0)?"th":"td";};
      for (i=0;i<conteudo.length;i++){
          var tr = document.createElement("tr");
          for (var o=0;o<conteudo[i].length; o++){
              var t = document.createElement(thd(i));
              var texto = document.createTextNode(conteudo[i][o]);
              t.appendChild(texto);
              tr.appendChild(t);
            }
            (i==0)?thead.appendChild(tr):tbody.appendChild(tr);
        }
            tabela.appendChild(thead);
            tabela.appendChild(tbody);
            return tabela;
    }
        document.getElementById("tabela").appendChild(criaTabela([
            ["id", "nome", "idade"],
            [1,     "matheus",  16],
            [2,     "davi",  16],
            [3,     "pedro",  10],
            [4,     "daniel",  10]
        ]));*/

var container = for (i = 0; i < produtos.length; i++) {
    container.innerHTML = [
        '<tr>',
        '<td>'+ produtos[i] +'</td>',
        '<td>'+ estoqueInicial[i] +'</td>',
        '<td>'+ estoqueFinal[i] +'</td>',
        '<td>'+ totalVendas[i] +'</td>',
    ]}