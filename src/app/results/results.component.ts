import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  state$;
  constructor(public activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));
    console.log(window.history.state);
  }

}
