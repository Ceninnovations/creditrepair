Standard content surface — white, soft border, subtle shadow, 16px radius. Wraps every dashboard section.

```jsx
<Card><h2 className="section-title">Credit Overview</h2>…</Card>
<Card accent="green"><h2 className="section-title">Strengths</h2>…</Card>
```

- `accent` paints a 3px colored top rule — `green` for positives, `red` for negatives, `amber` for warnings.
- `pad` controls inner padding (number = responsive clamp up to that px).
