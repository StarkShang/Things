import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ThingComponent } from "./components/categories/thing/thing.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { SignupComponent } from "./components/signup/signup.component";
import { SigninComponent } from "./components/signin/signin.component";
import { BookComponent } from "./components/categories/book/book.component";
import { EditTemplateComponent } from "./components/edit-template/edit-template.component";

const routes: Routes = [
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "templates/edit", component: EditTemplateComponent },
  { path: "categories/books", component: BookComponent },
  { path: "categories/:category", component: ThingComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
