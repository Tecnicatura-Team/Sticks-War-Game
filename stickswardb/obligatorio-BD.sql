
create view estadisticaspersonaje as
select p.personajeid as personajeid, c.vidamaxima as vidamaxima, c.precision as precisionn, c.provevasion as provevasion,c.provcritico as provcritico, c.reddamage as reddamage, 100 as moddamage from clase c, personaje p where p.personajeclase = c.claseid union
select p.personajeid, bd.vidaextra, bd.precision, bd.provevasion, bd.provcritico, bd.reddamage, bd.moddamage from buffdebuff as bd, tipoobjeto as tob, objeto as ob, personaje as p where tob.buffid = bd.buffdebuffid and tob.tipoobjetoid = ob.objetotipo and ob.objetoid = p.objetoid union
select pe.personajeid, bd.vidaextra, bd.precision, bd.provevasion, bd.provcritico, bd.reddamage, bd.moddamage from buffdebuff bd, posicion po, personaje pe where po.buffdebuffid = bd.buffdebuffid and po.posicionid = pe.personajeposicion  union
select p.personajeid, bd.vidaextra, bd.precision*s.acumulaciones, bd.provevasion*s.acumulaciones, bd.provcritico*s.acumulaciones, bd.reddamage*s.acumulaciones, bd.moddamage*s.acumulaciones from buffdebuff bd, personaje p, personajesufrebd s where
p.personajeid = s.personajeid and s.buffdebuffid = bd.buffdebuffid;


select personajeid, sum(vidamaxima), sum(precisionn), sum(provevasion), sum(provcritico), sum(reddamage), sum(moddamage) from estadisticaspersonaje group by personajeid;



