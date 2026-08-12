import { Rect } from './primitives/rect';
import { Diagram } from './diagram';
import { IExportOptions } from './objects/interface/interfaces';
/**
 * Print and Export Settings
 */
export declare class PrintAndExport {
    private diagram;
    constructor(diagram: Diagram);
    private printWindow;
    /**
     * To Export the diagram
     *
     * @private
     */
    exportDiagram(options: IExportOptions): string | SVGElement;
    private setCanvas;
    private canvasMultiplePage;
    private exportImage;
    /**   @private  */
    getObjectsBound(options?: IExportOptions): Rect;
    /**   @private  */
    getDiagramBounds(mode?: string, options?: IExportOptions): Rect;
    private setScaleValueforCanvas;
    private diagramAsSvg;
    private setTransform;
    /**
     * Process gradients for Canvas mode SVG export
     * Creates gradient definitions in the EXPORT SVG
     *
     * @param svg - The export SVG element to add gradients to
     * @param diagramId - The diagram ID used for identifying gradient pattern elements
     * @returns void
     *
     * @remarks
     * In Canvas mode, gradient coordinates are not stored in node.style.gradient.
     * This method creates gradient elements with explicit default values to ensure
     * proper rendering in the exported SVG.
     *
     * @private
     */
    private processGradientsForCanvasExport;
    private diagramAsCanvas;
    private updateWrapper;
    private scaleGradientValue;
    private updateObjectValue;
    private isImageExportable;
    private getPrintCanvasStyle;
    private getMultipleImage;
    private printImage;
    /**
     * To print the image
     *
     * @private
     */
    print(options: IExportOptions): void;
    private printImages;
    private closePrintWindow;
    private getContent;
    /** @private */
    getDiagramContent(styleSheets?: StyleSheetList): string;
    /** @private */
    exportImages(image: string, options: IExportOptions): void;
    /**
     *To destroy the ruler
     *
     * @returns {void} To destroy the ruler
     */
    destroy(): void;
    /**
     * Get module name.
     */
    protected getModuleName(): string;
}
