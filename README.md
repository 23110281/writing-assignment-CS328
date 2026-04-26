# CS328 Writing Assignment — COVID-19 Global Analysis

**Team:** Parthiv Patel (23110237), Aditya Borate (23110065), Srajan Dehariya (23110320), Rudra Pratap Singh (23110281)  
**Course:** CS328 Data Science, 2026 — IIT Gandhinagar

---

## Dataset

WHO COVID-19 Global dataset (`_data/WHO-COVID-19-global-table-data.csv` and time-series companion files).

## Structure

```
_notebooks/index.ipynb   ← final analytical notebook (source of truth)
site/index.html          ← generated static site (served from /site)
site/style.css           ← minimal stylesheet
site/script.js           ← sidebar toggle logic
requirements.txt         ← Python dependencies
```

## Serving Locally

```bash
python3 -m http.server 8765 --directory site/
```

Then open `http://localhost:8765/index.html`.

## Regenerating the HTML

If you modify the notebook and need to regenerate the site:

```bash
# 1. Convert notebook to HTML
jupyter nbconvert --to html --execute \
  --ExecutePreprocessor.kernel_name=python3 \
  --output-dir=site \
  _notebooks/index.ipynb

# 2. Rename to index.html (nbconvert names it after the notebook file)
mv site/index.html site/index.html   # already correct if notebook is named index.ipynb
```
