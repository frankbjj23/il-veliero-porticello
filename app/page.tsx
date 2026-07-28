const menu = [
  {
    id: "panini",
    title: "Panini",
    note: "Preparati al momento",
    items: [
      ["Cartoccio", "Prosciutto cotto, mozzarella", "€4"],
      ["Hot Dog", "Wurstel", "€3"],
      ["Topolino", "Prosciutto cotto, wurstel, mozzarella", "€5"],
      ["Caprese", "Pomodoro, mozzarella, basilico", "€4"],
      ["Veliero", "Tonno, crudo, mozzarella, pomodoro", "€6"],
      ["Primavera", "Mozzarella, lattuga, tonno, pomodoro", "€6"],
      ["Salmone", "Salmone, limone, rucola", "€7"],
      ["Gourmet", "Lattuga amalgamata con gamberetti e surimi", "€7"],
      ["Porchetta", "Porchetta, cipolla", "€6"],
      ["Salsiccia", "Salsiccia, cipolla, lattuga", "€6"],
      ["Pistacchioso", "Mortadella, Philadelphia, granella di pistacchio", "€7"],
      ["Trentino", "Speck, scamorza, ciliegino", "€6"],
      ["Hamburger", "Hamburger, bacon, pomodoro, lattuga, cheddar", "€8"],
      ["Hamburger XXXL", "Doppio hamburger, doppio cheddar, lattuga, cipolla caramellata", "€10"],
    ],
  },
  {
    id: "sfizi",
    title: "Stuzzichini",
    note: "Da condividere",
    items: [
      ["Bruschetta salmone", "Philadelphia, rucola, salmone", "€7"],
      ["Bruschetta Imperiale", "Paté di pesce spada, salmone, tonno, uova di tonno, alici marinate", "€8"],
      ["Bruschetta al pomodoro", "", "€4"],
      ["Bruschetta al paté", "", "€4"],
      ["Bruschetta bufala, funghi, crudo", "", "€6"],
    ],
  },
  {
    id: "insalate",
    title: "Insalatone",
    note: "Fresche e complete",
    items: [
      ["Veliero con tonno", "", "€10"],
      ["Marinara con salmone", "", "€10"],
      ["Campagnola con verdure", "", "€10"],
      ["Insalata con pollo", "", "€10"],
    ],
  },
  {
    id: "cocktail",
    title: "Cocktail",
    note: "Classici vista mare",
    items: [
      ["Americano", "Bitter, vermouth rosso, soda", "€7"],
      ["Negroni", "Bitter Campari, vermouth rosso, gin", "€7"],
      ["Caipiroska", "Vodka liscia, soda, limone, zucchero di canna", "€7"],
      ["Cuba Libre", "Rum bianco, succo di limone, cola", "€7"],
      ["Tequila Sunrise", "Tequila, succo d’ananas, granita", "€7"],
      ["Cosmopolitan", "Vodka, Cointreau, mirtillo, limone", "€7"],
      ["Gin Fizz", "Gin, limone, sciroppo di zucchero, soda", "€7"],
      ["Margarita", "Tequila, Cointreau, limone", "€7"],
      ["Mimosa", "Spumante, succo d’arancia", "€7"],
      ["Mojito", "Rum bianco, menta, zucchero di canna, soda", "€7"],
      ["Nick", "Vodka, vodka pesca, triple sec, lime, prosecco", "€7"],
    ],
  },
  {
    id: "bar",
    title: "Caffetteria & bibite",
    note: "Dalla colazione all’aperitivo",
    items: [
      ["Caffè", "", "€1,50"],
      ["Caffè decaffeinato", "", "€2"],
      ["Caffè al ginseng", "", "€2"],
      ["Caffè corretto", "", "€2"],
      ["Cappuccino", "", "€2,50"],
      ["Cioccolata calda", "", "€4"],
      ["Granita limone", "", "€3"],
      ["Acqua naturale / frizzante", "", "€1"],
      ["San Bitter / Crodino", "", "€3"],
      ["Succo di frutta", "Vari gusti", "€3"],
      ["Bibite in lattina", "Coca-Cola, aranciata, Sprite, chinotto, tè", "€2"],
    ],
  },
  {
    id: "birre",
    title: "Birre",
    note: "Bottiglia",
    items: [
      ["Ichnusa 33 cl", "", "€4"],
      ["Messina 33 cl", "", "€4"],
      ["Corona", "", "€4"],
      ["Heineken 33 cl", "", "€3"],
      ["Beck’s 33 cl", "", "€3"],
      ["Tennent’s 33 cl", "", "€4"],
      ["Ceres 33 cl", "", "€4"],
    ],
  },
];

const siteUrl = "https://frankbjj23.github.io/il-veliero-porticello/";
const googleReviewUrl =
  "https://search.google.com/local/writereview?placeid=ChIJJ6wKfAjjGRMReaFJXp_FxX8";
const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Il%20Veliero%20Porticello&query_place_id=ChIJJ6wKfAjjGRMReaFJXp_FxX8";

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Il Veliero, torna all'inizio">
          <span className="wheel" aria-hidden="true">✺</span>
          <span>IL VELIERO<small>BAR · PANINERIA · DRINKERIA</small></span>
        </a>
        <nav aria-label="Navigazione principale">
          <a href="#menu">Menu</a>
          <a href="#terrazza">La terrazza</a>
          <a href="#recensione">Recensione</a>
          <a href="#contatti">Contatti</a>
        </nav>
        <a className="call" href="tel:+393276204411">Chiama</a>
      </header>

      <section className="hero" id="home">
        <img src="/terrace-hero.jpg" alt="La terrazza de Il Veliero con vista sul mare" />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">Porticello · Santa Flavia</p>
          <h1>Il mare,<br /><em>al tuo tavolo.</em></h1>
          <p className="intro">Colazioni, panini, aperitivi e cocktail sulla nostra terrazza affacciata sul lungomare.</p>
          <div className="heroActions">
            <a className="button primary" href="#menu">Scopri il menu <span>↓</span></a>
            <a className="button ghost" href="tel:+393276204411">Prenota · 327 620 4411</a>
          </div>
        </div>
        <div className="heroTag"><b>VISTA MARE</b><span>Tutti i giorni</span></div>
      </section>

      <section className="promise" aria-label="I nostri punti di forza">
        <p><span>01</span> Panini preparati al momento</p>
        <p><span>02</span> Cocktail & aperitivi</p>
        <p><span>03</span> Terrazza sul mare</p>
      </section>

      <section className="menuSection" id="menu">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow blue">Da bere & da mangiare</p>
            <h2>Il nostro menu</h2>
          </div>
          <p>Una selezione semplice e generosa, perfetta dalla pausa pranzo al tramonto.</p>
        </div>

        <nav className="categoryNav" aria-label="Categorie del menu">
          {menu.map((category) => <a key={category.id} href={`#${category.id}`}>{category.title}</a>)}
        </nav>

        <div className="menuGrid">
          {menu.map((category) => (
            <article className="menuCard" id={category.id} key={category.id}>
              <div className="menuCardHead">
                <div>
                  <p>{category.note}</p>
                  <h3>{category.title}</h3>
                </div>
                <span aria-hidden="true">⚓</span>
              </div>
              <div className="menuItems">
                {category.items.map(([name, description, price]) => (
                  <div className="menuItem" key={name}>
                    <div><h4>{name}</h4>{description && <p>{description}</p>}</div>
                    <strong>{price}</strong>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="menuNote">I prezzi e la disponibilità possono variare. Per allergeni o esigenze alimentari, chiedi al nostro staff.</p>
      </section>

      <section className="terrace" id="terrazza">
        <div className="terraceCopy">
          <p className="eyebrow gold">Una pausa tutta siciliana</p>
          <h2>Il posto giusto<br />per <em>rallentare.</em></h2>
          <p>Una terrazza luminosa davanti al mare di Porticello. Fermati per un caffè, resta per il tramonto.</p>
          <a className="textLink" href="#contatti">Vieni a trovarci <span>→</span></a>
        </div>
        <div className="photoGrid">
          <img className="photoTall" src="/spritz-sea.jpg" alt="Uno spritz sulla terrazza con il mare sullo sfondo" />
          <img src="/terrace-1.jpg" alt="Tavoli all'aperto de Il Veliero" />
          <img src="/terrace-2.jpg" alt="Vista dalla terrazza verso il lungomare" />
        </div>
      </section>

      <section className="reviewShare" id="recensione">
        <article className="reviewCard">
          <p className="eyebrow blue">La tua opinione conta</p>
          <div className="stars" aria-label="Cinque stelle">
            <span aria-hidden="true">★ ★ ★ ★ ★</span>
          </div>
          <h2>Ti sei trovato bene?</h2>
          <p>
            Racconta la tua esperienza al Veliero. Una recensione su Google
            aiuta altre persone a scoprirci.
          </p>
          <a
            className="button reviewButton"
            href={googleReviewUrl}
            target="_blank"
            rel="noreferrer"
          >
            Lascia una recensione Google <span>↗</span>
          </a>
        </article>

        <article className="qrCard">
          <div className="qrFrame">
            <img
              src="/il-veliero-qr.png"
              alt={`Codice QR per aprire ${siteUrl}`}
            />
          </div>
          <div>
            <p className="eyebrow gold">Menu sempre con te</p>
            <h2>Scansiona<br />e apri il sito.</h2>
            <p>
              Inquadra il codice con la fotocamera del telefono per vedere menu,
              foto e contatti.
            </p>
            <a className="qrDownload" href="/il-veliero-qr.png" download>
              Scarica il codice QR ↓
            </a>
          </div>
        </article>
      </section>

      <section className="visit" id="contatti">
        <div className="visitPhoto">
          <img src="/menu-cover.jpg" alt="Il menu originale de Il Veliero" />
        </div>
        <div className="visitContent">
          <p className="eyebrow gold">Ti aspettiamo</p>
          <h2>Ci vediamo<br />al <em>Veliero.</em></h2>
          <div className="contactRows">
            <div><span>Indirizzo</span><p>Via Francesco Zizzo, 41<br />90017 Porticello, PA</p></div>
            <div><span>Telefono</span><p><a href="tel:+393276204411">327 620 4411</a></p></div>
          </div>
          <div className="visitActions">
            <a className="button primary goldButton" href="tel:+393276204411">Chiama ora</a>
            <a className="button ghost light" href={googleMapsUrl} target="_blank" rel="noreferrer">Apri la mappa</a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footerBrand" href="#home"><span className="wheel">✺</span><span>IL VELIERO<small>BAR · PANINERIA · DRINKERIA</small></span></a>
        <p>Porticello, Sicilia · <a href="tel:+393276204411">327 620 4411</a></p>
        <a href="#home">Torna su ↑</a>
      </footer>
    </main>
  );
}
