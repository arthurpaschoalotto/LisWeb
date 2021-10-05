import { Component } from '@angular/core';
import { TreeControl } from '@angular/cdk/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // TODO: #8 Carece de atualizacao?
  title = 'germes';
}
