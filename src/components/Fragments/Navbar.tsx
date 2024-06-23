import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Navbar() {
    return (
        <>
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
        </>
    )
}