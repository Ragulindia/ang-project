import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  @Input() custom_property: { pro_type: string, pro_name: string, pro_content: string } =
    {
      pro_type: ' str',
      pro_name: ' ragul',
      pro_content: ' this is custom property'
    }

  constructor() { }

  ngOnInit(): void {
  }

}
