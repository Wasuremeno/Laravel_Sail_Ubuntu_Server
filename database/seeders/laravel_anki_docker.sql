-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS laravel;
USE laravel;

-- Disable foreign key checks
SET FOREIGN_KEY_CHECKS=0;

-- Drop tables if they exist
DROP TABLE IF EXISTS `japanese_img`;
DROP TABLE IF EXISTS `japanese`;

-- Create japanese table with compatible collation
CREATE TABLE `japanese` (
  `id` int NOT NULL AUTO_INCREMENT,
  `furigana` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kanji` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `english` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `memorized` int NOT NULL DEFAULT '0',
  `katakana` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create japanese_img table with compatible collation
CREATE TABLE `japanese_img` (
  `img_ID` int NOT NULL AUTO_INCREMENT,
  `img_path` int NOT NULL,
  `id` int DEFAULT NULL,
  PRIMARY KEY (`img_ID`),
  KEY `id` (`id`),
  CONSTRAINT `japanese_img_ibfk_1` FOREIGN KEY (`id`) REFERENCES `japanese` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert data
INSERT INTO `japanese` VALUES 
(1,'あかい','赤い','red',1,NULL),
(2,'なに','何','what',1,NULL),
(3,'いう','言う','to tell',0,NULL),
(4,'みる','見る','to look',1,NULL),
(5,'いく','行く','to go',1,NULL),
(6,'しる','知る','to know',1,NULL),
(7,'くる','来る','to come',1,NULL),
(8,'もつ','持つ','to have',1,NULL),
(9,'でる','出る','to go out, to leave',1,NULL),
(10,'だいじょうぶ','大丈夫','all right, okay',1,NULL),
(11,'もどる','戻る','to return',1,NULL),
(12,'わるい',' 悪い','bad',0,NULL),
(13,NULL,NULL,'power',1,'パワー');

INSERT INTO `japanese_img` VALUES 
(1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5),
(6,6,6),(7,7,7),(8,8,8),(9,9,9),(10,10,10),
(11,11,11),(12,12,12),(13,13,13);

-- Re-enable foreign key checks
SET FOREIGN_KEY_CHECKS=1;