// Admin back-office mock data: every DisputeGator signup, where they are in the
// journey, dispute activity, items found/removed, and per-bureau score history.
// Stages mirror the member onboarding + active journey.
(function () {
  // Build a monthly score trail from `start` to `now` over `months` points.
  function trail(start, now, months, jitter) {
    const out = [];
    const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    for (let i = 0; i < months; i++) {
      const t = months === 1 ? 1 : i / (months - 1);
      const base = Math.round(start + (now - start) * (t * t * (3 - 2 * t))); // smoothstep
      const j = i === 0 || i === months - 1 ? 0 : Math.round((Math.sin(i * 9.7) * (jitter || 4)));
      out.push({ m: labels[(5 + i) % 12], score: base + j });
    }
    out[out.length - 1].score = now;
    return out;
  }
  function hist(ex, eq, tu, exStart, eqStart, tuStart, months) {
    return {
      Experian: trail(exStart, ex, months, 5),
      Equifax: trail(eqStart, eq, months, 5),
      TransUnion: trail(tuStart, tu, months, 5),
    };
  }

  // stage: signup → profile → report → letter → budget → commitment
  const STAGE = {
    signup:     { label: 'Signed up', step: 1, progress: 12, tone: 'fair' },
    profile:    { label: 'Profile submitted', step: 2, progress: 30, tone: 'fair' },
    report:     { label: 'Report loaded', step: 3, progress: 48, tone: 'fair' },
    letter:     { label: 'Letter submitted', step: 4, progress: 66, tone: 'strong' },
    budget:     { label: 'Budget created', step: 5, progress: 84, tone: 'strong' },
    commitment: { label: 'Personal commitment', step: 6, progress: 100, tone: 'strong' },
  };

  const M = [
    // Featured — real report parsed elsewhere in the app.
    { id: 'chad-nicely', name: 'Chad Nicely', email: 'chad@chadnicely.com', plan: 'Premium', joined: '2026-03-04', lastActive: '2h ago',
      stage: 'letter', disputes: 3, lettersSent: 9, itemsFound: 12, itemsRemoved: 4, submission: 'manual',
      scores: { Experian: 624, Equifax: 627, TransUnion: 625 }, lift: 27,
      history: hist(624, 627, 625, 598, 601, 600, 4) },

    { id: 'maria-delgado', name: 'Maria Delgado', email: 'maria.delgado@gmail.com', plan: 'Premium', joined: '2026-01-12', lastActive: '1d ago',
      stage: 'commitment', disputes: 5, lettersSent: 18, itemsFound: 22, itemsRemoved: 17, submission: 'auto',
      scores: { Experian: 712, Equifax: 705, TransUnion: 718 }, lift: 96,
      history: hist(712, 705, 718, 612, 605, 620, 6) },

    { id: 'james-okafor', name: 'James Okafor', email: 'j.okafor@outlook.com', plan: 'Standard', joined: '2026-02-20', lastActive: '5h ago',
      stage: 'letter', disputes: 2, lettersSent: 6, itemsFound: 15, itemsRemoved: 5, submission: 'manual',
      scores: { Experian: 588, Equifax: 596, TransUnion: 601 }, lift: 41,
      history: hist(588, 596, 601, 548, 553, 562, 5) },

    { id: 'sara-kim', name: 'Sara Kim', email: 'sara.kim@icloud.com', plan: 'Premium', joined: '2026-04-28', lastActive: '20m ago',
      stage: 'report', disputes: 0, lettersSent: 0, itemsFound: 9, itemsRemoved: 0,
      scores: { Experian: 641, Equifax: 638, TransUnion: 649 }, lift: 0,
      history: hist(641, 638, 649, 641, 638, 649, 2) },

    { id: 'derrick-hall', name: 'Derrick Hall', email: 'dhall82@yahoo.com', plan: 'Standard', joined: '2026-05-10', lastActive: '3d ago',
      stage: 'profile', disputes: 0, lettersSent: 0, itemsFound: 0, itemsRemoved: 0,
      scores: { Experian: 0, Equifax: 0, TransUnion: 0 }, lift: 0,
      history: null },

    { id: 'lauren-pace', name: 'Lauren Pace', email: 'lauren.pace@gmail.com', plan: 'Free', joined: '2026-05-29', lastActive: '6d ago',
      stage: 'profile', disputes: 0, lettersSent: 0, itemsFound: 0, itemsRemoved: 0,
      scores: { Experian: 0, Equifax: 0, TransUnion: 0 }, lift: 0,
      history: null },

    { id: 'tony-russo', name: 'Tony Russo', email: 'trusso@proton.me', plan: 'Premium', joined: '2025-11-18', lastActive: '4h ago',
      stage: 'commitment', disputes: 6, lettersSent: 24, itemsFound: 28, itemsRemoved: 23, submission: 'auto',
      scores: { Experian: 738, Equifax: 742, TransUnion: 731 }, lift: 134,
      history: hist(738, 742, 731, 604, 612, 598, 7) },

    { id: 'aisha-bello', name: 'Aisha Bello', email: 'aisha.b@gmail.com', plan: 'Standard', joined: '2026-03-22', lastActive: '1h ago',
      stage: 'letter', disputes: 4, lettersSent: 12, itemsFound: 19, itemsRemoved: 9, submission: 'auto',
      scores: { Experian: 662, Equifax: 658, TransUnion: 671 }, lift: 58,
      history: hist(662, 658, 671, 604, 600, 618, 5) },

    { id: 'kevin-tran', name: 'Kevin Tran', email: 'kevin.tran@hey.com', plan: 'Premium', joined: '2026-04-02', lastActive: '8h ago',
      stage: 'letter', disputes: 2, lettersSent: 7, itemsFound: 14, itemsRemoved: 3, submission: 'manual',
      scores: { Experian: 609, Equifax: 615, TransUnion: 622 }, lift: 22,
      history: hist(609, 615, 622, 587, 593, 600, 4) },

    { id: 'nina-petrov', name: 'Nina Petrov', email: 'npetrov@gmail.com', plan: 'Standard', joined: '2026-05-19', lastActive: '2d ago',
      stage: 'report', disputes: 0, lettersSent: 0, itemsFound: 11, itemsRemoved: 0,
      scores: { Experian: 597, Equifax: 603, TransUnion: 611 }, lift: 0,
      history: hist(597, 603, 611, 597, 603, 611, 2) },

    { id: 'marcus-green', name: 'Marcus Green', email: 'marcus.green@gmail.com', plan: 'Free', joined: '2026-06-01', lastActive: '12d ago',
      stage: 'signup', disputes: 0, lettersSent: 0, itemsFound: 0, itemsRemoved: 0,
      scores: { Experian: 0, Equifax: 0, TransUnion: 0 }, lift: 0,
      history: null },

    { id: 'erica-fox', name: 'Erica Fox', email: 'erica.fox@icloud.com', plan: 'Premium', joined: '2025-12-09', lastActive: '30m ago',
      stage: 'budget', disputes: 5, lettersSent: 20, itemsFound: 25, itemsRemoved: 19, submission: 'auto',
      scores: { Experian: 724, Equifax: 718, TransUnion: 729 }, lift: 108,
      history: hist(724, 718, 729, 616, 610, 621, 7) },

    { id: 'paul-okoro', name: 'Paul Okoro', email: 'paul.okoro@outlook.com', plan: 'Standard', joined: '2026-02-05', lastActive: '1d ago',
      stage: 'letter', disputes: 3, lettersSent: 10, itemsFound: 17, itemsRemoved: 7, submission: 'auto',
      scores: { Experian: 631, Equifax: 627, TransUnion: 640 }, lift: 49,
      history: hist(631, 627, 640, 582, 578, 591, 5) },

    { id: 'hannah-cole', name: 'Hannah Cole', email: 'hannah.cole@gmail.com', plan: 'Standard', joined: '2026-05-24', lastActive: '4d ago',
      stage: 'profile', disputes: 0, lettersSent: 0, itemsFound: 0, itemsRemoved: 0,
      scores: { Experian: 0, Equifax: 0, TransUnion: 0 }, lift: 0,
      history: null },

    { id: 'diego-morales', name: 'Diego Morales', email: 'dmorales@gmail.com', plan: 'Premium', joined: '2026-01-30', lastActive: '6h ago',
      stage: 'budget', disputes: 4, lettersSent: 15, itemsFound: 21, itemsRemoved: 16, submission: 'manual',
      scores: { Experian: 699, Equifax: 693, TransUnion: 706 }, lift: 84,
      history: hist(699, 693, 706, 615, 609, 622, 6) },

    { id: 'olivia-shaw', name: 'Olivia Shaw', email: 'olivia.shaw@hey.com', plan: 'Free', joined: '2026-06-08', lastActive: '9d ago',
      stage: 'signup', disputes: 0, lettersSent: 0, itemsFound: 0, itemsRemoved: 0,
      scores: { Experian: 0, Equifax: 0, TransUnion: 0 }, lift: 0,
      history: null },
  ];

  // Average current score (of bureaus with a pulled report).
  M.forEach((m) => {
    const v = [m.scores.Experian, m.scores.Equifax, m.scores.TransUnion].filter(Boolean);
    m.avgScore = v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : null;
  });

  window.DG_ADMIN = {
    stages: STAGE,
    stageOrder: ['signup', 'profile', 'report', 'letter', 'budget', 'commitment'],
    members: M,
  };
})();
