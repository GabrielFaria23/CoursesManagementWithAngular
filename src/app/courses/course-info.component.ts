import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './course.service';
import { Course } from './couse';

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

    course: Course;

    constructor(private route: ActivatedRoute,
                private courseService: CourseService){}

    ngOnInit(): void {
        //+ utilizado para coverter o valor retornado id em um number
        this.courseService.retrieveByID(+this.route.snapshot.paramMap.get('id')).subscribe({
            next: course => this.course = course,
            error: err => console.log("Error: ", err)
        }); 

    }

    save(): void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with success', course),
            error: err => console.log('Error: ', err)
        });
    }

}