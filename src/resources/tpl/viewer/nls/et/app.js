/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Salvesta",
      "close": "Sulge"
    },
    "errors": {
      "noConfigName": "Failis index.html > configOptions.story pole määratud ühtegi konfiguratsiooni.",
      "configFormatError": "Määratud konfiguratsiooni ei saanud laadida, kuna ilmnes JSON-i süntaksiviga.",
      "configNotFound": "Määratud konfiguratsiooni ei leitud või ei saanud laadida,kuna ilmnes JSON-i süntaksiviga",
      "boxTitle": "Esines tõrge",
      "servedFromFile": "Rakendusele juurdepääsemiseks tuleb kasutada veebiserverit. Lisateavet leiate juhendist ${USER_GUIDE}.",
      "userGuide": "kasutusjuhend",
      "invalidConfig": "Vigane konfiguratsioon",
      "invalidConfigNoApp": "Veebikaardi rakenduse identifikaatorit pole failis index.html määratud.",
      "invalidConfigNoAppDev": "Veebikaardi rakenduse identifikaatorit pole URL-i parameetrites (?appid=) määratud. Faili index.html AppID konfiguratsioon on arendusrežiimis ignoreeritud.",
      "unspecifiedConfigOwner": "Omanikuõigusi pole määratud.",
      "invalidConfigOwner": "Loo omanikul puuduvad õigused.",
      "invalidConfignoOAuth": "See lugu nõuab autentimist. Konfigureerige failis index.html ArcGIS-i OAuth-i ID või tehke lugu avalikuks.",
      "invalidApp": "Seda lugu ei saa laadida.",
      "appLoadingFail": "Midagi läks valesti, rakendust {TPL_NAME} ei laaditud õigesti.",
      "notConfiguredDesktop": "Lugu pole veel konfigureeritud.",
      "notConfiguredMobile": "Selle kuvasuuruse korral koosturit {TPL_NAME} ei toetata. Võimaluse korral muutke koosturile juurdepääsemiseks oma brauseri suurust või looge oma lugu suurema ekraaniga seadmes.",
      "notConfiguredMobile2": "Koosturi {TPL_NAME} kasutamiseks pöörake oma seadet ja kasutage horisontaalpaigutust.",
      "notAuthorized": "Teil puudub õigus sellele loole juurde pääseda",
      "notAuthorizedBuilder": "Teil pole õigust koosturit {TPL_NAME} kasutada.",
      "noViewerIE": "Seda lugu ei toetata Internet Exploreri varasemas versioonis ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Püüate seda lugu vaadata vanemas brauseris, mida ei toetata. Mõned funktsioonid ei pruugi töötada ning ilmneda võib ootamatuid probleeme. Soovitame kasutada brauserit Internet Explorer 11 või mõnda muud brauserit (nt Chrome).",
      "noViewerIE3": "2017. aasta lõpus seda lugu selles brauseris enam ei laadita. Siis peate selle loo vaatamiseks kasutama toetatud brauserit.",
      "upgradeBrowser": "Uuendage oma veebibrauserit",
      "mapLoadingFail": "Midagi läks valesti ning kaarti ei laaditud õigesti.",
      "signOut": "Logi välja",
      "builderSupport1": "Kaardilugude kaudu kaskaadi loomine on toetatud ainult brauserites ${CHROME} ja ${SAFARI}. Koosturi abil loodud kaskaadlugusid saab aga lisaks nendele brauseritele kuvada ka brauseris Internet Explorer 11 ja uuemates versioonides ning Firefoxis.",
      "builderSupport2": "iPadis kaardilugude koosturit ei toetata. Eelnevalt koostatud ja jagatud kaskaadlood iPadis toimivad.",
      "builderSupport3": "Kaskaadlugusid saab kuvada Chrome’is, Firefoxis ning brauseris Internet Explorer 11 ja uuemates versioonides. Kaardilugude kaskaadikoosturit toetatakse aga üksnes brauserites ${CHROME} ja ${SAFARI}.",
      "builderSupport4": "Kaskaadlugusid saab kuvada Chrome’is, Firefoxis ning brauseris Internet Explorer 11 ja uuemates versioonides. Kaardilugude kaskaadikoosturit toetatakse aga üksnes brauserites ${CHROME} ja ${SAFARI}.<br><br>Juhul kui soovite, et kaskaadikoosturit toetataks ka muudes brauserites, võtke ühendust toega ${ESRI-SUPPORT} või klõpsake hääletamiseks: ${FIREFOX-BUILDER} | ${IE-BUILDER}.",
      "sorry": "Tähelepanu!"
    },
    "mobileWarning": {
      "message1": "Lugesite seda lugu mobiilivaates. Rohkemate meediaelementidega täisloo lugemiseks saate kasutada lauaarvutit.",
      "email": "Saada selle loo link meilisõnumiga"
    },
    "media": {
      "captionPlaceholder": "Sisestage pealkiri siia...",
      "loadingError": "See sisu pole kättesaadav",
      "explore": "Uurimine",
      "exploreMap": "Uuri kaarti",
      "exploreStop": "Lõpeta uurimine",
      "sceneNotSupported": "Teie seade ei toeta seda 3D-kaarti.",
      "loading1": "Laadimine...",
      "loading2": "Laadin kaarti...",
      "videoPlayPause": "esita/peata",
      "videoMuteUnmute": "vaigista/taasta heli"
    },
    "headerFromCommon": {
      "defaultTagline": "A ${STORY_MAP}",
      "share": "Jaga",
      "tooltipAutoplayDisabled": "See pole automaatesituse režiimis saadaval"
    },
    "shareFromCommon": {
      "copy": "Kopeeri",
      "copied": "Kopeeritud",
      "open": "Ava",
      "embed": "Lisa veebilehele",
      "embedExplain": "Kasutage loo veebilehele lisamiseks järgmist HTML-koodi.",
      "size": "Suurus (laius/kõrgus):",
      "autoplayLabel": "Automaatesituse režiim",
      "autoplayExplain1": "Automaatesituse režiimis keritakse teie lugu kindla ajavahemiku järel edasi. Seda on hea kasutada kioskite või avalike kohtade ekraanidel, kuid arvestage, et muudel juhtudel võib see raskendada teie loo lugemist. See funktsioon pole väikestel ekraanidel toetatud.",
      "autoplayExplain2": "Kui see režiim on aktiveeritud, saate kasutada loo esitamise või peatamise ja liikumiskiiruse reguleerimise juhtelemente.",
      "linksupdated": "Lingid on värskendatud!"
    }
  }
});