Text input with optional label, trailing icon, error state, and a built-in password reveal toggle. 46px tall, green focus ring.

```jsx
<Input label="First Name" placeholder="First Name" />
<Input label="Date of Birth" icon="calendar" placeholder="MM/DD/YYYY" />
<Input label="OpenAI API Key" reveal placeholder="sk-…" />
<Input label="Last Name" error placeholder="Last Name" />
```

- `reveal` makes it a password field with an eye toggle (overrides `icon`).
- `error` paints the red border + ring used for missing required fields.
