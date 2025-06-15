const baseUrl = import.meta.env.BASE_URL || '/'

interface InternalLinkProps {
	href: string
	className?: string
	children?: React.ReactNode
}
const InternalLink = ({ href, className, children }: InternalLinkProps) => (
	<a href={`${baseUrl}${href}`} className={className}>
		{children}
	</a>
)

export default InternalLink
