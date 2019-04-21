import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/trafficking.sqlite"
db = SQLAlchemy(app)

# reflect an existing database into a new model
# Base = automap_base()
# reflect the tables
# Base.prepare(db.engine, reflect=True)

# Save references to each table

@app.route("/")
def index():
    """Return the homepage."""
    return "Hello world"

@app.route("/data/control")
def controlData():
    """Return control method by country data"""


@app.route("/visualizations/control")
def controlVisualization():
    """Return control method by country visualization"""
    return render_template('control-map.html')

@app.route("/visualizations/control-age")
def controlAgeVisualization():
    return render_template('control-age.html')

@app.route("/visualizations/control-gender")
def controlGenderVisualization():
    return render_template('control-gender.html')

@app.route("/visualizations/labour-map")
def labourMapVisualization():
    return render_template('labour-map.html')

if __name__ == "__main__":
    app.run()
