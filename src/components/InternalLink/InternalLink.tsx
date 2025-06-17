const baseUrl = import.meta.env.BASE_URL || '/'

interface InternalLinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string
	className?: string
	children?: React.ReactNode
}
const InternalLink = ({
	href,
	className,
	children,
	...props
}: InternalLinkProps) => (
	<a href={`${baseUrl}${href}`} className={className} {...props}>
		{children}
	</a>
)

export default InternalLink
