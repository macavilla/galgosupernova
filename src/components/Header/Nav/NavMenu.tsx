import { useState } from 'react'
import NavList from './NavList'

const NavMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<nav className="relative grow">
			<div className="flex items-center justify-end">
				{/* Mobile Menu Button */}
				<div className="sm:hidden">
					<button
						type="button"
						onClick={toggleMenu}
						className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
						aria-expanded={isOpen}
					>
						<span className="sr-only">Abrir menú</span>
						{/* Icon: Hamburger Menu */}
						{isOpen ? (
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						)}
					</button>
				</div>
				{/* Desktop Navigation */}
				<div className="hidden sm:block">
					<NavList />
				</div>
			</div>
			{/* Navigation Links */}
			<div
				className={`absolute z-50 top-full right-0 w-1/2 bg-white shadow-lg transition-transform transform ${
					isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
				} sm:hidden`}
			>
				{isOpen && (
					<div className="space-y-1 px-4 py-3">
						<NavList />
					</div>
				)}
			</div>
		</nav>
	)
}

export default NavMenu
