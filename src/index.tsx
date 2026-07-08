import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react"

export type KitApp = "training" | "nutrition"
export type RealtimeStatus = "live" | "connecting" | "error"

const apps: ReadonlyArray<{ readonly id: KitApp; readonly label: string; readonly href: string }> = [
	{ id: "training", label: "Training", href: "https://workout.kitlangton.dev" },
	{ id: "nutrition", label: "Nutrition", href: "https://nutrition.kitlangton.dev" },
]

const join = (...values: ReadonlyArray<string | undefined | false>) => values.filter(Boolean).join(" ")

export function AppShell({
	activeApp,
	status = "live",
	width = "wide",
	children,
	className,
}: {
	readonly activeApp: KitApp
	readonly status?: RealtimeStatus
	readonly width?: "narrow" | "wide"
	readonly children: ReactNode
	readonly className?: string
}) {
	return (
		<div className={join("kit-shell", className)}>
			<header className="kit-topbar">
				<a className="kit-wordmark" href="https://kitlangton.cloudflareaccess.com">
					Kit
				</a>
				<nav className="kit-app-nav" aria-label="Apps">
					{apps.map((app) => (
						<a key={app.id} href={app.href} aria-current={app.id === activeApp ? "page" : undefined}>
							{app.label}
						</a>
					))}
				</nav>
				<span className="kit-status" data-status={status}>
					{status}
				</span>
			</header>
			<div className="kit-hatch" aria-hidden="true" />
			<main className={`kit-main kit-main--${width}`}>{children}</main>
		</div>
	)
}

export function PageHeader({
	eyebrow,
	title,
	description,
	actions,
	className,
}: {
	readonly eyebrow: ReactNode
	readonly title: ReactNode
	readonly description?: ReactNode
	readonly actions?: ReactNode
	readonly className?: string
}) {
	return (
		<header className={join("kit-page-header", className)}>
			<div className="kit-page-heading">
				<Label>{eyebrow}</Label>
				<h1>{title}</h1>
				{description === undefined ? null : <p>{description}</p>}
			</div>
			{actions === undefined ? null : <div className="kit-page-actions">{actions}</div>}
		</header>
	)
}

export function Label({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p {...props} className={join("kit-label", className)}>
			{children}
		</p>
	)
}

export function SectionHeader({
	title,
	meta,
	className,
}: {
	readonly title: ReactNode
	readonly meta?: ReactNode
	readonly className?: string
}) {
	return (
		<div className={join("kit-section-header", className)}>
			<h2>{title}</h2>
			{meta === undefined ? null : <Label>{meta}</Label>}
		</div>
	)
}

export function Button({ variant = "primary", className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & {
	readonly variant?: "primary" | "secondary" | "quiet"
}) {
	return <button {...props} className={join("kit-button", `kit-button--${variant}`, className)} />
}
