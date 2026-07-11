# SMC Customer Search

A tiny, self-contained tool for searching the SMC customer database.

## How to use

1. Open **`index.html`** in any web browser (double-click it).
2. Click the box (or drag your `.csv` file onto it) and pick
   `Resultssmccustomerfinal.csv`.
3. Type anything in the search bar — a name, email, phone number, city,
   card last-4, etc. Matches are highlighted and update as you type.

## Notes

- **Nothing is uploaded.** The file is read locally in your browser; the
  data never leaves your computer. Safe for customer PII.
- **Search all fields or one field.** Use the dropdown to narrow a search
  to a single column (e.g. only `email`).
- **Multiple words** are AND-matched — `john houston` finds rows that
  contain both `john` and `houston` anywhere in the record.
- Results are capped at 500 rows on screen for speed; the match count
  shown is the true total.
- Works offline. No install, no server, no dependencies.
