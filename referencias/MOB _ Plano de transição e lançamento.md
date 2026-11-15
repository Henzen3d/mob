# MOB | Plano de transição e lançamento

**Versão:** 14 de novembro de 2026  
**Escopo:** transição da antiga operação de marketing digital para a MOB | Inteligência Artificial para Empresas, com MOB Box, MOB CORE e treinamento prático.

## 1. Diagnóstico: a tese é boa, mas o produto precisa ser estreitado

A MOB parte de uma dor verdadeira: pequenas e médias empresas não precisam de mais uma demonstração de modelo de IA. Elas precisam que alguém escolha um processo, configure a tecnologia, treine a equipe e acompanhe o resultado.

O risco atual é tentar lançar três negócios ao mesmo tempo:

1. uma consultoria de diagnóstico e implantação;
2. uma plataforma de software com assistentes, automações e governança;
3. uma operação de hardware, rede, backup, segurança e suporte.

Esses negócios podem formar uma empresa, mas não devem ser vendidos como se fossem a mesma coisa. A recomendação é lançar a MOB como **implantação gerenciada de IA para um processo específico da PME**. A MOB Box deve ser uma opção de infraestrutura e uma âncora comercial. O MOB CORE deve ser a camada que torna a implantação repetível. O treinamento deve ser parte do produto, e não um bônus improvisado.

Os referenciais estudados apontam na mesma direção. A Morningside organiza o trabalho em identificação de oportunidades, desenvolvimento e adoção, com diagnóstico, priorização, piloto, treinamento e monitoramento. A Hypesoft vende execução por squads, com escopo, prazo e investimento definidos caso a caso. A Dust combina agentes, conhecimento, conectores, permissões, observabilidade e controle de consumo. O AnythingLLM combina software local, self-hosting, cloud e serviços empresariais. A Zylon empacota hardware, software privado e implantação. Isso sugere que o valor está na última milha — dados, integração, permissões, processo, treinamento e operação — e não no modelo de linguagem isolado.

Fontes: [Morningside AI](https://www.morningside.ai/services), [Hypesoft](https://www.hypesoft.com.br/lp/squad-enterprise/), [Dust](https://dust.tt/home/product), [AnythingLLM](https://anythingllm.com/), [Zylon in a Box](https://www.zylon.ai/deployment/zylon-in-a-box).

## 2. Novo posicionamento da MOB

### Promessa principal

> **A MOB coloca a IA para trabalhar em um processo real da sua empresa — com configuração, treinamento e acompanhamento, sem obrigar sua equipe a virar especialista em tecnologia.**

A promessa é mais defensável do que “IA própria para sua empresa” isoladamente. A expressão “IA própria” pode continuar no discurso, mas deve ser explicada como **ambiente configurado para a empresa, com dados, permissões, regras e modelos definidos para aquele uso**.

### Diferenciação

A MOB não deve competir dizendo que tem o melhor modelo. Deve competir com cinco elementos:

- implantação em português e adaptada aos hábitos da PME brasileira;
- demonstração com um fluxo real, como áudio ou foto transformado em orçamento, vistoria ou relatório;
- escolha transparente entre processamento local, híbrido e nuvem;
- treinamento prático por função e acompanhamento mensal;
- governança proporcional, com controles de acesso, fontes, retenção, backup e responsabilidades LGPD.

A frase “seus dados não saem do escritório” só deve ser usada no caso de uma arquitetura realmente local e documentada. No modelo híbrido, geração, embeddings, transcrição, atualizações, telemetria, suporte remoto, backups e conectores podem envolver terceiros ou processamento fora do Brasil. “Zero Data Retention” é uma condição específica de um fornecedor e de uma configuração; não é sinônimo de processamento local nem de conformidade LGPD.

## 3. Arquitetura do cardápio comercial

A MOB deve vender uma escada, e não três produtos desconectados.

### Entrada: MOB Diagnóstico

O diagnóstico é pago e tem duração curta. Ele deve entregar:

- entrevista com o decisor e duas ou três pessoas que executam o processo;
- mapa do processo atual;
- estimativa de horas, erros, retrabalho e tempo de resposta;
- classificação dos dados e das integrações envolvidas;
- escolha de um workflow prioritário;
- arquitetura recomendada: local, híbrida ou nuvem;
- plano de piloto com critério de sucesso;
- estimativa de investimento e mensalidade.

Preço inicial sugerido: **R$ 1.500 a R$ 3.000**, abatível parcialmente da implantação se o cliente avançar em até 30 dias. Não ofereça diagnóstico gratuito completo. Uma conversa comercial de 30 minutos pode ser gratuita; análise de processo e recomendação técnica já são trabalho.

### Produto 1: MOB PILOTO

O piloto deve resolver um único processo, com limite claro de usuários, documentos e integrações. Exemplos:

- transformar áudios e fotos do WhatsApp em relatório ou orçamento revisável;
- consultar manuais, políticas e tabelas de preço com indicação das fontes;
- resumir contratos e destacar prazos, valores e pontos para revisão humana;
- gerar rascunhos padronizados de propostas, respostas comerciais ou laudos.

O piloto deve durar de 2 a 4 semanas e ter três métricas antes/depois. Por exemplo: tempo médio por tarefa, volume semanal processado e taxa de retrabalho. O objetivo não é provar que a IA é inteligente; é provar que o processo ficou melhor.

Preço inicial sugerido: **R$ 3.500 a R$ 8.000**, dependendo de integração, preparação documental e necessidade de hardware. O piloto deve ser pago. Se a MOB não consegue cobrar pelo primeiro resultado, ainda não conhece o valor percebido ou o escopo está amplo demais.

### Produto 2: MOB Box

A MOB Box é a implantação gerenciada de um ambiente de IA para a empresa. O cliente recebe hardware ou infraestrutura definida, software configurado, assistentes, permissões, backup, acesso remoto controlado, treinamento e suporte.

A oferta deve ser descrita como três possibilidades de arquitetura, não como três promessas absolutas:

**MOB Box Compact — híbrida e econômica.** A interface, a base documental, as permissões e parte da operação ficam no ambiente do cliente, enquanto certos modelos, transcrição ou geração podem usar APIs externas autorizadas. Deve ser vendida para tarefas de baixo ou médio risco e com política explícita de quais dados podem sair.

**MOB Box Pro — local prioritária.** A geração principal acontece em modelo local. É adequada quando o cliente valoriza residência local e aceita mais limites de velocidade, modelo e manutenção. O desempenho precisa ser medido por processo, não presumido pelo nome do hardware.

**MOB Box Ultra — capacidade local ampliada.** Só deve ser oferecida depois de comprovar que a carga de trabalho exige GPU, múltiplos modelos simultâneos ou transcrição local pesada. Não deve ser o produto de entrada.

No lançamento, recomendo vender apenas **Compact** e uma versão local equivalente à **Pro**. Deixe a Ultra como proposta sob consulta. Isso evita criar estoque, suporte e promessas técnicas antes de conhecer a demanda.

Preço inicial recomendado para a Box, como hipótese a validar:

- implantação e equipamento Compact: **R$ 4.500 a R$ 7.500**;
- implantação local Pro: **R$ 8.000 a R$ 15.000**, conforme hardware, preparação e escopo;
- gestão mensal Compact: **R$ 690 a R$ 1.290/mês**;
- gestão mensal Pro: **R$ 990 a R$ 1.990/mês**.

Esses valores são recomendações comerciais iniciais, não uma conclusão de mercado. A mensalidade precisa informar limites de armazenamento, usuários, consumo de API, quantidade de ajustes, backups, janela de suporte e SLA. Não prometa “sem custo por usuário” sem explicar que continuam existindo limites de capacidade, consumo, armazenamento e suporte.

O modelo de comodato só deve ser usado após calcular risco de inadimplência, defeito, seguro, depreciação, devolução e reposição. Uma ativação de R$ 1.500 a R$ 2.000 pode não recuperar o risco se o cliente cancelar cedo ou se o hardware precisar ser substituído.

### Produto 3: MOB CORE

O MOB CORE deve ser apresentado como **configuração de assistentes e automações sob medida**, não como um software mágico que aprende sozinho.

O CORE precisa padronizar:

- identificação de cliente e segregação de ambientes;
- usuários, funções e permissões;
- catálogo de assistentes e skills;
- ingestão, versionamento e exclusão de documentos;
- fontes e citações nas respostas;
- roteamento entre modelo local e modelo externo;
- limites de ferramentas e aprovação humana;
- logs e observabilidade sem registrar dados desnecessários;
- consumo, custo e alertas;
- backups, restauração e rollback;
- exportação e encerramento do contrato.

A camada mais importante não é o prompt. É a capacidade de trocar modelo, provedor ou hardware sem reconstruir toda a implantação. Essa é a parte com potencial de virar produto escalável.

Preço inicial sugerido:

- configuração de um assistente ou workflow: **R$ 2.500 a R$ 6.000**;
- automação integrada com WhatsApp, e-mail, formulário ou sistema: **R$ 6.000 a R$ 20.000**;
- gestão mensal do CORE: **R$ 990 a R$ 3.500/mês**, conforme integrações, criticidade e volume de suporte.

Não inclua integrações ilimitadas nem ajustes ilimitados. O contrato deve separar melhoria de configuração, novo workflow, correção de defeito e treinamento adicional.

### Produto 4: MOB Mão na Massa

O treinamento deve ser uma linha de receita e de retenção. Ele deve acontecer no computador e no processo real do funcionário.

Formato recomendado:

- sessão inicial de 2 a 3 horas por função;
- até 8 participantes por turma;
- exemplos usando documentos controlados do cliente;
- regras sobre o que pode e não pode ser enviado à IA;
- checklist de revisão de respostas;
- uma pessoa campeã por setor;
- acompanhamento após 7 e 30 dias;
- reciclagem mensal curta para novos casos e novos colaboradores.

Preço inicial sugerido: **R$ 1.500 a R$ 3.500 por turma**, mais **R$ 490 a R$ 1.490/mês** para acompanhamento recorrente, dependendo da quantidade de turmas e setores.

O treinamento deve ensinar também os limites: a IA pode errar, pode usar uma versão antiga de documento e não deve decidir sozinha em temas jurídicos, financeiros, trabalhistas, médicos ou outros de alto impacto.

## 4. Transição da MOB atual para a nova MOB

A transição deve preservar ativos, mas não confundir públicos.

### Fase 1 — separar a operação antiga

Antes de anunciar o pivot, faça um inventário de:

- clientes ativos e contratos;
- leads e contatos com consentimento ou base de contato legítima;
- domínio, e-mail, Instagram, Google Business Profile e materiais;
- serviços que ainda geram receita;
- compromissos de entrega e suporte;
- depoimentos e portfólio que podem ser reutilizados;
- dados pessoais que precisam ser eliminados, atualizados ou ter finalidade revista.

Não apresente a mudança como se a antiga operação nunca tivesse existido. Use a continuidade de forma honesta: **“A MOB nasceu ajudando empresas a operar melhor no digital. Agora estamos levando essa experiência para a operação com IA.”**

### Fase 2 — reposicionar os canais

No site, substitua gradualmente a comunicação de marketing digital pela nova proposta. Mantenha uma página ou redirecionamento para clientes antigos durante o período de transição.

No Instagram, altere a bio para algo como:

> IA prática para pequenas e médias empresas. Implantação, assistentes, automações e treinamento. Blumenau e região. Converse com a MOB.

Fixe três conteúdos:

1. por que a MOB mudou;
2. como funciona uma demonstração real;
3. qual é a diferença entre MOB Box, MOB CORE e Mão na Massa.

No Google Business Profile, não apague o histórico abruptamente. Atualize categoria, descrição, serviços, fotos e publicações. Solicite avaliações específicas sobre atendimento, organização e capacidade de resolver problemas, sem induzir avaliações sobre uma experiência de IA que ainda não aconteceu.

### Fase 3 — migrar a base antiga

Divida os contatos em três grupos:

- empresas com processo operacional repetitivo e potencial de compra;
- parceiros que podem indicar clientes, como contadores, consultores de segurança, provedores de TI e empresas de automação;
- contatos sem aderência imediata.

Envie uma mensagem pessoal para os dois primeiros grupos. Não comece com “estamos vendendo IA”. Comece com uma demonstração ou conversa de diagnóstico:

> A MOB está mudando de foco. Em vez de apenas executar presença digital, estamos ajudando empresas a reduzir trabalho repetitivo com IA aplicada aos próprios processos. Estou selecionando algumas empresas de Blumenau para testar um fluxo real, como transformar documentos, áudios ou fotos em uma entrega pronta. Posso te mostrar em 15 minutos e ouvir onde isso faria sentido na sua operação?

### Fase 4 — não tentar atender qualquer setor

Durante os primeiros 90 dias, escolha um segmento principal e um secundário. A escolha deve considerar quatro fatores: dor frequente, documentos disponíveis, decisor acessível e capacidade de pagar.

Boas hipóteses para entrevistas são contabilidades, imobiliárias, distribuidoras, empresas de manutenção, escritórios profissionais e prestadores B2B. Não trate isso como decisão final. Faça 15 a 20 entrevistas antes de escolher o beachhead.

## 5. Como iniciar online

### Página inicial

A primeira dobra deve responder três perguntas: para quem é, qual resultado entrega e qual próximo passo.

Sugestão de copy:

> **IA funcionando no processo da sua empresa.**
>
> A MOB configura assistentes, automações e ambientes privados de IA para pequenas e médias empresas — com implantação, treinamento e acompanhamento. Comece por um processo que hoje consome tempo da sua equipe.
>
> **CTA:** Agendar diagnóstico de 30 minutos.

A página deve conter:

- um vídeo de 30 a 60 segundos com uma demonstração;
- dois ou três workflows, não uma lista de todas as possibilidades;
- explicação simples de Box, CORE e treinamento;
- como os dados são tratados, com linguagem condicional e transparente;
- etapas do projeto;
- faixa de investimento ou “a partir de”, quando o escopo permitir;
- perguntas frequentes;
- botão para WhatsApp e formulário curto.

Evite dizer “treinamos a IA com seus dados” sem explicar que normalmente se trata de uma base de conhecimento, instruções, recuperação documental ou integração. Evite “100% seguro”, “sem risco”, “instantâneo” e “LGPD garantida”.

### Conteúdo que vende

O conteúdo deve mostrar obra pronta, não aula genérica de ferramenta.

Publique três tipos de material:

- demonstração de antes e depois de um processo;
- bastidores de instalação, segurança e organização documental;
- explicação de decisões práticas, como quando usar local, híbrido ou nuvem.

Exemplos de títulos:

- “Um áudio de 2 minutos virou um relatório revisável — sem digitação manual.”
- “O que acontece quando um PDF antigo entra na base de conhecimento?”
- “IA local não significa automaticamente LGPD: veja os cinco controles que configuramos.”
- “Quanto custa deixar um processo de orçamento mais rápido?”
- “A MOB Box não substitui o funcionário: tira da frente o trabalho repetitivo.”

Não use dados reais de clientes sem autorização. Para demonstrações públicas, crie uma empresa fictícia com documentos sintéticos ou anonimizaos e deixe isso claro.

### Funil simples

O funil inicial deve ser:

1. conteúdo ou indicação;
2. conversa de 30 minutos;
3. diagnóstico pago;
4. piloto pago;
5. implantação Box/CORE;
6. gestão e treinamento recorrentes.

A meta dos primeiros 30 dias não deve ser gerar milhares de leads. Deve ser conseguir 20 conversas qualificadas, 5 diagnósticos, 3 pilotos e pelo menos 1 ou 2 contratos de gestão. Cinco clientes pagantes podem ser cinco pilotos, mas não devem ser prometidos como cinco implantações completas sem capacidade de suporte.

## 6. Plano exato para os próximos 30 dias

### Dias 1–5: fundação

- definir segmento principal e workflow de entrada como hipótese;
- revisar domínio, e-mail, Instagram e Google Business Profile;
- criar uma página simples com CTA para diagnóstico;
- definir contrato de diagnóstico, piloto, implantação e manutenção;
- criar ficha de arquitetura: local, híbrida ou nuvem;
- criar ficha de transparência de dados e fornecedores;
- montar uma demonstração com dados sintéticos;
- calcular custo mínimo de cada oferta.

### Dias 6–10: validação de dor

- entrevistar 10 contatos da antiga base;
- entrevistar 5 empresas novas do segmento escolhido;
- perguntar qual processo é repetitivo, quanto tempo consome, que sistemas usa, quem decide e quanto custaria resolver;
- não começar pela tecnologia;
- registrar frases exatas dos clientes e objeções;
- eliminar workflows que não tenham frequência, urgência ou responsável claro.

### Dias 11–15: venda do diagnóstico

- fazer uma demonstração online de 15 minutos;
- oferecer cinco vagas de diagnóstico pago com prazo de entrega definido;
- enviar proposta em até 24 horas;
- pedir acesso apenas aos documentos necessários;
- confirmar quem é controlador, quais dados entram e quem aprova o resultado;
- fechar pelo menos dois diagnósticos.

### Dias 16–22: pilotos

- escolher o workflow com maior repetição e menor risco;
- medir o processo antes da automação;
- configurar somente o necessário;
- incluir fontes, versão do documento e botão ou instrução para revisão humana;
- acompanhar o uso diariamente;
- registrar falhas, documentos ruins, dúvidas e solicitações fora do escopo;
- transformar cada falha recorrente em teste de regressão.

### Dias 23–30: conversão e prova

- apresentar resultado com horas, tempo, volume e retrabalho antes/depois;
- separar resultado realizado de projeção;
- converter o piloto em Box, CORE ou treinamento recorrente;
- pedir autorização para um depoimento ou estudo de caso;
- publicar uma demonstração anonimizada;
- revisar preço e escopo com base no custo real de suporte;
- decidir qual workflow será o primeiro produto repetível.

## 7. Operação técnica mínima da MOB Box

A pasta de rede é uma boa experiência de entrada, mas não deve alimentar a IA de forma cega. O pipeline precisa:

- aceitar somente extensões e tamanhos permitidos;
- identificar PDF escaneado, planilha corrompida, documento duplicado e versão antiga;
- registrar origem, data, responsável e status de aprovação;
- separar bases por cliente, setor e finalidade;
- impedir que um documento novo substitua silenciosamente uma regra anterior;
- permitir reindexar, excluir e confirmar a eliminação de documentos e embeddings;
- exibir fonte, data e trecho utilizado na resposta;
- responder “não encontrei base suficiente” quando a fonte não sustentar a resposta;
- manter logs úteis sem acumular dados pessoais desnecessários;
- testar restauração de backup, e não apenas criar backup;
- possuir rollback de prompt, modelo e configuração.

Tailscale ou WireGuard pode reduzir deslocamento e exposição de portas, mas o acesso remoto deve usar contas individuais, menor privilégio, MFA quando disponível, logs, revogação no encerramento e separação entre acesso de suporte e acesso do cliente.

Não prometa 15 ou 30 usuários simultâneos, latência instantânea ou determinado nível de qualidade antes de medir com documentos e tarefas reais. Faça um teste de aceite com número de usuários, tamanho de base, tempo de ingestão, latência, taxa de respostas com fonte e custo por tarefa.

## 8. LGPD, contratos e linguagem de privacidade

A LGPD continua aplicável em ambiente local. A empresa cliente normalmente decide finalidades e bases legais e, nessa operação, tende a ser controladora. A MOB será operadora quando tratar dados conforme instruções da cliente, mas o papel depende da operação concreta e do poder de decisão real. Uma organização pode ser controladora em uma operação e operadora em outra.

Para cada implantação, mantenha uma ficha com:

- finalidade do tratamento;
- categorias de dados e titulares;
- base legal ou instrução documentada do cliente;
- sistemas, modelos, embeddings, logs e backups envolvidos;
- localização e eventual transferência internacional;
- fornecedores e suboperadores;
- perfis de acesso;
- prazo de retenção e processo de exclusão;
- processo para direitos dos titulares;
- plano de incidentes;
- responsável do cliente e responsável operacional da MOB.

Para PMEs, a ANPD prevê algumas flexibilizações, como registro simplificado, política simplificada de segurança e possibilidade de dispensa de encarregado em hipóteses específicas. Isso não elimina princípios, bases legais, direitos, segurança ou a necessidade de um canal de comunicação com titulares. A simplificação pode não se aplicar quando houver tratamento de alto risco, como certas combinações de dados sensíveis, tecnologia inovadora, larga escala ou decisões automatizadas com impacto relevante.

A MOB deve ter contrato de tratamento de dados, confidencialidade, subcontratação, segurança, incidentes, suporte remoto, auditoria proporcional, devolução/eliminação, propriedade intelectual, limites de responsabilidade, SLA, manutenção, saída e jurisdição. A contratação de advogado especializado em LGPD e tecnologia é recomendada antes de vender a primeira Box com dados pessoais relevantes.

Fontes: [Lei Geral de Proteção de Dados](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm), [Guia da ANPD sobre agentes de tratamento](https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/guia-orientativo-para-definicao-dos-agentes-de-tratamento-e-do-encarregado), [Resolução CD/ANPD nº 2/2022](https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/regulamentacoes-da-anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022), [Guia de segurança da ANPD para pequeno porte](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-sobre-seguranca-da-informacao-para-agentes-de-tratamento-de-pequeno-porte).

## 9. Margem: como saber se a oferta fecha

Antes de publicar preços definitivos, monte uma ficha de custo por cliente incluindo:

- hardware e frete;
- montagem e configuração;
- horas de diagnóstico;
- preparação e limpeza de documentos;
- programação e integração;
- deslocamento;
- treinamento;
- APIs, transcrição, embeddings e armazenamento;
- monitoramento, VPN e backup;
- suporte e plantão;
- impostos e taxas de pagamento;
- defeito, reposição e garantia;
- inadimplência e custo de aquisição.

Como regra de prudência, a mensalidade não deve ser tratada como lucro apenas porque o hardware já foi pago. Ela financia suporte, atualizações, segurança, backup, consumo variável, incidentes e evolução do produto.

Uma política comercial inicial pode ser:

- margem bruta alvo de 45% ou mais na implantação, depois de incluir todas as horas e custos diretos;
- margem recorrente alvo de 55% ou mais na gestão, antes de despesas comerciais e administrativas;
- limite mensal de consumo de API, armazenamento, ajustes e horas de suporte;
- cobrança separada para novo workflow, nova integração ou atendimento fora do SLA;
- revisão de preço após 60 dias de uso real.

Essas metas são referências internas de gestão, não promessa de mercado. O ponto essencial é não subsidiar indefinidamente clientes intensivos com uma mensalidade fixa baixa.

## 10. O que não fazer no lançamento

Não compre estoque de Mini PCs antes de validar pelo menos dois pilotos.

Não ofereça três tiers de hardware para qualquer cliente antes de medir a carga real.

Não prometa “100% privado”, “sem custo por usuário”, “zero risco”, “LGPD garantida” ou “sem alucinações”.

Não deixe o cliente jogar qualquer documento em uma pasta e presumir que a base está correta.

Não venda customização ilimitada por uma mensalidade pequena.

Não use documentos reais em demonstrações públicas sem autorização e anonimização.

Não transforme o fundador em suporte 24 horas via WhatsApp sem definir horário, SLA e canal de incidente.

Não tente posicionar a MOB para todos os setores no primeiro trimestre.

## 11. Decisão recomendada

A MOB deve começar como uma empresa de **implantação gerenciada de IA para PMEs**, com uma promessa de resultado em um workflow. A primeira venda deve ser o diagnóstico e o piloto; a Box entra quando a necessidade de residência, operação e continuidade estiver comprovada. O CORE é a camada de padronização e governança que permitirá repetir a implantação. O treinamento é uma parte obrigatória do resultado e da receita recorrente.

A transição da antiga MOB deve usar a confiança e a base local já existentes, mas comunicar uma mudança objetiva de problema resolvido: de presença digital para redução de trabalho operacional com IA. O primeiro marco não é lançar uma grande plataforma. É fazer um processo de uma PME funcionar de ponta a ponta, medir o resultado, documentar os controles e repetir a implantação com pouca customização.

## Referências

[1]: https://www.morningside.ai/services "Morningside AI — serviços de transformação com IA"
[2]: https://www.hypesoft.com.br/lp/squad-enterprise/ "Hypesoft — AI Units e squads"
[3]: https://dust.tt/home/product "Dust — plataforma de agentes, conhecimento e ferramentas"
[4]: https://anythingllm.com/ "AnythingLLM — plataforma local, self-hosted e cloud"
[5]: https://www.zylon.ai/deployment/zylon-in-a-box "Zylon — Zylon in a Box"
[6]: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm "Lei Geral de Proteção de Dados Pessoais"
[7]: https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/guia-orientativo-para-definicao-dos-agentes-de-tratamento-e-do-encarregado "ANPD — Guia de agentes de tratamento e encarregado"
[8]: https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/regulamentacoes-da-anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022 "ANPD — Resolução CD/ANPD nº 2/2022"
[9]: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-sobre-seguranca-da-informacao-para-agentes-de-tratamento-de-pequeno-porte "ANPD — Guia de segurança para agentes de tratamento de pequeno porte"
