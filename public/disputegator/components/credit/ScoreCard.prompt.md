One bureau's credit score: name, large green number, rating, and a 300–850 mini gauge. Three sit side-by-side in the Credit Overview, divided by hairlines.

```jsx
<ScoreCard bureau="Experian" score={640} rating="Fair" />
<ScoreCard bureau="Equifax" score={655} rating="Fair" />
<ScoreCard bureau="TransUnion" score={null} rating="N/A" />
```

- Pass `score={null}` when a bureau wasn't found in the report.
