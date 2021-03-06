
create view estadisticaspersonaje as
select p.personajeid as personajeid, c.vidamaxima as vidamaxima, c.precision as precisionn, c.provevasion as provevasion,c.provcritico as provcritico, c.reddamage as reddamage, 100 as moddamage from clase c, personaje p where p.personajeclase = c.claseid union
select p.personajeid, bd.vidaextra, bd.precision, bd.provevasion, bd.provcritico, bd.reddamage, bd.moddamage from buffdebuff as bd, tipoobjeto as tob, objeto as ob, personaje as p where tob.buffid = bd.buffdebuffid and tob.tipoobjetoid = ob.objetotipo and ob.objetoid = p.objetoid union
select pe.personajeid, bd.vidaextra, bd.precision, bd.provevasion, bd.provcritico, bd.reddamage, bd.moddamage from buffdebuff bd, posicion po, personaje pe where po.buffdebuffid = bd.buffdebuffid and po.posicionid = pe.personajeposicion  union
select p.personajeid, bd.vidaextra, bd.precision*s.acumulaciones, bd.provevasion*s.acumulaciones, bd.provcritico*s.acumulaciones, bd.reddamage*s.acumulaciones, bd.moddamage*s.acumulaciones from buffdebuff bd, personaje p, personajesufrebd s where
p.personajeid = s.personajeid and s.buffdebuffid = bd.buffdebuffid;


select personajeid, sum(vidamaxima), sum(precisionn), sum(provevasion), sum(provcritico), sum(reddamage), sum(moddamage) from estadisticaspersonaje group by personajeid;


DELIMITER $$ 
create procedure agregarBDPersonaje(IN perID integer,IN bdID integer) 
BEGIN
IF EXISTS(select personajeid from personajesufrebd where personajeid = perID and buffdebuffid = bdID) 
THEN
IF EXISTS(SELECT acumulaciones FROM personajesufrebd WHERE personajeid = perID AND buffdebuffid = bdID AND acumulaciones IN (SELECT maxacumulaciones FROM buffdebuff WHERE buffdebuffid = bdID))
THEN
update personajesufrebd set tiemporestante = 3 where personajeid = perID and buffdebuffid = bdID;
ELSE
update personajesufrebd set tiemporestante = 3, acumulaciones = acumulaciones + 1 where personajeid = perID and buffdebuffid = bdID;
END IF;
ELSE
insert into personajesufrebd (personajeid, buffdebuffid) values (perID, bdID);
END IF;
END $$ 
DELIMITER ;;
DELIMITER $$ 
create procedure pasarturnopersonaje(IN perID integer) 
BEGIN

update personajesufrebd set tiemporestante = tiemporestante - 1 where personajeid = perID;

delete from personajesufrebd where personajeid = perID and tiemporestante = 0;

END $$ 
DELIMITER ;;
create trigger lol after INSERT on usuario for each row insert into objeto(objetotipo,objetopertenece) values(1,new.userid);