// Seu JSON com os dados dos serviços
const servicos = {
    "ServicosMecanicos": {
      "ManutencaoPreventiva": {
        "titulo": "Manutenção Preventiva",
        "ul1": "Inspeção geral do veículo para detectar possíveis problemas.",
        "ul2": "Troca de óleo e filtros para garantir o bom funcionamento do motor.",
        "ul3": "Verificação e reabastecimento de fluidos essenciais."
      },
      "ReparosMecanicos": {
        "titulo": "Reparos Mecânicos",
        "ul1": "Conserto de motores, incluindo substituição de peças e ajuste fino.",
        "ul2": "Reparos em caixas de câmbio para garantir a troca suave de marchas.",
        "ul3": "Manutenção de eixos e sistemas de freio para segurança e performance."
      },
      "DiagnosticoEletronico": {
        "titulo": "Diagnóstico Eletrônico",
        "ul1": "Uso de scanners automotivos para identificar falhas e erros eletrônicos.",
        "ul2": "Análise detalhada dos sistemas eletrônicos para encontrar problemas.",
        "ul3": "Correção de falhas eletrônicas para restaurar o funcionamento ideal do veículo."
      }
    },
    // Outros serviços aqui...
  };
  
  // Função para exibir detalhes do serviço
  function exibirDetalhes(titulo) {
    // Encontre a seção correspondente ao título
    const servico = document.querySelector(`.servico[data-titulo="${titulo}"]`);
    const detalhesDiv = servico.querySelector('.detalhes');
    
    // Limpe os detalhes atuais
    detalhesDiv.innerHTML = '';
    
    // Obtenha as informações do JSON
    const servicoInfo = Object.values(servicos).flat().find(s => s.titulo === titulo);
    console.log(servicoInfo)
    
    if (servicoInfo) {
      // Crie os elementos <ul> e adicione-os aos detalhes
      const ul = document.createElement('ul');
      Object.keys(servicoInfo).forEach(key => {
        if (key.startsWith('ul')) {
          const li = document.createElement('li');
          li.textContent = servicoInfo[key];
          ul.appendChild(li);
        }
      });
      detalhesDiv.appendChild(ul);
    }
  }
  
  // Adicione eventos de clique para os botões "Saiba Mais"
  document.querySelectorAll('.saiba-mais').forEach(button => {
    button.addEventListener('click', () => {
      const titulo = button.closest('.servico').getAttribute('data-titulo');
      exibirDetalhes(titulo);
    });
  });
  