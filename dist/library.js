var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var getHtmlContents = function (name) {
    if (name === void 0) { name = 'home'; }
    return __awaiter(_this, void 0, void 0, function () {
        var fileContents, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("./dist/" + name + ".html")];
                case 1:
                    fileContents = _a.sent();
                    return [2 /*return*/, fileContents.text()];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [2 /*return*/, '<p>The page you\'re trying to access doesn\'t exist!</p>'];
                case 3: return [2 /*return*/];
            }
        });
    });
};
var globalLoadingElement = function () {
    var loading = document.createElement('div');
    loading.setAttribute('class', 'mdl-spinner');
    loading.setAttribute('class', 'mdl-js-spinner');
    loading.setAttribute('class', 'is-active');
    return loading;
};
// If the page doesn't exist, then we return 404
var filterPageValues = function (page) {
    if (!page || page === '')
        page = 'home';
    var pagesBank = ['home', 'about'];
    return (pagesBank.includes(page)) ? page : '404';
};
// Get the hash portion of the URL
var getHashValue = function (link) {
    var hashRegex = /#(\w+)$/;
    return link.match(hashRegex) ? link.match(/#(\w+)$/)[1] : undefined;
};
// listeners for the header links
var navElements = document.getElementsByClassName('site-navigation');
Array.from(navElements).map(function (nav) {
    nav.addEventListener('click', function (e) { return __awaiter(_this, void 0, void 0, function () {
        var bodyContent, link, hrefValue, fileContents;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    bodyContent = document.getElementById('page-content');
                    bodyContent.innerHTML = '';
                    bodyContent.appendChild(globalLoadingElement());
                    link = e.target.toString();
                    hrefValue = getHashValue(link);
                    hrefValue = filterPageValues(hrefValue);
                    return [4 /*yield*/, getHtmlContents(hrefValue)];
                case 1:
                    fileContents = _a.sent();
                    bodyContent.innerHTML = fileContents;
                    if (history)
                        history.pushState({ html: fileContents, set: true }, hrefValue, "#" + (hrefValue ? hrefValue : ''));
                    return [2 /*return*/];
            }
        });
    }); });
});
// On page load, check the URL to see what page to load
document.addEventListener('DOMContentLoaded', function (e) { return __awaiter(_this, void 0, void 0, function () {
    var bodyContent, link, hrefValue, fileContents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bodyContent = document.getElementById('page-content');
                bodyContent.innerHTML = '';
                bodyContent.appendChild(globalLoadingElement());
                link = e.currentTarget.location.href;
                hrefValue = getHashValue(link);
                hrefValue = filterPageValues(hrefValue);
                return [4 /*yield*/, getHtmlContents(hrefValue)];
            case 1:
                fileContents = _a.sent();
                document.getElementById('page-content').innerHTML = fileContents;
                // in case someone enters in a wrong url, we want to show them the 404
                if (history)
                    history.replaceState({ html: fileContents, set: true }, hrefValue, "#" + (hrefValue ? hrefValue : ''));
                return [2 /*return*/];
        }
    });
}); });
// manually replace page contents if someone uses the browser back/forth buttons
window.addEventListener('hashchange', function (e) { return __awaiter(_this, void 0, void 0, function () {
    var oldHash, newHash, bodyContent, fileContents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                oldHash = filterPageValues(getHashValue(e.oldURL));
                newHash = filterPageValues(getHashValue(e.newURL));
                if (!(oldHash !== newHash)) return [3 /*break*/, 2];
                bodyContent = document.getElementById('page-content');
                bodyContent.innerHTML = '';
                bodyContent.appendChild(globalLoadingElement());
                return [4 /*yield*/, getHtmlContents(newHash)];
            case 1:
                fileContents = _a.sent();
                bodyContent.innerHTML = fileContents;
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
