# MOB | Contratos e termos jurídicos essenciais para a MOB Start

**Versão:** 14 de novembro de 2026  
**Uso:** guia de preparação para revisão por advogado brasileiro especializado em contratos de tecnologia e LGPD. Não substitui parecer jurídico nem a análise do caso concreto.

## 1. Estrutura recomendada

A MOB não deve começar com um contrato único e genérico. Para a MOB Start, use uma estrutura modular:

1. **Proposta comercial / Ordem de Serviço — OS.** Define o workflow comprado, preço, prazo, entregáveis, limites e critérios de aceite.
2. **Contrato principal de prestação de serviços de tecnologia.** Define as regras permanentes entre MOB e cliente: pagamento, confidencialidade, propriedade intelectual, responsabilidade, rescisão, suporte e foro.
3. **Anexo de Tratamento de Dados Pessoais — DPA.** Define papéis LGPD, instruções, dados, fornecedores, segurança, incidentes, retenção, exclusão e cooperação.
4. **Política de Suporte e SLA.** Define canais, horários, severidades, prazos de resposta e o que não é incidente.
5. **Anexo de hardware e comodato**, somente se houver MOB Box. Deve tratar propriedade, entrega, instalação, garantia, danos, seguro, manutenção, devolução e responsabilidade pelo equipamento.
6. **NDA ou cláusula de confidencialidade reforçada**, quando o cliente precisar compartilhar informações antes de assinar o contrato principal.

Para o primeiro cliente, o conjunto mínimo é: **Contrato Principal + OS + DPA + Política de Suporte**. Se não houver dados pessoais relevantes, o DPA ainda deve existir em versão curta, porque documentos empresariais podem conter nomes, contatos, CPF, dados trabalhistas, financeiros ou outros dados pessoais.

## 2. Documento 1 — Proposta comercial / Ordem de Serviço

A proposta deve virar anexo assinado ou aceito expressamente pelo cliente. Não deixe o site, uma mensagem de WhatsApp ou uma apresentação comercial contradizer o contrato: no regime consumerista, informações suficientemente precisas da oferta podem integrar o contrato e a oferta deve ser clara e precisa. [6]

A OS da MOB Start deve conter:

### Identificação do projeto

Informe razão social, CNPJ, endereço, representante, responsável operacional e responsável pela aprovação. Inclua também a identificação da MOB, CNPJ, endereço e representante com poderes para contratar.

### Objetivo mensurável

Descreva o resultado em termos de processo, não de promessa tecnológica. Exemplo:

> Configurar um fluxo para transformar informações recebidas por formulário e arquivos anexos em um rascunho de relatório no modelo aprovado pelo cliente, sujeito à revisão e aprovação humana antes de qualquer envio externo.

Evite escrever “automatizar o atendimento”, “garantir respostas corretas” ou “eliminar o trabalho manual”. Essas frases podem gerar uma obrigação de resultado maior do que a MOB consegue controlar.

### Escopo fechado

Para o pacote inicial, registre expressamente:

- um workflow;
- até seis usuários;
- até 50 documentos ou arquivos na preparação inicial;
- até três modelos de saída;
- uma integração simples;
- duas rodadas de ajustes;
- uma turma de treinamento de até seis pessoas;
- 14 dias de acompanhamento após a entrega;
- quatro horas mensais de suporte planejado, se esse for o limite comercial;
- limite de consumo de API, armazenamento e processamento, quando aplicável.

Defina também o que será considerado um novo pedido. Um novo setor, novo assistente, nova integração, novo formato de saída ou mudança de finalidade deve ser tratado como mudança de escopo e receber orçamento próprio.

### Dependências do cliente

O cliente deve se comprometer a:

- fornecer documentos, exemplos e acessos legítimos;
- confirmar que pode compartilhar os dados com a MOB e fornecedores autorizados;
- indicar um aprovador;
- revisar respostas antes do uso externo;
- manter usuários e senhas sob controle;
- entregar documentos em formato legível;
- participar do treinamento;
- comunicar mudanças de processo, dados ou finalidade;
- não usar o fluxo para decisão automatizada de alto impacto sem nova análise.

Se o cliente atrasar documentos, aprovações ou acessos, o prazo deve ser suspenso ou prorrogado. A OS deve prever que o prazo começa após o pagamento e o recebimento dos materiais mínimos.

### Critérios de aceite

O aceite não deve ser “a IA ficou boa”. Defina testes verificáveis, como:

- processar dez exemplos previamente escolhidos;
- gerar os campos obrigatórios no formato aprovado;
- indicar a fonte documental quando o fluxo usar documentos;
- sinalizar ausência de informação suficiente;
- respeitar o limite de usuários e permissões;
- permitir correção manual antes de envio;
- funcionar dentro do tempo de resposta acordado em condições normais.

O cliente deve ter um prazo, por exemplo cinco dias úteis, para apontar desconformidades objetivas. Se não houver manifestação, o entregável pode ser considerado aceito, desde que o advogado valide a redação e a regra seja compatível com o caso. O aceite não deve eliminar direitos legais nem servir para encobrir defeito real.

## 3. Documento 2 — Contrato principal de prestação de serviços

### Objeto

Defina que a MOB presta serviços de configuração, implantação, treinamento, manutenção e suporte de soluções de IA e automação, conforme cada OS. O contrato principal não deve obrigar a MOB a entregar qualquer recurso que não esteja em uma OS assinada.

Também deixe claro que a MOB pode usar software, modelos, APIs, bibliotecas e infraestrutura de terceiros, desde que informe os componentes relevantes e respeite as regras do DPA e da OS.

### Natureza da obrigação

O contrato deve diferenciar:

- obrigação de meio: configuração, implantação, treinamento, suporte e correções dentro do escopo;
- critérios de aceite: testes objetivos do workflow;
- ausência de garantia de resultado econômico, redução mínima de custos, aumento de vendas ou eliminação de erros;
- revisão humana obrigatória para saídas relevantes;
- limitações de modelos generativos, que podem produzir conteúdo incorreto, incompleto, desatualizado ou inadequado.

Essa cláusula não autoriza entrega defeituosa. Ela evita transformar uma estimativa de produtividade em garantia financeira.

### Preço e pagamento

Para a MOB Start, o contrato deve estabelecer:

- implantação de R$ 4.900, ou o valor da OS;
- mensalidade de R$ 990, cobrada antecipadamente;
- prazo mínimo de três meses, se essa for a política comercial;
- vencimento da implantação e da primeira mensalidade antes do kickoff;
- correção anual da mensalidade, com índice e data definidos;
- juros, multa e correção em caso de atraso, revisados pelo advogado;
- suspensão de novas evoluções e suporte não emergencial após atraso, com aviso;
- cobrança separada para mudança de escopo, consumo excedente e atendimento fora do horário.

Não escreva apenas “uso ilimitado”. Especifique usuários, armazenamento, consumo de API, horas de suporte, número de ajustes e integrações.

### Vigência, renovação e rescisão

Defina o prazo da implantação e o período mínimo da mensalidade. Depois do prazo mínimo, o contrato pode renovar por períodos mensais, mediante aviso prévio de 30 dias, se isso fizer sentido comercialmente.

Preveja rescisão por:

- inadimplemento não corrigido após prazo de cura;
- violação de confidencialidade ou segurança;
- uso ilícito ou não autorizado;
- insolvência, recuperação ou encerramento da atividade;
- impossibilidade técnica ou regulatória superveniente;
- conveniência, com aviso prévio e pagamento do que já foi executado.

A cláusula deve explicar o que acontece com valores pagos, trabalho em andamento, dados, credenciais, documentos, backups, acessos remotos, licenças e hardware. Não use multa desproporcional nem retenha dados do cliente como forma de pressão.

O Código Civil trata o contrato de prestação de serviço e reconhece hipóteses de término por prazo, conclusão, aviso prévio, inadimplemento ou impossibilidade de continuação. A redação contratual deve transformar isso em um procedimento claro para a operação da MOB. [4]

### Confidencialidade

A cláusula deve proteger informações comerciais, tabelas de preço, contratos, credenciais, documentos, processos, prompts, configurações, dados pessoais e informações técnicas.

Inclua:

- definição de informação confidencial;
- uso somente para executar o contrato;
- acesso apenas a pessoas e fornecedores autorizados;
- dever de segurança;
- exceções para informação pública, já conhecida ou exigida por lei;
- prazo de confidencialidade após o término;
- devolução ou eliminação;
- obrigação de comunicar acesso indevido.

Dados pessoais devem ser tratados também no DPA, não apenas na cláusula genérica de confidencialidade.

### Propriedade intelectual

O contrato deve separar quatro categorias:

1. **Materiais preexistentes da MOB:** plataforma, código, templates, prompts-base, métodos, bibliotecas, documentação e know-how. Permanecem da MOB.
2. **Materiais do cliente:** documentos, marcas, tabelas, processos, conteúdo e dados. Permanecem do cliente.
3. **Configuração específica:** prompts, campos, regras e fluxos criados para aquele projeto. Defina se o cliente recebe licença de uso, cessão de direitos ou uma combinação. Não deixe isso implícito.
4. **Software e modelos de terceiros:** permanecem sujeitos às licenças e termos dos respectivos titulares.

Para a MOB, a alternativa mais sustentável costuma ser conceder ao cliente uma licença de uso da configuração específica durante a vigência e enquanto os pagamentos estiverem em dia, preservando o CORE, componentes genéricos e know-how. Porém, o advogado deve analisar a negociação e o poder de barganha do cliente.

A Lei nº 9.609/1998 prevê que o uso de software no Brasil seja objeto de contrato de licença. Ela também trata de assistência técnica durante a validade técnica da versão comercializada. Por isso, não entregue uma “licença eterna” ou prometa atualização permanente sem definir versão, prazo, suporte e limites. [5]

Inclua ainda uma obrigação da MOB de ter direito de usar os componentes de terceiros e uma obrigação do cliente de não exigir a entrega de código-fonte, modelos proprietários ou segredos de fornecedores, salvo contratação específica.

### Software open source e modelos de terceiros

Mantenha um inventário interno dos componentes utilizados. O contrato deve informar que:

- componentes open source continuam sujeitos às licenças respectivas;
- modelos e APIs têm termos, limites, disponibilidade e políticas próprias;
- fornecedores externos podem sofrer alteração, indisponibilidade ou mudança de preço;
- a MOB poderá substituir um provedor por outro tecnicamente equivalente, respeitando segurança, finalidade, escopo e aviso quando necessário;
- o cliente não deve inserir conteúdo que não esteja autorizado a processar.

Não prometa zero data retention ou processamento local se qualquer componente relevante enviar dados a terceiros.

## 4. Anexo de Tratamento de Dados Pessoais — DPA

A LGPD determina que controlador e operador mantenham registro das operações e que o operador trate os dados conforme as instruções do controlador. A lei também prevê responsabilidade quando o operador descumpre obrigações legais ou deixa de seguir instruções lícitas. [1]

O DPA da MOB Start deve conter, no mínimo:

### Papéis

Identifique o cliente como controlador quando ele decidir finalidade e meios essenciais da operação. Identifique a MOB como operadora quando tratar dados em nome do cliente e conforme instruções. Registre que o papel pode mudar em operações diferentes e que cada operação deve ser analisada separadamente.

Se a MOB usar dados do cliente para desenvolver produto próprio, treinar modelos, criar benchmark ou fazer marketing, isso não deve ser escondido no contrato. Em muitos casos, será necessário consentimento, outra base legal, anonimização efetiva ou uma definição diferente de papel e finalidade. A recomendação inicial é **não usar dados de clientes para treinamento geral da MOB**.

### Instruções documentadas

O DPA deve apontar:

- finalidade;
- categorias de dados;
- categorias de titulares;
- operações permitidas;
- pessoas autorizadas;
- prazo de retenção;
- local de processamento;
- fornecedores e suboperadores;
- regra para novos fornecedores;
- proibição de uso secundário não autorizado.

### Segurança

Descreva controles proporcionais ao risco, como contas individuais, controle de acesso por menor privilégio, MFA quando disponível, criptografia em trânsito e repouso quando aplicável, gestão de chaves, atualização, backup, restauração testada, logs, segregação de clientes, proteção do acesso remoto e descarte seguro.

Não transforme uma lista de controles em certificação. Escreva o que a MOB realmente implementa e o que é responsabilidade do cliente, da hospedagem ou do fornecedor de modelo.

### Suboperadores

Liste os fornecedores relevantes: hospedagem, modelo, transcrição, e-mail, armazenamento, monitoramento, VPN, backup e suporte. Defina como a MOB poderá contratar ou substituir suboperadores, como comunicará mudanças e como o cliente poderá apresentar objeção fundamentada.

### Transferência internacional

Se prompts, documentos, embeddings, logs, backups ou suporte forem processados fora do Brasil, o DPA deve declarar isso. Inclua localização, fornecedor, finalidade, categorias de dados e mecanismo contratual aplicável. Não chame o ambiente de “local” se houver dependência externa relevante.

### Direitos dos titulares

Defina como a MOB auxiliará o cliente em pedidos de acesso, correção, eliminação, oposição, informação ou restrição. O cliente, normalmente controlador, deve responder ao titular; a MOB deve localizar, exportar, corrigir ou eliminar dados sob sua guarda dentro do prazo operacional acordado.

### Incidentes

O DPA deve exigir que a MOB comunique o cliente sem demora injustificada após tomar conhecimento de incidente relevante, com informações disponíveis sobre causa, dados afetados, medidas de contenção e próximos passos.

A página oficial da ANPD esclarece que a comunicação formal à ANPD é dirigida pelo controlador e que, havendo risco ou dano relevante, também é necessária comunicação aos titulares. O contrato não deve transferir automaticamente ao operador a decisão final de comunicar, mas deve criar um fluxo rápido de notificação e cooperação. [3]

### Retenção, eliminação e backup

Defina:

- quanto tempo documentos, prompts, respostas, logs e embeddings ficam armazenados;
- o que acontece com backups;
- quando ocorre eliminação após encerramento;
- como o cliente recebe exportação;
- como a MOB registra a eliminação;
- quais cópias podem ser mantidas por obrigação legal ou defesa de direitos.

Não prometa eliminação imediata se houver backups com ciclo de retenção. Explique o prazo real.

## 5. Política de Suporte e SLA

O SLA deve ser um documento operacional, não uma promessa vaga de “suporte humanizado”. Inclua:

- canais autorizados;
- horário de atendimento;
- prazo de resposta inicial;
- prazo de atualização;
- severidades;
- janela de manutenção;
- limites de suporte;
- regras para indisponibilidade de fornecedor externo;
- manutenção emergencial;
- exclusões por rede, energia, internet, credencial, mau uso ou alteração não autorizada;
- procedimento de escalonamento.

Exemplo simples:

- **Severidade 1:** indisponibilidade total do workflow para todos os usuários. Resposta em até 4 horas úteis.
- **Severidade 2:** falha relevante com alternativa manual disponível. Resposta em até 1 dia útil.
- **Severidade 3:** dúvida, ajuste pequeno ou melhoria. Resposta em até 2 dias úteis, dentro do limite mensal.

Evite oferecer disponibilidade 24/7 no pacote de R$ 990. Se o cliente exigir operação crítica, crie uma oferta enterprise com preço, plantão, redundância e responsabilidade compatíveis.

## 6. Anexo de hardware e comodato

Use somente se a MOB entregar uma Box. O anexo deve responder:

- quem é proprietário do equipamento;
- se há venda, locação ou comodato;
- número de série e estado na entrega;
- prazo e limites da garantia;
- quem paga frete, instalação e retirada;
- quem responde por energia, rede, ambiente físico e seguro;
- o que ocorre em caso de furto, dano, mau uso ou alteração;
- quem pode acessar remotamente;
- como o acesso é revogado;
- quem realiza atualização e backup;
- como ocorre substituição;
- prazo de devolução;
- condição de devolução;
- tratamento dos dados armazenados no equipamento;
- eliminação de chaves, discos, backups e credenciais no encerramento.

A MOB não deve colocar no mesmo anexo a promessa de privacidade e a responsabilidade pelo ambiente físico do cliente. O cliente deve ser responsável por manter energia, rede, acesso físico e condições mínimas, salvo se a MOB tiver contratado isso expressamente.

## 7. Limitação de responsabilidade

A cláusula deve ser equilibrada e validada por advogado. Uma redação agressiva que tente excluir toda responsabilidade por dados, confidencialidade, propriedade intelectual, dolo ou culpa grave pode ser ineficaz ou aumentar o risco da MOB.

Estruture a limitação por categorias:

- limite financeiro geral, vinculado a múltiplas mensalidades ou ao valor anual do contrato;
- exclusão de danos indiretos e lucros cessantes quando juridicamente cabível;
- exceções para dolo, culpa grave, violação de confidencialidade, infração de propriedade intelectual, obrigações LGPD e situações que não possam ser limitadas;
- responsabilidade por fornecedor de terceiros conforme o controle efetivamente exercido;
- obrigação de mitigar danos;
- prazo para reclamação contratual, respeitando prazos legais aplicáveis.

Se o cliente for tratado como consumidor, cláusulas de exclusão ou redução de responsabilidade exigem cuidado adicional. O CDC prevê responsabilidade do fornecedor por vícios de qualidade e considera nulas determinadas cláusulas que impossibilitem, exoneren ou atenuem indevidamente o dever de indenizar. [6]

## 8. Uso de marca e estudo de caso

Inclua uma autorização separada, opcional e destacada para usar:

- nome e logotipo;
- depoimento;
- resultado operacional;
- imagens da implantação;
- estudo de caso anonimizado.

A autorização deve especificar canais, prazo, finalidade e possibilidade de revogação. Não condicione a prestação essencial à autorização de publicidade.

## 9. Cláusulas que não podem faltar na OS da MOB Start

Antes de enviar a proposta, confira se ela responde claramente:

- O que exatamente será construído?
- O que o cliente precisa fornecer?
- Quantas pessoas usarão?
- Quantos arquivos serão tratados?
- Onde os dados serão processados?
- Quais provedores externos participarão?
- Qual é o prazo?
- Qual é o critério de aceite?
- Quantas rodadas de ajustes existem?
- Quanto custa a implantação?
- Quando a mensalidade começa?
- O que a mensalidade inclui?
- O que fica fora?
- Quem aprova as respostas?
- O que acontece se o cliente atrasar materiais?
- O que acontece se um fornecedor de IA ficar indisponível?
- Como os dados serão exportados e eliminados?
- Quem é responsável por cada decisão LGPD?

## 10. Ordem de precedência dos documentos

Inclua uma regra para resolver conflito entre documentos. Uma ordem prática é:

1. aditivo específico assinado posteriormente;
2. DPA, para questões de proteção de dados;
3. OS, para escopo, preço e critérios de aceite;
4. contrato principal;
5. política de suporte;
6. proposta comercial, somente naquilo que não foi substituído pelos documentos assinados.

Essa ordem deve ser validada pelo advogado. Ela evita que uma frase antiga de uma apresentação comercial contradiga uma regra técnica atualizada.

## 11. Modelo operacional recomendado para assinatura

O fluxo de contratação pode ser:

1. conversa comercial;
2. proposta sem dados sensíveis;
3. assinatura do NDA, se necessário;
4. assinatura do contrato principal, OS, DPA e SLA;
5. emissão de cobrança;
6. recebimento da implantação e primeira mensalidade;
7. kickoff;
8. entrega controlada de documentos;
9. registro do aceite;
10. início do acompanhamento mensal.

Não peça ao cliente uma pasta inteira de contratos, listas de funcionários ou dados financeiros antes de ter contrato, instruções e canal seguro de transferência.

## 12. Recomendação de revisão jurídica

Antes do primeiro contrato, contrate uma revisão pontual com advogado para validar pelo menos:

- enquadramento da relação B2B e eventual aplicação do CDC;
- contrato principal e OS;
- DPA e papéis LGPD;
- transferência internacional e suboperadores;
- licenças de software, open source, modelos e APIs;
- cláusula de limitação de responsabilidade;
- propriedade dos prompts, configurações, código e resultados;
- hardware, comodato e garantia;
- política de incidentes;
- tributação e emissão fiscal;
- assinatura eletrônica e guarda das evidências.

O objetivo não é comprar um contrato de internet. É criar uma base reutilizável que reflita o que a MOB realmente entrega. Um contrato muito protetivo no papel, mas incompatível com a operação técnica, pode ser pior do que um contrato mais simples e verdadeiro.

## Referências

[1]: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm "Lei Geral de Proteção de Dados Pessoais — controlador, operador e responsabilidade"
[2]: https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/guia-orientativo-para-definicao-dos-agentes-de-tratamento-e-do-encarregado "ANPD — Guia orientativo sobre agentes de tratamento e encarregado"
[3]: https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis "ANPD — Comunicação de Incidente de Segurança"
[4]: https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm "Código Civil — prestação de serviços, inadimplemento e cláusula penal"
[5]: https://www.planalto.gov.br/ccivil_03/leis/l9609.htm "Lei de Software — licença de uso e direitos sobre programa de computador"
[6]: https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm "Código de Defesa do Consumidor — oferta, vícios e responsabilidade"
