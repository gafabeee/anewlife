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
    marcus: {
      id: "marcus",
      name: "Marcus",
      color: "#8a7060",
      role: "Late husband’s business partner",
      portrait: "assets/portraits/marcus.jpeg",
      ntrOnly: true
    },
    tyler: {
      id: "tyler",
      name: "Tyler",
      color: "#b04040",
      role: "Possessive boyfriend",
      portrait: "assets/portraits/Tyler.jpeg",
      ntrOnly: true
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
      name: "Amber",
      color: "#d8a0ff",
      role: "Exchange student",
      portrait: "assets/portraits/amber.jpeg",
      home: "living_room",
      ntrOnly: true,
      ntrRival: "Ethan",
      ntrRivalRole: "Charming ex",
      description: "Amber is an exchange student with a camera always within reach and an eye for beauty in forgotten places. She’s warm and a little reckless — the kind of girl who’ll climb a fire escape for a sunset photo. Her ex Ethan is back in the picture, all charm and apologies, and she hasn’t decided yet whether she’s over him."
    },
    ethan: {
      id: "ethan",
      name: "Ethan",
      color: "#6a8a50",
      role: "Charming ex",
      portrait: "assets/portraits/Ethan.jpeg",
      ntrOnly: true
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
    },
    derek: {
      id: "derek",
      name: "Derek",
      color: "#606080",
      role: "Emotionally distant fiancé",
      portrait: "assets/portraits/Derek.jpeg",
      ntrOnly: true
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

  ntrIntro: {
    lines: [
      { speaker: "narrator", text: "After a long flight and a day that already feels too full, you finally arrive at the house where you’ll be staying during your exchange." },
      { speaker: "serena", text: "Serena opens the door before you can knock twice. Her smile is warm but careful — the kind a woman gives when she’s been doing everything alone for too long. “You must be the new guest. Come in.”" },
      { speaker: "player", text: "Thanks. I wasn’t sure I had the right place." },
      { speaker: "serena", text: "”You do. I’m Serena — I own the house.” She takes your bag without asking and sets it by the stairs. “Let me show you around before I let you disappear into your room.”" },
      { speaker: "narrator", text: "The house is well-kept but lived-in. Framed photos on the walls, a faint smell of coffee from the kitchen. Someone else’s life, still in progress." },
      { speaker: "serena", text: "She walks you through the ground floor with practiced ease — the kitchen first, then the living room. “Kitchen is always open. I cook most evenings. The living room is shared — try not to leave your shoes by the couch, it drives me insane.”" },
      { speaker: "valentina", text: "A girl on the couch looks up from her phone. “Oh — new roommate?” She gives a small wave without getting up. “I’m Amber.”" },
      { speaker: "serena", text: "”Amber is an exchange student. She’s been here a few months.” Serena touches your arm lightly, steering you toward the stairs. “Your room is up here. Come.”" },
      { speaker: "narrator", text: "She leads you upstairs, pointing out the bathroom, the other rooms, then stops at yours. It’s small but clean, the window cracked open to let the evening air in." },
      { speaker: "serena", text: "”It’s not much, but it’s yours for now.” She lingers in the doorway. “Leave your things. I want to show you the neighborhood before it gets dark — it’ll save you from getting lost tomorrow.”" },
      { speaker: "player", text: "You don’t have to do all this." },
      { speaker: "serena", text: "Something softens in her expression. “I know. But this house has been too quiet for too long. It’s nice to have someone new to show things to.”" }
    ]
  },
  ntrIntroOutside: {
    lines: [
      { speaker: "narrator", text: "Serena walks beside you with her arms loosely crossed, pointing out things as you go — the mailbox that sticks, the neighbor’s cat that thinks it owns the sidewalk, the shortcut through the park." },
      { speaker: "serena", text: "”The park is just across the road. Good for clearing your head. I used to walk there every evening after—“ She catches herself. “Well. It’s nice.”" },
      { speaker: "kira", text: "A girl jogs past and slows down when she notices the two of you. “Serena! New recruit?” She grins, barely out of breath." },
      { speaker: "serena", text: "”Kira, this is our new exchange student. Try not to scare him off on day one.”" },
      { speaker: "kira", text: "”I’m Kira. I run here every morning.” She stretches without stopping. “If you ever want to join, I start at six. No excuses accepted.”" },
      { speaker: "narrator", text: "She takes off before you can answer. Quick, direct — and already gone." },
      { speaker: "serena", text: "Serena watches her go with a small smile. “She’s like that. All energy, no filter.” She turns back to you. “There’s a supermarket just down the street. Let me introduce you — you’ll need it sooner than you think.”" }
    ]
  },
  ntrIntroMarket: {
    lines: [
      { speaker: "narrator", text: "The supermarket is small but well-organized. A bell chimes as Serena holds the door open for you." },
      { speaker: "serena", text: "”This is where I get everything for the house. Harper runs it — she’s—“" },
      { speaker: "narrator", text: "Serena stops mid-sentence. Standing by the register, leaning against the counter like he owns the building, is a man in a tailored jacket. Broad shoulders, an expensive watch, and a smile that sharpens the moment he sees Serena." },
      { speaker: "marcus", text: "“Well.” He straightens up, his eyes moving from Serena to you and back. “Look who decided to leave the house.”" },
      { speaker: "narrator", text: "Serena’s posture changes instantly. Her shoulders pull back, her jaw tightens." },
      { speaker: "serena", text: "“Marcus.”" },
      { speaker: "narrator", text: "He steps closer. Taller than you expected, moving with the easy confidence of a man who’s used to being the most important person in any room." },
      { speaker: "marcus", text: "“And who’s this?” He looks at you — not unkindly, but the way someone looks at something they’re measuring. “A new tenant? I didn’t realize you were still running the exchange program, Serena.”" },
      { speaker: "serena", text: "“I didn’t realize I needed your permission.”" },
      { speaker: "marcus", text: "“You don’t.” A short laugh — warm, almost genuine. “I’m just surprised, that’s all. It’s good. The house could use some life in it.” He looks at you again. “She doesn’t let many people in. Consider yourself lucky.”" },
      { speaker: "player", text: "I’m just here for the exchange." },
      { speaker: "marcus", text: "“Sure you are.” He smiles — it doesn’t quite reach his eyes. He turns back to Serena, his voice dropping. Softer now. Familiar. “I left some paperwork at the house. I’ll come by this week to pick it up. We can talk then.”" },
      { speaker: "serena", text: "”There’s nothing to talk about, Marcus.”" },
      { speaker: "marcus", text: "“There’s always something to talk about.” He holds her gaze for a beat too long, then nods at you — polite, distant, final. “Welcome to the neighborhood.”" },
      { speaker: "narrator", text: "He leaves. The bell chimes behind him. Serena exhales slowly, like she’s been holding her breath since the moment she saw him." },
      { speaker: "harper", text: "A woman behind the counter clears her throat gently. “Sorry about that. He comes in for coffee and stays to make everyone uncomfortable.” She offers a careful smile. “I’m Harper. I run this place.”" },
      { speaker: "player", text: "Who was that?" },
      { speaker: "serena", text: "”Marcus.” She says the name the way you’d say a splinter you can’t get out. “He was my husband’s business partner. He still acts like that gives him a say in my life.”" },
      { speaker: "narrator", text: "She’s already walking toward the door, the tour clearly over. But she pauses, one hand on the frame, and glances back at you." },
      { speaker: "serena", text: "”Don’t worry about him. He’s—“ A pause. “He’s just someone who doesn’t know when to let go.”" },
      { speaker: "narrator", text: "You follow her back to the house. The walk is quieter this time. Serena doesn’t point out the mailbox or the cat or the shortcut. She’s somewhere else — behind the composed smile, doing the math on something you can’t see." },
      { speaker: "narrator", text: "At the front door she turns to you, and the warmth is back, deliberate and gentle." },
      { speaker: "serena", text: "”Thank you for walking with me. I forgot how nice it is to not do everything alone.” A small smile. “Get some rest. Tomorrow this place starts feeling like home.”" },
      { speaker: "narrator", text: "She disappears inside. The porch light clicks on behind you — a timer, not a person. But for a moment it felt like someone left it on just for you." }
    ]
  },
  ntrQuests: {
    "serena": [
      {
        "step": 0,
        "title": "Still Water",
        "completionFlag": "serena_ntr_q0_complete",
        "corruptionRequired": 0,
        "corruptionReward": 5,
        "timeStart": 20,
        "timeEnd": 23,
        "lines": [
          { "speaker": "narrator", "text": "The kitchen light is still on. Everyone else went upstairs an hour ago, but Serena is at the sink, sleeves rolled past her elbows, washing dishes from a dinner she served but didn’t sit down for. The house is quiet around her — just the tap running and the clink of porcelain." },
          { "speaker": "narrator", "text": "She hasn’t noticed you. Her shoulders are tight and her movements are mechanical — scrub, rinse, stack. There’s something lonely about the rhythm, something that says she’s done this exact thing a thousand nights in a row." },
          { "speaker": "player", "text": "Need a hand?" },
          { "speaker": "serena", "text": "“No, I—” She turns, startled. Soapy water drips on the floor. “You’re up late.”" },
          { "speaker": "player", "text": "So are you." },
          { "speaker": "serena", "text": "“Someone has to do them.” A small, practiced smile. She turns back to the sink. “The girls never offer. I don’t blame them — they have their own lives.”" },
          { "speaker": "narrator", "text": "You pick up a towel and start drying the plate she just set on the rack. She watches you for a moment, hands still in the water, like she’s trying to figure out if this is real." },
          { "speaker": "serena", "text": "“You don’t have to do that.”" },
          { "speaker": "player", "text": "I know." },
          { "speaker": "narrator", "text": "Something in her posture softens. She washes, you dry. The silence between you isn’t awkward — it’s the kind of quiet that comes when two people are doing something simple together and neither one needs to fill it with noise." },
          { "speaker": "narrator", "text": "The window above the sink is dark. Her reflection stares back at her — tired eyes, a strand of hair stuck to her forehead. She tucks it behind her ear without thinking." },
          { "speaker": "serena", "text": "“My husband used to do this.” She says it to the plate, not to you. “Not the dishes — he never touched the dishes. But he’d stand right where you are. Lean on the counter. Talk about his day.”" },
          { "speaker": "serena", "text": "“It’s been a while since anyone stood there.” Quiet. Almost to herself." },
          { "speaker": "player", "text": "How long?" },
          { "speaker": "serena", "text": "“Two years.” She rinses the last glass and sets it down. “Two years, three months. But who counts.” A pause. “I count. Apparently.”" },
          { "speaker": "narrator", "text": "She dries her hands on her apron and turns to you. The practiced smile is gone. What’s left is something more fragile — gratitude, maybe, or the surprise of being seen." },
          { "speaker": "serena", "text": "“Thank you. For the help.” She folds the towel carefully. “Breakfast is at seven. Don’t be late — Kira takes the eggs if you’re slow.”" },
          { "speaker": "narrator", "text": "She clicks off the kitchen light and heads upstairs. At the bottom of the steps she pauses, her hand on the railing, and looks back at you." },
          { "speaker": "serena", "text": "“Goodnight.”" },
          { "speaker": "narrator", "text": "It’s the first word she’s said tonight that didn’t sound rehearsed." }
        ]
      },
      {
        "step": 1,
        "title": "Late Harvest",
        "room": "kitchen",
        "context": "Serena is making preserves in the kitchen. The jars line up like soldiers.",
        "phrase": "“My husband planted the tree. I keep the fruit.”",
        "completionFlag": "serena_ntr_q1_complete",
        "corruptionRequired": 0,
        "corruptionReward": 5,
        "timeStart": 8,
        "timeEnd": 11,
        "lines": [
          { "speaker": "narrator", "text": "Morning. The foyer smells like coffee and floor polish. You’re coming downstairs when you see it — a thick envelope on the doormat. No stamp, no return address. Hand-delivered. The handwriting is sharp and confident. It says “Serena” and nothing else." },
          { "speaker": "narrator", "text": "You pick it up just as Serena comes down the stairs. She’s dressed, makeup on, the armor she puts on every morning before anyone sees her. But when she sees the envelope in your hands, the color drains from her face." },
          { "speaker": "serena", "text": "“Where did— give me that.” She takes it quickly, almost snatching. Her hands are shaking. The envelope crumples slightly in her grip." },
          { "speaker": "player", "text": "Everything okay?" },
          { "speaker": "serena", "text": "“It’s nothing. Business.” She tucks it under her arm and straightens up. “My husband’s partner handles certain affairs. Financial things. It’s— ongoing.”" },
          { "speaker": "narrator", "text": "She forces a smile. But her fingers are white where they grip the paper, and she’s not making eye contact." },
          { "speaker": "player", "text": "You look upset." },
          { "speaker": "serena", "text": "“I’m not upset.” Too quick. Too flat. She catches herself. “I’m— it’s complicated. When someone dies, they don’t take their problems with them. They leave them on your doorstep. Literally, apparently.”" },
          { "speaker": "narrator", "text": "She glances at the envelope like it might bite her. Then she looks at you, and for a second the mask slips — she’s not the composed hostess, she’s a woman holding something that scares her." },
          { "speaker": "serena", "text": "“Thank you for not opening it.” A pause. “Most people would have.”" },
          { "speaker": "player", "text": "It’s not mine to open." },
          { "speaker": "serena", "text": "“No.” She looks at the envelope again. “No, it’s not.”" },
          { "speaker": "narrator", "text": "She walks toward the study — her husband’s old study, the one with the door that’s always locked. She stops in front of it, key already in her hand, then changes her mind. She takes the envelope upstairs instead." },
          { "speaker": "narrator", "text": "You hear her bedroom door close. Then the lock turns. She stays in there for forty minutes." },
          { "speaker": "narrator", "text": "When she comes back down, her eyes are red but her voice is steady." },
          { "speaker": "serena", "text": "“Breakfast is in twenty minutes. I’m making french toast.” She says it like a peace offering, like cooking is the only language she trusts." },
          { "speaker": "narrator", "text": "She doesn’t mention the envelope again. But you notice she checks the doormat every morning after that — quick, furtive, before anyone else is awake." },
          { "speaker": "narrator", "text": "Whatever’s in those letters, she’s been carrying it alone for a long time." }
        ]
      },
      {
        "step": 2,
        "title": "The Wine",
        "room": "living_room",
        "context": "A quiet evening. Serena opens a bottle she’s been saving.",
        "phrase": "“I haven’t opened this since the funeral.”",
        "completionFlag": "serena_ntr_q2_complete",
        "corruptionRequired": 10,
        "corruptionReward": 8,
        "timeStart": 21,
        "timeEnd": 23,
        "lines": [
          { "speaker": "narrator", "text": "The living room is dark except for one lamp. Serena is on the couch with a bottle of wine that’s already half empty. She’s not reading, not watching anything — just sitting there, glass in hand, staring at the mantelpiece where a framed photo used to be. The nail is still in the wall." },
          { "speaker": "serena", "text": "“Oh.” She looks up. Doesn’t sit up. “It’s you. Pour yourself one. Glasses are in the cabinet.”" },
          { "speaker": "narrator", "text": "You sit beside her. The wine is good — too good for drinking alone on a Tuesday night. The kind of bottle someone saves for a reason." },
          { "speaker": "player", "text": "Special occasion?" },
          { "speaker": "serena", "text": "“It was our anniversary today.” She takes a long sip. “Not today-today. The day he died. Two years ago today I became a widow at thirty-eight.”" },
          { "speaker": "player", "text": "I’m sorry." },
          { "speaker": "serena", "text": "“Don’t be.” She says it too quickly. Then she closes her eyes. “That’s the terrible part. I should be sad. A good wife would be sad. But I’m— relieved. God help me, I’m relieved.”" },
          { "speaker": "narrator", "text": "She looks at you like she’s testing whether that confession will make you leave. You don’t move." },
          { "speaker": "serena", "text": "“He was a good man. Everyone said so. Good provider, good husband, pillar of the community.” She swirls the wine. “But nobody lives with a pillar, do they? You live with a person. And the person was—”" },
          { "speaker": "narrator", "text": "She stops. Drinks. Refills." },
          { "speaker": "serena", "text": "“He left me with a house I can barely afford, a business partner who won’t go away, and a study full of papers I’m afraid to read.” She sets the glass down harder than she means to. “Sorry. You don’t need my baggage.”" },
          { "speaker": "player", "text": "Maybe I want it." },
          { "speaker": "narrator", "text": "She stares at you. The lamp flickers once." },
          { "speaker": "serena", "text": "“You’re too young to want someone else’s baggage.” But she doesn’t say it like a dismissal. She says it like a warning she hopes you’ll ignore." },
          { "speaker": "narrator", "text": "She tells you about the study. Her husband’s study, the one she never opens. There’s a box in there she’s never touched. Letters, she thinks. Maybe financial documents. Maybe answers to questions she’s been asking for two years." },
          { "speaker": "serena", "text": "“I should open it someday. I know I should.” She pulls her knees up on the couch, making herself small. “But what if what’s in there makes everything worse? What if the man I was married to isn’t the man I thought he was?”" },
          { "speaker": "player", "text": "What if it sets you free?" },
          { "speaker": "narrator", "text": "She looks at you for a long time. The wine has softened her edges and the lamplight makes the lines around her eyes look like something earned, not something lost." },
          { "speaker": "serena", "text": "“Free.” She says the word like she’s tasting it. “I don’t think I remember what that feels like.”" },
          { "speaker": "narrator", "text": "The bottle is empty by the time she falls asleep on the couch. You put a blanket over her and turn off the lamp. In the dark, her face is peaceful — the first time you’ve seen it that way." }
        ]
      },
      {
        "step": 3,
        "title": "The Envelopes",
        "room": "kitchen",
        "context": "Serena is drowning in debt letters. Marcus is circling.",
        "phrase": "“Two years of envelopes. I stopped opening them six months ago.”",
        "completionFlag": "serena_ntr_q3_complete",
        "corruptionRequired": 15,
        "corruptionReward": 10,
        "timeStart": 12,
        "timeEnd": 15,
        "lines": [
          { "speaker": "narrator", "text": "You come into the kitchen and stop. Marcus is there — leaning against the counter like he owns it, coffee cup in hand, jacket draped over the chair. His cologne fills the room. Serena stands across from him with her arms crossed, her back against the sink." },
          { "speaker": "narrator", "text": "Marcus is tall, broad-shouldered, the kind of man who fills a room the way expensive furniture does — you notice him before you notice anything else. His watch costs more than everything in your suitcase combined. He looks at you with mild interest, the way you’d look at a stray that wandered in." },
          { "speaker": "narrator", "text": "“One of the exchange students?” He doesn’t ask you. He asks Serena." },
          { "speaker": "serena", "text": "“Marcus was just leaving.” Her voice is tight. She doesn’t introduce you." },
          { "speaker": "narrator", "text": "Marcus smiles. It’s the kind of smile that has nothing behind it — a transaction, not an expression." },
          { "speaker": "narrator", "text": "“We were discussing the account, Serena. The numbers don’t go away because you don’t look at them.” He sets the cup down. Doesn’t use a coaster. The wet ring on the marble is deliberate." },
          { "speaker": "serena", "text": "“I said you were leaving.”" },
          { "speaker": "narrator", "text": "His gaze flicks to you. Measuring. He takes his time — straightens his jacket, checks his phone, puts it away. Every motion says: I leave when I decide to." },
          { "speaker": "narrator", "text": "“Thursday, then.” He picks up his jacket. “I’ll have the updated numbers. The interest doesn’t pause because you’re uncomfortable, Serena. You know that.”" },
          { "speaker": "narrator", "text": "He walks past you. Close enough that his shoulder almost touches yours. He smells like sandalwood and something sharper underneath. At the door he turns back." },
          { "speaker": "narrator", "text": "“Nice house.” He says it to you, but he’s looking at Serena. “She keeps it well.”" },
          { "speaker": "narrator", "text": "The front door clicks shut. The kitchen is quiet. Serena’s hands are gripping the counter behind her, knuckles white. She exhales like she’s been holding her breath the entire time." },
          { "speaker": "player", "text": "Who was that?" },
          { "speaker": "serena", "text": "“Marcus.” She says the name like it’s a splinter she can’t get out. “My husband’s business partner. He handles the— estate.”" },
          { "speaker": "player", "text": "He didn’t seem like he was handling an estate." },
          { "speaker": "serena", "text": "“No.” She unclenches her hands. There are red marks where her nails dug in. “No, he didn’t.”" },
          { "speaker": "narrator", "text": "She picks up his coffee cup and washes it. Scrubs it twice. Sets it in the rack without a word." },
          { "speaker": "serena", "text": "“He comes every week. Sometimes twice.” She’s speaking to the sink again. “Always about the money. Always with that smile.”" },
          { "speaker": "narrator", "text": "She dries her hands and turns to you. Her eyes are steady but the muscle in her jaw is working." },
          { "speaker": "serena", "text": "“Thank you. For being here.” She means it more than the words carry. “When someone else is in the room he’s— different. He behaves.”" },
          { "speaker": "player", "text": "And when nobody’s in the room?" },
          { "speaker": "narrator", "text": "She doesn’t answer. But the look she gives you says everything the words don’t." },
          { "speaker": "serena", "text": "“I can handle Marcus.” She says it the way someone says “I’m fine” when they’re drowning. “I’ve been handling him for two years.”" },
          { "speaker": "narrator", "text": "She wipes the counter where his cup was. Once, twice, three times. The wet ring is gone but she keeps wiping." },
          { "speaker": "narrator", "text": "You think about the envelope. The locked study. The letters she won’t read. Everything in this house has a layer of something underneath, and Marcus is the one peeling them back." }
        ]
      },
      {
        "step": 4,
        "title": "The Ledger",
        "room": "kitchen",
        "context": "The debts are spread across the table. Something doesn’t add up.",
        "phrase": "“These numbers are wrong. I know they’re wrong.”",
        "completionFlag": "serena_ntr_q4_complete",
        "corruptionRequired": 25,
        "corruptionReward": 10,
        "timeStart": 20,
        "timeEnd": 23,
        "lines": [
          { "speaker": "narrator", "text": "Serena is waiting in the kitchen. The lights are low — just the one above the stove. On the table: a stack of papers, bank statements, envelopes with Marcus’s handwriting. She looks like she hasn’t slept in days." },
          { "speaker": "serena", "text": "“Sit down.” She pulls out a chair. “Please.”" },
          { "speaker": "narrator", "text": "You sit. She doesn’t. She stands by the counter with her arms crossed, then uncrosses them, then crosses them again. She’s rehearsed this — you can tell — but the words aren’t coming the way she planned." },
          { "speaker": "serena", "text": "“I need to tell you something. About Marcus. About the money. About all of it.” She pulls in a breath. “Because if I don’t tell someone I’m going to lose my mind.”" },
          { "speaker": "player", "text": "I’m listening." },
          { "speaker": "narrator", "text": "She sits across from you and pushes the papers forward. Bank statements, payment schedules, a partnership contract with her husband’s signature at the bottom." },
          { "speaker": "serena", "text": "“When David died, he left a debt. Or that’s what Marcus says. Two hundred thousand. The house, the accounts — everything is tied up in a partnership agreement I never signed, but Marcus has paperwork that says I inherited the obligation.”" },
          { "speaker": "player", "text": "That doesn’t sound legal." },
          { "speaker": "serena", "text": "“It isn’t. Probably. I don’t know.” She rubs her temples. “I can’t afford a lawyer. I can barely afford this house. The exchange program covers some of the bills, but Marcus takes what’s left. Every month, like clockwork.”" },
          { "speaker": "narrator", "text": "She pulls out one of the envelopes — the kind you’ve seen on the doormat. Inside is a printed statement: dates, amounts, a running total. The numbers are real. But something about them feels wrong — too neat, too convenient." },
          { "speaker": "serena", "text": "“He comes every week. Always with numbers, always with that smile. He says if I can’t pay, there are— other arrangements.”" },
          { "speaker": "player", "text": "What kind of arrangements?" },
          { "speaker": "narrator", "text": "She doesn’t look at you. She looks at the table." },
          { "speaker": "serena", "text": "“The kind where I do what he says and the number goes down a little.” Her voice is flat. Clinical. Like she’s describing someone else’s life. “I haven’t— I’ve never agreed to that. But the pressure. Every week. The way he looks at me. The way he touches my arm like he already owns it.”" },
          { "speaker": "narrator", "text": "Her hands are trembling. She puts them flat on the table to stop them." },
          { "speaker": "serena", "text": "“Last Thursday he said he’d take the house. Put it on the market. I’d have nowhere to go. The girls would have nowhere to go.”" },
          { "speaker": "player", "text": "He can’t do that." },
          { "speaker": "serena", "text": "“Can’t he?” She laughs. It sounds like something breaking. “He’s been doing whatever he wants for two years. Who’s going to stop him? Me?”" },
          { "speaker": "narrator", "text": "She pushes the papers toward you. All of them. The bank statements, the contracts, the handwritten notes. It’s the first time she’s shown anyone." },
          { "speaker": "serena", "text": "“I’ve been carrying this alone since the funeral. Two years of smiling and cooking breakfast and pretending everything is fine while that man takes pieces of me every week.”" },
          { "speaker": "narrator", "text": "Her voice cracks. She puts her hand over her mouth and holds it there until she’s steady again." },
          { "speaker": "serena", "text": "“David’s study. There might be something in there — the original partnership documents, letters, something that proves Marcus is lying. But I can’t— I haven’t been able to open that door since he died.”" },
          { "speaker": "player", "text": "I’ll open it. With you. Whenever you’re ready." },
          { "speaker": "narrator", "text": "She looks at you across the table full of papers and debts and two years of silence. Something shifts in her expression — the exhaustion is still there, but underneath it, for the first time, there’s something that might be hope." },
          { "speaker": "serena", "text": "“Why do you care?” It’s not accusation. It’s genuine confusion. “You’re a student. You’re here for a semester. Why does any of this matter to you?”" },
          { "speaker": "player", "text": "Because nobody should carry this alone." },
          { "speaker": "narrator", "text": "She stares at you. Her eyes are wet but she doesn’t cry. She gathers the papers, stacks them carefully, puts them back in the envelopes." },
          { "speaker": "serena", "text": "“The study. Tomorrow. I’ll— I’ll try.” She stands and presses her hand flat on the table for balance. “Thank you. For sitting here. For listening. I know it’s not— I know this isn’t what you signed up for.”" },
          { "speaker": "narrator", "text": "She touches your shoulder as she passes. Brief. Light. The kind of touch someone gives when they’re not sure they’re allowed to." },
          { "speaker": "narrator", "text": "The kitchen is empty now. Just you and the faint smell of coffee and the echo of two years of silence finally breaking." }
        ]
      },
      {
        "step": 5,
        "title": "The Letter",
        "room": "kitchen",
        "context": "Serena found proof. The debt was settled before David died.",
        "phrase": "“Two years. Two years he’s been collecting on a debt that doesn’t exist.”",
        "completionFlag": "serena_ntr_q5_complete",
        "corruptionRequired": 35,
        "corruptionReward": 15,
        "timeStart": 22,
        "timeEnd": 24,
        "branchChoice": {"prompt":"What path will you take?","options":[{"label":"Help her confront Marcus","branch":"a","response":"narrator::The path is set. No going back now."},{"label":"Advise caution","branch":"b","response":"narrator::You step back. Events will unfold on their own."}]},
        "lines": [
          { "speaker": "narrator", "text": "It’s past ten. The house is asleep. You find Serena in the kitchen — not cleaning this time. She’s standing in the middle of the room with a letter in her hand, the study door behind her wide open for the first time." },
          { "speaker": "narrator", "text": "The letter is old. Creased. Her husband’s handwriting. She’s been reading it over and over — you can tell from the way she holds it, like she’s memorized every word but needs to see them one more time." },
          { "speaker": "serena", "text": "“I opened the study.” Her voice is steady in a way it hasn’t been before. Not forced-steady. Actually steady. “I found the box. And inside the box I found this.”" },
          { "speaker": "narrator", "text": "She hands you the letter. It’s a signed statement from her husband, dated three months before he died. It says the partnership was dissolved. The debt was settled. There is no outstanding obligation. Marcus’s name is on it, co-signed. He knew." },
          { "speaker": "serena", "text": "“Two years.” She says it without rage, without tears. Just the flat weight of a fact. “Two years he’s been collecting on a debt that doesn’t exist. Two years of envelopes on my doorstep and threats about the house and—”" },
          { "speaker": "narrator", "text": "She stops. Takes a breath." },
          { "speaker": "serena", "text": "“I called him. Twenty minutes ago.”" },
          { "speaker": "player", "text": "What did he say?" },
          { "speaker": "serena", "text": "“Nothing.” A smile breaks across her face — a real one, the kind that lights up her eyes instead of hiding them. “For the first time in two years, Marcus had absolutely nothing to say.”" },
          { "speaker": "narrator", "text": "She laughs. Short, surprised, like she forgot she could. Then she walks to the back door and locks it. Then the front. You hear the deadbolt slide home with a finality that changes the air in the room." },
          { "speaker": "serena", "text": "“This kitchen. This house. It’s mine now.” She turns back to you. “Really mine. No debt. No Marcus. No more envelopes. Just— mine.”" },
          { "speaker": "narrator", "text": "She’s standing in the middle of her kitchen, in her house, with the letter still in her hand and the study door open behind her like a wound that’s finally healing." },
          { "speaker": "serena", "text": "“You told me to open that door.” She folds the letter carefully. “That night on the couch with the wine. You said “what if it sets you free.” Do you remember?”" },
          { "speaker": "player", "text": "I remember." },
          { "speaker": "serena", "text": "“I’ve been thinking about it every day since. Every morning when I checked the doormat. Every time Marcus sat in that chair.” She sets the letter on the counter. “You gave me that. The idea that there was something on the other side of the door besides more pain.”" },
          { "speaker": "narrator", "text": "The distance between you is three steps. She closes it in two." },
          { "speaker": "serena", "text": "“You stayed.” Her voice is barely above a whisper. “Every time. The dishes. The wine. The letters. You just— stayed.”" },
          { "speaker": "narrator", "text": "She reaches up and touches your face. Her hand is warm. She traces the line of your jaw like she’s reading something written there." },
          { "speaker": "serena", "text": "“I’m thirty-eight years old. I’ve been a wife and a widow and a hostage in my own house. And right now, standing in this kitchen, I feel like I’m starting over.”" },
          { "speaker": "narrator", "text": "She kisses you. Soft at first, tentative, like she’s asking permission with her lips. Then deeper, the way someone kisses when they’ve been holding back for longer than they can measure." },
          { "speaker": "narrator", "text": "The kitchen is warm and dark and hers — really hers, for the first time — and there is nothing behind any door in this house that she’s afraid of anymore." },
          { "speaker": "serena", "text": "“Don’t go upstairs tonight.” She holds your hand. Her fingers lace through yours. “Stay. Here. With me.”" },
          { "speaker": "narrator", "text": "The study door is open. The letters are read. The deadbolt is locked. And Serena — for the first time in two years, three months, and however many days she stopped counting — is not alone." }
        ]
      }
    ],
        "kira": [
      {
        "step": 0,
        "title": "First Lap",
        "room": "park",
        "context": "Kira is stretching at the fountain. She didn’t expect you to show up.",
        "phrase": "“Most people say they’ll show up at six and then I never see them again.”",
        "completionFlag": "kira_ntr_q0_complete",
        "corruptionRequired": 0,
        "corruptionReward": 5,
        "timeStart": 6,
        "timeEnd": 9,
        "lines": [
          { "speaker": "narrator", "text": "The park is empty except for Kira. She’s stretching by the fountain, earbuds in, one foot on the bench. Her running shoes are worn down on one side — the kind of wear that comes from thousands of miles, not fashion." },
          { "speaker": "narrator", "text": "She spots you and pulls one earbud out. Doesn’t stop stretching." },
          { "speaker": "kira", "text": "“You actually came.” Half-surprised, half-impressed. “Most people say they’ll show up at six and then I never see them again.”" },
          { "speaker": "player", "text": "I said I would." },
          { "speaker": "kira", "text": "“Yeah, well. People say a lot of things.” She switches legs. “Tyler said he’d come run with me once. That was eight months ago. He’s still in bed.”" },
          { "speaker": "narrator", "text": "She takes off without warning. Not a jog — a run. Proper pace, arms tight, feet striking the path like she’s angry at the ground." },
          { "speaker": "narrator", "text": "You catch up. Barely. She glances at you sideways and there’s something like approval in her expression." },
          { "speaker": "kira", "text": "“Not bad.” She slows slightly. “Most guys try to sprint the first hundred meters to show off and then die. You just… kept up.”" },
          { "speaker": "player", "text": "I wasn’t trying to show off." },
          { "speaker": "kira", "text": "“I know.” A small smile. “That’s why it worked.”" },
          { "speaker": "narrator", "text": "You run together for twenty minutes. She doesn’t talk much — just the sound of breathing and sneakers on asphalt. But the silence isn’t awkward. It’s the kind of quiet that happens when two people are doing the same thing and neither needs to prove anything." },
          { "speaker": "narrator", "text": "At the end of the loop she stops by the fountain again. Hands on her knees, catching her breath. She looks up at you." },
          { "speaker": "kira", "text": "“Same time tomorrow?” She says it like a dare, not an invitation." },
          { "speaker": "player", "text": "Same time tomorrow." },
          { "speaker": "kira", "text": "“Good.” She puts the earbud back in. “Don’t be late. I don’t wait.”" },
          { "speaker": "narrator", "text": "She takes off again — faster this time, like she’s testing whether you’ll try to follow. You don’t. She looks back once, and the smile is still there." },
          { "speaker": "narrator", "text": "You get the feeling that showing up was the only test that mattered." }
        ]
      },
      {
        "step": 1,
        "title": "Tyler",
        "room": "park",
        "context": "Morning run. Tyler arrives in his car and marks his territory.",
        "phrase": "“She doesn’t need distractions.”",
        "completionFlag": "kira_ntr_q1_complete",
        "corruptionRequired": 0,
        "corruptionReward": 5,
        "timeStart": 6,
        "timeEnd": 9,
        "lines": [
          { "speaker": "narrator", "text": "Third morning in a row. Kira is already running when you arrive. She slows to let you fall in beside her, and for a few minutes it’s just the rhythm — breath, footfall, breath." },
          { "speaker": "kira", "text": "“You’re getting faster.” She doesn’t look at you when she says it. “Or I’m getting slower. Don’t tell anyone.”" },
          { "speaker": "narrator", "text": "A car pulls into the parking lot. Engine too loud, bass thumping through closed windows. Kira’s jaw tightens before she even sees it." },
          { "speaker": "narrator", "text": "Tyler steps out. He’s built like someone who lifts for the mirror, not for sport. Tank top, gold chain, sunglasses at six in the morning. He walks toward you both like he owns the park." },
          { "speaker": "tyler", "text": "“Babe.” He doesn’t say it to be affectionate. He says it like a label. “Who’s this?”" },
          { "speaker": "kira", "text": "“A friend. From the house.” She stops running. Her breathing is controlled — not from the run, but from practice. “I told you about the exchange program.”" },
          { "speaker": "narrator", "text": "Tyler looks you up and down. Takes his time. The sunglasses make it impossible to read his eyes, which is probably the point." },
          { "speaker": "tyler", "text": "“You run together every morning?” He asks you, not her." },
          { "speaker": "player", "text": "When I can keep up." },
          { "speaker": "narrator", "text": "Tyler smiles. It doesn’t reach anywhere near his eyes." },
          { "speaker": "tyler", "text": "“That’s sweet.” He puts his arm around Kira. Heavy. Possessive. She doesn’t lean into it. “Kira’s got regionals in three weeks. She doesn’t need distractions.”" },
          { "speaker": "kira", "text": "“He’s not a distraction.” Quiet. Firm." },
          { "speaker": "tyler", "text": "He squeezes her shoulder. Too hard to be casual. “I’ll pick you up after practice. We’ll get lunch.” It’s not a question." },
          { "speaker": "narrator", "text": "He walks back to the car, tosses one more look over his shoulder at you, and drives off. The bass fades down the street." },
          { "speaker": "kira", "text": "“Sorry about that.” She starts stretching again. Her hands are steady but the muscle in her jaw is working. “He gets… protective.”" },
          { "speaker": "player", "text": "That didn’t look like protective." },
          { "speaker": "narrator", "text": "She looks at you. For a second the armor cracks and you see something underneath — exhaustion, maybe, or the quiet anger of someone who knows exactly what’s happening to her but hasn’t found a way out yet." },
          { "speaker": "kira", "text": "“Same time tomorrow.” She says it like the words are a wall she’s building between this moment and whatever comes next. Then she runs. Faster than usual." }
        ]
      },
      {
        "step": 2,
        "title": "The Bleachers",
        "room": "park",
        "context": "Kira is training after hours. She pushes harder than she needs to.",
        "phrase": "“He logs my runs. My routes. My pace. Says it’s coaching.”",
        "completionFlag": "kira_ntr_q2_complete",
        "corruptionRequired": 10,
        "corruptionReward": 8,
        "timeStart": 17,
        "timeEnd": 21,
        "lines": [
          { "speaker": "narrator", "text": "The gym is nearly empty. End of the day, overhead lights buzzing, the smell of old rubber and disinfectant. Kira is on the rowing machine, pulling like she’s trying to escape something." },
          { "speaker": "narrator", "text": "She sees you and slows down. Wipes her face with the hem of her shirt. Takes a drink of water and offers you the bench beside her." },
          { "speaker": "kira", "text": "“Tyler thinks I train too much.” She says it without preamble, like she’s been holding the sentence behind her teeth all day. “Says it’s not attractive. Says guys don’t like girls with shoulders.”" },
          { "speaker": "player", "text": "That’s stupid." },
          { "speaker": "kira", "text": "“Yeah.” She pulls the band out of her hair and ties it back tighter. “Everything I do is too much for him. I run too early. I train too hard. I talk too loud. I have too many opinions.”" },
          { "speaker": "narrator", "text": "She stands and moves to the weight rack. Picks up dumbbells without looking at the number. Muscle memory." },
          { "speaker": "kira", "text": "“I got a scholarship for this. Full ride. Division One.” She curls. Steady, perfect form. “My dad drove me to practice every morning for six years. Sat in the car reading the paper while I ran laps at five AM.”" },
          { "speaker": "narrator", "text": "She sets the weights down. Stares at them." },
          { "speaker": "kira", "text": "“He died sophomore year. Heart attack. Forty-nine.” Matter-of-fact. The way someone talks about a wound that healed wrong — it doesn’t hurt anymore, but the scar pulls every time she moves." },
          { "speaker": "player", "text": "I’m sorry." },
          { "speaker": "kira", "text": "“Don’t be. He saw me qualify for state. That’s the last thing he saw me do. Win.” A pause. “Tyler was there. At the funeral. That’s how we started. He was… gentle. Back then.”" },
          { "speaker": "narrator", "text": "She picks up the weights again. Heavier ones this time." },
          { "speaker": "kira", "text": "“People are gentle when they want something. Once they have it, they stop. Have you noticed that?”" },
          { "speaker": "player", "text": "Not everyone." },
          { "speaker": "kira", "text": "“No?” She looks at you. The gym lights make her eyes look darker than they are. “You’ve been showing up every morning for two weeks. No agenda. No angle. Just running.”" },
          { "speaker": "narrator", "text": "She racks the weights and sits on the bench. Her shoulders drop — not defeated, just tired of holding them up." },
          { "speaker": "kira", "text": "“Tyler checks my phone. Did you know that? Every night. Goes through my messages, my calls, my photos.” She wraps her hands with tape, slow and deliberate. “He says it’s because he cares. But it doesn’t feel like caring. It feels like inventory.”" },
          { "speaker": "narrator", "text": "The gym is quiet. Just the two of you and the hum of fluorescent lights." },
          { "speaker": "kira", "text": "“I should go. He’s picking me up in ten.” She grabs her bag but stops at the door. “Thanks for being here. Most people don’t stick around when things get… heavy.”" },
          { "speaker": "narrator", "text": "She pushes through the door without waiting for an answer. Through the window you see Tyler’s car idling in the parking lot, headlights on, engine running." }
        ]
      },
      {
        "step": 3,
        "title": "Regionals",
        "room": "park",
        "context": "The race is in two days. Kira is anxious, wired, uncertain.",
        "phrase": "“Tyler said if I don’t medal, the sponsorship talk was a waste.”",
        "completionFlag": "kira_ntr_q3_complete",
        "corruptionRequired": 15,
        "corruptionReward": 10,
        "timeStart": 12,
        "timeEnd": 16,
        "lines": [
          { "speaker": "narrator", "text": "You find Kira at the bleachers by the park’s track. She’s sitting in the second row, elbows on her knees, staring at the empty lanes. Her gym bag is beside her but she’s not changed into her training clothes." },
          { "speaker": "kira", "text": "“I didn’t run today.” She says it like a confession. “First time in four years. I woke up and I just… couldn’t.”" },
          { "speaker": "player", "text": "What happened?" },
          { "speaker": "kira", "text": "“Tyler happened.” She pulls up her sleeve. There’s a bruise on her upper arm — four finger-shaped marks, purple and yellow at the edges. “Last night. We were arguing about the phone thing and he grabbed me. Hard.”" },
          { "speaker": "narrator", "text": "She pulls the sleeve back down. Her voice is steady but her hands are not." },
          { "speaker": "kira", "text": "“He apologized. Of course he did. Brought flowers this morning. Texted me twelve times before nine.” She laughs. It sounds like gravel. “The flowers are in the trash. The texts are on read.”" },
          { "speaker": "player", "text": "You need to leave him." },
          { "speaker": "kira", "text": "“I know.” Simple. No argument. “I’ve known for months. But he’s friends with everyone. He knows my coaches. He knows where I train, where I run, where I eat. He’s threaded himself into every part of my life like a…”" },
          { "speaker": "narrator", "text": "She stops. Picks at the tape still wrapped around her right hand from yesterday." },
          { "speaker": "kira", "text": "“Like a trap. And every time I think about pulling free I picture all the threads snapping and I don’t know what’s left underneath.”" },
          { "speaker": "narrator", "text": "A car turns into the parking lot. Tyler’s car. The bass is off this time. He gets out quickly, spots you both on the bleachers, and walks over with that same heavy stride." },
          { "speaker": "tyler", "text": "“There you are.” He looks at you first, then at Kira. “You didn’t answer my calls.”" },
          { "speaker": "kira", "text": "“I was busy.”" },
          { "speaker": "tyler", "text": "“Busy sitting in the park with him?” He steps closer. His shadow falls across the both of you. “I thought we talked about this.”" },
          { "speaker": "player", "text": "She can talk to whoever she wants." },
          { "speaker": "narrator", "text": "Tyler turns to you. Slowly. The kind of slow that’s supposed to feel threatening." },
          { "speaker": "tyler", "text": "“Mind your business, man. This is between me and my girlfriend.” He reaches for Kira’s arm. The same arm." },
          { "speaker": "kira", "text": "“Don’t touch me.” She stands. Eye to eye. She’s taller than you expected, or maybe she’s just standing straighter than she has in months. “Don’t touch me, Tyler.”" },
          { "speaker": "narrator", "text": "Something shifts. Tyler sees it — sees that she means it. For a second his face flickers between anger and the realization that anger won’t work this time." },
          { "speaker": "tyler", "text": "“Fine.” He steps back. Points at you. “This isn’t over.” Then he walks to the car. The door slams. The tires screech out of the lot." },
          { "speaker": "narrator", "text": "Kira sits back down. Her hands are shaking but her eyes are dry." },
          { "speaker": "kira", "text": "“That’s the first time I ever said that to him.” She stares at the track. “Four years. And that’s the first time.”" },
          { "speaker": "player", "text": "How does it feel?" },
          { "speaker": "kira", "text": "“Like the start of a race.” She looks at you. “Terrifying. But I’m already moving.”" }
        ]
      },
      {
        "step": 4,
        "title": "The Medal",
        "room": "park",
        "context": "Race day is over. Kira has something to tell you.",
        "phrase": "“I won. And the first person I wanted to tell was you.”",
        "completionFlag": "kira_ntr_q4_complete",
        "corruptionRequired": 25,
        "corruptionReward": 10,
        "timeStart": 20,
        "timeEnd": 23,
        "lines": [
          { "speaker": "narrator", "text": "The gym is closed. The sign on the door says so. But the back entrance is propped open with a brick, and inside Kira is punching a heavy bag like it owes her money." },
          { "speaker": "narrator", "text": "No gloves. No wraps. Just bare knuckles on leather, each hit echoing in the empty room." },
          { "speaker": "kira", "text": "“The owner lets me use it after hours.” She doesn’t stop punching. “He was friends with my dad. Only person Tyler doesn’t have a number for.”" },
          { "speaker": "player", "text": "Your hands are bleeding." },
          { "speaker": "narrator", "text": "She looks down. The knuckles on her right hand are raw, split along the ridge. She flexes them, watches the blood well up, and grabs a towel like it’s routine." },
          { "speaker": "kira", "text": "“He showed up at my practice today.” She wraps the towel around her fist. “Told Coach Reynolds he was worried about me. That I’ve been ’acting erratic.’ That I’ve been ’hanging around with someone who’s a bad influence.’”" },
          { "speaker": "player", "text": "Me." },
          { "speaker": "kira", "text": "“You.” She sits on the mat, legs crossed, towel darkening with blood. “Coach pulled me aside. Asked if everything was okay at home. I said yes because what else do you say? ’My boyfriend controls my phone, checks my mileage, times how long I’m gone’?”" },
          { "speaker": "narrator", "text": "She stares at the heavy bag, still swinging slightly." },
          { "speaker": "kira", "text": "“He called my mom last week. Told her I was ’going through something.’ Now she calls me every night asking if I’m okay. And I can’t tell her the truth because Tyler’s the one who drove her to the airport last Thanksgiving. He’s in all the family photos. He’s threaded into everything.”" },
          { "speaker": "player", "text": "That’s not love. That’s control." },
          { "speaker": "kira", "text": "“I know what it is.” Sharp. Not at you — at herself. “I’m a Division One athlete. I can run a five-minute mile. I can deadlift twice my body weight. I am not weak.”" },
          { "speaker": "player", "text": "I never said you were." },
          { "speaker": "kira", "text": "“No.” She looks at you. The anger drains out of her face and what’s left is something worse — the quiet shame of someone who knows they’re strong everywhere except the one place it matters. “No, you didn’t.”" },
          { "speaker": "narrator", "text": "She unwraps the towel. The bleeding has stopped. She flexes her fingers one by one." },
          { "speaker": "kira", "text": "“Regionals are in nine days. If I win, I get scouted. If I get scouted, I get an offer from a school two states away. And if I’m two states away…”" },
          { "speaker": "player", "text": "He can’t reach you." },
          { "speaker": "kira", "text": "“He can’t reach me.” She nods slowly. “Nine days. That’s all I need. Nine days of keeping my head down, hitting my times, and not letting him see that I’m already gone.”" },
          { "speaker": "narrator", "text": "She stands. Bounces on her toes. The fighter is back — the athlete who measures her life in splits and distances, who knows exactly how fast she needs to go." },
          { "speaker": "kira", "text": "“Will you be there? At regionals?” She asks it like she’s asking for something she’s not used to asking for." },
          { "speaker": "player", "text": "Front row." },
          { "speaker": "kira", "text": "“Don’t sit front row. Tyler sits front row.” A grim smile. “Sit where I can see you. That’s enough.”" },
          { "speaker": "narrator", "text": "She picks up her bag and heads for the back door. At the threshold she stops." },
          { "speaker": "kira", "text": "“Thanks for coming. I know it’s late. I know this is… a lot.”" },
          { "speaker": "player", "text": "It’s not a lot. It’s you." },
          { "speaker": "narrator", "text": "She doesn’t say anything to that. But the way she pauses — hand on the doorframe, head slightly turned — says more than words would." },
          { "speaker": "narrator", "text": "The heavy bag is still swinging when you leave. The brick is still in the door. And somewhere between here and regionals, Kira is going to run farther than Tyler can follow." }
        ]
      },
      {
        "step": 5,
        "step": 5,
        "title": "The Finish Line",
        "room": "park",
        "context": "Kira is at the park one last time. She’s made a decision.",
        "phrase": "“I’m done running from things that aren’t chasing me.”",
        "completionFlag": "kira_ntr_q5_complete",
        "corruptionRequired": 35,
        "corruptionReward": 15,
        "timeStart": 21,
        "timeEnd": 24,
        "branchChoice": {"prompt":"What path will you take?","options":[{"label":"Push forward together","branch":"a","response":"narrator::The path is set. No going back now."},{"label":"Keep your distance","branch":"b","response":"narrator::You step back. Events will unfold on their own."}]},
        "lines": [
          { "speaker": "narrator", "text": "The park at night. No runners. No cars in the lot. Just the streetlamp by the fountain casting a circle of light on the wet pavement." },
          { "speaker": "narrator", "text": "Kira is sitting on the bench, still in her racing uniform. There’s a medal around her neck — gold, catching the light. She’s staring at it like she can’t believe it’s real." },
          { "speaker": "kira", "text": "“I won.” She looks up at you. Her eyes are bright, electric. “Personal best by four seconds. The scout from State was there. She gave me her card. She said ’we’ll be in touch.’”" },
          { "speaker": "player", "text": "You did it." },
          { "speaker": "kira", "text": "“I did it.” She laughs — the kind of laugh that comes from a place so deep it surprises the person making it. “I crossed that finish line and I looked at the bleachers and Tyler was standing there clapping and all I could think was: ’You can’t follow me where I’m going.’”" },
          { "speaker": "narrator", "text": "She takes the medal off and holds it in both hands. Studies it like a map." },
          { "speaker": "kira", "text": "“I broke up with him. In the parking lot. Right after the race.” She turns the medal over. “He said ’you can’t do this to me.’ Not ’please don’t go.’ Not ’I love you.’ Just ’you can’t.’ Like I needed his permission.”" },
          { "speaker": "player", "text": "What did you say?" },
          { "speaker": "kira", "text": "“I said ’watch me.’” The smile is fierce and fragile at the same time. “Then I got in my car and drove here. Because this is where it started. You. Me. Six in the morning. The only person who showed up without wanting something.”" },
          { "speaker": "narrator", "text": "She stands. The medal swings against her chest. She’s still in her racing spikes, standing on the asphalt path where you ran together every morning for weeks." },
          { "speaker": "kira", "text": "“I’m going to call my mom tomorrow. Tell her everything. She’s going to cry and ask why I didn’t tell her sooner and I won’t have a good answer.” She shrugs. “But it’ll be the truth. First true thing I’ve said to her in a year.”" },
          { "speaker": "narrator", "text": "The distance between you is two steps. She closes it in one." },
          { "speaker": "kira", "text": "“You know what the best part of running is?” She’s close enough that you can see the adrenaline still shaking through her. “The moment right after you cross the line. When you stop. When you can finally breathe. When everything you were running from is behind you.”" },
          { "speaker": "narrator", "text": "She kisses you. Quick at first — the way she does everything, decisive, no hesitation. Then slower, like she’s learning that not everything has to be a sprint." },
          { "speaker": "narrator", "text": "The medal presses cold between you. Her hands find the back of your neck. She tastes like sports drink and victory and the kind of freedom that only comes from earning it." },
          { "speaker": "kira", "text": "“I have never kissed someone because I wanted to.” She pulls back just enough to look at you. “Not because I was supposed to. Not because he was watching. Because I wanted to.”" },
          { "speaker": "narrator", "text": "The streetlamp hums. The park is empty. The finish line is behind her and the road ahead is open and for the first time in four years, Kira is running toward something instead of away." },
          { "speaker": "kira", "text": "“Same time tomorrow?” She smiles. The same words she said the first morning, but now they mean something completely different." },
          { "speaker": "player", "text": "Same time tomorrow." },
          { "speaker": "narrator", "text": "She puts the medal back on and walks to her car. At the door she turns back one more time." },
          { "speaker": "kira", "text": "“Front row next time.” A grin. “Tyler’s seat is open.”" },
          { "speaker": "narrator", "text": "She drives away. No bass. No tinted windows. Just taillights disappearing down a road she chose." }
        ]
      }
    ],
    "valentina": [
      {
        "step": 0,
        "title": "The Blue Glow",
        "room": "living_room",
        "context": "Amber is editing photos on the couch. She could use a second opinion.",
        "phrase": "“Two hundred shots for three usable ones. That’s the ratio.”",
        "completionFlag": "valentina_ntr_q0_complete",
        "corruptionRequired": 0,
        "corruptionReward": 5,
        "timeStart": 20,
        "timeEnd": 23,
        "lines": [
          { "speaker": "narrator", "text": "The living room is dim. Amber is curled up on the couch with her laptop open, editing photos. The screen casts a blue-white glow across her face. She’s so absorbed she doesn’t hear you come in." },
          { "speaker": "narrator", "text": "Her camera bag sits on the floor beside her, lenses and memory cards spilling out. A half-empty mug of tea has gone cold on the armrest." },
          { "speaker": "player", "text": "Still up?" },
          { "speaker": "valentina", "text": "“Hmm?” She blinks, pulls one earbud out. “Oh — hey. Yeah, I’m trying to fix this exposure. The light was perfect but my settings were wrong and now it’s all…” She gestures vaguely at the screen. “Flat.”" },
          { "speaker": "player", "text": "Can I see?" },
          { "speaker": "valentina", "text": "She tilts the laptop toward you. It’s a photo of the house at dusk — the windows glowing warm, the garden half in shadow. Even “flat” it’s beautiful." },
          { "speaker": "player", "text": "That’s really good." },
          { "speaker": "valentina", "text": "“It’s really not.” But she smiles. “I took two hundred shots today and maybe three are usable. That’s the ratio. Two hundred for three.”" },
          { "speaker": "player", "text": "Sounds frustrating." },
          { "speaker": "valentina", "text": "“Sounds like photography.” She closes the laptop and stretches. “I came here for the light, you know. This city has this golden-hour thing that lasts forever. Back home it’s gone in ten minutes.”" },
          { "speaker": "narrator", "text": "She pulls her knees up and wraps her arms around them. For a moment she looks younger than she is — small on the big couch, far from wherever home is." },
          { "speaker": "valentina", "text": "“Ethan used to say I love my camera more than people.” A pause. “My ex. He’s… we’re not together. Anymore. It’s a whole thing.”" },
          { "speaker": "player", "text": "You don’t have to explain." },
          { "speaker": "valentina", "text": "“I know.” She looks at you. “That’s nice, actually. Everyone always wants the full story. You just… don’t.”" },
          { "speaker": "narrator", "text": "She picks up the cold tea, grimaces, sets it back down." },
          { "speaker": "valentina", "text": "“I’m going to be up for another hour at least. If you’re bored, I could use a second opinion on which shots to keep. No photography experience required — just eyes.”" },
          { "speaker": "narrator", "text": "You sit down beside her. She opens the laptop again and the blue-white glow settles over both of you. She smells like chamomile and darkroom chemicals — a combination that shouldn’t work but does." },
          { "speaker": "narrator", "text": "You spend the next hour going through her photos. She values your opinion more than she admits." }
        ]
      },
      {
        "step": 1,
        "title": "The Grant",
        "room": "garden",
        "context": "Amber is shooting flowers in the garden. She’s building a portfolio.",
        "phrase": "“I need a theme. Something that says I see the world differently.”",
        "completionFlag": "valentina_ntr_q1_complete",
        "corruptionRequired": 0,
        "corruptionReward": 5,
        "timeStart": 14,
        "timeEnd": 18,
        "lines": [
          { "speaker": "narrator", "text": "You find Amber in the garden with her camera aimed at a crack in the wall where a single flower has pushed through. She’s lying flat on the ground, elbows in the dirt, completely unbothered by it." },
          { "speaker": "valentina", "text": "“Don’t move.” Click. Click. “Okay, you can move.” She rolls onto her back and grins up at you. “I wasn’t talking to you, I was talking to the flower. But also don’t move, the light’s doing something interesting behind your head.”" },
          { "speaker": "player", "text": "Am I being photographed right now?" },
          { "speaker": "valentina", "text": "“Only a little.” Click. “Only a lot.”" },
          { "speaker": "narrator", "text": "She sits up and brushes dirt off her elbows. Her hair is a mess and there’s a smudge on her cheek. She doesn’t care." },
          { "speaker": "valentina", "text": "“I’m building a portfolio. For this grant I want to apply for — a travel photography thing. Six months, anywhere in the world, all expenses paid. The deadline is in three weeks.”" },
          { "speaker": "player", "text": "That sounds incredible." },
          { "speaker": "valentina", "text": "“It sounds terrifying.” She scrolls through her camera’s display. “I need a series. A theme. Something that says —” she puts on a pretentious voice — “’I see the world differently and you should pay me to keep seeing it.’”" },
          { "speaker": "narrator", "text": "Her phone buzzes. She glances at it, and something in her expression shifts. Not quite a frown — more like a door closing." },
          { "speaker": "player", "text": "Everything okay?" },
          { "speaker": "valentina", "text": "“Ethan.” She puts the phone face-down on the grass. “He’s… he heard I’m here. On the exchange. He says he’s in the city for work and wants to ’catch up.’” She makes air quotes. “Which is Ethan for ’I want something.’”" },
          { "speaker": "player", "text": "Are you going to see him?" },
          { "speaker": "valentina", "text": "“I don’t know.” She pulls at a blade of grass. “He’s very good at making you feel like the center of the world. And then very good at making you feel like you imagined it.”" },
          { "speaker": "narrator", "text": "She stands, brushes off her jeans, and picks up her camera with both hands like it’s an anchor." },
          { "speaker": "valentina", "text": "“Help me scout locations tomorrow? I need someone who’ll tell me when I’m being boring. Serena’s too polite, Kira doesn’t care about art, and Harper will just say everything’s lovely.”" },
          { "speaker": "player", "text": "I can do honest." },
          { "speaker": "valentina", "text": "“Good.” She points the camera at you one more time. Click. “That one’s for me.”" },
          { "speaker": "narrator", "text": "She walks back inside, phone still face-down in the grass. She doesn’t go back for it." }
        ]
      },
      {
        "step": 2,
        "title": "The Bridge",
        "room": "outside",
        "context": "Amber asked you to scout locations by the river.",
        "phrase": "“You don’t make me feel like my camera is competition.”",
        "completionFlag": "valentina_ntr_q2_complete",
        "corruptionRequired": 10,
        "corruptionReward": 10,
        "timeStart": 16,
        "timeEnd": 20,
        "lines": [
          { "speaker": "narrator", "text": "Amber asked you to meet her at the old bridge by the river. When you arrive she’s sitting on the railing, legs dangling, camera around her neck, watching the water." },
          { "speaker": "valentina", "text": "“This light.” She doesn’t look at you. “See how it hits the water and then bounces up onto the underside of the bridge? You can’t plan that. You just have to be here.”" },
          { "speaker": "narrator", "text": "She hops down and starts shooting — the rust on the railings, the graffiti underneath, the way the shadows fall through the ironwork. She moves fast, intuitive, barely checking the screen." },
          { "speaker": "valentina", "text": "“The grant theme is ’beautiful things in ugly places.’ Clich, I know. But look at this —” she shows you the screen — “tell me that’s not gorgeous.”" },
          { "speaker": "narrator", "text": "It is. A shot of peeling paint catching the last of the sun. The colors are extraordinary." },
          { "speaker": "player", "text": "It’s gorgeous." },
          { "speaker": "valentina", "text": "“You’re just saying that.” But she’s beaming." },
          { "speaker": "narrator", "text": "You spend an hour walking the riverbank. She talks about composition, about patience, about the difference between a photo that’s pretty and one that’s honest. You carry her bag and hold reflectors when she asks." },
          { "speaker": "valentina", "text": "“Ethan texted again.” She says it like a weather report. “He’s staying at the Grand. Sent a photo of his hotel room view. Very subtle.”" },
          { "speaker": "player", "text": "Subtle like a gold chain at six in the morning." },
          { "speaker": "valentina", "text": "She laughs — a real one, surprised out of her. “You’ve never even met him and that’s exactly right.”" },
          { "speaker": "narrator", "text": "She sits on a bench and looks at the river. The camera rests in her lap." },
          { "speaker": "valentina", "text": "“He wasn’t always like that. When we first met he was… sweet. He’d bring me coffee during shoots, carry my equipment, wait in the car for hours. And then somewhere he decided that my work was the thing keeping me away from him instead of the thing that made me, me.”" },
          { "speaker": "player", "text": "What changed?" },
          { "speaker": "valentina", "text": "“I got good.” Simple. Quiet. “I started getting published. A magazine ran my series on abandoned greenhouses. And suddenly every shoot was too long, every trip was suspicious, every male photographer was a threat.”" },
          { "speaker": "narrator", "text": "She lifts the camera and takes one more shot — the bench, the river, the two of you as a shadow on the ground." },
          { "speaker": "valentina", "text": "“You don’t make me feel like my camera is competition.” She says it to the viewfinder, not to you. “That’s… rare.”" }
        ]
      },
      {
        "step": 3,
        "title": "The Selection",
        "room": "living_room",
        "context": "Forty-two photos. Twelve spots. Amber can’t decide alone.",
        "phrase": "“You picked the ones I was afraid to submit.”",
        "completionFlag": "valentina_ntr_q3_complete",
        "corruptionRequired": 15,
        "corruptionReward": 10,
        "timeStart": 18,
        "timeEnd": 22,
        "lines": [
          { "speaker": "narrator", "text": "Amber is in the living room, spreading printed photos across the coffee table like a mosaic. She’s sorting them into piles — yes, no, maybe — and the maybe pile is winning." },
          { "speaker": "valentina", "text": "“I have forty-two shots and I need twelve. Twelve. I’ve been staring at these for three hours and they’re all starting to look the same.”" },
          { "speaker": "player", "text": "Take a break." },
          { "speaker": "valentina", "text": "“I can’t. Deadline is in nine days.” She drops into the couch. “Ethan offered to help. He ’knows people at the foundation.’” She says it with finger quotes. “Which means he wants me to owe him something.”" },
          { "speaker": "player", "text": "You don’t need his connections. The work is good." },
          { "speaker": "valentina", "text": "“Is it?” She picks up a print — the one from the bridge, the peeling paint in golden light. “Sometimes I can’t tell anymore. I’ve looked at everything so many times it’s just… shapes.”" },
          { "speaker": "narrator", "text": "You sit beside her and start going through the prints. She watches you, knees pulled up, chin resting on them." },
          { "speaker": "player", "text": "This one. And this. And definitely this." },
          { "speaker": "narrator", "text": "You pull out the shots that stopped you — not the technically perfect ones, but the ones that made you feel something. The flower in the wall crack. The shadow on the bridge. A woman’s hands holding a coffee cup, knuckles lit by morning sun." },
          { "speaker": "valentina", "text": "“The hands one is Serena.” She says it softly. “She didn’t know I was shooting. That’s when they’re best — when people don’t know.”" },
          { "speaker": "narrator", "text": "She leans against your shoulder to see the arrangement you’ve made. She doesn’t pull away." },
          { "speaker": "valentina", "text": "“You picked the ones I was afraid to submit. The ugly-beautiful ones. The ones that are too honest.”" },
          { "speaker": "player", "text": "Those are the ones that matter." },
          { "speaker": "valentina", "text": "“Ethan always said to lead with the pretty ones. ’Accessible,’ he called it.” She sits up slowly. “He was wrong, wasn’t he?”" },
          { "speaker": "player", "text": "He was wrong about a lot of things." },
          { "speaker": "narrator", "text": "She looks at you for a long moment. Something in her expression settles — not gratitude exactly, but recognition. Like she’s seeing you clearly for the first time." },
          { "speaker": "valentina", "text": "“Nine days.” She starts rearranging the prints in the order you suggested. “Stay while I finalize these? I work better when someone’s here. Not helping. Just… here.”" },
          { "speaker": "narrator", "text": "You stay. She works. Every now and then she holds up a print and you nod or shake your head and she trusts it completely. Nobody’s ever trusted her eye the way you trust hers." }
        ]
      },
      {
        "step": 4,
        "title": "The Flowers",
        "room": "outside",
        "context": "Ethan showed up. Flowers, charm, and a hidden agenda.",
        "phrase": "“He makes me feel crazy for having boundaries.”",
        "completionFlag": "valentina_ntr_q4_complete",
        "corruptionRequired": 25,
        "corruptionReward": 10,
        "timeStart": 14,
        "timeEnd": 18,
        "lines": [
          { "speaker": "narrator", "text": "You hear raised voices from the front porch. Amber’s voice — tight and controlled — and a man’s voice, smooth and insistent." },
          { "speaker": "narrator", "text": "Ethan is taller than you imagined. Designer jacket, perfect stubble, the kind of tan that comes from a lamp. He’s standing too close to Amber, holding a bouquet of flowers like a prop." },
          { "speaker": "ethan", "text": "“Just dinner, Ambs. One dinner. I flew here for you.”" },
          { "speaker": "valentina", "text": "“You flew here for a conference. I saw the LinkedIn post.”" },
          { "speaker": "ethan", "text": "He laughs — easy, practiced. “Okay, both. But mostly you. I miss you. I miss us.”" },
          { "speaker": "narrator", "text": "Amber sees you in the doorway. Something in her shoulders relaxes." },
          { "speaker": "valentina", "text": "“Ethan, this is my friend. From the house.”" },
          { "speaker": "narrator", "text": "Ethan looks at you the way men look at furniture — assessing whether it’s in the way." },
          { "speaker": "ethan", "text": "“The exchange student?” He extends a hand. Firm grip. Too firm. “She told me about you. Says you carry her camera bag.” He smiles. “That’s nice.”" },
          { "speaker": "valentina", "text": "“That’s not—” She stops. Takes a breath. “Ethan, I said I’d think about dinner. I haven’t thought about it yet.”" },
          { "speaker": "ethan", "text": "“What’s to think about?” He steps closer. “It’s pasta, babe, not a proposal.” He touches her arm. She doesn’t pull away, but she doesn’t lean in either." },
          { "speaker": "narrator", "text": "He leaves the flowers on the porch railing and walks back to his rental car. Before he gets in, he looks at you — a long, measuring look — and smiles." },
          { "speaker": "narrator", "text": "Amber watches the car pull away. She picks up the flowers, studies them, and sets them on the step without bringing them inside." },
          { "speaker": "valentina", "text": "“He does this.” She sits on the porch step. “Shows up. Makes it seem easy. Makes me feel crazy for having boundaries.”" },
          { "speaker": "player", "text": "You’re not crazy." },
          { "speaker": "valentina", "text": "“He wants me to move back. That’s what dinner is about. He’ll say he’s changed, he’ll be perfect for two hours, and then he’ll ask me to come home like this —” she gestures at the house, the city, her life here — “like this was just a phase.”" },
          { "speaker": "narrator", "text": "She pulls her knees up. The flowers sit on the step, untouched." },
          { "speaker": "valentina", "text": "“The portfolio deadline is in five days. I can’t afford to let him get in my head.” She looks at you. “Tell me I’m not making a mistake. Staying. Choosing this.”" },
          { "speaker": "player", "text": "You’re not making a mistake." },
          { "speaker": "narrator", "text": "She nods. Slowly. Like she needed someone to say it out loud." },
          { "speaker": "valentina", "text": "“Five days.” She stands and walks past the flowers without looking at them. “Five days and then it’s done and he can’t hold it over me anymore.”" },
          { "speaker": "narrator", "text": "The flowers sit on the porch all night. In the morning they’re gone. You don’t ask." }
        ]
      },
      {
        "step": 5,
        "title": "The Void",
        "room": "living_room",
        "context": "Portfolio submitted. Ethan rejected. Amber is free.",
        "phrase": "“I’m done with Ethan. Completely, finally, boringly done.”",
        "completionFlag": "valentina_ntr_q5_complete",
        "corruptionRequired": 35,
        "corruptionReward": 15,
        "timeStart": 22,
        "timeEnd": 24,
        "branchChoice": {"prompt":"What path will you take?","options":[{"label":"Shield her from Ethan","branch":"a","response":"narrator::The path is set. No going back now."},{"label":"Trust her judgment","branch":"b","response":"narrator::You step back. Events will unfold on their own."}]},
        "lines": [
          { "speaker": "narrator", "text": "It’s late. The house is quiet. The living room is dark except for Amber’s laptop screen. She’s sitting on the floor, back against the couch, the portfolio spread around her in a perfect semicircle." },
          { "speaker": "narrator", "text": "She hit submit twenty minutes ago. You can see the confirmation email on her screen. She hasn’t moved since." },
          { "speaker": "player", "text": "You did it." },
          { "speaker": "valentina", "text": "“I did it.” Her voice is small. “Twelve photos. Artist statement. CV. References. All of it. Gone. Into the void.”" },
          { "speaker": "player", "text": "How do you feel?" },
          { "speaker": "valentina", "text": "“Like I’m going to throw up.” She laughs. “In a good way? Is there a good way to feel like you’re going to throw up?”" },
          { "speaker": "narrator", "text": "She closes the laptop and the room goes dark. Just streetlight through the window, painting stripes across the floor." },
          { "speaker": "valentina", "text": "“Ethan called today. While I was putting the final edits in. He said the foundation is run by a friend of his father’s. Said he could make a call.”" },
          { "speaker": "player", "text": "What did you say?" },
          { "speaker": "valentina", "text": "“I said no.” She turns to look at you. “First time I’ve ever said no to Ethan and meant it. He didn’t take it well. Called me ungrateful. Said I’d never make it on my own.”" },
          { "speaker": "narrator", "text": "She’s quiet for a moment." },
          { "speaker": "valentina", "text": "“And you know what? The weird thing is… I didn’t care. I used to feel like the ground was disappearing when he said things like that. Like I needed him to believe in me before I was allowed to believe in myself.”" },
          { "speaker": "player", "text": "And now?" },
          { "speaker": "valentina", "text": "“Now I have twelve photos that I chose, with help from someone who never once told me to make them more ’accessible.’” She moves closer. “That was you, in case the metaphor wasn’t clear enough.”" },
          { "speaker": "narrator", "text": "The streetlight catches her face — half in light, half in shadow. A photographer’s face. She’d know exactly what this shot was worth." },
          { "speaker": "valentina", "text": "“I’m done with him.” She says it to the dark room, not to you. Then she turns. “Actually, no. I’m saying it to you. I’m done with Ethan. Completely, finally, boringly done.”" },
          { "speaker": "narrator", "text": "She reaches out and takes your hand. Her fingers are cold from the laptop and warm from the rest of her." },
          { "speaker": "valentina", "text": "“You helped me see what was already there. In the photos and in… everything else.” She squeezes your hand. “I don’t know how to thank someone for that. It’s too big for words.”" },
          { "speaker": "narrator", "text": "She leans in. The kiss is soft and unhurried, tasting of cold tea and relief and something that has been building since the first night on this couch with the blue-white glow between you." },
          { "speaker": "narrator", "text": "When she pulls back, she’s smiling — the real smile, the one that reaches her eyes and makes her look exactly like someone who just submitted the best work of her life." },
          { "speaker": "narrator", "text": "The laptop is dark. The photos are in the void. And Amber is right here, present, choosing this moment over every ghost that tried to call her back." }
        ]
      }
    ],
        "harper": [
      {
        "step": 0,
        "title": "Regular",
        "room": "market",
        "context": "Harper is stacking shelves after hours. She doesn’t mind the company.",
        "phrase": "“I like the quiet after close. Everything in its place.”",
        "completionFlag": "harper_ntr_q0_complete",
        "corruptionRequired": 0,
        "corruptionReward": 5,
        "timeStart": 9,
        "timeEnd": 14,
        "lines": [
          { "speaker": "narrator", "text": "The bell above the door chimes as you walk in. The supermarket is small — three aisles, a deli counter, a produce section that smells like overripe peaches. Harper is behind the register, pen behind her ear, clipboard in hand." },
          { "speaker": "narrator", "text": "She looks up and something shifts in her expression — not surprise, but the faint lift of someone whose day just got slightly less predictable." },
          { "speaker": "harper", "text": "“Back again.” She sets the clipboard down. “Third time this week. You’re becoming a regular.”" },
          { "speaker": "player", "text": "You have good produce." },
          { "speaker": "harper", "text": "“I have adequate produce and a convenient location.” A small, honest smile. “But I’ll take the compliment. This place doesn’t get many.”" },
          { "speaker": "narrator", "text": "She rings up your items without looking. Muscle memory — she knows every price, every code, every shelf. This store is an extension of her body." },
          { "speaker": "harper", "text": "“Derek thinks I should hire more help. Automate the register. ’Modernize.’” She makes air quotes with one hand. “He doesn’t understand that this is the only thing I have that’s mine. The schedules, the ordering, even the way the shelves are arranged — it’s all me.”" },
          { "speaker": "player", "text": "Derek is…?" },
          { "speaker": "harper", "text": "“My fianc—.” She says it the way someone says “my dentist appointment.” Then she catches herself. “Sorry. That sounded terrible. He’s — he’s fine. He’s a good person.”" },
          { "speaker": "narrator", "text": "She twists the ring on her finger. Once. Twice. Stops herself." },
          { "speaker": "harper", "text": "“We’ve been engaged for two years. The wedding is… pending. We don’t have a date. We don’t have a venue. We have a ring and a question mark.”" },
          { "speaker": "narrator", "text": "A customer comes in. Harper straightens up, becomes the professional again — polite, efficient, a different person than the one who was just talking to you." },
          { "speaker": "narrator", "text": "After the customer leaves she turns back. The professional mask slips slightly." },
          { "speaker": "harper", "text": "“Sorry. Where were we?” She bags your groceries. “Right. You were being a good listener and I was oversharing with a customer. Professional.”" },
          { "speaker": "player", "text": "I don’t mind." },
          { "speaker": "harper", "text": "“That’s the problem.” She pushes the bag across the counter. “I mind that you don’t mind. It makes me want to keep talking.”" },
          { "speaker": "narrator", "text": "She picks up the clipboard again. Back to business. But as you leave, you notice she watches you through the window until you turn the corner." }
        ]
      },
      {
        "step": 1,
        "title": "The Walk Home",
        "room": "market",
        "context": "Harper’s car is in the shop. It’s a long walk in the dark.",
        "phrase": "“Derek was supposed to pick me up. Again.”",
        "completionFlag": "harper_ntr_q1_complete",
        "corruptionRequired": 0,
        "corruptionReward": 5,
        "timeStart": 19,
        "timeEnd": 22,
        "lines": [
          { "speaker": "narrator", "text": "The market is closing. Harper is locking the front door, keys in one hand, a canvas bag of unsold bread in the other. She doesn’t see you at first." },
          { "speaker": "narrator", "text": "When she does, she startles. Then smiles. Then catches herself smiling and looks away." },
          { "speaker": "harper", "text": "“You’re out late.”" },
          { "speaker": "player", "text": "Walking. You?" },
          { "speaker": "harper", "text": "“Same. The long way home.” She starts walking. You fall in beside her. “I always take the long way. Through the park, past the fountain. It adds twenty minutes.”" },
          { "speaker": "player", "text": "Why?" },
          { "speaker": "harper", "text": "“Because the house is quiet when I get there.” She adjusts the bag on her shoulder. “Derek works late. Or he says he works late. He’s in sales — something with medical equipment. I stopped asking exactly what two years ago.”" },
          { "speaker": "narrator", "text": "You walk in silence for a block. The streetlights click on one by one." },
          { "speaker": "harper", "text": "“He forgot my birthday last month.” She says it without self-pity. Just a fact, like a weather report. “Not forgot-forgot. He texted at eleven PM. ’Happy birthday babe, sorry, work was crazy.’ With a cake emoji.”" },
          { "speaker": "player", "text": "That’s bad." },
          { "speaker": "harper", "text": "“You know what’s worse? I wasn’t surprised. I wasn’t even disappointed. I just thought: ’Of course.’” She kicks a pebble down the sidewalk. “When you stop being disappointed, what does that say about you?”" },
          { "speaker": "player", "text": "It says you’ve been let down too many times." },
          { "speaker": "narrator", "text": "She looks at you. Under the streetlight her eyes are a warm amber and she’s not smiling but she’s not guarding herself either. It’s the face between faces — the one that only shows up when someone stops performing." },
          { "speaker": "harper", "text": "“My mother planned her wedding in six weeks. Six weeks. Knew exactly what she wanted. My father proposed on a Tuesday and they were married by Easter.” A pause. “I’ve been engaged for twenty-six months and I don’t even know what color the napkins should be.”" },
          { "speaker": "narrator", "text": "You reach the corner where her street splits off. She stops." },
          { "speaker": "harper", "text": "“This is me.” She points down a quiet road. A house at the end with one light on — the porch. “The porch light is on a timer. Derek doesn’t turn it on. The timer does.”" },
          { "speaker": "narrator", "text": "She shifts the bread bag. Hesitates." },
          { "speaker": "harper", "text": "“Thanks for walking with me. I know it’s not — I know this isn’t your problem.”" },
          { "speaker": "player", "text": "I like the long way." },
          { "speaker": "narrator", "text": "She smiles. The real one — not the customer-service one. It changes her whole face." },
          { "speaker": "harper", "text": "“Goodnight.” She walks toward the house with the automatic porch light. Halfway there she turns back. “I close at eight tomorrow. In case you like long walks.”" }
        ]
      },
      {
        "step": 2,
        "title": "Inventory",
        "room": "market",
        "context": "Late night stocktake. Harper is alone with the numbers.",
        "phrase": "“He proposed three years ago. We still haven’t set a date.”",
        "completionFlag": "harper_ntr_q2_complete",
        "corruptionRequired": 10,
        "corruptionReward": 8,
        "timeStart": 20,
        "timeEnd": 23,
        "lines": [
          { "speaker": "narrator", "text": "The market after hours. The CLOSED sign is up but the back room light is on. Through the glass you can see Harper sitting on the floor between two shelving units, surrounded by clipboards and inventory sheets." },
          { "speaker": "narrator", "text": "She waves you in. The door is unlocked." },
          { "speaker": "harper", "text": "“Quarterly inventory.” She gestures at the mess around her. “Every can, every box, every expiration date. I do it myself because the last person I hired counted the same shelf twice and missed an entire section.”" },
          { "speaker": "player", "text": "Need help?" },
          { "speaker": "harper", "text": "“Are you offering, or are you just being polite?”" },
          { "speaker": "player", "text": "Offering." },
          { "speaker": "narrator", "text": "She hands you a clipboard. You sit across from her on the floor. For a while it’s just counting — cans of soup, boxes of pasta, the quiet scratch of pens on paper." },
          { "speaker": "harper", "text": "“Derek proposed right here.” She nods at the spot between the cereal aisle and the canned goods. “I was doing inventory. Just like this. He walked in, got on one knee, and said ’I want to do this for the rest of my life.’”" },
          { "speaker": "narrator", "text": "She sets her pen down." },
          { "speaker": "harper", "text": "“I thought he meant be with me. He meant the store. He loves this place. Not because of me — because of the business. The margins, the potential. He talked about franchising for three months after the proposal.”" },
          { "speaker": "player", "text": "When did it change?" },
          { "speaker": "harper", "text": "“It didn’t change. I just started seeing it clearly.” She stacks two cans of tomato soup with surgical precision. “He doesn’t come to the store anymore. Doesn’t ask how my day was. Last week I told him the freezer broke and he said ’call the guy.’ Didn’t ask which freezer. Didn’t ask if I was okay. Just ’call the guy.’”" },
          { "speaker": "narrator", "text": "She picks up the ring finger of her left hand and studies the engagement ring. It’s modest — a thin band, a small stone. The kind of ring that says “I’ll upgrade it later” except later never came." },
          { "speaker": "harper", "text": "“My mom asks about the wedding every Sunday. I lie. I say we’re looking at venues. That Derek’s been busy. That it’ll happen soon.” She looks at you. “I’m thirty-one years old and I’m lying to my mother about a wedding that isn’t going to happen.”" },
          { "speaker": "player", "text": "Have you told him how you feel?" },
          { "speaker": "harper", "text": "“I’ve told him. In words, in hints, in silences so loud they could shatter glass.” She closes the clipboard. “He nods. Says ’we should talk about that.’ Then he turns on the TV. Every time.”" },
          { "speaker": "narrator", "text": "The store is quiet. Just the hum of the one freezer that still works and the tick of the clock above the register." },
          { "speaker": "harper", "text": "“You know what scares me? It’s not that he doesn’t love me. It’s that he does — in his way. And his way might be all there is. And I might spend the rest of my life with someone who thinks ’call the guy’ is a conversation.”" },
          { "speaker": "narrator", "text": "She stands. Dusts off her knees. Holds out her hand to help you up. When she does, she doesn’t let go right away." },
          { "speaker": "harper", "text": "“Thank you. For counting cans with me at ten PM on a Wednesday.” She squeezes once, then releases. “I know it’s not exciting.”" },
          { "speaker": "player", "text": "It’s honest. That’s better than exciting." },
          { "speaker": "narrator", "text": "She turns off the back room light. In the dark, the market is just shapes and silence. She locks the door behind you both and walks home. This time she doesn’t take the long way." }
        ]
      },
      {
        "step": 3,
        "title": "The Ring",
        "room": "market",
        "context": "Harper is looking at her engagement ring like it’s a question.",
        "phrase": "“I used to spin it when I was nervous. Now I spin it when I’m thinking about taking it off.”",
        "completionFlag": "harper_ntr_q3_complete",
        "corruptionRequired": 15,
        "corruptionReward": 10,
        "timeStart": 15,
        "timeEnd": 19,
        "lines": [
          { "speaker": "narrator", "text": "The market is busy for a Tuesday. Harper is behind the counter handling two customers at once, phone tucked between her ear and shoulder, pen in her mouth. She doesn’t even see you come in." },
          { "speaker": "narrator", "text": "You wait. Watch her work. She’s good at this — efficient, warm without being fake, the kind of manager who remembers that Mrs. Chen always wants her bananas slightly green." },
          { "speaker": "narrator", "text": "The rush clears. She hangs up the phone and blows a strand of hair out of her face." },
          { "speaker": "harper", "text": "“Sorry. Supplier issues. The delivery truck broke down in Toledo and now I have to figure out how to stock the produce section with whatever I can get from the farmer’s market by morning.”" },
          { "speaker": "player", "text": "You look tired." },
          { "speaker": "harper", "text": "“I am tired.” No armor. Just the truth. “I’ve been covering every shift because my evening cashier quit. Derek said he’d help. That was a week ago.”" },
          { "speaker": "narrator", "text": "The door chimes. A man walks in — tall, neat hair, button-down shirt that’s too crisp for a Tuesday evening. He’s holding his phone and doesn’t look up from it as he crosses to the counter." },
          { "speaker": "derek", "text": "“Hey. I need to grab a few things.” He kisses Harper on the cheek without making eye contact. Quick, mechanical — the gesture of someone checking a box." },
          { "speaker": "harper", "text": "“Derek, this is—”" },
          { "speaker": "derek", "text": "“Yeah, hey.” He glances at you for half a second. “Babe, did you call the insurance company? I left you a voicemail about the deductible.”" },
          { "speaker": "harper", "text": "“I was doing inventory. And covering the register. And fixing the produce situation.”" },
          { "speaker": "derek", "text": "“Right. Well, can you call them tomorrow? Before noon. It’s time-sensitive.” He’s already walking toward the aisle. He grabs a six-pack and a bag of chips and comes back." },
          { "speaker": "narrator", "text": "He puts them on the counter. Doesn’t take out his wallet." },
          { "speaker": "harper", "text": "“That’s twelve eighty.”" },
          { "speaker": "derek", "text": "“Put it on the account.” He says it with a small laugh, like it’s a joke. Harper doesn’t laugh. She bags the items and slides them across." },
          { "speaker": "derek", "text": "He picks up the bag. Checks his phone again. “I’ll be home late. Don’t wait up.” Another cheek kiss. Same as before. Same everything." },
          { "speaker": "narrator", "text": "The bell chimes as he leaves. The store goes quiet." },
          { "speaker": "narrator", "text": "Harper stares at the door for a long time. Then she looks down at her left hand. The ring. She turns it. Slowly. All the way around. Then she does something she’s never done in front of you — she slides it off. Sets it on the counter next to the register. Stares at it." },
          { "speaker": "harper", "text": "“He didn’t introduce himself to you.” Her voice is flat. “My fianc— walked into my store, talked about insurance, took beer he didn’t pay for, and didn’t even ask your name.”" },
          { "speaker": "player", "text": "Is it always like that?" },
          { "speaker": "harper", "text": "“Always.” She picks up the ring. Turns it in the light. “You know what this ring cost? Four hundred dollars. He told me. On the night he proposed. He told me the price like he was showing me a receipt.”" },
          { "speaker": "narrator", "text": "She puts the ring back on. Slowly. Like she’s deciding something." },
          { "speaker": "harper", "text": "“I used to think love was supposed to feel like this — quiet, stable, grown-up. Now I think quiet and empty look the same from the outside.”" },
          { "speaker": "narrator", "text": "She turns off the OPEN sign. The neon flickers once and dies." },
          { "speaker": "harper", "text": "“Help me close up?” She doesn’t wait for an answer. She hands you a broom. And for the next twenty minutes you sweep floors together in a store where the only thing on the shelf that’s really hers is the silence." }
        ]
      },
      {
        "step": 4,
        "title": "The Delivery",
        "room": "market",
        "context": "A big shipment came in wrong. Harper is handling it alone.",
        "phrase": "“He doesn’t come to the store anymore. Says it depresses him.”",
        "completionFlag": "harper_ntr_q4_complete",
        "corruptionRequired": 25,
        "corruptionReward": 10,
        "timeStart": 20,
        "timeEnd": 23,
        "lines": [
          { "speaker": "narrator", "text": "The market is dark except for the stockroom light. Harper called you an hour ago. One text: “Can you come to the store?” No emoji. No context. Just the question." },
          { "speaker": "narrator", "text": "She’s sitting on an upturned milk crate behind the counter. A bottle of wine is open beside her — the expensive kind she never stocks because the margin isn’t worth it. She poured two glasses before you arrived." },
          { "speaker": "harper", "text": "“Derek is selling the store.”" },
          { "speaker": "narrator", "text": "She says it the way someone says “the building is on fire” — calm, because the panic already happened hours ago and all that’s left is the smoke." },
          { "speaker": "player", "text": "He can’t do that. It’s yours." },
          { "speaker": "harper", "text": "“It’s ours. Technically.” She drinks. “When he proposed, I added his name to the lease. He said it was romantic — ’what’s mine is yours.’ I thought it meant something. Turns out it meant he has signing authority.”" },
          { "speaker": "narrator", "text": "She pulls a folder from under the counter. Inside: a letter from a commercial real estate agent. An offer from a chain grocery store. The number is six figures." },
          { "speaker": "harper", "text": "“He accepted it. Without telling me. I found out because the real estate agent called to confirm the inspection date and asked for the ’other owner.’”" },
          { "speaker": "player", "text": "When was this?" },
          { "speaker": "harper", "text": "“Yesterday.” She sets the glass down. “I called Derek. He said it was ’a great opportunity.’ That we could use the money for the wedding. The wedding that doesn’t have a date or a venue or, honestly, a reason to happen anymore.”" },
          { "speaker": "narrator", "text": "She stands and walks along the shelves. Runs her fingers across the labels like she’s reading braille." },
          { "speaker": "harper", "text": "“I built this place. My mother had a grocery store in the town she grew up in. She taught me how to read an invoice before she taught me how to ride a bike. When she died, I took the insurance money and opened this.”" },
          { "speaker": "narrator", "text": "She stops at the produce section. The peaches she hand-picked that morning." },
          { "speaker": "harper", "text": "“Every item on every shelf, I chose. The layout, the suppliers, the hours. When the freezer breaks at two AM, I’m the one who drives here. Not Derek. Me.”" },
          { "speaker": "player", "text": "Can you fight the sale?" },
          { "speaker": "harper", "text": "“Maybe. A lawyer said I might have grounds since I didn’t consent. But that means fighting Derek. In court. Publicly.” She sits back down. “This is the man I was going to marry. Who I wake up next to every morning. Who I share a mortgage with.”" },
          { "speaker": "narrator", "text": "She looks at the ring again. This time she doesn’t twist it. She just stares." },
          { "speaker": "harper", "text": "“He said ’you’re overreacting.’ My favorite. ’It’s just a store, Harper.’” Her voice breaks on the word “just.” “Twenty years of my mother’s recipes. Four years of six-AM mornings. A hundred regulars who know my name. Just a store.”" },
          { "speaker": "player", "text": "It’s not just a store." },
          { "speaker": "harper", "text": "“No.” She looks at you. Her eyes are wet but her jaw is set. “No, it’s not.”" },
          { "speaker": "narrator", "text": "She drinks the rest of her wine. Sets the glass in the sink behind the counter. Washes it. Dries it. Puts it away. Even now, even with everything falling apart, she keeps the store clean." },
          { "speaker": "harper", "text": "“I’m going to call the lawyer tomorrow. Whatever that means for Derek, for the engagement — I don’t care anymore. This store was mine before he was, and it’ll be mine after.”" },
          { "speaker": "narrator", "text": "She walks you to the door. Her hand is on the lock when she stops." },
          { "speaker": "harper", "text": "“You show up.” She says it quietly. “Every time. You just… show up. You have no idea what that means to someone who’s been waiting for their fianc— to show up for two years.”" },
          { "speaker": "narrator", "text": "She locks the door behind you. Through the glass you see her turn off the last light. Then she sits in the dark for a long time before she goes home." }
        ]
      },
      {
        "step": 5,
        "title": "The Keys",
        "room": "market",
        "context": "Harper is closing up for the last time today. She has news.",
        "phrase": "“I gave the ring back. He didn’t even look surprised.”",
        "completionFlag": "harper_ntr_q5_complete",
        "corruptionRequired": 35,
        "corruptionReward": 15,
        "timeStart": 8,
        "timeEnd": 12,
        "branchChoice": {"prompt":"What path will you take?","options":[{"label":"Take her side openly","branch":"a","response":"narrator::The path is set. No going back now."},{"label":"Stay neutral","branch":"b","response":"narrator::You step back. Events will unfold on their own."}]},
        "lines": [
          { "speaker": "narrator", "text": "The market is open. Saturday morning. Harper is behind the counter in a new blouse — not the polo she usually wears, but something softer, chosen. The ring is gone." },
          { "speaker": "narrator", "text": "You notice it the way you notice when a painting is missing from a wall — the absence louder than the presence ever was." },
          { "speaker": "harper", "text": "“I called the lawyer.” She’s stocking the front display, hands steady. “Filed an injunction. The sale is frozen pending review. Derek’s agent called me ’difficult.’ Derek called me ’selfish.’”" },
          { "speaker": "player", "text": "What did you call him?" },
          { "speaker": "harper", "text": "“’Ex-fianc—.’” She places a can of soup on the shelf with a precision that borders on ceremony. “Last night. At the kitchen table. I put the ring on the counter and I said: ’This isn’t working. We both know it. I’m done pretending.’”" },
          { "speaker": "player", "text": "How did he take it?" },
          { "speaker": "harper", "text": "“He said ’fine’ and went to bed.” She laughs. It’s not bitter — it’s relieved. “Fine. Two years of engagement and a shared mortgage and he said ’fine.’ That’s all I was worth. One syllable.”" },
          { "speaker": "narrator", "text": "She finishes the display and steps back to look at it. Adjusts one can a quarter-inch to the left." },
          { "speaker": "harper", "text": "“He’s moving out by the end of the month. I’m keeping the house — it was mine before we moved in together. And I’m keeping this store. The lawyer says the injunction will hold.”" },
          { "speaker": "player", "text": "You did it." },
          { "speaker": "harper", "text": "“I did the paperwork.” She turns to you. “But the decision — the real one, the one where I stopped being afraid — that happened in this store. While I was counting cans with someone who actually listens.”" },
          { "speaker": "narrator", "text": "She walks out from behind the counter. She’s never done that before — she’s always stayed on her side, professional, separated by the register. Now there’s nothing between you." },
          { "speaker": "harper", "text": "“You know what Derek never did? Not once in two years?” She’s close. “He never walked me home. He never sat on the floor with me during inventory. He never asked me about the produce or the suppliers or why I arrange the canned goods by color instead of brand.”" },
          { "speaker": "player", "text": "Why do you?" },
          { "speaker": "harper", "text": "“Because my mother did.” Her voice catches. “And nobody ever asked.”" },
          { "speaker": "narrator", "text": "She kisses you. Careful at first — the way someone kisses when they’ve been careful about everything for so long that tenderness feels like a foreign language. Then deeper, like she’s translating something she’s always known but never said out loud." },
          { "speaker": "narrator", "text": "She tastes like coffee and the peppermint she keeps behind the register and the relief of a woman who just took off a ring and a future that never fit." },
          { "speaker": "harper", "text": "“I am a thirty-one-year-old woman kissing someone in her own grocery store at nine in the morning.” She presses her forehead against yours. “And I don’t care. For the first time in years, I don’t care about being professional.”" },
          { "speaker": "narrator", "text": "The bell above the door chimes. A customer. Harper steps back, smooths her blouse, and becomes the manager again — but the smile she gives you before she turns around is the real one. The one that doesn’t have a customer-service version." },
          { "speaker": "harper", "text": "“Come back at closing.” She whispers it as she passes you. “I’m taking the long way home. And this time I’m not walking alone.”" },
          { "speaker": "narrator", "text": "You buy something you don’t need. She doesn’t charge you. And the shelf where the ring used to sit — the little spot by the register where she kept it during her shift — is empty and clean and finally hers." }
        ]
      },
    ]
  },
  ntrRivals: {
    "serena": { "name": "Marcus", "role": "Late husband’s business partner", "portrait": "assets/portraits/marcus.jpeg", "description": "Marcus managed David’s finances and never stopped managing Serena’s. He speaks in favors and debts, keeps a ledger no one else has seen, and treats every visit like a collection call. His suits are expensive, his patience is calculated, and his grip on Serena’s household has outlasted her grief." },
    "kira": { "name": "Tyler", "role": "Possessive boyfriend", "portrait": "assets/portraits/Tyler.jpeg", "description": "Tyler drives a car with tinted windows and bass that rattles the block. He never shows up to Kira’s races but always knows where she is. He calls it love; she calls it a leash. Eight months of broken promises and he still acts like her running shoes are a personal insult." },
    "valentina": { "name": "Ethan", "role": "Charming ex", "portrait": "assets/portraits/Ethan.jpeg", "description": "Ethan has designer stubble, a conference-circuit tan, and a father whose friends run art foundations. He flew across the country to win Amber back and brought flowers like a prop. Every gesture is rehearsed, every compliment has a hook, and he still calls her work ‘accessible’ like it’s a compliment." },
    "harper": { "name": "Derek", "role": "Emotionally distant fiancé", "portrait": "assets/portraits/Derek.jpeg", "description": "Derek proposed three years ago and has been drifting ever since. He never comes to the store, cancels dinners without warning, and talks about selling the business Harper built with her own hands. The ring sits by the register like a reminder of a promise neither of them believes anymore." }
  },
  ntrNetorareQuests: {
    "serena": [],
    "kira": [],
    "valentina": [],
    "harper": []
  },
  ntrJobs: {
    market: {
      title: "Supermarket",
      locationId: "market",
      pay: 10,
      startHour: 7,
      latestStartHour: 10,
      contractDays: 5,
      textHireOffer: "A laminated card pinned to the noticeboard by the entrance reads: PART-TIME HELP WANTED — ask at the counter. The woman behind the register looks you over without stopping what she’s doing.",
      textHireAccept: [
        "narrator::She slides a single sheet of paper across the counter. It’s a contract — one week minimum, $10 a day, Monday to Friday, starting tomorrow morning at seven.",
        "narrator::You sign it. She tears off the bottom copy and hands it to you without ceremony.",
        "narrator::“Seven o’clock. Don’t be late.”"
      ],
      textHireDecline: "You step away from the noticeboard. The card stays pinned where it was.",
      textArrival: "You clock in at the supermarket. The fluorescent lights hum the same way they did yesterday.",
      textShiftDone: "You finish stocking the last shelf and clock out. Another shift down.",
      textTooLate: "The morning shift started without you. You’ll have to come earlier tomorrow.",
      textAlreadyWorked: "You already worked today. Come back tomorrow.",
      textWrongDay: "The store doesn’t need you on weekends.",
      textContractOver: "Your one-week contract is up. You can sign on for another week if you want to keep working here."
    },
    diner: {
      title: "The Nightowl",
      locationId: "diner",
      pay: 10,
      startHour: 18,
      latestStartHour: 21,
      contractDays: 5,
      textHireOffer: "A hand-written note on the door says HELP WANTED — EVENINGS. Inside, the woman behind the counter is wiping it down for what looks like the hundredth time today.",
      textHireAccept: [
        "narrator::She pulls a crumpled contract from under the counter and smooths it out. One week, $10 a night, six to close, weekdays.",
        "narrator::You sign. She folds the paper and puts it in a drawer that doesn’t quite close.",
        "narrator::“Tomorrow. Six. Don’t be early, there’s nothing to do before six.”"
      ],
      textHireDecline: "You leave the note on the door where it was. The woman goes back to wiping.",
      textArrival: "You push through the door of the Nightowl. The evening crowd — such as it is — hasn’t arrived yet.",
      textShiftDone: "You hang the apron up and step out into the night. The neon sign buzzes behind you.",
      textTooLate: "It’s too late to start — the evening shift is already underway.",
      textAlreadyWorked: "You already worked tonight.",
      textWrongDay: "The Nightowl doesn’t need you on weekends.",
      textContractOver: "Your one-week contract is done. You can re-sign if you want to keep the evening shifts."
    },
    hotel: {
      title: "The Ashgrove",
      locationId: "hotel",
      pay: 10,
      startHour: 10,
      latestStartHour: 14,
      contractDays: 5,
      textHireOffer: "A small card in the window reads FRONT DESK — PART TIME. The lobby is empty. A woman behind the desk looks up when you walk in.",
      textHireAccept: [
        "narrator::She produces a form from somewhere behind the computer. One week minimum, $10 a day, ten to afternoon, weekdays.",
        "narrator::You fill it in. She reads it upside-down while you write.",
        "narrator::“Ten o’clock tomorrow. The lanyard’s in the drawer.”"
      ],
      textHireDecline: "You leave the lobby. The card stays in the window.",
      textArrival: "You badge in at the Ashgrove. The lobby smells like carpet shampoo, same as always.",
      textShiftDone: "You hand the lanyard back and step outside. The afternoon light hits different after a shift indoors.",
      textTooLate: "The desk shift started without you. Too late for today.",
      textAlreadyWorked: "You already did today’s shift.",
      textWrongDay: "No shifts on the weekend.",
      textContractOver: "Your week is up at the Ashgrove. Sign another contract if you want to keep the desk shifts."
    }
  },
};
