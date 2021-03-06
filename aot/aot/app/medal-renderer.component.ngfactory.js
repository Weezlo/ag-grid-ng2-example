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
import * as import0 from '../../app/medal-renderer.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
export var Wrapper_MedalRendererComponent = (function () {
    function Wrapper_MedalRendererComponent() {
        this.changed = false;
        this.context = new import0.MedalRendererComponent();
    }
    Wrapper_MedalRendererComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_MedalRendererComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_MedalRendererComponent;
}());
var renderType_MedalRendererComponent_Host = null;
var _View_MedalRendererComponent_Host0 = (function (_super) {
    __extends(_View_MedalRendererComponent_Host0, _super);
    function _View_MedalRendererComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MedalRendererComponent_Host0, renderType_MedalRendererComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MedalRendererComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'group-row-cell', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MedalRendererComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MedalRendererComponent_0_4 = new Wrapper_MedalRendererComponent();
        this._appEl_0.initComponent(this._MedalRendererComponent_0_4.context, [], compView_0);
        compView_0.create(this._MedalRendererComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MedalRendererComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.MedalRendererComponent) && (0 === requestNodeIndex))) {
            return this._MedalRendererComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_MedalRendererComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MedalRendererComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._MedalRendererComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MedalRendererComponent_Host0;
}(import1.AppView));
function viewFactory_MedalRendererComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MedalRendererComponent_Host === null)) {
        (renderType_MedalRendererComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_MedalRendererComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var MedalRendererComponentNgFactory = new import9.ComponentFactory('group-row-cell', viewFactory_MedalRendererComponent_Host0, import0.MedalRendererComponent);
var styles_MedalRendererComponent = [];
var renderType_MedalRendererComponent = null;
var _View_MedalRendererComponent0 = (function (_super) {
    __extends(_View_MedalRendererComponent0, _super);
    function _View_MedalRendererComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MedalRendererComponent0, renderType_MedalRendererComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_1 = import7.UNINITIALIZED;
    }
    _View_MedalRendererComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '', null);
        this.init([], [this._text_0], [], []);
        return null;
    };
    _View_MedalRendererComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = import4.interpolate(4, '', this.context.country, ' Gold: ', this.context.gold, ', Silver: ', this.context.silver, ', Bronze: ', this.context.bronze, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_0, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MedalRendererComponent0;
}(import1.AppView));
export function viewFactory_MedalRendererComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MedalRendererComponent === null)) {
        (renderType_MedalRendererComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_MedalRendererComponent, {}));
    }
    return new _View_MedalRendererComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=medal-renderer.component.ngfactory.js.map