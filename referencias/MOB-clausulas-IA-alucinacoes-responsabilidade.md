# MOB Start | Cláusulas sobre alucinações, revisão humana e responsabilidade

**Documento de apoio para revisão por advogado brasileiro.** Estas cláusulas são uma base comercial e operacional, não um parecer jurídico nem um contrato pronto para assinatura.

## 1. Princípio de redação

A MOB não deve tentar declarar que “não se responsabiliza por qualquer erro da IA”. Uma exoneração absoluta pode ser incompatível com a obrigação de entregar um serviço adequado, com a oferta feita ao cliente, com regras de proteção de dados e, em determinadas relações, com o Código de Defesa do Consumidor.

O contrato deve demonstrar que a MOB:

- informa claramente as limitações da tecnologia;
- configura testes e critérios de aceite;
- estabelece revisão humana antes de decisões ou comunicações relevantes;
- limita as ferramentas e permissões do workflow;
- corrige defeitos dentro do escopo;
- mantém processo de incidente;
- limita a responsabilidade de forma proporcional;
- preserva exceções para condutas que não podem ser protegidas por uma isenção genérica.

O Código de Defesa do Consumidor prevê responsabilidade do fornecedor por vícios de qualidade do serviço e considera que a oferta integra o contrato. Também restringe cláusulas que impossibilitem, exoneren ou atenuem indevidamente o dever de indenizar. Mesmo em contratos B2B, não convém depender de uma cláusula de exclusão total sem analisar a situação concreta. [4]

## 2. Cláusula de natureza assistiva da IA

### Redação-base

> **Natureza assistiva do serviço.** A solução disponibilizada pela MOB utiliza modelos de inteligência artificial, automações e fontes de dados configuradas conforme a Ordem de Serviço. A solução tem natureza assistiva e de apoio à atividade do Cliente. Suas respostas, classificações, resumos, extrações, recomendações, rascunhos e demais saídas podem conter omissões, inexatidões, informações desatualizadas, interpretações inadequadas ou conteúdo não sustentado pelas fontes fornecidas. A saída da solução não constitui, por si só, aconselhamento jurídico, contábil, financeiro, médico, trabalhista, regulatório ou de qualquer outra atividade profissional sujeita a responsabilidade específica.

Essa cláusula deve aparecer no contrato e também na interface, treinamento e manual de uso. Não adianta esconder a limitação em um anexo se o site promete “respostas confiáveis” ou “zero erros”. A oferta precisa ser coerente com o contrato.

## 3. Cláusula de revisão e aprovação humana

### Redação-base

> **Revisão humana obrigatória.** O Cliente reconhece que toda saída produzida pela solução deve ser revisada e aprovada por pessoa autorizada antes de ser utilizada para decisão, comunicação externa, assinatura, cobrança, contratação, alteração de cadastro, orientação a cliente, publicação ou qualquer ato que possa produzir efeitos jurídicos, financeiros, comerciais, trabalhistas, médicos, regulatórios ou operacionais relevantes. A aprovação humana deverá verificar, no mínimo, a exatidão dos fatos, a atualidade das fontes, os cálculos, os destinatários, os anexos, os prazos e a adequação ao contexto. A aprovação não poderá ser delegada exclusivamente à própria solução.

Para a MOB Start, essa cláusula deve ser acompanhada de um mecanismo concreto: botão de aprovação, campo de responsável, status “rascunho”, log de revisão ou fluxo que impeça envio automático. Uma obrigação contratual sem controle técnico é mais fraca na prática.

## 4. Cláusula de decisão automatizada e usos proibidos

### Redação-base

> **Limites de uso.** Sem Ordem de Serviço específica, avaliação de risco e autorização escrita da MOB, o Cliente não utilizará a solução para tomar ou executar exclusivamente decisões que produzam efeitos jurídicos ou afetem significativamente pessoas naturais, inclusive decisões sobre contratação, demissão, crédito, cobrança, concessão ou negativa de benefício, preço individualizado, avaliação de desempenho, seleção de candidatos, saúde, segurança, acesso a serviços, perfilização sensível ou aplicação de sanções. Também não utilizará a solução para diagnóstico médico, aconselhamento jurídico ou financeiro, assinatura de contratos, transferência de valores ou envio de comunicações vinculantes sem revisão e autorização humana.

A lista deve ser adaptada ao workflow do cliente. Não basta chamar a ferramenta de “assistente” se ela puder aprovar crédito, alterar preço, contratar alguém ou enviar cobrança sem intervenção.

## 5. Cláusula de responsabilidade do cliente pelo uso

### Redação-base

> **Responsabilidade pela decisão e pelo conteúdo final.** O Cliente permanece responsável pela definição da finalidade do uso, pela legalidade dos dados fornecidos, pelas instruções dirigidas à solução, pela escolha dos usuários autorizados, pela revisão das saídas e pela decisão de utilizar, alterar, rejeitar ou comunicar qualquer resultado. A MOB não substitui o profissional ou responsável do Cliente que detenha competência para aprovar a decisão final. O Cliente não poderá tratar uma saída não revisada como fato confirmado ou instrução vinculante.

Essa redação não deve ser usada para transferir à cliente uma falha que decorreu de configuração defeituosa, acesso indevido, falha de segurança ou descumprimento das instruções da MOB. A responsabilidade deve seguir o controle real de cada atividade.

## 6. Cláusula de fontes, dados e qualidade de entrada

### Redação-base

> **Dependência das fontes.** Quando a solução utilizar documentos, tabelas, manuais, bases de conhecimento ou dados fornecidos pelo Cliente, a qualidade da saída dependerá da integridade, atualidade, legibilidade, consistência e completude desses materiais. A solução poderá não identificar documentos conflitantes, versões antigas, erros de digitação, páginas ausentes, imagens ilegíveis, planilhas corrompidas ou instruções maliciosas. O Cliente deverá manter um responsável pela aprovação das fontes e comunicar documentos revogados, substituídos ou incorretos. A indicação de uma fonte pela solução não constitui garantia de que a interpretação produzida esteja correta.

Inclua uma obrigação operacional de mostrar fonte e data quando o fluxo usar RAG. Isso ajuda o usuário a revisar, mas não transforma a citação em garantia de exatidão.

## 7. Cláusula de qualidade e correção de defeitos

Uma isenção precisa ser equilibrada por uma obrigação clara da MOB.

### Redação-base

> **Correção dentro do escopo.** Se a solução não atender aos critérios objetivos de aceite definidos na Ordem de Serviço em razão de falha de configuração imputável à MOB, a MOB realizará, dentro do escopo contratado, a correção ou reconfiguração razoavelmente necessária, sem custo adicional, dentro do prazo operacional aplicável. A correção não inclui a criação de novo workflow, a substituição de documentos incorretos fornecidos pelo Cliente, alteração de finalidade, integração não prevista, evolução de modelo de terceiro ou garantia de resultado econômico.

Se o contrato for tratado como relação de consumo, o fornecedor pode ter obrigações legais adicionais quanto a vícios do serviço. Não use esta cláusula para tentar eliminar direitos legais inderrogáveis. [4]

## 8. Cláusula sobre modelos e fornecedores de terceiros

### Redação-base

> **Dependências externas.** A solução poderá depender de modelos, APIs, serviços de hospedagem, transcrição, armazenamento, bibliotecas ou outros componentes de terceiros identificados na Ordem de Serviço ou na ficha técnica. Esses componentes podem apresentar indisponibilidade, latência, alteração de preço, mudança de política, alteração de modelo, limitação de capacidade ou mudança de comportamento. A MOB poderá substituir um componente por outro tecnicamente equivalente quando necessário à continuidade ou segurança do serviço, observados o escopo, a finalidade, as obrigações de proteção de dados e a comunicação aplicável ao Cliente. A MOB não garante a permanência de uma versão específica de modelo de terceiro, salvo previsão expressa.

Não use essa cláusula para negar responsabilidade por algo que a MOB controla. Se a MOB escolhe e configura o fornecedor, ainda deve responder pela seleção, integração e gestão dentro do que contratou.

## 9. Cláusula de ausência de garantia de resultado

### Redação-base

> **Ausência de garantia de resultado econômico.** Salvo se a Ordem de Serviço estabelecer expressamente um critério objetivo e uma obrigação específica, a MOB não garante aumento de receita, redução mínima de custos, economia mínima de horas, eliminação de erros, disponibilidade ininterrupta, aprovação de documentos, conversão comercial ou qualquer resultado econômico decorrente do uso da solução. Projeções, estimativas e exemplos apresentados em proposta, demonstração ou diagnóstico são hipóteses de planejamento e não constituem garantia de resultado realizado.

A MOB deve guardar a memória de cálculo de qualquer projeção de ROI. Não anuncie uma economia projetada como se fosse resultado comprovado.

## 10. Cláusula de indisponibilidade e manutenção

### Redação-base

> **Disponibilidade e manutenção.** O serviço poderá ficar temporariamente indisponível para manutenção, atualização, correção de segurança, alteração de fornecedor, falha de conectividade, interrupção de energia, indisponibilidade de serviço de terceiro ou evento fora do controle razoável da MOB. A MOB comunicará manutenções programadas com antecedência razoável quando possível e adotará esforços comercialmente razoáveis para restaurar o serviço. O nível de serviço, as janelas de manutenção e os prazos de resposta são os definidos na Política de Suporte e SLA. O SLA não transforma a solução em serviço de emergência ou de operação crítica, salvo contratação específica.

Não prometa disponibilidade 24/7 no MOB Start. A cláusula deve refletir a capacidade real da operação.

## 11. Cláusula de limitação de responsabilidade

A limitação precisa ser proporcional e ter exceções. Uma versão-base para discussão com advogado é:

> **Limitação de responsabilidade.** Observados os limites legais aplicáveis, a responsabilidade total agregada de cada parte por danos diretos comprovados decorrentes deste contrato ficará limitada ao valor efetivamente pago pelo Cliente à MOB nos [6 ou 12] meses anteriores ao evento que originou a reclamação. Nenhuma parte responderá por lucros cessantes, perda de oportunidade, dano indireto, dano consequencial ou perda de expectativa de economia, salvo quando tais danos não puderem ser limitados pela legislação aplicável.
>
> **Exceções.** O limite anterior não se aplica, na extensão em que a lei não permita limitação, a: (a) dolo ou culpa grave; (b) violação de confidencialidade; (c) uso ou divulgação não autorizada de dados pessoais causada por descumprimento imputável da parte; (d) violação comprovada de direitos de propriedade intelectual de terceiros causada pela parte; (e) obrigações de pagamento do Cliente; ou (f) qualquer outra hipótese que não possa ser validamente limitada por contrato.
>
> **Mitigação.** A parte que identificar um evento que possa causar dano deverá adotar medidas razoáveis para conter, mitigar e documentar os efeitos, sem prejuízo dos deveres de comunicação e cooperação previstos neste contrato.

O valor do cap deve ser negociado conforme risco, preço e criticidade. Para uma MOB Start de R$ 990 por mês, um cap muito baixo pode ser rejeitado pelo cliente ou considerado inadequado em um caso sensível. Para dados de saúde, RH, financeiro ou decisões de alto impacto, o preço, seguro, controles e limite de responsabilidade precisam subir juntos.

## 12. Cláusula LGPD e incidente relacionado a alucinação ou acesso indevido

Alucinação e incidente de segurança são riscos diferentes. Uma resposta incorreta normalmente é problema de qualidade e revisão. Um documento indevido recuperado por um usuário pode ser incidente de confidencialidade e proteção de dados.

### Redação-base

> **Proteção de dados e incidentes.** As partes observarão o Anexo de Tratamento de Dados Pessoais. A MOB tratará dados pessoais somente para as finalidades e conforme as instruções documentadas do Cliente, quando atuar como operadora. A MOB manterá medidas técnicas e administrativas compatíveis com o risco e comunicará o Cliente, sem demora injustificada após tomar conhecimento, sobre incidente de segurança que possa afetar dados tratados no âmbito do serviço, fornecendo as informações disponíveis e cooperando com contenção, investigação e atendimento às obrigações legais. O Cliente, como controlador quando aplicável, permanecerá responsável pelas decisões de finalidade, base legal e comunicação formal aos titulares e à ANPD, sem prejuízo das responsabilidades legais da MOB pela sua própria conduta.

A LGPD determina que o operador trate dados segundo instruções do controlador e prevê responsabilidade quando há violação legal ou descumprimento de instruções lícitas. A ANPD informa que o comunicado formal de incidente é dirigido pelo controlador e que, havendo risco ou dano relevante, a comunicação deve alcançar também os titulares. [1] [3]

## 13. Cláusula de não treinamento com dados do cliente

Se essa for a política da MOB, declare de forma objetiva:

> **Uso dos dados do Cliente.** A MOB não utilizará documentos, prompts, respostas, áudios, imagens ou demais dados fornecidos pelo Cliente para treinamento geral de modelos próprios ou de terceiros, para publicidade ou para desenvolvimento de produto não relacionado ao serviço, salvo autorização escrita específica, base legal aplicável e definição documentada de finalidade, escopo, retenção e controles. A MOB poderá utilizar dados técnicos mínimos e anonimizados para segurança, suporte, medição de desempenho e melhoria do serviço, desde que não permitam identificar o Cliente ou titulares, respeitadas as obrigações legais e contratuais.

Não use “anonimizado” se o processo apenas remove nome e mantém CPF, endereço, contrato, voz ou combinação identificável. A anonimização deve ser avaliada tecnicamente.

## 14. Cláusula sobre uso indevido pelo cliente

### Redação-base

> **Uso autorizado.** O Cliente não poderá utilizar a solução para inserir malware, tentar extrair dados de outro cliente, contornar permissões, criar decisões discriminatórias, produzir conteúdo ilícito, enviar spam, violar direitos de terceiros, realizar vigilância indevida ou executar comandos sem autorização. O Cliente deverá manter usuários individuais, proteger credenciais e comunicar imediatamente suspeitas de acesso indevido. A MOB poderá suspender temporariamente um recurso ou acesso quando necessário para conter risco de segurança ou uso ilícito, comunicando o Cliente e restabelecendo o acesso quando a causa for resolvida, quando possível.

## 15. Aviso dentro da interface e no treinamento

Inclua uma mensagem visível no produto, não apenas no contrato:

> **Rascunho gerado por IA.** Confira fontes, datas, cálculos e destinatários antes de usar. Esta resposta pode estar incompleta ou incorreta. Não envie, assine ou execute sem revisão e aprovação humana.

O treinamento deve registrar que os usuários:

- não devem aceitar uma resposta apenas porque ela está bem escrita;
- precisam verificar fonte e versão;
- devem reportar respostas perigosas ou acesso indevido;
- não podem colar dados fora do fluxo autorizado;
- devem usar o canal definido para aprovação e incidentes.

## 16. O que não incluir

Evite estas formulações:

- “A MOB não se responsabiliza por qualquer dano causado pela IA.”
- “O cliente assume todos os riscos, inclusive de vazamento.”
- “A IA pode errar e o cliente renuncia a qualquer direito.”
- “O serviço é fornecido sem qualquer garantia, inclusive de segurança e confidencialidade.”
- “O cliente é exclusivamente responsável por tudo que ocorrer.”
- “A MOB não tem qualquer obrigação de corrigir respostas incorretas.”

Essas frases não substituem controles técnicos e podem ser incompatíveis com obrigações legais, com a oferta ou com o próprio serviço prometido.

## 17. Checklist de implementação antes de assinar

Antes de usar as cláusulas, faça a redação corresponder ao produto real:

- o workflow realmente bloqueia envio sem aprovação?
- existe registro de quem aprovou?
- a resposta mostra fontes quando essa promessa é feita?
- os documentos são segregados por cliente e setor?
- há um procedimento de exclusão de documento e embedding?
- a MOB sabe quais dados vão para cada API?
- os provedores externos estão listados?
- o SLA corresponde à equipe disponível?
- há canal para incidente e responsável de plantão?
- os critérios de aceite podem ser testados?
- o contrato separa defeito de melhoria e novo escopo?
- a política de não treinamento é tecnicamente verdadeira?
- o cap de responsabilidade é compatível com o risco?
- o cliente recebeu aviso claro sobre revisão humana?

## 18. Recomendação final

Para a MOB Start, use uma cláusula de IA assistiva, uma obrigação de revisão humana, uma lista de usos proibidos, critérios objetivos de aceite, correção de falhas dentro do escopo, dependências de terceiros, limitação de responsabilidade com cap e exceções, e um DPA com processo de incidentes.

A melhor proteção jurídica é a combinação entre contrato e produto: o contrato diz que a revisão humana é obrigatória; a interface mantém a saída como rascunho; as permissões impedem ações perigosas; os logs registram aprovação; e o treinamento ensina o usuário a conferir fonte e contexto.

## Referências

[1]: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm "LGPD — controlador, operador e responsabilidade"
[2]: https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/guia-orientativo-para-definicao-dos-agentes-de-tratamento-e-do-encarregado "ANPD — Guia sobre agentes de tratamento e encarregado"
[3]: https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis "ANPD — Comunicação de Incidente de Segurança"
[4]: https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm "Código de Defesa do Consumidor — oferta, vícios e responsabilidade"
