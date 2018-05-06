"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var App = /** @class */ (function () {
    function App() {
        this.title = 'Eggheads';
    }
    App.prototype.getUsers = function () {
        return [{
                name: 'Andrei'
            }];
    };
    return App;
}());
console.log(_.isArray(new App().getUsers()));
