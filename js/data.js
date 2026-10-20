/* ==========================================================================
   Game content: characters, rooms, quests, casual events, companion scenes.
   Ported from CrinsomRoom (data/*.js + game.js) and adapted to this engine.
   ========================================================================== */
window.GAME_DATA = {

  characters: {
    lily: {
      id: "lily",
      name: "Lily",
      color: "#ff98c8",
      role: "Owner of the house",
      portrait: "assets/portraits/lily.jpg",
      home: "kitchen"
    },
    maya: {
      id: "maya",
      name: "Maya",
      color: "#ffb07a",
      role: "Exchange student",
      portrait: "assets/portraits/maya.jpg",
      home: "maya_room"
    },
    noelle: {
      id: "noelle",
      name: "Noelle",
      color: "#8fd0ff",
      role: "Exchange student",
      portrait: "assets/portraits/noelle.jpg",
      home: "noelle_room"
    },
    sabrina: {
      id: "sabrina",
      name: "Vivian",
      blackedName: "Amber",
      color: "#d8a0ff",
      role: "Exchange student",
      portrait: "assets/portraits/vivian.jpg",
      blackedPortrait: "assets/portraits/sabrina.jpg",
      home: "living_room"
    },
    claire: {
      id: "claire",
      name: "Claire",
      color: "#8fd8c5",
      role: "Supermarket attendant",
      portrait: "assets/portraits/claire.jpg"
    },
    zoe: {
      id: "zoe",
      name: "Zoe",
      color: "#f2c14e",
      role: "Night shift, The Nightowl",
      portrait: "assets/portraits/zoe.jpg"
    },
    chloe: {
      id: "chloe",
      name: "Chloe",
      color: "#e0879b",
      role: "Front desk, The Ashgrove",
      portrait: "assets/portraits/chloe.jpg"
    },
    jade: {
      id: "jade",
      name: "Jade",
      color: "#6fb6a8",
      role: "Projectionist, passing through",
      portrait: "assets/portraits/jade.jpg"
    },
    marina: {
      id: "marina",
      name: "Marina",
      color: "#c8d8e8",
      role: "Supermarket manager"
    },
    serena: {
      id: "serena",
      name: "Serena",
      color: "#e8b0c8",
      role: "Landlady",
      portrait: "assets/portraits/serena.jpeg",
      home: "kitchen",
      ntrOnly: true,
      ntrRival: "Marcus",
      ntrRivalRole: "Late husband’s business partner",
      description: "Serena owns the house where you live. Widowed two years ago, she keeps the place running with help from Marcus, her late husband’s business partner. Behind the composed facade, there’s a loneliness she tries to hide by cooking late at night. She’s not looking for trouble — but she’s not locking the door either."
    },
    kira: {
      id: "kira",
      name: "Kira",
      color: "#a8d8a0",
      role: "College athlete",
      portrait: "assets/portraits/kira.jpg",
      home: "outside",
      ntrOnly: true,
      ntrRival: "Tyler",
      ntrRivalRole: "Possessive boyfriend",
      description: "Kira is a college athlete — competitive and direct. She runs at the park every morning and trains at the gym every afternoon. Her boyfriend Tyler treats her like a trophy, and she knows it. Kira isn’t fragile — she’s just tired of being underestimated by the person who should value her."
    },
    valentina: {
      id: "valentina",
      name: "Sabrina",
      color: "#d8a0ff",
      role: "Exchange student",
      portrait: "assets/portraits/sabrina.jpg",
      home: "living_room",
      ntrOnly: true,
      ntrRival: "Damon",
      ntrRivalRole: "Tall ex who never left town",
      description: "Sabrina is an exchange student living behind a filter. Damon, her ex-boyfriend and manager, controls her life through social media. She posts smiling, but behind the ring light there’s a girl who just wants someone to see her for real — no camera, no audience."
    },
    harper: {
      id: "harper",
      name: "Harper",
      color: "#a0c8e0",
      role: "Neighbor, engaged",
      portrait: "assets/portraits/harper.jpg",
      home: "outside",
      ntrOnly: true,
      ntrRival: "Derek",
      ntrRivalRole: "Emotionally distant fiancé",
      description: "Harper manages the local supermarket and is engaged to Derek, a man who’s forgotten three anniversaries in a row. She’s organized, kind, and twists the ring on her finger when she thinks about taking it off. The market is her refuge — or it was, until someone started showing up for more than groceries."
    }
  },

  /* ---------------- intro: exchange-house arrival ---------------- */
  intro: {
    lines: [
      { speaker: "narrator", text: "After a long flight and a day that already feels too full, you finally arrive at the house where you'll be staying during your exchange." },
      { speaker: "lily", text: "Lily opens the door before you can knock a second time. “You made it. Come in, your timing is actually perfect.”" },
      { speaker: "player", text: "Thanks. I wasn't sure if I was at the right place." },
      { speaker: "lily", text: "“You are. I'm Lily, the owner. The house gets a little noisy when someone new arrives, so everyone is pretending they are not curious.”" },
      { speaker: "sabrina", text: "Vivian looks over from the living room and lifts a hand in greeting. “Welcome. It feels chaotic now, but you get used to the rhythm of the house pretty fast.”" },
      { speaker: "player", text: "It already feels like everyone here knows each other better than I know what to do with my suitcase." },
      { speaker: "lily", text: "“That settles itself soon enough. This is your home for now. Your room is ready, the shared spaces are open, and you can take your time getting used to everyone.”" },
      { speaker: "lily", text: "“Once you've caught your breath, just move around the house however you want. Everyone here arrived as a stranger once.”" }
    ]
  },


  /* ---------------- house hub ---------------- */
  rooms: [
    { id: "upstairs_hall", title: "Upstairs", icon: "\u{1FA9C}", image: "assets/nonadultmedia/upstairs.png", description: "Go upstairs and choose one of the private rooms.", isHub: true },
    { id: "foyer", title: "Foyer", icon: "\u{1F6AA}", image: "assets/nonadultmedia/foyer.png", description: "The main entrance hall where you first settled into the house." },
    { id: "living_room", title: "Living Room", icon: "\u{1F6CB}️", image: "assets/nonadultmedia/livingroom.png", description: "A shared room for overlap, downtime, and group scenes.", characterId: "sabrina" },
    { id: "kitchen", title: "Kitchen", icon: "\u{1F373}", image: "assets/nonadultmedia/kitchen.png", description: "A warm, casual space for softer conversations." },
    { id: "lily_room", title: "Lily's Room", icon: "\u{1F5DD}️", image: "assets/nonadultmedia/lily room.png", description: "Lily's quiet room, kept tidy with the same care she gives the rest of the house." },
    { id: "bathroom", title: "Bathroom", icon: "\u{1F6BF}", image: "assets/nonadultmedia/bathroom.png", description: "A small private space, usually quiet." },
    { id: "outside", title: "Outside", icon: "\u{1F3D9}️", image: "assets/nonadultmedia/outside.png", description: "Leave the house and choose somewhere in town to visit.", isHub: true }
  ],

  /* ---------------- dynamic locations ----------------
     Where a companion is currently found, layered on top of the
     static room list above. Steps are evaluated in order; the last
     one whose condition is satisfied wins. Unconditioned = default. */
  characterRoutes: {
    lily: [
      { room: "kitchen" },
      { room: "bathroom", condition: "lily_market_resolved" },
      // Once she's asked for the shampoo she's done in the bathroom —
      // she dries off and moves to her own room, so the player isn't
      // still finding her in the bath afterwards.
      { room: "lily_room", condition: "lily_shampoo_started" },
      // From here the tutorial route ends and her daily schedule below
      // takes over.
      { room: null, condition: "casual_phone_added" }
    ]
  },

  /* ---------------- daily schedules ----------------
     Where each housemate actually is, hour by hour. Read after the
     tutorial routes above have finished, so the opening still puts
     people exactly where the script needs them.

     These deliberately line up with the quest windows in the quest log —
     Maya's room quests run 15:00 onward and she's in her room from 15:00,
     Vivian's living-room quests run from 13:00 and that's when she comes
     down. Change one and the other has to move with it.

     `weekend` is optional; without it the weekday blocks are used all
     week. Hours are [start, end). */
  characterSchedules: {
    /* No two of them are ever booked into the same room at the same hour —
       a room shows one occupant, so an overlap would simply hide someone.
       If you move a block, check it doesn't land on top of another. */
    lily: {
      // The kitchen is hers; she's in it most of the day.
      weekday: [
        { start: 0, end: 9, room: "lily_room" },
        { start: 9, end: 23, room: "kitchen" },
        { start: 23, end: 24, room: "lily_room" }
      ],
      weekend: [
        { start: 0, end: 10, room: "lily_room" },
        { start: 10, end: 23, room: "kitchen" },
        { start: 23, end: 24, room: "lily_room" }
      ]
    },
    maya: {
      // Downstairs sprawled over the couch in the morning, back upstairs
      // to draw from mid-afternoon.
      weekday: [
        { start: 0, end: 9, room: "maya_room" },
        { start: 9, end: 13, room: "living_room" },
        { start: 13, end: 24, room: "maya_room" }
      ],
      weekend: [
        { start: 0, end: 11, room: "maya_room" },
        { start: 11, end: 13, room: "living_room" },
        { start: 13, end: 24, room: "maya_room" }
      ]
    },
    noelle: {
      // Gym in the morning — the same slot her own quest happens in — then
      // straight back to the desk.
      weekday: [
        { start: 0, end: 9, room: "noelle_room" },
        { start: 9, end: 13, room: "gym" },
        { start: 13, end: 14, room: "diner" },
        { start: 14, end: 24, room: "noelle_room" }
      ],
      weekend: [
        { start: 0, end: 10, room: "noelle_room" },
        { start: 10, end: 13, room: "gym" },
        { start: 13, end: 14, room: "diner" },
        { start: 14, end: 24, room: "noelle_room" }
      ]
    },
    sabrina: {
      // Surfaces at one o'clock and takes the living room off Maya.
      weekday: [
        { start: 0, end: 13, room: "sabrina_room" },
        { start: 13, end: 23, room: "living_room" },
        { start: 23, end: 24, room: "sabrina_room" }
      ],
      weekend: [
        { start: 0, end: 13, room: "sabrina_room" },
        { start: 13, end: 23, room: "living_room" },
        { start: 23, end: 24, room: "sabrina_room" }
      ]
    },
    /* Zoe runs the diner's night shift. Tuesdays she's at her theatre
       group first and comes in late — that's handled in her own quests,
       not here. */
    zoe: {
      weekday: [
        { start: 0, end: 17, room: null },
        { start: 17, end: 24, room: "diner" }
      ],
      weekend: [
        { start: 0, end: 18, room: null },
        { start: 18, end: 24, room: "diner" }
      ]
    },
    /* Chloe is on the Ashgrove's day desk. Weekends she does a short one
       and then goes to the cinema on her own, which nobody else does. */
    chloe: {
      weekday: [
        { start: 0, end: 10, room: null },
        { start: 10, end: 19, room: "hotel" },
        { start: 19, end: 24, room: null }
      ],
      weekend: [
        { start: 0, end: 11, room: null },
        { start: 11, end: 17, room: "hotel" },
        { start: 17, end: 24, room: null }
      ]
    },
    /* Jade has the cinema from early evening every day — she works after
       the last matinee so the box is hers. The daytime hours are left
       clear so the cinema keeps working as a paid Intelligence stop. */
    jade: {
      weekday: [
        { start: 0, end: 18, room: null },
        { start: 18, end: 24, room: "cinema" }
      ],
      weekend: [
        { start: 0, end: 18, room: null },
        { start: 18, end: 24, room: "cinema" }
      ]
    },
    /* Claire works the shop on weekdays and is off at the weekend. */
    claire: {
      weekday: [
        { start: 0, end: 9, room: null },
        { start: 9, end: 18, room: "market" },
        { start: 18, end: 22, room: "park" },
        { start: 22, end: 24, room: null }
      ],
      weekend: [
        { start: 0, end: 12, room: null },
        { start: 12, end: 18, room: "park" },
        { start: 18, end: 24, room: null }
      ]
    },
    serena: {
      ntrOnly: true,
      weekday: [
        { start: 0, end: 9, room: "lily_room" },
        { start: 9, end: 13, room: "kitchen" },
        { start: 13, end: 17, room: "living_room" },
        { start: 17, end: 23, room: "kitchen" },
        { start: 23, end: 24, room: "lily_room" }
      ],
      weekend: [
        { start: 0, end: 10, room: "lily_room" },
        { start: 10, end: 14, room: "kitchen" },
        { start: 14, end: 18, room: "living_room" },
        { start: 18, end: 23, room: "kitchen" },
        { start: 23, end: 24, room: "lily_room" }
      ]
    },
    kira: {
      ntrOnly: true,
      weekday: [
        { start: 0, end: 8, room: null },
        { start: 8, end: 12, room: "park" },
        { start: 12, end: 19, room: "gym" },
        { start: 19, end: 22, room: "park" },
        { start: 22, end: 24, room: null }
      ],
      weekend: [
        { start: 0, end: 9, room: null },
        { start: 9, end: 13, room: "park" },
        { start: 13, end: 17, room: "gym" },
        { start: 17, end: 24, room: null }
      ]
    },
    valentina: {
      ntrOnly: true,
      weekday: [
        { start: 0, end: 11, room: "sabrina_room" },
        { start: 11, end: 16, room: "living_room" },
        { start: 16, end: 20, room: "sabrina_room" },
        { start: 20, end: 24, room: "sabrina_room" }
      ],
      weekend: [
        { start: 0, end: 12, room: "sabrina_room" },
        { start: 12, end: 16, room: "living_room" },
        { start: 16, end: 20, room: "park" },
        { start: 20, end: 24, room: "sabrina_room" }
      ]
    },
    harper: {
      ntrOnly: true,
      weekday: [
        { start: 0, end: 9, room: null },
        { start: 9, end: 14, room: "market" },
        { start: 14, end: 17, room: "park" },
        { start: 17, end: 24, room: null }
      ],
      weekend: [
        { start: 0, end: 11, room: null },
        { start: 11, end: 15, room: "park" },
        { start: 15, end: 19, room: "market" },
        { start: 19, end: 24, room: null }
      ]
    }
  },

  upstairs: [
    { id: "player_room", title: "Your Room", icon: "\u{1F6CF}️", image: "assets/nonadultmedia/quarto do player.png", description: "Your temporary room during the exchange stay." },
    { id: "maya_room", title: "Maya's Room", icon: "\u{1F4DA}", image: "assets/nonadultmedia/maya room.png", description: "Scattered with books, notes, and restless energy.", characterId: "maya" },
    { id: "noelle_room", title: "Noelle's Room", icon: "\u{1F5C2}️", image: "assets/nonadultmedia/noelle room.png", description: "Calm and organized, familiar things placed carefully around the space.", characterId: "noelle" },
    { id: "sabrina_room", title: "Vivian's Room", icon: "\u{1F48B}", image: "assets/nonadultmedia/sabrina room.png", description: "Where she disappears between errands before drifting back downstairs." }
  ],

  outside: [
    { id: "market", title: "Supermarket", icon: "\u{1F6D2}", image: "assets/nonadultmedia/supermarket.png", description: "Useful for everyday errands and small events outside the house." },
    { id: "cinema", title: "Cinema", icon: "\u{1F3AC}", image: "assets/nonadultmedia/cinema.png", description: "An old theater downtown with a marquee that's seen better days." },
    { id: "park", title: "Park", icon: "\u{1F333}", image: "assets/nonadultmedia/park.png", description: "A quiet stretch of green near the fountain, a few benches, the occasional jogger." },
    { id: "gym", title: "Gym", icon: "\u{1F3CB}", image: "assets/nonadultmedia/gym.png", description: "A no-frills place two streets over. Free weights, a row of treadmills, and a front desk that never asks questions." },
    { id: "diner", title: "The Nightowl", icon: "\u{1F373}", image: "assets/nonadultmedia/nightowl.png", description: "A diner on the ring road that keeps its lights on long after everything else in town has given up. Vinyl booths, a counter, and a jukebox nobody has fixed." },
    { id: "hotel", title: "The Ashgrove", icon: "\u{1F3E8}", image: "assets/nonadultmedia/ashgrove.png", description: "A twenty-six room hotel off the high street, too big for the town it's in. Wedding parties in summer, sales reps the rest of the year, and a basement pool nobody has swum in since April." }
  ],

  /* ---------------- quests ----------------
     Each quest: talk to `characterId` in `giverRoom` to start/turn in;
     the item is found at `destination` (an outside location). Maya and
     Noelle don't have fetch quests in this build — they're met through
     texting, casual moments, and their own scenes instead. */
  quests: [
    {
      id: "lily_market", chain: null, characterId: "lily", giverRoom: "kitchen",
      title: "Buy Lily's supermarket supplies",
      destination: "market", cost: 50, giveMoney: 50,
      itemId: "lily_market_order", itemName: "Lily's Grocery Bag",
      itemDescription: "A grocery bag of house supplies bought for Lily at the supermarket.",
      bond: 15, tension: 5,
      preText: "Lily looks up from a notepad by the kitchen counter and smiles the moment she spots you. “There you are — I was starting to wonder if you'd gotten lost already.” She sets the notepad down and waves a hand toward the stairs.\n\n“Go get settled first. Take your things up to your room, unpack, breathe for a second. Everything else can wait until you're not still holding a suitcase.” Her tone is warm but leaves no real room for arguing. “Come find me again once you've done that.”",
      repliesPreText: [{ text: "Sounds good — give me a few minutes.", stat: "warm" }, { text: "Trying to get rid of me already?", stat: "witty" }, { text: "I really am still holding my suitcase.", stat: "witty" }],
      closingPreText: "Lily is already turning back toward the kitchen, waving a hand over her shoulder without looking back. “Take your time. I'm not going anywhere.”",
      preRequisiteFlag: "casual_noelle_room_intro",
      preRequisiteText: "Lily doesn't look up from her list right away. “Go on — get settled first. I'll still be here when you're done.”",
      textGive: "Lily is checking a neat handwritten list near the foyer table when you find her again. She glances up with the calm, practiced smile of someone used to keeping the whole house running. “There you are. Room sorted?”\n\n“Since you're already up and moving, I might as well put you to good use. We are low on bread, milk, fruit, and dish soap. The supermarket is nearby, and I wrote everything on this list.”\n\nShe reaches into a small tin on the shelf and counts out two crisp bills before pressing them into your hand. “Here — fifty dollars for the groceries. Keep the receipt, please, and take your time finding the store.”\n\nNew quest: Buy Lily's supermarket supplies\nMoney +50",
      repliesGive: [{ text: "I'll take good care of it.", stat: "warm" }, "Bread, milk, fruit, dish soap — got it.", { text: "You really do run this place, don't you.", stat: "witty" }],
      closingGive: "Lily gives a small satisfied nod, already turning back to her list. “Good. I'll be here when you get back.”",
      approachReactionGive: {
        bold: "lily::She studies you for a beat, faint approval in it. “Straightforward. I appreciate that more than you'd think, in this house.”",
        witty: "lily::A small, tired laugh. “You joke like someone who hasn't done a full grocery run yet. We'll see if that survives aisle four.”",
        warm: "lily::Something in her shoulders loosens, just slightly. “You keep being this easy to deal with, and I might actually relax around here.”"
      },
      textReminder: "Lily glances toward the door as soon as you approach. “Were you able to find everything on the list? Bread, milk, fruit, and dish soap. I was beginning to worry the rain might make your first trip harder than it needed to be.”",
      repliesReminder: ["Still working on it.", { text: "The rain's not helping.", stat: "witty" }, { text: "I haven't forgotten, I promise.", stat: "warm" }],
      closingReminder: "Lily offers a small, patient smile before turning back to whatever she was doing. “No rush. Really.”",
      textPickup: "You work through Lily's list, pay at the register, and leave with a sturdy grocery bag full of the supplies she asked for.\n\nItem received: Lily's Grocery Bag",
      textTurnIn: "Lily takes the grocery bag from you with a quiet exhale, the kind that only escapes when a responsibility can finally be crossed off for the night.\n\n“Wonderful. Thank you.” Her fingers curl around the bag for a moment before she sets it beside the foyer table. “I'll put these away, and you can dry off before you catch a cold.”\n\nA faint smile reaches her eyes now. “You are settling in faster than I expected. Keep that up, and this place might start feeling like it belongs to you too.”\n\nQuest complete: Buy Lily's supermarket supplies",
      repliesTurnIn: [{ text: "Happy to help.", stat: "warm" }, { text: "I'll take dry clothes over compliments, but I'll take both.", stat: "witty" }, { text: "It's starting to feel that way.", stat: "warm" }],
      closingTurnIn: "Lily's smile lingers a moment longer before she busies herself putting the groceries away, humming faintly to herself.",
      approachReactionTurnIn: {
        bold: "lily::“You really don't waste time, do you.” She says it like an observation, not quite a complaint.",
        witty: "lily::“Still joking, even soaked from the rain.” She shakes her head. “I am starting to think that is just a permanent setting for you.”",
        warm: "lily::She holds your gaze a second longer than the moment requires. “You have been kind about all of this. I notice that more than you would think.”"
      },
      turnInImage: "assets/adult/lily/quest1/lilyquest1.png"
    },
    {
      id: "lily_shampoo", chain: null, characterId: "lily", giverRoom: "bathroom",
      title: "Buy shampoo for the house",
      destination: "market", cost: 12,
      itemId: "lily_shampoo", itemName: "Shampoo",
      itemDescription: "A bottle of the shampoo Lily normally keeps stocked in the bathroom.",
      bond: 6, tension: 4,
      textGive: "Lily startles slightly when she notices you, reaching for the towel on the rack beside the glass shower box, though the surprise fades into something more amused than embarrassed. “You could have knocked,” she says, but there's no real heat in it.\n\n“Actually — good timing. I meant to catch you earlier. We're almost out of shampoo, and I completely forgot to put it on the list I gave you. Would you mind picking some up next time you're at the market?”\n\nNew quest: Buy shampoo for the house",
      repliesGive: ["I can grab that next time.", { text: "You really do keep a list for everything.", stat: "witty" }, { text: "Consider it done.", stat: "bold" }],
      closingGive: "Lily huffs a quiet laugh and waves you off toward the door, already distracted by something else on her mental list.",
      textReminder: "Lily tilts her head when she sees you. “Still haven't found a moment for the shampoo? No rush, just don't let me forget again.”",
      repliesReminder: [{ text: "It's on my list, promise.", stat: "warm" }, { text: "Today, today.", stat: "witty" }, { text: "I know, I know.", stat: "witty" }],
      closingReminder: "She taps the side of her head like she's marking a mental note, then lets you go.",
      textPickup: "You find a bottle of the shampoo Lily usually uses on the shelf and bring it to the register.\n\nItem received: Shampoo",
      textTurnIn: "You find Lily in her room, curled up with a book she's only half reading, the day finally catching up with her. She looks up when she notices the bottle in your hand.\n\n“Oh — perfect, thank you.” She takes it, turning it over to check the label out of habit. “I heard Maya already got you sorted with the house chat. I'm sorry that was her and not me — usually I'm faster about that part.”\n\n“Still. You're settling in. That's what matters.”\n\nQuest complete: Buy shampoo for the house",
      repliesTurnIn: [{ text: "Glad I could still be useful.", stat: "warm" }, { text: "I'll thank Maya properly later.", stat: "witty" }, { text: "That's a relief, honestly.", stat: "warm" }],
      closingTurnIn: "Lily sets the bottle down within reach, looking genuinely pleased, and for a moment neither of you rushes to end the conversation."
    }
  ],

  /* ---------------- casual events ----------------
     Small chance, one-time flavor moments triggered on entering a room.
     Tension-only, no bond, no choices. */
  casualEvents: [
    {
      id: "noelle_room_intro", room: "player_room", characterId: "noelle", chance: 1, tension: 1, timeCost: 1,
      lines: [
        "You haul your bag up the stairs and push open the door to what is apparently your room now — smaller than back home, but clean, with the window cracked open to let the evening air in.",
        { speaker: "narrator", text: "You're halfway through dropping your bag on the bed when there's a light knock, and the door eases open before you can answer.", image: "assets/adult/noelle/casuals/maya1.gif" },
        "noelle::“Relax. I'm not searching your things.” Noelle steps inside, arms crossed, looking entirely unbothered about walking into a stranger's room uninvited. “I just wanted to see who Lily let in this time.”",
        "player::That's... reassuring, I guess.",
        "noelle::“It should be. Most people knock first. I don't, but most people also aren't me.”",
        "She studies you for a beat too long, then leans back against the doorframe, in no hurry to leave.",
        "noelle::“Welcome to the house. Try not to unpack too loudly — some of us are light sleepers.”",
        "She's gone before you can think of a reply, the door easing shut behind her, leaving you alone with your half-unpacked bag and the sense that this house is going to take some getting used to."
      ],
      replies: [{ text: "Noted — I'll keep it down.", stat: "warm" }, { text: "You could try knocking next time.", stat: "bold" }, { text: "I'll take that as a warm welcome.", stat: "witty" }],
      closing: "narrator::You're talking to a closed door by the time the words are out, and somewhere down the hall you swear you hear her laughing.",
      approachInsertBeforeLast: true,
      approachReaction: {
        bold: "noelle::She studies you a second longer, like she's re-filing you under a different heading. “You don't rattle easy, do you.” A small pause. “I'll remember that.”",
        witty: "noelle::“Cracking jokes already.” A small, almost-smile. “Bold move for someone who's been here twenty minutes. I haven't decided if I like it yet.”",
        warm: "noelle::Something in her expression eases, just slightly. “You're actually trying to be polite about all of this.” A shrug. “Noted. It's not required. But it's noticed.”"
      }
    },
    {
      id: "maya_outside_intro", room: "outside", characterId: "maya", chance: 1, tension: 1,
      lines: [
        { speaker: "narrator", text: "You're halfway out the door when Maya appears from the kitchen, arms crossed, wearing the particular grin of someone who has seen this exact scene play out before.", image: "assets/adult/maya/mayaporta.gif" },
        "maya::“Let me guess — Lily already put you to work.” She shakes her head, laughing under her breath. “Grocery list, exact change, a very specific tone about bringing back receipts. Yeah, that's her. Efficient before you've even finished unpacking.”",
        "player::Is that a bad sign?",
        "maya::“It's a Lily sign. She runs this house like a business with better lighting. Honestly? Get used to it — it means she trusts you enough to bother.”",
        "She waves you off toward the door, already turning back toward whatever she'd abandoned in the kitchen.",
        "maya::“Go on. Impress her. I'll be here pretending I wasn't listening.”",
        { speaker: "narrator", text: "You step outside. The street is quieter than you expected, the air still damp from earlier rain.", image: "assets/adult/rua.png" }
      ],
      replies: [{ text: "Wish me luck.", stat: "warm" }, { text: "You say that like it's a bad thing.", stat: "witty" }, { text: "I'll try not to mess up the receipts.", stat: "witty" }],
      approachInsertBeforeLast: true,
      approachReaction: {
        bold: "maya::She catches the way you hold her gaze and grins wider. “Oh, you're not going to be boring.” She says it like a verdict. “Good. This house needed that.”",
        witty: "maya::“Oh, we've got a live one.” Maya laughs, delighted. “Keep that energy. I'm taking notes for later.”",
        warm: "maya::She pauses, genuinely a little surprised. “Huh. You're actually kind of sweet about this.” A grin. “Don't let Lily find out, she'll put you on every chore list.”"
      }
    },
    {
      id: "claire_market_intro", room: "market", characterId: "claire", autoResolveMarket: true, chance: 1, tension: 1,
      lines: [
        { speaker: "narrator", text: "“Hi there. Welcome in.” An attendant gives you a warm smile from beside the entrance display. “You look a little lost. Are you searching for something specific?”", video: "claire/clairecumprimento" },
        "player::I have a grocery list for the house where I'm staying.",
        { speaker: "claire", text: "“I'm Claire. I work here most afternoons.” She glances at the list in your hand. “Bread and milk are on the far side, fruit is right behind us, and dish soap is in aisle five. You should be able to beat the worst of the rain if you don't wander too much.”", video: "claire/clairseguindo" },
        "player::Thanks — that saves me from searching every aisle.",
        "claire::“No problem. Maybe I'll see you around the neighborhood again.”"
      ],
      replies: [{ text: "Thanks, I'll find you if I get lost.", stat: "bold" }, "Aisle five, got it.", { text: "You've clearly done this before.", stat: "witty" }],
      approachInsertBeforeLast: true,
      approachReaction: {
        bold: "claire::She tilts her head, a little more interested than the moment strictly requires. “Confident. I like that in someone who doesn't know where the milk is yet.”",
        witty: "claire::A short laugh escapes her. “Okay, that one landed. Careful, I might start expecting a bit with every visit.”",
        warm: "claire::Her expression softens, unguarded for just a second. “That's a nicer thing to say than most people bother with.” A small smile. “Noted.”"
      }
    },
    {
      id: "lily_bathroom_intro", room: "bathroom", characterId: "lily", condition: "lily_market_resolved", autoTalkTo: "lily", chance: 1, tension: 2,
      lines: [
        "narrator::You head toward the bathroom, remembering Lily had asked for you a little earlier.",
        { speaker: "narrator", text: "The door is only halfway closed, and before you can knock you catch a glimpse of her in the bath, unaware you’re standing there. For a moment you just watch, unable to look away.", video: "lily/casuals/lilybanho" },
        "narrator::You linger a beat too long before finally making your presence known."
      ],
      replies: [{ text: "Sorry — I should’ve knocked.", stat: "warm" }, { text: "I didn’t mean to stare.", stat: "warm" }, "I’ll just... wait outside."]
    },
    {
      id: "maya_gym", room: "living_room", characterId: "maya", chance: 0.07, tension: 2,
      lines: [
        "You head toward the living room and slow when you hear the soft rhythm of movement from inside.",
        { speaker: "narrator", text: "Maya is already there, using the open space for a quick workout, focused enough that she does not notice you right away.", video: "maya/casuals/mayagym" },
        "maya::“Oh.” She pauses just long enough to catch her breath, then gives you a crooked smile. “I know, I know. Living room is not exactly a gym, but the house is quiet and I was getting restless.”",
        "She adjusts her grip and rolls her shoulders, trying to look casual even though the effort has left her flushed and bright-eyed.",
        "maya::“You can pretend you were just passing through. I will pretend I believe you.”"
      ],
      replies: [{ text: "Sorry, I'll let you finish.", stat: "warm" }, "Don't let me interrupt.", { text: "Just passing through, promise.", stat: "witty" }],
      closing: "maya::She's already back into her rhythm, waving you off without missing a beat. “Go, go. Pretend you didn't see this.”"
    },
    {
      id: "noelle_return", room: "upstairs_hall", characterId: "noelle", chance: 0.1, tension: 2,
      lines: [
        "On the way to your room, you pass Noelle's door and notice it has been left slightly open.",
        { speaker: "narrator", text: "A gym bag rests near the bed, still half-zipped, and the faint smell of clean air and cold night lingers in the hallway.", video: "noelle/casuals/noelleacademia" },
        "Noelle has just come back from a walk. She lowers herself onto the bed with a tired, quiet grace, letting the day finally leave her shoulders.",
        "You stop only for a breath. She does not look toward the door, and you move on before the moment becomes anything more than an accident."
      ],
      replies: ["You quietly ease the door toward closed on your way past.", "You file that away without quite meaning to.", "You keep walking like you didn't see anything."]
    }
  ],

  /* ---------------- jobs ----------------
     One entry per hireable location. Only the supermarket is set up
     right now, but more can be added the same way later (each just
     needs its own key here plus a "Work" button wired to workAt(id)). */
  jobs: {
    /* Second job: the night shift. Pays better than the market because
       nobody wants the hours, and it runs on the days the market doesn't.
       Basic for now — one work spot, a small task pool — so Zoe's
       storyline has somewhere to happen. */
    diner: {
      title: "The Nightowl",
      managerId: "zoe",
      pay: 25,
      startHour: 17,
      latestStartHour: 20,
      /* When the doors are open at all, which is wider than the window for
         starting a shift — Zoe's own scenes run to close. Anything that
         happens here has to sit inside this or it becomes unreachable. */
      openHours: { start: 17, end: 24 },
      closedText: "The Nightowl doesn't open until five. The lights are off and the door's locked.",
      taskDurationHours: 1,
      closeOutHours: 1,
      textHireOffer: "“You're the one who keeps walking past at eleven at night looking in.” The woman behind the counter doesn't stop wiping it. “Gus owns the place, Gus is asleep, and Gus told me to hire whoever asks. So. Nights, five till close, twenty-five a shift. I'm Zoe, I'll be the one telling you where everything is for about a week.”",
      hireAcceptBeats: [
        "zoe::“Right.” She flips a napkin over and writes on it. “That's the shift. That's my number. Don't text it about the shift.”",
        "narrator::The paperwork is a napkin and a photo of the napkin. There's no form. There's no office.",
        "zoe::“Rules — don't touch the jukebox, it's broken and it's staying broken. If someone orders the fish, talk them out of it. And if a guy in a grey coat comes in at two, that's Terrence, he doesn't pay, don't make it weird.”",
        "player::That's the whole training?",
        "zoe::“That's the whole training.” She finally looks up. “You'll be fine. Five o'clock.”"
      ],
      repliesHireAccept: [{ text: "Five o'clock.", stat: "bold" }, { text: "What's wrong with the fish?", stat: "witty" }, { text: "Thanks, Zoe.", stat: "warm" }],
      textHireDecline: "“Sure. It'll still be here.” She goes back to the counter. “It's always still here.”",
      textFirstDayOnly: "Zoe put you on the schedule tonight. The first shift starts tomorrow.",
      textArrival: "The Nightowl at five is empty and too bright, the way places are before the night decides what it's going to be.",
      claireGreeting: [
        "zoe::“You came back.” Zoe's already tying an apron behind her. “I had you at sixty-forty.”",
        "player::On me showing up?",
        "zoe::“On you showing up.” She tosses you the other apron. “I bet on you. Don't make me look stupid.”"
      ],
      repliesArrival: ["Sixty-forty's generous.", { text: "I'll take those odds.", stat: "bold" }, { text: "You bet on me?", stat: "warm" }],
      closingArrival: "zoe::“Coffee's on. Booths are yours, counter's mine, and if it gets busy we swap and don't talk about it.”",
      textShiftComplete: "You flip the sign, stack the last of the chairs, and the diner goes quiet in a way it never manages while it's open.",
      repliesShiftComplete: ["That went fast.", { text: "Same time tomorrow.", stat: "warm" }, { text: "The fish guy came back.", stat: "witty" }],
      closingShiftComplete: "zoe::“They always come back.” She kills the outside light. “Night.”",
      textWrongDay: "Zoe only puts you on the rota Monday to Friday. Weekends she covers the place herself.",
      textAlreadyWorked: "You've already done tonight's shift. Zoe locked up.",
      textTooLate: "It's too late to start a shift — Zoe will have opened without you.",
      hub: {
        blurb: "Work the booths, keep the counter stocked, then head to the stockroom when you're ready to close out.",
        areas: [
          { id: "booths", title: "The Booths", icon: "\u{1F37D}", image: "assets/nonadultmedia/booths.png", note: "Vinyl seats, most of them empty. Nothing needs you here right now." },
          { id: "counter", title: "The Counter", icon: "\u{2615}", image: "assets/nonadultmedia/counter.png", note: "Coffee, pie, and eight stools. Nothing needs you here right now." },
          { id: "jukebox", title: "The Jukebox", icon: "\u{1F3B6}", image: "assets/nonadultmedia/jukebox.png", note: "Still broken. Zoe was serious about that." },
          { id: "pass", title: "The Pass", icon: "\u{1F373}", image: "assets/nonadultmedia/pass.png", note: "Where the food lands and the tickets pile up. Nothing needs you here right now." },
          { id: "stockroom", title: "The Stockroom", icon: "\u{1F4E6}", image: "assets/nonadultmedia/stockroom.png", isWorkSpot: true }
        ],
        taskPool: [
          {
            id: "booth_run",
            title: "Booth Run",
            aisleBased: true,
            assignText: "Zoe tips her head at the far corner. “Table four's been nursing the same coffee for an hour. Go be charming at them.”",
            repliesAssign: ["On it.", "Charming is a strong word.", "Define charming."],
            doneText: "You do the round, refill what needs refilling, and clear two plates nobody was going to finish.",
            repliesDone: ["Table four lives.", "Coffee distributed.", "They tipped in coins."]
          },
          {
            id: "restock_counter",
            title: "Counter Restock",
            aisleBased: true,
            assignText: "“We're out of everything that matters,” Zoe says, without looking. “Cups, lids, napkins, the good sugar.”",
            repliesAssign: ["There's good sugar?", "On it.", "Cups, lids, napkins. Got it."],
            doneText: "You haul it all up from the back and get the counter looking like somewhere that intends to serve people.",
            repliesDone: ["Fully stocked.", "Found the good sugar.", "Done."]
          },
          {
            id: "the_fish",
            title: "The Fish Situation",
            aisleBased: true,
            assignText: "A man at the counter is reading the laminated menu with genuine interest. He points. Zoe mouths something at you across the room.",
            repliesAssign: ["I'll handle it.", "Not the fish.", "Sir. Please."],
            doneText: "You steer him to the meatloaf. He seems pleased with himself for the decision he thinks he made.",
            repliesDone: ["Crisis averted.", "He ordered the meatloaf.", "Nobody had the fish."]
          },
          {
            id: "close_side",
            title: "Side Work",
            aisleBased: true,
            assignText: "Zoe slides a laminated list across the pass. “Side work. It's boring and it's half the job.”",
            repliesAssign: ["Boring's fine.", "Half the job, got it.", "I like a list."],
            doneText: "Ketchups married, salts filled, the coffee machine taken apart and put back together mostly right.",
            repliesDone: ["Mostly right.", "Side work done.", "The machine forgives me."]
          }
        ]
      }
    },
    /* Third job: the hotel day shift. Sits between the market and the
       diner on money and on hours, so it's a real choice rather than a
       strict upgrade. Same one-spot / small-task-pool shape as the diner —
       enough for Chloe's storyline to have a room to happen in. */
    hotel: {
      title: "The Ashgrove",
      managerId: "chloe",
      pay: 20,
      startHour: 10,
      latestStartHour: 14,
      openHours: { start: 10, end: 19 },
      closedText: "The Ashgrove's front doors are locked and the lobby's dark. Nobody's on the desk until ten.",
      /* To put this back behind the Patreon code, add `earlyAccess: true`
         here. The gate itself (code, popup, storage) is still in engine.js
         and works off this one flag — nothing else needs changing. */
      taskDurationHours: 1,
      closeOutHours: 1,
      textHireOffer: "“Okay so — sorry, hi, one second—” The woman behind the desk finishes something on the computer, holds up a finger, abandons it. “Right. You want the job. There's a job. There is definitely a job, Ruth has been asking me to put a card in the window for three weeks and I keep forgetting, so honestly you've saved me a job by asking about the job.” She stops. “That sentence got away from me. Twenty a shift, ten till the afternoon, weekdays. I'm Chloe.”",
      hireAcceptBeats: [
        "chloe::“Great. Brilliant.” She's already pulling a lanyard out of a drawer that contains, visibly, four lanyards and a stapler. “This is yours. It says FRONT OF HOUSE. You are not front of house, nobody is front of house, but it's the only one left.”",
        "player::What am I, then?",
        "chloe::“Whatever's broken that hour.” She says it cheerfully. “Ruth owns it, Ruth's here Tuesdays, and Ruth thinks the pool still gets used. Don't correct her on that, she gets sad.”",
        "narrator::Behind her there's a board of twenty-six room keys. Four of them are missing. It's a Wednesday in a town with no reason to visit it.",
        "chloe::“It's quiet,” she says, catching you looking. “I'm aware it's quiet. That's — genuinely that's the pitch. It's quiet and I'll talk too much and you'll get twenty quid.”"
      ],
      repliesHireAccept: [{ text: "Sold on the talking too much.", stat: "witty" }, { text: "Quiet's fine by me.", stat: "warm" }, { text: "I'll take it.", stat: "bold" }],
      textHireDecline: "“No, that's fair, that's completely fair.” She puts the lanyard back in the drawer with the other four. “The card's going in the window this week anyway. Probably.”",
      textFirstDayOnly: "Chloe wrote you onto the rota in pencil. You start tomorrow.",
      textArrival: "The Ashgrove's lobby smells like carpet shampoo and, underneath that, a building that was grand in about 1974.",
      claireGreeting: [
        "chloe::“You came back!” Chloe says it with real surprise, then hears herself. “That was rude. That sounded rude. I meant it nicely.”",
        "player::It sounded fine.",
        "chloe::“It sounded like I'd bet against you.” She slides the lanyard across the desk. “I hadn't. I didn't have anyone to bet with.”"
      ],
      repliesArrival: ["I'm hard to get rid of.", { text: "Nobody to bet with — I know that feeling.", stat: "warm" }, { text: "You can bet against me tomorrow.", stat: "witty" }],
      closingArrival: "chloe::“Desk is mine, corridors are yours, and if the phone rings twice let me get it — it's usually Ruth and she'll keep you forty minutes.”",
      textShiftComplete: "You hand the keys back in, and the lobby does the thing it does in the late afternoon where the light comes through the doors sideways and it almost looks like a nice hotel.",
      repliesShiftComplete: ["Quiet one.", { text: "Same time tomorrow.", stat: "warm" }, { text: "Ruth called three times.", stat: "witty" }],
      closingShiftComplete: "chloe::“She always does.” Chloe logs off with one finger. “Go home. See you.”",
      textWrongDay: "The Ashgrove's desk shift runs weekdays only.",
      textAlreadyWorked: "You've already done today's shift. Chloe signed you out.",
      textTooLate: "It's too late to pick up a desk shift — Chloe will have covered it alone.",
      hub: {
        blurb: "Work the corridors and the lobby, then come back to the desk when you're ready to sign out.",
        areas: [
          { id: "lobby", title: "The Lobby", icon: "\u{1F6CB}", image: "assets/nonadultmedia/lobbyhotel.png", note: "Four armchairs and a rack of leaflets for attractions in the next county. Nothing needs you here right now." },
          { id: "corridors", title: "The Corridors", icon: "\u{1F6AA}", image: "assets/nonadultmedia/corridors.png", note: "Twenty-six doors, most of them not in use. Nothing needs you here right now." },
          { id: "pool", title: "The Pool", icon: "\u{1F3CA}", image: "assets/nonadultmedia/pool.png", note: "Down the back stairs, lit and heated and completely empty. Ruth insists." },
          { id: "desk", title: "The Front Desk", icon: "\u{1F5DD}", image: "assets/nonadultmedia/frontdesk.png", isWorkSpot: true }
        ],
        taskPool: [
          {
            id: "linen_run",
            title: "Linen Run",
            aisleBased: true,
            assignText: "“Eleven and fourteen checked out and I have not been up there,” Chloe says. “I have been down here. Being present. At the desk. Where I am contractually.”",
            repliesAssign: ["I'll go.", "Contractually present.", "Eleven and fourteen."],
            doneText: "You strip both rooms, haul the linen down, and find someone's phone charger behind a headboard.",
            repliesDone: ["Found a charger.", "Both done.", "Nobody's coming back for the charger."]
          },
          {
            id: "the_phone",
            title: "The Phone",
            aisleBased: true,
            assignText: "The desk phone rings twice, then a third time. Chloe looks at it. Chloe looks at you.",
            repliesAssign: ["It's Ruth, isn't it.", "I'll get it.", "You said two rings."],
            doneText: "It's Ruth. It takes eleven minutes. She wants to know whether anyone has been using the pool.",
            repliesDone: ["I said yes.", "Eleven minutes.", "She asked about the pool."]
          },
          {
            id: "leaflets",
            title: "The Leaflet Rack",
            aisleBased: true,
            assignText: "“Someone's put the caves at the front again,” Chloe says darkly. “The caves closed in 2019. We're advertising caves that don't exist.”",
            repliesAssign: ["Death to the caves.", "On it.", "How long have they been there?"],
            doneText: "You rebuild the rack, bin nine leaflets for permanently closed attractions, and leave the steam railway at the front because it, at least, is real.",
            repliesDone: ["Caves eliminated.", "The railway lives.", "Nine of them were dead."]
          },
          {
            id: "pool_check",
            title: "Pool Check",
            aisleBased: true,
            assignText: "“Chemicals,” Chloe says, handing you a clipboard with a laminated chart on it. “Nobody swims in it and we test it twice a day. Ruth's rules. Don't fight Ruth's rules.”",
            repliesAssign: ["Ruth's rules.", "Twice a day for nobody.", "I like a laminated chart."],
            doneText: "The water is warm, clear, and violently blue under the lights. The readings are exactly what they were this morning. You write them down anyway.",
            repliesDone: ["Perfectly balanced.", "Still nobody swimming.", "Logged."]
          }
        ]
      }
    },
    market: {
      title: "Supermarket",
      managerId: "marina",
      pay: 15,
      startHour: 7,
      latestStartHour: 10,
      openHours: { start: 7, end: 23 },
      closedText: "The supermarket's shutters are down. Nobody's in until seven.",
      taskDurationHours: 1,
      closeOutHours: 1,
      textHireOffer: "“I'm Marina, the manager here. Claire told me you were new in town, so I'll keep this simple: we have a small exchange-student internship available at the supermarket. You can work Monday to Friday, and the regular shift pays $15. The first day is just getting your number saved and the rules sent to your phone.”",
      hireAcceptBeats: [
        "marina::“Good. Let's get you on the books — come with me to the back office for a minute.”",
        "narrator::You follow her to a small office behind the stockroom, where she has you fill out a short form: your name, your availability, an emergency contact. Marina looks it over, stamps something, and slides a laminated sheet of shift rules across the desk.",
        "marina::“Store hours, break policy, the usual. Nothing complicated — Claire can answer whatever this sheet doesn't.”",
        "narrator::She pins your name to the schedule taped by the door.",
        "marina::“You start tomorrow. Be here by 7:00 and we'll get you set up on the floor.”",
        "narrator::Marina saves your number before you head out."
      ],
      repliesHireAccept: [{ text: "Thanks, Marina. See you tomorrow.", stat: "warm" }, { text: "I won't be late.", stat: "bold" }, "7:00. Got it."],
      textHireDecline: "“No problem. If you decide to take the internship, come back before 10:00 on a weekday and ask again.”",
      textFirstDayOnly: "The internship contact was just added today. The route starts on the next eligible workday.",
      textArrival: "You get to the supermarket a few minutes before 7:00, the morning street still quiet.",
      claireGreeting: [
        "claire::Claire looks up from behind the register and gives you a small wave. “Morning. Right on time.”",
        "player::Morning. Where do you want me today?",
        "claire::“Same as always — Marina has you rotating the floor. Come find me if anything looks confusing.”"
      ],
      repliesArrival: ["Sounds good.", { text: "I'll find you if I get lost.", stat: "witty" }, { text: "Let's get started, then.", stat: "bold" }],
      closingArrival: "claire::Claire is already turning back to the register, giving you a quick thumbs-up over her shoulder.",
      hub: {
        blurb: "Rotate through the floor and take care of what needs doing, then head to the stockroom when you're ready to close out the shift.",
        areas: [
          { id: "aisle_1", title: "Aisle 1", icon: "\u{1F35E}", image: "assets/nonadultmedia/aisles/aisle1.png", note: "Bread and dry goods, neatly stacked. Nothing needs your attention here right now." },
          { id: "aisle_2", title: "Aisle 2", icon: "\u{1F95B}", image: "assets/nonadultmedia/aisles/aisle2.png", note: "Dairy and refrigerated cases hum quietly. Nothing needs your attention here right now." },
          { id: "aisle_3", title: "Aisle 3", icon: "\u{1F34E}", image: "assets/nonadultmedia/aisles/aisle3.png", note: "Produce, still fresh from this morning's delivery. Nothing needs your attention here right now." },
          { id: "aisle_4", title: "Aisle 4", icon: "\u{1F9FC}", image: "assets/nonadultmedia/aisles/aisle4.png", note: "Household supplies and cleaning products. Nothing needs your attention here right now." },
          { id: "aisle_5", title: "Aisle 5", icon: "\u{1F9C3}", image: "assets/nonadultmedia/aisles/aisle5.png", note: "Drinks and snacks, mostly restocked already. Nothing needs your attention here right now." },
          { id: "register", title: "Front Register", icon: "\u{1F9FE}", image: "assets/nonadultmedia/caixa.png", note: "Claire has the register covered for now. Nothing needs your attention here right now." },
          { id: "stockroom", title: "Stockroom", icon: "\u{1F4E6}", image: "assets/nonadultmedia/stockroom.png", isWorkSpot: true }
        ],
        /* 3 of these are drawn at random each shift. The aisle-based ones
           get assigned to a random aisle; "{aisle}" is substituted with
           that aisle's title. Register Backup always points at "register". */
        taskPool: [
          {
            id: "restock",
            title: "Restock Run",
            aisleBased: true,
            assignText: "Claire flags you down with a hand cart of boxes. “These go on {aisle} — mind stacking them so the labels face out?”",
            repliesAssign: ["On it.", "Labels out, got it.", "Living the dream, one box at a time."],
            doneText: "You wheel the boxes over to {aisle} and get them stacked before anyone notices the gap on the shelf.",
            repliesDone: ["One aisle down.", "Nobody will ever know.", "Box duty, complete."]
          },
          {
            id: "customer_assist",
            title: "Customer Assist",
            aisleBased: true,
            assignText: "A customer stops you near {aisle}, glancing around with a slightly lost expression. “Sorry to bother you — could you point me toward something?”",
            repliesAssign: ["Happy to help.", "You found the right person. Mostly.", "Lead the way — I mean, follow me."],
            doneText: "You walk them over and point out exactly what they needed. They thank you and head off, already checking it off their list.",
            repliesDone: ["Just doing my job.", "Another satisfied customer.", "I should get a badge for this."]
          },
          {
            id: "spill",
            title: "Spill Cleanup",
            aisleBased: true,
            assignText: "Someone knocks a bottle off the shelf in {aisle} just as you're walking by, glass and liquid spreading fast across the tile.",
            repliesAssign: ["Great.", "On it before someone slips.", "The glamorous side of retail."],
            doneText: "You mop up the mess in {aisle} and set out a small hazard sign until the floor dries.",
            repliesDone: ["Crisis averted.", "Add that to my resume.", "Floor's dry-ish. Good enough."]
          },
          {
            id: "register",
            title: "Register Backup",
            aisleBased: false,
            area: "register",
            assignText: "claire::Claire waves you over to the front. “Can you cover the register with me for a bit? The line's getting long.”",
            repliesAssign: ["On my way.", "Front lines, here I come.", "Anything for you, Claire."],
            doneText: "You spend a stretch scanning items and making change while Claire bags everything twice as fast as you.",
            repliesDone: ["I'll get faster. Eventually.", "You make it look easy.", "Line's clear. We make a good team."]
          }
        ]
      },
      textShiftComplete: "The stockroom is quiet by the time you finish the last of the boxes. Marina signs off on your hours before you head back out.\n\nMoney +$15",
      repliesShiftComplete: ["Same time tomorrow.", "That was a full day.", { text: "Worth it, for the $15.", stat: "witty" }],
      closingShiftComplete: "marina::Marina gives a short nod without looking up from the schedule board. “See you tomorrow.”",
      textAlreadyWorked: "You already worked a shift today. Come back tomorrow.",
      textWrongDay: "The internship only runs Monday to Friday.",
      textTooLate: "Work entry only stays open until 10:00. You'll need to come earlier on a weekday.",
      /* Fires once, at the end of the SECOND shift only — see completeShift. */
      secondShiftGoodbye: [
        "claire::Claire catches you heading for the door and leans against the frame, arms crossed, a slow smile creeping in. “Two shifts in and you still haven't asked for my number. I was starting to think you weren't interested.”",
        "player::I didn't want to assume.",
        "claire::“Bold of you to assume I'd mind.” She holds out her hand for your phone, thumbs it for a few seconds, then hands it back with a satisfied look. “There. Now you have an excuse to text me instead of just standing there being polite.”",
        "claire::“Don't waste it.”"
      ],
      repliesSecondShiftGoodbye: [{ text: "I won't.", stat: "bold" }, { text: "Careful, I might actually use it.", stat: "bold" }, { text: "Duly noted.", stat: "witty" }],
      closingSecondShiftGoodbye: "claire::She's already stepping back behind the register, but she's still smiling when she calls after you. “Text me. I mean it.”",
      secondShiftGoodbyeContact: "claire"
    }
  },

  /* ---------------- companion scenes ----------------
     Unlocked once a companion's bond reaches 10 (i.e. both her quests
     are complete). Playable once, then replayable from the Gallery.
     `video` on a line points at an unlocked clip shown under that beat. */
  actions: {
    lily: {
      room: "kitchen",
      title: "Lily - Kitchen",
      beats: [
        { speaker: "narrator", text: "The kitchen is warm with late light and the smell of something Lily has been preparing. She stands at the counter with her sleeves pushed up, reading from a recipe card that has more notes in the margins than the recipe itself." },
        { speaker: "lily", text: "“If you are going to hover in the doorway, at least make yourself useful.”" },
        { speaker: "player", text: "I was not hovering." },
        { speaker: "lily", text: "“You were absolutely hovering. Quietly, but not subtly.”" },
        { speaker: "narrator", text: "She turns back to the counter, but not before giving you a look that says she knows exactly where your attention has been.", video: "lilycomeco" },
        { speaker: "lily", text: "“Hand me that towel.”" },
        { speaker: "protagonist", text: "This one?" },
        { speaker: "lily", text: "“Yes. Come closer. I do not bite unless someone makes a habit of staring.”" },
        { speaker: "narrator", text: "You step in behind her to pass it over. Lily does not move away. If anything, she waits just long enough for the closeness to become its own answer.", video: "lilyencosta" },
        { speaker: "player", text: "You noticed." },
        { speaker: "lily", text: "“I notice everything in my kitchen.”" },
        { speaker: "narrator", text: "The towel is forgotten on the counter. Lily's breath changes first, then her posture, then the careful way she lets herself lean back until there is no pretending the contact is accidental." },
        { speaker: "lily", text: "“There. That is more honest.”" },
        { speaker: "player", text: "Tell me to step back if you want me to." },
        { speaker: "lily", text: "“I am not telling you that.”" },
        { speaker: "narrator", text: "The kitchen stops being a room for chores. Lily keeps one hand on the counter, steady and composed in all the ways her voice is not.", video: "lilypeito" },
        { speaker: "lily", text: "“You have been too polite with me.”" },
        { speaker: "player", text: "And now?" },
        { speaker: "lily", text: "“Now I would like you to be less polite.”" },
        { speaker: "narrator", text: "The last of her careful distance disappears. Lily lets you see the want she usually hides under warmth and responsibility, and the counter becomes the only thing keeping the room organized.", video: "lilymast" },
        { speaker: "lily", text: "“Look at me. I want to know you understand what I am asking for.”" },
        { speaker: "player", text: "I understand." },
        { speaker: "lily", text: "“Good. Then do not make me ask twice.”" },
        { speaker: "narrator", text: "The neat rhythm of the kitchen breaks completely. Lily lets herself be guided onto the counter, breath catching at the change in height, one hand finding your shoulder as if she has been waiting to put it there.", video: "lilioral" },
        { speaker: "lily", text: "“I should be telling you this is a bad idea.”" },
        { speaker: "player", text: "Are you going to?" },
        { speaker: "lily", text: "“No.”" },
        { speaker: "narrator", text: "Her answer lands plainly, without performance. Lily gives up the last thread of composure and lets the moment turn focused, intimate, and impossible to confuse with anything else.", video: "lilyoral2" },
        { speaker: "lily", text: "“Stay there. I like you right there.”" },
        { speaker: "player", text: "You are shaking." },
        { speaker: "lily", text: "“I know. Do not make me feel sensible about it.”" },
        { speaker: "narrator", text: "Her voice loses its tidy edges. The kitchen light catches on scattered utensils, abandoned ingredients, and the look Lily gives you when she finally stops trying to make this seem restrained.", video: "lilydoggy" },
        { speaker: "lily", text: "“You have no idea how long I have wanted quiet to feel like this.”" },
        { speaker: "player", text: "Then do not be quiet." },
        { speaker: "lily", text: "“Careful. I might take you seriously.”" },
        { speaker: "narrator", text: "She does. The room shifts with her decision, and for a while the only thing that matters is Lily choosing desire over the careful role she usually plays in the house." },
        { speaker: "lily", text: "“No more hovering. If you want me, act like it.”" },
        { speaker: "player", text: "I want you." },
        { speaker: "lily", text: "“That sounded better than I expected.”" },
        { speaker: "narrator", text: "The counter, the cabinets, the dim kitchen window, all of it becomes background. Lily's composure keeps breaking in small visible ways, and each one makes her more honest.", video: "lilydelado" },
        { speaker: "lily", text: "“Do not look away from me.”" },
        { speaker: "player", text: "I am not." },
        { speaker: "lily", text: "“Good. I want to feel like you are right here with me.”" },
        { speaker: "narrator", text: "She turns the moment with a breathless kind of confidence, less concerned with appearing graceful than with keeping you close." },
        { speaker: "lily", text: "“There. Stay with that rhythm.”" },
        { speaker: "player", text: "You like this." },
        { speaker: "lily", text: "“Very much. And I am not going to make that sound modest.”" },
        { speaker: "narrator", text: "Near the end, Lily's voice turns softer but not shy. She reaches for you with purpose, asking for the final moment in the same clear way she has guided the rest.", video: "lilyfinal" },
        { speaker: "lily", text: "“Do not pull away. I want the end close.”" },
        { speaker: "player", text: "Lily..." },
        { speaker: "lily", text: "“Inside the moment with me. I want to feel you stay.”" },
        { speaker: "narrator", text: "She keeps you there, certain and unguarded, letting the kitchen fall silent around the choice she makes for herself." },
        { speaker: "lily", text: "“Give me a second before either of us says something normal.”" },
        { speaker: "player", text: "Take as long as you need." },
        { speaker: "narrator", text: "Later, Lily rests back against the counter with a laugh she tries and fails to make composed. The forgotten recipe card sits beside her, useless and somehow deeply accusing." },
        { speaker: "lily", text: "“For the record, this is not what I meant by helping in the kitchen.”" },
        { speaker: "player", text: "No?" },
        { speaker: "lily", text: "“No. But I may need help again.”" },
        { speaker: "narrator", text: "She smiles before looking away, warm and a little undone. The kitchen feels different now, not ruined, just claimed by a secret neither of you is ready to give back." }
      ]
    },
    maya: {
      room: "maya_room",
      title: "Maya - Private Study",
      beats: [
        { speaker: "narrator", text: "Maya's door is half-open when you reach the upstairs hall. Warm desk light spills across scattered notes, highlighted pages, and a notebook she has clearly stopped reading. The study session is real, but the way she looks up tells you it is no longer the only reason she asked you here.", video: "maya/action1/Mayacomeco" },
        { speaker: "maya", text: "“You came. Good. I was starting to think I would have to finish this entire assignment and pretend I was not watching the door.”" },
        { speaker: "player", text: "You said you needed help studying." },
        { speaker: "maya", text: "“I do. I also needed you in my room long enough to stop pretending I was focused.”" },
        { speaker: "narrator", text: "She taps the open notebook with her pen, but her eyes stay on you. The page is full of notes about memory and ritual; the silence between you is busy making its own argument." },
        { speaker: "maya", text: "“Read this paragraph and tell me if it makes sense. I need a second opinion.”" },
        { speaker: "player", text: "You are not looking at the paragraph." },
        { speaker: "maya", text: "“No. I am not.”" },
        { speaker: "narrator", text: "The study excuse holds for another breath, thin as paper. Maya leans back against the desk, close enough that the lamp catches every shift in her expression." },
        { speaker: "maya", text: "“If you are going to stare, at least admit you know what I am doing.”" },
        { speaker: "player", text: "I am starting to." },
        { speaker: "maya", text: "“Good. I was worried I was being too subtle.”" },
        { speaker: "narrator", text: "Subtle is gone. Maya lets the moment sharpen, watching your reaction with a boldness that turns the quiet room into something charged and deliberate.", video: "mayatoque" },
        { speaker: "player", text: "You planned this." },
        { speaker: "maya", text: "“I prepared for several academic outcomes. This is my preferred one.”" },
        { speaker: "narrator", text: "Her confidence stops being playful and becomes invitation. She is still beside the desk, still framed by notebooks and lecture notes, but the assignment has lost every claim it had on the night." },
        { speaker: "maya", text: "“Come closer. I want to see if you are as calm as you are trying to look.”" },
        { speaker: "player", text: "I am not calm." },
        { speaker: "maya", text: "“I know.”" },
        { speaker: "narrator", text: "You step in. Maya keeps her eyes on yours as the distance closes, making no attempt to hide the way she is enjoying your attention.", video: "mayapunheta" },
        { speaker: "maya", text: "“That is better. Now you are paying attention to the right lesson.”" },
        { speaker: "player", text: "And what exactly am I supposed to learn?" },
        { speaker: "maya", text: "“How obvious I can be before you finally stop acting careful.”" },
        { speaker: "narrator", text: "The answer arrives without ceremony. Her hand finds you first, confident enough to end the question and careful enough to watch your face while she does it." },
        { speaker: "player", text: "Maya." },
        { speaker: "maya", text: "“Say my name like that again and I am going to forget every responsible thing I planned to do tonight.”" },
        { speaker: "player", text: "Forget them." },
        { speaker: "narrator", text: "The desk creaks softly behind her as the last of the study plan collapses into background noise. Maya is all focus now, not on the paper, not on the deadline, but on you." },
        { speaker: "maya", text: "“Then watch me. No jokes. No pretending this is accidental.”" },
        { speaker: "player", text: "I am watching." },
        { speaker: "maya", text: "“Good. I want to know exactly what that does to you.”" },
        { speaker: "narrator", text: "The room narrows to breath, movement, and the lamp throwing warm light across scattered pages. Whatever this was supposed to be, it is something else now, and neither of you wants the old version back." },
        { speaker: "maya", text: "“You are not getting out of this with a tidy excuse tomorrow.”" },
        { speaker: "player", text: "I was not planning to." },
        { speaker: "maya", text: "“Good answer.”" },
        { speaker: "narrator", text: "Maya turns the momentum into something bolder, guiding you with a confidence that makes the room feel smaller and louder at the same time.", video: "mayaboquete" },
        { speaker: "maya", text: "“Still trying to think about homework?”" },
        { speaker: "player", text: "No." },
        { speaker: "maya", text: "“Perfect. Then I am officially an excellent tutor.”" },
        { speaker: "narrator", text: "The joke barely survives the way she says it. Maya's voice keeps its edge, but the room has moved past teasing and into a rhythm neither of you wants to interrupt." },
        { speaker: "player", text: "You like being in control." },
        { speaker: "maya", text: "“I like watching you realize I am not guessing.”" },
        { speaker: "narrator", text: "Maya changes the angle of the moment with a look over her shoulder, daring you to keep up as the room turns rougher, closer, and impossible to mistake for anything academic.", video: "mayadoggy" },
        { speaker: "maya", text: "“Do not get quiet on me now. I want to know you are still with me.”" },
        { speaker: "player", text: "You are making it impossible to think about anything else." },
        { speaker: "maya", text: "“Good. Then stop thinking and stay with me.”" },
        { speaker: "narrator", text: "Her confidence rises and breaks and comes back again, less polished each time. The neat student at the desk is gone; what remains is Maya choosing the pace without hiding from how much she wants it." },
        { speaker: "maya", text: "“There. That look. Keep looking at me exactly like that.”" },
        { speaker: "player", text: "You have all of my attention." },
        { speaker: "maya", text: "“Then keep it on me while I take what I wanted.”" },
        { speaker: "narrator", text: "The night keeps moving, unhurried and unmistakable. Maya takes the lead fully now, steadying herself with a breathless kind of certainty while the assignment waits open on the desk, ignored by everyone in the room.", video: "mayaporcima" },
        { speaker: "maya", text: "“I should feel guilty about the paper.”" },
        { speaker: "player", text: "Do you?" },
        { speaker: "maya", text: "“Not even a little. Not when you look at me like that.”" },
        { speaker: "narrator", text: "Maya shifts closer again, keeping control with both hands and a smile that keeps slipping whenever the moment hits harder than her confidence can cover.", video: "mayacowgirl" },
        { speaker: "maya", text: "“I want you to remember this the next time I say I need help studying.”" },
        { speaker: "player", text: "I do not think that will be a problem." },
        { speaker: "maya", text: "“Good. I would hate to be forgettable, especially after making this much of a point.”" },
        { speaker: "narrator", text: "The edge in her voice turns softer near the end, not shy, just honest in a way she has not been all night. Maya stays close, watching you with a focused hunger that makes the request feel deliberate before she says it." },
        { speaker: "maya", text: "“Stay with me. I want the end close.”" },
        { speaker: "player", text: "I am here." },
        { speaker: "maya", text: "“Good. I want it on my terms. I want to taste what you have been holding back.”" },
        { speaker: "narrator", text: "She makes the last choice herself, close and certain, letting the moment finish on her terms before the room finally goes still.", video: "mayafinal" },
        { speaker: "maya", text: "“Do not say anything clever yet.”" },
        { speaker: "player", text: "I was not going to." },
        { speaker: "maya", text: "“Good. I need at least ten seconds before I rebuild my personality.”" },
        { speaker: "narrator", text: "Later, the room is quiet in a completely different way. Maya sits beside you with her knees drawn up, close enough that your arms still touch, pretending the open notebook can make this look academic again." },
        { speaker: "maya", text: "“For the record, we did technically study.”" },
        { speaker: "player", text: "Technically." },
        { speaker: "maya", text: "“Great. Then my academic integrity remains flawless, and neither of us has to explain why the notes are on the floor.”" },
        { speaker: "player", text: "Is that what happened?" },
        { speaker: "maya", text: "“A tragic academic accident. Very respectable.”" },
        { speaker: "narrator", text: "She smiles at that, softer and more exposed than before. Whatever this becomes next, it has already moved past the version of you both that existed when you first stepped into the room." }
      ]
    },
    noelle: {
      room: "noelle_room",
      title: "Noelle - Overnight",
      beats: [
        { speaker: "narrator", text: "The house is short one usable bed after a leak stains the ceiling in your room. Lily sends you upstairs with an apologetic look and a spare blanket, promising it is only for one night. Noelle's door is half-open when you arrive.", video: "noellecomeco" },
        { speaker: "narrator", text: "Noelle is already on the bed with her back to you, one knee drawn up, pretending not to notice how long you pause after stepping into the room." },
        { speaker: "player", text: "Noelle?" },
        { speaker: "noelle", text: "“You can come in. If Lily sent you, I already know why you are here.”" },
        { speaker: "narrator", text: "The room is dim and quiet, warmer than the hallway. Noelle shifts on the bed without turning all the way around, leaving just enough space to make the invitation feel deliberate." },
        { speaker: "noelle", text: "“You need somewhere to sleep. The bed is big enough if you do not make it weird.”" },
        { speaker: "player", text: "And if I do?" },
        { speaker: "noelle", text: "“Then be honest about it. You can stay in the bed and do whatever, as long as you stop pretending you are only tired.”" },
        { speaker: "narrator", text: "The sentence hangs there, calm on the surface and anything but calm underneath. Noelle finally glances back, watching your reaction with quiet certainty.", video: "noelleconversa" },
        { speaker: "player", text: "You are saying that very casually." },
        { speaker: "noelle", text: "“I am trying to. It is not working as well as I hoped.”" },
        { speaker: "narrator", text: "You sit at the edge of the bed first. Noelle waits, then settles back inch by inch until the contact is impossible to mistake for an accident.", video: "noelledeitada" },
        { speaker: "noelle", text: "“Still just tired?”" },
        { speaker: "player", text: "No." },
        { speaker: "noelle", text: "“Good. I would rather not be the only one admitting things tonight.”" },
        { speaker: "narrator", text: "Her confidence is quiet, but it keeps moving. She presses back against you with careful intent, waiting just long enough to know you understand before letting the moment deepen." },
        { speaker: "noelle", text: "“You can touch me.”" },
        { speaker: "player", text: "Like this?" },
        { speaker: "noelle", text: "“Yes. Do not act surprised when I know what I want.”" },
        { speaker: "narrator", text: "Your hand finds her, and Noelle's composure breaks in a small, visible way. She does not pull away. She guides the moment forward with a breath that sounds like permission and impatience at once.", video: "noellesexo" },
        { speaker: "noelle", text: "“There. That is better.”" },
        { speaker: "player", text: "You are not as quiet as you pretend." },
        { speaker: "noelle", text: "“Only when someone gives me a reason not to be.”" },
        { speaker: "narrator", text: "The bed shifts beneath both of you. Noelle lets the night turn direct, no longer hiding behind the excuse of sleep or the thin blanket between you." },
        { speaker: "noelle", text: "“Do not slow down because I am quiet. I will tell you if I need that.”" },
        { speaker: "player", text: "Then tell me what you want." },
        { speaker: "noelle", text: "“I want you to keep going.”" },
        { speaker: "narrator", text: "Noelle changes position with a sharp breath, choosing a bolder angle and trusting you to follow.", video: "noelledoggy" },
        { speaker: "noelle", text: "“Look at me. I want to see what this does to you.”" },
        { speaker: "player", text: "You already know." },
        { speaker: "noelle", text: "“I want to see it anyway.”" },
        { speaker: "narrator", text: "The rhythm changes again. From your side of the room, the quiet girl on the bed is gone; Noelle is present, deliberate, and fully aware of what she is asking for.", video: "noelledoggy2" },
        { speaker: "noelle", text: "“Do not look away now.”" },
        { speaker: "player", text: "I am not going to." },
        { speaker: "noelle", text: "“Good. I want you here until the end.”" },
        { speaker: "narrator", text: "Near the end, Noelle stops trying to sound composed. She reaches back for you, not frantic, not shy, just certain that she wants the last moment to belong to both of you.", video: "noellefinal" },
        { speaker: "noelle", text: "“Stay close. Let me feel when you stop holding back.”" },
        { speaker: "player", text: "Noelle..." },
        { speaker: "noelle", text: "“I know. Stay.”" },
        { speaker: "narrator", text: "The room finally goes still in the softest way, the blanket half-forgotten and the reason you came here feeling very far away." },
        { speaker: "noelle", text: "“So. Sleeping arrangement solved.”" },
        { speaker: "player", text: "That is what we are calling it?" },
        { speaker: "noelle", text: "“For now. I am too comfortable to invent a better lie.”" },
        { speaker: "narrator", text: "She settles back beside you, quiet again, but not distant. Whatever happens tomorrow, the bed no longer feels borrowed." }
      ]
    },
    sabrina: {
      room: "living_room",
      title: "Vivian - Fever Dream",
      beats: [
        { speaker: "narrator", text: "You find Vivian in the kitchen near midnight, moving around like she owns the room. Your head feels heavy, your skin too warm, and the light over the counter has a strange halo around it.", video: "sabrinainicio" },
        { speaker: "sabrina", text: "“You look terrible. Charming, but terrible.”" },
        { speaker: "player", text: "I think I just need water." },
        { speaker: "sabrina", text: "“Water is boring. Sit down. I will make coffee, and you can pretend you are not staring.”" },
        { speaker: "narrator", text: "She turns toward the counter, reaching for a mug. Your focus drifts before you can stop it, drawn by the slow confidence in the way she moves." },
        { speaker: "sabrina", text: "“Careful. Fever makes people honest.”" },
        { speaker: "player", text: "I am not feverish." },
        { speaker: "sabrina", text: "“Then why are your eyes doing all the confessing?”" },
        { speaker: "narrator", text: "The coffee never reaches the cup. The kitchen tilts softly, as if the room is being pulled underwater. Vivian's voice stays close while everything else blurs." },
        { speaker: "sabrina", text: "“There it is. Do not fight it. You are exhausted.”" },
        { speaker: "player", text: "Vivian?" },
        { speaker: "sabrina", text: "“Still here. Sort of.”" },
        { speaker: "narrator", text: "When you open your eyes again, the kitchen is gone. The air is warmer, heavier, impossible. Vivian is above you in the dream, smiling like she knows the rules and you do not.", video: "sabrinaexplicando" },
        { speaker: "sabrina", text: "“Before you panic: you are dreaming. Mostly. That means you can stop pretending this is normal.”" },
        { speaker: "player", text: "This feels too real." },
        { speaker: "sabrina", text: "“Good dreams usually do.”" },
        { speaker: "narrator", text: "She lowers herself closer, inviting your hands with a look instead of a command. The dream answers every thought too quickly, turning want into touch before hesitation can catch up." },
        { speaker: "sabrina", text: "“See? The fever is not subtle, but it has excellent taste.”" },
        { speaker: "player", text: "Are you real?" },
        { speaker: "sabrina", text: "“Real enough for tonight.”" },
        { speaker: "narrator", text: "The dream shifts with her smile. Vivian takes control of the strange rules around you, making the air pulse with heat and the certainty that she wants your attention completely.", video: "sabrinaoral" },
        { speaker: "sabrina", text: "“Do not look so lost. I am helping.”" },
        { speaker: "player", text: "This is your idea of helping?" },
        { speaker: "sabrina", text: "“You were tense. I am very generous.”" },
        { speaker: "narrator", text: "The dream becomes more direct, less interested in excuses. Vivian's teasing softens into focus, and she watches every reaction like she is learning how to rewrite the night." },
        { speaker: "sabrina", text: "“There. Better already.”" },
        { speaker: "player", text: "You are enjoying this." },
        { speaker: "sabrina", text: "“Obviously. It is my favorite part of being useful.”" },
        { speaker: "narrator", text: "She climbs over you with dreamlike ease, the room reshaping around her confidence. Every movement says she knows exactly what effect she is having.", video: "sabrinacowgirl" },
        { speaker: "sabrina", text: "“Stay awake for me. Or asleep. Whichever version keeps looking at me like that.”" },
        { speaker: "player", text: "I am looking." },
        { speaker: "sabrina", text: "“Good. Then you know I am not being gentle with your imagination.”" },
        { speaker: "narrator", text: "The dream turns again. Vivian faces away but keeps the lead, laughing softly when she feels your attention follow her without needing to be asked.", video: "sabrinacowgirl2" },
        { speaker: "sabrina", text: "“Still think this is just a fever?”" },
        { speaker: "player", text: "I think you are making it worse." },
        { speaker: "sabrina", text: "“I think you like worse.”" },
        { speaker: "narrator", text: "She lets the dream slow, then deepen. For a moment, the teasing breaks under something more intense, and Vivian's voice catches with the force of it.", video: "sabrinamissionary" },
        { speaker: "sabrina", text: "“Do not stop there. I want to see what happens when the dream loses control.”" },
        { speaker: "player", text: "Vivian..." },
        { speaker: "sabrina", text: "“Yes. Exactly. Keep me there.”" },
        { speaker: "narrator", text: "The dream flashes white-hot for a second, overwhelming enough that even Vivian loses the shape of her teasing. When she laughs again, it sounds breathless and surprised." },
        { speaker: "sabrina", text: "“Well. That was dramatic.”" },
        { speaker: "player", text: "You are blaming the dream?" },
        { speaker: "sabrina", text: "“Absolutely. I am innocent and imaginary.”" },
        { speaker: "narrator", text: "The dream refuses to settle. Vivian shifts again, bold and unhurried, letting the fevered world put her exactly where she wants to be.", video: "sabrinadoggy" },
        { speaker: "sabrina", text: "“Do not wake up yet. We are not finished.”" },
        { speaker: "player", text: "I am not trying to." },
        { speaker: "sabrina", text: "“Good. I would hate to haunt you with unfinished business.”" },
        { speaker: "narrator", text: "Near the end, Vivian climbs over you again, less playful now, her eyes bright with the kind of want that does not bother hiding behind jokes.", video: "sabrinafinal" },
        { speaker: "sabrina", text: "“Stay with me until the end. I want all of it inside.”" },
        { speaker: "player", text: "All of it?" },
        { speaker: "sabrina", text: "“Inside. With me. Do not pull away.”" },
        { speaker: "narrator", text: "The fever breaks like a wave. Vivian keeps you there through the last bright second, asking for the ending with a softness that sounds almost real." },
        { speaker: "sabrina", text: "“Wake up slowly.”" },
        { speaker: "narrator", text: "You jolt awake at the kitchen table. The coffee is cold. Vivian is sitting across from you, chin in her hand, smiling like she knows exactly what kind of dream you had." },
        { speaker: "sabrina", text: "“You were asleep for six minutes.”" },
        { speaker: "player", text: "Only six?" },
        { speaker: "sabrina", text: "“Must have been an efficient dream.”" }
      ]
    }
  },

  /* ---------------- phone ----------------
     Unlocked once "casual_phone_added" is set (currently by the Maya
     "forgot your key" scene). One shared group chat for now — individual
     contact threads are shelved until there's more to say in them. */
  houseChat: [
    { speaker: "lily", text: "Running low on a few things this week — I'll post here when something needs restocking, easier than chasing everyone down the hall." },
    { speaker: "maya", text: "finally. someone else who has to read my 2am thoughts now" },
    { speaker: "noelle", text: "welcome. try to mute it after 11." },
    { speaker: "sabrina", text: "don't let Lily fool you, this chat is 90% her reminding people to do the dishes." },
    { speaker: "lily", text: "Shampoo's almost out again, by the way. Whoever's at the market next—" },
    { speaker: "maya", text: "on it, grabbing it today" },
    { speaker: "lily", text: "Thank you, Maya 💛" }
  ],

  /* Shown the first time the player opens "The House" thread: 3 messages
     to send, each pulling a different branch of replies from whoever
     picks it up. See needsHouseIntro/playHouseIntro in engine.js. */
  houseIntroChoices: [
    {
      label: "hey, thanks for having me",
      responses: [
        { speaker: "lily", text: "Of course! Let us know if you need anything." },
        { speaker: "sabrina", text: "See, this one has manners. Take notes, Maya." },
        { speaker: "maya", text: "rude. i have manners. sometimes." }
      ]
    },
    {
      label: "so what's the wifi password",
      responses: [
        { speaker: "maya", text: "FINALLY someone asks the important questions" },
        { speaker: "maya", text: "house2024, all lowercase, don't @ me about security" },
        { speaker: "noelle", text: "we've been meaning to change it. we will not." }
      ]
    },
    {
      label: "who do I bribe for extra towels",
      responses: [
        { speaker: "sabrina", text: "oh I like this one already" },
        { speaker: "lily", text: "There's a closet in the hallway, no bribery needed. Vivian, don't encourage this." },
        { speaker: "sabrina", text: "Too late." }
      ]
    }
  ],

  /* First text from a newly-added individual contact. Fires once, when the
     player next arrives home after getting that contact — see
     needsClaireText/playClaireText in engine.js. */


    claireFirstText: {
    text: "Made it home in one piece? Barely survived the rest of that shift without you. Here — something to keep you company tonight. Don't get used to it.",
    image: "assets/adult/claire/chat/Screenshot_20260722_110129_Instagram.png"
  },
  claireFirstTextReplies: ["Careful, I might start expecting these.", "You're trouble, you know that?", "I'll pretend I wasn't hoping you'd text."],

  /* ---------------- collectibles ---------------- */
  cards: [
    { id: "dossier_01", name: "Invitation File", rarity: "common", value: 4 },
    { id: "dossier_02", name: "House Record", rarity: "common", value: 4 },
    { id: "dossier_03", name: "Lily Profile", rarity: "rare", value: 12 },
    { id: "dossier_04", name: "House Terms", rarity: "epic", value: 25 },
    { id: "dossier_05", name: "Spare Key", rarity: "legendary", value: 60 }
  ],
  packs: [
    { id: "entry", name: "Invitation Pack", cost: 35, count: 3, rareBonus: 0 },
    { id: "scarlet", name: "Scarlet Pack", cost: 90, count: 5, rareBonus: 0.18 }
  ],

  ntrIntro: { lines: [] },
  ntrIntroOutside: { lines: [] },
  ntrIntroMarket: { lines: [] },
  ntrQuests: {},
  ntrRivalEvents: {},
  ntrRivals: {},
  ntrNetorareQuests: {}
};
