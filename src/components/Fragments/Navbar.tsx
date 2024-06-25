'use client';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {

	const pathname = usePathname();

	return (
		<>
			{/* Navbar */}
			<div className='flex justify-center xl:justify-between items-center'>
				<div className='flex items-center gap-x-20 text-md sm:text-lg text-gray-100'>
					<Link href={'/'} className={`link ${pathname === '/' ? 'opacity-100' : 'opacity-60'}`}>
						<h3>Home</h3>
					</Link>
					<Link href={'/about'} className={`link ${pathname === '/about' ? 'opacity-100' : 'opacity-60'}`}>
						<h3>About</h3>
					</Link>
					<Link href={'/projects'} className={`link ${pathname === '/projects' ? 'opacity-100' : 'opacity-60'}`}>
						<h3>Projects</h3>
					</Link>
				</div>
				<div className='items-center gap-x-12 hidden xl:flex'>
					<a href='https://github.com/nifnip22' target='_blank'>
						<GitHubIcon className='text-gray-100 opacity-60 hover:opacity-100 hover:scale-125 transition duration-300 text-4xl' />
					</a>
					<a href='https://www.linkedin.com/in/hanif-ahmad-18a879303/?trk=opento_sprofile_details' target='_blank'>
						<LinkedInIcon className='text-gray-100 opacity-60 hover:opacity-100 hover:scale-125 transition duration-300 text-4xl' />
					</a>
					<a href='https://www.facebook.com/profile.php?id=100089012786583' target='_blank'>
						<FacebookIcon className='text-gray-100 opacity-60 hover:opacity-100 hover:scale-125 transition duration-300 text-4xl' />
					</a>
					<a href='https://www.instagram.com/hnif.am22/' target='_blank'>
						<InstagramIcon className='text-gray-100 opacity-60 hover:opacity-100 hover:scale-125 transition duration-300 text-4xl' />
					</a>
					<a href='https://x.com/nifnip22' target='_blank'>
						<XIcon className='text-gray-100 opacity-60 hover:opacity-100 hover:scale-125 transition duration-300 text-4xl' />
					</a>
				</div>
			</div>
		</>
	);
}
