-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-10-2018 a las 02:33:51
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `stickwardb`
--
CREATE DATABASE IF NOT EXISTS `stickwardb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci;
USE `stickwardb`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buffdebuff`
--

CREATE TABLE `buffdebuff` (
  `buffdebuffid` int(11) NOT NULL,
  `buffdebufftipo` enum('buff','debuff','mixto') COLLATE utf8mb4_spanish2_ci NOT NULL,
  `maxacumulaciones` int(11) DEFAULT NULL,
  `presicion` int(11) DEFAULT '0',
  `provevacion` int(11) DEFAULT '0',
  `provcritico` int(11) DEFAULT '0',
  `reddamage` int(11) DEFAULT '0',
  `moddamage` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `buffdebuff`
--

INSERT INTO `buffdebuff` (`buffdebuffid`, `buffdebufftipo`, `maxacumulaciones`, `presicion`, `provevacion`, `provcritico`, `reddamage`, `moddamage`) VALUES
(1, 'buff', NULL, 0, 0, 0, 0, 0),
(2, 'buff', NULL, 0, 0, 0, 5, 0),
(3, 'buff', NULL, 0, 15, 0, 0, 0),
(4, 'buff', NULL, 0, 0, 0, 5, 5),
(5, 'buff', NULL, 10, 0, 0, 0, 5),
(6, 'buff', NULL, 0, -5, 0, 20, 0),
(7, 'buff', NULL, 15, 0, 0, 0, 10),
(8, 'buff', NULL, 10, 0, 0, 10, 15),
(9, 'buff', NULL, 0, 5, 0, 25, 0),
(10, 'buff', 4, 5, 0, 0, 0, 10),
(11, 'buff', 3, 0, 0, 0, 5, 5),
(12, 'debuff', 2, 0, -10, 0, 0, -15),
(13, 'debuff', 3, 0, 0, 0, -5, -10),
(14, 'buff', 3, 5, 0, 0, 0, 5),
(15, 'debuff', 2, -15, 0, 0, 0, -10),
(16, 'debuff', 6, -5, 0, 0, 0, -10),
(17, 'buff', 4, 5, 0, 0, 0, 10),
(18, 'debuff', 2, -10, 0, 0, 0, -15),
(19, 'debuff', 3, 0, -15, 0, 0, 0),
(20, 'buff', 4, 15, 0, 0, 0, 10),
(21, 'debuff', 6, -10, 0, 0, 0, 0),
(22, 'debuff', 3, 5, 0, 0, 0, 5),
(23, 'buff', 3, 0, 5, 0, 5, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buffdebuffhabilidad`
--

CREATE TABLE `buffdebuffhabilidad` (
  `habilidadid` int(11) NOT NULL,
  `buffdebuffid` int(11) NOT NULL,
  `objetivo` enum('lanzador','enemigo') COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `buffdebuffhabilidad`
--

INSERT INTO `buffdebuffhabilidad` (`habilidadid`, `buffdebuffid`, `objetivo`) VALUES
(2, 10, 'lanzador'),
(3, 11, 'lanzador'),
(4, 12, 'enemigo'),
(6, 13, 'enemigo'),
(7, 14, 'lanzador'),
(8, 15, 'enemigo'),
(9, 16, 'lanzador'),
(11, 17, 'lanzador'),
(12, 18, 'enemigo'),
(14, 19, 'enemigo'),
(15, 20, 'lanzador'),
(16, 21, 'lanzador'),
(18, 22, 'lanzador'),
(19, 23, 'lanzador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clase`
--

CREATE TABLE `clase` (
  `claseid` int(11) NOT NULL,
  `clasenombre` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `direcimagen` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `direiconoclas` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `vidamaxima` int(11) NOT NULL,
  `presicion` int(11) NOT NULL,
  `provevacion` int(11) NOT NULL,
  `provcritico` int(11) NOT NULL,
  `reddamage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `clase`
--

INSERT INTO `clase` (`claseid`, `clasenombre`, `direcimagen`, `direiconoclas`, `vidamaxima`, `presicion`, `provevacion`, `provcritico`, `reddamage`) VALUES
(1, 'Paladin', 'imagen/clase/paladin', 'imagen/icono clase/paladin', 1000, 70, 10, 15, 30),
(2, 'Guerrero', 'imagen/clase/guerrero', 'imagen/icono clase/guerrero', 800, 80, 15, 15, 20),
(3, 'Amazona', 'imagen/clase/amazona', 'imagen/icono clase/amazona', 800, 80, 10, 20, 10),
(4, 'Arquera', 'imagen/clase/amazona', 'imagen/icono clase/amazona', 800, 90, 20, 20, 5),
(5, 'Sacerdotisa', 'imagen/clase/sacerdotisa', 'imagen/icono clase/sacerdotisa', 800, 70, 10, 10, 15),
(6, 'Asecino', 'imagen/clase/asecino', 'imagen/icono clase/asecino', 750, 85, 35, 20, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `danocuracionhabilidad`
--

CREATE TABLE `danocuracionhabilidad` (
  `habilidadid` int(11) NOT NULL,
  `objetivo` enum('lanzador','enemigo') COLLATE utf8mb4_spanish2_ci NOT NULL,
  `minimo` int(11) NOT NULL,
  `maximo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

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
(17, 'lanzador', 10, 40),
(20, 'lanzador', 10, 30),
(20, 'enemigo', -30, -70);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habilidad`
--

CREATE TABLE `habilidad` (
  `habilidadid` int(11) NOT NULL,
  `habilidadclase` int(11) NOT NULL,
  `habilidadnombre` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `direcicono` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `direcimagen` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(300) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `sologrupal` enum('solo','nosotros') COLLATE utf8mb4_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `habilidad`
--

INSERT INTO `habilidad` (`habilidadid`, `habilidadclase`, `habilidadnombre`, `direcicono`, `direcimagen`, `descripcion`, `sologrupal`) VALUES
(1, 1, 'Golpe Potente', 'imagen/icono/paladin01', 'imagen/imagen/paladin01', 'Causa entre 50 - 90 de daño a un enemigo en la posicion ( 1 - 2 ) ', NULL),
(2, 1, 'Plegaria a Dios', 'imagen/icono/paladin02', 'imagen/imagen/paladin02', 'Se cura entre 20 - 60 de vida y aumenta 5% de presicion y 10% de daño a si mismo (acumulable hasta 2 veces)', 'solo'),
(3, 1, 'Bajo la Bandera Santa', 'imagen/icono/paladin03', 'imagen/imagen/paladin03', 'Aumenta la 5% la resistencia y 5% de daño a todos los aliados (acumulable hasta 3 veces)', 'nosotros'),
(4, 1, 'Denunciar a los Infieles', 'imagen/icono/paladin04', 'imagen/imagen/paladin04', 'Disminuye 10% de evacion y 15% de daño a un enemigo en la posicion ( 1 - 2 - 3 ) (acumulable 1 sola ves)', NULL),
(5, 2, 'Golpe Devastador', 'imagen/icono/guerrero01', 'imagen/imagen/guerrero01', 'Causa entre 50 - 110 de daño a un enemigo en la posicion ( 1 - 2 )', NULL),
(6, 2, 'Golpe Demoledor', 'imagen/icono/guerrero02', 'imagen/imagen/guerrero02', 'Causa entre 20 - 50 de daño a un enemigo en la posicion ( 1 - 2 ) y le disminuye 5% la resistencia y 10% de daño (acumulable hasta 2 veces)', NULL),
(7, 2, 'Grito de Guerra', 'imagen/icono/guerrero03', 'imagen/imagen/guerrero03', 'Aumenta la 5% de precicion y 5% de daño a todos los aliados (acumulable hasta 3 veces)', 'nosotros'),
(8, 2, 'Intimidar enemigo', 'imagen/icono/guerrero04', 'imagen/imagen/guerrero04', 'Disminuye 15% de precicion y 10% de daño a un enemigo en la posicion ( 1 - 2 - 3 ) (acumulable 1 sola ves)', NULL),
(9, 3, 'Arremetida Violenta', 'imagen/icono/amazona01', 'imagen/imagen/Amazona01', 'Causa entre 80 - 180 de daño a un enemigo en la posicion ( 1 - 2 ) pero se disminuye 5% de precicion y 10% de daño a si misma (acumulable hasta 6 veces)', NULL),
(10, 3, 'Golpe Sanginario', 'imagen/icono/amazona02', 'imagen/imagen/Amazona02', 'Causa entre 40 - 80 de daño a un enemigo en la posicion ( 1 - 2 ) y se cura entre 10 - 30 de vida a si misma', NULL),
(11, 3, 'Canalizar el Odio', 'imagen/icono/amazona03', 'imagen/imagen/amazona03', 'Se cura entre 20 - 60 de vida y aumenta 5% de presicion y 10% de daño a si mismo (acumulable hasta 4 veces)', 'solo'),
(12, 3, 'Mirada Asecina', 'imagen/icono/amazona04', 'imagen/imagen/Amazona04', 'Disminuye 10% de precicion y 15% de daño a un enemigo en la posicion ( 1 - 2 - 3 ) (acumulable 1 sola ves)', NULL),
(13, 4, 'Tiro a Quemarropa', 'imagen/icono/arquera1', 'imagen/imagen/arquera1', 'Causa entre 60 - 120 de daño a un enemigo en la posicion ( 1 )', NULL),
(14, 4, 'Tiro a la Pierna', 'imagen/icono/arquera2', 'imagen/imagen/arquera2', 'Causa entre 20 - 70 de daño a un enemigo en la posicion ( 1 - 2 - 3 ) y disminuye 15% de evacion (acumulable hasta 3 veces)', NULL),
(15, 4, 'Agudizar sentidos', 'imagen/icono/arquera3', 'imagen/imagen/arquera3', 'Aumenta 15% de presicion y 10% de daño a si misma (acumulable hasta 4 veces)', 'solo'),
(16, 4, 'Tiro a la Cabeza', 'imagen/icono/arquera4', 'imagen/imagen/arquera4', 'Causa entre 60 - 140 de daño a un enemigo en la posicion ( 2 - 3 ) pero se disminuye 10% de precicion a si misma (acumulable hasta 6 veces)', NULL),
(17, 5, 'Curacion Divina', 'imagen/icono/sacerdotisa1', 'imagen/imagen/sacerdotisa1', 'Cura entre 10 - 40 de vida todos los aliados', 'nosotros'),
(18, 5, 'Dios nos Guia', 'imagen/icono/sacerdotisa2', 'imagen/imagen/sacerdotisa2', 'Aumenta 5% de precicion y 5% de daño a todos los aliados (acumulable hasta 3 veces)', 'nosotros'),
(19, 5, 'Dios es Nuestro Escudo', 'imagen/icono/sacerdotisa3', 'imagen/imagen/sacerdotisa3', 'Aumenta 5% de evacion y 5% de resistencia a todos los aliados (acumulable hasta 3 veces)', 'nosotros'),
(20, 5, 'Castigo Divino', 'imagen/icono/sacerdotisa4', 'imagen/imagen/sacerdotisa4', 'Causa entre 30 - 70 de daño a un enemigo en la posicion ( 1 - 2 - 3 ) y se cura entre 10 - 30 de vida a si mismo', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objetivoshabilidad`
--

CREATE TABLE `objetivoshabilidad` (
  `habilidadid` int(11) NOT NULL,
  `posicionid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

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

CREATE TABLE `objeto` (
  `objetoid` int(11) NOT NULL,
  `objetotipo` int(11) NOT NULL,
  `objetopertenece` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

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

CREATE TABLE `partida` (
  `partidaid` int(11) NOT NULL,
  `partidafecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `jugador1id` int(11) NOT NULL,
  `jugador2id` int(11) NOT NULL,
  `ganadorid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `partida`
--

INSERT INTO `partida` (`partidaid`, `partidafecha`, `jugador1id`, `jugador2id`, `ganadorid`) VALUES
(1, '2018-10-28 00:26:02', 1, 3, 3),
(2, '2018-10-28 00:26:02', 2, 3, 3),
(3, '2018-10-28 00:26:02', 1, 2, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personaje`
--

CREATE TABLE `personaje` (
  `personajeid` int(11) NOT NULL,
  `personajeclase` int(11) NOT NULL,
  `objetoid` int(11) DEFAULT NULL,
  `personajeposicion` int(11) NOT NULL,
  `personajepertenece` int(11) NOT NULL,
  `vidaactual` int(11) NOT NULL,
  `modDamage` int(11) DEFAULT '100'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `personaje`
--

INSERT INTO `personaje` (`personajeid`, `personajeclase`, `objetoid`, `personajeposicion`, `personajepertenece`, `vidaactual`, `modDamage`) VALUES
(1, 1, 4, 1, 1, 920, 100),
(2, 2, 6, 2, 1, 620, 120),
(3, 2, 5, 3, 1, 710, 90),
(4, 3, 10, 1, 2, 530, 90),
(5, 2, 11, 2, 2, 710, 130),
(6, 3, 9, 3, 2, 790, 90);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajesufrebd`
--

CREATE TABLE `personajesufrebd` (
  `personajeid` int(11) NOT NULL,
  `buffdebuffid` int(11) NOT NULL,
  `tiemporestante` int(11) DEFAULT '3',
  `acumulaciones` int(11) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posicion`
--

CREATE TABLE `posicion` (
  `posicionid` int(11) NOT NULL,
  `buffdebuffid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

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

CREATE TABLE `tipoobjeto` (
  `tipoobjetoid` int(11) NOT NULL,
  `nombre` varchar(20) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `calidad` varchar(20) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `buffid` int(11) DEFAULT NULL,
  `direcimagen` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `tipoobjeto`
--

INSERT INTO `tipoobjeto` (`tipoobjetoid`, `nombre`, `calidad`, `buffid`, `direcimagen`) VALUES
(1, 'Sin Objeto', ' - - - - ', 1, 'imagen/objeto/sin objeto'),
(2, 'Hacha de Leñador', 'Mediocre', 4, 'imagen/objeto/hacha de leñador'),
(3, 'Arco Simple', 'Comun', 5, 'imagen/objeto/arco simple'),
(4, 'Armadura Pesada', 'Comun', 6, 'imagen/objeto/Armadura Pesada'),
(5, 'Arco Largo', 'Buena', 7, 'imagen/objeto/arco largo'),
(6, 'Arco Compuesto', 'raro', 8, 'imagen/objeto/arco compuesto'),
(7, 'Armadura de Miltil', 'raro', 9, 'imagen/objeto/armadura de miltril');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `userid` int(11) NOT NULL,
  `usernivel` int(11) NOT NULL,
  `userexp` int(11) NOT NULL,
  `usernombre` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `userpass` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`userid`, `usernivel`, `userexp`, `usernombre`, `userpass`) VALUES
(1, 10, 190, 'Barba', 'cristian'),
(2, 8, 170, 'Sofelix', 'santiago'),
(3, 11, 205, 'Corbus', 'claudio');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `buffdebuff`
--
ALTER TABLE `buffdebuff`
  ADD PRIMARY KEY (`buffdebuffid`);

--
-- Indices de la tabla `buffdebuffhabilidad`
--
ALTER TABLE `buffdebuffhabilidad`
  ADD PRIMARY KEY (`habilidadid`,`buffdebuffid`,`objetivo`),
  ADD KEY `bdhabilidad` (`buffdebuffid`);

--
-- Indices de la tabla `clase`
--
ALTER TABLE `clase`
  ADD PRIMARY KEY (`claseid`),
  ADD UNIQUE KEY `clasenombre` (`clasenombre`);

--
-- Indices de la tabla `danocuracionhabilidad`
--
ALTER TABLE `danocuracionhabilidad`
  ADD PRIMARY KEY (`habilidadid`,`objetivo`);

--
-- Indices de la tabla `habilidad`
--
ALTER TABLE `habilidad`
  ADD PRIMARY KEY (`habilidadid`),
  ADD KEY `habclase` (`habilidadclase`);

--
-- Indices de la tabla `objetivoshabilidad`
--
ALTER TABLE `objetivoshabilidad`
  ADD PRIMARY KEY (`habilidadid`,`posicionid`),
  ADD KEY `posobjetivo` (`posicionid`);

--
-- Indices de la tabla `objeto`
--
ALTER TABLE `objeto`
  ADD PRIMARY KEY (`objetoid`),
  ADD KEY `objpertenece` (`objetopertenece`);

--
-- Indices de la tabla `partida`
--
ALTER TABLE `partida`
  ADD PRIMARY KEY (`partidaid`),
  ADD KEY `jugador1` (`jugador1id`),
  ADD KEY `jugador2` (`jugador2id`),
  ADD KEY `ganador` (`ganadorid`);

--
-- Indices de la tabla `personaje`
--
ALTER TABLE `personaje`
  ADD PRIMARY KEY (`personajeid`),
  ADD KEY `perclase` (`personajeclase`),
  ADD KEY `objetoequipa` (`objetoid`),
  ADD KEY `perposicion` (`personajeposicion`),
  ADD KEY `perpertenece` (`personajepertenece`);

--
-- Indices de la tabla `personajesufrebd`
--
ALTER TABLE `personajesufrebd`
  ADD PRIMARY KEY (`personajeid`,`buffdebuffid`),
  ADD KEY `bdsufre` (`buffdebuffid`);

--
-- Indices de la tabla `posicion`
--
ALTER TABLE `posicion`
  ADD PRIMARY KEY (`posicionid`),
  ADD KEY `bdposicion` (`buffdebuffid`);

--
-- Indices de la tabla `tipoobjeto`
--
ALTER TABLE `tipoobjeto`
  ADD PRIMARY KEY (`tipoobjetoid`),
  ADD KEY `buffid` (`buffid`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `usernombre` (`usernombre`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `buffdebuff`
--
ALTER TABLE `buffdebuff`
  MODIFY `buffdebuffid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `clase`
--
ALTER TABLE `clase`
  MODIFY `claseid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `habilidad`
--
ALTER TABLE `habilidad`
  MODIFY `habilidadid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `objeto`
--
ALTER TABLE `objeto`
  MODIFY `objetoid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `partida`
--
ALTER TABLE `partida`
  MODIFY `partidaid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `personaje`
--
ALTER TABLE `personaje`
  MODIFY `personajeid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `posicion`
--
ALTER TABLE `posicion`
  MODIFY `posicionid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipoobjeto`
--
ALTER TABLE `tipoobjeto`
  MODIFY `tipoobjetoid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  ADD CONSTRAINT `objpertenece` FOREIGN KEY (`objetopertenece`) REFERENCES `usuario` (`userid`);

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
