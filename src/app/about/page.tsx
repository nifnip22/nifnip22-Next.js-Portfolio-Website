'use client';
import Card from '@/components/Fragments/Card';
import MainLayout from '@/components/Layouts/MainLayout';
import { motion, cubicBezier } from 'framer-motion';
import React, { createContext } from 'react';

const MyContext = createContext<any>(null);

export default function About() {
	return (
		<>
			<MainLayout>
				<div className='h-4/5 flex flex-col justify-start gap-y-20'>
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: cubicBezier(0.37, 0.01, 0.25, 0.95) }}
						className='2xl:w-[490px] text-6xl sm:text-7xl text-center 2xl:text-start font-bold bg-gradient-to-r text-transparent bg-clip-text from-slate-500 to-gray-100'>
						About Me
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: cubicBezier(0.37, 0.01, 0.25, 0.95), delay: 0.3 }}
						className='h-full flex flex-col 2xl:flex-row gap-x-20 gap-y-20'>
						<Card>
							<h1 className='absolute text-2xl sm:text-3xl text-gray-100 font-semibold leading-relaxed transition-transform duration-300 group-hover:-translate-y-52'>When you start to learn Programming?</h1>
							<div className='absolute top-36 group-hover:top-0 transition-all duration-300 text-lg sm:text-xl text-gray-100 leading-relaxed'>
								I started learning web programming in vocational school back in 2021. Initially, I was introduced to basic concepts like HTML and CSS, which gave me a solid foundation for creating simple web pages. As I
								progressed, I delved deeper into more complex technologies such as JavaScript, PHP, and etc..
							</div>
						</Card>
						<Card>
							<h1 className='text-2xl sm:text-3xl text-gray-100 font-semibold leading-relaxed'>Programming languages & tools expertise?</h1>
							<div className='text-lg sm:text-xl text-gray-100 leading-relaxed'>
								<div className='icon-container flex flex-row items-center justify-center gap-x-1'>
									<div className='icon icon-1'>
										<svg xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' viewBox='0 0 24 24'>
											<g fill='none'>
												<g fill='currentColor' clip-path='url(#akarIconsHtmlFill0)'>
													<path d='M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656zM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058zm4.181 0h1.083v2.167h1.52v1.07h-2.603z' />
													<path
														fill-rule='evenodd'
														d='M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571z'
														clip-rule='evenodd'
													/>
												</g>
												<defs>
													<clipPath id='akarIconsHtmlFill0'>
														<path fill='#fff' d='M0 0h24v24H0z' />
													</clipPath>
												</defs>
											</g>
										</svg>
									</div>
									<div className='icon icon-2'>
										<svg xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' viewBox='0 0 24 24'>
											<path
												fill='currentColor'
												d='M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5z'
											/>
											<path
												fill='currentColor'
												fill-rule='evenodd'
												d='m11.991 24l-6.944-1.928L3 4.717h18L18.954 22.07zM7.047 12.573l.191 2.128h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.333l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571l.384-4.309H6.664l.194 2.129h8.136l-.194 2.18z'
												clip-rule='evenodd'
											/>
										</svg>
									</div>
									<div className='icon icon-3'>
										<svg xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' viewBox='0 0 24 24'>
											<path
												fill='currentColor'
												d='M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.334 13.055q1.08.87 2.156.858q.66 0 1.012-.242a.75.75 0 0 0 .341-.66a.97.97 0 0 0-.34-.748q-.352-.307-1.332-.616q-1.177-.34-1.815-.88q-.626-.54-.638-1.507q0-.913.792-1.529q.77-.616 1.97-.616q1.672 0 2.683.814l-.77 1.199a2.6 2.6 0 0 0-.935-.462a3.2 3.2 0 0 0-.946-.165q-.57 0-.913.209q-.34.21-.34.55q0 .374.417.638q.42.254 1.43.561q1.221.363 1.738.968t.517 1.54q0 .957-.737 1.65q-.726.682-2.112.715q-1.815 0-3.036-1.089zm-5.53.638q.352.22.847.22q.517 0 .858-.297q.34-.308.341-1.067v-5.302h1.485v5.588q-.033 1.298-.748 1.87a2.5 2.5 0 0 1-.891.484a3.3 3.3 0 0 1-.935.143q-.825 0-1.463-.286q-.682-.307-1.144-1.089l1.034-.847q.285.385.616.583'
											/>
										</svg>
									</div>
									<div className='icon icon-4'>
										<svg xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' viewBox='0 0 24 24'>
											<path
												fill='currentColor'
												d='M19.24 3H4.76A1.76 1.76 0 0 0 3 4.76v14.48A1.76 1.76 0 0 0 4.76 21h14.48A1.76 1.76 0 0 0 21 19.24V4.76A1.76 1.76 0 0 0 19.24 3m-5.8 10h-2.25v6.44H9.4V13H7.15v-1.46h6.29zm5.8 5.28a1.71 1.71 0 0 1-.67.74a3 3 0 0 1-1 .39a5.81 5.81 0 0 1-1.2.12a7 7 0 0 1-1.23-.11a4.52 4.52 0 0 1-1-.33v-1.71l-.06-.06h.06v.07a3.41 3.41 0 0 0 1 .54a3.06 3.06 0 0 0 1.13.2a2.58 2.58 0 0 0 .6-.06a1.47 1.47 0 0 0 .42-.17a.75.75 0 0 0 .25-.25a.69.69 0 0 0-.06-.74a1.24 1.24 0 0 0-.35-.33a3.12 3.12 0 0 0-.53-.3l-.67-.28a3.57 3.57 0 0 1-1.37-1a2 2 0 0 1-.46-1.33a2.16 2.16 0 0 1 .24-1.06a2.09 2.09 0 0 1 .66-.71a2.88 2.88 0 0 1 1-.42a5.11 5.11 0 0 1 1.19-.13a7 7 0 0 1 1.09.07a4.53 4.53 0 0 1 .88.23v1.65a2.42 2.42 0 0 0-.42-.24a3.58 3.58 0 0 0-.49-.17a3 3 0 0 0-.49-.1a2.45 2.45 0 0 0-.46 0a2.29 2.29 0 0 0-.56.06a1.54 1.54 0 0 0-.43.16a.78.78 0 0 0-.26.25a.63.63 0 0 0-.09.33a.62.62 0 0 0 .1.35a1.19 1.19 0 0 0 .3.29a2.15 2.15 0 0 0 .46.28l.63.28a6.56 6.56 0 0 1 .84.42a2.65 2.65 0 0 1 .64.49a1.79 1.79 0 0 1 .42.63a2.48 2.48 0 0 1 .14.85a2.68 2.68 0 0 1-.25 1.08z'
											/>
										</svg>
									</div>
									<div className='icon icon-5'>
										<svg xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' viewBox='0 0 24 24'>
											<path
												fill='currentColor'
												d='M12 5.5C5.271 5.5 0 8.355 0 12s5.271 6.5 12 6.5s12-2.855 12-6.5s-5.271-6.5-12-6.5m-1.246 2h1.31l-.416 2h1.17c.742 0 1.24.104 1.524.363c.277.256.361.676.25 1.248l-.52 2.389H12.74l.479-2.209c.058-.303.035-.514-.067-.625c-.101-.111-.324-.166-.658-.166h-1.049l-.633 3H9.5zM5 9.5h2.666c1.271 0 2.041.852 1.74 2.123C9.056 13.1 8.12 13.5 6.396 13.5h-.824L5.311 15H3.986zm10.5 0h2.666c1.271 0 2.041.852 1.74 2.123c-.35 1.477-1.287 1.877-3.01 1.877h-.824l-.261 1.5h-1.325zm-9.365 1l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.135-.813-.99-.813zm10.5 0l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.134-.813-.99-.813z'
											/>
										</svg>
									</div>
									<div className='icon icon-6'>
										<svg xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' viewBox='0 0 24 24'>
											<path
												fill='currentColor'
												d='M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12'
											/>
										</svg>
									</div>
									<div className='icon icon-7'>
										<svg xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' viewBox='0 0 24 24'>
											<path
												fill='currentColor'
												d='M21.7 6.53c.01.02.01.05.01.08v4.29c0 .1-.06.22-.15.27l-3.61 2.08v4.11c0 .11-.05.21-.15.27l-7.52 4.33c-.02.01-.04.04-.06.04H10s0-.03-.04-.04l-7.52-4.33a.32.32 0 0 1-.15-.27V4.5c0-.05 0-.08.01-.1c0-.01.01-.02.01-.03c0-.02.01-.03.02-.05c0-.01.01-.02.02-.03l.03-.03l.03-.03c.01-.01.02-.02.03-.02L6.2 2.04c.1-.04.22-.04.3 0l3.78 2.17c.01.01.02.01.03.02l.03.03l.03.03c.01.01.02.02.02.03c.01.02.02.03.02.05c0 .01.01.02.01.03c.01.03.01.05.01.1v8l3.14-1.78V6.61c0-.03 0-.06.01-.08l.01-.03s.01-.03.02-.05c0-.01.01-.02.02-.03l.03-.03l.03-.03c.01-.01.02-.02.03-.02l3.78-2.17c.08-.06.2-.06.3 0l3.76 2.17c.01 0 .02.01.03.02l.03.03l.03.03c.01.01.01.02.02.03c.01.02.01.05.02.05s.01 0 .01.03m-.61 4.19V7.15l-3.14 1.8v3.55zm-3.76 6.46V13.6l-6.9 3.94v3.61zM2.91 5v12.18l6.9 3.97v-3.61l-3.6-2.04H6.2c-.01 0-.02 0-.03-.03c-.01 0-.02-.01-.03-.02l-.03-.03c-.01-.01-.01-.02-.02-.03c-.01-.02-.01-.03-.02-.04c0-.02-.01-.03-.01-.04c-.01-.01-.01-.03-.01-.04V6.82zm3.45-2.32L3.23 4.5l3.13 1.78L9.5 4.5zm3.45 10.2V5L6.67 6.82v7.87zm7.83-8.08L14.5 6.61l3.14 1.8l3.13-1.8zm-.31 4.15l-3.14-1.8v3.57l3.14 1.78zM10.12 17L17 13.06l-3.12-1.8L7 15.23z'
											/>
										</svg>
									</div>
									<div className='icon icon-8'>
										<svg xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' viewBox='0 0 24 24'>
											<path
												fill='currentColor'
												d='M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9'
											/>
										</svg>
									</div>
									<div className='icon icon-9'>
										<svg xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' viewBox='0 0 24 24'>
											<path fill='currentColor' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4-14h-1.35v4H16zM9.346 9.71l6.059 7.828l1.054-.809L9.683 8H8v7.997h1.346z' />
										</svg>
									</div>
								</div>
							</div>
						</Card>
						<Card
						// title="What's your main focus now?"
						// subtitle='My main focus now is to deepen my knowledge in web programming, aiming to become a proficient Fullstack Web Developer. I am also interested in learning programming languages ​​related to data analysis and OOP such as Python, Java, C#, and others.'
						>
							<h1 className='absolute text-2xl sm:text-3xl text-gray-100 font-semibold leading-relaxed transition-transform duration-300 group-hover:-translate-y-52'>What is your main focus now?</h1>
							<div className='absolute top-36 group-hover:top-0 transition-all duration-300 text-lg sm:text-xl text-gray-100 leading-relaxed'>
								My main focus now is to deepen my knowledge in web programming, aiming to become a proficient Fullstack Web Developer. I am also interested in expanding my skill set to include programming languages related
								to data analysis and object-oriented programming (OOP) such as Python, Java, and C#.
							</div>
						</Card>
					</motion.div>
				</div>
			</MainLayout>
		</>
	);
}
