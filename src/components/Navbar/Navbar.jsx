import { useState } from 'react'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<nav className="bg-white border-b border-gray-200">
			<div className="mx-auto px-4 sm:px-6 lg:px-10">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex-shrink-0 flex items-center">
						<a href="/" className="text-2xl font-bold text-gray-800">
							galgosupernova
						</a>
					</div>

					{/* Navigation Links */}
					<div className="hidden sm:flex sm:space-x-8">
						<a
							href="/que"
							className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
						>
							¿qué?
						</a>
						<a
							href="/como"
							className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
						>
							¿cómo?
						</a>
						<a
							href="/donde"
							className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
						>
							¿dónde y cuándo?
						</a>
						<a
							href="/hola"
							className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
						>
							¿hola?
						</a>
						<a
							href="/collabora"
							className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
						>
							¡colaborá!
						</a>
					</div>

					{/* Mobile Menu Button */}
					<div className="sm:hidden flex items-center">
						<button
							type="button"
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							aria-expanded={isOpen}
						>
							<span className="sr-only">Abrir menú</span>
							{/* Icon: Hamburger Menu */}
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
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="sm:hidden space-y-1 px-2 pt-2 pb-3">
						<a
							href="/"
							className="block text-gray-900 hover:text-indigo-600 px-3 py-2 text-base font-medium"
						>
							¿qué?
						</a>
						<a
							href="/como"
							className="block text-gray-500 hover:text-indigo-600 px-3 py-2 text-base font-medium"
						>
							¿cómo?
						</a>
						<a
							href="/donde"
							className="block text-gray-500 hover:text-indigo-600 px-3 py-2 text-base font-medium"
						>
							¿dónde y cuándo?
						</a>
						<a
							href="/hola"
							className="block text-gray-500 hover:text-indigo-600 px-3 py-2 text-base font-medium"
						>
							¿hola?
						</a>
						<a
							href="/collabora"
							className="block text-gray-500 hover:text-indigo-600 px-3 py-2 text-base font-medium"
						>
							¡colaborá!
						</a>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
