# NTR Mode — Main Story Design
## "Close Quarters: The Other Side"

---

## PREMISSA GERAL

Você chega como intercambista numa casa de hóspedes administrada por **Serena**, viúva há dois anos. A casa é tranquila, mas debaixo da superfície cada mulher vive presa numa relação que a diminui. Você não é herói — é alguém que percebe as rachaduras e decide explorar o que há dentro delas.

Diferente do "A Lot of Ways" (que usa o mistério do pai/USB drive como motor narrativo), aqui a **história principal** gira em torno de um **segredo da casa**: Serena esconde que o marido morreu deixando uma dívida enorme com Marcus, o "parceiro de negócios". Marcus usa essa dívida para controlar Serena e, por extensão, a casa inteira. Conforme o jogador avança com cada personagem, pedaços dessa verdade aparecem — cada mulher sabe um fragmento diferente, e juntar tudo desbloqueia o confronto final.

---

## ESTRUTURA MECÂNICA (espelhando A Lot of Ways)

### Por personagem:
- **6 quests (Q0–Q5)** — a cadeia principal de conquista
- **3 netorae quests (R0–R2)** — cenas do rival com a personagem (o jogador testemunha/descobre)
- **Eventos ambientais** — cenas passivas por corrupção/desejo
- **Conversas de telefone** — mensagens desbloqueadas após certas quests
- **Stats exigidos** — Fitness, Charisma, Confidence, Intelligence como gates

### Progressão global:
- **ntrIntroComplete** — flag setada após o jogador completar a intro NTR (conhecer todas as 4)
- Cada personagem tem **desire** (avanço voluntário) e **corruption** (influência do rival/ambiente)
- **Partner Influence** sobe automaticamente a cada dia — se o jogador demorar, os rivais avançam
- Tiers de status: Stranger → Curious → Wavering → Torn → Falling → Surrendered → Corrupted

---

## PERSONAGENS

### 1. SERENA (Landlady)
**Rival:** Marcus — parceiro de negócios do falecido marido
**Localização base:** Kitchen
**Cor:** #e8b0c8

**Arco narrativo:** Serena mantém a casa funcionando com uma calma que esconde desespero. Marcus cobra a dívida do marido com "favores" — ele aparece para jantar, traz presentes que ela não pediu, e age como se a casa fosse dele. Serena não é fraca — ela simplesmente não vê saída. O jogador oferece o que Marcus nunca deu: presença sem cobrança.

**Quests:**
| ID | Título | Local | Horário | Dia | Stat | Descrição |
|---|---|---|---|---|---|---|
| Q0 | "Late Plates" | kitchen | 20-23 | qualquer | — | Serena lava louça sozinha à noite. Você oferece ajuda. Ela recusa, depois aceita. Primeira conversa real. |
| Q1 | "The Envelope" | foyer | 8-11 | weekday | — | Você encontra um envelope de Marcus na porta. Serena vê você com ele e muda de expressão. Ela explica vagamente sobre "assuntos do marido". |
| Q2 | "Wine and Walls" | living_room | 21-23 | weekend | Charisma 3 | Serena bebe sozinha. Você senta ao lado. Ela fala sobre o marido pela primeira vez — não com saudade, mas com alívio. |
| Q3 | "Closed Door" | kitchen | 12-15 | weekday | — | Marcus está na cozinha quando você chega. A tensão é palpável. Serena pede que você fique. Marcus vai embora. Ela treme. *(Requer: usou item especial)* |
| Q4 | "The Debt" | kitchen | 20-23 | weekday | Confidence 5 | Serena conta a verdade sobre a dívida. Marcus a pressiona há dois anos. Ela mostra os documentos. O jogador pode reagir. |
| Q5 | "Her Kitchen" | kitchen | 22-24 | weekend | — | Final da cadeia. A cozinha é dela de novo. A porta está trancada — por escolha, não por medo. |

**Netorae (Rival):**
| ID | Título | Descrição |
|---|---|---|
| R0 | "Business Dinner" | O jogador passa pela cozinha e ouve Marcus falando com Serena em tom que não é profissional. |
| R1 | "The Visit" | Marcus aparece sem avisar. Serena o recebe com um sorriso ensaiado. O jogador observa pela fresta. |
| R2 | "Paid in Full" | Marcus cobra explicitamente. Serena resiste — ou não, dependendo do corruption level. |

---

### 2. KIRA (College Athlete)
**Rival:** Tyler — namorado possessivo
**Localização base:** park (manhã), gym (tarde)
**Cor:** #a8d8a0

**Arco narrativo:** Kira corre toda manhã no parque e treina à tarde na academia. Tyler a trata como troféu — aparece nos treinos, controla com quem ela fala, mas nunca corre ao lado dela. O jogador entra na vida dela pelo único lugar onde Tyler não a segue: a trilha de corrida às 6 da manhã.

**Quests:**
| ID | Título | Local | Horário | Dia | Stat | Descrição |
|---|---|---|---|---|---|---|
| Q0 | "Wrong Lane" | park | 6-9 | weekday | — | Você cruza o caminho de Kira na corrida. Ela quase te atropela. Primeira interação — direta e sem paciência. |
| Q1 | "Pace Yourself" | park | 6-9 | weekday | Fitness 3 | Ela te desafia a acompanhá-la. Você tenta, falha, ela ri pela primeira vez. |
| Q2 | "Water Break" | gym | 14-17 | weekday | — | Kira está na academia. Tyler está lá também, mas sai para atender o telefone. Janela curta — primeira conversa sem ele. |
| Q3 | "The Bleachers" | park | 16-20 | weekend | — | Kira treina sozinha no fim de semana. Tyler não aparece. Ela nota que você veio. *(Requer: usou item especial)* |
| Q4 | "Split Time" | park | 6-9 | weekday | Fitness 6 | Seis semanas correndo juntos. Ela parou de cronometrar. A trilha virou outra coisa. |
| Q5 | "Off the Record" | gym | 20-22 | weekend | — | A academia está fechando. Kira ficou. A conversa não é mais sobre corrida. |

**Netorae (Rival):**
| ID | Título | Descrição |
|---|---|---|
| R0 | "Trophy Case" | Tyler aparece no parque e agarra Kira pela cintura na frente de todos. Ela não reage. |
| R1 | "His Rules" | O jogador ouve Tyler ditando o horário de Kira pelo telefone. Ela obedece sem discutir. |
| R2 | "Game Day" | Tyler leva Kira a um evento. Ela sorri para as câmeras. O jogador vê a foto no telefone dela depois. |

---

### 3. SABRINA / VALENTINA (Exchange Student / Influencer)
**Rival:** Damon — ex-namorado e "manager"
**Localização base:** living_room / sabrina_room
**Cor:** #d8a0ff

**Arco narrativo:** Sabrina vive atrás de uma tela. Damon é seu ex que nunca saiu de cena — gerencia suas redes, marca ensaios fotográficos, controla sua imagem. Ela posta sorrindo, mas quando o ring light apaga, é outra pessoa. O jogador a encontra nos momentos sem câmera — no living room à noite, quando ela não está "online".

**Quests:**
| ID | Título | Local | Horário | Dia | Stat | Descrição |
|---|---|---|---|---|---|---|
| Q0 | "Behind the Filter" | living_room | 20-23 | qualquer | — | Sabrina está no sofá sem maquiagem. Ela se assusta quando você aparece — "Não me fotografa assim." Primeira conversa real. |
| Q1 | "When Damon Leaves" | sabrina_room | 11-14 | weekday | — | Damon sai do quarto dela. Ela está reorganizando roupas de ensaio. Você entra. Ela não te manda embora. |
| Q2 | "No Audience" | park | 16-20 | weekend | Charisma 3 | Sabrina no parque — sem telefone. Raro. Ela diz que Damon a proibiu de postar hoje. A conversa é sobre quem ela era antes das redes. |
| Q3 | "The Reshoot" | living_room | 21-23 | weekday | — | Ela pede ajuda com fotos. O ângulo muda. A sessão muda. *(Requer: usou item especial)* |
| Q4 | "Unfiltered" | sabrina_room | 14-17 | weekend | Confidence 5 | Ela deletou o app por 24h. Damon está furioso. Ela está no quarto, sem saber o que fazer com as mãos quando não está segurando o telefone. |
| Q5 | "Private Collection" | sabrina_room | 22-24 | weekend | — | Final. A câmera está desligada. O ring light está fora da tomada. Ela não precisa de audiência. |

**Netorae (Rival):**
| ID | Título | Descrição |
|---|---|---|
| R0 | "The Manager" | Damon aparece e dirige uma sessão de fotos com Sabrina. As poses são cada vez mais íntimas. O jogador observa. |
| R1 | "Brand Deal" | Sabrina recebe uma ligação de Damon exigindo conteúdo específico. Ela hesita mas obedece. |
| R2 | "Private Shoot" | O jogador encontra fotos no telefone de Sabrina que Damon mandou ela tirar. Ela não sabe que ele viu. |

---

### 4. HARPER (Neighbor, Engaged)
**Rival:** Derek — noivo emocionalmente distante
**Localização base:** market (dia), outside (fim de semana)
**Cor:** #a0c8e0

**Arco narrativo:** Harper gerencia o supermercado local e está noiva de Derek — um homem que esqueceu três aniversários seguidos. Ela é organizada, gentil, e gira o anel no dedo quando pensa em tirá-lo. O mercado é seu refúgio — até que alguém começa a aparecer por mais do que compras.

**Quests:**
| ID | Título | Local | Horário | Dia | Stat | Descrição |
|---|---|---|---|---|---|---|
| Q0 | "Regular" | market | 9-12 | weekday | — | Você vai ao mercado. Harper está no caixa. Conversa casual — ela nota que você é novo. |
| Q1 | "The Walk Home" | park | 17-20 | weekday | — | Harper caminha pelo parque depois do turno. Derek ia buscar, mas cancelou. Você a encontra. |
| Q2 | "Inventory Night" | market | 20-22 | weekday | Intelligence 3 | Harper está fazendo inventário sozinha. Você ajuda. Trabalham lado a lado em silêncio confortável. |
| Q3 | "The Ring" | park | 12-15 | weekend | — | Ela está sentada num banco girando o anel. Primeiro momento vulnerável real. *(Requer: usou item especial)* |
| Q4 | "After Closing" | market | 21-23 | weekday | Charisma 6 | O mercado fechou. Ela não foi embora. Você também não. |
| Q5 | "Not an Errand" | market | 8-10 | weekend | — | Sábado de manhã. O mercado está fechado. Ela te mandou mensagem pedindo para vir. Não é sobre trabalho. |

**Netorae (Rival):**
| ID | Título | Descrição |
|---|---|---|
| R0 | "Cancelled Again" | Derek liga cancelando o jantar. Harper desliga com o mesmo sorriso profissional que usa no trabalho. |
| R1 | "The Fiancé" | Derek aparece no mercado e age como dono — mexe nas coisas, dá ordens. Harper obedece sem expressão. |
| R2 | "Anniversary" | É o aniversário de noivado. Derek esqueceu. Harper comprou o próprio presente. O jogador encontra a sacola. |

---

## HISTÓRIA PRINCIPAL (Main Story Thread)

### Intro NTR (desbloqueia tudo)

A intro do modo NTR já existe no jogo — o jogador chega na casa e conhece Serena (que apresenta), depois as outras moradoras/vizinhas aparecem ao longo do primeiro dia. Ao final da intro:
- Flag `ntrIntroComplete` é setada
- Todas as quests Q0 são desbloqueadas
- O jogador pode explorar livremente

### Fragmentos da Verdade (Main Story Milestones)

Cada personagem revela um pedaço da história de Marcus/dívida em quests específicas:

| Quest | Fragmento revelado |
|---|---|
| Serena Q1 | O envelope — existe uma dívida |
| Harper Q2 | Harper já viu Marcus no mercado comprando coisas caras "na conta de Serena" |
| Kira Q2 | Tyler menciona que Marcus "ajuda" Serena e que é "melhor não se meter" |
| Sabrina Q1 | Damon conhece Marcus — eles têm negócios juntos |
| Serena Q4 | Serena revela tudo: a dívida, a pressão, o controle |

### Item Especial (equivalente ao "Father's Syringe")

No nosso jogo, o item que funciona como gate para as quests Q3+ é descoberto na **quest da Serena Q2**: durante a conversa com vinho, Serena menciona que o marido guardava algo no escritório que ela nunca abriu. O jogador pode investigar depois e encontrar **uma carta do marido** que revela que a dívida já foi paga — Marcus está blefando.

**Flag:** `foundHusbandLetter`
**Gate:** Q3 de todas as personagens requer esta flag

### Confronto Final (desbloqueia após completar Q5 de pelo menos 3 personagens)

O jogador confronta Marcus com a carta. Dependendo de quais Q5 completou, diferentes personagens aparecem para apoiá-lo. Marcus é expulso da vida de Serena. A casa é livre.

---

## CONVERSAS DE TELEFONE (Phone Messages)

Cada quest a partir de Q1 desbloqueia uma conversa no telefone. Estrutura:

```
Após Q1: Mensagem casual da personagem (primeiro contato)
Após Q2: Mensagem mais pessoal (revelação)
Após Q3: Mensagem íntima (primeira foto/vulnerabilidade)
Após Q4: Mensagem urgente (turning point)
Após Q5: Mensagem final (estabelecimento da relação)
```

### Exemplos:

**Kira após Q1:**
```
Kira: seis da manhã. pista do parque.
Kira: se não aguentar não me culpa
Jogador: tô lá.
Kira: veremos.
```

**Serena após Q3:**
```
Serena: Você ainda está acordado?
Serena: Marcus foi embora. Obrigada por ter ficado.
Serena: Eu não deveria estar mandando mensagem a essa hora.
Jogador: Deveria sim.
Serena: ...boa noite.
```

**Sabrina após Q2:**
```
Sabrina: o damon saiu
Sabrina: tô no parque pela primeira vez sem o celular dele rastreando
Sabrina: mentira. tô com o celular. mas o dele tá desligado
Jogador: Primeira vez?
Sabrina: parece que eu tô numa foto sem filtro. estranho.
```

**Harper após Q4:**
```
Harper: O mercado fechou há uma hora.
Harper: Eu ainda estou aqui.
Harper: Tem uma garrafa que o Derek nunca vai notar que sumiu.
Jogador: Já estou indo.
Harper: Não corra. Eu não vou a lugar nenhum.
```

---

## EVENTOS AMBIENTAIS (Ambient Scenes)

Cenas passivas que disparam baseadas em corrupção/desejo quando o jogador entra num cômodo com uma personagem. Exemplos:

**Serena (corrupção baixa):** "Serena está na cozinha, de costas. O vestido está mais justo do que o habitual. Ela se vira e sorri como se você não tivesse notado."

**Kira (desejo alto):** "Kira acabou de correr. Está apoiada no portão do parque, sem fôlego, a regata colada ao corpo. Ela não desvia o olhar quando te vê."

**Sabrina (corrupção média):** "Sabrina está deitada no sofá editando fotos. Quando você passa, ela vira a tela para você ver — mas não é a foto que estava editando."

**Harper (desejo alto):** "Harper está organizando prateleiras. Você pega algo que ela não alcança. Seus corpos ficam perto demais para ser acidente. Nenhum dos dois se move."

---

## ACTIONS (Cenas Adultas)

### Como funciona o sistema de actions

Uma **action** é uma sequência de vídeos curtos (mp4) intercalados com narração e diálogos que compõem uma cena sexual completa. Cada personagem tem múltiplas actions que desbloqueiam conforme a progressão das quests.

### Estrutura de pastas dos assets

```
assets/adult/[charName]/action[N]/
```

Onde:
- `[charName]` = nome da pasta do personagem (serena, kira, sabrina, Harper)
- `[N]` = número da action (1, 2, 3...)

### Convenção de nomes dos vídeos

```
[charname][posição].[ordem].mp4
```

- **posição**: nome descritivo da posição/ato (blowjob, missionary, doggy, cowgirl, cowgirlreverse, oral, etc.)
- **ordem**: número inteiro que define a SEQUÊNCIA em que os vídeos aparecem na action (1 = primeiro, 2 = segundo, etc.)

**Exemplos reais:**
```
serena/action1/serenablowjob.1.mp4      → 1º vídeo: blowjob
serena/action1/serenamissionary.2.mp4    → 2º vídeo: missionary

kira/action2/kiraBlowjob.1.mp4           → 1º vídeo
kira/action2/kiraMissionary.2.mp4         → 2º vídeo
kira/action2/kiraMissionarySquirt.3.mp4   → 3º vídeo
kira/action2/kiraDoggy.4.mp4              → 4º vídeo
kira/action2/kiraCowgirlSquirt.5.mp4      → 5º vídeo
kira/action2/kiraCowgirlReverse.6.mp4     → 6º vídeo
kira/action2/kirafacialCumshot.7.mp4      → 7º vídeo (final)
```

### Como referenciar no código (beats)

A função `videoSrc(videoId)` automaticamente adiciona o prefixo `assets/adult/`. Então no código, o caminho do vídeo é relativo a `assets/adult/`:

```javascript
{ speaker: "narrator", text: "Descrição da cena...", video: "serena/action2/serenablowjob.1.mp4" }
```

Se o arquivo NÃO tiver extensão, `videoSrc()` adiciona `.mp4` automaticamente:
```javascript
{ speaker: "narrator", text: "...", video: "serena/action1/serenablowjob.1" }
```

### Estrutura de uma action no código

Uma action é uma função que monta um array de **beats** (narração + vídeos + diálogos) e chama `playSequence()` ou `playSequenceWithReplies()`:

```javascript
function playSerenaAction2() {
  state.flags.serena_ntr_action2_seen = true;
  const beats = [
    // Beat narrativo de setup (sem vídeo)
    "narrator::Descrição da cena inicial...",
    // Diálogo entre personagens
    "serena::“Texto da Serena.”",
    "player::Resposta do jogador.",
    // Beat com vídeo — o vídeo toca enquanto a narração aparece
    { speaker: "narrator", text: "Descrição da posição...", video: "serena/action2/serenablowjob.1.mp4" },
    // Mais diálogos entre vídeos
    "serena::“Reação dela.”",
    // Próximo vídeo
    { speaker: "narrator", text: "Descrição...", video: "serena/action2/serenadoggy.2.mp4" },
    // ... continua até o último vídeo
    // Beat final de encerramento (sem vídeo)
    "narrator::A cena termina. Descrição do aftermath."
  ];
  playSequence(beats.map(parseCasualLine), () => {
    // callback quando termina — ex: setar flags, dar rewards
    grantBond("serena", 15, 5, 0);
    render();
  }, "Leave");
}
```

### Regras para escrever actions:

1. **Cada vídeo = um beat com `video:`** — a narração descreve o que o vídeo mostra
2. **A ordem dos beats com vídeo deve seguir a ordem numérica dos arquivos** (.1, .2, .3...)
3. **Entre vídeos, adicionar beats de diálogo** — reações, falas, pensamentos
4. **Primeiro e último blocos são narrativos** — setup e aftermath, sem vídeo
5. **Diálogos usam aspas curly Unicode** — `“` (") e `”` (") para abrir/fechar
6. **O tom da narração é em primeira pessoa (pensamento do protagonista) ou terceira pessoa (narrator)**
7. **Os textos das falas e narrações devem ser em inglês**

### Assets existentes por personagem:

**SERENA** (3 actions):
| Action | Vídeos (em ordem) |
|---|---|
| action1 | serenablowjob.1 → serenamissionary.2 |
| action2 | serenablowjob.1 → serenadoggy.2 → serenacowgirl.3 |
| action3 | serenablowjob.1 (1) → serenamissionary.2 → serenacowgirl.3 → serenacowgirlCreampie.4 |

**KIRA** (3 actions):
| Action | Vídeos (em ordem) |
|---|---|
| action1 | kiraOral.1 → kiraCowgirlReverse.2 → kira69.3 / kiraCowgirl.3 → kiradoggy.4 → kiradeladoCreampie.5 |
| action2 | kiraBlowjob.1 → kiraMissionary.2 → kiraMissionarySquirt.3 → kiraDoggy.4 → kiraCowgirlSquirt.5 → kiraCowgirlReverse.6 → kirafacialCumshot.7 |
| action3 | kiraBoquete.1 → kiracowgirl.2 → kiradoggy.3 → kiramissionary.4 |

**SABRINA/VALENTINA** (4 actions):
| Action | Vídeos (em ordem) |
|---|---|
| action1 | Mayaentrando / sabrinaboq.gif / Sabrinacalcinha / Sabrinadeitando / Sabrinamassagem (sem números — ação legacy) |
| action2 | Sabrina1 → Sabrina2 → Sabrinacowgirlcostas → Sabrinadeitada → Sabrinadoggystyle → Sabrinafinal → Sabrinaoral (sem números — legacy) |
| action3 | sabrinabox.1.gif → sabrinaoral.2 → sabrinamissionary.3 → sabrinadoggy.4 → sabrinacowgirlfrente.5 → sabrinacowgirlcostas.6 |
| action4 | sabrinacama.1.gif → sabrinaoral.2 → sabrinafootjob.3 → sabrinacowgirl.4 → sabrinacowgirlcostas.5 → sabrinamissionary.6 → sabrinadoggy.7 |

**HARPER** (3 actions):
| Action | Vídeos (em ordem) |
|---|---|
| action1 | harperBlowjob.1 → harperCowgirl.2 → harperCowgirlreverse.3 |
| action2 | harperblowjob.1 → harpermissionary.2 → harperdoggy.3 |
| action3 | harperblowjob.1 → harperdoggy.2 → harpermissionary.3 → harperdoggy.4 → harpercowgirl.5 → harpercowgirlreverse.6 → harpercowgirlreverseCumshot.7 |

---

### SERENA ACTION 2 — "Spin Cycle" (Lavanderia)

**Contexto:** Após Q3 (quando Marcus foi embora e Serena tremeu). É noite. Serena está na lavanderia fazendo a roupa da casa — a tarefa que ela sempre faz sozinha, depois que todos dormem. O jogador a encontra lá.

**Assets:** `serena/action2/serenablowjob.1.mp4` → `serena/action2/serenadoggy.2.mp4` → `serena/action2/serenacowgirl.3.mp4`

**Cena completa:**

```javascript
function playSerenaAction2() {
  state.flags.serena_ntr_action2_seen = true;
  grantBond("serena", 15, 5, 0);
  const beats = [
    "narrator::The laundry room light is on past midnight. You hear the dryer running from the hallway — that low, steady tumble that means Serena is still awake, still working, still keeping the house together after everyone else has stopped noticing.",
    "narrator::You find her folding towels on the counter beside the washing machine. Her hair is down — you've never seen it down — and she's wearing an old cotton dress that's too big for her. She looks smaller in it. Softer.",
    "serena::“You should be asleep.” She doesn't look up. Her hands keep folding. “Everyone else is.”",
    "player::So should you.",
    "serena::“Somebody has to do this.” A pause. “Marcus used to say the same thing. About the house. About the bills. Somebody has to. And then he’d leave it all to me anyway.”",
    "narrator::She sets a towel down and finally looks at you. The fluorescent light makes everyone look tired, but on her it just looks honest.",
    "serena::“You stayed. When he was here. In the kitchen.” Her voice is quieter now. “Nobody stays.”",
    "player::I'm not going anywhere.",
    "narrator::She turns back to the counter. The dryer clicks off. The house is silent — that heavy, two-in-the-morning kind of silent where everything you say sounds louder than it is.",
    "serena::“I haven’t been touched by someone who wasn’t taking something from me in…” She stops folding. Her hands go still on the towel. “I don’t even know how long.”",
    "narrator::You step closer. She doesn't move away. Her back is to you and you can see her shoulders tense, then slowly release, like she's deciding to let go of something she's been gripping too hard for too long.",
    "player::Then let someone give you something for once.",
    "narrator::She turns around. The space between you disappears. She kisses you — not desperate, not frantic. Slow. Like she's reminding herself what it feels like when it isn't a transaction.",
    "serena::“The door.” A whisper. “Lock the door.”",
    "narrator::You turn the latch. When you turn back, she's leaned against the washing machine, the cotton dress already slipping off one shoulder. She hasn't looked away from you once.",
    "serena::“I want this to be mine. Not his. Not anyone’s debt. Just mine.”",
    "narrator::She drops to her knees on the cold tile floor — and the look she gives you isn't submission. It's hunger. Two years of nothing, and she's done starving.",
    { speaker: "narrator", text: "She takes you in her mouth with a tenderness that turns desperate. Her hands grip your thighs, pulling you closer, and the sound she makes is somewhere between relief and want. The washing machine hums behind her like a heartbeat.", video: "serena/action2/serenablowjob.1.mp4" },
    "serena::She pulls back, breathing hard, her lips wet. “Turn me around.” Not a request. An instruction. From the woman who runs this house.",
    "narrator::She braces herself against the dryer. The metal is still warm from the cycle. Her dress is bunched around her waist and she looks back at you over her shoulder with an expression that dares you to hesitate.",
    "serena::“Don’t be gentle. I’ve had two years of gentle. I don’t want gentle.”",
    { speaker: "narrator", text: "You take her from behind and she gasps, gripping the edge of the dryer hard enough that her knuckles go white. Every thrust rocks her forward and she pushes back, matching you, demanding more. The dryer rattles under them and neither of you cares.", video: "serena/action2/serenadoggy.2.mp4" },
    "serena::“God—” She buries her face in her arm. “Don’t stop. Please don’t stop.”",
    "narrator::She pushes off the dryer and turns around. Before you can react she's pushed you back onto the folding table, scattering clean linens, and she climbs on top of you. The table creaks. She doesn't care. She plants her hands on your chest and rides you with her eyes locked on yours.",
    { speaker: "narrator", text: "She sets the pace — slow at first, then faster, her hips rolling in a rhythm that's entirely hers. The fluorescent light catches the flush spreading down her neck and chest. She's not hiding anything. Not anymore.", video: "serena/action2/serenacowgirl.3.mp4" },
    "serena::“I’m close— I’m—” She grips your shoulders and shudders, a sound escaping her that's half sob, half release. Two years of pressure breaking all at once.",
    "narrator::She collapses against your chest, breathing hard. The laundry room is a mess — towels on the floor, the table pushed sideways, her dress somewhere between the washer and dryer. She doesn't move to clean any of it.",
    "serena::“That was mine.” She says it into your chest. Quiet. Certain. “That was just for me.”",
    "player::It was.",
    "serena::She sits up, pushes her hair out of her face. Looks at the scattered laundry and almost laughs. “I’m going to have to rewash all of this.”",
    "narrator::She kisses you once more — soft this time, no urgency left in it — and starts picking up towels. You help. You fold in silence, side by side, and the house stays quiet around you. The debt, Marcus, all of it still exists beyond this room. But in here, for now, everything is hers."
  ];
  playSequence(beats.map(parseCasualLine), () => {
    render();
  }, "Leave");
}
```

---

### Como criar uma nova action (passo a passo):

1. **Identificar os assets** — Listar os vídeos disponíveis na pasta `assets/adult/[char]/action[N]/`
2. **Ordenar pela numeração** — O número no final do nome (.1, .2, .3) define a sequência
3. **Ler a posição no nome** — O texto antes do número descreve o que acontece (blowjob, doggy, cowgirl, missionary, etc.)
4. **Escolher o contexto/local** — Onde a cena acontece (lavanderia, cozinha, parque, quarto, etc.)
5. **Escrever os beats de setup** — Narração que estabelece o cenário, clima, e o "porquê" da cena acontecer agora
6. **Para cada vídeo, escrever:**
   - Um beat com `video:` + narração descrevendo a posição
   - Beats de diálogo entre os vídeos (reações, falas, sons)
7. **Escrever o aftermath** — Beats finais de encerramento, consequência emocional
8. **Criar a função** — `play[Char]Action[N]()` com a flag e o `playSequence()`
9. **Criar a gate function** — `needs[Char]Action[N]()` que verifica quest progress + flag not seen

---

## RESUMO TÉCNICO — Integração com o Engine

### Estrutura de dados necessária em data.js:
```javascript
ntrQuests: {
  serena: [ /* Q0-Q5 */ ],
  kira: [ /* Q0-Q5 */ ],
  valentina: [ /* Q0-Q5 */ ],
  harper: [ /* Q0-Q5 */ ]
},
ntrRivalEvents: {
  serena: [ /* R0-R2 */ ],
  kira: [ /* R0-R2 */ ],
  valentina: [ /* R0-R2 */ ],
  harper: [ /* R0-R2 */ ]
},
ntrNetorareQuests: {
  serena: [ /* netorae chain */ ],
  kira: [ /* netorae chain */ ],
  valentina: [ /* netorae chain */ ],
  harper: [ /* netorae chain */ ]
}
```

### Flags por personagem:
- `[char]_ntr_q0_complete` até `[char]_ntr_q5_complete`
- `[char]_ntr_r0_seen` até `[char]_ntr_r2_seen`
- `foundHusbandLetter` (global, gate para Q3+)
- `ntrIntroComplete` (global, gate para Q0)
- `marcusConfronted` (final)

### Horários e locais existentes:
- Kitchen, living_room, foyer, bathroom, sabrina_room, park, market, gym
- Sistema de dia/hora já funciona (state.day, state.hour, isWorkday())
- `scheduledRoom()` já posiciona personagens NTR por horário

### O que precisa ser implementado:
1. Preencher `ntrQuests`, `ntrRivalEvents`, `ntrNetorareQuests` em data.js
2. Cada quest precisa: `characterId`, `title`, `description`, `room`, `timeStart`, `timeEnd`, `weekdayOnly`/`weekendOnly`, `flag`, `statGate`, `dialogueBeats`
3. Criar funções `needs[Char]NtrQ[N]()` e `play[Char]NtrQ[N]()` em engine.js
4. Integrar no `visitPark()`, `renderRoomDetail()` e locais relevantes
5. Adicionar conversas de telefone ao sistema de mensagens existente
