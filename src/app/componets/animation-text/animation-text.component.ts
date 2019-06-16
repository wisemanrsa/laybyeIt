import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-animation-text",
  templateUrl: "./animation-text.component.html",
  styleUrls: ["./animation-text.component.scss"]
})
export class AnimationTextComponent implements OnInit {
  @Input()
  text: string;

  constructor() {}

  ngOnInit() {}
}
