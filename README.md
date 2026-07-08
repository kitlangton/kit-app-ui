# @kitlangton/ui

Shared React primitives and visual tokens for Kit's personal apps.

```tsx
import { AppShell, PageHeader } from "@kitlangton/ui"
import "@kitlangton/ui/styles.css"

export function App() {
  return (
    <AppShell activeApp="nutrition">
      <PageHeader eyebrow="Daily ledger" title="Nutrition" />
    </AppShell>
  )
}
```

The package owns the cross-app shell, navigation, typography, color tokens, and foundational controls. Each app owns its domain-specific layout and interactions.
