///<reference path="../node_modules/@types/react/index.d.ts" />
///<reference path="../node_modules/@types/react-dom/index.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, "Hello world"));
    };
    return App;
}(React.Component));
ReactDOM.render(React.createElement(App, null), document.getElementById('main'));
//# sourceMappingURL=main.js.map