// 1. Dados iniciais (nome)
let nome = prompt("Bem-vindo ao Simulador de Orçamento! Qual o seu nome?");
if (!nome) { nome = "Aventureiro Anônimo"; } // Caso o usuário deixe em branco

// 2. Validação com while (Renda)
let rendaTexto = prompt("Informe sua renda mensal (Ex: 2500.50):");
let renda = Number(rendaTexto);

// Enquanto for NaN (Not a Number) ou menor/igual a zero, repete o prompt
while (isNaN(renda) || renda <= 0) {
    rendaTexto = prompt("Valor inválido! Por favor, digite um NÚMERO válido para sua renda:");
    renda = Number(rendaTexto);
}

// 2. Validação com while (Quantidade de despesas)
let qtdDespesasTexto = prompt("Quantas despesas você vai informar? (Limite de 1 a 5)");
let qtdDespesas = Number(qtdDespesasTexto);

while (isNaN(qtdDespesas)) {
    qtdDespesasTexto = prompt("Valor inválido! Digite apenas o número de despesas:");
    qtdDespesas = Number(qtdDespesasTexto);
}

// Regra do limite de despesas
if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

// 3. Lançamento de despesas com for
let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let valorDespesaTexto = prompt(`Informe o valor da Despesa ${i}:`);
    let valorDespesa = Number(valorDespesaTexto);

    // Validação da despesa
    while (isNaN(valorDespesa) || valorDespesa < 0) {
        valorDespesaTexto = prompt(`Valor inválido! Digite novamente o valor da Despesa ${i}:`);
        valorDespesa = Number(valorDespesaTexto);
    }

    totalDespesas += valorDespesa; // Soma no total
}

// 4. Análise com if / else
let sobra = renda - totalDespesas;
let mensagemStatus = "";

if (totalDespesas > renda) {
    mensagemStatus = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    // Calcula 30% da renda
    let metaSobra = renda * 0.30;
    
    if (sobra >= metaSobra) {
        mensagemStatus = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagemStatus = "🙂 Ok: dá para melhorar a sobra.";
    }
}

// 5. Saída final formatada
let relatorio = `===== RESUMO DO ORÇAMENTO =====\n` +
                `Nome: ${nome}\n` +
                `Renda: R$ ${renda.toFixed(2)}\n` +
                `Total de Despesas: R$ ${totalDespesas.toFixed(2)}\n` +
                `Sobra: R$ ${sobra.toFixed(2)}\n` +
                `-------------------------------\n` +
                `Status: ${mensagemStatus}\n` +
                `===============================`;

// Mostra no alert e no console
alert(relatorio);
console.log(relatorio);