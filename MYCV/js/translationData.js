

function create(){
             db.transaction(function(transaction){
         var ENG="CREATE TABLE IF NOT EXISTS EN(ID VARCHAR(255)  PRIMARY KEY UNIQUE, TEXT VARCHAR(10000))"
        var FR="CREATE TABLE IF NOT EXISTS FR"+
        "(Id VARCHAR(255)  PRIMARY KEY UNIQUE,"+
        "TextId VARCHAR(10000));";
        var ESP="CREATE TABLE IF NOT EXISTS ES"+
        "(Id VARCHAR(255)  PRIMARY KEY UNIQUE,"+
        "TextId VARCHAR(10000))";
        var GER="CREATE TABLE IF NOT EXISTS DE"+
        "(Id VARCHAR(255)  PRIMARY KEY UNIQUE,"+
        "TextId VARCHAR(10000))";
        transaction.executeSql(ENG,undefined)
        transaction.executeSql(FR,undefined)
        transaction.executeSql(ESP,undefined)
        transaction.executeSql(GER,undefined)
    });
    }










function execute()
{
    create();
    db.transaction(function(transaction){
var ENDATA=`INSERT INTO EN (ID,TEXT) VALUES("desc","A web and mobile developer with java, flutter, react native program languages."),
("EXP","EXPERIENCE"),("EXP1", "BLUE TRACK YOUR BIRDS"),("TITLE", "ANDROID APPLICATION"), ("TOPIC","The topic of this application is : Resolve the problems of canaries and goldfinch Problems like Diseases, Foods, Breeding. Also, solve farmers' breeding handwriting."), ("DATE", "Aug. 2021 https://play.google.com/store/apps/details?id=com.blue.blueapp&gl=MA"),
("EXP2","FANARTISTE"),("TITLE2","ECM FRONTEND WEBSITE"),("TOPIC2","A prototype web wich helps an events' society to reserve, track and buy Tickets ."),("DATE2","Jun. 2021 https://github.com/MOUSSAOUIMed/PFE_FrontEnd/tree/master"),
("EDU","EDUCATION"),("TITLEE","LA PLACE HIGH SCHOOL"),("DESCR0","baccalaureate OF SCIENCE"),("DATEE","Jul. 2018"),("TITLEE2","OFPPT TRAINING"),("DESCR2","INFORMATIQUE DEVELOPEMENT"),("DATEE2","Sept. 2018 - Sept. 2020"),("TITLEE3","'SUP MTI' UNIVERSITY"),("DESCR3","INFORMATIQUE BACHELOR"),("DATEE3","Sept. 2020 - Dec. 2021"),("TITLEE4","OFPPT TRAINING"),("DESCR4","MICROSOFT OFFICE CERTIFICATION"),("DATEE4","Sept. 2021 - Jan. 2021"),
("SKILL","SKILLS"),("TITLES","PROGRAMMING LANGUAGES & TOOLS"),("WF","WORKFLOW"),("WF1","Mobile-First, Responsive Design"),("WF2","Cross Browser Testing & Debugging"),("WF3","Cross Functional Teams"),("WF4","Agile Development & Scrum"),("WF5","Master in Microsoft Office"),
("INTEREST","INTERESTS"),("PR1","Apart from being a web developer, I enjoy most of my time being outdoors. I am a Volley-Ball and FootBall player. I enjoy mountain walking."),("PR2","When forced indoors, I play games , my favorite game is Minecraft , and I spend a large amount of my free time exploring the latest technology advancements in web and android development world."),("PR3","Being a world problem solver."),
("TROPHEE","AWARDS & CERTIFICATIONS"),("TR1","CISCO IPV4_IPV6 CERTIFICATION"),("TR2","CISCO IOT CERTIFICATION 'INTRODUCTION/FUNDAMENTALS'"),("TR3","SOLO LEARN HTML CERTIFICATION"),("TR4","SOLO LEARN CSS CERTIFICATION"),("TR5","SOLO LEARN PYTHON CERTIFICATION"),("TR6","SOLO LEARN RESPONSIVE WEB CERTIFICATION"),("TR7","SOLO LEARN JAVASCRIPT CERTIFICATION"),("TR8","SOLO LEARN SQL CERTIFICATION");`;


var FRDATA=`INSERT INTO FR (Id,TextId) VALUES("desc","Un développeur Web et mobile avec Java, Flutter, React natifs."),
("EXP","EXPERIENCE"),("EXP1", "BLUE TRACK YOUR BIRDS"),("TITLE", "ANDROID APPLICATION"), ("TOPIC","Le sujet de cette application est : Résoudre les problèmes de canaris et de chardonnerets Problèmes comme les maladies, les aliments, l'élevage. Résolvez également l'écriture manuscrite d'élevage des agriculteurs."), ("DATE", "Aout. 2021 https://play.google.com/store/apps/details?id=com.blue.blueapp&gl=MA"),
("EXP2","FANARTISTE"),("TITLE2","ECM FRONTEND WEBSITE"),("TOPIC2","Un prototype web qui aide une société événementielle à réserver, suivre et acheter des Billets."),("DATE2","Juin. 2021 https://github.com/MOUSSAOUIMed/PFE_FrontEnd/tree/master"),
("EDU","EDUCATION"),("TITLEE","LA PLACE LYCÉE"),("DESCR0","baccalauréat SCIENTIFIQUE"),("DATEE","Juil. 2018"),("TITLEE2","OFPPT FORMATION PROFESSIONNELLE"),("DESCR2","DEVELLOPEMENT INFORMATIQUE"),("DATEE2","Sept. 2018 - Sept. 2020"),("TITLEE3","'SUP MTI' UNIVERSITE"),("DESCR3","LISSENCE INFORMATIQUE"),("DATEE3","Sept. 2020 - Dec. 2021"),("TITLEE4","OFPPT FORMATION PROFESSIONNELLE"),("DESCR4","CERTIFICATION MICROSOFT OFFICE "),("DATEE4","Sept. 2021 - Jan. 2021"),
("SKILL","COMPÉTENCES"),("TITLES","LANGUES ET OUTILS DE PROGRAMMATION"),("WF","FLUX DE TRAVAIL"),("WF1","Mobile-First, Responsive Design"),("WF2","Cross Browser Testing & Debugging"),("WF3","Cross Functional Teams"),("WF4","Agile Development & Scrum"),("WF5","Master en Microsoft Office"),
("INTEREST","INTERETS"),("PR1","En plus d'être développeur Web, j'aime passer la plupart de mon temps à l'extérieur. Je suis un joueur de Volley-Ball et de FootBall. J'aime marcher en montagne."),("PR2","Lorsque je suis forcé à l'intérieur, je joue à des jeux, mon jeu préféré est Minecraft et je passe une grande partie de mon temps libre à explorer les dernières avancées technologiques dans le monde du développement Web et Android."),("PR3","Être un résolveur de problèmes mondiaux."),
("TROPHEE","CERTIFICATIONS"),("TR1","CERTIFICATION CISCO IPV4_IPV6 "),("TR2","CERTIFICATION CISCO IOT  'INTRODUCTION/FUNDAMENTALS'"),("TR3","CERTIFICATION SOLO LEARN HTML "),("TR4","CERTIFICATION SOLO LEARN CSS "),("TR5","CERTIFICATION SOLO LEARN PYTHON "),("TR6","CERTIFICATION SOLO LEARN RESPONSIVE WEB "),("TR7","CERTIFICATION SOLO LEARN JAVASCRIPT "),("TR8","CERTIFICATION SOLO LEARN SQL ");`;




//Use Google Chrome too see translation If takes error in Microsoft Edge browser

var DEDATA=`INSERT INTO DE (Id,TextId) VALUES("desc","Ein Web und Mobile-Entwickler mit Java, Flutter, React native Programmiersprachen."),
("EXP","ERFAHRUNG"),("EXP1", "BLUE TRACK YOUR BIRDS"),("TITLE", "ANDROID APPLICATION"), ("TOPIC","Das Thema dieser Anwendung ist: Lösen Sie die Probleme von Kanarienvögeln und Stieglitz Probleme wie Krankheiten, Lebensmittel, Zucht. Lösen Sie auch die Zuchthandschrift der Bauern."), ("DATE", "Aug. 2021 https://play.google.com/store/apps/details?id=com.blue.blueapp&gl=MA"),
("EXP2","FANARTISTE"),("TITLE2","ECM FRONTEND WEBSITE"),("TOPIC2","Ein Prototyp-Web, das einer Veranstaltungsgesellschaft hilft, Tickets zu reservieren, zu verfolgen und zu kaufen."),("DATE2","Jun. 2021 https://github.com/MOUSSAOUIMed/PFE_FrontEnd/tree/master"),
("EDU","BILDUNG"),("TITLEE","LA PLACE HOCH SCHUL"),("DESCR0","Bakkalaureat DER WISSENSCHAFTEN"),("DATEE","Jul. 2018"),("TITLEE2","OFPPT AUSBILDUNGEN"),("DESCR2","INFORMATISCHE ENTWICKLUNG"),("DATEE2","Sept. 2018 - Sept. 2020"),("TITLEE3","'SUP MTI' UNIVESRITÄT"),("DESCR3","INFORMATIK BACHELOR"),("DATEE3","Sept. 2020 - Dec. 2021"),("TITLEE4","OFPPT AUSBILDUNGEN"),("DESCR4","MICROSOFT OFFICE CERTIFIKAT"),("DATEE4","Sept. 2021 - Jan. 2021"),
("SKILL","FÄHIGKEITEN"),("TITLES","SPRACHEN UND TOOLS PROGRAMMIEREN"),("WF","ARBEITSABLAUF"),("WF1","Mobile-First, Responsive Design"),("WF2","Cross Browser Testing & Debugging"),("WF3","Cross Functional Teams"),("WF4","Agile Development & Scrum"),("WF5","Master in Microsoft Office"),
("INTEREST","INTERESSEN"),("PR1","Abgesehen davon, dass ich Webentwickler bin, bin ich die meiste Zeit im Freien. Ich bin Volleyball- und Fußballspieler. Ich genieße Bergwanderungen."),("PR2","Wenn ich drinnen gezwungen werde, spiele ich Spiele, mein Lieblingsspiel ist Minecraft, und ich verbringe einen großen Teil meiner Freizeit damit, die neuesten technologischen Fortschritte in der Web- und Android-Entwicklungswelt zu erkunden."),("PR3","Ein Weltproblemlöser sein."),
("TROPHEE","AUSZEICHNUNGEN & ZERTIFIZIERUNGEN"),("TR1","CISCO IPV4_IPV6 CERTIFIkATION"),("TR2","CISCO IOT CERTIFIKATION 'INTRODUKTION/FUNDAMENTALS'"),("TR3","SOLO LEARN HTML CERTIFIKATION"),("TR4","SOLO LEARN CSS CERTIFIKATION"),("TR5","SOLO LEARN PYTHON CERTIFIKATION"),("TR6","SOLO LEARN RESPONSIVE WEB CERTIFIKATION"),("TR7","SOLO LEARN JAVASCRIPT CERTIFIKATION"),("TR8","SOLO LEARN SQL CERTIFIKATION");`;



//Use Microsoft Edge To see translation If takes error in Google Chrome

var ESDATA=`INSERT INTO ES (Id,TextId) VALUES("desc","Un desarrollador web y móvil con java, flutter, react native lenguajes de programación."),
("EXP","EXPERIENCE"),("EXP1", "BLUE TRACK YOUR BIRDS"),("TITLE", "ANDROID APPLICATION"), ("TOPIC","El tema de esta aplicación es: Resolver los problemas de canarios y jilgueros Problemas como Enfermedades, Alimentos, Cría. Además, resuelva la escritura a mano de cría de los agricultores."), ("DATE", "Aug. 2021 https://play.google.com/store/apps/details?id=com.blue.blueapp&gl=MA"),
("EXP2","FANARTISTE"),("TITLE2","ECM FRONTEND WEBSITE"),("TOPIC2","Prototipo de web que ayuda a una sociedad de eventos a reservar, seguir y comprar Entradas."),("DATE2","Jun. 2021 https://github.com/MOUSSAOUIMed/PFE_FrontEnd/tree/master"),
("EDU","EDUCACIÓN"),("TITLEE","LA PLACE ESCUELA SECUNDARIA"),("DESCR0","bachillerato EN CIENCIAS"),("DATEE","Jul. 2018"),("TITLEE2","OFPPT CAPACITACIÓN"),("DESCR2","DESARROLLO INFORMÁTICO"),("DATEE2","Sept. 2018 - Sept. 2020"),("TITLEE3","'SUP MTI' UNIVERSIDAD"),("DESCR3","BACHILLERATO EN INFORMÁTICA"),("DATEE3","Sept. 2020 - Dec. 2021"),("TITLEE4","OFPPT CAPACITACIÓN"),("DESCR4","MICROSOFT OFFICE CERTIFICACIÓN"),("DATEE4","Sept. 2021 - Jan. 2021"),
("SKILL","HABILIDADES"),("TITLES","LENGUAJES Y HERRAMIENTAS DE PROGRAMACIÓN"),("WF","WORKFLOW"),("WF1","Mobile-First, Responsive Design"),("WF2","Cross Browser Testing & Debugging"),("WF3","Cross Functional Teams"),("WF4","Agile Development & Scrum"),("WF5","Máster en Microsoft Office"),
("INTEREST","INTERESES"),("PR1","Aparte de ser un desarrollador web, disfruto la mayor parte de mi tiempo al aire libre. Soy jugadora de Voley-Ball y FootBall. Me gusta caminar por la montaña."),("PR2","Cuando me obligan a estar adentro, juego juegos, mi juego favorito es Minecraft, y paso una gran parte de mi tiempo libre explorando los últimos avances tecnológicos en el mundo del desarrollo web y Android."),("PR3","Ser un solucionador de problemas del mundo."),
("TROPHEE","PREMIOS Y CERTIFICACIONES"),("TR1","CISCO IPV4_IPV6 CERTIFICACIÓN"),("TR2","CISCO IOT CERTIFICACIÓN 'INTRODUCTION/FUNDAMENTALS'"),("TR3","SOLO LEARN HTML CERTIFICACIÓN"),("TR4","SOLO LEARN CSS CERTIFICACIÓN"),("TR5","SOLO LEARN PYTHON CERTIFICACIÓN"),("TR6","SOLO LEARN RESPONSIVE WEB CERTIFICACIÓN"),("TR7","SOLO LEARN JAVASCRIPT CERTIFICACIÓN"),("TR8","SOLO LEARN SQL CERTIFICACIÓN");`;






transaction.executeSql(DEDATA,undefined);
transaction.executeSql(ENDATA,undefined);
transaction.executeSql(FRDATA,undefined);
transaction.executeSql(ESDATA,undefined);
});

TranslateToEN();
}



//===============================================================================================================================================================================================================================================================================================


function TranslateToEN()

{
db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'desc'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#desc').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'EXP'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#Experience').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TOPIC'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#topic').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TOPIC2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#topic2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'EDU'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#edu').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TITLEE'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#titlee').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'DESCR0'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#descr0').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql( `select Text from EN where Id = 'TITLEE2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#titlee2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'DESCR2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#descr2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TITLEE3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#titlee3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'DESCR3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#descr3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TITLEE4'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#title4').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'DESCR4'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#descr4').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'SKILL'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#skill').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});
db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TITLES'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#titles').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'WF'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#wf').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'INTEREST'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#interest').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'PR1'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#pr1').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'PR2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#pr2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'PR3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#pr3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TROPHEE'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#trophee').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TR1'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#tr1').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TR2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#tr2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});




db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TR3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#tr3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});




db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TR4'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#tr4').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TR5'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#tr5').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TR6'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#tr6').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TR7'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#tr7').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});




db.transaction(function(transaction){
   transaction.executeSql(`select Text from EN where Id = 'TR8'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TEXT; 
                  document.querySelector('#tr8').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

}


//=====================================================================================================================================================================


function TranslateToFR()

{
db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'desc'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#desc').innerHTML =   msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'EXP'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#Experience').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TOPIC'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#topic').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TOPIC2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#topic2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'EDU'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#edu').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TITLEE'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#titlee').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'DESCR0'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#descr0').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql( `select TextId from FR where Id = 'TITLEE2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#titlee2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id= 'DESCR2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#descr2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TITLEE3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#titlee3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'DESCR3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#descr3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TITLEE4'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#title4').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'DESCR4'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#descr4').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'SKILL'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#skill').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});
db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TITLES'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#titles').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'WF'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#wf').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'INTEREST'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#interest').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'PR1'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#pr1').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'PR2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#pr2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'PR3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#pr3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TROPHEE'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#trophee').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TR1'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr1').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TR2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});




db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TR3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});




db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TR4'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr4').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TR5'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr5').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TR6'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr6').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TR7'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr7').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});




db.transaction(function(transaction){
   transaction.executeSql(`select TextId from FR where Id = 'TR8'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr8').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

}
//==============================================================================================================================================================================================================================================
function TranslateToDE()

{
db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'desc'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#desc').innerHTML =   msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'EXP'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#Experience').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TOPIC'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#topic').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TOPIC2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#topic2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'EDU'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#edu').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TITLEE'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#titlee').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'DESCR0'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#descr0').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql( `select TextId from DE where Id = 'TITLEE2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#titlee2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id= 'DESCR2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#descr2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TITLEE3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#titlee3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'DESCR3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#descr3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TITLEE4'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#title4').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'DESCR4'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#descr4').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'SKILL'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#skill').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});
db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TITLES'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#titles').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'WF'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#wf').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'INTEREST'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#interest').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'PR1'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#pr1').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'PR2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#pr2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'PR3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#pr3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TROPHEE'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#trophee').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TR1'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr1').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TR2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});




db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TR3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});




db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TR4'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr4').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TR5'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr5').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TR6'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr6').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TR7'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr7').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});




db.transaction(function(transaction){
   transaction.executeSql(`select TextId from DE where Id = 'TR8'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr8').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

}
    


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++








function TranslateToES()

{
db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'desc'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#desc').innerHTML =   msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'EXP'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#Experience').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TOPIC'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#topic').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TOPIC2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#topic2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'EDU'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#edu').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TITLEE'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#titlee').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'DESCR0'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#descr0').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql( `select TextId from ES where Id = 'TITLEE2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#titlee2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id= 'DESCR2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#descr2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TITLEE3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#titlee3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'DESCR3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#descr3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TITLEE4'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#title4').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'DESCR4'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#descr4').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'SKILL'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#skill').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});
db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TITLES'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#titles').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'WF'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#wf').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'INTEREST'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#interest').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'PR1'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#pr1').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'PR2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#pr2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'PR3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#pr3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TROPHEE'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#trophee').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TR1'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr1').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});


db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TR2'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr2').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});




db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TR3'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr3').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});




db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TR4'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr4').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TR5'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr5').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TR6'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr6').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});



db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TR7'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr7').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});




db.transaction(function(transaction){
   transaction.executeSql(`select TextId from ES where Id = 'TR8'`,[],function(transaction,result){
    for (var i = 0; i < result.rows.length; i++) { 
                  msg = result.rows.item(i).TextId; 
                  document.querySelector('#tr8').innerHTML =  msg; 
               } 
},function(transaction,err){
			alert(err.message);
		})
});

}