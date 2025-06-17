import InternalLink from '@components/InternalLink/InternalLink'
import { NAV_ROUTES } from '@constants/nav-routes'

const NavList = () => {
	return (
		<ul className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
			{NAV_ROUTES.map((route, index) => (
				<li key={route.name}>
					<InternalLink
						href={route.url}
						className={`px-3 py-2 text-base font-medium ${
							index === NAV_ROUTES.length - 1
								? 'bg-black text-white hover:bg-gray-800'
								: 'text-gray-900 hover:text-indigo-600'
						}`}
					>
						{route.name}
					</InternalLink>
				</li>
			))}
		</ul>
	)
}

export default NavList
