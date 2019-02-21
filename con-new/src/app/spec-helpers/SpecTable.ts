export class SpecTable {
  TableRef: Element;
  ExpectedValuesTab: string[];
  missedExpectations = [];
  headerValues = [];

  constructor(TableRef: Element, ExpectedValuesTab: string[]) {
    this.TableRef = TableRef;
    this.ExpectedValuesTab = ExpectedValuesTab;


    this.getHeadRowTable();
    this.chengeOnText();
    this.removeEmpty();
    this.compareLength();
    this.compareTextHeader();
    this.showFail();
  }
  getHeadRowTable(): void {
    this.getArrFromEl(this.TableRef, '.mat-header-row').forEach(row => {
      this.headerValues.push(this.getHeaderCells(row));
    });
  }
  getHeaderCells(row: Element): Element[] {
    const  headCells = this.getArrFromEl(row, 'th' );
    return headCells ? headCells : this.getArrFromEl(row, 'mat-header-cell' );
  }
  compareLength(): void {
    this.headerValues[0].length !== this.ExpectedValuesTab.length ?
      this.addMIssedExpectations(`Expected ${this.ExpectedValuesTab.length} total rows but got ${this.headerValues[0].length}`) : null;
  }
  chengeOnText(): void {
    this.headerValues[0] = this.headerValues[0].map(elHtml => elHtml.textContent.trim());
  }
  removeEmpty(): void {
    this.headerValues[0] = this.headerValues[0].filter(headerText => headerText);
  }
  compareTextHeader(): void {
    this.ExpectedValuesTab.forEach((expectHeaderText, index) => {
      this.headerValues[0].indexOf(expectHeaderText) !== index ?
        this.addMIssedExpectations(`Expected cell contents to be ${expectHeaderText} but was ${this.headerValues[0][index]}`): null;
    });
  }
  addMIssedExpectations(message: string): void {
    this.missedExpectations.push(message);
  }
  showFail(): void {
     this.missedExpectations.length ? fail(this.missedExpectations.join('\n')) : null;
  }
  getArrFromEl(ref: Element, selector: string ): Element[] {
    return Array.from(ref.querySelectorAll(selector));
  }
}
