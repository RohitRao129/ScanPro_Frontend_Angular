import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  password: string = '';
  confirmPassword: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  handleSubmit(event: Event): void {
    event.preventDefault();

    // Check if passwords match
    if (this.password !== this.confirmPassword) {
      this.error = "Passwords do not match";
      return;
    }

    // Reset error state
    this.error = '';

    // Send reset password request
    const token = new URLSearchParams(window.location.search).get('token');
    this.http.post('http://localhost:6767/api/reset/Password', {
      token: token,
      newPassword: this.password
    }).subscribe(
      (response: any) => {
        // Password reset successful
        alert("Password reset successfully!");
        // Redirect to login page or any other page after successful reset
        setTimeout(() => {
          this.router.navigate(['/authpage']);
        }, 3500); // Wait for 3.5 seconds before redirecting
      },
      (error: any) => {
        // Password reset failed
        console.error("Error:", error);
        this.error = "Failed to reset password";
      }
    );
  }
}
