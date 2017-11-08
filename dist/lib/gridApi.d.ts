// Type definitions for ag-grid v14.1.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { ColDef, ColGroupDef, IAggFunc } from "./entities/colDef";
import { RowNode } from "./entities/rowNode";
import { Column } from "./entities/column";
import { IRowModel } from "./interfaces/iRowModel";
import { AddRangeSelectionParams, RangeSelection } from "./interfaces/iRangeController";
import { GridCell } from "./entities/gridCell";
import { IViewportDatasource } from "./interfaces/iViewportDatasource";
import { IFilterComp } from "./interfaces/iFilter";
import { CsvExportParams } from "./exportParams";
import { ExcelExportParams } from "./interfaces/iExcelCreator";
import { IDatasource } from "./rowModels/iDatasource";
import { IEnterpriseDatasource } from "./interfaces/iEnterpriseDatasource";
import { RowDataTransaction, RowNodeTransaction } from "./rowModels/inMemory/inMemoryRowModel";
import { AlignedGridsService } from "./alignedGridsService";
import { AgEvent } from "./events";
export interface StartEditingCellParams {
    rowIndex: number;
    colKey: string | Column;
    keyPress?: number;
    charPress?: string;
}
export interface RefreshCellsParams {
    volatile?: boolean;
    rowNodes?: RowNode[];
    columns?: (string | Column)[];
    force?: boolean;
}
export interface RedrawRowsParams {
    rowNodes?: RowNode[];
}
export declare class GridApi {
    private immutableService;
    private csvCreator;
    private excelCreator;
    private gridCore;
    private rowRenderer;
    private headerRenderer;
    private filterManager;
    private columnController;
    private selectionController;
    private gridOptionsWrapper;
    private gridPanel;
    private valueService;
    private alignedGridsService;
    private eventService;
    private pinnedRowModel;
    private context;
    private rowModel;
    private sortController;
    private paginationProxy;
    private focusedCellController;
    private rangeController;
    private clipboardService;
    private aggFuncService;
    private menuFactory;
    private cellRendererFactory;
    private cellEditorFactory;
    private valueCache;
    private toolPanel;
    private inMemoryRowModel;
    private infinitePageRowModel;
    private enterpriseRowModel;
    private init();
    /** Used internally by grid. Not intended to be used by the client. Interface may change between releases. */
    __getAlignedGridService(): AlignedGridsService;
    getDataAsCsv(params?: CsvExportParams): string;
    exportDataAsCsv(params?: CsvExportParams): void;
    getDataAsExcel(params?: ExcelExportParams): string;
    exportDataAsExcel(params?: ExcelExportParams): void;
    setEnterpriseDatasource(datasource: IEnterpriseDatasource): void;
    setDatasource(datasource: IDatasource): void;
    setViewportDatasource(viewportDatasource: IViewportDatasource): void;
    setRowData(rowData: any[]): void;
    setFloatingTopRowData(rows: any[]): void;
    setFloatingBottomRowData(rows: any[]): void;
    getFloatingTopRowCount(): number;
    getFloatingBottomRowCount(): number;
    getFloatingTopRow(index: number): RowNode;
    getFloatingBottomRow(index: number): RowNode;
    setPinnedTopRowData(rows: any[]): void;
    setPinnedBottomRowData(rows: any[]): void;
    getPinnedTopRowCount(): number;
    getPinnedBottomRowCount(): number;
    getPinnedTopRow(index: number): RowNode;
    getPinnedBottomRow(index: number): RowNode;
    setColumnDefs(colDefs: (ColDef | ColGroupDef)[]): void;
    expireValueCache(): void;
    getVerticalPixelRange(): any;
    refreshToolPanel(): void;
    refreshCells(params?: RefreshCellsParams): void;
    redrawRows(params?: RedrawRowsParams): void;
    timeFullRedraw(count?: number): void;
    refreshView(): void;
    refreshRows(rowNodes: RowNode[]): void;
    rowDataChanged(rows: any): void;
    softRefreshView(): void;
    refreshGroupRows(): void;
    setFunctionsReadOnly(readOnly: boolean): void;
    refreshHeader(): void;
    isAnyFilterPresent(): boolean;
    isAdvancedFilterPresent(): boolean;
    isQuickFilterPresent(): boolean;
    getModel(): IRowModel;
    onGroupExpandedOrCollapsed(deprecated_refreshFromIndex?: any): void;
    refreshInMemoryRowModel(step?: string): any;
    getRowNode(id: string): RowNode;
    expandAll(): void;
    collapseAll(): void;
    addVirtualRowListener(eventName: string, rowIndex: number, callback: Function): void;
    addRenderedRowListener(eventName: string, rowIndex: number, callback: Function): void;
    setQuickFilter(newFilter: any): void;
    selectIndex(index: any, tryMulti: any, suppressEvents: any): void;
    deselectIndex(index: number, suppressEvents?: boolean): void;
    selectNode(node: RowNode, tryMulti?: boolean, suppressEvents?: boolean): void;
    deselectNode(node: RowNode, suppressEvents?: boolean): void;
    selectAll(): void;
    deselectAll(): void;
    selectAllFiltered(): void;
    deselectAllFiltered(): void;
    recomputeAggregates(): void;
    sizeColumnsToFit(): void;
    showLoadingOverlay(): void;
    showNoRowsOverlay(): void;
    hideOverlay(): void;
    isNodeSelected(node: any): any;
    getSelectedNodesById(): {
        [nodeId: number]: RowNode;
    };
    getSelectedNodes(): RowNode[];
    getSelectedRows(): any[];
    getBestCostNodeSelection(): any;
    getRenderedNodes(): RowNode[];
    ensureColIndexVisible(index: any): void;
    ensureColumnVisible(key: string | Column): void;
    ensureIndexVisible(index: any, position?: string): void;
    ensureNodeVisible(comparator: any, position?: string): void;
    forEachLeafNode(callback: (rowNode: RowNode) => void): void;
    forEachNode(callback: (rowNode: RowNode) => void): void;
    forEachNodeAfterFilter(callback: (rowNode: RowNode) => void): void;
    forEachNodeAfterFilterAndSort(callback: (rowNode: RowNode) => void): void;
    getFilterApiForColDef(colDef: any): any;
    getFilterInstance(key: string | Column): IFilterComp;
    getFilterApi(key: string | Column): IFilterComp;
    destroyFilter(key: string | Column): void;
    getColumnDef(key: string | Column): ColDef;
    onFilterChanged(): void;
    onSortChanged(): void;
    setSortModel(sortModel: any): void;
    getSortModel(): {
        colId: string;
        sort: string;
    }[];
    setFilterModel(model: any): void;
    getFilterModel(): any;
    getFocusedCell(): GridCell;
    clearFocusedCell(): void;
    setFocusedCell(rowIndex: number, colKey: string | Column, floating?: string): void;
    setHeaderHeight(headerHeight: number): void;
    setGroupHeaderHeight(headerHeight: number): void;
    setFloatingFiltersHeight(headerHeight: number): void;
    setPivotGroupHeaderHeight(headerHeight: number): void;
    setPivotHeaderHeight(headerHeight: number): void;
    showToolPanel(show: any): void;
    isToolPanelShowing(): boolean;
    doLayout(): void;
    resetRowHeights(): void;
    setGroupRemoveSingleChildren(value: boolean): void;
    setGroupRemoveLowestSingleChildren(value: boolean): void;
    onRowHeightChanged(): void;
    getValue(colKey: string | Column, rowNode: RowNode): any;
    addEventListener(eventType: string, listener: Function): void;
    addGlobalListener(listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    removeGlobalListener(listener: Function): void;
    dispatchEvent(event: AgEvent): void;
    destroy(): void;
    resetQuickFilter(): void;
    getRangeSelections(): RangeSelection[];
    camelCaseToHumanReadable(camelCase: string): string;
    addRangeSelection(rangeSelection: AddRangeSelectionParams): void;
    clearRangeSelection(): void;
    copySelectedRowsToClipboard(includeHeader: boolean, columnKeys?: (string | Column)[]): void;
    copySelectedRangeToClipboard(includeHeader: boolean): void;
    copySelectedRangeDown(): void;
    showColumnMenuAfterButtonClick(colKey: string | Column, buttonElement: HTMLElement): void;
    showColumnMenuAfterMouseClick(colKey: string | Column, mouseEvent: MouseEvent | Touch): void;
    tabToNextCell(): boolean;
    tabToPreviousCell(): boolean;
    stopEditing(cancel?: boolean): void;
    startEditingCell(params: StartEditingCellParams): void;
    addAggFunc(key: string, aggFunc: IAggFunc): void;
    addAggFuncs(aggFuncs: {
        [key: string]: IAggFunc;
    }): void;
    clearAggFuncs(): void;
    updateRowData(rowDataTransaction: RowDataTransaction): RowNodeTransaction;
    insertItemsAtIndex(index: number, items: any[], skipRefresh?: boolean): void;
    removeItems(rowNodes: RowNode[], skipRefresh?: boolean): void;
    addItems(items: any[], skipRefresh?: boolean): void;
    refreshVirtualPageCache(): void;
    refreshInfinitePageCache(): void;
    refreshInfiniteCache(): void;
    purgeVirtualPageCache(): void;
    purgeInfinitePageCache(): void;
    purgeInfiniteCache(): void;
    purgeEnterpriseCache(route?: string[]): void;
    getVirtualRowCount(): number;
    getInfiniteRowCount(): number;
    isMaxRowFound(): boolean;
    setVirtualRowCount(rowCount: number, maxRowFound?: boolean): void;
    setInfiniteRowCount(rowCount: number, maxRowFound?: boolean): void;
    getVirtualPageState(): any;
    getInfinitePageState(): any;
    getCacheBlockState(): any;
    checkGridSize(): void;
    getFirstRenderedRow(): number;
    getFirstDisplayedRow(): number;
    getLastRenderedRow(): number;
    getLastDisplayedRow(): number;
    getDisplayedRowAtIndex(index: number): RowNode;
    getDisplayedRowCount(): number;
    paginationIsLastPageFound(): boolean;
    paginationGetPageSize(): number;
    paginationSetPageSize(size: number): void;
    paginationGetCurrentPage(): number;
    paginationGetTotalPages(): number;
    paginationGetRowCount(): number;
    paginationGoToNextPage(): void;
    paginationGoToPreviousPage(): void;
    paginationGoToFirstPage(): void;
    paginationGoToLastPage(): void;
    paginationGoToPage(page: number): void;
}
