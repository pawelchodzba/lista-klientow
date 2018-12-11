import { Component, OnInit } from '@angular/core';
import {ScrollDispatcher} from '@angular/cdk/scrolling';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { map } from 'rxjs/operators';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  private readonly SHRINK_TOP_SCROLL_POSITION = 0;
  shrinkToolbar = false;

  constructor(private scrollDispatcher: ScrollDispatcher,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.scrollDispatcher.scrolled()
      .pipe(map((event: CdkScrollable) => this.getScrollPosition(event)))
      .subscribe(scrollTop => this.ngZone.run(() => this.shrinkToolbar = scrollTop > this.SHRINK_TOP_SCROLL_POSITION ? true : false));
  }

  getScrollPosition(event) {
    if (event) {
      return event.getElementRef().nativeElement.scrollTop;
    } else {
      return window.scrollY;
    }
  }



}
