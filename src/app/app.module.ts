import { SummaryPipe } from './components/summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesService } from './components/courses.service';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { PanelComponent } from './components/panel/panel.component';
import { LikeComponent } from './components/like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './components/zippy/zippy.component';
import { ContactComponent } from './components/contact/contact.component';
import { CourseassignComponent } from './components/courseassign/courseassign.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { NewcourseformComponent } from './components/newcourseform/newcourseform.component';
import { NewpasswordComponent } from './components/newpassword/newpassword.component';
import { PostscomponentsComponent } from './components/postscomponents/postscomponents.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactComponent,
    CourseassignComponent,
    SignupFormComponent,
    NewcourseformComponent,
    NewpasswordComponent,
    PostscomponentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
