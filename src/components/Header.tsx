import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
	Menu,
	X,
	
} from "lucide-react";

const Header: React.FC = () => {
	const { t } = useTranslation();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: t("header.home"), href: "#home" },
		{ name: t("header.about"), href: "#about" },
		{ name: t("header.skills"), href: "#skills" },
		{ name: t("header.languages"), href: "#languages" },
		{ name: t("header.projects"), href: "#projects" },
		{ name: t("header.achievements"), href: "#achievements" },
		{ name: t("header.contact"), href: "#contact" },
	];

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header
			className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
				isScrolled
					? "bg-primary/90 backdrop-blur-sm shadow-md py-3"
					: "bg-transparent py-5"
			}`}
		>
			<div className="container mx-auto px-4 flex justify-between items-center">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className="text-accent font-mono text-xl font-bold"
				>
					&lt;Sid /&gt;
          {/* Sid<span className="text-text">dhartha</span> */}
				</motion.div>

				{/* Desktop Navigation */}
				<motion.nav
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="hidden md:flex space-x-8"
				>
					{navLinks.map((link, index) => (
						<motion.a
							key={index}
							href={link.href}
							className="nav-link flex items-center gap-2"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
						>
							
							{link.name}
						</motion.a>
					))}
				</motion.nav>

				{/* Mobile Menu Button */}
				<motion.button
					className="block md:hidden text-text z-50"
					onClick={toggleMobileMenu}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					{isMobileMenuOpen ? (
						<X size={24} className="text-text" />
					) : (
						<Menu size={24} />
					)}
				</motion.button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						className="fixed inset-0 bg-primary/95 z-40 flex items-center justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<motion.nav
							className="flex flex-col items-center space-y-8 p-8"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 }}
						>
							{navLinks.map((link, index) => (
								<motion.a
									key={index}
									href={link.href}
									className="text-xl text-text hover:text-accent transition-colors duration-300 flex items-center gap-3"
									onClick={closeMobileMenu}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 + index * 0.1 }}
									whileHover={{ scale: 1.05, x: 5 }}
								>
									{/* <span className="text-accent">{link.icon}</span> */}
									{link.name}
								</motion.a>
							))}
						</motion.nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
