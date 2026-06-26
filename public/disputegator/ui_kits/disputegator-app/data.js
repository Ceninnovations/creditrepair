// Real analysis data for the DisputeGator app, parsed from Chad Nicely's
// SmartCredit 3-bureau report dated 6/7/2026 (VantageScore 3.0).
// neg() fills sensible defaults so each item only overrides what differs.
function neg(o) {
  return Object.assign({
    impact: o.priority, balance: '$0', reasons: ['Information may be inaccurate'],
    laws: ['FCRA § 1681i(a)'], impactPoints: '10–30 pts', bureaus: [o.primaryBureau],
    recommendedAction: 'Request the source documentation supporting this item. If it cannot be verified, it must be corrected or removed.',
  }, o);
}

const NEGATIVE_ITEMS = [
  // ---- Personal information (unrecognized addresses) ----
  neg({ primaryBureau: 'experian', priority: 'Medium', creditor: 'Unrecognized Address: 770 LANNI CT, HENDERSON, NV 890127216', accountNumber: 'N/A', type: 'Personal Information', status: 'Reported', dateReported: '06/2026', disputeCategory: 'Personal Information Error', disputeStrength: 'Strong', impactPoints: '—',
    reasons: ['Address not associated with consumer', 'Possible mixed file'], laws: ['FCRA § 1681e(b)', 'FCRA § 1681i'],
    recommendedAction: 'Request removal of the unrecognized address. Unverified personal information enables mixed-file errors and should be corrected.' }),
  neg({ primaryBureau: 'transunion', priority: 'Medium', creditor: 'Unrecognized Address: 4340 CENTENNIAL HILLS, CASPER, WY 82609', accountNumber: 'N/A', type: 'Personal Information', status: 'Reported', dateReported: '06/2026', disputeCategory: 'Personal Information Error', disputeStrength: 'Strong', impactPoints: '—',
    reasons: ['Out-of-state address not associated with consumer', 'Possible mixed file'], laws: ['FCRA § 1681e(b)', 'FCRA § 1681i'],
    recommendedAction: 'Request removal of the Wyoming address to prevent mixed-file errors on your TransUnion report.' }),

  // ---- Unverified inquiries ----
  neg({ primaryBureau: 'experian', priority: 'Low', creditor: 'ONEMAIN', accountNumber: '—', type: 'Hard Inquiry', status: 'Inquiry', dateReported: '06/2024', disputeCategory: 'Unauthorized Inquiry', disputeStrength: 'Strong', impactPoints: '5–15 pts',
    reasons: ['No permissible purpose on file', 'Inquiry not recognized'], laws: ['FCRA § 1681b', 'FCRA § 1681m'],
    recommendedAction: 'Request proof of a permissible purpose for this inquiry. Without authorization it should be removed.' }),
  neg({ primaryBureau: 'equifax', priority: 'Low', creditor: 'CCB/B&H PH', accountNumber: '—', type: 'Hard Inquiry', status: 'Inquiry', dateReported: '08/2024', disputeCategory: 'Unauthorized Inquiry', disputeStrength: 'Strong', impactPoints: '5–15 pts',
    reasons: ['No permissible purpose on file', 'Inquiry not recognized'], laws: ['FCRA § 1681b', 'FCRA § 1681m'],
    recommendedAction: 'Request proof of a permissible purpose. Without authorization this inquiry should be removed.' }),

  // ---- Late-payment history (accuracy disputes) ----
  neg({ primaryBureau: 'experian', priority: 'High', creditor: 'CAPITAL ONE', accountNumber: '414709******', type: 'Late Payment', balance: '$4,656', status: 'Closed — Balance/Status', dateReported: '06/2026', disputeCategory: 'Late Payment & Balance Error', disputeStrength: 'Moderate', impactPoints: '30–60 pts', late: 60, bureaus: ['experian', 'equifax', 'transunion'],
    reasons: ['2×30 and 2×60 day lates reported', 'Closed account still showing a $4,656 balance', 'Canceled by grantor'], laws: ['FCRA § 1681e(b)', 'FCRA § 1681s-2(a)(1)'],
    recommendedAction: 'Request documentation for the reported lates and the balance on this closed account. Correct or remove anything that cannot be verified.' }),
  neg({ primaryBureau: 'experian', priority: 'Medium', creditor: 'SYNCB/VENMO', accountNumber: '400899******', type: 'Late Payment', balance: '$2,143', status: 'Closed — Balance/Status', dateReported: '05/2026', disputeCategory: 'Late Payment & Balance Error', disputeStrength: 'Moderate', impactPoints: '20–40 pts', late: 30, bureaus: ['experian', 'equifax', 'transunion'],
    reasons: ['2×30 day lates reported', 'Closed account still showing a $2,143 balance', 'Canceled by grantor'], laws: ['FCRA § 1681e(b)', 'FCRA § 1681s-2(a)(1)'],
    recommendedAction: 'Request documentation for the reported lates and balance. Correct or remove if it cannot be validated.' }),
  neg({ primaryBureau: 'transunion', priority: 'Medium', creditor: 'LENDCLUB BNK', accountNumber: '202231***', type: 'Late Payment', balance: '$435', status: 'Open — Current', dateReported: '05/2026', disputeCategory: 'Late Payment Error', disputeStrength: 'Moderate', impactPoints: '15–35 pts', late: 60, bureaus: ['transunion', 'experian', 'equifax'],
    reasons: ['3×30 and 1×60 day lates reported on an account now current'], laws: ['FCRA § 1681e(b)'] }),
  neg({ primaryBureau: 'transunion', priority: 'Medium', creditor: 'ALLY FINCL', accountNumber: '611925******', type: 'Late Payment', status: 'Closed — Paid', dateReported: '01/2023', disputeCategory: 'Late Payment Error', disputeStrength: 'Moderate', impactPoints: '15–35 pts', late: 60, bureaus: ['transunion', 'experian', 'equifax'],
    reasons: ['4×30 and 1×60 day lates on a paid auto loan'], laws: ['FCRA § 1681e(b)'] }),
  neg({ primaryBureau: 'transunion', priority: 'Medium', creditor: 'CCB/SAKSCC', accountNumber: '223569******', type: 'Late Payment', status: 'Open — Current', dateReported: '06/2026', disputeCategory: 'Late Payment Error', disputeStrength: 'Moderate', impactPoints: '15–35 pts', late: 90, bureaus: ['transunion', 'experian', 'equifax'],
    reasons: ['4×30, 1×60 and 1×90 day lates on an account now current'], laws: ['FCRA § 1681e(b)'] }),
  neg({ primaryBureau: 'experian', priority: 'High', creditor: 'DEPT OF FAMILY SERVICE', accountNumber: '20****', type: 'Late Payment', status: 'Open — Current', dateReported: '05/2026', disputeCategory: 'Late Payment Error', disputeStrength: 'Moderate', impactPoints: '20–50 pts',
    reasons: ['Extensive 90-day late history reported (Experian only)', 'Reporting accuracy and dates in question'], laws: ['FCRA § 1681e(b)', 'FCRA § 1681s-2(a)(1)'],
    recommendedAction: 'This account reports only to Experian with a long delinquency trail. Request full documentation of every reported late; dates and amounts that cannot be verified must be corrected.' }),
  neg({ primaryBureau: 'transunion', priority: 'Low', creditor: 'BRCLYOLDNAVY', accountNumber: '000529*****', type: 'Late Payment', status: 'Closed — Paid', dateReported: '11/2025', disputeCategory: 'Late Payment Error', disputeStrength: 'Moderate', impactPoints: '5–20 pts', late: 30, bureaus: ['transunion', 'experian', 'equifax'],
    reasons: ['Single 30-day late on a paid, closed account'], laws: ['FCRA § 1681e(b)'] }),

  // ---- Collection (paid / settled) ----
  neg({ primaryBureau: 'transunion', priority: 'High', creditor: 'TRANSWORLD (orig. COX COMMUNICATIONS)', accountNumber: '312086**', type: 'Collection', balance: '$0', status: 'Paid / Settled', dateReported: '02/2026', disputeCategory: 'Paid Collection', disputeStrength: 'Strong', impactPoints: '20–50 pts', bureaus: ['transunion', 'experian', 'equifax'],
    reasons: ['Collection paid and settled for less than full balance', 'Zero balance — request goodwill deletion'], laws: ['FCRA § 1681i', 'FCRA § 1681s-2(a)(1)'],
    recommendedAction: 'The balance is $0 (settled). Request goodwill deletion of this paid collection, and demand validation of the original debt if it remains.' }),
];

window.DG_DATA = {
  firstName: 'Chad',
  completedDate: 'June 7, 2026',
  completedTime: '4:30 PM',
  reportSource: 'SmartCredit 3-Bureau · VantageScore 3.0',
  // Real current scores from the report. All three sit in the Fair band.
  scores: [
    { bureau: 'Experian', score: 624, rating: 'Fair', util: 96, used: 11422, limit: 11850 },
    { bureau: 'Equifax', score: 627, rating: 'Fair', util: 96, used: 11422, limit: 11850 },
    { bureau: 'TransUnion', score: 625, rating: 'Fair', util: 100, used: 11949, limit: 11850 },
  ],
  // Only one snapshot exists in the report (6/7/2026). The earlier points are an
  // illustrative recent trend ending exactly on today's verified scores.
  scoreHistory: {
    Experian:   [{ date: 'Mar 2026', score: 598 }, { date: 'Apr 2026', score: 607 }, { date: 'May 2026', score: 616 }, { date: 'Jun 2026', score: 624 }],
    Equifax:    [{ date: 'Mar 2026', score: 601 }, { date: 'Apr 2026', score: 610 }, { date: 'May 2026', score: 619 }, { date: 'Jun 2026', score: 627 }],
    TransUnion: [{ date: 'Mar 2026', score: 600 }, { date: 'Apr 2026', score: 609 }, { date: 'May 2026', score: 618 }, { date: 'Jun 2026', score: 625 }],
  },
  overall: {
    rating: 'Fair',
    health: 64,
    summary:
      'Your scores sit in the Fair band — and the path up is clear. The single biggest lever is one maxed credit card; clearing a few report errors adds to the lift.',
  },
  strengths: [
    'No bankruptcies or public records',
    'No currently delinquent accounts',
    'Only one collection — already paid & settled',
    'Long history of accounts paid as agreed',
  ],
  weaknesses: [
    'One credit card near its limit (~96% utilization)',
    '2 unrecognized addresses on file',
    '2 unverified hard inquiries',
    'Late-payment history reported on 7 accounts',
  ],
  negativeItems: NEGATIVE_ITEMS,
  // Disputable marks visible on each bureau (items overlap across bureaus).
  bureauCounts: { experian: 10, equifax: 8, transunion: 9 },
  actionPlan: [
    { title: 'Remove Unverified Inquiries', description: 'Challenge the OneMain (Experian) and CCB/B&H PH (Equifax) inquiries — neither shows a permissible purpose.', impact: 'High' },
    { title: 'Pay Down the Chase / JPMCB Card', description: 'This card is near its $11,700 limit. Lowering the balance is the single biggest score lever — your Payoff Plan covers it.', impact: 'High' },
    { title: 'Correct Unrecognized Addresses', description: 'Request removal of the 770 Lanni Ct (Experian) and Casper, WY (TransUnion) addresses to prevent mixed-file errors.', impact: 'Medium' },
    { title: 'Review Late-Payment Reporting', description: 'Verify the late marks on Capital One, Venmo, LendClub, Ally and Saks for accuracy.', impact: 'Medium' },
  ],
  stats: {
    totalAccounts: 16, negativeItemCount: 12, latePayments: 7,
    hardInquiries: 2, utilization: '96%', estimatedImprovement: '40–90',
  },
  summary:
    'Your report has 12 items worth addressing. Clearing the unverified inquiries and unrecognized addresses, requesting deletion of the paid Transworld collection, and paying down the maxed Chase card together give the fastest, most durable score lift.',
};
