from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

@app.route('/land/')
def land():
    return render_template('land.html')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/balance')
def balance():
    return jsonify({
        "balance": 53.20
    })

@app.route('/projected')
def projected():
    return jsonify({
        "projected": 15.73
    })

@app.route('/portfolio', methods=['GET'])
def portfolio():
    return jsonify({
        "portfolio": [
            {
                "name": "Tesouro Selic 2021 (LFT)",
                "quantity": 0.21,
                "applied": 1431.64,
                "value": 1881.48
            },
            {
                "name": "Tesouro Prefixado 2021 (LTN)",
                "quantity": 2.47,
                "applied": 1236.83,
                "value": 1806.11
            },
            {
                "name": "Tesouro Prefixado 2018 (LTN)",
                "quantity": 1.57,
                "applied": 1137.48,
                "value": 1514.64
            },
            {
                "name": "Tesouro IPCA+ 2019 (NTNB Princ)",
                "quantity": 0.37,
                "applied": 761.81,
                "value": 1032.75
            },
            {
                "name": "Tesouro IPCA+ com Juros Semestrais",
                "quantity": 0.13,
                "applied": 347.02,
                "value": 419.99
            }
        ]
    })

if __name__ == '__main__':
    app.run(debug=True)
