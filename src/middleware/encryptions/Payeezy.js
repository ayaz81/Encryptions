const PayeezyRSA = require('../../encryption/PayeezyRSA');

async function Payeezy(req, res, next) {
    const { pubkey, cc, mes, ano, cvv } = req.body;
    if (!cc) {
        return res.status(400).json({ error: 'Required field `cc` is missing.' });
    }
    if (!mes) {
        return res.status(400).json({ error: 'Required field `mes` is missing.' });
    }
    if (!ano) {
        return res.status(400).json({ error: 'Required field `ano` is missing.' });
    }
    if (!cvv) {
        return res.status(400).json({ error: 'Required field `cvv` is missing.' });
    }

    if (!pubkey) {
        return res.status(400).json({ error: 'Missing required `PUBLIC KEY`.' });
    }

    const cryptoHelper = new PayeezyRSA();

    try {
        const encryptedData = cryptoHelper.encryptData({ pubkey, cc, mes, ano, cvv });
        req.encryptedData = encryptedData;
        next();
    } catch (error) {
        console.error('Encryption Error:', error);
        return res.status(500).json({ status: false, error_message: error.message });
    }
}

module.exports = Payeezy;
