import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import {
	Linkedin,
	Github,
	Mail,
	Send,
	User,
	AtSign,
	MessageSquare,
	CheckCircle,
	AlertCircle,
} from "lucide-react";

const ContactSection: React.FC = () => {
	const { t } = useTranslation();
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
		"idle"
	);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// const handleSubmit = (e: React.FormEvent) => {
	//   e.preventDefault();
	//   // Simulate form submission
	//   setTimeout(() => {
	//     setFormStatus('success');
	//     setFormData({ name: '', email: '', message: '' });

	//     // Reset status after 3 seconds
	//     setTimeout(() => {
	//       setFormStatus('idle');
	//     }, 3000);
	//   }, 1000);
	// };

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID, // ✅ Replace with your actual EmailJS service ID
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ✅ Replace with your actual EmailJS template ID
				formData, // must match the field names in EmailJS template: name, email, message
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY // ✅ Replace with your actual EmailJS public key
			)
			.then(() => {
				setFormStatus("success");
				setFormData({ name: "", email: "", message: "" });

				setTimeout(() => {
					setFormStatus("idle");
				}, 3000);
			})
			.catch((error) => {
				console.error("EmailJS error:", error);
				setFormStatus("error");

				setTimeout(() => {
					setFormStatus("idle");
				}, 3000);
			});
	};

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
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<section id="contact" className="py-20 bg-secondary relative">
			<div className="container mx-auto px-4">
				<motion.div
					ref={ref}
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="max-w-4xl mx-auto"
				>
					<motion.h2
						variants={itemVariants}
						className="section-heading flex items-center gap-2"
					>
						<Mail size={24} className="text-accent" />
						{t("contact.title")}
					</motion.h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<motion.div variants={itemVariants}>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-text mb-2 flex items-center gap-2"
									>
										<User size={16} className="text-accent" />
										{t("contact.name")}
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="contact-input"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-text mb-2 flex items-center gap-2"
									>
										<AtSign size={16} className="text-accent" />
										{t("contact.email")}
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="contact-input"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-text mb-2 flex items-center gap-2"
									>
										<MessageSquare size={16} className="text-accent" />
										{t("contact.message")}
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className="contact-input"
									/>
								</div>

								<motion.button
									type="submit"
									className="btn-secondary inline-flex items-center"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Send size={18} className="mr-2" />
									{t("contact.send")}
								</motion.button>

								{formStatus === "success" && (
									<motion.p
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className="text-green-400 mt-4 flex items-center gap-2"
									>
										<CheckCircle size={16} />
										{t("contact.success")}
									</motion.p>
								)}

								{formStatus === "error" && (
									<motion.p
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className="text-red-400 mt-4 flex items-center gap-2"
									>
										<AlertCircle size={16} />
										{t("contact.error")}
									</motion.p>
								)}
							</form>
						</motion.div>

						<motion.div
							variants={itemVariants}
							className="flex flex-col justify-center"
						>
							<div className="space-y-6">
								<p className="text-textLight mb-6">
									Feel free to reach out through the form or connect with me
									directly through these platforms.
								</p>

								<div className="flex items-center space-x-4">
									<motion.a
										href="https://www.linkedin.com/in/siddhartha-subedi-329827315"
										target="_blank"
										rel="noopener noreferrer"
										className="text-textLight hover:text-accent transition-colors duration-300"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<Linkedin size={24} />
									</motion.a>
									<span className="text-textLight">
										{t("contact.social.linkedin")}
									</span>
								</div>

								<div className="flex items-center space-x-4">
									<motion.a
										href="https://github.com/siddharthayas"
										target="_blank"
										rel="noopener noreferrer"
										className="text-textLight hover:text-accent transition-colors duration-300"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<Github size={24} />
									</motion.a>
									<span className="text-textLight">
										{t("contact.social.github")}
									</span>
								</div>

								<div className="flex items-center space-x-4">
									<motion.a
										href="mailto:siddharthasubedi4@gmail.com"
										className="text-textLight hover:text-accent transition-colors duration-300"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<Mail size={24} />
									</motion.a>
									<span className="text-textLight">
										{t("contact.social.email")}
									</span>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactSection;
