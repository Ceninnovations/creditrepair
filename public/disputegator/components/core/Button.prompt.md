Primary action control for DisputeGator. Green filled `primary` for the main action, `ghost` (white/bordered) for secondary, `outline` (green text) for tertiary.

```jsx
<Button variant="primary" icon="sparkle">Analyze My Report</Button>
<Button variant="outline" icon="download">Download</Button>
<Button variant="ghost" icon="close">Remove</Button>
<Button variant="primary" size="lg" loading>Analyzing…</Button>
```

- `size="lg"` is the tall full-width form submit; `sm` for inline/table actions.
- `icon` (leading) and `iconRight` (trailing) take any Icon name.
- `loading` swaps in a spinner and disables the button.
