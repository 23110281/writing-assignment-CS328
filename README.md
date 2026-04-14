# COVID-19 Global Analysis Dashboard | CS328

An interactive data science dashboard analyzing regional distributions, comparative case studies (The Americas vs. India), country-level wave patterns, and vaccination trajectories. Built using global datasets from the World Health Organization (WHO) and Our World in Data (OWID).

## Team Members
- **Parthiv Patel** (`parthiv.patel@iitgn.ac.in`)
- **Aditya Borate** (`aditya.borate@iitgn.ac.in`)
- **Srajan Dehariya** (`srajan.dehariya@iitgn.ac.in`)
- **Rudra Pratap Singh** (`rudra.pratap@iitgn.ac.in` | 23110281)

---

## Running the Demo Locally

This dashboard was generated using an automated Jupyter Notebook (`nbconvert`) pipeline with custom HTML/CSS injections for a highly-polished interactive frontend.

To view the dashboard, you just need to serve the static files locally.

### 1. Requirements
Ensure you have `python3` installed. We recommend using a virtual environment (`venv`) to keep dependencies isolated if you wish to re-compile the notebook yourself.

### 2. Setting Up the Virtual Environment

Run the following commands in your terminal from the project root directory:

```bash
# 1. Create the virtual environment
python3 -m venv venv

# 2. Activate the virtual environment
# On Linux / macOS:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate

# 3. (Optional) Install dependencies if you want to rebuild the notebook
pip install -r requirements.txt
```

### 3. Serving the Dashboard

To view the pre-built dashboard, you simply need to start a local web server pointing to the `site/` directory:

```bash
# Start the HTTP server on port 8765
python3 -m http.server 8765 --directory site/
```

Once the server is running, open your web browser and navigate to:
**[http://localhost:8765](http://localhost:8765)**

*(Note: Use `Ctrl+Shift+R` to perform a hard refresh if old styles appear cached).*

### 4. Rebuilding the Notebook (Development)

If you modify `_notebooks/index.ipynb` and want to re-render the HTML site, you must run the build pipeline within your activated `venv`:

```bash
# Execute the notebook and convert to raw HTML
jupyter nbconvert --to html --execute --ExecutePreprocessor.kernel_name=covid_env --out _html/index.html _notebooks/index.ipynb

# The pipeline requires a post-processing script to inject custom CSS/JS (like the Sidebar).
# Once processed, copy `_html/index.html` into `site/index.html`.
```
