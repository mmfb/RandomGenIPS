-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 28, 2019 at 04:42 PM
-- Server version: 8.0.13-4
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vIOaUcb83a`
--

-- --------------------------------------------------------

--
-- Table structure for table `genders`
--

CREATE TABLE `genders` (
  `gender_id` int(11) NOT NULL,
  `gender_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `genders`
--

INSERT INTO `genders` (`gender_id`, `gender_name`) VALUES
(1, 'Male'),
(2, 'Female');

-- --------------------------------------------------------

--
-- Table structure for table `names`
--

CREATE TABLE `names` (
  `name_id` int(11) NOT NULL,
  `name_text` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `names`
--

INSERT INTO `names` (`name_id`, `name_text`) VALUES
(1, 'Manuel'),
(2, 'Maria');

-- --------------------------------------------------------

--
-- Table structure for table `names_genders`
--

CREATE TABLE `names_genders` (
  `names_genders_id` int(11) NOT NULL,
  `names_fk` int(11) NOT NULL,
  `genders_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `names_genders`
--

INSERT INTO `names_genders` (`names_genders_id`, `names_fk`, `genders_fk`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `names_types`
--

CREATE TABLE `names_types` (
  `names_types_id` int(11) NOT NULL,
  `names_fk` int(11) NOT NULL,
  `types_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `names_types`
--

INSERT INTO `names_types` (`names_types_id`, `names_fk`, `types_fk`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `type_id` int(11) NOT NULL,
  `type_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`type_id`, `type_name`) VALUES
(1, 'FirstName'),
(2, 'LastName');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`gender_id`);

--
-- Indexes for table `names`
--
ALTER TABLE `names`
  ADD PRIMARY KEY (`name_id`);

--
-- Indexes for table `names_genders`
--
ALTER TABLE `names_genders`
  ADD PRIMARY KEY (`names_genders_id`),
  ADD KEY `names_fk` (`names_fk`),
  ADD KEY `gender_fk` (`genders_fk`);

--
-- Indexes for table `names_types`
--
ALTER TABLE `names_types`
  ADD PRIMARY KEY (`names_types_id`),
  ADD KEY `names_types_names_fk` (`names_fk`),
  ADD KEY `names_types_types_fk` (`types_fk`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`type_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `genders`
--
ALTER TABLE `genders`
  MODIFY `gender_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `names`
--
ALTER TABLE `names`
  MODIFY `name_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `names_genders`
--
ALTER TABLE `names_genders`
  MODIFY `names_genders_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `names_types`
--
ALTER TABLE `names_types`
  MODIFY `names_types_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `names_genders`
--
ALTER TABLE `names_genders`
  ADD CONSTRAINT `gender_fk` FOREIGN KEY (`genders_fk`) REFERENCES `genders` (`gender_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `names_fk` FOREIGN KEY (`names_fk`) REFERENCES `names` (`name_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `names_types`
--
ALTER TABLE `names_types`
  ADD CONSTRAINT `names_types_names_fk` FOREIGN KEY (`names_fk`) REFERENCES `names` (`name_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `names_types_types_fk` FOREIGN KEY (`types_fk`) REFERENCES `types` (`type_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
