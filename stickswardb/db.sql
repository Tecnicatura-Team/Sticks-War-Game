create table usuario( 
userid integer auto_increment primary key,
usernivel integer not null,
userexp integer not null,
usernombre varchar(40) not null unique,
userpass varchar(40) not null,
estado enum('conectado', 'buscando partida', 'en partida', 'desconectado') default 'desconectado'
);

create table partida( 
partidaid integer auto_increment primary key,
partidafecha timestamp,
jugador1id integer not null,
jugador2id integer not null, 
ganadorid integer,
constraint jugador1 foreign key (jugador1id) references usuario (userid),
constraint jugador2 foreign key (jugador2id) references usuario (userid),
constraint ganador foreign key (ganadorid) references usuario (userid)
);

create table clase( 
claseid integer auto_increment primary key,
clasenombre varchar(40) not null unique,
direcimagen varchar(40) not null,
direiconoclas varchar(40) not null,
direiconoclas2 varchar(40) not null,
vidamaxima integer not null,
`precision` integer not null,
provevasion integer not null,
provcritico integer not null,
reddamage integer not null
);

create table buffdebuff( 
buffdebuffid integer auto_increment primary key,
buffdebufftipo enum('buff', 'debuff', 'mixto') not null,
vidaextra integer default 0,
maxacumulaciones integer,
`precision` integer default 0,
provevasion integer default 0,
provcritico integer default 0,
reddamage integer default 0,
moddamage integer default 0
);

create table posicion( 
posicionid integer auto_increment primary key,
buffdebuffid integer not null,
constraint bdposicion foreign key (buffdebuffid) references buffdebuff (buffdebuffid)
);

create table habilidad( 
habilidadid integer auto_increment primary key,
habilidadclase integer not null,
habilidadnombre varchar(40) not null,
direcicono varchar(40) not null,
direcimagen varchar(40) not null,
descripcion varchar(300) not null,
constraint habclase foreign key (habilidadclase) references clase (claseid)
);

create table objetivoshabilidad( 
habilidadid integer, 
posicionid integer,
primary key (habilidadid, posicionid),
constraint habobjetivo foreign key (habilidadid) references habilidad (habilidadid),
constraint posobjetivo foreign key (posicionid) references posicion (posicionid)
);

Create table buffdebuffhabilidad(
habilidadid integer,
buffdebuffid integer,
objetivo enum ('lanzador', 'enemigo', 'nosotros'),
primary key (habilidadid, buffdebuffid, objetivo),
constraint bdhabilidad foreign key (buffdebuffid) references buffdebuff (buffdebuffid),
constraint habilidadbd foreign key (habilidadid) references habilidad (habilidadid)
);

Create table danocuracionhabilidad(
habilidadid integer,
objetivo enum ('lanzador', 'enemigo', 'nosotros'),
minimo integer not null,
maximo integer not null,
primary key (habilidadid, objetivo),
constraint habilidaddc foreign key (habilidadid) references habilidad (habilidadid)
);

Create table tipoobjeto(
tipoobjetoid integer auto_increment primary key,
nombre varchar(20) not null,
calidad varchar(20) not null,
buffid integer,
direcimagen varchar(50) not null,
constraint buffid foreign key (buffid) references buffdebuff (buffdebuffid)
);

Create table objeto(
objetoid integer auto_increment primary key,
objetotipo integer not null,
objetopertenece integer not null,
constraint objtipo foreign key (objetotipo) references tipoobjeto (tipoobjetoid),
constraint objpertenece foreign key (objetopertenece) references usuario (userid)
);

create table personaje( 
personajeid integer auto_increment primary key,
personajeclase integer not null,
objetoid integer,
personajeposicion integer not null,
personajepertenece integer not null,
vidaactual integer not null,
constraint perclase foreign key (personajeclase) references clase (claseid),
constraint objetoequipa foreign key (objetoid) references objeto (objetoid),
constraint perposicion foreign key (personajeposicion) references posicion (posicionid),
constraint perpertenece foreign key (personajepertenece) references usuario (userid)
);

create table personajesufrebd (
personajeid integer,
buffdebuffid integer,
tiemporestante integer default 3,
acumulaciones integer default 1,
primary key (personajeid, buffdebuffid),
constraint bdsufre foreign key (buffdebuffid) references buffdebuff (buffdebuffid),
constraint personajesufre foreign key (personajeid) references personaje (personajeid)
);

Insert into buffdebuff (buffdebufftipo, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 0, 0, 0, 0, 0);
Insert into buffdebuff (buffdebufftipo, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 0, 0, 0, 5, 0);
Insert into buffdebuff (buffdebufftipo, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 0, 15, 0, 0, 0);
Insert into buffdebuff (buffdebufftipo, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 0, 0, 0, 5, 5);
Insert into buffdebuff (buffdebufftipo, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 10, 0, 0, 0, 5);
Insert into buffdebuff (buffdebufftipo, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 0, -5, 0, 20, 0);
Insert into buffdebuff (buffdebufftipo, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 15, 0, 0, 0, 10);
Insert into buffdebuff (buffdebufftipo, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 10, 0, 0, 10, 15);
Insert into buffdebuff (buffdebufftipo, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 0, 5, 0, 25, 0);


Insert into clase (clasenombre, direcimagen, direiconoclas, direiconoclas2, vidamaxima, `precision`, provevasion, provcritico, reddamage) values ('Paladin', 'img/clase/StickPaladin.png', 'img/iconoclase/Paladin.png', 'img/iconoclase/Paladin2.png', 1000, 70, 10, 15, 30);
Insert into clase (clasenombre, direcimagen, direiconoclas, direiconoclas2, vidamaxima, `precision`, provevasion, provcritico, reddamage) values ('Guerrero', 'img/clase/StickGuerrero.png', 'img/iconoclase/Guerrero.png', 'img/iconoclase/Guerrero2.png', 800, 80, 15, 15, 20);
Insert into clase (clasenombre, direcimagen, direiconoclas, direiconoclas2, vidamaxima, `precision`, provevasion, provcritico, reddamage) values ('Amazona', 'img/clase/StickAmazona.png', 'img/iconoclase/Amazona.png', 'img/iconoclase/Amazona2.png', 800, 80, 10, 20, 10);
Insert into clase (clasenombre, direcimagen, direiconoclas, direiconoclas2, vidamaxima, `precision`, provevasion, provcritico, reddamage) values ('Arquera', 'img/clase/StickArquera.png', 'img/iconoclase/Arquera.png', 'img/iconoclase/Arquera2.png', 800, 90, 20, 20, 5);
Insert into clase (clasenombre, direcimagen, direiconoclas, direiconoclas2, vidamaxima, `precision`, provevasion, provcritico, reddamage) values ('Sacerdotisa', 'img/clase/StickSacerdotisa.png', 'img/iconoclase/Sacerdotisa.png', 'img/iconoclase/Sacerdotisa2.png', 800, 70, 10, 10, 15);
Insert into clase (clasenombre, direcimagen, direiconoclas, direiconoclas2, vidamaxima, `precision`, provevasion, provcritico, reddamage) values ('Bufon', 'img/clase/StickBufon.png', 'img/iconoclase/Bufon.png', 'img/iconoclase/Bufon2.png', 750, 85, 35, 20, 5);


Insert into posicion (buffdebuffid) values (1);
Insert into posicion (buffdebuffid) values (2);
Insert into posicion (buffdebuffid) values (3);


Insert into tipoobjeto (nombre, calidad, buffid, direcimagen) values ('Sin Objeto', ' - - - - ', 1, 'img/objeto/sinObjeto.png');
Insert into tipoobjeto (nombre, calidad, buffid, direcimagen) values ('Hacha de Leñador', 'Mediocre', 4, 'img/objeto/hachaDeleñador.png');
Insert into tipoobjeto (nombre, calidad, buffid, direcimagen) values ('Arco Simple', 'Comun', 5, 'img/objeto/arcoSimple.png');
Insert into tipoobjeto (nombre, calidad, buffid, direcimagen) values ('Armadura Pesada', 'Comun', 6, 'img/objeto/armaduraPesada.png');
Insert into tipoobjeto (nombre, calidad, buffid, direcimagen) values ('Arco Largo', 'Buena', 7, 'img/objeto/arcoLargo.png');
Insert into tipoobjeto (nombre, calidad, buffid, direcimagen) values ('Arco Compuesto', 'raro', 8, 'img/objeto/arcoCompuesto.png');
Insert into tipoobjeto (nombre, calidad, buffid, direcimagen) values ('Armadura de mithril', 'raro', 9, 'img/objeto/armaduraDeMithril.png');


insert into usuario (usernivel, userexp, usernombre, userpass) values (10,  190, "Barba", "cristian");
insert into usuario (usernivel, userexp, usernombre, userpass) values (8,  170, "Sofelix", "santiago");
insert into usuario (usernivel, userexp, usernombre, userpass) values (11,  205, "Corbus", "claudio");


Insert into partida (jugador1id, jugador2id, ganadorid) values (1, 3, 3);
Insert into partida (jugador1id, jugador2id, ganadorid) values (2, 3, 3);
Insert into partida (jugador1id, jugador2id) values (1, 2);


Insert into objeto (objetotipo, objetopertenece) values (1, 1);
Insert into objeto (objetotipo, objetopertenece) values (2, 1);
Insert into objeto (objetotipo, objetopertenece) values (2, 1);
Insert into objeto (objetotipo, objetopertenece) values (4, 1);
Insert into objeto (objetotipo, objetopertenece) values (5, 1);


Insert into objeto (objetotipo, objetopertenece) values (1, 2);
Insert into objeto (objetotipo, objetopertenece) values (2, 2);
Insert into objeto (objetotipo, objetopertenece) values (4, 2);
Insert into objeto (objetotipo, objetopertenece) values (3, 2);
Insert into objeto (objetotipo, objetopertenece) values (3, 2);


Insert into objeto (objetotipo, objetopertenece) values (1, 3);
Insert into objeto (objetotipo, objetopertenece) values (2, 3);
Insert into objeto (objetotipo, objetopertenece) values (3, 3);
Insert into objeto (objetotipo, objetopertenece) values (4, 3);
Insert into objeto (objetotipo, objetopertenece) values (5, 3);
Insert into objeto (objetotipo, objetopertenece) values (5, 3);


Insert into personaje (personajeclase, objetoid, personajeposicion, personajepertenece, vidaactual) values (1, 4, 1, 1, 920);
Insert into personaje (personajeclase, objetoid, personajeposicion, personajepertenece, vidaactual) values (2, 6, 2, 1, 620);
Insert into personaje (personajeclase, objetoid, personajeposicion, personajepertenece, vidaactual) values (2, 5, 3, 1, 710);

Insert into personaje (personajeclase, objetoid, personajeposicion, personajepertenece, vidaactual) values (3, 10, 1, 2, 530);
Insert into personaje (personajeclase, objetoid, personajeposicion, personajepertenece, vidaactual) values (2, 11, 2, 2, 710);
Insert into personaje (personajeclase, objetoid, personajeposicion, personajepertenece, vidaactual) values (3, 9, 3, 2, 790);


Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (1, 'Golpe Potente', 'img/habilidadicono/paladin1.png', 'img/habilidadicono/paladin1.png', 'Causa entre 50 - 90 de daño a un enemigo en la posicion ( 1 - 2 )');
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (1, 'Plegaria a Dios', 'img/habilidadicono/paladin2.png', 'img/habilidadicono/paladin2.png', 'Te curas entre 20 - 60 puntos de vida y aumenta 5% de precisión y 10% de daño  (acumulable hasta 2 veces)');
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (1, 'Bajo la Bandera Santa', 'img/habilidadicono/paladin3.png', 'img/habilidadicono/paladin3.png', 'Aumenta un 5% la resistencia y un 5% de daño a todos los aliados (acumulable hasta 3 veces)');
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (1, 'Denunciar a los Infieles', 'img/habilidadicono/paladin4.png', 'img/habilidadicono/paladin4.png', 'Disminuye un 10% la evasión y un 15% el daño a un enemigo en la posición ( 1 - 2 - 3 ) (acumulable 1 sola vez)');


Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 4, 5, 0, 0, 0, 10);
Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 3, 0, 0, 0, 5, 5);
Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("debuff", 2, 0, -10, 0, 0, -15);


Insert into objetivoshabilidad (habilidadid, posicionid) values (1, 1);
Insert into objetivoshabilidad (habilidadid, posicionid) values (1, 2);
Insert into objetivoshabilidad (habilidadid, posicionid) values (4, 1);
Insert into objetivoshabilidad (habilidadid, posicionid) values (4, 2);
Insert into objetivoshabilidad (habilidadid, posicionid) values (4, 3);


Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (2, 10, "lanzador");
Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (3, 11, "nosotros");
Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (4, 12, "enemigo");


Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (1, "enemigo", -50, -90);
Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (2, "lanzador", 20, 60);

Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (2, 'Golpe Devastador', 'img/habilidadicono/guerrero1.png', 'img/habilidadicono/guerrero1.png', 'Causa entre 50 - 110 puntos de daño a un enemigo en la posición ( 1 - 2 )');
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (2, 'Golpe Demoledor', 'img/habilidadicono/guerrero2.png', 'img/habilidadicono/guerrero2.png', 'Causa entre 20 - 50 puntos de daño a un enemigo en la posición ( 1 - 2 ) y le disminuye un 5% la resistencia y un 10% el daño (acumulable hasta 2 veces)');
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (2, 'Grito de Guerra', 'img/habilidadicono/guerrero3.png', 'img/habilidadicono/guerrero3.png', 'Aumenta un 5% la precisión y 5% de daño a todos los aliados (acumulable hasta 3 veces)');
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (2, 'Intimidar Enemigo', 'img/habilidadicono/guerrero4.png', 'img/habilidadicono/guerrero4.png', 'Disminuye un 15% la precisión y 10% de daño a un enemigo en la posición ( 1 - 2 - 3 ) (acumulable 1 sola vez)');

Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("debuff", 3, 0, 0, 0, -5, -10);
Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 3, 5, 0, 0, 0, 5); 
Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("debuff", 2, -15, 0, 0, 0, -10);


Insert into objetivoshabilidad (habilidadid, posicionid) values (5, 1);
Insert into objetivoshabilidad (habilidadid, posicionid) values (5, 2);
Insert into objetivoshabilidad (habilidadid, posicionid) values (6, 1);
Insert into objetivoshabilidad (habilidadid, posicionid) values (6, 2);
Insert into objetivoshabilidad (habilidadid, posicionid) values (8, 1);
Insert into objetivoshabilidad (habilidadid, posicionid) values (8, 2);
Insert into objetivoshabilidad (habilidadid, posicionid) values (8, 3);


Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (6, 13, "enemigo");
Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (7, 14, "nosotros");
Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (8, 15, "enemigo");


Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (5, "enemigo", -50, -110);
Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (6, "enemigo", -20, -50);


Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (3, 'Arremetida Violenta', 'img/habilidadicono/amazona1.png', 'img/habilidadicono/Amazona1.png', 'Causa entre 80 - 180 puntos de daño a un enemigo en la posición ( 1 - 2 ) pero disminuye un 5% la precisión y  un 10% el daño a si misma (acumulable hasta 6 veces)');
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (3, 'Golpe Sanginario', 'img/habilidadicono/amazona2.png', 'img/habilidadicono/amazona2.png', 'Causa entre 40 - 80 puntos de daño a un enemigo en la posición ( 1 - 2 ) y te curas entre 10 - 30 puntos de vida');
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (3, 'Canalizar el Odio', 'img/habilidadicono/amazona3.png', 'img/habilidadicono/amazona3.png', 'Te curas entre 20 - 60 puntos de vida y aumenta un 5% la precisión y un 10% el daño a si mismo (acumulable hasta 4 veces)');
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (3, 'Mirada Asesina', 'img/habilidadicono/amazona4.png', 'img/habilidadicono/amazona4.png', 'Disminuye un 10% de precisión y un 15% de daño a un enemigo en la posición ( 1 - 2 - 3 ) (acumulable 1 sola vez)');


Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("debuff", 6, -5, 0, 0, 0, -10);
Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 4, 5, 0, 0, 0, 10);
Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("debuff", 2, -10, 0, 0, 0, -15);


Insert into objetivoshabilidad (habilidadid, posicionid) values (9, 1);
Insert into objetivoshabilidad (habilidadid, posicionid) values (9, 2);
Insert into objetivoshabilidad (habilidadid, posicionid) values (10, 1);
Insert into objetivoshabilidad (habilidadid, posicionid) values (10, 2);
Insert into objetivoshabilidad (habilidadid, posicionid) values (12, 1);
Insert into objetivoshabilidad (habilidadid, posicionid) values (12, 2);
Insert into objetivoshabilidad (habilidadid, posicionid) values (12, 3);


Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (9, 16, "lanzador");
Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (11, 17, "lanzador");
Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (12, 18, "enemigo");


Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (9, "enemigo", -80, -180);
Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (10, "enemigo", -40, -80);
Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (10, "lanzador", 10, 30);
Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (11, "lanzador", 20, 60);

Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (4, "Tiro a Quemarropa", "img/habilidadicono/arquera1.png", 'img/habilidadicono/arquera1.png', "Causa entre 60 - 120 de daño a un enemigo en la posicion ( 1 )");
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (4, "Tiro a la Pierna", "img/habilidadicono/arquera2.png", 'img/habilidadicono/arquera2.png', "Causa entre 20 - 70 de daño a un enemigo en la posicion ( 1 - 2 - 3 ) y disminuye 15% de evacion (acumulable hasta 3 veces)");
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (4, "Agudizar sentidos", "img/habilidadicono/arquera3.png", 'img/habilidadicono/arquera3.png', "Aumenta 15% de `precision` y 10% de daño a si misma (acumulable hasta 4 veces)");
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (4, "Tiro a la Cabeza", "img/habilidadicono/arquera4.png", 'img/habilidadicono/arquera4.png', "Causa entre 60 - 140 de daño a un enemigo en la posicion ( 2 - 3 ) pero se disminuye 10% de precicion a si misma (acumulable hasta 6 veces)");


Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("debuff", 3, 0, -15, 0, 0, 0);
Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 4, 15, 0, 0, 0, 10);
Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("debuff", 6, -10, 0, 0, 0, 0);

Insert into objetivoshabilidad (habilidadid, posicionid) values (13, 1);
Insert into objetivoshabilidad (habilidadid, posicionid) values (14, 1);
Insert into objetivoshabilidad (habilidadid, posicionid) values (14, 2);
Insert into objetivoshabilidad (habilidadid, posicionid) values (14, 3);
Insert into objetivoshabilidad (habilidadid, posicionid) values (16, 2);
Insert into objetivoshabilidad (habilidadid, posicionid) values (16, 3);


Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (14, 19, "enemigo");
Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (15, 20, "lanzador");
Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (16, 21, "lanzador");


Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (13, "enemigo", -60, -120);
Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (14, "enemigo", -20, -70);
Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (16, "enemigo", -80, -120);

Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (5, 'Curación Divina', 'img/habilidadicono/sacerdotisa1.png', 'img/habilidadicono/sacerdotisa1.png', 'Cura entre 10 - 40 puntos de vida todos los aliados');
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (5, 'Dios nos Guía', 'img/habilidadicono/sacerdotisa2.png', 'img/habilidadicono/sacerdotisa2.png', 'Aumenta un 5% de precisión y un 5% de daño a todos los aliados (acumulable hasta 3 veces)');
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (5, 'Dios es Nuestro Escudo', 'img/habilidadicono/sacerdotisa3.png', 'img/habilidadicono/sacerdotisa3.png', 'Aumenta un 5% de evasión y un 5% la resistencia de todos los aliados (acumulable hasta 3 veces)');
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (5, 'Castigo Divino', 'img/habilidadicono/sacerdotisa4.png', 'img/habilidadicono/sacerdotisa4.png', 'Causa entre 30 - 70 puntos de daño a un enemigo en la posición ( 1 - 2 - 3 ) y te curas entre 10 - 30 de vida');

Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("debuff", 3, 5, 0, 0, 0, 5);
Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 3, 0, 5, 0, 5, 0);

Insert into objetivoshabilidad (habilidadid, posicionid) values (20, 1);
Insert into objetivoshabilidad (habilidadid, posicionid) values (20, 2);
Insert into objetivoshabilidad (habilidadid, posicionid) values (20, 3);

Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (18, 22, "nosotros");
Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (19, 23, "nosotros");

Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (17, "nosotros", 10, 40);
Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (20, "enemigo", -30, -70);
Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (20, "lanzador", 10, 30);


Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (6, "Puñalada Trapera", "img/habilidadicono/Bufon1.png", "imagen/imagen/Bufon01.png", "Causa entre 60 - 90 puntos de daño a un enemigo en la posición ( 1 - 2 ) ");
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (6, "Melodia Alegre", "img/habilidadicono/Bufon2.png", "imagen/imagen/Bufon02.png", "Aumenta un 5% de precisión y un 5% de daño a todos los aliados (acumulable hasta 3 veces)");
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (6, "Melodia Jobial", "img/habilidadicono/Bufon3.png", "imagen/imagen/Bufon03.png", "Aumenta un 5% de precisión y un 5% de daño crítico a todos los aliados (acumulable hasta 3 veces)");
Insert into habilidad (habilidadclase, habilidadnombre, direcicono, direcimagen, descripcion) values (6, "Golpe Decisivo", "img/habilidadicono/Bufon4.png", "imagen/imagen/Bufon04.png", "Causa entre 120 - 200 puntos de daño a un enemigo en la posición ( 1 ) pero disminuye un 20% de daño a si mismo (acumulable hasta 4 veces)");


Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 3, 5, 0, 0, 0, 5);
Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("buff", 3, 0, 5, 0, 0, 5);
Insert into buffdebuff (buffdebufftipo, maxacumulaciones, `precision`, provevasion, provcritico, reddamage, moddamage) values ("debuff", 4, 0, 0, 0, 0, -20);


Insert into objetivoshabilidad (habilidadid, posicionid) values (21, 1);
Insert into objetivoshabilidad (habilidadid, posicionid) values (21, 2);
Insert into objetivoshabilidad (habilidadid, posicionid) values (24, 1);



Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (22, 24, "nosotros");
Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (23, 25, "nosotros");
Insert into buffdebuffhabilidad (habilidadid, buffdebuffid, objetivo) values (24, 26, "lanzador");



Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (21, "enemigo", -60, -90);
Insert into danocuracionhabilidad (habilidadid, objetivo, minimo, maximo) values (24, "enemigo", -120, -200);