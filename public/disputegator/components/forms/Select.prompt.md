Native select styled to match DisputeGator inputs, with chevron affordance and a muted placeholder until chosen.

```jsx
<Select label="State" placeholder="Select State" options={['AL','AK','AZ']} value={state} onChange={e => setState(e.target.value)} />
```

- Pass `options` as plain strings or `{value,label}` objects.
- Same height/radius/focus ring as `Input` so they align in a form grid.
