const { Router } = require("express");
const router = Router();
const routeC = require('./charactersRoute');
const routeE = require('./episodesRoute');

// Configurar los routers
router.use('/characters', routeC );
router.use('/episodes', routeE);

module.exports = router;
