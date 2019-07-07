-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
<<<<<<< HEAD
-- Generation Time: Jul 07, 2019 at 09:06 AM
=======
-- Generation Time: Jun 15, 2019 at 03:29 PM
>>>>>>> bf8e481e8db403200bfb606549d848c77fe7f3da
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
<<<<<<< HEAD
-- Database: `learn-nodejs`
=======
-- Database: `node-tutorial`
>>>>>>> bf8e481e8db403200bfb606549d848c77fe7f3da
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
<<<<<<< HEAD
  `password` varchar(512) DEFAULT NULL,
=======
>>>>>>> bf8e481e8db403200bfb606549d848c77fe7f3da
  `phone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

<<<<<<< HEAD
INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`) VALUES
(1, 'Saurabh', 'saurabh@gmail.com', '12345', 1234567890),
(2, 'Shubham', 'shubham@gmail.com', '123456', 1223456789),
(3, 'Saurabh2', 'saurabh@gmail.com', '12345', 1234567890),
(6, 'Deep2', 'deep@gamil.com', '12234566', 1234678900);
=======
INSERT INTO `users` (`id`, `name`, `email`, `phone`) VALUES
(3, 'Saurabh', 'saurabh@gmail.com', 1234567890),
(4, 'Shubham', 'shubham@gmail.com', 1223456789),
(5, 'Deep', 'deep@gamil.com', 1234678900);
>>>>>>> bf8e481e8db403200bfb606549d848c77fe7f3da

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
<<<<<<< HEAD
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
=======
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
>>>>>>> bf8e481e8db403200bfb606549d848c77fe7f3da
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
