Credit-health donut — a 0–100 value as a green ring with the percentage centered inside. The Credit Overview's headline visual.

```jsx
<CreditDonut value={64} />
<CreditDonut value={82} size={120} label="Health" />
```

- `value` drives both the ring fill and the centered number.
- Pairs with the Overall Assessment text + a `Badge` for the rating.
