# MOB Box | APIs externas, privacidade e dimensionamento para escritório jurídico

**Versão:** 14 de novembro de 2026  
**Escopo:** comparação entre DeepSeek API, OpenAI API e Anthropic API; riscos de Cloudflare Tunnel e Tailscale; arquitetura 100% local para 20–50 advogados.

## 1. Resposta curta

Se a MOB Box enviar prompts, trechos de documentos ou arquivos para uma API externa, os dados saem do escritório. Docker e AnythingLLM não mudam esse fato: eles apenas hospedam a interface, a ingestão e a orquestração localmente.

Para dados confidenciais de um escritório de advocacia, eu **não usaria a DeepSeek API como padrão** sem um contrato empresarial específico, uma política de retenção verificável, garantias de não treinamento, avaliação de transferência internacional e aprovação do cliente. A política pública consultada da DeepSeek identifica uma empresa controladora na China, afirma que pode coletar prompts, arquivos, fotos e histórico, e inclui como finalidade melhorar a tecnologia e treinar modelos. [1]

OpenAI API e Anthropic API oferecem controles empresariais mais claros nas documentações consultadas. A OpenAI informa que dados da API não são usados para treinar modelos por padrão, mas também informa que logs de monitoramento de abuso podem reter conteúdo por até 30 dias; Zero Data Retention depende de aprovação e tem limitações por endpoint. [2] A Anthropic informa que dados retidos não são usados para treinamento sem permissão expressa e oferece ZDR mediante habilitação para organizações, mas recursos, modelos e integrações específicos podem ficar fora do ZDR. [3]

Isso ainda não significa que “ChatGPT” seja automaticamente adequado. É preciso diferenciar **OpenAI API empresarial** de uma conta ChatGPT de consumidor. A decisão deve ser baseada em contrato, DPA, retenção, treinamento, suboperadores, localização, endpoint utilizado, controle de acesso e risco do caso — não apenas na nacionalidade do provedor.

## 2. O que acontece quando AnythingLLM usa uma API

O fluxo típico é:

1. o advogado envia uma pergunta ou documento para o AnythingLLM;
2. o AnythingLLM recupera trechos relevantes da base local;
3. esses trechos são combinados com a pergunta e instruções;
4. o pacote é enviado ao provedor de LLM, se o modelo configurado for externo;
5. o provedor processa o pacote e devolve a resposta;
6. o AnythingLLM pode armazenar histórico, metadados, documentos, embeddings e resposta no storage local.

Mesmo que o documento original permaneça local, o trecho recuperado pode revelar nomes, fatos, estratégia processual, valores, argumentos, dados de clientes ou informações privilegiadas. Embeddings, logs, prompts e respostas também precisam entrar no inventário de dados.

Portanto, a frase correta para a arquitetura híbrida é:

> A base documental e a orquestração ficam na MOB Box; determinados prompts e trechos recuperados podem ser enviados ao provedor externo conforme a configuração autorizada.

A frase incorreta é:

> Os dados não saem do escritório.

## 3. DeepSeek API: por que eu trataria como alto risco para advocacia

A política pública consultada da DeepSeek informa que o serviço é controlado por uma empresa sediada na China. Ela lista como dados coletáveis os prompts, entradas de voz, arquivos enviados, fotos, histórico de chat e outros conteúdos fornecidos ao modelo. A mesma política informa que os dados podem ser usados para operar, desenvolver e melhorar os serviços e para treinar e melhorar tecnologia e modelos. Ela também declara que o serviço não é destinado ao processamento de dados pessoais sensíveis e recomenda que esses dados não sejam enviados. [1]

Isso não prova que toda requisição de uma API paga seja efetivamente usada para treinamento em qualquer plano ou endpoint. Porém, significa que a política pública analisada não oferece a garantia de não treinamento e de retenção mínima que a MOB precisaria para prometer confidencialidade forte a um escritório jurídico.

Minha decisão comercial seria:

- não habilitar DeepSeek API no perfil padrão de uma MOB Box jurídica;
- não permitir que usuários escolham livremente um provedor sem política de dados;
- usar DeepSeek somente em sandbox com documentos sintéticos ou em um contrato empresarial específico analisado juridicamente;
- se usado, bloquear dados pessoais, dados de clientes, estratégias processuais, peças não públicas, contratos confidenciais e segredos comerciais;
- registrar no DPA e na ficha técnica que ocorre transferência internacional e quais dados podem sair.

## 4. OpenAI API: melhor que DeepSeek, mas não é “zero risco”

A documentação oficial da OpenAI informa que dados enviados à API não são usados para treinar ou melhorar os modelos, salvo opt-in. Porém, ela também informa que logs de monitoramento de abuso podem conter prompts e respostas e, por padrão, ser mantidos por até 30 dias. A documentação descreve Zero Data Retention como um controle sujeito a aprovação e ressalta que endpoints e recursos inelegíveis podem reter estado mesmo com ZDR habilitado. [2]

Para a MOB, isso significa:

- usar API, não produto consumidor, para o fluxo empresarial;
- confirmar o projeto/organização e o endpoint exato;
- solicitar ZDR ou Modified Abuse Monitoring quando o caso justificar;
- verificar se embeddings, arquivos, threads, agentes, vector stores, áudio e ferramentas usadas são cobertos pelo controle;
- não usar recursos stateful sem entender a retenção;
- assinar os termos empresariais e o DPA aplicável;
- documentar suboperadores, região e mecanismo de transferência;
- configurar chaves por cliente e nunca compartilhar uma chave global entre Boxes.

Se a MOB disser “OpenAI não treina com seus dados”, isso deve ser qualificado como **“na API, conforme os termos e controles aplicáveis ao projeto e endpoint contratado”**. Não generalize essa frase para ChatGPT de consumidor, integrações de terceiros ou recursos que tenham política própria.

## 5. Anthropic API e provedores em nuvem empresarial

A documentação da Anthropic informa que dados retidos não são usados para treinamento sem permissão expressa e descreve ZDR para organizações mediante habilitação. A própria documentação ressalta que ZDR depende de recurso, modelo e endpoint, e que recursos stateful, integrações de terceiros e determinados modelos podem ficar fora do escopo. [3]

Anthropic API, Azure OpenAI, AWS Bedrock ou outro ambiente empresarial podem ser opções a avaliar. Mas “provedor norte-americano” não é um selo jurídico automático. A análise precisa conferir:

- entidade contratual;
- local de processamento e armazenamento;
- suboperadores;
- retenção por endpoint;
- não treinamento;
- ZDR ou equivalente;
- logs e monitoramento;
- resposta a intimações;
- transferência internacional sob LGPD;
- possibilidade de auditoria;
- saída e exclusão;
- suporte e SLA.

Em alguns casos, usar um modelo por Azure ou Bedrock pode melhorar a governança porque o cliente contrata uma plataforma empresarial com controles de identidade, rede e contratos corporativos. Isso não transforma automaticamente o processamento em local nem elimina transferência internacional.

## 6. Minha hierarquia de segurança para uma MOB Box jurídica

Para documentos altamente confidenciais, use esta ordem:

### Nível A — 100% local

AnythingLLM, documentos, embeddings, modelo de linguagem, transcrição, logs e backups ficam no ambiente do escritório. Atualizações e suporte são controlados separadamente.

É a opção com menor exposição a provedores externos, mas exige hardware, segurança física, equipe, backup, patching, monitoramento e aceitação de qualidade/latência.

### Nível B — híbrido com dados minimizados

A recuperação documental acontece localmente. Antes de chamar a API, a MOB remove ou mascara identificadores, envia somente o contexto mínimo e usa um provedor com não treinamento, retenção reduzida e contrato empresarial.

Isso pode ser adequado para tarefas de redação não sensíveis, classificação interna de baixo risco ou documentos já autorizados, mas não deve ser o padrão para estratégia processual, segredos, dados sensíveis ou documentos sob sigilo.

### Nível C — cloud empresarial

A empresa usa um serviço empresarial com controles e contrato específicos. Deve ser adotado somente depois de avaliação de fornecedor, DPA, transferência internacional, retenção e segurança.

### Nível D — API pública ou conta de consumidor

Não recomendo para dados jurídicos confidenciais. O fato de o usuário pagar uma assinatura individual não cria automaticamente as garantias de um contrato empresarial.

## 7. Tailscale e Cloudflare Tunnel

### Tailscale

A documentação do Tailscale informa que o plano de dados usa WireGuard para criptografia ponta a ponta. Mesmo quando a conexão passa por um relay DERP, o relay encaminha pacotes WireGuard já criptografados e não acessa o conteúdo não criptografado. [4]

Isso protege o tráfego entre o dispositivo do advogado e a Box, mas não resolve:

- autenticação fraca no AnythingLLM;
- usuário autorizado acessando documentos indevidos;
- malware no notebook do advogado;
- servidor comprometido;
- logs locais expostos;
- credenciais roubadas;
- uso de uma API externa pela própria Box.

Para o escritório, prefira Tailscale com ACLs por grupo e dispositivo, MFA na identidade, aprovação de novos dispositivos, tags, logs e acesso somente à porta interna do AnythingLLM. Não anuncie a rede inteira se o advogado precisa apenas de um serviço.

### Cloudflare Tunnel

A documentação da Cloudflare informa que o Tunnel cria conexões de saída do `cloudflared` para a rede Cloudflare, sem necessidade de IP público roteável. Isso reduz exposição direta do escritório, mas o tráfego passa pela infraestrutura Cloudflare para chegar à origem. [5]

Para uma aplicação jurídica sensível, eu preferiria Tailscale como acesso privado de usuários autorizados. Usaria Cloudflare Tunnel somente se houver necessidade de acesso web controlado, com Cloudflare Access, MFA, políticas por identidade, TLS até a origem quando aplicável, ausência de cache, logs revisados e contrato que trate a Cloudflare como fornecedor/suboperador relevante.

Nenhum túnel torna a aplicação pública “100% local”. Ele protege o caminho e controla acesso, mas introduz um provedor de rede, metadados, identidade e logs. O processamento do modelo pode continuar local, mas a confidencialidade operacional precisa considerar esse terceiro.

## 8. Dimensionamento: 20–50 advogados

O número de usuários cadastrados não é o mesmo que o número de gerações simultâneas. A pergunta essencial é:

- quantos estarão conectados;
- quantos estarão fazendo perguntas ao mesmo tempo;
- quantos enviarão documentos grandes;
- qual será o tamanho do contexto;
- qual modelo será usado;
- qual tempo de resposta é aceitável;
- quantos usarão transcrição ou agentes;
- quantos estarão remotos.

Para planejar, eu testaria três cenários:

- **normal:** 5 gerações simultâneas;
- **pico:** 10 a 15 gerações simultâneas;
- **estresse:** 20 ou mais gerações simultâneas, com fila controlada.

Não projetaria 50 gerações simultâneas em uma única GPU de 24 GB. O acesso remoto não aumenta a capacidade de inferência, mas pode aumentar o número de solicitações concorrentes e o tamanho de uploads.

## 9. Máquina mínima prática

### Opção de laboratório ou escritório pequeno

Para até 20 usuários, poucos simultâneos e modelos locais pequenos:

- CPU de 12–16 núcleos;
- 64 GB de RAM;
- GPU de 24 GB de VRAM;
- 2 TB NVMe para sistema, containers, modelos e índice;
- 2–4 TB adicionais para documentos e backups locais;
- rede de 1 GbE;
- nobreak e ventilação;
- AnythingLLM e inferência no mesmo host.

Uma RTX 4090 possui 24 GB de memória, mas é uma GPU de consumo, sem a mesma orientação profissional de ECC e servidor de uma placa de workstation. A NVIDIA informa 24 GB e consumo total de placa de 450 W para a RTX 4090 Founders Edition. [8]

Eu não venderia essa configuração como “50 advogados em horário de pico”. Ela é adequada para piloto, 10–20 usuários cadastrados e baixa concorrência, com fila quando o uso subir.

### Configuração recomendada para 20–50 usuários

Para um escritório com 20–50 advogados, eu separaria a aplicação da inferência:

**Nó de controle e dados:**

- CPU de 8–16 núcleos;
- 64–128 GB de RAM;
- 2 SSDs NVMe empresariais em espelho para sistema e dados críticos;
- 4–8 TB de armazenamento adicional em RAID ou NAS;
- AnythingLLM, autenticação, banco vetorial, documentos, proxy local e monitoramento;
- sem necessidade de GPU forte.

**Nó de inferência local:**

- CPU de 16–24 núcleos;
- 128 GB de RAM;
- 1 GPU profissional com 48 GB de VRAM para modelos quantizados de aproximadamente 14B–32B, ou dois nós menores;
- 2 TB NVMe para modelos;
- fonte, refrigeração e nobreak dimensionados para carga contínua;
- servidor de inferência compatível com API, separado do AnythingLLM.

A RTX 6000 Ada oferece 48 GB de memória GDDR6 com ECC e consumo máximo informado de 300 W. A L40S também oferece 48 GB com ECC, mas é uma placa de data center com consumo máximo informado de 350 W e requisitos de chassi, refrigeração e alimentação próprios. [6] [7]

Uma GPU de 48 GB não garante 20 ou 50 respostas simultâneas. Ela dá margem para modelos maiores e contextos mais longos. A capacidade precisa ser medida com o modelo escolhido, quantização, tamanho de contexto e número de tokens por resposta.

### Para pico real de 20–50 usuários

Se “quase todos usam ao mesmo tempo” significar 20 ou mais gerações simultâneas, recomendo:

- dois nós de inferência, cada um com GPU de 48 GB;
- roteador ou gateway que distribua solicitações;
- limite de concorrência por usuário e por grupo;
- fila com posição e previsão de espera;
- modelo rápido para consultas simples;
- modelo maior apenas para tarefas aprovadas;
- limite de tamanho de arquivo e contexto;
- cancelamento de geração abandonada;
- monitoramento de VRAM, fila, latência e erros;
- caminho de contingência, como um provedor externo autorizado para dados não sensíveis.

Para um escritório que exige continuidade, dois servidores médios são mais defensáveis do que um único equipamento enorme. Se um servidor falhar, a operação pode continuar em capacidade reduzida.

## 10. Modelo local adequado para advocacia

Não começaria com um modelo de 70B como padrão. Um modelo quantizado de 14B ou 32B, com bom contexto e prompt de sistema bem configurado, pode ser suficiente para busca, resumo e rascunho, desde que a base documental e a avaliação sejam boas.

Um modelo de 70B aumenta memória, latência e custo. Em quantização, pode exigir mais de 48 GB quando se considera pesos, cache de contexto e concorrência. Para 20–50 advogados, é mais útil ter:

- um modelo rápido para busca e rascunho;
- um modelo mais forte para tarefas complexas;
- um sistema de filas;
- RAG com fontes e versionamento;
- revisão humana;
- testes de regressão;

do que disponibilizar um único modelo enorme para todos.

## 11. Arquitetura recomendada para o escritório

```text
Advogados locais/remotos
          |
   Tailscale ACL / VPN
          |
   Proxy interno + MFA
          |
   Nó AnythingLLM
   - usuários/workspaces
   - RAG e fontes
   - documentos/índices
   - logs mínimos
          |
   Gateway interno de inferência
   - fila
   - rate limit
   - roteamento por modelo
          |
   Nó GPU 1  <---->  Nó GPU 2
   modelo rápido       modelo maior

Backup criptografado separado
+ monitoramento
+ restauração testada
```

Não exponha Ollama, vLLM, banco vetorial ou painel administrativo diretamente à internet. Apenas o gateway ou AnythingLLM deve receber acesso conforme a política definida.

## 12. Controles obrigatórios para uma MOB Box jurídica

Antes de colocar documentos reais, implemente:

- contas individuais;
- MFA na VPN e, quando possível, na aplicação;
- ACL por grupo, setor e tipo de documento;
- workspaces separados para clientes ou áreas;
- logs de login, upload, acesso, aprovação e exclusão;
- não treinamento com dados do cliente;
- política de retenção e eliminação;
- criptografia em repouso e em backup;
- backup 3-2-1 quando possível;
- restauração testada;
- firewall;
- atualização e rollback;
- proteção física da máquina;
- inventário de APIs e suboperadores;
- bloqueio de chamadas externas por padrão;
- alerta visível de revisão humana;
- limite de tamanho e tipo de upload;
- resposta “não encontrei base suficiente”;
- revisão de prompt injection em documentos;
- procedimento de incidente;
- teste de carga antes da entrega.

## 13. Como prometer segurança ao cliente

Evite:

> “A IA é 100% segura.”

Use:

> “Na configuração local contratada, documentos, embeddings e inferência permanecem no ambiente do escritório. O acesso é restrito por identidade e rede, com backup e suporte controlado. Chamadas externas ficam desabilitadas por padrão. Se o cliente autorizar arquitetura híbrida, a ficha técnica informará quais dados podem ser enviados, para qual fornecedor, com qual retenção e sob quais termos.”

Para o modelo híbrido:

> “A base documental permanece local, mas determinados trechos necessários à geração podem ser enviados ao provedor externo aprovado. O cliente recebe a lista de fornecedores, finalidade, localização, retenção e controles aplicáveis antes da ativação.”

## 14. Recomendação final

Para um escritório jurídico de 20–50 advogados, eu ofereceria duas versões:

**MOB Box Jurídica Local:** dois nós, AnythingLLM local, embedder local, modelo local, Tailscale privado, sem API externa por padrão. Começaria com uma GPU de 48 GB em um nó de inferência e deixaria a segunda como expansão ou alta disponibilidade, mas só venderia capacidade de pico depois de um teste real.

**MOB Box Jurídica Híbrida Controlada:** base documental e embeddings locais, API empresarial aprovada para geração de dados não sensíveis ou minimizados, com ZDR/controles contratuais confirmados e rotas bloqueadas para dados sensíveis.

Eu não colocaria DeepSeek API como padrão jurídico. Para uma arquitetura híbrida, avaliaria primeiro OpenAI API empresarial com os controles de retenção aprovados, Anthropic API com ZDR habilitado, Azure OpenAI ou Bedrock, sempre com DPA e validação do endpoint. Para casos realmente sigilosos, a única forma de eliminar a dúvida sobre o provedor de modelo é manter a inferência local — lembrando que ainda será necessário proteger o host, os backups, a rede, os notebooks e o acesso remoto.

## Referências

[1]: https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html "DeepSeek — Privacy Policy"
[2]: https://developers.openai.com/api/docs/guides/your-data "OpenAI API — Data controls"
[3]: https://platform.claude.com/docs/en/manage-claude/api-and-data-retention "Anthropic — API and data retention"
[4]: https://tailscale.com/docs/concepts/tailscale-encryption "Tailscale — Encryption"
[5]: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/ "Cloudflare — Tunnel"
[6]: https://www.nvidia.com/en-us/products/workstations/rtx-6000/ "NVIDIA — RTX 6000 Ada specifications"
[7]: https://www.nvidia.com/en-us/data-center/l40s/ "NVIDIA — L40S specifications"
[8]: https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/ "NVIDIA — GeForce RTX 4090 specifications"
