import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Home() {
	return (
		<>
			<div className='px-24 py-16 h-screen flex flex-col justify-between'>
				{/* Navbar */}
				<div className='flex justify-between items-center'>
					<div className='flex items-center gap-x-20 text-lg text-gray-100'>
						<h3>Home</h3>
						<h3>About</h3>
						<h3>Projects</h3>
					</div>
					<div className='flex items-center gap-x-12'>
						<GitHubIcon className='text-gray-100 text-4xl' />
						<LinkedInIcon className='text-gray-100 text-4xl' />
						<FacebookIcon className='text-gray-100 text-4xl' />
						<InstagramIcon className='text-gray-100 text-4xl' />
						<XIcon className='text-gray-100 text-4xl' />
					</div>
				</div>

				{/* Main Content */}
				<div id='main-container' className='flex overflow-x-hidden h-full'>
					<section id='home' className='section w-screen h-full flex flex-row justify-between items-center gap-x-32'>
						<div className='flex flex-col gap-y-8'>
							<p className='text-gray-100 text-2xl'>Hi, my name is</p>
							<h1 className='w-[410px] text-8xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-slate-400 to-gray-100'>nifnip22</h1>
							<p className='text-gray-100 text-2xl leading-loose'>
								Junior software engineer with a strong passion for web programming. My goal is to develop into a proficient full-stack developer, equipped with a deep understanding of both frontend and backend technologies.
							</p>
						</div>
						<div className='w-3/5 h-4/5 bg-gray-100 opacity-40 rounded-tl-[95px] rounded-br-[95px]'></div>
					</section>

					{/* More Sectors */}
				</div>

				{/* Footer */}
				<div className='flex justify-between items-center'>
					<div className='flex text-lg text-gray-100'>
						<p>
							© 2024, made by <b>nifnip22</b> with Next.js and deploy by <b>Vercel</b>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
