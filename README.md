# Catch Media sin frontend mal til bruk på nye nettsider:sunglasses:

## Fremgangsmåte:

1. Logg inn på Github med Catch sin bruker
    ### Innloggingsinformasjon
    - **brukernavn**: post@catchmedia
    - **passord**:    detvanlige
    
2. Naviger til "FrontEndMal" repository.
3. Øverst til høyre er det en grønn knapp "Use this template" og velg "Create new repository"
4. Fyll inn repository navn, og se at Catch sin bruker er "owner".
5. Velg private
6. Når dette er gjort, gå inn på det nye prosjektet, velg settings, så velg collaborators og inviter din egen(_eller ønsket_) bruker til samarbeid.

### Voila! Det er nå klart til bruk :tada: :boom:

## Tips og triks (VS code)
### :warning:
### Extensions som kreves for bruk av dette oppsettet:
    - Live SASS Compiler 
### :fire:    
### Extensions som generelt anbefales:
    -   Live Server
    -   CSS Peek
    -   Auto Rename Tag(Endrer begge tagger ved endring av start/slutt tag)
    -   Colorize (Gir farger i CSS filen, lar deg også endre de med colorpicker ved klikk)

## Viktig informasjon :information_desk_person:

Det er nå satt opp slik at "bootstrap-custom.scss" filen som ligger under "Assets"->"Sass" oppdaterer Bootstrap-css filene som ligger under "Assets"/"Css" automatisk.

Om det skal vise seg at det ikke fungerer som tiltenkt ligger antakelig feilen i oppsettet av "Live Sass Compiler". 

### Fremgangsmåte for å legge til Live Sass Compiler konfigurasjon: :scissors:
    - Velg extensions
    - Høyreklikk på tannhjulet ved Live Sass Compiler og velg "Extensions settings"
    - Velg "Edit in settings.json"
    - Lim inn på egnet sted::scissors:
        "liveSassCompile.settings.formats": [
            {
                "format": "compressed",
                "extensionName": ".min.css",
                "savePath": "~/../css/"
            }
        ],
        
# :clap: :clap: :clap: :clap: :sparkling_heart: :sparkling_heart: :sparkling_heart::sparkling_heart: :triumph: :triumph: :triumph: :triumph: :sun_with_face: :sun_with_face: :sun_with_face: :confetti_ball:  :confetti_ball:  :confetti_ball:  :confetti_ball:

### Sist redigert av: Mattis(23.05.2023) 
_Endre ved endringer er du grei_
