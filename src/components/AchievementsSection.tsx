import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // This import requires react-i18next to be installed
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, Award, Calendar, FileText } from "lucide-react"; // Ensure lucide-react is installed: npm install lucide-react

// IMPORTANT: This is placeholder data for demonstration.
// You should update your i18n JSON file (e.g., public/locales/en/translation.json)
// to include the 'type' property for each achievement.
// Example for your i18n 'achievements.items' array:
// {
//   "title": "Arduino Review Paper Publication",
//   "description": "...",
//   "image": "path/to/arduino_paper.jpg",
//   "date": "2023-01-15",
//   "type": "technical", // <--- ADD THIS PROPERTY
//   "isPlaceholder": false
// }
//
// For now, I'll use a local mock data structure to show how the filtering works.
// When you update your i18n file, you will replace 'mockAchievementsData'
// with 't("achievements.items", { returnObjects: true })'

const AchievementsSection: React.FC = () => {
	const { t } = useTranslation();
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [selectedCertificate, setSelectedCertificate] = useState<any | null>(
		null
	);
	// New state to manage the active tab: 'technical' or 'sport_eca'
	const [activeTab, setActiveTab] = useState("technical");

	// Filter achievements based on the active tab
	// IMPORTANT: For development and if i18n data isn't fully set up yet, you can
	// uncomment the line below to use mockData, and comment out the t() call.
	// const allAchievements = mockAchievementsData;
	const allAchievements = (t("achievements.items", { returnObjects: true }) ||
		[]) as any[];

	const filteredAchievements = allAchievements.filter(
		(achievement) => achievement.type === activeTab
	);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	const openCertificate = (certificate: any) => {
		if (!certificate.isPlaceholder) {
			setSelectedCertificate(certificate);
		}
	};

	const closeCertificate = () => {
		setSelectedCertificate(null);
	};

	return (
		<section id="achievements" className="py-20 bg-primary relative">
			<div className="container mx-auto px-4">
				<motion.div
					ref={ref}
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="max-w-6xl mx-auto"
				>
					{/* Section Heading */}
					<motion.h2
						variants={itemVariants}
						className="section-heading flex items-center gap-2"
					>
						<Award size={24} className="text-accent" />
						{t("achievements.title")}
					</motion.h2>

					{/* New Tab Navigation (Segmented Control) */}
					<motion.div
						variants={itemVariants}
						className="flex justify-center mb-8 sm:mb-12"
					>
						<div className="relative p-1 rounded-full bg-secondary shadow-lg flex w-full max-w-sm sm:max-w-md">
							{" "}
							{/* Added w-full max-w for responsiveness */}
							{/* Animated background indicator for the active tab */}
							<motion.div
								className="absolute h-full bg-accent rounded-full z-0"
								initial={false}
								animate={{
									x: activeTab === "technical" ? "0%" : "100%",
									width: "50%",
								}}
								transition={{ type: "spring", stiffness: 500, damping: 30 }}
							/>
							{/* Technical Achievements Button */}
							<button
								className={`relative flex-1 px-4 sm:px-8 py-3 text-lg font-semibold rounded-full transition-colors duration-300 z-10 ${
									// Added flex-1 and adjusted px
									activeTab === "technical"
										? "text-primary"
										: "text-gray-300 hover:text-white" // Changed active text to white for better contrast
								}`}
								onClick={() => setActiveTab("technical")}
								aria-pressed={activeTab === "technical"}
							>
								{t("achievements.tabs.technical")} {/* Localized tab name */}
							</button>
							{/* Sport & ECA Achievements Button */}
							<button
								className={`relative flex-1 px-4 sm:px-8 py-3 text-lg font-semibold rounded-full transition-colors duration-300 z-10 ${
									// Added flex-1 and adjusted px
									activeTab === "sport_eca"
										? "text-primary"
										: "text-gray-300 hover:text-white" // Changed active text to white for better contrast
								}`}
								onClick={() => setActiveTab("sport_eca")}
								aria-pressed={activeTab === "sport_eca"}
							>
								{t("achievements.tabs.sportEca")} {/* Localized tab name */}
							</button>
						</div>
					</motion.div>

					{/* Achievement Cards Grid with AnimatePresence for tab transitions */}
					{/* The key on motion.div makes Framer Motion re-animate the grid content when the tab changes */}
					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab} // This key is crucial for AnimatePresence to trigger exit/enter animations
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
						>
							{filteredAchievements.length > 0 ? (
								filteredAchievements.map((certificate: any, index: number) => (
									<motion.div
										key={certificate.id || index} // Use unique ID if available, fallback to index
										className={`certificate-card ${
											certificate.isPlaceholder ? "opacity-60" : ""
										}`}
										// FIX: Directly apply initial, animate, and exit for smooth transitions
										initial={{ opacity: 0, y: 50 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										whileHover={
											certificate.isPlaceholder ? {} : { scale: 1.05 }
										}
										onClick={() => openCertificate(certificate)}
									>
										<div className="relative overflow-hidden h-48 rounded-lg bg-primary">
											{" "}
											{/* Added bg-primary for consistent background */}
											<img
												src={certificate.image}
												alt={certificate.title}
												className="w-full h-full object-cover rounded-lg"
												onError={(e) => {
													e.currentTarget.onerror = null; // Prevent infinite loop
													e.currentTarget.src = `https://placehold.co/400x300/2a2e46/e0e0e0?text=Image+Error`; // Fallback image
												}}
											/>
											<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
												<span className="text-xs text-white/80 flex items-center gap-1">
													<Calendar size={12} className="text-accent" />
													{certificate.date}
												</span>
											</div>
											{!certificate.isPlaceholder && (
												<div className="absolute top-2 right-2 bg-accent/20 p-1 rounded-full">
													<FileText size={16} className="text-accent" />
												</div>
											)}
										</div>
										<div className="p-4 bg-secondary rounded-b-lg">
											{" "}
											{/* Added bg-secondary for card body */}
											<h3 className="text-lg font-medium text-text mb-1 flex items-center gap-2">
												{certificate.isPlaceholder ? (
													<Award size={16} className="text-textLight" />
												) : (
													<Award size={16} className="text-accent" />
												)}
												{certificate.title}
											</h3>
											<p className="text-sm text-textLight">
												{certificate.description}{" "}
												{certificate.link && (
													<a
														href={certificate.link}
														target="_blank"
														rel="noopener noreferrer"
														className="text-accent underline hover:text-accent/80 transition"
													>
														[View]
													</a>
												)}
											</p>
										</div>
									</motion.div>
								))
							) : (
								// Message when no achievements are found for the selected category
								<p className="text-textLight text-lg col-span-full text-center py-8">
									{t("achievements.noItems")}
								</p>
							)}
						</motion.div>
					</AnimatePresence>
				</motion.div>
			</div>

			{/* Certificate Modal */}
			<AnimatePresence>
				{selectedCertificate && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={closeCertificate}
					>
						<motion.div
							className="relative max-w-4xl w-full bg-secondary rounded-lg overflow-hidden border border-accent/20"
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
						>
							<button
								className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-1 z-10 hover:bg-accent/20 transition-colors duration-300"
								onClick={closeCertificate}
								aria-label="Close"
							>
								<X size={20} />
							</button>

							<div className="h-96">
								<img
									src={selectedCertificate.image}
									alt={selectedCertificate.title}
									className="w-full h-full object-contain"
									onError={(e) => {
										e.currentTarget.onerror = null;
										e.currentTarget.src = `https://placehold.co/400x300/2a2e46/e0e0e0?text=Image+Error`;
									}}
								/>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-semibold text-text mb-2 flex items-center gap-2">
									<Award size={20} className="text-accent" />
									{selectedCertificate.title}
								</h3>
								<p className="text-textLight">
									{selectedCertificate.description}{" "}
									{selectedCertificate.link && (
										<a
											href={selectedCertificate.link}
											target="_blank"
											rel="noopener noreferrer"
											className="text-accent underline hover:text-accent/80 transition"
										>
											[View]
										</a>
									)}
								</p>
								<p className="text-sm text-accent mt-2 flex items-center gap-2">
									<Calendar size={16} />
									{selectedCertificate.date}
								</p>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default AchievementsSection;
