-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2022 at 05:20 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pizzawebapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` int(11) NOT NULL COMMENT '1 if deleted otherwise active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`id`, `name`, `price`, `description`, `status`) VALUES
(7, 'California ', '199', 'gikan sa california', 0),
(8, 'Rama Hutchinson', '371', 'Dolor magna dolorem ', 0),
(9, 'Kylan Browning', '863', 'Veritatis commodi re', 0),
(10, 'Amir Brock', '435', 'Eaque rem dolore ut ', 0),
(11, 'Akeem Wolfe', '762', 'In laboris quia elig', 0),
(12, 'Alma Heath', '858', 'Delectus officiis e', 0),
(13, 'Sylvester Boone', '428', 'Quis quibusdam autem', 0),
(14, 'test', '1', 'test', 0),
(15, 'Virginia Hull', '61', 'Nulla quidem et temp', 0),
(16, 'Ulla Daniel', '70', 'Qui consequatur sus', 0),
(17, 'Daquan Garner', '295', 'Quia eveniet enim c', 0),
(19, 'last', '418', 'Ad qui dolore magna ', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `userid` int(11) NOT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `contact` varchar(255) NOT NULL,
  `age` int(255) NOT NULL,
  `address` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `date_created` text NOT NULL,
  `status` int(1) NOT NULL COMMENT '0 if deleted otherwise active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`userid`, `firstname`, `lastname`, `contact`, `age`, `address`, `email`, `password`, `date_created`, `status`) VALUES
(11, 'Lareina', 'Browning', 'Consequuntur eum rat', 32, 'Explicabo Anim porr', 'kazes@mailinator.com', '$2b$10$nR484ABicQ6UuqyGr3yHkO6YRmQtxOmFTaWBM.8C3fqegxe2frkce', '12/8/2022', 0),
(12, 'tst', 'Mcknight', 'Sed debitis ipsa su', 22, 'Non aperiam sed plac', 'nery@mailinator.com', '$2b$10$y4ELRXfmCCKt8DjJGCoSxeCvisfSlO1FU3jMInh/bPd5SCpRf6gFS', '12/8/2022', 0),
(31, 'Eden', 'Cline', 'Quibusdam perferendi', 0, 'Tempora non perspici', 'myzybavoxa@mailinator.com', 'Pa$$w0rd!', '12/8/2022', 0),
(32, 'Medge', 'Norris', 'Molestiae tenetur ac', 0, 'Enim et hic odit ut ', 'wyqage@mailinator.com', 'Pa$$w0rd!', '12/8/2022', 0),
(33, 'Georgia', 'Jackson', 'Aut ipsum aliqua V', 0, 'Eligendi minus magna', 'venemase@mailinator.com', '$2b$10$dh38l098wsHu6AzEeBWBtegO9VrgLk3v3MqMGV.lkUyS5ZUWBFOvu', '12/8/2022', 0),
(34, 'Tobias', 'Cunningham', 'Iste nobis soluta iu', 0, 'Tempore nulla dolor', 'taqy@mailinator.com', '$2b$10$H6jWJi07KTMcWC0H37JcOe5.Km.LAbTk2aOS4jfe97wewaYLbSqqC', '12/8/2022', 0),
(35, 'Deirdre', 'Mccoy', 'Incidunt eveniet a', 0, 'Error perferendis ma', 'dutinoz@mailinator.com', '$2b$05$627VTvFL9lGlHkYLaVYgqeUcP7gDD6wOgjAJy7euf13g/PSGMK4YW', '12/8/2022', 0),
(36, 'Evemil', 'Berdin', '09390277063', 27, 'Purok rambo, Babag lapu-lapu city, cebu', 'evemil.berdin@proweaver.net', '123123', '12/8/2022', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
