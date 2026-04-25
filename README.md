# CS328 Writing Assignment — COVID-19 Global Analysis

**Team:** Parthiv Patel · Aditya Borate · Srajan Dehariya · Rudra Pratap Singh (23110281)  
**Course:** CS328 Data Science, 2026 — IIT Gandhinagar

---

## Overview

A data-driven analytical report examining the global spread, mortality patterns, and vaccination inequity of the COVID-19 pandemic using WHO and OWID datasets.

## Structure

```
analysis.ipynb          ← main analytical notebook
data/                   ← WHO and OWID COVID-19 datasets
report/                 ← rendered HTML report
  index.html
  style.css
  script.js
requirements.txt
```

## Viewing the Report Locally

```bash
python3 -m http.server 8765 --directory report/
```

Open `http://localhost:8765` in your browser.

## Data Sources

- [WHO COVID-19 Global Data](https://covid19.who.int/data)
- [Our World in Data COVID-19 Dataset](https://github.com/owid/covid-19-data)

## Regenerating the Report

If the notebook is modified, regenerate `report/index.html` with:

```bash
pip install -r requirements.txt
jupyter nbconvert --to html --execute \
  --ExecutePreprocessor.timeout=300 \
  --output-dir=report \
  analysis.ipynb
mv report/analysis.html report/index.html
```
