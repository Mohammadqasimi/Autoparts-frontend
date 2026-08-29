/* ============================================================
   AFJ AUTO PARTS — SITE DATA
   Edit these arrays to add/remove/change what shows on the page.
   No HTML editing required for content changes.
   ============================================================ */

// ---- Hero rotating slides (background + headline + lead) ----
// The hero cycles through these every HERO_INTERVAL ms with a crossfade.
const HERO_INTERVAL = 5000;
const HERO_SLIDES = [
  {
    img: "22793_2026_EV9_GT-2048x1152.webp",
    kicker: "Used · New · Aftermarket",
    titleTop: "AFJ",
    titleMain: "AUTO PARTS",
    titleEm: "& WRECKER.",
    lead: "Over 40,000 quality-checked used, new and aftermarket parts pulled from our own yard. Same-day pickup, nationwide shipping and a real warranty on every part.",
  },
  {
    img: "u9-2560-750x430.webp",
    kicker: "Engines · Transmissions",
    titleTop: "TESTED,",
    titleMain: "GRADED",
    titleEm: "& READY TO FIT.",
    lead: "Every engine and gearbox is compression-tested and condition-graded before it hits the shelf — fitment checked against your VIN and backed by a 6-month warranty.",
  },
  {
    img: "zeekr-7x-can-be-charged-in-13-minutes-it-is-now-on-sale-in-europe-7455.jpg.webp",
    kicker: "Cash For Cars",
    titleTop: "SELLING OR",
    titleMain: "SCRAPPING?",
    titleEm: "WE'LL BUY IT.",
    lead: "Running or not, damaged or written-off — get a firm quote in minutes and free pickup within 24 hours. We buy any make, any model, any condition.",
  },
];

// ---- Services / "Shop by category" swiper cards ----
const SERVICES = [
  {
    code: "SVC-01",
    img: "engine.png",
    photos: ["engine.png", "engine.png"], // TODO: add more real engine photos
    title: "Engines",
    desc: "Quality tested engines.",
    // description: "Every engine we sell is pulled from a low-mileage donor vehicle, compression-tested and condition-graded before it goes on the shelf. We check fitment against your VIN or plate before dispatch, and every engine carries a minimum 90-day warranty (extended to 6 months when installed by a licensed mechanic). Available for pickup from the yard or nationwide palletised freight.",
  },
  {
    code: "SVC-02",
    img: "tran.webp",
    photos: ["tran.webp", "tran.webp"], // TODO: add more real transmission photos
    title: "Transmission",
    desc: "Manual & Automatic.",
    // description: "Manual and automatic transmissions and transfer cases, tested for smooth shifting and fluid condition before sale. We cross-check interchange numbers so the unit matches your exact model and drivetrain, and back every transmission with a written warranty.",
  },
  {
    code: "SVC-03",
    img: "doors.jpg",
    photos: ["doors.jpg", "doors.jpg"], // TODO: add more real door photos
    title: "Doors",
    desc: "OEM body part.",
    // description: "Genuine OEM doors in a range of colours and trims, complete with glass, trim clips and mechanisms unless stated otherwise. We can supply a colour-matched panel or the closest available match, ready for straight bolt-on fitment.",
  },
  {
    code: "SVC-04",
    img: "headligh.avif",
    photos: ["headligh.avif", "headligh.avif"], // TODO: add more real headlight photos
    title: "Headlights",
    desc: "Original headlights.",
    // description: "Original manufacturer headlight and taillight assemblies, tested for clarity and working electronics before sale. We check bulb type, wiring loom and adaptive-lighting compatibility against your VIN so it plugs straight in.",
  },
  {
    code: "SVC-05",
    img: "pumpe.jfif",
    photos: ["pumpe.jfif", "pumpe.jfif"], // TODO: add more real bumper photos
    title: "Bumpers",
    desc: "Front & Rear bumpers.",
    // description: "Front and rear bumper bars and covers, inspected for cracks and mounting-point condition. Sold with or without fog light housings and sensor cut-outs as fitted to the donor vehicle — let us know your trim level for the closest match.",
  },
  {
    code: "SVC-06",
    img: "mirror1.webp",
    photos: ["mirror1.webp", "mirror1.webp"], // TODO: add more real mirror photos
    title: "Mirrors",
    desc: "Electric mirrors.",
    // description: "Power-fold and manual side mirrors, tested for electric adjustment, heating elements and indicator function where fitted. Available painted to match or in primer/unpainted trim.",
  },
  {
    code: "SVC-07",
    img: "suspension.jpg",
    photos: ["suspension.jpg", "suspension.jpg"], // TODO: add more real suspension photos
    title: "Suspension",
    desc: "High quality parts.",
    // description: "Struts, shocks, control arms and suspension components pulled from low-kilometre donors and inspected for wear, leaks and bent components. We match by chassis code so ride height and handling stay factory-correct.",
  },
  // {
  //   code: "SVC-08",
  //   img: "spectre.webp",
  //   title: "New Arrivals",
  //   desc: "Latest stock available.",
  // },
  // {
  //   code: "SVC-09",
  //   img: "radia.jfif",
  //   title: "Radiator",
  //   desc: "",
  // },
  // {
  //   code: "SVC-10",
  //   img: "alter.webp",
  //   title: "Alternator",
  //   desc: "",
  // },
  // {
  //   code: "SVC-11",
  //   img: "starter.jfif",
  //   title: "Starter",
  //   desc: "",
  // },
  {
    code: "SVC-12",
    img: "steering.jpg",
    photos: ["steering.jpg", "steering.jpg"], // TODO: add more real steering photos
    title: "Steering",
    desc: "",
    // description: "Steering racks, columns and power-steering pumps tested for leaks, play and correct assist operation before sale, matched to your exact model and steering configuration.",
  },
  {
    code: "SVC-13",
    img: "tyre1.jpeg",
    photos: ["tyre1.jpeg", "tyre2.jpeg","tyre3.jpeg", "tyre4.jpeg","tyre5.jpeg", "tyre6.jpeg","tyre7.jpeg", "tyre8.jpeg","tyre9.jpeg", "tyre10.jpeg"], // TODO: add more real wheel photos
    title: "Wheel & Tyre",
    desc: "",
    description: "Factory alloy and steel wheels with usable tyre tread, checked for cracks, bends and correct bolt pattern/offset for your vehicle. Sold individually or as a matching set.",
  },
  // { code: "SVC-14", img: "tyre.jfif", title: "Tyres", desc: "" },
  {
    code: "SVC-15",
    img: "battry.webp",
    photos: ["battry.webp", "battry.webp"], // TODO: add more real battery photos
    title: "Battery",
    desc: "",
    // description: "Load-tested batteries and 12V auxiliary units, checked for cold-cranking amps and charge retention before sale, with a short warranty against early failure.",
  },
  {
    code: "SVC-16",
    img: "abs.jfif",
    photos: ["abs.jfif", "abs.jfif"], // TODO: add more real ABS module photos
    title: "ABS Module",
    desc: "",
    // description: "ABS pumps and control modules tested on the bench where possible and checked against your VIN for correct part-number match, since ABS units are highly model-specific.",
  },
];

// ---- Live inventory cards ----
const INVENTORY = [
     {
    cat: "body",
    condition: "",
    img: "photos/new688.jpeg",
    id: 73,
    photos: ["photos/new688.jpeg","photos/new689.jpeg", "photos/new690.jpeg", "photos/new691.jpeg", "photos/new692.jpeg", "photos/new693.jpeg", "photos/new694.jpeg", "photos/new695.jpeg", "photos/new696.jpeg", "photos/new697.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW wrecking 2021 ford ranger ",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #NKA",
  },
     {
    cat: "body",
    condition: "",
    img: "photos/new680.jpeg",
    id: 72,
    photos: ["photos/new680.jpeg","photos/new681.jpeg", "photos/new682.jpeg", "photos/new683.jpeg", "photos/new684.jpeg", "photos/new685.jpeg", "photos/new686.jpeg", "photos/new687.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW wrecking 2013 HYUNDAI I 30 ",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #NKA",
  },
       {
    cat: "body",
    condition: "",
    img: "photos/new669.jpeg",
    id: 71,
    photos: ["photos/new669.jpeg","photos/new670.jpeg", "photos/new671.jpeg", "photos/new672.jpeg", "photos/new673.jpeg", "photos/new674.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW wrecking 2015 MAZDA 3 HATCH",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #41V",
  },
      {
    cat: "body",
    condition: "",
    img: "photos/new662.jpeg",
    id: 70,
    photos: ["photos/new662.jpeg","photos/new663.jpeg", "photos/new664.jpeg", "photos/new665.jpeg", "photos/new666.jpeg", "photos/new667.jpeg", "photos/new668.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW wrecking 2014 hyundai accent hatch",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #PGU",
  },
     {
    cat: "body",
    condition: "",
    img: "photos/new656.jpeg",
    id: 69,
    photos: ["photos/new656.jpeg","photos/new657.jpeg", "photos/new658.jpeg", "photos/new659.jpeg", "photos/new660.jpeg", "photos/new661.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW wrecking 2012 toyota prado 150 series",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #1F7",
  },
   {
    cat: "body",
    condition: "",
    img: "photos/new650.jpeg",
    id: 68,
    photos: ["photos/new650.jpeg","photos/new651.jpeg", "photos/new652.jpeg", "photos/new653.jpeg", "photos/new654.jpeg", "photos/new655.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW wrecking holden colorado 2014 ",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
  {
    cat: "body",
    condition: "",
    img: "photos/new675.jpeg",
    id: 67,
    photos: ["photos/new675.jpeg","photos/new676.jpeg", "photos/new677.jpeg", "photos/new678.jpeg", "photos/new679.jpeg", "photos/neww.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW wrecking 2007 volkswagen transporter ",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
    {
    cat: "body",
    condition: "",
    img: "photos/new641.jpeg",
    id: 66,
    photos: ["photos/new641.jpeg","photos/new642.jpeg", "photos/new643.jpeg", "photos/new644.jpeg", "photos/new645.jpeg","photos/new646.jpeg", "photos/new647.jpeg", "photos/new648.jpeg","photos/new649.jpeg",], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW wrecking 2022 isuzu mu-x ls-t 4x4 ",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
  {
    cat: "body",
    condition: "",
    img: "photos/new634.jpeg",
    id: 65,
    photos: ["photos/new634.jpeg","photos/new635.jpeg", "photos/new636.jpeg", "photos/new637.jpeg", "photos/new638.jpeg","photos/new639.jpeg", "photos/new640.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW wrecking 2014 ford ranger ",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #36C",
  },
    {
    cat: "body",
    condition: "",
    img: "photos/new625.jpeg",
    id: 64,
    photos: ["photos/new625.jpeg", "photos/new626.jpeg", "photos/new627.jpeg", "photos/new628.jpeg","photos/new629.jpeg", "photos/new630.jpeg", "photos/new631.jpeg", "photos/new632.jpeg", "photos/new633.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW wrecking 2019 HONDA HR-V",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
   {
    cat: "body",
    condition: "",
    img: "photos/new618.jpeg",
    id: 63,
    photos: ["photos/new618.jpeg", "photos/new619.jpeg", "photos/new620.jpeg", "photos/new621.jpeg","photos/new622.jpeg", "photos/new623.jpeg", "photos/new624.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "wrecking 2022 tesla model 3 long range duel motor",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
    {
    cat: "body",
    condition: "",
    img: "photos/new611.jpeg",
    id: 62,
    photos: ["photos/new611.jpeg", "photos/new612.jpeg", "photos/new613.jpeg", "photos/new614.jpeg","photos/new615.jpeg", "photos/new617.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2016 mitsubishi asx",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #W13",
  },
    {
    cat: "body",
    condition: "",
    img: "photos/new608.jpeg",
    id: 61,
    photos: ["photos/new608.jpeg", "photos/new605.jpeg", "photos/new606.jpeg", "photos/new607.jpeg","photos/new608.jpeg", "photos/new609.jpeg", "photos/new610.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2013 toyota corolla hatch",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #070",
  },
   {
    cat: "body",
    condition: "",
    img: "photos/new601.jpeg",
    id: 60,
    photos: ["photos/new601.jpeg", "photos/new597.jpeg", "photos/new598.jpeg", "photos/new599.jpeg","photos/new600.jpeg", "photos/new602.jpeg", "photos/new603.jpeg", "photos/new604.jpg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2016 holden ute ",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
  {
    cat: "body",
    condition: "",
    img: "photos/new590.jpeg",
    id: 59,
    photos: ["photos/new590.jpeg", "photos/new591.jpeg", "photos/new592.jpeg","photos/new594.jpeg", "photos/new595.jpeg", "photos/new596.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2013 kia rio ",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
  {
    cat: "body",
    condition: "",
    img: "photos/new563.jpeg",
    id: 58,
    photos: ["photos/new563.jpeg", "photos/new564.jpeg", "photos/new565.jpeg", "photos/new566.jpeg","photos/new567.jpeg", "photos/new568.jpeg", "photos/new569.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2006 MITsubishi pajero",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #DA",
  },
   {
    cat: "body",
    condition: "",
    img: "new558.jpeg",
    id: 54,
    photos: ["new558.jpeg", "new559.jpeg", "new560.jpeg", "new561.jpeg","new562.jpeg", "new563.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2017 mitsubishi asx",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #W37",
  },
   {
    cat: "body",
    condition: "",
    img: "new552.jpeg",
    id: 53,
    photos: ["new552.jpeg", "new553.jpeg", "new554.jpeg", "new555.jpeg","new556.jpeg", "new557.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2017 nissan navara d23",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #K21",
  },
   {
    cat: "body",
    condition: "",
    img: "new571.jpeg",
    id: 56,
    photos: ["new571.jpeg", "new572.jpeg", "new573.jpeg", "new574.jpeg","new575.jpeg", "new576.jpeg", "new577.jpeg", "new578.jpeg", "photos/new560.jpeg", "photos/new561.jpeg", "photos/new562.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2016 toyota hiace diesel",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #058",
  },
   {
    cat: "body",
    condition: "",
    img: "new544.jpeg",
    id: 52,
    photos: ["new544.jpeg", "new545.jpeg", "new546.jpeg", "new547.jpeg","new548.jpeg", "new549.jpeg","new550.jpeg","new551.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2022 kia rio",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
  {
    cat: "body",
    condition: "",
    img: "new564.jpeg",
    id: 55,
    photos: ["new564.jpeg", "new565.jpeg", "new566.jpeg", "new567.jpeg","new568.jpeg", "new569.jpeg", "new570.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2015 honda hr-v",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
   {
    cat: "body",
    condition: "",
    img: "new537.jpeg",
    id: 51,
    photos: ["new537.jpeg", "new538.jpeg", "new539.jpeg", "new540.jpeg","new541.jpeg", "new542.jpeg","new543.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2017 jeep grand cherokee",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
   {
    cat: "body",
    condition: "",
    img: "new530.jpeg",
    id: 50,
    photos: ["new530.jpeg", "new531.jpeg", "new532.jpeg", "new533.jpeg","new534.jpeg", "new535.jpeg","new536.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2018 mitsubishi eclipse",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
   {
    cat: "body",
    condition: "",
    img: "new524.jpeg",
    id: 49,
    photos: ["new524.jpeg", "new525.jpeg", "new526.jpeg", "new527.jpeg","new528.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2011 toyota rav4",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
  
   {
    cat: "body",
    condition: "",
    img: "new500.jpeg",
    id: 47,
    photos: ["new500.jpeg", "new501.jpeg", "new502.jpeg", "new503.jpeg","new504.jpeg", "new505.jpeg", "new506.jpeg", "new507.jpeg", "new508.jpeg","new509.jpeg", "new510.jpeg", "new511.jpeg",], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2016 volkswagen amarok",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
  {
    cat: "body",
    condition: "",
    img: "new513.jpeg",
    id: 48,
    photos: ["new513.jpeg", "new512.jpeg", "new514.jpeg", "new515.jpeg","new516.jpeg", "new517.jpeg", "new518.jpeg", "new519.jpeg", "new520.jpeg","new521.jpeg", "new522.jpeg", "new523.jpeg",], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2015 ford fiesta 3",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #JA8",
  },
  {
    cat: "engine",
    condition: "",
    img: "new490.jpeg",
    id: 46,
    photos: ["new490.jpeg", "new491.jpeg", "new492.jpeg", "new493.jpeg","new494.jpeg", "new495.jpeg", "new496.jpeg", "new497.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2016 toyota fortuner auto",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },


  
     {
    cat: "engine",
    condition: "",
    img: "new470.jpeg",
    id: 44,
    photos: ["new470.jpeg", "new471.jpeg", "new472.jpeg", "new473.jpeg","new474.jpeg", "new475.jpeg", "new476.jpeg", "new477.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2015 jeep cherokee  ",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
   {
    cat: "body",
    condition: "",
    img:"photos/new580.jpeg",
    id: 57,
    photos: ["photos/new580.jpeg", "photos/new581.jpeg", "photos/new582.jpeg", "photos/new583.jpeg","photos/new584.jpeg", "photos/new585.jpeg", "photos/new586.jpeg", "photos/new587.jpeg","photos/new588.jpeg", "photos/new589.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "WRECKing 1995 suzuki jimmy",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
      {
    cat: "engine",
    condition: "",
    img: "new478.jpeg",
    id: 45,
    photos: ["new478.jpeg", "new479.jpeg", "new480.jpeg", "new481.jpeg","new482.jpeg", "new483.jpeg", "new484.jpeg", "new485.jpeg", "new486.jpeg", "new487.jpeg", "new488.jpeg", "b.jpeg", "c.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2017 mercedes cla 250 ",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
     {
    cat: "engine",
    condition: "",
    img: "new460.jpeg",
    id: 43,
    photos: ["new460.jpeg", "new461.jpeg", "new462.jpeg", "new463.jpeg","new464.jpeg", "new465.jpeg", "new466.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2020 MG ZST  ",
    fits: "Most Part Still Available we ship parts all over Australia",
    // description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
    {
    cat: "engine",
    condition: "",
    img: "new452.jpeg",
    id: 42,
    photos: ["new452.jpeg", "new453.jpeg", "new454.jpeg", "new455.jpeg","new456.jpeg", "new457.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2012 honda accord euro  ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2012 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
  {
    cat: "engine",
    condition: "",
    img: "new4201.jpeg",
    id: 39,
    photos: ["new4201.jpeg", "new420.jpeg", "new421.jpeg", "new422.jpeg","new423.jpeg", "new425.jpeg", "new426.jpeg", "new427.jpeg","new428.jpeg","new429.jpeg","new430.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2019 Mg ZS  ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2019 Mg ZS for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
   {
    cat: "body",
    condition: "",
    img: "new441.jpeg",
    id: 41,
    photos: ["new441.jpeg", "new442.jpeg", "new443.jpeg", "new444.jpeg","new445.jpeg", "new446.jpeg", "new447.jpeg", "new448.jpeg","new449.jpeg","new450.jpeg","new451.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2014 Hyundai i 30  ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2013 Hyundai i 30 for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #YAC",
  },

   {
    cat: "body",
    condition: "",
    img: "new431.jpeg",
    id: 40,
    photos: ["new431.jpeg", "new432.jpeg", "new433.jpeg", "new434.jpeg","new435.jpeg", "new436.jpeg", "new437.jpeg", "new438.jpeg","new439.jpeg","new440.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2025 MG MG3 hybrid  ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2025 MG MG3 hybrid for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #5LRL",
  },
 


 {
    cat: "engine",
    condition: "",
    img: "new400.jpeg",
    id: 27,
    photos: ["new400.jpeg", "new401.jpeg", "new402.jpeg", "new403.jpeg","new404.jpeg", "new405.jpeg", "new406.jpeg", "new407.jpeg","new408.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2016 mazda cx-5  ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2016 mazda cx-5 for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #41V",
  },

  {
    cat: "engine",
    condition: "",
    img: "new410.jpeg",
    id: 28,
    photos: ["new410.jpeg", "new411.jpeg", "new412.jpeg", "new413.jpeg","new414.jpeg", "new415.jpeg", "new416.jpeg", "new417.jpeg","new418.jpeg","new419.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2021 haval h3 1.5 l turbo ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2021 haval h3 1.5 l turbo for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },

    {
    cat: "engine",
    condition: "",
    img: "new190.jpeg",
    id: 20,
    photos: ["new190.jpeg", "new191.jpeg", "new192.jpeg", "new193.jpeg","new194.jpeg", "new195.jpeg", "new196.jpeg", "new197.jpeg","new198.jpeg","new199.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2023 mg hs ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2023 mg hs for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "code #N/A",
  },
 
    {
    cat: "engine",
    condition: "",
    img: "new200.jpeg",
    id: 21,
    photos: ["new200.jpeg", "new201.jpeg", "new202.jpeg", "new203.jpeg","new204.jpeg", "new205.jpeg", "new206.jpeg", "new207.jpeg","new208.jpeg",], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2008 toyota corolla zre152r ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2008 toyota corolla zre152r for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "paint code #040",
  },

   {
    cat: "body",
    condition: "",
    img: "new210.jpeg",
    id: 22,
    photos: ["new210.jpeg", "new211.jpeg", "new212.jpeg", "new213.jpeg","new214.jpeg", "new215.jpeg", "new216.jpeg", "new217.jpeg","new218.jpeg","new219.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2013 KIA rio ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2013 KIA rio for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "paint code #N/A",
  },

 {
    cat: "body",
    condition: "",
    img: "new230.jpeg",
    id: 24,
    photos: ["new230.jpeg", "new231.jpeg", "new232.jpeg", "new233.jpeg","new234.jpeg", "new235.jpeg", "new236.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2015 subaru xv gp7 awd auto ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2015 subaru xv gp7 awd auto for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "paint code #J9U",
  },

 


    {
    cat: "engine",
    condition: "",
    img: "new1 (2).jpeg",
    id: 1,
    photos: ["new1.jpeg", "new2.jpeg", "new3.jpeg", "new4.jpeg","new5.jpeg", "new6.jpeg", "new7.jpeg", "new8.jpeg","new9.jpeg","new10.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2015 MAZDA CX-5 ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2015 MAZDA CX-5 for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "code #34K",
  },
    {
    cat: "body",
    condition: "",
    img: "new240.jpeg",
    id: 25,
    photos: ["new240.jpeg", "new241.jpeg", "new242.jpeg", "new243.jpeg","new244.jpeg", "new245.jpeg", "new246.jpeg", "new247.jpeg","new248.jpeg","new249.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "now wrecking 2018 hyundai accent ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2018 hyundai accent for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: " Paint code #P6W",
  },

   {
    cat: "body",
    condition: "",
    img: "new300.jpeg",
    id: 31,
    photos: ["new300.jpeg", "new301.jpeg", "new302.jpeg", "new303.jpeg","new304.jpeg", "new305.jpeg", "new306.jpeg", "new307.jpeg","new308.jpeg","new309.jpeg","new310.jpeg","new311.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "now wrecking 2014 nissan qashqi ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2014 nissan qashqi for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: " Paint code #41V",
  },



     {
    cat: "engine",
    condition: "",
    img: "new260.jpeg",
    id: 26,
    photos: ["new260.jpeg", "new261.jpeg", "new262.jpeg", "new263.jpeg","new264.jpeg", "new265.jpeg", "new266.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2010 honda accord euro",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2010 honda accord euro for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },

    {
    cat: "engine",
    condition: "",
    img: "new340.jpeg",
    id: 32,
    photos: ["new340.jpeg", "new341.jpeg", "new342.jpeg", "new343.jpeg","new344.jpeg", "new345.jpeg", "new346.jpeg","new347.jpeg", "new348.jpeg", "new349.jpeg", "new350.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2013 TOYOTA CAMRY ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2013 TOYOTA CAMRY for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #061",
  },

     {
    cat: "engine",
    condition: "",
    img: "new270.jpeg",
    id: 29,
    photos: ["new270.jpeg", "new271.jpeg", "new272.jpeg", "new273.jpeg","new274.jpeg", "new275.jpeg", "new276.jpeg","new277.jpeg", "new278.jpeg", "new279.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2013 hyundai i  20 auto",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2013 hyundai i  20 auto for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #WAU",
  },



  {
    cat: "engine",
    condition: "",
    img: "new11.jpeg",
    id: 2,
    photos: ["new12.jpeg", "new13.jpeg", "new14.jpeg", "new15.jpeg","new16.jpeg", "new17.jpeg", "new18.jpeg", "new19.jpeg","new20.jpeg","new.jpeg","new21.jpeg","new22.jpeg","new23.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2011 volkswagen amarok 4x4",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2011 volkswagen amarok 4x4 for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "code #N/A",
  },
    {
    cat: "engine",
    condition: "",
    img: "new351.jpeg",
    id: 33,
    photos: ["new351.jpeg", "new352.jpeg", "new353.jpeg", "new354.jpeg","new355.jpeg", "new356.jpeg", "new357.jpeg","new358.jpeg", "new359.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2020 VOLKSWAGEN T-CROSS ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2020 VOLKSWAGEN T-CROSS for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },

   {
    cat: "body",
    condition: "",
    img: "new220.jpeg",
    id: 23,
    photos: ["new220.jpeg", "new221.jpeg", "new222.jpeg", "new223.jpeg","new224.jpeg", "new225.jpeg", "new226.jpeg", "new227.jpeg","new228.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKing 2014 hyundai i   30 ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2014 hyundai i   30 for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "paint code #YAC",
  },

     {
    cat: "engine",
    condition: "",
    img: "new360.jpeg",
    id: 34,
    photos: ["new360.jpeg", "new361.jpeg", "new362.jpeg", "new363.jpeg","new364.jpeg", "new365.jpeg", "new366.jpeg","new367.jpeg", "new368.jpeg","new369.jpeg", "new370.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECking 2012 toyota corolla sedan auto ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2012 toyota corolla sedan auto for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #040",
  },

     {
    cat: "engine",
    condition: "",
    img: "new371.jpeg",
    id: 35,
    photos: ["new371.jpeg", "new372.jpeg", "new373.jpeg", "new374.jpeg","new375.jpeg", "new376.jpeg", "new378.jpeg","new379.jpeg", "new380.jpeg","new381.jpeg", "new382.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECking 2015 toyota rav4 auto  ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2015 toyota rav4 auto for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #1f7",
  },

  {
    cat: "engine",
    condition: "",
    img: "new383.jpeg",
    id: 36,
    photos: ["new383.jpeg", "new384.jpeg", "new385.jpeg", "new386.jpeg","new387.jpeg", "new388.jpeg", "new389.jpeg","new390.jpeg", "new391.jpeg","new392.jpeg",], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECking toyota corolla hatch 2015  ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the toyota corolla hatch 2015 for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #3R3",
  },

   {
    cat: "engine",
    condition: "",
    img: "new290.jpeg",
    id: 37,
    photos: ["new290.jpeg", "new291.jpeg", "new292.jpeg", "new293.jpeg","new294.jpeg", "new295.jpeg", "new296.jpeg","new297.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECking 2023 MG MG3 AUTO  ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2023 MG MG3 AUTO for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #N/A",
  },
    {
    cat: "body",
    condition: "",
    img: "new323.jpeg",
    id: 38,
    photos: ["new323.jpeg", "new324.jpeg", "new325.jpeg", "new326.jpeg","new327.jpeg", "new328.jpeg", "new329.jpeg","new330.jpeg","new331.jpeg","new332.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECking 2018 SUZUKI IGNIS  ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2018 SUZUKI IGNIS for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Paint code #ZWD",
  },


   {
    cat: "engine",
    condition: "",
    img: "new250.jpeg",
    id: 30,
    photos: ["new250.jpeg", "new251.jpeg", "new252.jpeg", "new253.jpeg","new254.jpeg", "new255.jpeg", "new256.jpeg", "new257.jpeg","new258.jpeg", "new259.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2015 suzuki apv auto ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2015 suzuki apv auto for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: " Paint code #ZMT",
  },
  {
    cat: "engine",
    condition: "",
    img: "new24.jpeg",
    id: 3,
    photos: ["new24.jpeg", "new25.jpeg", "new26.jpeg", "new27.jpeg","new28.jpeg", "new29.jpeg", "new30.jpeg", "new31.jpeg","new32.jpeg",], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2014 kia cerato auto ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2014 kia cerato auto for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "code #4SS",
  },
    {
    cat: "body",
    condition: "",
    img: "new33.jpeg",
    id: 4,
    photos: ["new34.jpeg", "new35.jpeg", "new36.jpeg", "new37.jpeg","new38.jpeg", "new39.jpeg", "new40.jpeg", "new41.jpeg","new42.jpeg","new43.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2021 SUZUKI JIMNY ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2021 SUZUKI JIMNY for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "code #26U",
  },
  {
    cat: "body",
    condition: "",
    img: "new44.jpeg",
    id: 5,
    photos: ["new45.jpeg", "new46.jpeg", "new47.jpeg", "new48.jpeg","new49.jpeg", "new50.jpeg", "new51.jpeg", "new52.jpeg",], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2011 TOYOTA PRADO 150 Series 4X4",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2011 TOYOTA PRADO 150 Series 4X4 for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "code #040",
  },
  {
    cat: "electrical",
    condition: "",
    img: "new60.jpeg",
    id: 6,
    photos: ["new60.jpeg", "new61.jpeg", "new62.jpeg", "new63.jpeg", "new64.jpeg","new65.jpeg",], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "WRECKING 2015 HYUNDAI I    30",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2015 HYUNDAI I    30 for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "engine",
    condition: "",
    img: "new70.jpeg",
    id: 7,
    photos: ["new70.jpeg", "new71.jpeg", "new72.jpeg", "new73.jpeg", "new74.jpeg", "new75.jpeg", "new76.jpeg","new77.jpeg","new78.jpeg",], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2012 hyundia accent",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2012 hyundia accent for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Code #ve9",
  },
  {
    cat: "interior",
    condition: "",
    img: "new90.jpeg",
    id: 8,
    photos: ["new90.jpeg", "new91.jpeg", "new92.jpeg", "new93.jpeg", "new94.jpeg", "new95.jpeg", "new96.jpeg","new97.jpeg","new98.jpeg","new99.jpeg","new100.jpeg","new101.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "wrecking 2018 honda fk7 civic hatchback auto",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2018 honda fk7 civic hatchback auto for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "body",
    condition: "",
    img: "new00.jpeg",
    id: 9,
    photos: ["new00.jpeg", "new000.jpeg", "new102.jpeg", "new103.jpeg", "new104.jpeg", "new105.jpeg", "new106.jpeg","new107.jpeg","new108.jpeg","new109.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "wrecking 2019 audi a3 tfsi auto",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2019 audi a3 tfsi auto for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Code #DCDC",
  },
  {
    cat: "electrical",
    condition: "",
    img: "new110.jpeg",
    id: 10,
    photos: ["new110.jpeg", "new111.jpeg", "new112.jpeg", "new113.jpeg", "new114.jpeg", "new115.jpeg", "new116.jpeg","new117.jpeg","new118.jpeg","new119.jpeg","new120.jpeg","new121.jpeg","new122.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2012 rnge rover evoque",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2012 rnge rover evoque for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "interior",
    condition: "",
    img: "new130.jpeg",
    id: 11,
    photos: ["new130.jpeg", "new131.jpeg", "new132.jpeg", "new133.jpeg", "new134.jpeg", "new135.jpeg", "new136.jpeg","new137.jpeg","new138.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2011 toyota corolla hatchback auto",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2011 toyota corolla hatchback auto for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "engine",
    condition: "",
    img: "new140.jpeg",
    id: 12,
    photos: ["new140.jpeg", "new141.jpeg", "new142.jpeg", "new143.jpeg", "new144.jpeg", "new145.jpeg", "new146.jpeg","new147.jpeg","new148.jpeg","new149.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "NOW WRECKING 2010 TOYOTA RAV4 AUTO",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2010 TOYOTA RAV4 AUTO for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Code #070",
  },
  {
    cat: "electrical",
    condition: "",
    img: "new150.jpeg",
    id: 13,
    photos: ["new150.jpeg", "new151.jpeg", "new152.jpeg", "new153.jpeg", "new154.jpeg", "new155.jpeg", "new156.jpeg","new157.jpeg","new158.jpeg","new159.jpeg","new160.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2014 nissan qashqi ",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2014 nissan qashqi for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Code #Z12 G",
  },
  {
    cat: "body",
    condition: "",
    img: "new161.jpeg",
    id: 14,
    photos: ["new161.jpeg", "new162.jpeg", "new163.jpeg", "new164.jpeg", "new165.jpeg", "new166.jpeg", "new167.jpeg","new168.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "wrecking 2007 mitsubishi pajero",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2007 mitsubishi pajero for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "interior",
    condition: "",
    img: "new170.jpeg",
    id: 15,
    photos: ["new170.jpeg", "new171.jpeg", "new172.jpeg", "new173.jpeg", "new174.jpeg", "new175.jpeg", "new176.jpeg","new177.jpeg","new178.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "Now wrecking 2020 haval h2",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2020 haval h2 for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Code #N/A",
  },
  {
    cat: "engine",
    condition: "",
    img: "new180.jpeg",
    id: 16,
    photos: ["new180.jpeg", "new181.jpeg", "new182.jpeg", "new183.jpeg", "new184.jpeg", "new185.jpeg"], // TODO: replace with real front/rear/side/interior photos
    catLabel: "ALL BODY PARTS",
    title: "wrecking 2004 toyota estima",
    fits: "Most Part Still Available we ship parts all over Australia",
    description: "Wrecking the 2004 toyota estima for parts — most panels, mechanical and interior components are still available. Contact us with your VIN or plate to confirm exact fitment, condition grade and price before you buy. Pickup available from the yard or nationwide shipping on request.",
    price: "",
    stock: "Code #N/A",
  },
 
  //  {
  //   cat: "electrical",
  //   condition: "",
  //   img: "14.png",
  //   catLabel: "Electrical · Cluster",
  //   title: "Nissan Altima Instrument Cluster",
  //   fits: "Fits: Altima 2013–2018 · Mileage reset avail.",
  //   price: "",
  //   stock: "Stock #4489-IC",
  // },
  
];

// ---- Brands strip ----
const BRANDS = [
  { name: "TOYOTA", img: "toyta_logo_PNG1665 (1).webp" },
  { name: "HONDA", img: "honda-logo-png-19.webp" },
  { name: "SUZUKI", img: "suzuki_PNG12291.webp" },
  { name: "HYUNDAI", img: "hydo_logo_PNG1645.webp" },
  { name: "KIA", img: "kia.png" },
  { name: "MERCEDES", img: "Mercedes-Benz-Logo-768x478.webp" },
  { name: "BMW", img: "BMW-Logo-1963-1997.webp" },
  { name: "LEXUS", img: "lexux.png" },
  { name: "HAVAL", img: "Haval-Logo-500x281.webp" },
  { name: "BYD", img: "BYD-Logo-500x281.webp" },
  { name: "MAZDA", img: "mazda_PNG86.webp" },
];

// ---- Testimonials ----
const TESTIMONIALS = [
  {
    stars: 5,
    text: "Called about a transmission for my Silverado, had it delivered two days later and it's been running perfectly since. Fair price, no upselling.",
    name: "D. Marsh",
    role: "Verified Buyer",
  },
  {
    stars: 5,
    text: "They picked up my written-off Civic same afternoon and paid on the spot. Easiest part of the whole insurance process, honestly.",
    name: "R. Ibrahim",
    role: "Verified Seller",
  },
  {
    stars: 4,
    text: "Needed a matching door panel and they tracked one down through their network in a day. Colour match was close enough not to repaint.",
    name: "S. Okafor",
    role: "Verified Buyer",
  },
];

// ---- FAQ ----
const FAQS = [
  {
    q: "Do used parts come with a warranty?",
    a: "Yes. Every part sold, used or new, carries a minimum 90-day warranty. Engines and transmissions carry an extended 6-month warranty when installed by a licensed mechanic.",
  },
  {
    q: "How do I know if a part will fit my car?",
    a: "Give us your VIN or your make, model and year, and we'll cross-check fitment and interchange numbers before you buy, over the phone or online.",
  },
  {
    q: "Can you pick up a car that doesn't run?",
    a: "Yes, non-running, damaged and written-off vehicles are exactly what we wreck. We arrange free towing and pay on collection.",
  },
  {
    q: "Do you ship parts outside the local area?",
    a: "We ship nationwide. Small parts go by tracked courier; engines, transmissions and panels go by palletised freight with full tracking.",
  },
  {
    q: "What condition grades do your parts get?",
    a: "Grade A means light wear with no mechanical or cosmetic issues. Grade B means fully functional with visible wear or minor cosmetic marks. Grading is noted on every listing.",
  },
];

// ---- Business / contact info (used for the map + WhatsApp + footer) ----
const BUSINESS = {
  name: "AFJ Auto Parts & Wrecker",
  phoneDisplay: "0435 796 957",
  phoneTel: "+61435796957", // used for tel: links
  whatsappNumber: "61435796957", // no leading 0, no plus, used for wa.me links
  whatsappDefaultMessage: "Hi AFJ Auto Parts, I'd like to ask about a part.",
  email: "afj.autoparts@gmail.com",
  website: "afjautoparts.com.au",
  address: "6 Neon Street, Sumner, QLD 4074, Australia",
  mapQuery: "6+Neon+Street+Sumner+QLD+4074+Australia",
  areasServedDisplay:
    "Brisbane, QLD, Australia · Sunshine Coast, QLD, Australia · Gold Coast, QLD, Australia",
  areaServed: ["Brisbane", "Sunshine Coast", "Gold Coast"],
  hours: [
    { day: "Monday – Friday", time: "7:00 am – 4:30 pm" },
    { day: "Saturday", time: "7:00 am – 1:00 pm" },
    { day: "Sunday", time: "Closed" },
  ],
};
