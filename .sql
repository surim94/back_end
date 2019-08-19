CREATE DATABASE IF NOT EXISTS `sample`;
USE `sample`;

CREATE TABLE IF NOT EXISTS `sample_tables` (
  `sample_key` int(10) NOT NULL AUTO_INCREMENT,
  `sample_order` int(10) DEFAULT NULL,
  `sample_contents` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`sample_key`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

INSERT INTO `sample_tables` (`sample_key`, `sample_order`, `sample_contents`) VALUES
	(1, 1, 'sample1'),
  (2, 2, 'sample2'),
  (3, 3, 'sample3');