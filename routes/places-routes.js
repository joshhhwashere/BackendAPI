const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Rotonda',
        creator: 'u1',
    },
    {
        id: 'p2',
        title: 'Centro Cívico',

        creator: 'u1',
    }
];

router.get('/', (req, res, next) => {
    res.json({places : DUMMY_PLACES});
});

router.get('/:pid', (req, res, next) => {
        const places = DUMMY_PLACES.find(p => {
            return p.id === req.params.pid;
        });
        res.json({places});
    });
module.exports = router;

// app.get('/api/places', (req, res, next) => {
//     const places = DUMMY_PLACES;
//     res.send(places);
//     next();
// });

// app.get('/api/places/:pid', (req, res, next) => {
//     const places = DUMMY_PLACES.find(p => {
//         return p.id === req.params.pid;
//     });
//     res.send(places);
//     next();
// });

// app.get('/api/places/:ptitle', (req, res, next) => {
    
//     //console.log(req.params.title);

//     const places = DUMMY_PLACES.find(p => {
//         return p.title === req.params.ptitle;
//     });
//     res.send(places);
//     next();
// });