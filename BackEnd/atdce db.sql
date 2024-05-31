-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema atdce
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema atdce
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `atdce` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `atdce` ;

-- -----------------------------------------------------
-- Table `atdce`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atdce`.`admin` (
  `admin_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NULL DEFAULT NULL,
  `password` TEXT NULL DEFAULT NULL,
  `email` VARCHAR(100) NULL DEFAULT NULL,
  `full_name` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  UNIQUE INDEX `username` (`username` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `atdce`.`job_offer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atdce`.`job_offer` (
  `job_id` INT NOT NULL AUTO_INCREMENT,
  `job_position` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `salary` DECIMAL(10,0) NULL DEFAULT NULL,
  PRIMARY KEY (`job_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `atdce`.`job_candidate`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atdce`.`job_candidate` (
  `cand_id` INT NOT NULL AUTO_INCREMENT,
  `cand_name` VARCHAR(255) NOT NULL,
  `cand_email` VARCHAR(255) NOT NULL,
  `message` TEXT NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cand_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `atdce`.`application`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atdce`.`application` (
  `application_date` DATETIME NULL DEFAULT NULL,
  `resume_path` VARCHAR(1000) NULL DEFAULT NULL,
  `job_id` INT NOT NULL,
  `cand_id` INT NOT NULL,
  PRIMARY KEY (`cand_id`, `job_id`),
  INDEX `job_id` (`job_id` ASC) VISIBLE,
  CONSTRAINT `application_ibfk_1`
    FOREIGN KEY (`job_id`)
    REFERENCES `atdce`.`job_offer` (`job_id`),
  CONSTRAINT `application_ibfk_2`
    FOREIGN KEY (`cand_id`)
    REFERENCES `atdce`.`job_candidate` (`cand_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `atdce`.`blog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atdce`.`blog` (
  `blog_id` INT NOT NULL AUTO_INCREMENT,
  `blog_title` VARCHAR(100) NOT NULL,
  `blog_description` VARCHAR(1000) NOT NULL,
  `blog_author` VARCHAR(100) NOT NULL,
  `blog_img` VARCHAR(100) NULL DEFAULT NULL,
  `created_at` VARCHAR(100) NULL DEFAULT NULL,
  `updated_at` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`blog_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `atdce`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atdce`.`event` (
  `event_id` INT NOT NULL AUTO_INCREMENT,
  `event_title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `imge2` TEXT NOT NULL,
  `imge3` TEXT NOT NULL,
  `image1` VARCHAR(10000) NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`event_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `atdce`.`event_location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atdce`.`event_location` (
  `location_id` INT NOT NULL,
  `location_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`location_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `atdce`.`volunteer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atdce`.`volunteer` (
  `vol_id` INT NOT NULL AUTO_INCREMENT,
  `vol_name` VARCHAR(255) NOT NULL,
  `vol_email` VARCHAR(255) NOT NULL,
  `vol_phone` VARCHAR(20) NULL DEFAULT NULL,
  `registration_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`vol_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `atdce`.`event_participation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atdce`.`event_participation` (
  `event_id` INT NOT NULL,
  `vol_id` INT NOT NULL,
  `role` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`event_id`, `vol_id`),
  INDEX `vol_id` (`vol_id` ASC) VISIBLE,
  CONSTRAINT `event_participation_ibfk_1`
    FOREIGN KEY (`event_id`)
    REFERENCES `atdce`.`event` (`event_id`),
  CONSTRAINT `event_participation_ibfk_2`
    FOREIGN KEY (`vol_id`)
    REFERENCES `atdce`.`volunteer` (`vol_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `atdce`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atdce`.`project` (
  `project_id` INT NOT NULL AUTO_INCREMENT,
  `project_name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `project_url` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`project_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `atdce`.`partner`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atdce`.`partner` (
  `part_id` INT NOT NULL AUTO_INCREMENT,
  `part_name` VARCHAR(100) NULL DEFAULT NULL,
  `part_email` VARCHAR(100) NULL DEFAULT NULL,
  `part_phone` VARCHAR(20) NULL DEFAULT NULL,
  `part_address` VARCHAR(255) NULL DEFAULT NULL,
  `part_website` VARCHAR(100) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`part_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `atdce`.`fund`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atdce`.`fund` (
  `description` TEXT NULL DEFAULT NULL,
  `amount` DECIMAL(10,2) NOT NULL,
  `date_created` DATE NOT NULL,
  `project_id` INT NOT NULL,
  `part_id` INT NOT NULL,
  PRIMARY KEY (`project_id`, `part_id`),
  INDEX `part_id` (`part_id` ASC) VISIBLE,
  CONSTRAINT `fund_ibfk_1`
    FOREIGN KEY (`project_id`)
    REFERENCES `atdce`.`project` (`project_id`),
  CONSTRAINT `fund_ibfk_2`
    FOREIGN KEY (`part_id`)
    REFERENCES `atdce`.`partner` (`part_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `atdce`.`news`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atdce`.`news` (
  `news_id` INT NOT NULL AUTO_INCREMENT,
  `news_title` VARCHAR(255) NULL DEFAULT NULL,
  `content` TEXT NULL DEFAULT NULL,
  `news_author` VARCHAR(100) NULL DEFAULT NULL,
  `published_at` DATETIME NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`news_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `atdce`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atdce`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `isVerified` TINYINT(1) NULL DEFAULT '0',
  `emailToken` VARCHAR(255) NULL DEFAULT NULL,
  `refreshToken` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
