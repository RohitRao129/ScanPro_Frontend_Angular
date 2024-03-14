import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {
  showConfetti: boolean = true;
  userData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchUserData();
    setTimeout(() => this.showConfetti = false, 7000); // Confetti duration: 7 seconds
  }

  fetchUserData(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      axios.get(`http://localhost:6767/api/email/verify?token=${token}`)
        .then(response => {
          if (response.status !== 200) {
            throw new Error('Failed to fetch user data');
          }
          this.userData = response.data;
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    });
  }
}
