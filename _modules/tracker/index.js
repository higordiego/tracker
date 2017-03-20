module.exports = (app) => {
    const url = '/api/'
    const model = require('../../_molecules/tracker-model')
    const organelleFind = require('../../_organelles/organelle-find')
    const organelleCreate = require('../../_organelles/organelle-create')

    app.route(url + '/tracking')
        .get(organelleFind(model))
        .post(organelleCreate(model))
}

