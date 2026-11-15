# MOB Box | Orçamento de hardware, GPUs e capacidade de modelos locais

**Data de referência:** 14 de novembro de 2026  
**Escopo:** computadores com RTX 3060 12 GB, RTX 3090 24 GB e RTX 2080 Ti original de 11 GB para AnythingLLM, inferência local e serviços auxiliares.

## Conclusão direta

Para a MOB montar um laboratório e validar o produto, eu começaria com **1x RTX 3060 12 GB**, 64 GB de RAM e uma arquitetura que aceite API externa somente quando autorizada. O custo estimado completo fica em torno de **R$ 11.825**, já incluindo nobreak, montagem profissional e 10% de reserva.

Para uma Box local com mais margem para modelos maiores, a melhor relação entre capacidade e complexidade é **1x RTX 3090 24 GB**, com custo estimado de **R$ 28.710**. Para um escritório que realmente precise de mais concorrência ou de modelos de 14B–32B, **2x RTX 3090** é mais defensável que três placas, mas o conjunto já chega a aproximadamente **R$ 45.650** e exige gabinete, fonte, refrigeração e testes específicos.

Eu não trataria **3x RTX 3090** como produto padrão da MOB. É uma configuração experimental, com cerca de **R$ 77.000** de custo estimado, consumo alto, grande produção de calor e dependência de uma plataforma com muitas linhas PCIe. Ela pode ser útil em laboratório ou para um cliente com demanda comprovada, mas não deve ser prometida como “50 usuários simultâneos” sem teste de carga real.

## Correção sobre a RTX 2080 Ti de 22 GB

A RTX 2080 Ti original possui **11 GB de GDDR6**, não 22 GB. A especificação oficial dessa geração não deve ser confundida com anúncios de placas modificadas. Existem 2080 Ti alteradas por substituição de chips de memória, mas elas não são equivalentes a uma placa original: podem ter BIOS, memória, solda, refrigeração, compatibilidade e garantia incertas.

Por isso, a MOB não deveria usar uma “2080 Ti 22 GB” como base de uma Box jurídica ou de uma instalação comercial sem um processo próprio de validação, garantia e substituição. No orçamento, a 2080 Ti aparece apenas como referência da alternativa usada original de 11 GB.

## Premissas do orçamento

Os preços são estimativas para o Brasil e devem ser reconfirmados antes da compra. A RTX 3060 12 GB foi encontrada em referências de varejo e anúncios nacionais na faixa aproximada de **R$ 2.000–R$ 2.700**, dependendo de marca, garantia e condição. A RTX 3090 usada apareceu em anúncios em torno de **R$ 10.000–R$ 12.000**, com kits de duas placas acima disso. Esses anúncios são referências de mercado, não uma cotação garantida nem recomendação de vendedor. [1] [2]

Para tornar os cenários comparáveis, o cálculo considera:

- sistema Linux, Docker, AnythingLLM e servidor de inferência separado quando necessário;
- CPU de classe Ryzen 7/Ryzen 9 nos cenários de uma ou duas GPUs;
- plataforma Threadripper ou equivalente no cenário de três RTX 3090;
- 64 GB de RAM no cenário compacto, 128 GB nas configurações Pro e 256 GB no cenário experimental;
- SSD NVMe para sistema, containers, índices e modelos;
- armazenamento adicional para documentos, exportações e cópias locais;
- gabinete com fluxo de ar, não gabinete gamer fechado e compacto;
- fonte dimensionada para carga contínua e picos, com cabos separados para as GPUs;
- nobreak senoidal ou solução equivalente dimensionada para a carga;
- montagem, teste de estabilidade, teste de VRAM e documentação;
- 10% de reserva para frete, pequenas diferenças de preço, adaptadores, cabos, substituições e ajustes de montagem.

A reserva não substitui impostos, custo financeiro de parcelamento, seguro, deslocamento de instalação ou margem comercial. Esses itens precisam entrar na proposta final conforme o regime tributário e a forma de venda da MOB.

## Resumo dos cenários

| Configuração | VRAM física instalada | Custo estimado completo | Carga elétrica estimada | Energia mensal* |
|---|---:|---:|---:|---:|
| 1x RTX 3060 12 GB | 12 GB | **R$ 11.825** | 440 W | R$ 81 |
| 2x RTX 3060 12 GB | 24 GB | **R$ 19.580** | 610 W | R$ 113 |
| 1x RTX 3090 24 GB | 24 GB | **R$ 28.710** | 620 W | R$ 115 |
| 2x RTX 3090 24 GB | 48 GB | **R$ 45.650** | 970 W | R$ 179 |
| 3x RTX 3090 24 GB | 72 GB | **R$ 77.000** | 1.480 W | R$ 274 |
| 1x RTX 2080 Ti 11 GB | 11 GB | **R$ 14.575** | 520 W | R$ 96 |
| 2x RTX 2080 Ti 11 GB | 22 GB | **R$ 24.695** | 770 W | R$ 142 |

\* Estimativa de uso médio de 8 horas por dia, 22 dias por mês, a R$ 1,05/kWh. É uma referência de operação e não inclui ar-condicionado, perdas adicionais do nobreak ou infraestrutura elétrica do imóvel.

A RTX 3060 oficial tem 12 GB de GDDR6, potência gráfica publicada de 170 W e recomendação de fonte de 550 W. A RTX 3090 oficial tem 24 GB de GDDR6X e potência de placa de 350 W, além de ser uma placa fisicamente grande e de três slots em muitos modelos. [3] [4]

## Orçamento detalhado por componente

### MOB Box Compact — 1x RTX 3060 12 GB

| Componente | Premissa | Estimativa |
|---|---|---:|
| GPU | RTX 3060 12 GB, nova ou usada com garantia | R$ 2.200 |
| CPU | Ryzen 7 de 8 núcleos ou equivalente | R$ 1.700 |
| Placa-mãe | B650/B550 de boa procedência | R$ 1.100 |
| Memória | 64 GB | R$ 1.000 |
| SSD NVMe | 2 TB | R$ 850 |
| Disco de dados | 2 TB adicional | R$ 550 |
| Fonte | 750 W de boa qualidade | R$ 650 |
| Gabinete | ATX com fluxo de ar | R$ 500 |
| Refrigeração | Cooler de CPU e ventoinhas adicionais | R$ 250 |
| Nobreak | 1.500 VA, preferencialmente senoidal | R$ 900 |
| Montagem e testes | Burn-in, instalação, documentação e aceite | R$ 500 |
| Rede e acessórios | Cabos, adaptadores e organização | R$ 300 |
| Reserva técnica | 10% dos itens acima | R$ 1.075 |
| **Total estimado** |  | **R$ 11.825** |

Esta Box é adequada para laboratório, demonstrações, transcrição local moderada, embeddings e um modelo pequeno ou médio. Ela não deve ser vendida como servidor para dezenas de gerações simultâneas.

### MOB Box Econômica — 2x RTX 3060 12 GB

| Componente | Premissa | Estimativa |
|---|---|---:|
| GPUs | 2x RTX 3060 12 GB | R$ 4.400 |
| CPU | Ryzen 9 de 12 núcleos ou equivalente | R$ 2.400 |
| Placa-mãe | X670E/B650E com dois slots utilizáveis | R$ 1.800 |
| Memória | 128 GB | R$ 2.000 |
| SSD NVMe | 2 TB | R$ 850 |
| Disco de dados | 4 TB total adicional | R$ 1.000 |
| Fonte | 1.000 W de boa qualidade | R$ 900 |
| Gabinete | Full tower com espaço entre GPUs | R$ 900 |
| Refrigeração | Cooler, ventoinhas e melhoria de fluxo | R$ 600 |
| Nobreak | 2.000 VA | R$ 1.500 |
| Montagem e testes | Teste de duas GPUs e estabilidade | R$ 800 |
| Rede e acessórios |  | R$ 300 |
| Reserva técnica | 10% | R$ 1.780 |
| **Total estimado** |  | **R$ 19.580** |

A vantagem aqui não é transformar automaticamente as duas placas em uma GPU de 24 GB. É poder executar dois workers, separar um modelo de geração de um serviço de transcrição ou embeddings, ou atender tarefas independentes. Para um único modelo grande, o ganho depende do runtime e da comunicação entre GPUs.

### MOB Box Pro — 1x RTX 3090 24 GB

| Componente | Premissa | Estimativa |
|---|---|---:|
| GPU | RTX 3090 usada, testada e com garantia contratual | R$ 11.000 |
| CPU | Ryzen 9 de 16 núcleos ou equivalente | R$ 3.200 |
| Placa-mãe | X670E ou equivalente | R$ 1.800 |
| Memória | 128 GB | R$ 2.000 |
| SSD NVMe | 2 TB | R$ 850 |
| Disco de dados | 4 TB total adicional | R$ 1.000 |
| Fonte | 1.000–1.200 W, com cabos dedicados | R$ 1.100 |
| Gabinete | Full tower de alto fluxo | R$ 900 |
| Refrigeração | Cooler, ventoinhas e controle térmico | R$ 700 |
| Nobreak | 2.000 VA | R$ 2.000 |
| Montagem e testes | Inclui teste de carga e VRAM | R$ 900 |
| Rede e acessórios |  | R$ 300 |
| Reserva técnica | 10% | R$ 2.610 |
| **Total estimado** |  | **R$ 28.710** |

Este é o cenário que eu usaria como referência para uma Box local mais forte. Os 24 GB permitem trabalhar com modelos quantizados maiores e contextos mais confortáveis que a RTX 3060, mas não eliminam fila, latência ou limites de concorrência.

### MOB Box Pro — 2x RTX 3090 24 GB

| Componente | Premissa | Estimativa |
|---|---|---:|
| GPUs | 2x RTX 3090 usadas, do mesmo lote quando possível | R$ 22.000 |
| CPU | Ryzen 9 de 16 núcleos ou equivalente | R$ 3.200 |
| Placa-mãe | Plataforma com dois slots mecanicamente adequados | R$ 2.400 |
| Memória | 128 GB | R$ 2.000 |
| SSD NVMe | 2 TB | R$ 1.000 |
| Disco de dados | 4–6 TB total adicional | R$ 1.500 |
| Fonte | 1.600 W de alta qualidade | R$ 2.000 |
| Gabinete | Full tower ou chassis workstation | R$ 1.500 |
| Refrigeração | Solução de alto fluxo, sem bloquear entradas | R$ 1.000 |
| Nobreak | Cerca de 3.000 VA | R$ 2.800 |
| Montagem e testes | Teste multi-GPU e carga contínua | R$ 1.200 |
| Rede e acessórios |  | R$ 400 |
| Reserva técnica | 10% | R$ 4.150 |
| **Total estimado** |  | **R$ 45.650** |

Duas RTX 3090 são a alternativa mais realista entre as configurações multi-GPU acessíveis. Ainda assim, muitas 3090 têm três slots e descarregam ar quente dentro do gabinete. A compra deve ser feita somente depois de confirmar dimensões, distância entre slots, conectores de energia, ventilação e capacidade elétrica do local.

### MOB Box Experimental — 3x RTX 3090 24 GB

| Componente | Premissa | Estimativa |
|---|---|---:|
| GPUs | 3x RTX 3090 usadas e validadas | R$ 33.000 |
| CPU | Threadripper ou plataforma com mais linhas PCIe | R$ 8.000 |
| Placa-mãe | Workstation/TRX50 ou equivalente | R$ 5.000 |
| Memória | 256 GB | R$ 5.000 |
| SSD NVMe | 2 TB | R$ 1.200 |
| Disco de dados | 6 TB total adicional | R$ 2.000 |
| Fonte | Cerca de 2.000 W, conforme plataforma e instalação | R$ 3.000 |
| Gabinete/chassis | Workstation de grande volume | R$ 2.500 |
| Refrigeração | Ventilação reforçada e monitoramento térmico | R$ 2.000 |
| Nobreak | Cerca de 5.000 VA ou projeto elétrico dedicado | R$ 5.000 |
| Montagem e testes | Projeto especial, burn-in e validação | R$ 2.000 |
| Rede e acessórios |  | R$ 500 |
| Reserva técnica | 10% | R$ 7.000 |
| **Total estimado** |  | **R$ 77.000** |

Este cenário pode exigir circuito elétrico dedicado. Uma carga estimada de 1,48 kW no computador não representa o pico absoluto de todos os componentes nem o consumo de ar-condicionado. Também não é prudente instalar três placas largas em uma placa-mãe comum apenas usando risers: isso aumenta pontos de falha, reduz desempenho e dificulta o suporte remoto.

### Referência — RTX 2080 Ti original de 11 GB

A referência calculada fica em aproximadamente **R$ 14.575 para uma placa** e **R$ 24.695 para duas placas**, considerando unidades usadas e os demais componentes dimensionados para a geração. Esses valores podem parecer atraentes, mas a idade da plataforma e a limitação de 11 GB reduzem a utilidade para modelos maiores.

Uma 2080 Ti original pode rodar modelos de 7B–8B quantizados com mais conforto que placas menores, mas não é uma boa base para 14B ou 32B em produção. A alternativa modificada de 22 GB não deve entrar no catálogo padrão da MOB.

## Quais modelos locais cabem em cada configuração

Os nomes dos modelos mudam rapidamente. A tabela abaixo deve ser lida como capacidade aproximada para modelos de linguagem quantizados, com contexto moderado. A memória necessária não é apenas o tamanho dos pesos: também entram o cache KV, o contexto, o runtime, embeddings, overhead e o número de solicitações simultâneas.

| Configuração | Uso local razoável | Uso possível, mas com ressalvas | O que eu não venderia como promessa |
|---|---|---|---|
| 1x RTX 3060 12 GB | Modelos 3B–8B em Q4/Q5; Llama, Qwen ou Mistral pequenos; Whisper moderado | 14B em Q4 com contexto controlado e algum offload para RAM | 32B com boa concorrência; 70B |
| 2x RTX 3060 12 GB | Dois modelos/serviços separados; LLM + Whisper; LLM + embeddings | 14B dividido entre GPUs se o runtime suportar, com perda de desempenho | Tratar como uma única VRAM transparente de 24 GB |
| 1x RTX 3090 24 GB | 7B–14B com bom conforto; 20B–32B quantizado em cenários controlados | 32B com contexto e concorrência limitados | 70B multiusuário |
| 2x RTX 3090 24 GB | 14B–32B quantizado com mais margem; dois workers independentes | 70B Q4 em modo experimental e com contexto/concor­rência baixos | Prometer 20–50 gerações simultâneas |
| 3x RTX 3090 24 GB | 32B quantizado com margem; múltiplos workers e serviços | 70B quantizado com tensor parallel, sujeito a latência e ajuste fino | Alta disponibilidade, silêncio térmico ou operação simples |
| 1x RTX 2080 Ti 11 GB | 3B–8B quantizado | 14B muito comprimido ou com offload | 32B local confortável |

Modelos de 7B–8B quantizados são a zona mais confortável para 8–12 GB. Modelos de 14B quantizados normalmente entram na faixa de aproximadamente 10–16 GB, dependendo do contexto e do formato. Modelos de 32B quantizados frequentemente precisam de aproximadamente 20–30 GB ou mais. Um modelo de 70B pode até ter pesos comprimidos que caibam em uma combinação de placas, mas o cache e a concorrência tornam essa configuração experimental.

Para a MOB, eu priorizaria um modelo rápido de 7B–14B para perguntas, classificação, busca e rascunhos, e reservaria um modelo maior para tarefas específicas. Em advocacia, RAG com fontes, controle de versão, resposta “não encontrei base suficiente” e revisão humana normalmente agregam mais valor que simplesmente oferecer o maior modelo possível.

## VRAM não soma automaticamente

Duas RTX 3090 possuem 48 GB físicos no total, mas cada placa continua tendo seu próprio espaço de 24 GB. O sistema operacional não transforma isso automaticamente em uma única memória de 48 GB.

Para executar um único modelo distribuído, o servidor de inferência precisa suportar paralelismo, como tensor parallel ou pipeline parallel. Exemplos de caminhos que podem ser avaliados são llama.cpp, vLLM e outros runtimes compatíveis com o modelo escolhido. O suporte concreto depende de quantização, formato, versão do runtime, conexão PCIe, tamanho de contexto e estratégia de carregamento.

O NVLink da RTX 3090 também não deve ser descrito ao cliente como “VRAM compartilhada automática”. Ele pode ajudar em determinados fluxos compatíveis, mas não substitui um runtime multi-GPU bem configurado.

No AnythingLLM, uma estratégia frequentemente mais simples é manter a interface e a base documental em um nó e usar um servidor de inferência separado. Duas GPUs podem então atender modelos diferentes ou workers independentes. Essa abordagem tende a ser mais previsível para suporte do que obrigar toda instalação a executar um único modelo dividido entre placas.

## Fonte, refrigeração e energia

A fonte deve ser escolhida pelo conjunto, não apenas pela soma do TDP. É necessário considerar picos de consumo, eficiência, número de conectores PCIe, distribuição dos cabos e operação contínua.

Como regra prática de projeto, eu usaria:

- **1x RTX 3060:** fonte de 750 W de boa qualidade;
- **2x RTX 3060:** fonte de 1.000 W;
- **1x RTX 3090:** fonte de 1.000–1.200 W;
- **2x RTX 3090:** fonte de aproximadamente 1.600 W;
- **3x RTX 3090:** projeto de 2.000 W ou superior, validado com a plataforma e a instalação elétrica.

Esses números não substituem a conferência do modelo exato da placa. Uma RTX 3090 de três slots pode ter comportamento térmico muito diferente de outra com watercooler ou blower. Para uso profissional, eu faria teste de pelo menos duas horas com carga de inferência, monitoraria temperatura de GPU, hotspot, memória, clock, erros CUDA e estabilidade do serviço.

O nobreak deve proteger o equipamento e permitir desligamento controlado. Ele não precisa manter horas de inferência; precisa absorver oscilações e dar tempo para o sistema encerrar sem corromper documentos, índices e bancos. Para duas ou três 3090, um projeto elétrico dedicado pode ser mais importante que aumentar somente a capacidade nominal do nobreak.

## Riscos de comprar RTX 3090 usada

A RTX 3090 usada pode ter passado por mineração, operação em temperatura elevada, troca de pads térmicos, reparo de memória ou alteração de BIOS. O anúncio “funciona em jogos” não é suficiente para uma Box de produção.

Antes de aceitar uma unidade, eu exigiria:

1. identificação do modelo, número de série e procedência;
2. nota ou comprovante de compra quando disponível;
3. garantia escrita de funcionamento e prazo de devolução;
4. teste de VRAM e carga sustentada, não apenas benchmark curto;
5. inspeção de conectores, backplate, parafusos, sinais de reparo e ventiladores;
6. registro das temperaturas e dos erros durante o burn-in;
7. teste simultâneo de todas as placas no caso de duas ou três GPUs;
8. uma placa reserva ou SLA que preveja substituição.

Para o produto comercial, a MOB deve evitar vender hardware usado sem deixar claro no contrato o estado, a garantia, os limites de desempenho e a política de substituição.

## Preço de venda sugerido para a MOB

Os valores abaixo são referências de preço comercial calculadas com margem bruta aproximada de 30% a 35% sobre o custo estimado completo. Eles não incluem automaticamente impostos específicos, deslocamento, customizações, mensalidade de gestão ou consumo de API.

| Configuração | Custo estimado | Faixa inicial de venda com margem |
|---|---:|---:|
| 1x RTX 3060 | R$ 11.825 | **R$ 16.900–18.200** |
| 2x RTX 3060 | R$ 19.580 | **R$ 28.000–30.100** |
| 1x RTX 3090 | R$ 28.710 | **R$ 41.000–44.200** |
| 2x RTX 3090 | R$ 45.650 | **R$ 65.200–70.300** |
| 3x RTX 3090 | R$ 77.000 | **R$ 110.000–118.500** |

Além do hardware, a proposta deve separar claramente:

- implantação do AnythingLLM e Docker;
- configuração de usuários, workspaces e permissões;
- ingestão e organização da base documental;
- seleção e validação dos modelos;
- testes de aceite com o workflow do cliente;
- treinamento;
- backup, monitoramento e suporte mensal;
- custos de API, caso a arquitetura seja híbrida;
- deslocamento, instalação elétrica e eventuais upgrades.

A margem do equipamento não deve ser a única fonte de lucro da MOB. Em especial, uma Box com duas ou três GPUs pode gerar margem negativa se a empresa absorver visitas, garantia, falhas de hardware, consumo de API e suporte sem cobrar por isso.

## Recomendação comercial por público

### Laboratório da MOB

Use **1x RTX 3060 12 GB** ou uma 3090 usada muito bem validada se o orçamento permitir. O objetivo é testar workflows, medir qualidade, criar a imagem mestre e validar backup, restauração, atualização e monitoramento.

### PME ou escritório pequeno

Use **1x RTX 3060** quando o modelo for pequeno e a arquitetura puder usar fila ou modo híbrido controlado. Use **1x RTX 3090** quando o requisito for maior privacidade local, contexto mais longo ou modelo de 14B–32B quantizado.

### Escritório jurídico com 20–50 usuários cadastrados

Não dimensione pelo número de contas, e sim por gerações simultâneas, tamanho de uploads e tempo de resposta. Uma Box com **1x RTX 3090** pode ser um piloto ou uma implantação de baixa concorrência. Para produção mais exigente, prefira separar o nó AnythingLLM/dados do nó de inferência.

**2x RTX 3090** pode ser um degrau razoável para um nó de inferência local, com fila, rate limiting e workers separados. Ainda assim, não venda a capacidade de 20 ou 50 respostas simultâneas sem um teste com o modelo, contexto e workflow contratados.

Para picos reais acima de 20 gerações simultâneas, dois nós de inferência médios, eventualmente com GPUs de 48 GB ou com uma arquitetura híbrida autorizada para dados não sensíveis, são mais defensáveis do que uma única máquina com três 3090.

### Configuração que eu não colocaria no catálogo padrão

Eu deixaria fora do catálogo padrão:

- RTX 2080 Ti “22 GB” modificada;
- três RTX 3090 sem teste elétrico e térmico do local;
- placa usada sem garantia ou teste de VRAM;
- promessa de “VRAM somada” sem runtime multi-GPU validado;
- promessa de “50 usuários simultâneos” baseada apenas na quantidade de VRAM;
- modelo de 70B como padrão de uma Box jurídica.

## Arquitetura técnica recomendada

Para a primeira versão comercial, a arquitetura deve manter AnythingLLM, documentos, embeddings e controles locais, com inferência local ou externa explicitamente identificada. O Docker não torna uma integração externa local: se trechos recuperados forem enviados a uma API, esses dados saem do escritório.

A configuração mais simples é:

```text
Usuários locais/remotos
        |
Tailscale ou acesso privado controlado
        |
AnythingLLM em Docker
- usuários e workspaces
- documentos e RAG
- fontes e histórico
        |
Servidor de inferência interno
- Ollama, llama.cpp, vLLM ou equivalente validado
- fila e limite de concorrência
        |
GPU(s) locais

Backup criptografado separado
+ monitoramento
+ teste de restauração
```

Não exponha Ollama, vLLM, banco vetorial ou painel administrativo diretamente à internet. O acesso remoto da MOB deve usar identidade individual, MFA quando disponível, ACLs, logs e revogação documentada.

## Decisão final para a MOB

Eu estruturaria o catálogo em três produtos:

1. **MOB Box Compact:** 1x RTX 3060, destinada a laboratório, PMEs e fluxos com modelos menores ou arquitetura híbrida autorizada.
2. **MOB Box Local Pro:** 1x RTX 3090, destinada a clientes que realmente precisam de inferência local mais capaz, com ênfase em 7B–14B e alguns cenários de 32B quantizado.
3. **MOB Box Multi-GPU:** 2x RTX 3090, vendida sob projeto e teste de aceite, para múltiplos workers ou modelos maiores com concorrência controlada.

Eu não lançaria a 3x RTX 3090 como produto de prateleira. Montaria uma unidade apenas para laboratório ou para um cliente que aceite o custo, a complexidade e o caráter experimental. A principal vantagem competitiva da MOB não será colocar o maior número de GPUs no gabinete, mas entregar uma solução que tenha fontes visíveis, dados segregados, permissões, backup restaurável, suporte controlado, modelo validado e expectativas de desempenho escritas no contrato.

## Referências

[1]: https://lista.mercadolivre.com.br/rtx-3060-12gb "Mercado Livre — listagens de RTX 3060 12 GB"

[2]: https://lista.mercadolivre.com.br/rtx-3090-usada "Mercado Livre — listagens de RTX 3090 usada"

[3]: https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3060-3060ti/ "NVIDIA — GeForce RTX 3060 specifications"

[4]: https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3090-3090ti/ "NVIDIA — GeForce RTX 3090 specifications"

[5]: https://docs.anythingllm.com/installation-docker/system-requirements "AnythingLLM — system requirements"

[6]: https://docs.anythingllm.com/installation-docker/local-docker "AnythingLLM — local Docker installation"

[7]: https://docs.anythingllm.com/installation-docker/quickstart "AnythingLLM — Docker quickstart"
