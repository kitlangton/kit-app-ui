import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { AppShell, Button, PageHeader, Segment, SegmentedControl } from "./index.js"

describe("AppShell", () => {
	it("renders the shared app navigation and active state", () => {
		const html = renderToStaticMarkup(
			<AppShell activeApp="nutrition">
				<PageHeader
					eyebrow="Daily ledger"
					title="Nutrition"
					actions={
						<SegmentedControl label="Diary date">
							<Segment icon active={false}>
								←
							</Segment>
							<Segment active>Today</Segment>
						</SegmentedControl>
					}
				/>
				<Button>Log food</Button>
			</AppShell>,
		)

		expect(html).toContain('aria-current="page"')
		expect(html).toContain("kit-shell--wide")
		expect(html).toContain("Nutrition")
		expect(html).toContain("Log food")
		expect(html).toContain("kit-segment")
	})
})
