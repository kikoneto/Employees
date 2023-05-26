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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user1','password1','$2b$10$zXERM7edlEltnHScZY2LHun9cLaPpFHQDgNQvK5H3KqgHQ3IQ15ey','user1@example.com'),(2,'user2','password2','$2b$10$JsROnVpvny0hfHj1ZdehO.tu4Q5KZpQ0QfXltujSdTcFpsL0Dc13m','user2@example.com'),(3,'user3','password3','$2b$10$OB5tDcHaPr/TLDoBCqnmgeWdLgV0QWIL/8CDg7N6km9BTtLEagUN2','user3@example.com'),(4,'user4','password3','$2b$10$QUR02ysuzzEROrbjcgWT2OTBrMTwEo9CSzZqqlfJgYAqBs19jJF6C','user4@example.com'),(5,'user5','password3','$2b$10$F24g8m9qFSRCtzI3Aj/Gfu1HdZkfKy.sCPYjV4qyiJuXuFAc/JxNy','user5@example.com'),(6,'user6','password3','$2b$10$qyXre5DEWmhSYdxXnvB8Ze1q3NImwC56UhPRzDk95AFRuGsQ15j1C','user6@example.com'),(7,'user7','password7','$2b$10$k/.AX2MJhcdn3jNEp4vXAuJHirULXmYD/Nw5TGsDmElS3DSIOkgj.','user7@example.com'),(8,'user8','password7','$2b$10$DzzUwstNfqgLIuqM7LIZX.V09EFh/m1MXycbMM5uiGTlvDUeU9ayG','user8@example.com'),(9,'user10@example.com','password10','$2b$10$53k5AENRJGdBAFkQ5CiDzeoD5VYpDsfJRQmTHBGJojlqPXmlF0VGO','user10@example.com'),(10,'user12@example.com','password12','$2b$10$CihoUrELJTPutPbGJ49K.ORf7ATG10.F0YGPr.mdHolEhUwmeJRJK','user12@example.com'),(11,'user13','password13','$2b$10$wy0O32tLnBjjDuJb3NCtlOniX0ALXJBTfqQAPAkpJTVRruPx0SFXa','user13@example.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
