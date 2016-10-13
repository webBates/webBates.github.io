"use strict";
var about_routes_1 = require('./about/about.routes');
var example_routes_1 = require('./example/example.routes');
exports.routes = [
    {
        path: '',
        redirectTo: '/example',
        pathMatch: 'full'
    }
].concat(about_routes_1.AboutRoutes, example_routes_1.ExampleRoutes);
//# sourceMappingURL=app.routes.js.map