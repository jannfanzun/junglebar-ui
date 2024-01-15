import { NgIf } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, NgIf],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss'
})
export class BookingFormComponent implements OnInit {
  contactForm!: FormGroup;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      const formSubmitUrl = 'https://formsubmit.co/ajax/jannandrea.f@gmail.com';

      this.http.post(formSubmitUrl, formData)
        .subscribe(
          response => {
            console.log('Form submitted successfully', response);

              this.successMessage = 'YEEEHAA WELCOME TO THE JUNGLE!';

            this.contactForm.reset();
          },
          error => {
            console.error('Error submitting form', error);
          }
        );
    }
  }
}