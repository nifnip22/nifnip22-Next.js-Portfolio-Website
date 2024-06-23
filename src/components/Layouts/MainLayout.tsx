import Navbar from '@/components/Fragments/Navbar';
import Footer from '@/components/Fragments/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className='px-24 py-16 w-full h-screen flex flex-col justify-between'>
				<Navbar />
                    {children}
				<Footer />
			</div>
		</>
	);
}
