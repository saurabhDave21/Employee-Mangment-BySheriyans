 const  employees=[
      {
        "id": 1,
        "firstname": "Saurabh",
        "email": "s@gmail.com",
        "password": "123",
        "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "title": "Fix homepage bug",
            "description": "Resolve layout shift on homepage banner",
            "date": "2025-08-20",
            "category": "Bug",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Prepare report",
            "description": "Generate weekly performance report",
            "date": "2025-08-22",
            "category": "Report",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Client meeting",
            "description": "Zoom call with client about project updates",
            "date": "2025-08-25",
            "category": "Meeting",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "firstname": "Bhagya",
        "email": "Bhagya6960@.com",
        "password": "123",
        "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 1
        },
        "tasks": [
          {
            "title": "Design new logo",
            "description": "Create vector logo for marketing team",
            "date": "2025-08-18",
            "category": "Design",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Social media plan",
            "description": "Draft content plan for September",
            "date": "2025-08-24",
            "category": "Marketing",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Fix email template",
            "description": "Correct footer issue in email newsletter",
            "date": "2025-08-26",
            "category": "Bug",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          },
          {
            "title": "Review ads",
            "description": "Check performance of ad campaigns",
            "date": "2025-08-27",
            "category": "Analysis",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "firstname": "Rohit",
        "email": "employee3@example.com",
        "password": "123",
        "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "title": "Code review",
            "description": "Review pull request #42",
            "date": "2025-08-19",
            "category": "Development",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Write unit tests",
            "description": "Add coverage for new API endpoints",
            "date": "2025-08-23",
            "category": "Testing",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Optimize queries",
            "description": "Improve DB performance on reports module",
            "date": "2025-08-25",
            "category": "Database",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "firstname": "Neha",
        "email": "employee4@example.com",
        "password": "123",
        "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 1
        },
        "tasks": [
          {
            "title": "Onboard intern",
            "description": "Guide new intern on project setup",
            "date": "2025-08-21",
            "category": "HR",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Create wireframes",
            "description": "Design wireframes for new dashboard",
            "date": "2025-08-22",
            "category": "Design",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Feedback session",
            "description": "Team feedback for Q2 goals",
            "date": "2025-08-26",
            "category": "Meeting",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Fix broken link",
            "description": "Update broken links on blog page",
            "date": "2025-08-20",
            "category": "Bug",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 5,
        "firstname": "Suman",
        "email": "employee5@example.com",
        "password": "123",
        "taskNumbers": {
          "active": 3,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "title": "Backup database",
            "description": "Full backup of production DB",
            "date": "2025-08-19",
            "category": "Database",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Security audit",
            "description": "Check for vulnerabilities",
            "date": "2025-08-23",
            "category": "Security",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Update docs",
            "description": "Revise API documentation",
            "date": "2025-08-25",
            "category": "Documentation",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Server patching",
            "description": "Apply OS patches on staging server",
            "date": "2025-08-27",
            "category": "Maintenance",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      }
    ]
  
  

const admin= [
  {
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
]

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    
    return {employees,admin}
}
  