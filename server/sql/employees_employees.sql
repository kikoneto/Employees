-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: employees
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` mediumint unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `secondName` varchar(255) DEFAULT NULL,
  `age` mediumint DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `department` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'Camden','Park',29,'Sofia','camden@aol.ca','Cursus Et Eros Institute','09/04/2024','IT'),(2,'Kyle','Mathis',34,'Sofia','kyle@icloud.com','Habitant Morbi LLP','19/08/2023','IT'),(3,'Damian','Walter',26,'Sofia','damian45@icloud.edu','Sem Ltd','21/06/2023','IT'),(4,'Oleg','Gregory',25,'Sofia','oleg2048@yahoo.net','Pellentesque Ltd','26/01/2023','IT'),(5,'Nissim','Bass',39,'Sofia','nissim@google.org','Adipiscing Elit Incorporated','17/04/2024','IT'),(7,'Clinton','Black',19,'Sofia','clinton1277@protonmail.ca','Nisi Nibh Limited','13/04/2023','IT'),(8,'Derek','Palmer',32,'Sofia','derek3811@icloud.ca','Tellus Corp.','12/11/2022','IT'),(9,'Leroy','Walter',37,'Sofia','leroy@yahoo.edu','Tellus Industries','24/11/2022','IT'),(10,'Reuben','Schmidt',18,'Sofia','reuben6705@hotmail.net','Nunc Ullamcorper Velit Foundation','19/10/2022','IT'),(11,'Trevor','Lee',35,'Sofia','trevor9158@yahoo.ca','Sapien Limited','16/03/2023','HR'),(12,'Kibo','Hughes',26,'Sofia','kibo5925@protonmail.edu','Risus Quisque Libero LLC','24/11/2023','HR'),(13,'Isaiah','Robbins',20,'Sofia','isaiah1979@aol.org','Mi Eleifend LLC','12/08/2023','IT'),(14,'Cairo','Acevedo',32,'Sofia','cairo@hotmail.net','Et Corp.','13/11/2022','Marketing'),(15,'Colorado','Leach',22,'Sofia','colorado@icloud.org','Lobortis Augue Inc.','11/08/2023','Marketing'),(16,'Thomas','Underwood',22,'Sofia','thomas1647@icloud.com','Vitae Odio Incorporated','27/04/2024','Marketing'),(18,'Ryder','Whitfield',27,'Sofia','ryder@yahoo.com','Arcu Incorporated','12/06/2022','Marketing'),(19,'Theodore','House',26,'Sofia','theodore9070@protonmail.net','Auctor Nunc Associates','10/12/2023','Marketing'),(20,'Gabriel','Spears',18,'Sofia','gabriel@google.couk','Dolor Foundation','09/08/2022','Marketing'),(28,'Charles','Edwards',37,'Columbus','charles@icloud.net','Urna Suscipit Nonummy Institute','11/04/2023','Marketing'),(29,'Damon','Gould',22,'Butte','damon@outlook.edu','Eleifend Vitae Corporation','31/12/2022','Marketing'),(30,'Cameron','Wall',37,'Orenburg','cameron@protonmail.net','Integer Sem Corp.','18/10/2022','IT'),(31,'Aladdin','Schroeder',39,'Cercepiccola','aladdin@yahoo.net','Convallis Convallis Foundation','26/03/2023','IT'),(32,'Melvin','Rowe',35,'Moss','melvin2179@icloud.couk','Eget Laoreet Incorporated','07/08/2023','IT'),(33,'Alden','Roberson',27,'Guihulngan','alden1145@outlook.ca','Dolor Dolor LLP','01/10/2023','HR'),(34,'Howard','Bishop',24,'Garzón','howard4127@protonmail.org','Nunc Mauris PC','06/05/2023','IT'),(35,'Elmo','Stevenson',17,'Jemappes','elmo@icloud.ca','Sit Amet Lorem PC','29/01/2024','Marketing'),(36,'Alfonso','Long',18,'Te Awamutu','alfonso7170@icloud.edu','Aliquam Nisl Nulla Industries','30/12/2023','IT'),(37,'Kieran','Massey',24,'Lagos','kieran@outlook.org','Non Inc.','04/06/2022','HR'),(38,'Lance','Hays',22,'São Luís','lance4972@protonmail.edu','Nonummy Foundation','23/05/2022','Marketing'),(39,'Valentine','Parker',40,'Molde','valentine5567@hotmail.couk','Sed Dictum Corporation','26/09/2023','IT');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-26 18:11:06
