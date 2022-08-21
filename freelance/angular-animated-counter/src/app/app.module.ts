import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AnimatedDigitComponent } from "../animated/animated-digit.component";

@NgModule({
  declarations: [AppComponent, AnimatedDigitComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
