import { useForm } from "react-hook-form";
import { FormValue } from "./types";
import emailjs from "@emailjs/browser";
import { CustomTextIconButton } from "../CustomTextIconButton";
import { Reveal } from "../Reveal";
import { toast } from "react-toastify";

export const ContactCard = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm<FormValue>({
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	const onSubmit = (value: FormValue) => {
		const emailParams = {
			name: value.name,
			email: value.email,
			subject: value.subject,
			message: value.message,
		};
		if (
			process.env.REACT_APP_EMAILJS_SERVICE_ID &&
			process.env.REACT_APP_EMAILJS_TEMPLATE_ID &&
			emailParams &&
			process.env.REACT_APP_EMAILJS_PUBLIC_KEY
		) {
			emailjs
				.send(
					process.env.REACT_APP_EMAILJS_SERVICE_ID,
					process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
					emailParams,
					process.env.REACT_APP_EMAILJS_PUBLIC_KEY
				)
				.then(() => {
					reset();
					toast.success("Email sent successfully.", {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					});
				})
				.catch(() =>
					toast.error("Email failed to send. Try again later.", {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					})
				);
		}
	};

	return (
		<Reveal axis={"y"}>
			<div className="w-11/12 px-4 py-8 mx-auto rounded desktopS:w-2/3 bg-gradient-to-br from-light-purple to-light-blue">
				<h2 className="mb-4 text-3xl font-extrabold tracking-tight text-center text-white font-openSans desktopM:text-4xl desktopXL:text-5xl dark:text-[#1A1A40]">
					Contact Me
				</h2>
				<p className="mb-8 font-normal text-center text-white dark:text-[#1A1A40] font-openSans desktopM:text-xl desktopXL:text-2xl">
					Send me a message, I would love to connect!
				</p>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col mb-0 gap-7"
					noValidate
				>
					<div>
						<label className="block mb-2 text-sm font-medium text-white dark:text-[#1A1A40] desktopM:text-xl desktopXL:text-2xl">
							Name:
						</label>
						<input
							{...register("name", {
								required: { value: true, message: "Please enter a name" },
							})}
							type="text"
							id="name"
							className="shadow-sm bg-white dark:bg-[#1A1A40] dark:text-white text-sm rounded-lg focus:outline-2 focus:outline-offset-2 focus:outline-white dark:focus:outline-[#1A1A40] focus:outline text-black block w-full p-2.5 desktopM:text-xl desktopXL:text-2xl"
							placeholder="Name..."
						/>
						{!!errors.name?.message && (
							<div className="flex items-center gap-1">
								<i className="text-red-500 fa-solid fa-circle-exclamation" />
								<span className="text-red-500">{errors.name?.message}</span>
							</div>
						)}
					</div>
					<div>
						<label className="block mb-2 text-sm font-medium dark:text-[#1A1A40] text-white desktopM:text-xl desktopXL:text-2xl">
							Email:
						</label>
						<input
							{...register("email", {
								required: { value: true, message: "Please enter an email" },
								pattern: {
									value:
										/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: "Please enter a valid email address",
								},
							})}
							type="email"
							id="email"
							className="shadow-sm bg-white dark:bg-[#1A1A40] dark:text-white text-sm rounded-lg focus:outline-2 focus:outline-offset-2 focus:outline-white dark:focus:outline-[#1A1A40] focus:outline text-black block w-full p-2.5 desktopM:text-xl desktopXL:text-2xl"
							placeholder="name@provider.com"
						/>
						{!!errors.email?.message && (
							<div className="flex items-center gap-1">
								<i className="text-red-500 fa-solid fa-circle-exclamation" />
								<span className="text-red-500">{errors.email?.message}</span>
							</div>
						)}
					</div>
					<div>
						<label className="block mb-2 text-sm font-medium dark:text-[#1A1A40] text-white desktopM:text-xl desktopXL:text-2xl">
							Subject:
						</label>
						<input
							{...register("subject", {
								required: { value: true, message: "Please enter a subject" },
							})}
							type="text"
							id="subject"
							className="shadow-sm bg-white dark:bg-[#1A1A40] dark:text-white text-sm rounded-lg focus:outline-2 focus:outline-offset-2 focus:outline-white dark:focus:outline-[#1A1A40] focus:outline text-black block w-full p-2.5 desktopM:text-xl desktopXL:text-2xl"
							placeholder="Subject..."
						/>
						{!!errors.subject?.message && (
							<div className="flex items-center gap-1">
								<i className="text-red-500 fa-solid fa-circle-exclamation" />
								<span className="text-red-500">{errors.subject?.message}</span>
							</div>
						)}
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block mb-2 text-sm font-medium text-white dark:text-[#1A1A40] desktopM:text-xl desktopXL:text-2xl"
						>
							Message:
						</label>
						<textarea
							{...register("message", {
								required: { value: true, message: "Please enter a message" },
							})}
							id="message"
							rows={10}
							className="resize-none shadow-sm bg-white dark:bg-[#1A1A40] dark:text-white text-sm rounded-lg focus:outline-2 focus:outline-offset-2 focus:outline-white dark:focus:outline-[#1A1A40] focus:outline text-black block w-full p-2.5 desktopM:text-xl desktopXL:text-2xl"
							placeholder="Leave a message..."
						/>
						{!!errors.message?.message && (
							<div className="flex items-center gap-1">
								<i className="text-red-500 fa-solid fa-circle-exclamation" />
								<span className="text-red-500">{errors.message?.message}</span>
							</div>
						)}
					</div>
					<CustomTextIconButton
						icon="fas fa-paper-plane desktopXXL:text-4xl desktopL:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue"
						text="contact me"
						textStyling="desktopXXL:text-2xl desktopXL:text-xl desktopM:text-lg text-sm font-openSans uppercase font-bold text-transparent bg-clip-text bg-gradient-to-br from-light-purple to-light-blue"
						styling="desktopXXL:h-20 desktopL:h-16 h-12 desktopXXL:w-52 desktopL:w-44 w-40 bg-white shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 mx-auto dark:bg-[#1A1A40]"
						rippleColor="bg-gradient-to-br from-light-purple to-light-blue"
					/>
				</form>
			</div>
		</Reveal>
	);
};
