-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-11-2018 a las 23:26:29
-- Versión del servidor: 10.1.35-MariaDB
-- Versión de PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `stickswardb`
--
CREATE DATABASE IF NOT EXISTS `stickswardb` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `stickswardb`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buffdebuff`
--

DROP TABLE IF EXISTS `buffdebuff`;
CREATE TABLE IF NOT EXISTS `buffdebuff` (
  `buffdebuffid` int(11) NOT NULL AUTO_INCREMENT,
  `buffdebufftipo` enum('buff','debuff','mixto') COLLATE utf8_spanish_ci NOT NULL,
  `vidaextra` int(11) DEFAULT '0',
  `maxacumulaciones` int(11) DEFAULT NULL,
  `precision` int(11) DEFAULT '0',
  `provevasion` int(11) DEFAULT '0',
  `provcritico` int(11) DEFAULT '0',
  `reddamage` int(11) DEFAULT '0',
  `moddamage` int(11) DEFAULT '0',
  PRIMARY KEY (`buffdebuffid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `buffdebuff`
--

INSERT INTO `buffdebuff` (`buffdebuffid`, `buffdebufftipo`, `vidaextra`, `maxacumulaciones`, `precision`, `provevasion`, `provcritico`, `reddamage`, `moddamage`) VALUES
(1, 'buff', 0, NULL, 0, 0, 0, 0, 0),
(2, 'buff', 0, NULL, 0, 0, 0, 5, 0),
(3, 'buff', 0, NULL, 0, 15, 0, 0, 0),
(4, 'buff', 0, NULL, 0, 0, 0, 5, 5),
(5, 'buff', 0, NULL, 10, 0, 0, 0, 5),
(6, 'buff', 0, NULL, 0, -5, 0, 20, 0),
(7, 'buff', 0, NULL, 15, 0, 0, 0, 10),
(8, 'buff', 0, NULL, 10, 0, 0, 10, 15),
(9, 'buff', 0, NULL, 0, 5, 0, 25, 0),
(10, 'buff', 0, 4, 5, 0, 0, 0, 10),
(11, 'buff', 0, 3, 0, 0, 0, 5, 5),
(12, 'debuff', 0, 2, 0, -10, 0, 0, -15),
(13, 'debuff', 0, 3, 0, 0, 0, -5, -10),
(14, 'buff', 0, 3, 5, 0, 0, 0, 5),
(15, 'debuff', 0, 2, -15, 0, 0, 0, -10),
(16, 'debuff', 0, 6, -5, 0, 0, 0, -10),
(17, 'buff', 0, 4, 5, 0, 0, 0, 10),
(18, 'debuff', 0, 2, -10, 0, 0, 0, -15),
(19, 'debuff', 0, 3, 0, -15, 0, 0, 0),
(20, 'buff', 0, 4, 15, 0, 0, 0, 10),
(21, 'debuff', 0, 6, -10, 0, 0, 0, 0),
(22, 'debuff', 0, 3, 5, 0, 0, 0, 5),
(23, 'buff', 0, 3, 0, 5, 0, 5, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buffdebuffhabilidad`
--

DROP TABLE IF EXISTS `buffdebuffhabilidad`;
CREATE TABLE IF NOT EXISTS `buffdebuffhabilidad` (
  `habilidadid` int(11) NOT NULL,
  `buffdebuffid` int(11) NOT NULL,
  `objetivo` enum('lanzador','enemigo','nosotros') COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`habilidadid`,`buffdebuffid`,`objetivo`),
  KEY `bdhabilidad` (`buffdebuffid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `buffdebuffhabilidad`
--

INSERT INTO `buffdebuffhabilidad` (`habilidadid`, `buffdebuffid`, `objetivo`) VALUES
(2, 10, 'lanzador'),
(3, 11, 'nosotros'),
(4, 12, 'enemigo'),
(6, 13, 'enemigo'),
(7, 14, 'nosotros'),
(8, 15, 'enemigo'),
(9, 16, 'lanzador'),
(11, 17, 'lanzador'),
(12, 18, 'enemigo'),
(14, 19, 'enemigo'),
(15, 20, 'lanzador'),
(16, 21, 'lanzador'),
(18, 22, 'nosotros'),
(19, 23, 'nosotros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clase`
--

DROP TABLE IF EXISTS `clase`;
CREATE TABLE IF NOT EXISTS `clase` (
  `claseid` int(11) NOT NULL AUTO_INCREMENT,
  `clasenombre` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `direcimagen` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `direiconoclas` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `direiconoclas2` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `vidamaxima` int(11) NOT NULL,
  `precision` int(11) NOT NULL,
  `provevasion` int(11) NOT NULL,
  `provcritico` int(11) NOT NULL,
  `reddamage` int(11) NOT NULL,
  PRIMARY KEY (`claseid`),
  UNIQUE KEY `clasenombre` (`clasenombre`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `clase`
--

INSERT INTO `clase` (`claseid`, `clasenombre`, `direcimagen`, `direiconoclas`, `direiconoclas2`, `vidamaxima`, `precision`, `provevasion`, `provcritico`, `reddamage`) VALUES
(1, 'Paladin', 'img/clase/StickPaladin.png', 'img/iconoclase/Paladin.png', 'img/iconoclase/Paladin2.png', 1000, 70, 10, 15, 30),
(2, 'Guerrero', 'img/clase/StickGuerrero.png', 'img/iconoclase/Guerrero.png', 'img/iconoclase/Guerrero2.png', 800, 80, 15, 15, 20),
(3, 'Amazona', 'img/clase/StickAmazona.png', 'img/iconoclase/Amazona.png', 'img/iconoclase/Amazona2.png', 800, 80, 10, 20, 10),
(4, 'Arquera', 'img/clase/StickArquera.png', 'img/iconoclase/Arquera.png', 'img/iconoclase/Arquera2.png', 800, 90, 20, 20, 5),
(5, 'Sacerdotisa', 'img/clase/StickSacerdotisa.png', 'img/iconoclase/Sacerdotisa.png', 'img/iconoclase/Sacerdotisa2.png', 800, 70, 10, 10, 15),
(6, 'Bufon', 'img/clase/StickBufon.png', 'img/iconoclase/Bufon.png', 'img/iconoclase/Bufon2.png', 750, 85, 35, 20, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `danocuracionhabilidad`
--

DROP TABLE IF EXISTS `danocuracionhabilidad`;
CREATE TABLE IF NOT EXISTS `danocuracionhabilidad` (
  `habilidadid` int(11) NOT NULL,
  `objetivo` enum('lanzador','enemigo','nosotros') COLLATE utf8_spanish_ci NOT NULL,
  `minimo` int(11) NOT NULL,
  `maximo` int(11) NOT NULL,
  PRIMARY KEY (`habilidadid`,`objetivo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `danocuracionhabilidad`
--

INSERT INTO `danocuracionhabilidad` (`habilidadid`, `objetivo`, `minimo`, `maximo`) VALUES
(1, 'enemigo', -50, -90),
(2, 'lanzador', 20, 60),
(5, 'enemigo', -50, -110),
(6, 'enemigo', -20, -50),
(9, 'enemigo', -80, -180),
(10, 'lanzador', 10, 30),
(10, 'enemigo', -40, -80),
(11, 'lanzador', 20, 60),
(13, 'enemigo', -60, -120),
(14, 'enemigo', -20, -70),
(16, 'enemigo', -80, -120),
(17, 'nosotros', 10, 40),
(20, 'lanzador', 10, 30),
(20, 'enemigo', -30, -70);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habilidad`
--

DROP TABLE IF EXISTS `habilidad`;
CREATE TABLE IF NOT EXISTS `habilidad` (
  `habilidadid` int(11) NOT NULL AUTO_INCREMENT,
  `habilidadclase` int(11) NOT NULL,
  `habilidadnombre` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `direcicono` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `direcimagen` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`habilidadid`),
  KEY `habclase` (`habilidadclase`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `habilidad`
--

INSERT INTO `habilidad` (`habilidadid`, `habilidadclase`, `habilidadnombre`, `direcicono`, `direcimagen`, `descripcion`) VALUES
(1, 1, 'Golpe Potente', 'img/habilidad/paladin01', 'img/habilidadicono/paladin1.png', 'Causa entre 50 - 90 de daño a un enemigo en la posicion ( 1 - 2 ) '),
(2, 1, 'Plegaria a Dios', 'img/habilidad/paladin02', 'img/habilidadicono/paladin2.png', 'Te curas entre 20 - 60 puntos de vida y aumenta 5% de precisión y 10% de daño  (acumulable hasta 2 veces)'),
(3, 1, 'Bajo la Bandera Santa', 'img/habilidad/paladin03', 'img/habilidadicono/paladin3.png', 'Aumenta un 5% la resistencia y un 5% de daño a todos los aliados (acumulable hasta 3 veces)'),
(4, 1, 'Denunciar a los Infieles', 'img/habilidad/paladin04', 'img/habilidadicono/paladin4.png', 'Disminuye un 10% la evasión y un 15% el daño a un enemigo en la posición ( 1 - 2 - 3 ) (acumulable 1 sola vez)'),
(5, 2, 'Golpe Devastador', 'img/habilidad/guerrero01', 'img/habilidadicono/guerrero1.png', 'Causa entre 50 - 110 puntos de daño a un enemigo en la posición ( 1 - 2 )'),
(6, 2, 'Golpe Demoledor', 'img/habilidad/guerrero02', 'img/habilidadicono/guerrero2.png', 'Causa entre 20 - 50 puntos de daño a un enemigo en la posición ( 1 - 2 ) y le disminuye un 5% la resistencia y un 10% el daño (acumulable hasta 2 veces)'),
(7, 2, 'Grito de Guerra', 'img/habilidad/guerrero03', 'img/habilidadicono/guerrero3.png', 'Aumenta un 5% la precisión y 5% de daño a todos los aliados (acumulable hasta 3 veces)'),
(8, 2, 'Intimidar Enemigo', 'img/habilidad/guerrero04', 'img/habilidadicono/guerrero4.png', 'Disminuye un 15% la precisión y 10% de daño a un enemigo en la posición ( 1 - 2 - 3 ) (acumulable 1 sola vez)'),
(9, 3, 'Arremetida Violenta', 'img/habilidad/amazona01', 'img/habilidadicono/Amazona1.png', 'Causa entre 80 - 180 puntos de daño a un enemigo en la posición ( 1 - 2 ) pero disminuye un 5% la precisión y  un 10% el daño a si misma (acumulable hasta 6 veces)'),
(10, 3, 'Golpe Sanginario', 'img/habilidad/amazona02', 'img/habilidadicono/amazona2.png', 'Causa entre 40 - 80 puntos de daño a un enemigo en la posición ( 1 - 2 ) y te curas entre 10 - 30 puntos de vida'),
(11, 3, 'Canalizar el Odio', 'img/habilidad/amazona03', 'img/habilidadicono/amazona3.png', 'Te curas entre 20 - 60 puntos de vida y aumenta un 5% la precisión y un 10% el daño a si mismo (acumulable hasta 4 veces)'),
(12, 3, 'Mirada Asesina', 'img/habilidad/amazona04', 'img/habilidadicono/amazona4.png', 'Disminuye un 10% de precisión y un 15% de daño a un enemigo en la posición ( 1 - 2 - 3 ) (acumulable 1 sola vez)'),
(13, 4, 'Tiro a Quemarropa', 'img/habilidad/arquera1.png', 'img/habilidadicono/arquera1.png', 'Causa entre 60 - 120 de daño a un enemigo en la posicion ( 1 )'),
(14, 4, 'Tiro a la Pierna', 'img/habilidad/arquera2.png', 'img/habilidadicono/arquera2.png', 'Causa entre 20 - 70 de daño a un enemigo en la posicion ( 1 - 2 - 3 ) y disminuye 15% de evacion (acumulable hasta 3 veces)'),
(15, 4, 'Agudizar sentidos', 'img/habilidad/arquera3.png', 'img/habilidadicono/arquera3.png', 'Aumenta 15% de `precision` y 10% de daño a si misma (acumulable hasta 4 veces)'),
(16, 4, 'Tiro a la Cabeza', 'img/habilidad/arquera4.png', 'img/habilidadicono/arquera4.png', 'Causa entre 60 - 140 de daño a un enemigo en la posicion ( 2 - 3 ) pero se disminuye 10% de precicion a si misma (acumulable hasta 6 veces)'),
(17, 5, 'Curación Divina', 'img/habilidad/sacerdotisa1', 'img/habilidadicono/sacerdotisa1.png', 'Cura entre 10 - 40 puntos de vida todos los aliados'),
(18, 5, 'Dios nos Guía', 'img/habilidad/sacerdotisa2', 'img/habilidadicono/sacerdotisa2.png', 'Aumenta un 5% de precisión y un 5% de daño a todos los aliados (acumulable hasta 3 veces)'),
(19, 5, 'Dios es Nuestro Escudo', 'img/habilidad/sacerdotisa3', 'img/habilidadicono/sacerdotisa3.png', 'Aumenta un 5% de evasión y un 5% la resistencia de todos los aliados (acumulable hasta 3 veces)'),
(20, 5, 'Castigo Divino', 'img/habilidad/sacerdotisa4', 'img/habilidadicono/sacerdotisa4.png', 'Causa entre 30 - 70 puntos de daño a un enemigo en la posición ( 1 - 2 - 3 ) y te curas entre 10 - 30 de vida');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objetivoshabilidad`
--

DROP TABLE IF EXISTS `objetivoshabilidad`;
CREATE TABLE IF NOT EXISTS `objetivoshabilidad` (
  `habilidadid` int(11) NOT NULL,
  `posicionid` int(11) NOT NULL,
  PRIMARY KEY (`habilidadid`,`posicionid`),
  KEY `posobjetivo` (`posicionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `objetivoshabilidad`
--

INSERT INTO `objetivoshabilidad` (`habilidadid`, `posicionid`) VALUES
(1, 1),
(1, 2),
(4, 1),
(4, 2),
(4, 3),
(5, 1),
(5, 2),
(6, 1),
(6, 2),
(8, 1),
(8, 2),
(8, 3),
(9, 1),
(9, 2),
(10, 1),
(10, 2),
(12, 1),
(12, 2),
(12, 3),
(13, 1),
(14, 1),
(14, 2),
(14, 3),
(16, 2),
(16, 3),
(20, 1),
(20, 2),
(20, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objeto`
--

DROP TABLE IF EXISTS `objeto`;
CREATE TABLE IF NOT EXISTS `objeto` (
  `objetoid` int(11) NOT NULL AUTO_INCREMENT,
  `objetotipo` int(11) NOT NULL,
  `objetopertenece` int(11) NOT NULL,
  PRIMARY KEY (`objetoid`),
  KEY `objtipo` (`objetotipo`),
  KEY `objpertenece` (`objetopertenece`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `objeto`
--

INSERT INTO `objeto` (`objetoid`, `objetotipo`, `objetopertenece`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 2, 1),
(4, 4, 1),
(5, 5, 1),
(6, 1, 2),
(7, 2, 2),
(8, 4, 2),
(9, 3, 2),
(10, 3, 2),
(11, 1, 3),
(12, 2, 3),
(13, 3, 3),
(14, 4, 3),
(15, 5, 3),
(16, 5, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partida`
--

DROP TABLE IF EXISTS `partida`;
CREATE TABLE IF NOT EXISTS `partida` (
  `partidaid` int(11) NOT NULL AUTO_INCREMENT,
  `partidafecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `jugador1id` int(11) NOT NULL,
  `jugador2id` int(11) NOT NULL,
  `ganadorid` int(11) DEFAULT NULL,
  PRIMARY KEY (`partidaid`),
  KEY `jugador1` (`jugador1id`),
  KEY `jugador2` (`jugador2id`),
  KEY `ganador` (`ganadorid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `partida`
--

INSERT INTO `partida` (`partidaid`, `partidafecha`, `jugador1id`, `jugador2id`, `ganadorid`) VALUES
(1, '2018-11-04 22:59:08', 1, 3, 3),
(2, '2018-11-04 22:59:08', 2, 3, 3),
(3, '2018-11-04 22:59:09', 1, 2, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personaje`
--

DROP TABLE IF EXISTS `personaje`;
CREATE TABLE IF NOT EXISTS `personaje` (
  `personajeid` int(11) NOT NULL AUTO_INCREMENT,
  `personajeclase` int(11) NOT NULL,
  `objetoid` int(11) DEFAULT NULL,
  `personajeposicion` int(11) NOT NULL,
  `personajepertenece` int(11) NOT NULL,
  `vidaactual` int(11) NOT NULL,
  PRIMARY KEY (`personajeid`),
  KEY `perclase` (`personajeclase`),
  KEY `objetoequipa` (`objetoid`),
  KEY `perposicion` (`personajeposicion`),
  KEY `perpertenece` (`personajepertenece`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `personaje`
--

INSERT INTO `personaje` (`personajeid`, `personajeclase`, `objetoid`, `personajeposicion`, `personajepertenece`, `vidaactual`) VALUES
(1, 1, 4, 1, 1, 920),
(2, 2, 6, 2, 1, 620),
(3, 2, 5, 3, 1, 710),
(4, 3, 10, 1, 2, 530),
(5, 2, 11, 2, 2, 710),
(6, 3, 9, 3, 2, 790);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajesufrebd`
--

DROP TABLE IF EXISTS `personajesufrebd`;
CREATE TABLE IF NOT EXISTS `personajesufrebd` (
  `personajeid` int(11) NOT NULL,
  `buffdebuffid` int(11) NOT NULL,
  `tiemporestante` int(11) DEFAULT '3',
  `acumulaciones` int(11) DEFAULT '1',
  PRIMARY KEY (`personajeid`,`buffdebuffid`),
  KEY `bdsufre` (`buffdebuffid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posicion`
--

DROP TABLE IF EXISTS `posicion`;
CREATE TABLE IF NOT EXISTS `posicion` (
  `posicionid` int(11) NOT NULL AUTO_INCREMENT,
  `buffdebuffid` int(11) NOT NULL,
  PRIMARY KEY (`posicionid`),
  KEY `bdposicion` (`buffdebuffid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `posicion`
--

INSERT INTO `posicion` (`posicionid`, `buffdebuffid`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoobjeto`
--

DROP TABLE IF EXISTS `tipoobjeto`;
CREATE TABLE IF NOT EXISTS `tipoobjeto` (
  `tipoobjetoid` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `calidad` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `buffid` int(11) DEFAULT NULL,
  `direcimagen` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`tipoobjetoid`),
  KEY `buffid` (`buffid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipoobjeto`
--

INSERT INTO `tipoobjeto` (`tipoobjetoid`, `nombre`, `calidad`, `buffid`, `direcimagen`) VALUES
(1, 'Sin Objeto', ' - - - - ', 1, 'img/objetos/sinObjeto.png'),
(2, 'Hacha de Leñador', 'Mediocre', 4, 'img/objetos/hachaDeleñador.png'),
(3, 'Arco Simple', 'Comun', 5, 'img/objetos/arcoSimple.png'),
(4, 'Armadura Pesada', 'Comun', 6, 'img/objetos/armaduraPesada.png'),
(5, 'Arco Largo', 'Buena', 7, 'img/objetos/arcoLargo.png'),
(6, 'Arco Compuesto', 'raro', 8, 'img/objetos/arcoCompuesto.png'),
(7, 'Armadura de mithril', 'raro', 9, 'img/objetos/armaduraDeMithril.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `usernivel` int(11) NOT NULL,
  `userexp` int(11) NOT NULL,
  `usernombre` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `userpass` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `estado` enum('conectado','buscando partida','en partida','desconectado') COLLATE utf8_spanish_ci DEFAULT 'desconectado',
  PRIMARY KEY (`userid`),
  UNIQUE KEY `usernombre` (`usernombre`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`userid`, `usernivel`, `userexp`, `usernombre`, `userpass`, `estado`) VALUES
(1, 10, 190, 'Barba', 'cristian', 'desconectado'),
(2, 8, 170, 'Sofelix', 'santiago', 'desconectado'),
(3, 11, 205, 'Corbus', 'claudio', 'desconectado');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `buffdebuffhabilidad`
--
ALTER TABLE `buffdebuffhabilidad`
  ADD CONSTRAINT `bdhabilidad` FOREIGN KEY (`buffdebuffid`) REFERENCES `buffdebuff` (`buffdebuffid`),
  ADD CONSTRAINT `habilidadbd` FOREIGN KEY (`habilidadid`) REFERENCES `habilidad` (`habilidadid`);

--
-- Filtros para la tabla `danocuracionhabilidad`
--
ALTER TABLE `danocuracionhabilidad`
  ADD CONSTRAINT `habilidaddc` FOREIGN KEY (`habilidadid`) REFERENCES `habilidad` (`habilidadid`);

--
-- Filtros para la tabla `habilidad`
--
ALTER TABLE `habilidad`
  ADD CONSTRAINT `habclase` FOREIGN KEY (`habilidadclase`) REFERENCES `clase` (`claseid`);

--
-- Filtros para la tabla `objetivoshabilidad`
--
ALTER TABLE `objetivoshabilidad`
  ADD CONSTRAINT `habobjetivo` FOREIGN KEY (`habilidadid`) REFERENCES `habilidad` (`habilidadid`),
  ADD CONSTRAINT `posobjetivo` FOREIGN KEY (`posicionid`) REFERENCES `posicion` (`posicionid`);

--
-- Filtros para la tabla `objeto`
--
ALTER TABLE `objeto`
  ADD CONSTRAINT `objpertenece` FOREIGN KEY (`objetopertenece`) REFERENCES `usuario` (`userid`),
  ADD CONSTRAINT `objtipo` FOREIGN KEY (`objetotipo`) REFERENCES `tipoobjeto` (`tipoobjetoid`);

--
-- Filtros para la tabla `partida`
--
ALTER TABLE `partida`
  ADD CONSTRAINT `ganador` FOREIGN KEY (`ganadorid`) REFERENCES `usuario` (`userid`),
  ADD CONSTRAINT `jugador1` FOREIGN KEY (`jugador1id`) REFERENCES `usuario` (`userid`),
  ADD CONSTRAINT `jugador2` FOREIGN KEY (`jugador2id`) REFERENCES `usuario` (`userid`);

--
-- Filtros para la tabla `personaje`
--
ALTER TABLE `personaje`
  ADD CONSTRAINT `objetoequipa` FOREIGN KEY (`objetoid`) REFERENCES `objeto` (`objetoid`),
  ADD CONSTRAINT `perclase` FOREIGN KEY (`personajeclase`) REFERENCES `clase` (`claseid`),
  ADD CONSTRAINT `perpertenece` FOREIGN KEY (`personajepertenece`) REFERENCES `usuario` (`userid`),
  ADD CONSTRAINT `perposicion` FOREIGN KEY (`personajeposicion`) REFERENCES `posicion` (`posicionid`);

--
-- Filtros para la tabla `personajesufrebd`
--
ALTER TABLE `personajesufrebd`
  ADD CONSTRAINT `bdsufre` FOREIGN KEY (`buffdebuffid`) REFERENCES `buffdebuff` (`buffdebuffid`),
  ADD CONSTRAINT `personajesufre` FOREIGN KEY (`personajeid`) REFERENCES `personaje` (`personajeid`);

--
-- Filtros para la tabla `posicion`
--
ALTER TABLE `posicion`
  ADD CONSTRAINT `bdposicion` FOREIGN KEY (`buffdebuffid`) REFERENCES `buffdebuff` (`buffdebuffid`);

--
-- Filtros para la tabla `tipoobjeto`
--
ALTER TABLE `tipoobjeto`
  ADD CONSTRAINT `buffid` FOREIGN KEY (`buffid`) REFERENCES `buffdebuff` (`buffdebuffid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
