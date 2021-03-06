/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/params.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
export var Wrapper_ParamsComponent = (function () {
    function Wrapper_ParamsComponent() {
        this.changed = false;
        this.context = new import0.ParamsComponent();
    }
    Wrapper_ParamsComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_ParamsComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_ParamsComponent;
}());
var renderType_ParamsComponent_Host = null;
var _View_ParamsComponent_Host0 = (function (_super) {
    __extends(_View_ParamsComponent_Host0, _super);
    function _View_ParamsComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ParamsComponent_Host0, renderType_ParamsComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ParamsComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'params-cell', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ParamsComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ParamsComponent_0_4 = new Wrapper_ParamsComponent();
        this._appEl_0.initComponent(this._ParamsComponent_0_4.context, [], compView_0);
        compView_0.create(this._ParamsComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ParamsComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ParamsComponent) && (0 === requestNodeIndex))) {
            return this._ParamsComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_ParamsComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ParamsComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._ParamsComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ParamsComponent_Host0;
}(import1.AppView));
function viewFactory_ParamsComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ParamsComponent_Host === null)) {
        (renderType_ParamsComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ParamsComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var ParamsComponentNgFactory = new import9.ComponentFactory('params-cell', viewFactory_ParamsComponent_Host0, import0.ParamsComponent);
var styles_ParamsComponent = [];
var renderType_ParamsComponent = null;
var _View_ParamsComponent0 = (function (_super) {
    __extends(_View_ParamsComponent0, _super);
    function _View_ParamsComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ParamsComponent0, renderType_ParamsComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_1 = import7.UNINITIALIZED;
    }
    _View_ParamsComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '', null);
        this.init([], [this._text_0], [], []);
        return null;
    };
    _View_ParamsComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = import4.interpolate(2, 'Field: ', this.context.params.colDef.field, ', Value: ', this.context.params.value, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_0, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ParamsComponent0;
}(import1.AppView));
export function viewFactory_ParamsComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ParamsComponent === null)) {
        (renderType_ParamsComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_ParamsComponent, {}));
    }
    return new _View_ParamsComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=params.component.ngfactory.js.map