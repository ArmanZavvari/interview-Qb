# Interview Task
#### _Questionnaire_

Swagger: (http://rezayari.ir:5050/swagger/index.html)

### _Endpoints:_
- /Auth/Login
- /Questionnaire/GetQuestionnaire

### _pages:_
- login (call login api)
- questionnaire (call second api and render them)

### _description:_
First, call the login endpoint using your credentials (username and password) to obtain a token required for accessing protected endpoints.
Next, call the second endpoint to retrieve an array of questions. Render these questions based on their order and type. Capture user answers and store them in the 'value' property of each choice.
For example, set boolean values for choices with checkbox types.
Each choice object includes a 'deleteQuestionIds' property. If a user answers or selects this choice, skip the associated questions and do not render them when navigating to the next button.
You are provided with an enum that contains the types of questions, located in the 'types' folder.


