"use strict";
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
exports.__esModule = true;
// const puppeteer = require('puppeteer');
var puppeteer_1 = require("puppeteer");
var _ = require("lodash");
var _a = require("worker_threads"), Worker = _a.Worker, isMainThread = _a.isMainThread, parentPort = _a.parentPort;
var workDir = __dirname + "/dbWorker.js";
var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var browser, page, titlesSelector, companiesSelector, locationsSelector, shiftsSelector, linksSelector, titles, companies, locations, shifts, links;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, puppeteer_1["default"].launch({ headless: false })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                return [4 /*yield*/, page.setViewport({
                        width: 1200,
                        height: 1000,
                        deviceScaleFactor: 1
                    })];
            case 3:
                _a.sent();
                return [4 /*yield*/, page.goto("https://indeed.com", { waitUntil: "load" })];
            case 4:
                _a.sent();
                // Type into search box.
                return [4 /*yield*/, page.type("#text-input-what", "Software Engineer")];
            case 5:
                // Type into search box.
                _a.sent();
                return [4 /*yield*/, page.click(".yosegi-InlineWhatWhere-primaryButton")];
            case 6:
                _a.sent();
                titlesSelector = "#mosaic-provider-jobcards > ul > li > div > div.slider_container.css-g7s71f.eu4oa1w0 > div > div.slider_item.css-kyg8or.eu4oa1w0 > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.css-1m4cuuf.e37uo190 > h2";
                return [4 /*yield*/, page.waitForSelector(titlesSelector)];
            case 7:
                _a.sent();
                companiesSelector = "#mosaic-provider-jobcards > ul > li > div > div.slider_container.css-g7s71f.eu4oa1w0 > div > div.slider_item.css-kyg8or.eu4oa1w0 > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.heading6.company_location.tapItem-gutter.companyInfo > span.companyName";
                return [4 /*yield*/, page.waitForSelector(companiesSelector)];
            case 8:
                _a.sent();
                locationsSelector = "#mosaic-provider-jobcards > ul > li > div > div.slider_container.css-g7s71f.eu4oa1w0 > div > div.slider_item.css-kyg8or.eu4oa1w0 > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.heading6.company_location.tapItem-gutter.companyInfo > div";
                return [4 /*yield*/, page.waitForSelector(locationsSelector)];
            case 9:
                _a.sent();
                shiftsSelector = "#mosaic-provider-jobcards > ul > li > div > div.slider_container.css-g7s71f.eu4oa1w0 > div > div.slider_item.css-kyg8or.eu4oa1w0 > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.heading6.tapItem-gutter.metadataContainer.noJEMChips.salaryOnly > div > div";
                return [4 /*yield*/, page.waitForSelector(shiftsSelector)];
            case 10:
                _a.sent();
                linksSelector = "a.css-jspxzf";
                return [4 /*yield*/, page.waitForSelector(linksSelector)];
            case 11:
                _a.sent();
                return [4 /*yield*/, page.$$eval(titlesSelector, function (options) {
                        var getJobTitles = [];
                        options.forEach(function (title, i) {
                            var titles = {
                                index: i,
                                title: title.textContent
                            };
                            getJobTitles.push(titles);
                        });
                        return getJobTitles;
                    })];
            case 12:
                titles = _a.sent();
                return [4 /*yield*/, page.$$eval(companiesSelector, function (options) {
                        var getJobCompanies = [];
                        options.forEach(function (company, i) {
                            var companies = {
                                index: i,
                                company: company.textContent
                            };
                            getJobCompanies.push(companies);
                        });
                        return getJobCompanies;
                    })];
            case 13:
                companies = _a.sent();
                return [4 /*yield*/, page.$$eval(locationsSelector, function (options) {
                        var getJobLocations = [];
                        options.forEach(function (location, i) {
                            var locations = {
                                index: i,
                                location: location.textContent
                            };
                            getJobLocations.push(locations);
                        });
                        return getJobLocations;
                    })];
            case 14:
                locations = _a.sent();
                return [4 /*yield*/, page.$$eval(shiftsSelector, function (options) {
                        var getShiftsLocations = [];
                        options.forEach(function (shift, i) {
                            var shifts = {
                                index: i,
                                shift: shift.textContent
                            };
                            getShiftsLocations.push(shifts);
                        });
                        return getShiftsLocations;
                    })];
            case 15:
                shifts = _a.sent();
                return [4 /*yield*/, page.$$eval(linksSelector, function (options) {
                        var getLinksLocations = [];
                        options.forEach(function (link, i) {
                            var links = {
                                index: i,
                                link: link.textContent
                            };
                            getLinksLocations.push(links);
                        });
                        return getLinksLocations;
                    })];
            case 16:
                links = _a.sent();
                return [2 /*return*/, { companies: companies, links: links, locations: locations, shifts: shifts, titles: titles }];
        }
    });
}); };
var formatData = function (res) {
    var companies = res.companies, links = res.links, locations = res.locations, shifts = res.shifts, titles = res.titles;
    var mergeLinks = _.map(companies, function (item) {
        return _.assign(item, _.find(links, { index: item.index }));
    });
    var mergeLocations = _.map(mergeLinks, function (item) {
        return _.assign(item, _.find(locations, { index: item.index }));
    });
    var mergeShifts = _.map(mergeLocations, function (item) {
        return _.assign(item, _.find(shifts, { index: item.index }));
    });
    var mergeTitles = _.map(mergeShifts, function (item) {
        return _.assign(item, _.find(titles, { index: item.index }));
    });
    console.log(mergeTitles);
};
var sendData = function () {
    fetchData()
        .then(function (res) {
        console.log(res);
    })["catch"](function (err) {
        console.log(err);
        return err;
    });
};
sendData();
