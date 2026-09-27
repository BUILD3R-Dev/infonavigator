import type { Product } from './products';

export interface Printer extends Product {
  overview: string[];
  faqs: { q: string; a: string }[];
  notFor: string[];
}

const AMAZON = (q: string) => `https://www.amazon.com/s?k=${encodeURIComponent(q)}`;
const V = '2026-09-27';

export const PRINTERS: Printer[] = [
  {
    slug: 'bambu-lab-p2s',
    name: 'Bambu Lab P2S',
    maker: 'Bambu Lab',
    vertical: '3d-printers',
    tagline: 'X1C-level prints without the X1C price.',
    price: 549,
    priceNote: 'standalone; $749 P2S Combo with AMS 2 Pro',
    metaScore: 8.8,
    metaScoreSources: 10,
    pros: [
      'Print quality rivaling the X1C for much less money, per owner comparisons',
      'DynaSense servo extruder: fewer jams, better consistency on CF-PLA and TPU',
      'Fully enclosed — ABS, ASA, and nylon-capable at $549',
      'AMS 2 Pro adds active filament drying while printing',
      'Best-in-class software: Bambu Studio, Handy app, MakerWorld, Farm Manager',
      'TechRadar 300-hour endurance test: consistent accuracy, no layer shifts',
    ],
    cons: [
      'Closed firmware — no Klipper access, real ecosystem lock-in',
      'Multicolor purging still wastes filament',
      'Audible at speed (~65 dB reviewer-measured); no Ethernet port',
      'Heat creep reported in hot rooms; belt tension loss after 100+ hours',
    ],
    specs: [
      { label: 'Build volume', value: '256 × 256 × 256 mm' },
      { label: 'Max speed', value: '600 mm/s' },
      { label: 'Motion', value: 'CoreXY, fully enclosed' },
      { label: 'Multicolor', value: 'AMS 2 Pro (Combo) — 4 colors + active drying' },
      { label: 'Nozzle', value: '0.4 mm hardened steel, 300 °C max' },
      { label: 'Bed', value: 'Textured PEI spring steel, auto leveling' },
      { label: 'Noise', value: '~65 dB (reviewer-measured)' },
      { label: 'Connectivity', value: 'Wi-Fi, Bluetooth, USB (no Ethernet)' },
    ],
    verdict:
      'The P2S is the printer to beat in 2026: flagship-tier output, an enclosed chamber, and the best software ecosystem in the business, starting at $549. The closed ecosystem is the real price of admission — if you can live with it, nothing else offers this much printer for the money.',
    bestFor: ['Serious hobbyists', 'ABS/ASA printing', 'Print farms'],
    notFor: ['Tinkerers who want open firmware', 'Silent-room printing', 'Anyone avoiding cloud accounts'],
    overview: [
      'The P2S launched in November 2025 as the successor to the P1S/P1P, and it landed with a clear message: everything the X1C does that matters, for hundreds less. The headline upgrade is the DynaSense servo extruder, which owners report meaningfully reduces jams and improves consistency on tricky filaments like CF-PLA and TPU. The 30-second quick-swap hotend makes nozzle maintenance nearly painless.',
      'The fully enclosed chamber is what separates the P2S from cheaper rivals at this price: ABS, ASA, and nylon print reliably without a DIY enclosure project. Pair it with the AMS 2 Pro in the $749 Combo and you get four-color printing plus active filament drying — genuinely useful if you print moisture-sensitive materials.',
      'The trade-offs are philosophical as much as practical. The firmware is closed, there is no Klipper access, and the full experience assumes a Bambu cloud account. Multicolor printing still purges filament into waste, it is audible at speed, and there is no Ethernet port. None of that stops it from being the default recommendation for most buyers — but open-source devotees should look at Prusa instead.',
    ],
    faqs: [
      {
        q: 'Is the Bambu Lab P2S worth it over the older P1S?',
        a: 'Yes for most buyers. The servo extruder, quieter operation, better camera, and quick-swap hotend are meaningful upgrades, and the P1S exists now mainly as the discounted older sibling.',
      },
      {
        q: 'Can the P2S print ABS and ASA?',
        a: 'Yes — the enclosed chamber (around 50 °C passive) handles ABS and ASA well. For exotic high-temp materials, printers with actively heated chambers like the Creality K2 Pro go further.',
      },
      {
        q: 'Does the P2S work without the cloud?',
        a: 'Basic printing works over LAN, but the full feature set — including the Handy app and MakerWorld integration — assumes a Bambu account. This is the ecosystem lock-in critics cite.',
      },
    ],
    affiliate: { link: AMAZON('bambu lab p2s'), label: 'Check price' },
    lastVerified: V,
  },
  {
    slug: 'bambu-lab-a1-combo',
    name: 'Bambu Lab A1 Combo',
    maker: 'Bambu Lab',
    vertical: '3d-printers',
    tagline: 'The easiest way into the hobby — now in four colors.',
    price: 400,
    priceNote: 'Combo with AMS Lite multicolor unit',
    metaScore: 9.0,
    metaScoreSources: 12,
    pros: [
      'Exceptional out-of-box print quality — zero manual calibration',
      'Whisper-quiet: ≤48 dB with active motor noise cancelling',
      'Cheapest genuinely easy multicolor printing (AMS Lite)',
      'Quick-swap nozzle in seconds; direct drive handles TPU well',
      'Polished workflow: full-auto calibration, dependable profiles',
    ],
    cons: [
      'Open frame — ABS/ASA warp at edges; no enclosure path',
      'Multicolor purge waste; AMS Lite eats desk space',
      'Documented NTC thermistor overheating issue (Bambu acknowledged Jan 2026)',
      'Proprietary nozzles cost $10–15 vs $2–3 generic',
      'Full features require a cloud account',
    ],
    specs: [
      { label: 'Build volume', value: '256 × 256 × 256 mm' },
      { label: 'Max speed', value: '500 mm/s' },
      { label: 'Motion', value: 'Open-frame Cartesian (bed slinger)' },
      { label: 'Multicolor', value: 'AMS Lite — 4 colors, RFID auto-sync' },
      { label: 'Nozzle', value: '0.4 mm quick-swap, 300 °C max' },
      { label: 'Bed', value: 'Textured PEI dual-sided, full-auto calibration' },
      { label: 'Noise', value: '≤48 dB (official)' },
      { label: 'Connectivity', value: 'Wi-Fi, Bambu Studio + Handy app' },
    ],
    verdict:
      'The A1 Combo remains the best first 3D printer you can buy: it calibrates itself, prints beautifully, runs quietly, and teaches you nothing about bed leveling — because you never need to learn. At $400 with four-color printing included, the value is unmatched. Just know its limits: PLA and PETG are its world; ABS lives elsewhere.',
    bestFor: ['First-time buyers', 'Classrooms & offices', 'Multicolor on a budget'],
    notFor: ['ABS/ASA printing', 'Anyone avoiding cloud accounts', 'Humid rooms without filament storage'],
    overview: [
      'Reviewers keep reaching for the same superlatives about the A1: TechRadar scored it 9/10 and called it the best beginner FDM printer at this price in 2026. The reason is simple — it removes every traditional pain point. Full-auto calibration finishes in minutes, the quick-swap nozzle changes in seconds without tools, and the direct-drive extruder handles flexible TPU that trips up cheaper machines.',
      'The AMS Lite makes the Combo the cheapest genuinely easy multicolor setup available. Four open spools with RFID auto-sync means loading the right filament is close to foolproof. It is not perfect — purge waste is real, and the Lite unit occupies serious desk space — but nothing else at $400 comes close.',
      'Two honest caveats. First, the open frame means ABS and ASA warp; this is a PLA/PETG/TPU machine. Second, Bambu acknowledged an NTC thermistor overheating issue in January 2026 — worth knowing about, and worth checking that any unit you buy carries the fix. Neither caveat dethrones it as the default beginner pick.',
    ],
    faqs: [
      {
        q: 'Is the A1 Combo good for complete beginners?',
        a: 'It is the best beginner pick available: full-auto calibration, guided setup, and dependable print profiles mean your first print succeeds. No bed-leveling knobs, no firmware tinkering.',
      },
      {
        q: 'What is the thermistor issue I have heard about?',
        a: 'Bambu acknowledged in January 2026 that some A1 units experienced NTC thermistor overheating, attributed to power-grid surges. Check that your unit has the fix and buy from a retailer with a real return policy.',
      },
      {
        q: 'Can the A1 print TPU?',
        a: 'Yes — the direct-drive extruder handles TPU well in single-color mode. Note the AMS Lite does not run TPU; flexible filament goes through the single spool path.',
      },
    ],
    affiliate: { link: AMAZON('bambu lab a1 combo'), label: 'Check price' },
    lastVerified: V,
  },
  {
    slug: 'creality-k2-pro',
    name: 'Creality K2 Pro',
    maker: 'Creality',
    vertical: '3d-printers',
    tagline: 'A heated chamber and 300³ volume at a mid-range price.',
    price: 799,
    priceNote: 'Combo with CFS (sale from $1,099); $599 standalone',
    metaScore: 8.2,
    metaScoreSources: 8,
    pros: [
      '60 °C actively heated chamber — rare at this price, great for ABS/ASA/PPA-CF',
      '300 × 300 × 300 mm build volume dwarfs 256³ rivals',
      '600 mm/s with excellent print quality; print-farm-grade construction',
      'Quiet for its size (~54 dB reviewer-measured)',
      'Native Fluidd access without rooting; dual AI cameras; Ethernet port',
    ],
    cons: [
      'CFS multicolor reliability issues — retraction failures widely reported',
      'Heavy purge waste on color changes',
      'Locked-down Klipper firmware; non-0.4 mm nozzle profiles are guesswork',
      'Chamber heater underwhelms in practice per long-term testing',
      'TPU printing is challenging; CFS cannot run TPU',
    ],
    specs: [
      { label: 'Build volume', value: '300 × 300 × 300 mm' },
      { label: 'Max speed', value: '600 mm/s' },
      { label: 'Motion', value: 'CoreXY, enclosed, 60 °C active chamber heater' },
      { label: 'Multicolor', value: 'CFS — up to 16 colors with 4 units' },
      { label: 'Nozzle', value: '0.4 mm tri-metal quick-swap, 300 °C max' },
      { label: 'Bed', value: 'Textured PEI flex plate, 110 °C, full-auto leveling' },
      { label: 'Noise', value: '~54 dB (reviewer-measured)' },
      { label: 'Connectivity', value: 'Wi-Fi, Ethernet, USB' },
    ],
    verdict:
      'The K2 Pro is the thinking buyer\u2019s flagship: a bigger build volume than Bambu\u2019s best, a genuinely heated chamber, and farm-grade construction — currently $799 on sale. But buy it for the printer, not the multicolor: CFS reliability complaints are too widespread to ignore. As a big, fast, enclosed single-color workhorse, it is superb.',
    bestFor: ['Large prints', 'ABS/ASA/engineering filaments', 'Print farms'],
    notFor: ['Multicolor-first buyers (see CFS caveats)', 'Tinkerers wanting open Klipper', 'Small desks'],
    overview: [
      'Creality built the K2 Pro to answer Bambu, and on hardware it lands punches: 300³ mm of build volume, 600 mm/s motion, step-servo motors, and the standout feature — a 60 °C actively heated chamber, something essentially unheard of under $1,000. TechRadar praised its speed, build quality, and ease of use; 3DPrint.com\u2019s month-long test highlighted quiet operation and maintenance-friendly construction.',
      'The honest asterisk is the CFS multicolor system. Creality\u2019s own forum and long-term YouTube reviews document retraction failures and filament-path problems serious enough that some owners stopped using multicolor entirely. Purge waste is heavy, and the chamber heater — the headline feature — barely reaches temperature in some long-term tests.',
      'So judge it as what it is: an excellent large-format enclosed CoreXY printer that happens to include a multicolor unit you may or may not trust. At the $799 sale price (down from $1,099), the hardware alone justifies it for big prints and engineering filaments. Multicolor-first buyers should look at the Snapmaker U1\u2019s toolchanger or Bambu\u2019s more mature AMS instead.',
    ],
    faqs: [
      {
        q: 'Is the Creality K2 Pro better than the Bambu Lab P2S?',
        a: 'It is bigger (300³ vs 256³) and has an actively heated chamber the P2S lacks. But Bambu\u2019s software ecosystem and multicolor reliability are ahead. Choose the K2 Pro for large engineering-filament prints; the P2S for the smoother overall experience.',
      },
      {
        q: 'Should I buy the K2 Pro Combo or standalone?',
        a: 'Only buy the Combo if you specifically want to try CFS multicolor knowing its reliability caveats. The $599 standalone is the safer value — the printer itself is the star.',
      },
      {
        q: 'Can it print TPU?',
        a: 'Single-color TPU is challenging on this machine, and the CFS cannot run TPU at all. Flexible-filament users should look at direct-drive bed-slingers like the A1 or Kobra 3.',
      },
    ],
    affiliate: { link: AMAZON('creality k2 pro'), label: 'Check price' },
    lastVerified: V,
  },
  {
    slug: 'anycubic-kobra-3',
    name: 'Anycubic Kobra 3',
    maker: 'Anycubic',
    vertical: '3d-printers',
    tagline: 'Maximum features per dollar — with caveats.',
    price: 349,
    priceNote: 'printer only; ACE Pro multicolor/dryer add-on extra',
    metaScore: 7.6,
    metaScoreSources: 8,
    pros: [
      'Excellent price-to-feature ratio — 4–8 color printing via ACE Pro add-on',
      'ACE Pro doubles as an active filament dryer — unique at this price',
      'LeviQ 3.0 auto-leveling is genuinely good; easy assembly',
      'Fast: up to 600 mm/s with input shaping',
      'Print quality comparable to printers twice the price when dialed in',
    ],
    cons: [
      'Wasteful multicolor purging — extreme cases report ~1.75 kg waste on a 150 g print',
      'Buggy AI detection with false positives; ACE Pro feeding issues',
      'Quality-control and support concerns: warped beds, snapped belts, slow parts shipping',
      'Open frame — struggles with ABS/ASA without an enclosure',
      'Needs more babysitting than Bambu rivals',
    ],
    specs: [
      { label: 'Build volume', value: '250 × 250 × 260 mm' },
      { label: 'Max speed', value: '600 mm/s' },
      { label: 'Motion', value: 'Open-frame Cartesian (bed slinger)' },
      { label: 'Multicolor', value: 'Optional ACE Pro — 4–8 colors + active drying' },
      { label: 'Nozzle', value: '0.4 mm quick-release, 300 °C max' },
      { label: 'Bed', value: 'PEI spring steel, 110 °C, LeviQ 3.0 leveling' },
      { label: 'Noise', value: 'Not published' },
      { label: 'Connectivity', value: 'Wi-Fi, USB, Anycubic app' },
    ],
    verdict:
      'The Kobra 3 is the price disruptor: no other $349 printer offers this feature list, and the ACE Pro\u2019s built-in filament drying is a genuine edge in humid climates. But the discount comes as hassle — QC lottery, flaky AI features, and support that tests patience. Confident tinkerers get a bargain; beginners should pay the A1 premium for peace of mind.',
    bestFor: ['Tight budgets', 'Tinkerers', 'Humid climates (ACE Pro drying)'],
    notFor: ['First-time buyers wanting plug-and-play', 'ABS/ASA printing', 'Anyone who dreads troubleshooting'],
    overview: [
      'Anycubic\u2019s playbook is simple: match the headline specs of printers costing twice as much, and let the price do the talking. At $349 the Kobra 3 delivers 600 mm/s motion, excellent LeviQ 3.0 auto-leveling, and an optional ACE Pro unit that adds 4–8 color printing with something nobody else offers at this price — active filament drying while printing. In humid climates, that alone can justify the purchase.',
      'The bill comes due in polish. Multicolor purging is wasteful — one user reported 1.75 kg of waste on a 150 g print with early firmware. The AI spaghetti detection throws false positives that pause prints, ACE Pro feeding can clog, and community reports of warped beds and snapped belts point to a real QC lottery. Parts can take 4–6 weeks.',
      'This is the classic enthusiast bargain: superb hardware value if you are willing to be your own support department. One long-term reviewer found print quality comparable to a Bambu X1 Carbon when running smoothly — the operative phrase being "when running smoothly." If that sentence makes you nervous, the A1 Combo costs $50 more and removes the anxiety.',
    ],
    faqs: [
      {
        q: 'Is the Anycubic Kobra 3 good for beginners?',
        a: 'It is easy to assemble and the auto-leveling is excellent, but beginners should know it needs more babysitting than a Bambu — expect occasional troubleshooting and slower support responses.',
      },
      {
        q: 'Do I need the ACE Pro?',
        a: 'Only for multicolor printing or if you want the active filament drying. The base Kobra 3 is a capable single-color printer at $349 without it.',
      },
      {
        q: 'What is the difference between the Kobra 3 and Kobra 3 V2?',
        a: 'The V2 is a refresh with a wider Y-rail, HD camera, and zoned leveling. If priced close to the V1, prefer the V2 — but the V1\u2019s discounts can make it the better value.',
      },
    ],
    affiliate: { link: AMAZON('anycubic kobra 3'), label: 'Check price' },
    lastVerified: V,
  },
  {
    slug: 'elegoo-centauri-carbon',
    name: 'Elegoo Centauri Carbon',
    maker: 'Elegoo',
    vertical: '3d-printers',
    tagline: 'Enclosed CoreXY speed for bed-slinger money.',
    price: 299,
    priceNote: 'sale price; list ~$413',
    metaScore: 8.4,
    metaScoreSources: 9,
    pros: [
      'Outstanding value — enclosed CoreXY performance at ~$299 on sale',
      'Tom\u2019s Hardware 4/5 Editor\u2019s Choice; GamesRadar\u2019s go-to beginner pick',
      'Workhorse reliability: 37-hour, 1.4 kg print with zero failures in testing',
      '320 °C hardened nozzle handles carbon-fiber filaments',
      'Nearly fully assembled; one-click self-check calibration',
    ],
    cons: [
      'No multicolor system on the original — the big functional gap',
      'Loud at high speed (~55–65 dB reviewer-measured)',
      'No heated chamber — ASA/PC/nylon need extra effort',
      'GPL firmware controversy in the community',
      'Weak camera lighting; tinted glass hampers monitoring',
    ],
    specs: [
      { label: 'Build volume', value: '256 × 256 × 256 mm' },
      { label: 'Max speed', value: '500 mm/s' },
      { label: 'Motion', value: 'CoreXY, enclosed (passive chamber)' },
      { label: 'Multicolor', value: 'None on v1 (separate CANVAS upgrade sold)' },
      { label: 'Nozzle', value: 'Hardened steel, 320 °C max' },
      { label: 'Bed', value: 'Dual-sided spring steel, 110 °C, 121-point leveling' },
      { label: 'Noise', value: '~55–65 dB (reviewer-measured)' },
      { label: 'Connectivity', value: 'Wi-Fi, LAN mode (no mandatory cloud)' },
    ],
    verdict:
      'The Centauri Carbon is the value pick that embarrasses printers twice its price: enclosed, fast, reliable, and frequently $299 on sale. Its only real sin is the missing multicolor system — which is exactly what the Carbon 2 addresses. If you print single-color and want maximum printer per dollar, start here.',
    bestFor: ['Value seekers', 'Single-color printing', 'ABS/ASA on a budget'],
    notFor: ['Multicolor printing (see Carbon 2)', 'Noise-sensitive rooms', 'GPL purists'],
    overview: [
      'The original Centauri Carbon did something remarkable: it brought enclosed CoreXY printing — the architecture of $600+ machines — down to a price that regularly dips to $299 on sale. Tom\u2019s Hardware gave it 4/5 and an Editor\u2019s Choice; GamesRadar calls it the go-to beginner recommendation. The reliability stories are striking: Tom\u2019s printed an entire 1.4 kg server case over 37 hours with zero failed prints.',
      'The 320 °C hardened-steel nozzle is a quiet superpower, opening carbon-fiber filaments that chew through brass nozzles. Setup is nearly zero — it arrives mostly assembled with a one-click self-check — and LAN mode means no mandatory cloud account, a genuine differentiator from Bambu.',
      'The gaps are honest ones. There is no multicolor system on the original, which is the single biggest functional difference versus similarly priced rivals. It is loud at speed, the chamber is not actively heated, and the community\u2019s GPL firmware complaints deserve a mention for open-source buyers. None of it changes the core proposition: the most printer per dollar in 3D printing.',
    ],
    faqs: [
      {
        q: 'Should I buy the Centauri Carbon or the Carbon 2?',
        a: 'Want multicolor? Get the Carbon 2. Print single-color and want the lowest price? The original on sale (~$299) is the better value — same core printing performance for less.',
      },
      {
        q: 'Can it print carbon-fiber filaments?',
        a: 'Yes — the hardened-steel nozzle (320 °C max) handles abrasive filaments like PA-CF that destroy brass nozzles.',
      },
      {
        q: 'Is it really good for beginners?',
        a: 'Yes. Near-full assembly, one-click calibration, and dependable auto-leveling make the first-print experience smooth. It is louder than a Bambu A1, so place it accordingly.',
      },
    ],
    affiliate: { link: AMAZON('elegoo centauri carbon'), label: 'Check price' },
    lastVerified: V,
  },
  {
    slug: 'elegoo-centauri-carbon-2',
    name: 'Elegoo Centauri Carbon 2 Combo',
    maker: 'Elegoo',
    vertical: '3d-printers',
    tagline: 'Four colors, enclosed, quiet — for $369 on sale.',
    price: 369,
    priceNote: 'Combo with CANVAS multicolor (sale from $449)',
    metaScore: 7.8,
    metaScoreSources: 7,
    provisionalScore: true,
    pros: [
      'Four-color printing included at $449 list — cheapest enclosed multicolor',
      'Enclosed CoreXY with 350 °C hardened-steel nozzle',
      'Quiet: ~45 dB claimed — library-level for a 3D printer',
      'Beginner-friendly: full-auto calibration, big 5″ touchscreen',
      'Handles engineering filaments (PC, fiber-reinforced) at this price',
    ],
    cons: [
      'Buyer rating 3.8/5 — satisfaction trails Bambu rivals',
      'External filament storage — humidity management is on you',
      'Fiddly first setup (upper shield + filament hub fit)',
      'Connectivity issues and AI-detection false positives reported',
      'Purge-based multicolor still wastes filament',
    ],
    specs: [
      { label: 'Build volume', value: '256 × 256 × 256 mm' },
      { label: 'Max speed', value: '500 mm/s' },
      { label: 'Motion', value: 'CoreXY, enclosed' },
      { label: 'Multicolor', value: 'CANVAS — 4 colors, RFID auto-detect' },
      { label: 'Nozzle', value: 'Hardened steel, 350 °C max' },
      { label: 'Bed', value: 'Dual-sided flex plate, 110 °C, auto leveling' },
      { label: 'Noise', value: '~45 dB (official)' },
      { label: 'Connectivity', value: 'Wi-Fi, LAN, USB' },
    ],
    verdict:
      'The Carbon 2 Combo fixes the original\u2019s biggest gap — multicolor — while staying the cheapest enclosed four-color printer you can buy. At the $369 sale price it is a remarkable package. But the 3.8/5 buyer rating is a yellow flag: Bambu\u2019s multicolor refinement is a generation ahead. Score marked provisional while owner data accumulates.',
    bestFor: ['Budget multicolor', 'Quiet rooms', 'Engineering filaments on a budget'],
    notFor: ['Buyers wanting the most polished multicolor', 'Humid climates without dry storage', 'Plug-and-play purists'],
    overview: [
      'Elegoo\u2019s answer to its own hit product is straightforward: take everything that made the Centauri Carbon the value king, and bolt on the one thing it lacked — multicolor. The Carbon 2 Combo integrates the CANVAS four-color system with RFID auto-detect, keeps the enclosed CoreXY design, and bumps the nozzle to 350 °C hardened steel for engineering filaments. At $449 list — and $369 on recent sales — it is the cheapest enclosed multicolor printer on the market.',
      'It is also notably quiet: ~45 dB claimed, which reviewers confirm is library-level for this category. GamesRadar found it beginner-friendly with reliable, detailed results, and the 5-inch touchscreen plus full-auto calibration keep setup approachable.',
      'The caution lights: buyer ratings sit at 3.8/5 versus 4.3/5 for Bambu\u2019s P1S Combo, with complaints about connectivity, fiddly initial assembly of the upper shield and filament hub, and AI detection false positives. Filament sits outside the enclosure, so humid-climate buyers need dry storage. It is tremendous value with rougher edges — we\u2019ve marked the score provisional until more owner data accumulates.',
    ],
    faqs: [
      {
        q: 'Is the Carbon 2 better than the Bambu Lab A1 Combo?',
        a: 'It is enclosed (better for ABS/ASA) and quieter, with a higher-temp nozzle. The A1 Combo has more polished software, a bigger community, and higher buyer satisfaction. Pick your priority.',
      },
      {
        q: 'Does the CANVAS system waste filament like other multicolor systems?',
        a: 'Yes — it is a single-nozzle purge system, so color changes purge filament. Only toolchanger designs like the Snapmaker U1 avoid purge waste.',
      },
      {
        q: 'Why is the score provisional?',
        a: 'The Carbon 2 launched in January 2026, so long-term owner data is still thin and buyer ratings are mixed. We publish the score with the warning rather than pretending certainty.',
      },
    ],
    affiliate: { link: AMAZON('elegoo centauri carbon 2'), label: 'Check price' },
    lastVerified: V,
  },
  {
    slug: 'prusa-mk4s',
    name: 'Prusa MK4S',
    maker: 'Prusa',
    vertical: '3d-printers',
    tagline: 'The open-source workhorse. Buy it for life.',
    price: 740,
    priceNote: 'assembled (Back to School sale; $999 list)',
    metaScore: 8.6,
    metaScoreSources: 10,
    pros: [
      'Reference-level print quality — Tom\u2019s Editors\u2019 Choice, 29/30 test scores',
      'Open-source hardware and firmware; repairable buy-it-for-life design',
      'No cloud dependency; 24/7 support; parts available for years',
      'Quiet operation with excellent first-layer consistency',
      'Huge ecosystem: Printables, Prusament discounts, farm-proven reliability',
    ],
    cons: [
      'Premium price — 2–3× budget CoreXY machines',
      'Open-frame bed-slinger; no enclosure included (needed for ABS/ASA)',
      'No longer the flagship — left off Prusa\u2019s Gen 2 upgrade list',
      'Full multicolor setup (MMU3 + enclosure) can approach ~$1,400',
      'Kit assembly no longer ships a printed manual',
    ],
    specs: [
      { label: 'Build volume', value: '250 × 210 × 220 mm' },
      { label: 'Max speed', value: 'Not published (24 mm³/s flow)' },
      { label: 'Motion', value: 'Open-frame Cartesian, Nextruder direct drive' },
      { label: 'Multicolor', value: 'Optional MMU3 — 5 colors (~$359–389)' },
      { label: 'Nozzle', value: 'Bondtech CHT high-flow brass, 290 °C max' },
      { label: 'Bed', value: 'PEI spring steel, 120 °C, load-cell leveling' },
      { label: 'Noise', value: 'Very quiet (reviewer consensus; no official dB)' },
      { label: 'Connectivity', value: 'Wi-Fi, Ethernet, USB, Prusa Connect' },
    ],
    verdict:
      'The MK4S is the last of a breed: an open, repairable, farm-proven workhorse from a company that supports machines for a decade. It cannot win on specs-per-dollar anymore — Bambu and Elegoo saw to that — but if you value ownership over ecosystem, nothing else feels like a Prusa. Buy the assembled unit on sale; the kit discount rarely justifies the weekend.',
    bestFor: ['Open-source devotees', 'Print farms', 'Buy-it-for-life buyers'],
    notFor: ['Spec-per-dollar maximizers', 'Enclosed printing out of the box', 'Multicolor on a budget'],
    overview: [
      'Every 3D printing discussion eventually mentions Prusa, and the MK4S shows why: Tom\u2019s Hardware Editors\u2019 Choice, 29/30 on independent test suites with ~0.1 mm dimensional accuracy, and print-farm owners who run theirs "all day" over other machines for first-layer consistency. The Nextruder direct-drive extruder with its 10:1 planetary gearbox is simply a superb piece of engineering.',
      'What you are really buying is the philosophy: open-source firmware and hardware, published service manuals, parts availability measured in years, 24/7 human support, and zero cloud dependency. For farms with proprietary designs or anyone who has been burned by a bricked cloud-dependent gadget, that matters more than millimeters per second.',
      'The honest context: Prusa\u2019s CORE One+ Gen 2 is now the flagship, and the MK4S was left off the Gen 2 upgrade list — it is at the end of its upgrade line (though Prusa supports machines for years). At $999 list it costs 2–3× budget CoreXY rivals, the frame is open, and a full MMU3 multicolor setup with enclosure approaches $1,400. The $740 Back to School assembled price is the sane entry point. This is a values purchase as much as a printer purchase — and there is nothing wrong with that.',
    ],
    faqs: [
      {
        q: 'Is the Prusa MK4S still worth buying in 2026?',
        a: 'Yes, if you value open-source, repairability, and long-term support over raw specs-per-dollar. If you want maximum printer for minimum money, Bambu or Elegoo win on paper.',
      },
      {
        q: 'Should I buy the kit or assembled?',
        a: 'The kit ($592 on sale) saves money and teaches you the machine, but the assembled unit ($740 on sale) is the better value for most — the discount rarely justifies a full weekend of assembly.',
      },
      {
        q: 'Can the MK4S print multicolor?',
        a: 'Yes, with the MMU3 add-on (up to 5 colors, ~$359–389). Budget for it honestly: printer + MMU3 + enclosure for ABS work can approach $1,400 all-in.',
      },
    ],
    affiliate: { link: AMAZON('prusa mk4s'), label: 'Check price' },
    lastVerified: V,
  },
  {
    slug: 'snapmaker-u1',
    name: 'Snapmaker U1',
    maker: 'Snapmaker',
    vertical: '3d-printers',
    tagline: 'True toolchanging multicolor — with almost zero waste.',
    price: 849,
    priceNote: 'down from $999 MSRP',
    metaScore: 8.7,
    metaScoreSources: 8,
    pros: [
      'SnapSwap toolchanger: ~5 s swaps, virtually zero purge waste',
      'Multicolor prints finish up to 5× faster — no purge towers',
      'Outstanding quality: 29/30 TechRadar; reliability rivaling Prusa XL',
      'Most accessible true toolchanger under $1,000 (TechRadar 5/5 value)',
      'Klipper-based firmware; native Orca Slicer support',
    ],
    cons: [
      'Enclosure not included — $149 Top Cover "lid tax," passive only',
      'Stock nozzles are stainless only — no hardened steel out of the box',
      'Capped at 4 colors/materials with no expansion path',
      'Software ecosystem feels half-finished vs Bambu/Prusa',
      'Louder than enclosed rivals; open frame has no acoustic insulation',
    ],
    specs: [
      { label: 'Build volume', value: '270 × 270 × 270 mm' },
      { label: 'Max speed', value: '500 mm/s' },
      { label: 'Motion', value: 'CoreXY, SnapSwap 4-toolhead toolchanger' },
      { label: 'Multicolor', value: 'Toolchanging — 4 materials, ~zero purge waste' },
      { label: 'Nozzle', value: '4× 0.4 mm stainless, 300 °C max' },
      { label: 'Bed', value: 'PEI steel plate, auto mesh leveling' },
      { label: 'Noise', value: '<50 dB(A) official lab; ~55 dB independent' },
      { label: 'Connectivity', value: 'Wi-Fi, USB, 2MP camera' },
    ],
    verdict:
      'The U1 is the most interesting printer of 2026: a true toolchanger — the technology previously reserved for $2,000+ machines — for $849, with multicolor that wastes almost nothing and finishes up to 5× faster. The $149 enclosure "lid tax" and half-finished software are real annoyances, but for multicolor-first buyers, nothing else is close.',
    bestFor: ['Multicolor-first buyers', 'Waste-conscious printing', 'Early adopters'],
    notFor: ['ABS/ASA without the $149 cover', 'Abrasive filaments (stock nozzles)', 'Buyers wanting mature software'],
    overview: [
      'The Snapmaker U1 started as the most-funded 3D printer in Kickstarter history ($20.61M), and the shipping product justifies the hype where it counts. The SnapSwap toolchanger parks four independent toolheads and swaps between them in about five seconds — multicolor prints that take other machines days finish in 24 hours, with so little waste that 50 hours of printing barely fills the waste container. Every purge-based multicolor system looks wasteful next to it.',
      'Quality matches the innovation: 29/30 on TechRadar\u2019s test suite with 0.056 mm average dimensional error, and 3DPrint.com\u2019s 300+ hour review found reliability rivaling the far pricier Prusa XL. Setup is fully automated, the Klipper-based UI is excellent, and native Orca Slicer support means no slicer lock-in.',
      'Now the lid tax: the U1 ships open-frame, and the Top Cover enclosure is a $149 extra that only adds passive heat retention — weak for ABS/ASA versus truly heated chambers. Stock nozzles are stainless steel only (hardened high-flow hotends cost extra), you are capped at four materials, and the software ecosystem — drybox integration, print marketplace, camera features — feels half-finished next to Bambu\u2019s. For multicolor-first buyers these are acceptable trade-offs; for everyone else, they are reasons to look at the P2S.',
    ],
    faqs: [
      {
        q: 'How is toolchanging different from AMS-style multicolor?',
        a: 'Purge systems (AMS, CFS, ACE Pro) use one nozzle and waste filament purging between colors. The U1\u2019s toolchanger swaps entire toolheads in ~5 seconds with virtually zero waste — faster and far less filament in the bin.',
      },
      {
        q: 'Do I need the Top Cover?',
        a: 'For PLA/PETG, no. For ABS/ASA, yes — but note it is passive insulation, not a heated chamber. Serious engineering-filament users should compare the Creality K2 Pro\u2019s 60 °C active chamber.',
      },
      {
        q: 'Is the U1 good for beginners?',
        a: 'Surprisingly yes — automated calibration and a polished UI make it approachable. But beginners who just want to print should know the ecosystem is less mature than Bambu\u2019s, with fewer one-click profiles.',
      },
    ],
    affiliate: { link: AMAZON('snapmaker u1 3d printer'), label: 'Check price' },
    lastVerified: V,
  },
];

export const printerBySlug = (slug: string): Printer =>
  PRINTERS.find((p) => p.slug === slug)!;

export const rankedPrinters = [...PRINTERS].sort((a, b) => b.metaScore - a.metaScore);

/** Head-to-head comparison pairs for programmatic vs pages. */
export interface VsPair {
  a: string;
  b: string;
  title: string;
  angle: string;
  verdict: string;
}

export const VS_PAIRS: VsPair[] = [
  {
    a: 'bambu-lab-p2s',
    b: 'creality-k2-pro',
    title: 'Bambu Lab P2S vs Creality K2 Pro',
    angle: 'The flagship showdown: the refined all-rounder against the bigger, heated-chamber challenger.',
    verdict:
      'Buy the P2S for the better overall experience — software, reliability, and multicolor maturity. Buy the K2 Pro if you need the 300³ mm volume or the actively heated chamber for engineering filaments. Most buyers should get the P2S.',
  },
  {
    a: 'bambu-lab-p2s',
    b: 'bambu-lab-a1-combo',
    title: 'Bambu Lab P2S vs A1 Combo',
    angle: 'Same family, different missions: enclosed flagship vs the beginner-friendly open frame.',
    verdict:
      'Get the A1 Combo if you print PLA/PETG and want the best value in 3D printing. Step up to the P2S if you need an enclosure for ABS/ASA/nylon or want the servo extruder\u2019s extra reliability. The $150 gap buys capability, not just prestige.',
  },
  {
    a: 'creality-k2-pro',
    b: 'elegoo-centauri-carbon-2',
    title: 'Creality K2 Pro vs Elegoo Centauri Carbon 2',
    angle: 'Heated-chamber flagship vs budget enclosed multicolor — how much does the chamber matter?',
    verdict:
      'The K2 Pro is the more capable machine — bigger, actively heated chamber, farm-grade build. The Carbon 2 Combo is less than half the price and covers 90% of hobbyist needs. Unless you print engineering filaments regularly, pocket the $430 difference.',
  },
  {
    a: 'anycubic-kobra-3',
    b: 'elegoo-centauri-carbon-2',
    title: 'Anycubic Kobra 3 vs Elegoo Centauri Carbon 2',
    angle: 'The two budget disruptors: open-frame tinkerer value vs enclosed out-of-box ease.',
    verdict:
      'The Carbon 2 is the safer buy for most people — enclosed, quieter, more reliable out of the box, with multicolor included. The Kobra 3 wins only on absolute lowest price and the ACE Pro\u2019s drying edge for humid climates.',
  },
  {
    a: 'prusa-mk4s',
    b: 'bambu-lab-p2s',
    title: 'Prusa MK4S vs Bambu Lab P2S',
    angle: 'Open vs closed: the philosophical divide in 3D printing, priced $190 apart.',
    verdict:
      'On specs-per-dollar the P2S wins walking away. But the MK4S is not a specs purchase — it is an ownership purchase: open-source, repairable, supported for a decade, no cloud. Choose with your values, not a spreadsheet.',
  },
  {
    a: 'snapmaker-u1',
    b: 'bambu-lab-p2s',
    title: 'Snapmaker U1 vs Bambu Lab P2S',
    angle: 'Toolchanging multicolor vs the refined all-rounder — is the new tech worth the premium?',
    verdict:
      'Multicolor-first buyers: the U1, and it is not close — 5× faster multicolor with near-zero waste. Everyone else: the P2S — more mature software, enclosed out of the box, and $300 cheaper. The U1 is the future; the P2S is the present.',
  },
  {
    a: 'bambu-lab-a1-combo',
    b: 'elegoo-centauri-carbon',
    title: 'Bambu Lab A1 Combo vs Elegoo Centauri Carbon',
    angle: 'The beginner duel: polished multicolor ease vs maximum printer per dollar.',
    verdict:
      'First printer, nervous buyer: A1 Combo — it removes every pain point and the multicolor just works. Value maximizer who prints single-color: Centauri Carbon on sale — enclosed and faster per dollar. The $100 gap is a support-and-polish premium.',
  },
  {
    a: 'snapmaker-u1',
    b: 'creality-k2-pro',
    title: 'Snapmaker U1 vs Creality K2 Pro',
    angle: 'Two different answers to "what comes after the purge tower" — toolchanging vs big heated volume.',
    verdict:
      'For multicolor, the U1\u2019s toolchanger obsoletes the K2 Pro\u2019s purge-hungry CFS. For large single-color engineering prints, the K2 Pro\u2019s 300³ volume and heated chamber win. They barely compete — buy for your actual use case.',
  },
];
