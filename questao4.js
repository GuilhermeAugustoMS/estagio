//Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:


const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  function calcularPercentualFaturamento(faturamento) {
    const totalFaturamento = Object.values(faturamento).reduce((total, valor) => total + valor, 0);
  
    const percentuais = Object.entries(faturamento).reduce((acc, [estado, valor]) => {
      const percentual = ((valor / totalFaturamento) * 100).toFixed(2);
      return {...acc, [estado]: `${percentual}%`};
    }, {});
  
    return percentuais;
  }
  
  const resultado = calcularPercentualFaturamento(faturamento);
  console.log(resultado);