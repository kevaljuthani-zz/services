import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees() {
    return [
      { "id": 1, "name": "Rohit Sharma", "age": 32 },
      { "id": 2, "name": "Shikhar Dhawan", "age": 31 },
      { "id": 3, "name": "Ambati Rayudu", "age": 34 },
      { "id": 4, "name": "Ajinkya Rahane", "age": 32 },
      { "id": 5, "name": "Yuvraj Singh", "age": 36 }
    ];
  }
  constructor() { }
}
