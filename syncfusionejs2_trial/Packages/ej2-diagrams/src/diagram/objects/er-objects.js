var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChildProperty, Complex, Property } from '@syncfusion/ej2-base';
import { ShapeStyle } from '../core/appearance';
import { ShapeAnnotation } from './annotation';
/**
 * Defines the header row configuration for an ER entity shape.
 */
var ErHeader = /** @class */ (function (_super) {
    __extends(ErHeader, _super);
    function ErHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * getClassName method
     *
     * @returns { string } getClassName method.
     *
     * @private
     */
    ErHeader.prototype.getClassName = function () {
        return 'ErHeader';
    };
    __decorate([
        Complex({ content: 'Entity' }, ShapeAnnotation)
    ], ErHeader.prototype, "annotation", void 0);
    __decorate([
        Complex({ fill: 'none', strokeColor: 'none', strokeWidth: 0 }, ShapeStyle)
    ], ErHeader.prototype, "style", void 0);
    __decorate([
        Property(30)
    ], ErHeader.prototype, "height", void 0);
    return ErHeader;
}(ChildProperty));
export { ErHeader };
/**
 * Defines a single field within an ER entity.
 *
 * A field can represent a database column or a logical entity attribute. Each
 * field supports independent primary key and foreign key indicators, optional
 * data type display text, supported constraints, visual row style, and field
 * text styling.
 */
var ErField = /** @class */ (function (_super) {
    __extends(ErField, _super);
    function ErField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * getClassName method
     *
     * @returns { string } getClassName method.
     *
     * @private
     */
    ErField.prototype.getClassName = function () {
        return 'ErField';
    };
    __decorate([
        Property('')
    ], ErField.prototype, "id", void 0);
    __decorate([
        Property('')
    ], ErField.prototype, "name", void 0);
    __decorate([
        Property('')
    ], ErField.prototype, "dataType", void 0);
    __decorate([
        Property(false)
    ], ErField.prototype, "isPrimaryKey", void 0);
    __decorate([
        Property(false)
    ], ErField.prototype, "isForeignKey", void 0);
    __decorate([
        Property([])
    ], ErField.prototype, "constraints", void 0);
    __decorate([
        Complex({ fill: 'none', strokeColor: 'none', strokeWidth: 0 }, ShapeStyle)
    ], ErField.prototype, "style", void 0);
    __decorate([
        Complex({}, ShapeAnnotation)
    ], ErField.prototype, "annotation", void 0);
    return ErField;
}(ChildProperty));
export { ErField };
/**
 * Defines visual default options for ER entity field rows.
 */
var ErFieldDefaults = /** @class */ (function (_super) {
    __extends(ErFieldDefaults, _super);
    function ErFieldDefaults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * getClassName method
     *
     * @returns { string } getClassName method.
     *
     * @private
     */
    ErFieldDefaults.prototype.getClassName = function () {
        return 'ErFieldDefaults';
    };
    __decorate([
        Property([])
    ], ErFieldDefaults.prototype, "alternateRowColors", void 0);
    __decorate([
        Property(25)
    ], ErFieldDefaults.prototype, "height", void 0);
    return ErFieldDefaults;
}(ChildProperty));
export { ErFieldDefaults };
/**
 * Defines a Crow's Foot multiplicity descriptor for one end of an ER connector.
 */
var ErMultiplicity = /** @class */ (function (_super) {
    __extends(ErMultiplicity, _super);
    function ErMultiplicity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * getClassName method
     *
     * @returns { string } getClassName method.
     *
     * @private
     */
    ErMultiplicity.prototype.getClassName = function () {
        return 'ErRelationship';
    };
    __decorate([
        Property('One')
    ], ErMultiplicity.prototype, "type", void 0);
    return ErMultiplicity;
}(ChildProperty));
export { ErMultiplicity };
