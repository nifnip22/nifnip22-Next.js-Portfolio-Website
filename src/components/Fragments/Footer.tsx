import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
	return (
		<>
			{/* Footer */}
			<div className='flex justify-center xl:justify-normal items-center'>
				<div className='flex flex-col gap-y-8 text-lg text-center text-gray-100 opacity-60 hover:opacity-100 transition duration-300'>
					<p>
						© 2024, made by <b>nifnip22</b> with Next.js and deploy by <b>Vercel</b>
					</p>
					<div className='flex xl:hidden items-center justify-center xl:justify-normal gap-x-6'>
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
			</div>
		</>
	);
}
