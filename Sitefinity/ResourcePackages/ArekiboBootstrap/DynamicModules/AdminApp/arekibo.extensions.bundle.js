(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1001],{

/***/ 100000:
/*!*******************************!*\
  !*** ./__extensions_index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//import { GridExtenderModule } from "./grid-extender";
//import { CustomFieldsModule } from "./custom-fields";
//import { CommandsExtenderModule } from "./commands-extender";
//import { EditorExtenderModule } from "./editor-extender";
var item_extender_1 = __webpack_require__(/*! ./item-extender */ 100001);
//import { ThemeModule } from "./theme";
/**
 * The entry point of the extensions. Each extension bundle needs to have exactly one export
 * of the Extensions interface and it needs to be placed in the __extensions_index file.
 * Here all of the NgModules are returned and are loaded into the main module.
 */
var SampleExtension = /** @class */ (function () {
    function SampleExtension() {
    }
    /**
     * On application bootstrap this method is called to get all extensions as angular modules.
     */
    SampleExtension.prototype.getNgModules = function () {
        return [
            //GridExtenderModule,
            //CustomFieldsModule,
            //CommandsExtenderModule,
            //EditorExtenderModule,
            item_extender_1.ItemExtenderModule
            //ThemeModule
        ];
    };
    return SampleExtension;
}());
exports.SampleExtension = SampleExtension;arguments[1].metadata = { compatibleVersionsTags: "", name: "sample.extensions" };


/***/ }),

/***/ 100001:
/*!********************************!*\
  !*** ./item-extender/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100002);
var core_1 = __webpack_require__(/*! @angular/core */ 100004);
var item_hooks_provider_1 = __webpack_require__(/*! ./item-hooks-provider */ 100005);
/**
 * The grid extender module.
 */
var ItemExtenderModule = /** @class */ (function () {
    function ItemExtenderModule() {
    }
    ItemExtenderModule = tslib_1.__decorate([
        core_1.NgModule({
            providers: [
                item_hooks_provider_1.ITEM_HOOKS_PROVIDER
            ]
        })
    ], ItemExtenderModule);
    return ItemExtenderModule;
}());
exports.ItemExtenderModule = ItemExtenderModule;


/***/ }),

/***/ 100002:
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/tslib/tslib.es6.js from dll-reference adminapp ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).__iris_require__('./node_modules/tslib/tslib.es6.js')

/***/ }),

/***/ 100003:
/*!***************************!*\
  !*** external "adminapp" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = adminapp;

/***/ }),

/***/ 100004:
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/@angular/core/fesm5/core.js from dll-reference adminapp ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).__iris_require__('./node_modules/@angular/core/fesm5/core.js')

/***/ }),

/***/ 100005:
/*!**********************************************!*\
  !*** ./item-extender/item-hooks-provider.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100002);
var core_1 = __webpack_require__(/*! @angular/core */ 100004);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100006);
var CustomItemHooksProvider = /** @class */ (function () {
    function CustomItemHooksProvider() {
    }
    CustomItemHooksProvider.prototype.onItemLoaded = function (item) {
        if (item.data) {
            // tslint:disable-next-line:no-console
            console.log("Item is loaded: " + item.data.Title);
        }
        else {
            // tslint:disable-next-line:no-console
            console.log("A new item is being created");
            console.log(item);
        }
        if (item.metadata.typeFullName.toLowerCase().indexOf('banner') > -1) {
            var i = 0;
            //var primaryActionSection = document.getElementById('RelatedData').parentNode;
            var t = setInterval(function () {
                if (document.getElementById('EnablePrimaryAction') != null) {
                    showHideActionSection();
                    showHideExternalUrl();
                    showHideVideoSection();
                    showHideExternalVideoUrl();
                    showHideResponsiveElements();
                    document.getElementById('EnablePrimaryAction').addEventListener("change", showHideActionSection, false);
                    document.getElementById('UseExternalLink').addEventListener("change", showHideExternalUrl, false);
                    document.getElementById('EnableVideo').addEventListener("change", showHideVideoSection, false);
                    document.getElementById('UseExternalVideo').addEventListener("change", showHideExternalVideoUrl, false);
                    document.getElementById('DisableResponsiveMedia').addEventListener("change", showHideResponsiveElements, false);
                    clearInterval(t);
                }
                if (i > 999) {
                    clearInterval(t);
                }
                i++;
            }, 50);
        }
        if ((item.metadata.typeFullName.toLowerCase().indexOf('imageslider') > -1) || item.metadata.typeFullName.toLowerCase().indexOf('spotlight') > -1) {
            var i = 0;
            //var primaryActionSection = document.getElementById('RelatedData').parentNode;
            var t = setInterval(function () {
                if (document.getElementById('EnablePrimaryAction') != null) {
                    showHideActionSection();
                    showHideExternalUrl();
                    document.getElementById('EnablePrimaryAction').addEventListener("change", showHideActionSection, false);
                    document.getElementById('UseExternalLink').addEventListener("change", showHideExternalUrl, false);
                    clearInterval(t);
                }
                if (i > 999) {
                    clearInterval(t);
                }
                i++;
            }, 50);
        }
        function showHideResponsiveElements() {
            if (jQuery('#DisableResponsiveMedia').length) {
                if (jQuery('#DisableResponsiveMedia').is(':checked')) {
                    jQuery('[data-sftest-title*="Mobile "]').attr('style', 'display:none');
                    jQuery('[for*="Desktop"]').html(jQuery('[for*="Desktop"]').html().replace('Desktop ', ''));
                }
                else {
                    jQuery('[data-sftest-title*="Mobile "]').attr('style', '');
                    if (jQuery('[for*="Desktop"]').html().indexOf('Desktop ') == -1) {
                        jQuery('[for*="Desktop"]').html('Desktop ' + jQuery('[for*="Desktop"]').html());
                    }
                }
            }
        }
        function showHideActionSection() {
            if (jQuery('#EnablePrimaryAction').length) {
                if (jQuery('#EnablePrimaryAction').is(':checked')) {
                    //console.log('show');
                    jQuery('#RelatedData').parent().attr('style', '');
                }
                else {
                    //console.log('hide');
                    jQuery('#RelatedData').parent().attr('style', 'display:none');
                }
            }
        }
        function showHideVideoSection() {
            if (jQuery('#EnableVideo').length) {
                if (jQuery('#EnableVideo').is(':checked')) {
                    //console.log('show');
                    jQuery('[data-sftest-title="Video"]').attr('style', '');
                    jQuery('[ng-reflect-name="Video"]').attr('style', '');
                }
                else {
                    //console.log('hide');
                    jQuery('[data-sftest-title="Video"]').attr('style', 'display:none');
                    jQuery('[ng-reflect-name="Video"]').attr('style', 'display:none');
                }
            }
        }
        function showHideExternalUrl() {
            if (jQuery('#UseExternalLink').length) {
                if (jQuery('#UseExternalLink').is(':checked')) {
                    //console.log(jQuery('[data-sftest-title="External Url"]'));
                    //console.log(jQuery('[data-sftest-title="External Url"]').parent());
                    jQuery('[data-sftest-title="External Url"]').parent().attr('style', '');
                    jQuery('[data-sftest-title="Linked Page"]').parent().attr('style', 'display:none');
                    jQuery('[data-sftest-title="Button Link"]').parent().attr('style', 'display:none');
                    jQuery("[ng-reflect-name=ExternalUrl]").attr('style', '');
                    jQuery("[ng-reflect-name=LinkedPage]").attr('style', 'display:none');
                    jQuery("[ng-reflect-name=ButtonLink]").attr('style', 'display:none');
                }
                else {
                    jQuery('[data-sftest-title="External Url"]').parent().attr('style', 'display:none');
                    jQuery('[data-sftest-title="Linked Page"]').parent().attr('style', '');
                    jQuery('[data-sftest-title="Button Link"]').parent().attr('style', '');
                    jQuery("[ng-reflect-name=ExternalUrl]").attr('style', 'display:none');
                    jQuery("[ng-reflect-name=LinkedPage]").attr('style', '');
                    jQuery("[ng-reflect-name=ButtonLink]").attr('style', '');
                }
            }
        }
        function showHideExternalVideoUrl() {
            if (jQuery('#UseExternalVideo').length) {
                if (jQuery('#UseExternalVideo').is(':checked')) {
                    //console.log(jQuery('[data-sftest-title="External Url"]'));
                    //console.log(jQuery('[data-sftest-title="External Url"]').parent());
                    jQuery('[data-sftest-title="External Video Url"]').parent().attr('style', '');
                    jQuery('[data-sftest-title="Selected Video"]').parent().attr('style', 'display:none');
                    jQuery('[data-sftest-title="Selected Mobile Video"]').parent().attr('style', 'display:none');
                    jQuery("[ng-reflect-name=ExternalVideoUrl]").attr('style', '');
                    jQuery("[ng-reflect-name=SelectedVideo]").attr('style', 'display:none');
                    jQuery("[ng-reflect-name=SelectedMobileVideo]").attr('style', 'display:none');
                }
                else {
                    jQuery('[data-sftest-title="External Video Url"]').parent().attr('style', 'display:none');
                    jQuery('[data-sftest-title="Selected Video"]').parent().attr('style', '');
                    jQuery('[data-sftest-title="Selected Mobile Video"]').parent().attr('style', '');
                    jQuery("[ng-reflect-name=ExternalVideoUrl]").attr('style', 'display:none');
                    jQuery("[ng-reflect-name=SelectedVideo]").attr('style', '');
                    jQuery("[ng-reflect-name=SelectedMobileVideo]").attr('style', '');
                }
            }
        }
    };
    CustomItemHooksProvider = tslib_1.__decorate([
        core_1.Injectable()
    ], CustomItemHooksProvider);
    return CustomItemHooksProvider;
}());
/**
 * Export a 'multi' class provider so that multiple instances of the same provider can coexist.
 * This allows for more than one provider to be registered within one or more bundles.
 */
exports.ITEM_HOOKS_PROVIDER = {
    multi: true,
    provide: v1_1.ITEM_HOOKS_PROVIDER_TOKEN,
    useClass: CustomItemHooksProvider
};


/***/ }),

/***/ 100006:
/*!*****************************************************************************************************************!*\
  !*** delegated ./node_modules/progress-sitefinity-adminapp-sdk/app/api/v1/index.js from dll-reference adminapp ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).__iris_require__('./node_modules/progress-sitefinity-adminapp-sdk/app/api/v1/index.js')

/***/ })

},[[100000,0]]]);
//# sourceMappingURL=sample.extensions.bundle.js.map