const citys = [
"    Aach",
"Aachen",
"Aalen",
"Abenberg",
"Abensberg",
"Achern",
"Achim",
"Adelsheim",
"Adenau",
"Adorf/Vogtl.",
"Ahaus",
"Ahlen",
"Ahrensburg",
"Ahrweiler",
"Aichach",
"Aichach-Friedberg",
"Aichtal",
"Aken (Elbe)",
"Albstadt",
"Alfeld (Leine)",
"Allendorf (Lumda)",
"Allstedt",
"Alpirsbach",
"Alsdorf",
"Alsfeld",
"Alsleben (Saale)",
"Altdorf Bei Nürnberg",
"Altena",
"Altenberg",
"Altenburg",
"Altenburger Land",
"Altenkirchen (Westerwald)",
"Altensteig",
"Altentreptow",
"Altlandsberg",
"Altötting",
"Alzenau",
"Alzey",
"Alzey-Worms",
"Amberg",
"Amberg-Sulzbach",
"Ammerland",
"Amorbach",
"Amöneburg",
"Andernach",
"Angermünde",
"Anhalt-Bitterfeld",
"Anklam",
"Annaberg",
"Annaberg-Buchholz",
"Annaburg",
"Annweiler am Trifels",
"Ansbach",
"Apolda",
"Arendsee (Altmark)",
"Arneburg",
"Arnis",
"Arnsberg",
"Arnstadt",
"Arnstein",
"Artern/Unstrut",
"Arzberg",
"Aschaffenburg",
"Aschersleben",
"Asperg",
"Attendorn",
"Aub",
"Aue",
"Aue-Schwarzenberg",
"Auerbach in der Oberpfalz",
"Auerbach/Vogtl.",
"Augsburg",
"Augustusburg",
"Aulendorf",
"Auma-Weidatal",
"Aurich",
"Aßlar",
"Babenhausen",
"Bacharach",
"Backnang",
"Bad Aibling",
"Bad Arolsen",
"Bad Belzig",
"Bad Bentheim",
"Bad Bergzabern",
"Bad Berka",
"Bad Berleburg",
"Bad Berneck im Fichtelgebirge",
"Bad Bevensen",
"Bad Bibra",
"Bad Blankenburg",
"Bad Bramstedt",
"Bad Breisig",
"Bad Brückenau",
"Bad Buchau",
"Bad Camberg",
"Bad Colberg-Heldburg",
"Bad Doberan",
"Bad Driburg",
"Bad Düben",
"Bad Dürkheim",
"Bad Dürrenberg",
"Bad Dürrheim",
"Bad Elster",
"Bad Ems",
"Bad Fallingbostel",
"Bad Frankenhausen/Kyffhäuser",
"Bad Freienwalde (Oder)",
"Bad Friedrichshall",
"Bad Gandersheim",
"Bad Gottleuba-Berggießhübel",
"Bad Griesbach im Rottal",
"Bad Harzburg",
"Bad Herrenalb",
"Bad Hersfeld",
"Bad Homburg vor der Höhe",
"Bad Honnef",
"Bad Hönningen",
"Bad Iburg",
"Bad Karlshafen",
"Bad Kissingen",
"Bad Kreuznach",
"Bad Krozingen",
"Bad König",
"Bad Königshofen im Grabfeld",
"Bad Köstritz",
"Bad Kötzting",
"Bad Laasphe",
"Bad Langensalza",
"Bad Lauchstädt",
"Bad Lausick",
"Bad Lauterberg im Harz",
"Bad Liebenstein",
"Bad Liebenwerda",
"Bad Liebenzell",
"Bad Lippspringe",
"Bad Lobenstein",
"Bad Marienberg (Westerwald)",
"Bad Mergentheim",
"Bad Muskau",
"Bad Münder am Deister",
"Bad Münstereifel",
"Bad Nauheim",
"Bad Nenndorf",
"Bad Neuenahr-Ahrweiler",
"Bad Neustadt an der Saale",
"Bad Oeynhausen",
"Bad Oldesloe",
"Bad Orb",
"Bad Pyrmont",
"Bad Rappenau",
"Bad Reichenhall",
"Bad Rodach",
"Bad Sachsa",
"Bad Salzdetfurth",
"Bad Salzuflen",
"Bad Salzungen",
"Bad Saulgau",
"Bad Schandau",
"Bad Schmiedeberg",
"Bad Schussenried",
"Bad Schwalbach",
"Bad Schwartau",
"Bad Segeberg",
"Bad Sobernheim",
"Bad Soden am Taunus",
"Bad Soden-Salmünster",
"Bad Sooden-Allendorf",
"Bad Staffelstein",
"Bad Sulza",
"Bad Säckingen",
"Bad Sülze",
"Bad Teinach-Zavelstein",
"Bad Tennstedt",
"Bad Tölz",
"Bad Tölz-Wolfratshausen",
"Bad Urach",
"Bad Vilbel",
"Bad Waldsee",
"Bad Wildbad",
"Bad Wildungen",
"Bad Wilsnack",
"Bad Wimpfen",
"Bad Windsheim",
"Bad Wurzach",
"Bad Wörishofen",
"Bad Wünnenberg",
"Baden-Baden",
"Baesweiler",
"Baiersdorf",
"Balingen",
"Ballenstedt",
"Balve",
"Bamberg",
"Barby",
"Bargteheide",
"Barmstedt",
"Barnim",
"Barntrup",
"Barsinghausen",
"Barth",
"Baruth/Mark",
"Bassum",
"Battenberg (Eder)",
"Baumholder",
"Baunach",
"Baunatal",
"Bautzen",
"Bayreuth",
"Bebra",
"Beckum",
"Bedburg",
"Beelitz",
"Beerfelden",
"Beeskow",
"Beilngries",
"Beilstein",
"Belgern-Schildau",
"Bendorf",
"Bensheim",
"Berching",
"Berchtesgadener Land",
"Berga/Elster",
"Bergen",
"Bergen Auf Rügen",
"Bergheim",
"Bergisch Gladbach",
"Bergkamen",
"Bergneustadt",
"Bergstraße",
"Berka/Werra",
"Berlin",
"Bernau Bei Berlin",
"Bernburg (Saale)",
"Bernkastel-Kues",
"Bernkastel-Wittlich",
"Bernsdorf",
"Bernstadt A. D. Eigen",
"Bersenbrück",
"Besigheim",
"Betzdorf",
"Betzenstein",
"Beverungen",
"Bexbach",
"Biberach",
"Biberach an der Riß",
"Biedenkopf",
"Bielefeld",
"Biesenthal",
"Bietigheim-Bissingen",
"Billerbeck",
"Bingen am Rhein",
"Birkenfeld",
"Bischofsheim an der Rhön",
"Bischofswerda",
"Bismark (Altmark)",
"Bitburg",
"Bitburg-Prüm",
"Bitterfeld-Wolfen",
"Blankenburg (Harz)",
"Blankenhain",
"Blaubeuren",
"Blaustein",
"Bleckede",
"Bleicherode",
"Blieskastel",
"Blomberg",
"Blumberg",
"Bobingen",
"Bocholt",
"Bochum",
"Bockenem",
"Bodenwerder",
"Bogen",
"Boizenburg/Elbe",
"Bonn",
"Bonndorf im Schwarzwald",
"Bopfingen",
"Boppard",
"Borgentreich",
"Borgholzhausen",
"Borken",
"Borkum",
"Borna",
"Bornheim",
"Bottrop",
"Boxberg",
"Brackenheim",
"Brake (Unterweser)",
"Brakel",
"Bramsche",
"Brand-Erbisdorf",
"Brandenburg an der Havel",
"Brandis",
"Braubach",
"Braunfels",
"Braunlage",
"Braunsbedra",
"Braunschweig",
"Breckerfeld",
"Bredstedt",
"Breisach am Rhein",
"Breisgau-Hochschwarzwald",
"Bremen",
"Bremerhaven",
"Bremervörde",
"Bretten",
"Breuberg",
"Brilon",
"Brotterode-Trusetal",
"Bruchköbel",
"Bruchsal",
"Brunsbüttel",
"Bräunlingen",
"Brück",
"Brüel",
"Brühl",
"Brüssow",
"Buchen (Odenwald)",
"Buchholz in der Nordheide",
"Buchloe",
"Buckow (Märkische Schweiz)",
"Burg",
"Burg Stargard",
"Burgau",
"Burgbernheim",
"Burgdorf",
"Burgenland",
"Burghausen",
"Burgkunstadt",
"Burglengenfeld",
"Burgstädt",
"Burgwedel",
"Burladingen",
"Burscheid",
"Buttelstedt",
"Buttstädt",
"Butzbach",
"Buxtehude",
"Bärnau",
"Böblingen",
"Böhlen",
"Bönnigheim",
"Börde",
"Bückeburg",
"Büdelsdorf",
"Büdingen",
"Bühl",
"Bünde",
"Büren",
"Bürgel",
"Bürstadt",
"Bützow",
"Calau",
"Calbe (Saale)",
"Calw",
"Castrop-Rauxel",
"Celle",
"Cham",
"Chemnitz",
"Chemnitzer Land",
"Clausthal-Zellerfeld",
"Clingen",
"Cloppenburg",
"Coburg",
"Cochem",
"Cochem-Zell",
"Coesfeld",
"Colditz",
"Coswig",
"Coswig (Anhalt)",
"Cottbus",
"Cottbus/Chosebuz",
"Crailsheim",
"Creglingen",
"Creuzburg",
"Creußen",
"Crimmitschau",
"Crivitz",
"Cuxhaven",
"Dachau",
"Dahlen",
"Dahme-Spreewald",
"Dahme/Mark",
"Dahn",
"Damme",
"Dannenberg (Elbe)",
"Dargun",
"Darmstadt",
"Darmstadt-Dieburg",
"Dassel",
"Dassow",
"Datteln",
"Daun",
"Deggendorf",
"Deidesheim",
"Delbrück",
"Delitzsch",
"Delmenhorst",
"Demmin",
"Dessau-Roßlau",
"Detmold",
"Dettelbach",
"Dieburg",
"Diemelstadt",
"Diepholz",
"Dierdorf",
"Dietenheim",
"Dietfurt an der Altmühl",
"Dietzenbach",
"Diez",
"Dillenburg",
"Dillingen A.D. Donau",
"Dillingen an der Donau",
"Dillingen/Saar",
"Dingelstädt",
"Dingolfing",
"Dingolfing-Landau",
"Dinkelsbühl",
"Dinklage",
"Dinslaken",
"Dippoldiswalde",
"Dissen am Teutoburger Wald",
"Dithmarschen",
"Ditzingen",
"Doberlug-Kirchhain",
"Dohna",
"Dommitzsch",
"Donau-Ries",
"Donaueschingen",
"Donauwörth",
"Donzdorf",
"Dorfen",
"Dormagen",
"Dornburg-Camburg",
"Dornhan",
"Dornstetten",
"Dorsten",
"Dortmund",
"Dransfeld",
"Drebkau",
"Dreieich",
"Drensteinfurt",
"Dresden",
"Drolshagen",
"Duderstadt",
"Duisburg",
"Döbeln",
"Döbern",
"Dömitz",
"Dülmen",
"Düren",
"Düsseldorf",
"Ebeleben",
"Eberbach",
"Ebermannstadt",
"Ebern",
"Ebersbach an der Fils",
"Ebersbach-Neugersdorf",
"Ebersberg",
"Eberswalde",
"Eckartsberga",
"Eckernförde",
"Edenkoben",
"Egeln",
"Eggenfelden",
"Eggesin",
"Ehingen (Donau)",
"Ehrenfriedersdorf",
"Eibelstadt",
"Eibenstock",
"Eichsfeld",
"Eichstätt",
"Eilenburg",
"Einbeck",
"Eisenach",
"Eisenberg",
"Eisenberg (Pfalz)",
"Eisenhüttenstadt",
"Eisfeld",
"Eisleben",
"Eislingen/Fils",
"Elbe-Elster",
"Ellingen",
"Ellrich",
"Ellwangen (Jagst)",
"Elmshorn",
"Elsdorf",
"Elsfleth",
"Elsterberg",
"Elsterwerda",
"Elstra",
"Elterlein",
"Eltmann",
"Eltville am Rhein",
"Elzach",
"Elze",
"Emden",
"Emmelshausen",
"Emmendingen",
"Emmerich am Rhein",
"Emsdetten",
"Emsland",
"Endingen am Kaiserstuhl",
"Engen",
"Enger",
"Ennepetal",
"Ennigerloh",
"Eppelheim",
"Eppingen",
"Eppstein",
"Erbach",
"Erbach (Odenwald)",
"Erbendorf",
"Erding",
"Erftstadt",
"Erfurt",
"Erkelenz",
"Erkner",
"Erkrath",
"Erlangen",
"Erlangen-Höchstadt",
"Erlenbach am Main",
"Erlensee",
"Erwitte",
"Eschborn",
"Eschenbach in der Oberpfalz",
"Eschershausen",
"Eschwege",
"Eschweiler",
"Esens",
"Espelkamp",
"Essen",
"Esslingen",
"Esslingen am Neckar",
"Ettenheim",
"Ettlingen",
"Euskirchen",
"Eutin",
"Falkenberg/Elster",
"Falkensee",
"Falkenstein/Harz",
"Falkenstein/Vogtl.",
"Fehmarn",
"Fellbach",
"Felsberg",
"Feuchtwangen",
"Filderstadt",
"Finsterwalde",
"Fladungen",
"Flensburg",
"Florstadt",
"Flöha",
"Flörsheim am Main",
"Forchheim",
"Forchtenberg",
"Forst (Lausitz)",
"Frankenau",
"Frankenberg (Eder)",
"Frankenberg/Sa.",
"Frankenthal (Pfalz)",
"Frankfurt (Oder)",
"Frankfurt am Main",
"Franzburg",
"Frauenstein",
"Frechen",
"Freiberg",
"Freiberg am Neckar",
"Freiburg im Breisgau",
"Freilassing",
"Freinsheim",
"Freising",
"Freital",
"Freren",
"Freudenberg",
"Freudenstadt",
"Freyburg (Unstrut)",
"Freystadt",
"Freyung",
"Freyung-Grafenau",
"Fridingen an der Donau",
"Friedberg",
"Friedland",
"Friedrichroda",
"Friedrichsdorf",
"Friedrichshafen",
"Friedrichstadt",
"Friedrichsthal",
"Friesack",
"Friesland",
"Friesoythe",
"Fritzlar",
"Frohburg",
"Fröndenberg/Ruhr",
"Fulda",
"Furth im Wald",
"Furtwangen im Schwarzwald",
"Fürstenau",
"Fürstenberg/Havel",
"Fürstenfeldbruck",
"Fürstenwalde/Spree",
"Fürth",
"Füssen",
"Gadebusch",
"Gaggenau",
"Gaildorf",
"Gammertingen",
"Ganderkesee",
"Garbsen",
"Garching Bei München",
"Gardelegen",
"Garding",
"Garmisch-Partenkirchen",
"Gartz (Oder)",
"Garz/Rügen",
"Gau-Algesheim",
"Gebesee",
"Gedern",
"Geesthacht",
"Geestland",
"Gefell",
"Gefrees",
"Gehrden",
"Gehren",
"Geilenkirchen",
"Geisa",
"Geiselhöring",
"Geisenfeld",
"Geisenheim",
"Geisingen",
"Geislingen",
"Geislingen an der Steige",
"Geithain",
"Geldern",
"Gelnhausen",
"Gelsenkirchen",
"Gemünden (Wohra)",
"Gemünden am Main",
"Gengenbach",
"Genthin",
"Georgsmarienhütte",
"Gera",
"Gerabronn",
"Gerbstedt",
"Geretsried",
"Geringswalde",
"Gerlingen",
"Germering",
"Germersheim",
"Gernsbach",
"Gernsheim",
"Gerolstein",
"Gerolzhofen",
"Gersfeld (Rhön)",
"Gersthofen",
"Gescher",
"Geseke",
"Gevelsberg",
"Geyer",
"Giengen an der Brenz",
"Gießen",
"Gifhorn",
"Ginsheim-Gustavsburg",
"Gladbeck",
"Gladenbach",
"Glashütte",
"Glauchau",
"Glinde",
"Glücksburg (Ostsee)",
"Glückstadt",
"Gnoien",
"Goch",
"Goldberg",
"Goldkronach",
"Golßen",
"Gommern",
"Goslar",
"Gotha",
"Grabow",
"Grafenau",
"Grafenwöhr",
"Grafing Bei München",
"Grafschaft Bentheim",
"Gransee",
"Grebenau",
"Grebenstein",
"Greding",
"Greifswald",
"Greiz",
"Greußen",
"Greven",
"Grevenbroich",
"Grevesmühlen",
"Griesheim",
"Grimma",
"Grimmen",
"Groitzsch",
"Gronau (Leine)",
"Gronau (Westf.)",
"Groß-Bieberau",
"Groß-Gerau",
"Groß-Umstadt",
"Großalmerode",
"Großbottwar",
"Großbreitenbach",
"Großenehrich",
"Großenhain",
"Großräschen",
"Großröhrsdorf",
"Großschirma",
"Gräfenberg",
"Gräfenhainichen",
"Gräfenthal",
"Gröditz",
"Gröningen",
"Grünberg",
"Grünhain-Beierfeld",
"Grünsfeld",
"Grünstadt",
"Guben",
"Gudensberg",
"Gummersbach",
"Gundelfingen an der Donau",
"Gundelsheim",
"Gunzenhausen",
"Göppingen",
"Görlitz",
"Göttingen",
"Gößnitz",
"Güglingen",
"Günzburg",
"Güsten",
"Güstrow",
"Gütersloh",
"Gützkow",
"Haan",
"Hachenburg",
"Hadamar",
"Hagen",
"Hagenbach",
"Hagenow",
"Haiger",
"Haigerloch",
"Hainichen",
"Haiterbach",
"Halberstadt",
"Haldensleben",
"Halle (Saale)",
"Halle (Westf.)",
"Hallenberg",
"Hallstadt",
"Haltern am See",
"Halver",
"Hamburg",
"Hameln",
"Hameln-Pyrmont",
"Hamm",
"Hammelburg",
"Hamminkeln",
"Hanau",
"Hann. Münden",
"Hannover",
"Harburg",
"Harburg (Schwaben)",
"Hardegsen",
"Haren (Ems)",
"Harsewinkel",
"Hartenstein",
"Hartha",
"Harz",
"Harzgerode",
"Hasbergen",
"Haselünne",
"Haslach im Kinzigtal",
"Hattersheim am Main",
"Hattingen",
"Hatzfeld (Eder)",
"Hausach",
"Hauzenberg",
"Havelberg",
"Havelland",
"Havelsee",
"Hayingen",
"Haßberge",
"Haßfurt",
"Hechingen",
"Hecklingen",
"Heide",
"Heideck",
"Heidelberg",
"Heidenau",
"Heidenheim",
"Heidenheim an der Brenz",
"Heilbad Heiligenstadt",
"Heilbronn",
"Heiligenhafen",
"Heiligenhaus",
"Heilsbronn",
"Heimbach",
"Heimsheim",
"Heinsberg",
"Heitersheim",
"Heldrungen",
"Helmbrechts",
"Helmstedt",
"Hemau",
"Hemer",
"Hemmingen",
"Hemmoor",
"Hemsbach",
"Hennef (Sieg)",
"Hennigsdorf",
"Heppenheim (Bergstraße)",
"Herbolzheim",
"Herborn",
"Herbrechtingen",
"Herbstein",
"Herdecke",
"Herdorf",
"Herford",
"Heringen (Werra)",
"Heringen/Helme",
"Hermeskeil",
"Hermsdorf",
"Herne",
"Herrenberg",
"Herrieden",
"Herrnhut",
"Hersbruck",
"Hersfeld-Rotenburg",
"Herten",
"Herzberg (Elster)",
"Herzberg am Harz",
"Herzogenaurach",
"Herzogenrath",
"Herzogtum Lauenburg",
"Hessisch Lichtenau",
"Hessisch Oldendorf",
"Hettingen",
"Hettstedt",
"Heubach",
"Heusenstamm",
"Hilchenbach",
"Hildburghausen",
"Hilden",
"Hildesheim",
"Hillesheim",
"Hilpoltstein",
"Hirschau",
"Hirschberg",
"Hirschhorn (Neckar)",
"Hitzacker (Elbe)",
"Hochheim am Main",
"Hockenheim",
"Hof",
"Hofgeismar",
"Hofheim am Taunus",
"Hofheim In Unterfranken",
"Hohen Neuendorf",
"Hohenberg an der Eger",
"Hohenleuben",
"Hohenmölsen",
"Hohenstein-Ernstthal",
"Hohnstein",
"Hollfeld",
"Holzgerlingen",
"Holzminden",
"Homberg (Efze)",
"Homberg (Ohm)",
"Homburg",
"Horb am Neckar",
"Horn-Bad Meinberg",
"Hornbach",
"Hornberg",
"Horstmar",
"Hoya",
"Hoyerswerda",
"Hungen",
"Husum",
"Höchstadt an der Aisch",
"Höchstädt an der Donau",
"Höhr-Grenzhausen",
"Hörstel",
"Höxter",
"Hückelhoven",
"Hückeswagen",
"Hüfingen",
"Hünfeld",
"Hürth",
"Ibbenbüren",
"Ichenhausen",
"Idar-Oberstein",
"Idstein",
"Illertissen",
"Ilmenau",
"Ilsenburg (Harz)",
"Ilshofen",
"Immenhausen",
"Immenstadt im Allgäu",
"Ingelfingen",
"Ingelheim am Rhein",
"Ingolstadt",
"Iphofen",
"Iserlohn",
"Isny im Allgäu",
"Isselburg",
"Itzehoe",
"Jarmen",
"Jena",
"Jerichow",
"Jerichower Land",
"Jessen (Elster)",
"Jever",
"Joachimsthal",
"Johanngeorgenstadt",
"Jöhstadt",
"Jülich",
"Jüterbog",
"Kaarst",
"Kahla",
"Kaisersesch",
"Kaiserslautern",
"Kalbe (Milde)",
"Kalkar",
"Kaltenkirchen",
"Kaltennordheim",
"Kamen",
"Kamenz",
"Kamp-Lintfort",
"Kandel",
"Kandern",
"Kappeln",
"Karben",
"Karlsruhe",
"Karlstadt",
"Kassel",
"Kastellaun",
"Katzenelnbogen",
"Kaub",
"Kaufbeuren",
"Kehl",
"Kelbra (Kyffhäuser)",
"Kelheim",
"Kelkheim (Taunus)",
"Kellinghusen",
"Kelsterbach",
"Kemberg",
"Kemnath",
"Kempen",
"Kempten (Allgäu)",
"Kenzingen",
"Kerpen",
"Ketzin/Havel",
"Kevelaer",
"Kiel",
"Kierspe",
"Kindelbrück",
"Kirchberg",
"Kirchberg (Hunsrück)",
"Kirchberg an der Jagst",
"Kirchen (Sieg)",
"Kirchenlamitz",
"Kirchhain",
"Kirchheim Unter Teck",
"Kirchheimbolanden",
"Kirn",
"Kirtorf",
"Kitzingen",
"Kitzscher",
"Kleve",
"Klingenberg am Main",
"Klingenthal",
"Klötze",
"Klütz",
"Knittlingen",
"Koblenz",
"Kohren-Sahlis",
"Kolbermoor",
"Konstanz",
"Konz",
"Korbach",
"Korntal-Münchingen",
"Kornwestheim",
"Korschenbroich",
"Kraichtal",
"Krakow am See",
"Kranichfeld",
"Krautheim",
"Krefeld",
"Kremmen",
"Krempe",
"Kreuztal",
"Kronach",
"Kronberg im Taunus",
"Kroppenstedt",
"Krumbach (Schwaben)",
"Kröpelin",
"Kulmbach",
"Kupferberg",
"Kuppenheim",
"Kusel",
"Kyllburg",
"Kyritz",
"Kölleda",
"Köln",
"Königs Wusterhausen",
"Königsberg In Bayern",
"Königsbrunn",
"Königsbrück",
"Königsee-Rottenbach",
"Königslutter am Elm",
"Königstein (Sächsische Schweiz)",
"Königstein im Taunus",
"Königswinter",
"Könnern",
"Köthen (Anhalt)",
"Kühlungsborn",
"Külsheim",
"Künzelsau",
"Laage",
"Laatzen",
"Ladenburg",
"Lage",
"Lahnstein",
"Lahr/Schwarzwald",
"Laichingen",
"Lambrecht (Pfalz)",
"Lampertheim",
"Landau an der Isar",
"Landau I.D. Pfalz",
"Landau in der Pfalz",
"Landsberg",
"Landsberg A. Lech",
"Landsberg am Lech",
"Landshut",
"Landstuhl",
"Langelsheim",
"Langen",
"Langenau",
"Langenburg",
"Langenfeld (Rheinland)",
"Langenhagen",
"Langenselbold",
"Langenzenn",
"Langewiesen",
"Lassan",
"Laubach",
"Laucha an der Unstrut",
"Lauchhammer",
"Lauchheim",
"Lauda-Königshofen",
"Lauenburg/Elbe",
"Lauf an der Pegnitz",
"Laufen",
"Laufenburg (Baden)",
"Lauffen am Neckar",
"Lauingen (Donau)",
"Laupheim",
"Lauscha",
"Lauta",
"Lauter-Bernsbach",
"Lauterbach",
"Lauterecken",
"Lauterstein",
"Lebach",
"Lebus",
"Leer",
"Leer (Ostfriesland)",
"Lehesten",
"Lehrte",
"Leichlingen (Rheinland)",
"Leimen",
"Leinefelde-Worbis",
"Leinfelden-Echterdingen",
"Leipheim",
"Leipzig",
"Leipziger Land",
"Leisnig",
"Lemgo",
"Lengenfeld",
"Lengerich",
"Lennestadt",
"Lenzen",
"Leonberg",
"Leun",
"Leuna",
"Leutenberg",
"Leutershausen",
"Leutkirch im Allgäu",
"Leverkusen",
"Lich",
"Lichtenau",
"Lichtenberg",
"Lichtenfels",
"Lichtenstein/Sa.",
"Liebenau",
"Liebenwalde",
"Lieberose",
"Liebstadt",
"Limbach-Oberfrohna",
"Limburg an der Lahn",
"Limburg-Weilburg",
"Lindau (Bodensee)",
"Lindau-Bodensee",
"Linden",
"Lindenberg im Allgäu",
"Lindenfels",
"Lindow (Mark)",
"Lingen (Ems)",
"Linnich",
"Linz am Rhein",
"Lippe",
"Lippstadt",
"Lohmar",
"Lohne (Oldenburg)",
"Lohr am Main",
"Loitz",
"Lollar",
"Lommatzsch",
"Lorch",
"Lorsch",
"Lucka",
"Luckau",
"Luckenwalde",
"Ludwigsburg",
"Ludwigsfelde",
"Ludwigshafen A. Rhein",
"Ludwigshafen am Rhein",
"Ludwigslust",
"Ludwigsstadt",
"Lugau",
"Lunzenau",
"Lychen",
"Löbau",
"Löbau-Zittau",
"Löffingen",
"Löhne",
"Löningen",
"Lörrach",
"Löwenstein",
"Lößnitz",
"Lübbecke",
"Lübben (Spreewald)",
"Lübbenau/Spreewald",
"Lübeck",
"Lübtheen",
"Lübz",
"Lüchow (Wendland)",
"Lüchow-Dannenberg",
"Lüdenscheid",
"Lüdinghausen",
"Lügde",
"Lüneburg",
"Lünen",
"Lütjenburg",
"Lützen",
"Magdala",
"Magdeburg",
"Mahlberg",
"Main-Spessart",
"Mainbernheim",
"Mainburg",
"Maintal",
"Mainz",
"Mainz-Bingen",
"Malchin",
"Malchow",
"Manderscheid",
"Mannheim",
"Mansfeld",
"Mansfeld-Südharz",
"Marbach am Neckar",
"Marburg",
"Marburg-Biedenkopf",
"Marienberg",
"Marienmünster",
"Markdorf",
"Markgröningen",
"Markkleeberg",
"Markneukirchen",
"Markranstädt",
"Marktbreit",
"Marktheidenfeld",
"Marktleuthen",
"Marktoberdorf",
"Marktredwitz",
"Marktsteft",
"Marl",
"Marlow",
"Marne",
"Marsberg",
"Maulbronn",
"Maxhütte-Haidhof",
"Mayen",
"Mayen-Koblenz",
"Mechernich",
"Meckenheim",
"Mecklenburg-Strelitz",
"Medebach",
"Meerane",
"Meerbusch",
"Meersburg",
"Meinerzhagen",
"Meiningen",
"Meisenheim",
"Meißen",
"Meldorf",
"Melle",
"Mellrichstadt",
"Melsungen",
"Memmingen",
"Menden (Sauerland)",
"Mendig",
"Mengen",
"Meppen",
"Merkendorf",
"Merseburg",
"Merzig",
"Merzig-Wadern",
"Meschede",
"Mettmann",
"Metzingen",
"Meuselwitz",
"Meyenburg",
"Meßkirch",
"Meßstetten",
"Michelstadt",
"Miesbach",
"Miltenberg",
"Mindelheim",
"Minden",
"Minden-Lübbecke",
"Mirow",
"Mittenwalde",
"Mitterteich",
"Mittweida",
"Moers",
"Monheim",
"Monheim am Rhein",
"Monschau",
"Montabaur",
"Moosburg an der Isar",
"Moringen",
"Mosbach",
"Munderkingen",
"Munster",
"Murrhardt",
"Märkisch Buchholz",
"Märkisch-Oderland",
"Möckern",
"Möckmühl",
"Mölln",
"Mönchengladbach",
"Mörfelden-Walldorf",
"Mössingen",
"Mücheln (Geiseltal)",
"Mügeln",
"Mühlacker",
"Mühlberg/Elbe",
"Mühldorf A. Inn",
"Mühldorf am Inn",
"Mühlhausen/Thüringen",
"Mühlheim am Main",
"Mühlheim an der Donau",
"Mülheim A.D. Ruhr",
"Mülheim an der Ruhr",
"Mülheim-Kärlich",
"Müllheim",
"Müllrose",
"Münchberg",
"Müncheberg",
"München",
"Münchenbernsdorf",
"Münnerstadt",
"Münsingen",
"Münster",
"Münstermaifeld",
"Münzenberg",
"Müritz",
"Nabburg",
"Nagold",
"Naila",
"Nassau",
"Nastätten",
"Nauen",
"Naumburg",
"Naumburg (Saale)",
"Naunhof",
"Nebra (Unstrut)",
"Neckarbischofsheim",
"Neckargemünd",
"Neckarsteinach",
"Neckarsulm",
"Neresheim",
"Netphen",
"Nettetal",
"Netzschkau",
"Neu-Anspach",
"Neu-Isenburg",
"Neu-Ulm",
"Neubrandenburg",
"Neubukow",
"Neubulach",
"Neuburg an der Donau",
"Neuburg-Schrobenhausen",
"Neudenau",
"Neuenburg am Rhein",
"Neuenbürg",
"Neuenhaus",
"Neuenrade",
"Neuenstadt am Kocher",
"Neuenstein",
"Neuerburg",
"Neuffen",
"Neuhaus am Rennweg",
"Neukalen",
"Neukirchen",
"Neukirchen-Vluyn",
"Neukloster",
"Neumark",
"Neumarkt I.D.Opf.",
"Neumarkt in der Oberpfalz",
"Neumarkt-Sankt Veit",
"Neumünster",
"Neunburg Vorm Wald",
"Neunkirchen",
"Neuruppin",
"Neusalza-Spremberg",
"Neuss",
"Neustadt",
"Neustadt (Dosse)",
"Neustadt am Kulm",
"Neustadt am Rübenberge",
"Neustadt an der Aisch",
"Neustadt an der Donau",
"Neustadt an der Orla",
"Neustadt an der Waldnaab",
"Neustadt an der Weinstraße",
"Neustadt Bei Coburg",
"Neustadt In Holstein",
"Neustadt In Sachsen",
"Neustadt-Glewe",
"Neustrelitz",
"Neusäß",
"Neutraubling",
"Neuwied",
"Neuötting",
"Nidda",
"Niddatal",
"Nidderau",
"Nideggen",
"Niebüll",
"Niedenstein",
"Nieder-Olm",
"Niederkassel",
"Niedernhall",
"Niederstetten",
"Niederstotzingen",
"Nieheim",
"Niemegk",
"Nienburg (Saale)",
"Nienburg (Weser)",
"Nienburg/Weser",
"Nierstein",
"Niesky",
"Nittenau",
"Norden",
"Nordenham",
"Norderney",
"Norderstedt",
"Nordfriesland",
"Nordhausen",
"Nordhorn",
"Nordvorpommern",
"Nordwestmecklenburg",
"Northeim",
"Nortorf",
"Nossen",
"Nördlingen",
"Nürnberg",
"Nürnberger Land",
"Nürtingen",
"Ober-Ramstadt",
"Oberallgäu",
"Oberasbach",
"Oberharz am Brocken",
"Oberhausen",
"Oberhavel",
"Oberhof",
"Oberkirch",
"Oberkochen",
"Oberlungwitz",
"Obermoschel",
"Obernburg am Main",
"Oberndorf am Neckar",
"Obernkirchen",
"Oberriexingen",
"Oberspreewald-Lausitz",
"Obertshausen",
"Oberursel (Taunus)",
"Oberviechtach",
"Oberweißbach/Thür. Wald",
"Oberwesel",
"Oberwiesenthal",
"Ochsenfurt",
"Ochsenhausen",
"Ochtrup",
"Oder-Spree",
"Oderberg",
"Oebisfelde-Weferlingen",
"Oederan",
"Oelde",
"Oelsnitz/Erzgeb.",
"Oelsnitz/Vogtl.",
"Oer-Erkenschwick",
"Oerlinghausen",
"Oestrich-Winkel",
"Oettingen In Bayern",
"Offenbach",
"Offenbach am Main",
"Offenburg",
"Ohrdruf",
"Olbernhau",
"Olching",
"Oldenburg (Oldb)",
"Oldenburg (Oldenburg)",
"Oldenburg In Holstein",
"Olfen",
"Olpe",
"Olsberg",
"Oppenau",
"Oppenheim",
"Oranienbaum-Wörlitz",
"Oranienburg",
"Orlamünde",
"Ornbau",
"Ortenberg",
"Ortrand",
"Oschatz",
"Oschersleben (Bode)",
"Osnabrück",
"Ostallgäu",
"Osterburg (Altmark)",
"Osterburken",
"Osterfeld",
"Osterhofen",
"Osterholz",
"Osterholz-Scharmbeck",
"Osterode am Harz",
"Osterwieck",
"Ostfildern",
"Ostheim vor der Rhön",
"Osthofen",
"Ostholstein",
"Ostprignitz-Ruppin",
"Ostritz",
"Ostvorpommern",
"Otterberg",
"Otterndorf",
"Ottweiler",
"Overath",
"Owen",
"Paderborn",
"Papenburg",
"Pappenheim",
"Parchim",
"Parsberg",
"Pasewalk",
"Passau",
"Pattensen",
"Pausa-Mühltroff",
"Pegau",
"Pegnitz",
"Peine",
"Peitz",
"Penig",
"Penkun",
"Penzberg",
"Penzlin",
"Perleberg",
"Petershagen",
"Pfaffenhofen A. D. Ilm",
"Pfaffenhofen an der Ilm",
"Pfarrkirchen",
"Pforzheim",
"Pfreimd",
"Pfullendorf",
"Pfullingen",
"Pfungstadt",
"Philippsburg",
"Pinneberg",
"Pirmasens",
"Pirna",
"Plattling",
"Plau am See",
"Plaue",
"Plauen",
"Plettenberg",
"Pleystein",
"Plochingen",
"Plön",
"Pockau-Lengefeld",
"Pocking",
"Pohlheim",
"Polch",
"Porta Westfalica",
"Potsdam",
"Potsdam-Mittelmark",
"Pottenstein",
"Preetz",
"Premnitz",
"Prenzlau",
"Pressath",
"Preußisch Oldendorf",
"Prichsenstadt",
"Prignitz",
"Pritzwalk",
"Prüm",
"Puchheim",
"Pulheim",
"Pulsnitz",
"Putbus",
"Putlitz",
"Pößneck",
"Püttlingen",
"Quakenbrück",
"Quedlinburg",
"Querfurt",
"Quickborn",
"Rabenau",
"Radeberg",
"Radebeul",
"Radeburg",
"Radevormwald",
"Radolfzell am Bodensee",
"Raguhn-Jeßnitz",
"Rahden",
"Rain",
"Ramstein-Miesenbach",
"Ranis",
"Ransbach-Baumbach",
"Rastatt",
"Rastenberg",
"Rathenow",
"Ratingen",
"Ratzeburg",
"Rauenberg",
"Raunheim",
"Rauschenberg",
"Ravensburg",
"Ravenstein",
"Recklinghausen",
"Rees",
"Regen",
"Regensburg",
"Regis-Breitingen",
"Rehau",
"Rehburg-Loccum",
"Rehna",
"Reichelsheim (Wetterau)",
"Reichenbach im Vogtland",
"Reichenbach/O.L.",
"Reinbek",
"Reinfeld (Holstein)",
"Reinheim",
"Remagen",
"Remda-Teichel",
"Remscheid",
"Remseck am Neckar",
"Renchen",
"Rendsburg",
"Rendsburg-Eckernförde",
"Rennerod",
"Renningen",
"Rerik",
"Rethem (Aller)",
"Reutlingen",
"Rheda-Wiedenbrück",
"Rhede",
"Rheinau",
"Rheinbach",
"Rheinberg",
"Rheinböllen",
"Rheine",
"Rheinfelden (Baden)",
"Rheinsberg",
"Rheinstetten",
"Rhens",
"Rhinow",
"Rhön-Grabfeld",
"Ribnitz-Damgarten",
"Richtenberg",
"Riedenburg",
"Riedlingen",
"Riedstadt",
"Rieneck",
"Riesa",
"Riesa-Großenhain",
"Rietberg",
"Rinteln",
"Rochlitz",
"Rockenhausen",
"Rodalben",
"Rodenberg",
"Rodewisch",
"Rodgau",
"Roding",
"Romrod",
"Ronneburg",
"Ronnenberg",
"Rosbach vor der Höhe",
"Rosenfeld",
"Rosenheim",
"Rosenthal",
"Rostock",
"Rotenburg (Wümme)",
"Rotenburg an der Fulda",
"Roth",
"Rothenburg Ob Der Tauber",
"Rothenburg/O.L.",
"Rothenfels",
"Rottal-Inn",
"Rottenburg A.D.Laaber",
"Rottenburg am Neckar",
"Rottweil",
"Roßleben",
"Roßwein",
"Rudolstadt",
"Ruhla",
"Ruhland",
"Runkel",
"Rutesheim",
"Röbel/Müritz",
"Rödental",
"Rödermark",
"Römhild",
"Rösrath",
"Rötha",
"Röthenbach an der Pegnitz",
"Röttingen",
"Rötz",
"Rüdesheim am Rhein",
"Rügen",
"Rüsselsheim am Main",
"Rüthen",
"Saalburg-Ebersdorf",
"Saalfeld-Rudolstadt",
"Saalfeld/Saale",
"Saarbrücken",
"Saarburg",
"Saarlouis",
"Sachsenhagen",
"Sachsenheim",
"Salzgitter",
"Salzkotten",
"Salzland",
"Salzwedel",
"Sandau (Elbe)",
"Sandersdorf-Brehna",
"Sangerhausen",
"Sankt Augustin",
"Sankt Goar",
"Sankt Goarshausen",
"Sankt Wendel",
"Sarstedt",
"Sassenberg",
"Sassnitz",
"Sayda",
"Schalkau",
"Schauenstein",
"Schaumburg",
"Scheer",
"Scheibenberg",
"Scheinfeld",
"Schelklingen",
"Schenefeld",
"Scheßlitz",
"Schieder-Schwalenberg",
"Schierbrok",
"Schifferstadt",
"Schillingsfürst",
"Schiltach",
"Schirgiswalde-Kirschau",
"Schkeuditz",
"Schkölen",
"Schleiden",
"Schleiz",
"Schleswig",
"Schleswig-Flensburg",
"Schlettau",
"Schleusingen",
"Schlieben",
"Schlitz",
"Schlotheim",
"Schloß Holte-Stukenbrock",
"Schlüchtern",
"Schlüsselfeld",
"Schmalkalden",
"Schmalkalden-Meiningen",
"Schmallenberg",
"Schmölln",
"Schnackenburg",
"Schnaittenbach",
"Schneeberg",
"Schneverdingen",
"Schongau",
"Schopfheim",
"Schorndorf",
"Schortens",
"Schotten",
"Schramberg",
"Schraplau",
"Schriesheim",
"Schrobenhausen",
"Schrozberg",
"Schwaan",
"Schwabach",
"Schwabmünchen",
"Schwaigern",
"Schwalbach am Taunus",
"Schwalmstadt",
"Schwandorf",
"Schwanebeck",
"Schwarzenbach am Wald",
"Schwarzenbach an der Saale",
"Schwarzenbek",
"Schwarzenberg/Erzgeb.",
"Schwarzenborn",
"Schwarzheide",
"Schwedt/Oder",
"Schweich",
"Schweinfurt",
"Schwelm",
"Schwentinental",
"Schwerin",
"Schwerte",
"Schwetzingen",
"Schwäbisch Gmünd",
"Schwäbisch Hall",
"Schömberg",
"Schönau",
"Schönau im Schwarzwald",
"Schönberg",
"Schönebeck (Elbe)",
"Schöneck/Vogtl.",
"Schönewalde",
"Schöningen",
"Schönsee",
"Schönwald",
"Schöppenstedt",
"Schüttorf",
"Sebnitz",
"Seehausen (Altmark)",
"Seeland",
"Seelow",
"Seelze",
"Seesen",
"Segeberg",
"Sehnde",
"Seifhennersdorf",
"Selb",
"Selbitz",
"Seligenstadt",
"Selm",
"Selters (Westerwald)",
"Senden",
"Sendenhorst",
"Senftenberg",
"Seßlach",
"Siegburg",
"Siegen",
"Siegen-Wittgenstein",
"Sigmaringen",
"Simbach am Inn",
"Simmern/Hunsrück",
"Sindelfingen",
"Singen (Hohentwiel)",
"Sinsheim",
"Sinzig",
"Soest",
"Solingen",
"Solms",
"Soltau",
"Soltau-Fallingbostel",
"Sondershausen",
"Sonneberg",
"Sonnewalde",
"Sonthofen",
"Sontra",
"Spaichingen",
"Spalt",
"Spangenberg",
"Speicher (Eifel)",
"Spenge",
"Speyer",
"Spree-Neiße",
"Spremberg",
"Springe",
"Sprockhövel",
"St. Blasien",
"St. Georgen im Schwarzwald",
"St. Ingbert",
"St. Wendel",
"Stade",
"Stadt Wehlen",
"Stadtallendorf",
"Stadtbergen",
"Stadthagen",
"Stadtilm",
"Stadtlengsfeld",
"Stadtlohn",
"Stadtoldendorf",
"Stadtprozelten",
"Stadtroda",
"Stadtsteinach",
"Starnberg",
"Staufen im Breisgau",
"Staufenberg",
"Stavenhagen",
"Staßfurt",
"Stein",
"Steinach",
"Steinau an der Straße",
"Steinbach (Taunus)",
"Steinbach-Hallenberg",
"Steinburg",
"Steinfurt",
"Steinheim",
"Steinheim an der Murr",
"Stendal",
"Sternberg",
"Stockach",
"Stolberg (Rheinland)",
"Stollberg",
"Stollberg/Erzgeb.",
"Stolpen",
"Storkow (Mark)",
"Stormarn",
"Straelen",
"Stralsund",
"Strasburg (Uckermark)",
"Straubing",
"Straubing-Bogen",
"Strausberg",
"Strehla",
"Stromberg",
"Stutensee",
"Stuttgart",
"Stößen",
"Stühlingen",
"Suhl",
"Sulingen",
"Sulz am Neckar",
"Sulzbach-Rosenberg",
"Sulzbach/Saar",
"Sulzburg",
"Sundern (Sauerland)",
"Syke",
"Sächsische Schweiz",
"Sömmerda",
"Südliche Weinstraße",
"Südliches Anhalt",
"Südwestpfalz",
"Süßen",
"Tambach-Dietharz",
"Tangerhütte",
"Tangermünde",
"Tann (Rhön)",
"Tanna",
"Tauberbischofsheim",
"Taucha",
"Taunusstein",
"Tecklenburg",
"Tegernsee",
"Telgte",
"Teltow",
"Teltow-Fläming",
"Templin",
"Tengen",
"Tessin",
"Teterow",
"Tettnang",
"Teublitz",
"Teuchern",
"Teupitz",
"Teuschnitz",
"Thale",
"Thalheim/Erzgeb.",
"Thannhausen",
"Tharandt",
"Themar",
"Thum",
"Tirschenreuth",
"Titisee-Neustadt",
"Tittmoning",
"Todtnau",
"Torgau",
"Torgau-Oschatz",
"Torgelow",
"Tornesch",
"Traben-Trarbach",
"Traunreut",
"Traunstein",
"Trebbin",
"Trebsen/Mulde",
"Treffurt",
"Trendelburg",
"Treuchtlingen",
"Treuen",
"Treuenbrietzen",
"Triberg im Schwarzwald",
"Tribsees",
"Trier",
"Trier-Saarburg",
"Triptis",
"Trochtelfingen",
"Troisdorf",
"Trossingen",
"Trostberg",
"Tuttlingen",
"Twistringen",
"Töging am Inn",
"Tönisvorst",
"Tönning",
"Tübingen",
"Uckermark",
"Uebigau-Wahrenbrück",
"Uecker-Randow",
"Ueckermünde",
"Uelzen",
"Uetersen",
"Uffenheim",
"Uhingen",
"Ulm",
"Ulmen",
"Ulrichstein",
"Ummerstadt",
"Unkel",
"Unna",
"Unterallgäu",
"Unterschleißheim",
"Usedom",
"Usingen",
"Uslar",
"Vacha",
"Vaihingen an der Enz",
"Vallendar",
"Varel",
"Vechta",
"Velbert",
"Velburg",
"Velden",
"Velen",
"Vellberg",
"Vellmar",
"Velten",
"Verden",
"Verden (Aller)",
"Veringenstadt",
"Verl",
"Versmold",
"Vetschau/Spreewald",
"Viechtach",
"Viernheim",
"Viersen",
"Villingen-Schwenningen",
"Vilsbiburg",
"Vilseck",
"Vilshofen an der Donau",
"Visselhövede",
"Vlotho",
"Voerde (Niederrhein)",
"Vogtsburg im Kaiserstuhl",
"Vohburg an der Donau",
"Vohenstrauß",
"Volkach",
"Volkmarsen",
"Vreden",
"Vöhrenbach",
"Vöhringen",
"Völklingen",
"Wachenheim an der Weinstraße",
"Wadern",
"Waghäusel",
"Wahlstedt",
"Waiblingen",
"Waibstadt",
"Waischenfeld",
"Waldbröl",
"Waldeck",
"Waldeck-Frankenberg",
"Waldenbuch",
"Waldenburg",
"Waldershof",
"Waldheim",
"Waldkappel",
"Waldkirch",
"Waldkirchen",
"Waldkraiburg",
"Waldmünchen",
"Waldsassen",
"Waldshut",
"Waldshut-Tiengen",
"Walldorf",
"Walldürn",
"Wallenfels",
"Walsrode",
"Waltershausen",
"Waltrop",
"Wanfried",
"Wangen im Allgäu",
"Wanzleben-Börde",
"Warburg",
"Waren (Müritz)",
"Warendorf",
"Warin",
"Warstein",
"Wassenberg",
"Wasserburg am Inn",
"Wassertrüdingen",
"Wasungen",
"Wedel",
"Weener",
"Wegberg",
"Wegeleben",
"Wehr",
"Weida",
"Weiden I.D.Opf.",
"Weiden in der Oberpfalz",
"Weikersheim",
"Weil am Rhein",
"Weil Der Stadt",
"Weilburg",
"Weilheim an der Teck",
"Weilheim In Oberbayern",
"Weilheim-Schongau",
"Weimar",
"Weimarer Land",
"Weingarten",
"Weinheim",
"Weinsberg",
"Weinstadt",
"Weismain",
"Weiterstadt",
"Weißenberg",
"Weißenburg In Bayern",
"Weißenburg-Gunzenhausen",
"Weißenfels",
"Weißenhorn",
"Weißensee",
"Weißenstadt",
"Weißenthurm",
"Weißwasser/O.L.",
"Welzheim",
"Welzow",
"Wemding",
"Wendlingen am Neckar",
"Werben (Elbe)",
"Werdau",
"Werder (Havel)",
"Werdohl",
"Werl",
"Werlte",
"Wermelskirchen",
"Wernau (Neckar)",
"Werne",
"Werneuchen",
"Wernigerode",
"Wertheim",
"Werther (Westf.)",
"Wertingen",
"Wesel",
"Wesenberg",
"Wesermarsch",
"Wesselburen",
"Wesseling",
"Westerburg",
"Westerstede",
"Wetter",
"Wetter (Ruhr)",
"Wettin-Löbejün",
"Wetzlar",
"Widdern",
"Wiehe",
"Wiehl",
"Wiesbaden",
"Wiesensteig",
"Wiesloch",
"Wiesmoor",
"Wildau",
"Wildberg",
"Wildenfels",
"Wildeshausen",
"Wilhelmshaven",
"Wilkau-Haßlau",
"Willebadessen",
"Willich",
"Wilsdruff",
"Wilster",
"Wilthen",
"Windischeschenbach",
"Windsbach",
"Winnenden",
"Winsen (Luhe)",
"Winterberg",
"Wipperfürth",
"Wirges",
"Wismar",
"Wissen",
"Witten",
"Wittenberg",
"Wittenberge",
"Wittenburg",
"Wittichenau",
"Wittingen",
"Wittlich",
"Wittmund",
"Wittstock/Dosse",
"Witzenhausen",
"Woldegk",
"Wolfach",
"Wolfenbüttel",
"Wolfhagen",
"Wolframs-Eschenbach",
"Wolfratshausen",
"Wolfsburg",
"Wolfstein",
"Wolgast",
"Wolkenstein",
"Wolmirstedt",
"Worms",
"Wriezen",
"Wunsiedel",
"Wunsiedel I. Fichtelgebirge",
"Wunstorf",
"Wuppertal",
"Wurzbach",
"Wurzen",
"Wustrow (Wendland)",
"Wyk Auf Föhr",
"Wächtersbach",
"Wörrstadt",
"Wörth am Main",
"Wörth am Rhein",
"Wörth an der Donau",
"Wülfrath",
"Würselen",
"Würzburg",
"Xanten",
"Zahna-Elster",
"Zarrentin am Schaalsee",
"Zehdenick",
"Zeil am Main",
"Zeitz",
"Zell (Mosel)",
"Zell am Harmersbach",
"Zell im Wiesental",
"Zella-Mehlis",
"Zerbst/Anhalt",
"Zeulenroda-Triebes",
"Zeven",
"Ziegenrück",
"Zierenberg",
"Ziesar",
"Zirndorf",
"Zittau",
"Zossen",
"Zschopau",
"Zweibrücken",
"Zwenkau",
"Zwickau",
"Zwickauer Land",
"Zwiesel",
"Zwingenberg",
"Zwönitz",
"Zörbig",
"Zülpich",
"Öhringen",
"Östringen",
"Übach-Palenberg",
"Überlingen",
]

export default citys