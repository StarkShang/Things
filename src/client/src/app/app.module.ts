import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "./routing.module";
import { ThingComponent } from "./components/categories/thing/thing.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { BookComponent } from "./components/categories/book/book.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule, MatIconModule, MatOptionModule, MatSelectModule } from "@angular/material";
import { MatPaginatorModule, MatInputModule, MatCardModule, MatButtonModule, MatListModule, MatChipsModule, MatFormFieldModule } from "@angular/material";
import { StringArrayConcatPipe } from "./pipes/StringArrayConcatPipe";
import { EditTemplateComponent } from "./components/edit-template/edit-template.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThingComponent,
    PageNotFoundComponent,
    SigninComponent,
    SignupComponent,
    BookComponent,
    StringArrayConcatPipe,
    EditTemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
